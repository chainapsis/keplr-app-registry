import { readdirSync, readFileSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";

interface SortConfig {
  pinnedApps: string[];
  defaultSort: "alphabetical";
}

interface AppEntry {
  appCategory: string;
  appName: string;
  appSummary: string;
  appWebsiteUrl: string;
  externalUrls: Record<string, string>;
  appWebsiteUrlsByChainId?: Record<string, string>;
  appIconUrl: string;
}

(async function main() {
  const sortConfig: SortConfig = JSON.parse(
    readFileSync("./sort-config.json", "utf-8")
  );

  const appDirectoryNameList: string[] = readdirSync("./apps", {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const appListWithDirName = await Promise.all(
    appDirectoryNameList.map(async (appDirectoryName) => {
      const appFile = await readFile(
        `./apps/${appDirectoryName}/app.json`,
        "utf-8"
      );
      const app = JSON.parse(appFile);
      return {
        dirName: appDirectoryName,
        entry: {
          ...app,
          appIconUrl: `https://raw.githubusercontent.com/chainapsis/keplr-app-registry/main/apps/${appDirectoryName}/icon.png`,
        } as AppEntry,
      };
    })
  );

  // Separate pinned apps from the rest
  const pinnedApps: (AppEntry | undefined)[] = sortConfig.pinnedApps.map(
    (pinnedDirName) => {
      const found = appListWithDirName.find(
        (item) => item.dirName === pinnedDirName
      );
      return found?.entry;
    }
  );

  const otherApps = appListWithDirName.filter(
    (item) => !sortConfig.pinnedApps.includes(item.dirName)
  );

  // Sort non-pinned apps alphabetically by appName
  otherApps.sort((a, b) => a.entry.appName.localeCompare(b.entry.appName));

  // Combine: pinned first (in config order), then alphabetical rest
  const sortedList = [
    ...pinnedApps.filter((app): app is AppEntry => app !== undefined),
    ...otherApps.map((item) => item.entry),
  ];

  writeFileSync(
    "./app-list.json",
    JSON.stringify({ list: sortedList }, null, 4)
  );
})();
