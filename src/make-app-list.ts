import { readdirSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";

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
  writeFileSync("./app-list.json", JSON.stringify({ list: appList }, null, 4));
})();
