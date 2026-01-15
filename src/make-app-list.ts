import { readdirSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";

// Featured apps appear first in this exact order
const FEATURED_APPS_ORDER = [
  "Osmosis",
  "IBC Fun",
  "Squid Router",
  "Civitia",
  "ICNS",
];

(async function main() {
  const appDirectoryNameList: string[] = readdirSync("./apps");
  const appList = await Promise.all(
    appDirectoryNameList.map(async (appDirectoryName) => {
      const appFile = await readFile(
        `./apps/${appDirectoryName}/app.json`,
        "utf-8"
      );
      const app = JSON.parse(appFile);
      return {
        ...app,
        appIconUrl: `https://raw.githubusercontent.com/chainapsis/keplr-app-registry/main/apps/${appDirectoryName}/icon.png`,
      };
    })
  );

  // Sort apps: featured apps first (in order), then remaining apps alphabetically
  const sortedAppList = appList.sort((a, b) => {
    const aFeaturedIndex = FEATURED_APPS_ORDER.indexOf(a.appName);
    const bFeaturedIndex = FEATURED_APPS_ORDER.indexOf(b.appName);

    // Both are featured apps - sort by featured order
    if (aFeaturedIndex !== -1 && bFeaturedIndex !== -1) {
      return aFeaturedIndex - bFeaturedIndex;
    }

    // Only a is featured - a comes first
    if (aFeaturedIndex !== -1) {
      return -1;
    }

    // Only b is featured - b comes first
    if (bFeaturedIndex !== -1) {
      return 1;
    }

    // Neither are featured - sort alphabetically (case-insensitive)
    return a.appName.toLowerCase().localeCompare(b.appName.toLowerCase());
  });

  writeFileSync(
    "./app-list.json",
    JSON.stringify({ list: sortedAppList }, null, 4)
  );
})();
