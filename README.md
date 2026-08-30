<!--
This README file provides instructions for setting up, developing, building, and deploying a website built using Docusaurus, a modern static website generator.

Sections include:
- Setup Guide: Links to detailed setup instructions.
- Installation: Command to install dependencies using Yarn.
- Local Development: Command to start a local development server with live reload.
- Build: Command to generate static content for deployment.
- Deployment: Commands for deploying the website, with options for using SSH or GitHub Pages.

Refer to the Docusaurus Setup Guide for additional details on maintaining the site.
-->
# Website for Gratitude Token Project Documentation
## Visit the documentation site here: 👉 [Gratitude Token Project Docs](https://drasticstatic.github.io/gratitude-token-project_docs/)

[![Deploy](https://github.com/drasticstatic/gratitude-token-project_docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/drasticstatic/gratitude-token-project_docs/actions/workflows/deploy.yml) [![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-3ECC5F)](https://docusaurus.io/) [![Live Preview](https://img.shields.io/badge/Live%20Preview-testPublish__2026--08--28-a78bfa)](https://drasticstatic.github.io/gratitude-token-project_testPublish_2026-08-28/)

- This website was inititalized using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Table of Contents

- [Related Links](#related-links)
- [Detailed Setup Guide](#detailed-setup-guide)
- [Installation](#general-installation-provided-by-docusaurus-using-yarn)
- [Local Development](#local-development)
- [Build](#build)
- [Deployment](#deployment)

## Related Links

- 🕹️ **Live dApp preview:** [gratitude-token-project_testPublish_2026-08-28](https://drasticstatic.github.io/gratitude-token-project_testPublish_2026-08-28/) — the current public GitHub Pages preview of the app this documentation covers
- 📦 **Preview source:** [github.com/drasticstatic/gratitude-token-project_testPublish_2026-08-28](https://github.com/drasticstatic/gratitude-token-project_testPublish_2026-08-28)

<br>

# Detailed Setup Guide

Please refer to our [Docusaurus Setup Guide](Docusaurus%20%7C%20SetupGuide.md) for detailed instructions on setting up and maintaining this documentation site.

<br><br><br>

## General Installation provided by Docusaurus using yarn:
```bash
yarn
```
### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# To publish to GitPages:

1. npm run build

2. USE_SSH=true npm run deploy
    - Other option: GIT_USER=drasticstatic npm run deploy