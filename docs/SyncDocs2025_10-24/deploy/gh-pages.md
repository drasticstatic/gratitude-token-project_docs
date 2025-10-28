---
title: Publish to GitHub Pages
description: One-command deploy and the URLs to bookmark for quick access.
---

Project is configured for GitHub Pages deployment from the gh-pages branch.

Base config (docusaurus.config.js):

- url: https://drasticstatic.github.io
- baseUrl: /gratitude-token-project_docs/
- organizationName: drasticstatic
- projectName: gratitude-token-project_docs
- deploymentBranch: gh-pages

Deploy from your machine:

1) Build & push in one step

- npm run deploy

This runs a fresh build and pushes to the gh-pages branch.

2) Verify the site is live

- Open: https://drasticstatic.github.io/gratitude-token-project_docs/
- If you see an older version, wait 1–2 minutes and hard-refresh (Shift+Reload)

Troubleshooting:

- If deploy prompts for GitHub auth, sign in and re-run the command
- If links 404 under a different baseUrl, ensure the deployed site path matches baseUrl
- You can always view the last successful local build at build/index.html

Public-computer friendly:

- Bookmark: https://drasticstatic.github.io/gratitude-token-project_docs/
- Use this Sync Pack as your rapid navigator

