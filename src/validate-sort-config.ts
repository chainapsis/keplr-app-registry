import { readFileSync, readdirSync } from "fs";

(function main() {
  const configFile = readFileSync("./sort-config.json", "utf-8");
  const config = JSON.parse(configFile);

  if (!Array.isArray(config.pinnedApps)) {
    throw new Error("pinnedApps must be an array");
  }

  // Validate pinnedApps references exist in apps/ directory
  const appDirs = readdirSync("./apps");
  for (const pinnedDir of config.pinnedApps) {
    if (!appDirs.includes(pinnedDir)) {
      throw new Error(
        `Pinned app directory "${pinnedDir}" does not exist in ./apps/`
      );
    }
  }

  // Check for duplicates
  const unique = new Set(config.pinnedApps);
  if (unique.size !== config.pinnedApps.length) {
    throw new Error("Duplicate entries found in pinnedApps");
  }

  console.log("Sort config validation passed.");
})();
