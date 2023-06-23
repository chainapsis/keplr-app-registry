import sizeOf from "image-size";

(async function main() {
  const appIconFilePath = process.argv[2];
  if (!appIconFilePath) {
    throw new Error("No file path provided");
  }

  const appIconDimensions = await sizeOf(appIconFilePath);
  if (
    appIconDimensions.width === undefined ||
    appIconDimensions.height === undefined
  ) {
    throw new Error("App icon dimensions could not be determined");
  }

  if (appIconDimensions.width > 256 || appIconDimensions.height > 256) {
    throw new Error("App icon dimensions are too large");
  }

  console.log("Validation successful");
})();
