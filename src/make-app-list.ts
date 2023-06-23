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
      return app;
    })
  );
  writeFileSync("./app-list.json", JSON.stringify({ list: appList }));
})();
