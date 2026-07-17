# Keplr App Registry

Guidelines for submitting your app to the Keplr Dashboard Explore page.

> **Note:** To ensure that the apps featured on our Explore page remain relevant and useful, we regularly review and update the app list based on user traction.

## Overview

This document outlines the requirements for registering your Interchain application to the Keplr Dashboard. Please note that submission does not guarantee display on the dashboard. The Keplr team will review each submission for security issues and completeness before approval.

Once approved, your application will appear on the Keplr Dashboard Explore page with the information you've submitted.

## Directory Structure

Create a folder for your app under the `apps/` directory with the following structure:

```
apps/
└── your-app-name/           # Folder name should match your app name (lowercase, hyphenated)
    ├── app.json             # App information (required)
    └── icon.png             # App icon (required)
```

## App Information (`app.json`)

Create an `app.json` file with the following structure:

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
  "appWebsiteUrlsByChainId": {
    "cosmoshub-4": "https://app.osmosis.zone/cosmos"
  }
}
```

### Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `appCategory` | Yes | One of: `DeFi`, `Social`, `NFT`, `DAO`, `Tool`, `Liquid Staking`, `Gaming` (case-sensitive) |
| `appName` | Yes | The display name of your application |
| `appSummary` | Yes | A brief description (1-2 sentences). Longer text may be truncated in the UI |
| `appWebsiteUrl` | Yes | The main URL of your application |
| `externalUrls` | Yes | At least one social link is required. Supported: `twitter`, `github`, `discord` |
| `appWebsiteUrlsByChainId` | No | Chain-specific URLs mapped by chain ID (e.g., `cosmoshub-4`) |

## App Icon (`icon.png`)

- **Format:** PNG
- **Size:** 256x256 pixels or smaller
- **Display:** Icons are automatically cropped to a circle on the dashboard

## App List Ordering

The generated `app-list.json` is ordered as follows:

1. **Pinned apps** appear first, in the order defined in `sort-config.json`
2. **All other apps** are sorted alphabetically by `appName`

> **Note:** Pinning is managed by the Keplr team.

## Important Notes

- Do **not** edit `app-list.json` directly — it is auto-generated from the `apps/` directory
- Ensure your `app.json` is valid JSON before submitting
- Double-check that your icon meets the format and size requirements
