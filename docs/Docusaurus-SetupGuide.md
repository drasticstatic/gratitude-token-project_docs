# Docusaurus | SetupGuide
This document provides a comprehensive guide on setting up a documentation ecosystem for the Gratitude Token project
using Docusaurus and GitHub Pages.
It highlights the advantages of using Docusaurus over GitBook, explains the integration with GitHub Pages for
free hosting, and outlines the repository architecture for maintaining private and public documentation.

This workflow guide further explains how to use Docusaurus with GitHub Pages as a free, professional alternative to GitBook,
and documents an automated test deployment pipeline with a reusable deployment script
that publishes timestamped public preview repos for user testing abnd feedback with included step-by-step developer commands.

# Docusaurus + GitHub Pages Architecture
Docusaurus Documentation: https://docusaurus.io/docs<br>
Docusaurus GitHub: https://github.com/facebook/docusaurus<br>
GitHub Pages Documentation: https://docs.github.com/en/pages<br>
GitHub CLI (gh): https://cli.github.com/<br>
peaceiris/actions-gh-pages (GitHub Action for Pages): https://github.com/peaceiris/actions-gh-page<br>

## Why Use Docusaurus Over GitBook
GitBook’s free plan lacks Git Sync and collaboration integrations. Docusaurus offers a self-hosted, Markdown-based solution that’s open source and integrates directly with GitHub Pages for free. You retain complete control over content, structure, styling, versioning, and CI/CD pipelines.

Docusaurus is an open-source documentation generator maintained by Meta (formerly Facebook). It supports Markdown and integrates seamlessly with GitHub Pages, Netlify or Vercel for deployment. Ideal for developers comfortable with React and Node.js.

Best suited for teams with development resources, as it requires setup and maintenance.

---

## How GitHub Pages Fits In
GitHub Pages hosts static sites directly from GitHub repositories, making it ideal for Docusaurus deployment. Each site is accessible via your GitHub domain, for example:
`https://USERNAME.github.io/REPOSITORY_NAME`

This setup replicates GitBook’s publishing features with no hosting fees while keeping full control over updates and versioning.

## Workflow Summary
1. Write Markdown documentation locally in VS Code.
2. Commit and push updates to the public `_docs` repository.
3. GitHub Pages automatically redeploys the site.
4. Use [🧰 deployTest.sh](#automated-test-deployment-script) to periodically clone the private repo into `_testPublish_` for testing & user feedback
5. Use [🔁 SyncDocs.sh](#sync-docs-script) for docs repo to stay in sync with private repo.

---

## Benefits
- **100% free hosting**
- **Full Markdown and Git integration**
- **Real-time documentation updates**
- **Public transparency without exposing private code**
- **Ideal for DAOs, developer communities, and open projects**

---

## Summary
This multi-repo setup empowers teams to maintain evolving, transparent documentation using open tools. By combining Docusaurus, GitHub Pages, and strategic repo separation, you get the best of GitBook’s publishing experience with complete freedom and zero cost.

<br><br>

# 🧩 Architecture
## Overview
**Project:** Gratitude Token Documentation Ecosystem<br>
This guide explains how to use Docusaurus and GitHub Pages as a free and professional alternative to GitBook, enabling a full-featured documentation system for the Gratitude Token project.

| Repository | Visibility | Purpose |
|------------|-----------|--------|
| gratitude-token-project | 🔒 Private | Main working core development codebase (app, contracts, logic, integrations) |
| gratitude-token-project_docs | 🌐 Public | Docusaurus-powered GitBook-style documentation, whitepaper, roadmap, etc. (auto-hosted on GitHub Pages) |
| gratitude-token-project_testPublish_YYYY-MM-DD | 🌐 Public | Timestamped deployment snapshot cloned from the private main repo, used for public user testing + feedback (contains only built code or limited release) |

✅ This means:
- The docs repo lives independently, publicly visible and updated often.
- The private main repo continues development securely.
- When you’re ready for public testing, you copy code (manually or via a small script) into a new timestamped test-publish repo.
- Each _testPublish_YYYY-MM-DD acts like a versioned public preview or beta environment.

<br><br>

# ⚙️ Setup Guide (For This Exact Architecture)

## Step 1 — Public _docs Site (Permanent Documentation Hub) “GitBook replacement.”

### Prerequisites

• Node.js (LTS, 16+ or 18+) and npm installed. • Git installed and configured with your GitHub
account. • (Optional but recommended) GitHub CLI (gh) installed and authenticated.
Terminal Commands — Create the site and preview locally

- Git installed configured with your GitHub account with the repository created
  - https://git-scm.com/
- Node.js (LTS) — Node 16+ or 18 recommended
  - https://nodejs.org/
- npm (comes with Node) or yarn
  - NPM docs: https://docs.npmjs.com/
- GitHub CLI (gh) installed and authenticated (Optional but recommended)
  - https://cli.github.com/
- VS Code (or your editor of choice)

Create the repo gratitude-token-project_docs (Public) if not already established

### Then to create the site and preview locally, in your terminal run:
```bash
# create the site using the classic template
npx create-docusaurus@latest gratitude-token-project_docs classic
cd gratitude-token-project_docs
git init
git add .
git commit -m "Initial docs setup"
git branch -M main
git remote add origin https://github.com/drasticstatic/gratitude-token-project_docs.git
git push -u origin main
```

### New Docusaurus Project
```bash
...
[INFO] Creating new Docusaurus project...<br>
[INFO] Installing dependencies with npm...<br>
[SUCCESS] Created gratitude-token-project_docs.<br>
[INFO] Inside that directory, you can run several commands:

  `npm start`
    Starts the development server.

  `npm run build`
    Bundles your website into static files for production.

  `npm run serve`
    Serves the built website locally.

  `npm run deploy`
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

  `cd gratitude-token-project_docs`
  `npm start`

Happy building awesome websites!
```
<br>

## Step 2 — Set up GitHub Pages (gh-pages branch) → live at
👉 https://drasticstatic.github.io/gratitude-token-project_docs

### Deployment Script
To deploy the Docusaurus site to GitHub Pages, use the following command:

```bash
# Deploy Docusaurus site to GitHub Pages
npm run build
GIT_USER=drasticstatic USE_SSH=true npm run deploy
```

This command builds your static Docusaurus site and pushes it to the GitHub Pages branch.
Developers can easily rebuild and deploy by rerunning this command.

---

### Keep Working Privately (Main Repo)
- Your private repo is where you do real development, such as:
  - Frontend code
  - Smart contracts
  - App logic
  - SDK integrations
- Repo name: gratitude-token-project (Private)
- You just continue building here — no changes needed for Docusaurus or Pages.

---
### open http://localhost:3000
### Configure docusaurus.config.js (update core fields)
```bash
// in docusaurus.config.js (update these fields)
module.exports = {
title: 'Gratitude Token Project',
tagline: 'Psanctuary DAO documentation',
url: 'https://drasticstatic.github.io',
baseUrl: '/gratitude-token-project_docs/',
organizationName: 'drasticstatic',
projectName: 'gratitude-token-project_docs',
trailingSlash: false,
};
```
---
### Add documentation pages (docs/)
```bash
# Recommended docs/ structure (create these files)
docs/
■■■ dao-governance/
■ ■■■ overview.md
■ ■■■ voting-mechanics.md
■ ■■■ mpc-recovery.md
■ ■■■ holacracy-structure.md
■■■ ethereal-offering-token/
■ ■■■ introduction.md
■ ■■■ staking-rewards.md
■ ■■■ soulbound-nfts.md
■ ■■■ gratitude-system.md
■■■ psanctuary-network/
■ ■■■ aleo-integration.md
■ ■■■ ton-integration.md
■ ■■■ mpc-architecture.md
■ ■■■ roadmap.md
■■■ glossary.md
```
---
### Create sidebars.js to control navigation
```bash
// sidebars.js
module.exports = {
docs: [
{
type: 'category',
label: 'DAO Governance',
items: [
'dao-governance/overview',
'dao-governance/voting-mechanics',
'dao-governance/mpc-recovery',
'dao-governance/holacracy-structure',
],
},
// ... other categories ...
'glossary',
],
```
<br>

## Step 3 — Create a Test Publish Snapshot
- When you want to share a test build or release candidate, you’ll do this:

1️⃣ Create a new public repo:
- Example: gratitude-token-project_testPublish_2025-10-08

2️⃣ In your terminal:
```bash
# Go to parent folder
cd ~/Documents/projects

# Copy the current working directory to a new folder
cp -R gratitude-token-project gratitude-token-project_testPublish_2025-10-08

# Remove sensitive or private files
cd gratitude-token-project_testPublish_2025-10-08
rm -rf .env node_modules secrets/ private_config/
```

3️⃣ Initialize and push to GitHub:
```bash
git init
git add .
git commit -m "Public test release 2025-10-08"
git branch -M main
git remote add origin https://github.com/drasticstatic/gratitude-token-project_testPublish_2025-10-08.git
git push -u origin main
```
<br>

## Step 4 — Host the Test Build
- If your test build is static (e.g. built React app, DApp frontend, etc.):
```bash
npm run build
cd build

# Push built output
git init
git add .
git commit -m "Built test version 2025-10-08"
git branch -M main
git remote add origin https://github.com/drasticstatic/gratitude-token-project_testPublish_2025-10-08.git
git push -u origin main
```
- Then in the GitHub Pages settings for that repo:
  - Go to Settings → Pages
  - Choose Branch: main, Folder: /(root)
- After a minute or two, your site goes live at:
🌐 https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-08/
<br><br>

## Step 5 — Crosslink Everything
- Now your ecosystem looks like this:

| Type | Repo | URL |
|------|------|-----|
| Live Documentation / Whitepaper | gratitude-token-project_docs | https://drasticstatic.github.io/gratitude-token-project_docs |
| Test Build (latest) | gratitude-token-project_testPublish_2025-10-08 | https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-08 |
| Private Core Development | gratitude-token-project | Private only |

- You can add links inside your docs site like:
```markdown
[👉 Test the current prototype](https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-08/)
```
- Update the link with each new test release date.
<br><br>

## Step 6 — (Optional Automation)
- You can later create a simple script (run locally) to handle all of this in one command:
```bash
bash deployTest.sh 2025-10-08
```
- Which would:
  - Copy your private repo
  - Strip sensitive files
  - Push to a new _testPublish_YYYY-MM-DD repo
  - Enable GitHub Pages
<br>

### ⚙️ How to Use It ✅
1. Copy the script below & save this file as deployTest.sh (in a secure location, not inside the private repo's parent directory).
```
~/Documents/projects/deployTest.sh
```
2. Make it executable:
```chmod +x deployTest.sh```
```bash
#(optional) Ensure gh CLI is installed and authenticated, or export GH_TOKEN for API use:
gh auth login
```or
```bash
export GH_TOKEN="ghp_xxx..."
```
3. Run it any time you want a new test release:
```bash
bash deployTest.sh 2025-10-08
```
Wait 1–2 minutes, then visit:
👉 https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-08

### Your public test version is now live 🚀


### 👌 Best Practices Checklist
• Never include private keys, .env files, or secrets in the public snapshot.<br>
• Consider keeping a simple .testignore file listing files/folders to remove automatically.<br>
• Use Git tags or a changelog to track what changed between test snapshots.<br>
• Add a short README in each testPublish repo explaining it is a public snapshot and how to provid<br>
• Link each snapshot from the main _docs site so testers can reference the user manual and report

### 🪶 Optional Enhancements
You can later:
- Add a .testignore file to exclude specific folders instead of manual deletions.
- Add environment tagging (e.g. ALPHA, BETA, RC) in the commit message.
- Integrate a docsVersion JSON file that updates _docs automatically with each new deployment.
<br><br>

# Automated Test Deployment Script

# 🧰 deployTest.sh – Automated Test Deployment Script

```bash
#!/bin/bash

# ============================================
# Gratitude Token Project – Test Publish Script
# ============================================
# Usage:
#   bash deployTest.sh 2025-10-08
#
# This script:
#   - Copies the private repo to a new folder
#   - Removes sensitive files
#   - Pushes to a public _testPublish_YYYY-MM-DD repo
#   - Prepares it for GitHub Pages hosting
# ============================================

# 1️⃣ CONFIGURATION (edit these values once)
GITHUB_USER="drasticstatic"
PRIVATE_REPO_PATH="$HOME/Documents/projects/gratitude-token-project"
GITHUB_DOMAIN="https://github.com"

# 2️⃣ GET THE DATE ARGUMENT
DEPLOY_DATE=$1

if [ -z "$DEPLOY_DATE" ]; then
  echo "❌ Error: Please provide a deployment date. Example:"
  echo "   bash deployTest.sh 2025-10-08"
  exit 1
fi

# 3️⃣ SET UP NEW FOLDER NAME
PUBLISH_REPO_NAME="gratitude-token-project_testPublish_$DEPLOY_DATE"
PUBLISH_REPO_PATH="$HOME/Documents/projects/$PUBLISH_REPO_NAME"

# 4️⃣ COPY PRIVATE REPO
echo "📦 Copying private repo..."
cp -R "$PRIVATE_REPO_PATH" "$PUBLISH_REPO_PATH"

cd "$PUBLISH_REPO_PATH" || exit

# 5️⃣ REMOVE SENSITIVE FILES
echo "🧹 Cleaning sensitive or unnecessary files..."
rm -rf .git node_modules .env secrets/ private_config/ .DS_Store

# 6️⃣ INSTALL & BUILD (optional, uncomment for React/Vite/etc.)
# echo "🏗 Building project..."
# npm install
# npm run build
# rm -rf src/ public/ scripts/ config/ # keep only build output if desired

# 7️⃣ INITIALIZE NEW GIT REPO
echo "🚀 Initializing new Git repo..."
git init
git add .
git commit -m "Public test release $DEPLOY_DATE"
git branch -M main

# 8️⃣ CREATE REMOTE ON GITHUB
echo "🌐 Creating new GitHub repository via API..."
curl -u "$GITHUB_USER" https://api.github.com/user/repos -d "{\"name\":\"$PUBLISH_REPO_NAME\",\"private\":false}"

# 9️⃣ PUSH TO NEW PUBLIC REPO
echo "⬆️  Pushing to GitHub..."
git remote add origin "$GITHUB_DOMAIN/$GITHUB_USER/$PUBLISH_REPO_NAME.git"
git push -u origin main

# 1️⃣0️⃣ ENABLE GITHUB PAGES (requires GitHub CLI installed)
if command -v gh &> /dev/null
then
  echo "🪄 Enabling GitHub Pages..."
  gh repo edit "$GITHUB_USER/$PUBLISH_REPO_NAME" --enable-issues=false
  gh api repos/"$GITHUB_USER"/"$PUBLISH_REPO_NAME"/pages --method POST -f source='{"branch":"main","path":"/"}' > /dev/null 2>&1
  echo "✅ GitHub Pages enabled!"
else
  echo "⚠️  GitHub CLI not found. Please enable GitHub Pages manually in repo settings."
fi

# 1️⃣1️⃣ FINAL CONFIRMATION
echo ""
echo "🎉 Deployment complete!"
echo "📂 Folder: $PUBLISH_REPO_PATH"
echo "🌍 GitHub Repo: $GITHUB_DOMAIN/$GITHUB_USER/$PUBLISH_REPO_NAME"
echo "🌐 Expected Site: https://$GITHUB_USER.github.io/$PUBLISH_REPO_NAME/"
echo ""
echo "🧭 Remember to:"
echo "  - Go to GitHub → Settings → Pages"
echo "  - Set 'Branch: main' and 'Folder: /(root)' if not done automatically"
```

<br><br>

# Sync Docs Script
## for docs to safely update public _docs repo from your private repo while excluding sensitive files and directories.
### Run manually or set up a cron job for periodic updates.

A local script that:
- Pulls the latest content from the private repo.
- Copies only the documentation folder (or selected files) to the public _docs repo.
- Commits and pushes updates automatically.

# 🔁 syncDocs.sh
```bash
#!/bin/bash
# syncDocs.sh - Sync Markdown docs from private repo to public _docs repo
# Usage: ./syncDocs.sh

set -euo pipefail

# -------------------------
# Config
# -------------------------
PRIVATE_REPO=~/projects/gratitude-token-project
DOCS_REPO=~/projects/gratitude-token-project_docs
TEMP_DIR=$(mktemp -d)

# List of files/folders to exclude from public docs
EXCLUDE=(".env" "node_modules" "build" "secrets" "private_config" ".DS_Store")

# -------------------------
# Step 1: Pull latest changes from private repo
# -------------------------
echo "Pulling latest from private repo..."
cd "$PRIVATE_REPO"
git pull origin main

# -------------------------
# Step 2: Copy docs content (or Markdown files) to docs repo
# -------------------------
rsync -av --exclude node_modules --exclude build $PRIVATE_REPO_PATH/docs/ $DOCS_REPO_PATH/docs/

# OR:
# -------------------------
# Step 2A: Copy docs content to temp dir
# -------------------------
echo "Copying docs to temporary folder..."
rsync -av \
  --exclude="${EXCLUDE[0]}" \
  --exclude="${EXCLUDE[1]}" \
  --exclude="${EXCLUDE[2]}" \
  --exclude="${EXCLUDE[3]}" \
  --exclude="${EXCLUDE[4]}" \
  "$PRIVATE_REPO/docs/" "$TEMP_DIR/"
# -------------------------
# Step 2B: Copy temp content to docs repo
# -------------------------
echo "Updating docs repo..."
rsync -av --delete "$TEMP_DIR/" "$DOCS_REPO/docs/"

# -------------------------
# Step 3: Commit & push changes
# -------------------------
cd "$DOCS_REPO"
git add .
if git diff-index --quiet HEAD --; then
  echo "No changes to commit."
else
  git commit -m "Sync docs from private repo"
  git push origin main
  echo "Docs repo updated successfully."
fi

# -------------------------
# Step 4: Cleanup
# -------------------------
rm -rf "$TEMP_DIR"
echo "Temporary folder cleaned up."
```

## ⚙️ How to Use It ✅
1. Save as syncDocs.sh somewhere safe (not inside your private repo).
2. Make it executable:
```bash
chmod +x syncDocs.sh
```
3. Edit paths if needed (PRIVATE_REPO and DOCS_REPO).
4. Run manually whenever you want to sync:
```bash
./syncDocs.sh
```

Optional Automation
Set a cron job to run daily or weekly:
```bash
crontab -e
```
### Add line to run at 2am daily
0 2 * * * /bin/bash ~/scripts/syncDocs.sh >> ~/scripts/syncDocs.log 2>&1

Output will log changes and keep your _docs repo always up-to-date with your private repo’s docs.
