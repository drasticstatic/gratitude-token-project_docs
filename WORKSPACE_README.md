# Ethereal Offering Docs Workspace Guide

A quick, copy-paste friendly guide to add pages, blogs, run locally, and publish.

## Prereqs
- Node 18+
- Git access to drasticstatic/gratitude-token-project_docs

## Run Locally
```
npm ci
npm run start
```
- Starts dev server with live reload at http://localhost:3000

## Build & Publish
```
npm run build
USE_SSH=true npm run deploy
```
- Builds to `build/` and pushes to `gh-pages` branch for GitHub Pages
- Live at: https://drasticstatic.github.io/gratitude-token-project_docs/

## Add a New Doc Page
1) Pick a folder under `docs/` (or create one). Example:
   - `docs/research-and-development/specialized/nfts/`
2) Create a `.md` file with frontmatter:
```
---
title: My New Doc
description: One-liner to help search and previews
sidebar_position: 5
---

# My New Doc

Write Markdown normally. Avoid raw JSX (`<>`) and unescaped braces (`{}`) in MDX.
```
3) The sidebar is auto-generated from folders and `_category_.json` files.

## Add a New Category (Sidebar)
Create `_category_.json` in the folder:
```
{
  "label": "Spiritual",
  "position": 3,
  "collapsed": false
}
```

## Add a Blog Post
There are TWO blogs:
- Community updates → `community/` at route `/community`
- Learn the Code (tutorials) → `learn/` at route `/learn`

1) Create a file in the appropriate folder with date prefix:
```
community/2025-03-01-community-update.md
```
2) Use blog frontmatter:
```
---
slug: community-update-march-2025
title: Community Update — March 2025
authors: [christopher]
tags: [updates, treasury]
---

Summary paragraph…
```
3) Images: put under `static/img/` and reference `/img/filename.png`

## Add Images & Assets
- Put shared images into `static/img/`
- Use in Markdown: `![Alt text](/img/name.png)`

## Home Page Enhancements
- Sparkly Living Offering modal button
- Agentic site search section (placeholder) on homepage
- Navbar “Search” link jumps to the search section on home

## Site-wide Search (Phase 1: Local, keyword)
- We plan to add `@easyops-cn/docusaurus-search-local` for local full-text search.
- Installing dependencies requires approval. When approved, run:
```
npm install --save @easyops-cn/docusaurus-search-local
```
- Then in `docusaurus.config.js` add under `themes`:
```
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
    },
  ],
],
```
- A search bar will then appear in the navbar automatically or via a nav item of type `search`.

## Mobile TOC + Blog
- We enabled a mobile Table of Contents and ensured blog lists render full width.
- If something doesn’t show on small screens, test in dev tools responsive mode.

## MDX Gotchas (Important!)
- Avoid raw `<` and `>` in text (e.g., write “less than 5%” instead of `<5%`).
- Escape code-like braces inside MDX: use code fences or backticks for `{example}`.
- Prefer fenced code blocks for snippets.

## Common Paths
- Whitepaper: `docs/whitepaper/`
- R&D library: `docs/research-and-development/`
- Partners: `docs/partners/`
- Privacy Policy placeholder: `docs/privacy-policy.md`

## Commit Workflow
```
git checkout -b content/update-<topic>
git add -A
git commit -m "docs: add <topic>"
git push origin content/update-<topic>
```
- Open a PR to `main` and merge
- Then run build + deploy

## Troubleshooting
- Build fails with MDX error → check for raw JSX (`<>`) or braces in MD.
- Images not found → ensure they’re in `static/img/` and paths start with `/img/`.
- Sidebar missing → ensure folder has `_category_.json` or frontmatter `sidebar_position`.

## Roadmap Notes
- Phase 1: local keyword search (no external services)
- Phase 2: client vector search for semantics
- Phase 3: Agentic answers with citations

Questions? Add notes to `CONTENT_UPDATE_*.md` or open an issue.

