# Guidelines for Submitting Your App to Keplr Dashboard

This page outlines the basic information that is required for registering your Interchain application to Keplr dashboard. Please note that your request does not always guarantee its display on the dashboard; upon your submission, Keplr team will go through a minimal verification process to see if there is any security issues or missing information.

Once approved, Keplr Dashboard will show your application in its Explore page, with the information you've submitted.

## App Submission Form (Example)
Please note that you need to comply with our requirements when filling out the form. See the next section to learn the details.
```json
{
  "appCategory": "DeFi",
  "appName": "Osmosis",
  "appSummary": "The largest Interchain DEX and cross-chain AMM.",
  "appIconUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
  "appWebsiteUrl": "https://app.osmosis.zone",
  "externalUrls": {
    "twitter": "https://twitter.com/osmosiszone",
    "github": "https://github.com/osmosis-labs",
    "discord": "https://discord.com/invite/osmosis"
  }
}
```

Requirement Details
- `appCategory`: Please select ONE from `DeFi`, `Social`, `NFT`, `DAO`, `Tool`, and `Liquid Staking` (case-sensitive!). Your category should be the one that best - describes the main function or subject matter of your application. 
- `appName`: the name of your application.
- `appSummary`: Write out a one-liner (or two at max) to introduce your application. It won't be fully displayed in the box if the intro is too long.
- `appIconUrl`: Provide the URL to the image file of your app's icon. The file can be uploaded in the `images` folder in our repo. We recommend that the image file is in 256x256 px resolution.
- `appWebsiteUrl`:  Provide the link to your app's website.
- `externalUrls`: Provide the links to your app's official social accounts. Currently we only support: `Twitter`, `Github`, and `Discord`.
