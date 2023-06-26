import { readFileSync } from "fs";
import Joi from "joi";

const appCategoryAllowList = [
  "DeFi",
  "Social",
  "NFT",
  "DAO",
  "Tool",
  "Liquid Staking",
];

const appSchema = Joi.object({
  appCategory: Joi.string()
    .valid(...appCategoryAllowList)
    .required(),
  appName: Joi.string().required(),
  appSummary: Joi.string().required(),
  appWebsiteUrl: Joi.string().uri().required(),
  externalUrls: Joi.object({
    github: Joi.string(),
    twitter: Joi.string(),
    discord: Joi.string(),
  })
    .min(1)
    .required(),
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
