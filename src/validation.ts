import { readFileSync } from "fs";
import Joi from "joi";
import sizeOf from "image-size";

const appListSchema = Joi.array().items(
  Joi.object({
    appCategory: Joi.string().required(),
    appName: Joi.string().required(),
    appSummary: Joi.string().required(),
    appIconUrl: Joi.string().required(),
    appWebsiteUrl: Joi.string().required(),
    externalUrls: Joi.object({
      github: Joi.string(),
      twitter: Joi.string(),
      discord: Joi.string(),
    }),
  })
);

(async () => {
  const filePath = process.argv[2];
  if (!filePath) {
    throw new Error("No file path provided");
  }

  const file = readFileSync(filePath, "utf-8");
  const appList = JSON.parse(file).list;

  const { error } = appListSchema.validate(appList);
  if (error) {
    throw new Error(error.message);
  }

  try {
    await Promise.all(
      appList.map(async (app: any) => {
        const appIconDimensions = await sizeOf(app.appIconUrl);
        if (
          appIconDimensions.width === undefined ||
          appIconDimensions.height === undefined
        ) {
          throw new Error("App icon dimensions could not be determined");
        }

        if (appIconDimensions.width > 256 || appIconDimensions.height > 256) {
          throw new Error("App icon dimensions are too large");
        }
      })
    );
    console.log("Validation successful");
  } catch (error) {
    throw error;
  }
})();
