# Guidelines for Submitting Your App to Keplr Dashboard

This page outlines the basic information that is required for registering your Interchain application to Keplr dashboard. Please note that your request does not always guarantee its display on the dashboard; upon your submission, Keplr team will go through a minimal verification process to see if there is any security issues or missing information.

Once approved, Keplr Dashboard will show your application in its Explore page, with the information you've submitted.

## App Registration Directory Structure

Here’s an overview of the structure of the directory. Please provide the information and files complying with the requirements.

```
.
├── apps
│     ├── osmosis              # Name the folder to match the name of your app
│     │     ├── app.json       # App information in JSON file (file name should be `app.json`)
│     │     └── icon.png       # App icon in image file (png, 256x256 or smaller, file name should be `icon.png`)
│     ├── icns
│     └── ...
└── ...

```

## App Information JSON File Form (Example)

Please note that you need to comply with our requirements when filling out the form. See the next section to learn the details.

```json
{
  "appCategory": "DeFi",
  "appName": "Osmosis",
  "appSummary": "The largest Interchain DEX and cross-chain AMM.",
  "appWebsiteUrl": "https://app.osmosis.zone",
  "externalUrls": {
    "twitter": "https://twitter.com/osmosiszone",
    "github": "https://github.com/osmosis-labs",
    "discord": "https://discord.com/invite/osmosis"
  },
  // Optional
  "appWebsiteUrlsByChainId": {
    "osmosis-1": "https://app.osmosis.zone"
  }
}
```

### App Information Details

- `appCategory`: Please select ONE from `DeFi`, `Social`, `NFT`, `DAO`, `Tool`, and `Liquid Staking` (case-sensitive!). Your category should be the one that best describes the main function or subject matter of your application.
- `appName`: The name of your application.
- `appSummary`: Write out a one-liner (or two at max) to introduce your application. It won't be fully displayed in the box if the intro is too long.
- `appWebsiteUrl`: Provide the link to your app's website.
- `externalUrls`: Provide the links to your app's official social accounts. Currently we only support: `Twitter`, `Github`, and `Discord`.
- `appWebsiteUrlsByChainId`: Provide the links if app's website link is different depending on the chain your app supports.

## NOTE:

- Please double-check if the app information file is in JSON format.
- App icon should be in PNG format in 256x256px or smaller resolution. Please also note that the images will be automatically cropped into a circle to be displayed on Keplr Dashboard.
- DON'T UPDATE `app-list.json` DIRECTLY. It's auto-generated file from reading files in `apps/` for getting apps info easily.
