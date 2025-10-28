---
title: Development Setup and Commands
description: Run locally, edit safely, and find the fastest feedback loops.
---

Local commands (from repository root):

- Start dev server: npm start
- Build static site: npm run build
- Serve local build: npm run serve
- Deploy to GitHub Pages: npm run deploy

Notes:

- Dev server runs at http://localhost:3000 by default; if busy, it will offer 3001 and print the URL.
- Build output goes to the build/ directory.
- Broken links are warnings (onBrokenLinks=warn) to maximize velocity.

When time-limited on a public computer:

- Use the published site URL (see Publishing & Access) to browse docs without building locally.
- Use the Sync Pack (this section) as your “jump table” to the most important information.

Editing guardrails we follow in this repo:

- Don’t remove comments unless removing the code they belong to.
- Clean whitespace; leave one empty line at end of file.
- Prefer package managers (npm) over manual edits to config files when adding deps.

Quality-of-life tips:

- Keep a split view: left (sidebar navigation), right (target page). Use browser search (/) on pages.
- Use “Read Docs” for core concepts; use “SyncDocs 2025-10-24” to move fast on the front-end topics during work release hours.

