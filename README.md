# Guidelines for Submitting Your App for Keplr Dashboard

This page outlines the basic information that is required for registering your Interchain application to Keplr dashboard. Please note that your request does not always guarantee its display in the dashboard; upon your submission, Keplr team will go through a minimal verification process to see if there is any security issues or missing information.

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
- `appIconUrl`: Provide the URL to the image file of your app's Icon. The file can be uploaded in `images` folder in our repo. the image file is in 256x256 px resolution recommended.
- `appWebsiteUrl`:  Provide the link to your app's website.
- `externalUrls`: links to your app's official social accounts. currently we only support: `Twitter`, `Github`, `Discord`
