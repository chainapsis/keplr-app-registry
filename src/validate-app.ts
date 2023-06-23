import { readFileSync } from "fs";
import Joi from "joi";

const appSchema = Joi.object({
  appCategory: Joi.string().required(),
  appName: Joi.string().required(),
  appSummary: Joi.string().required(),
  appWebsiteUrl: Joi.string().required(),
  externalUrls: Joi.object({
    github: Joi.string(),
    twitter: Joi.string(),
    discord: Joi.string(),
  }),
});

(async function main() {
  const appFilePath = process.argv[2];
  if (!appFilePath) {
    throw new Error("No file path provided");
  }

  const appFile = readFileSync(appFilePath, "utf-8");
  const app = JSON.parse(appFile);

  const { error } = appSchema.validate(app);
  if (error) {
    throw new Error(error.message);
  }

  console.log("Validation successful");
})();
