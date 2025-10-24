#!/bin/zsh
set -e

# 🧩 Automated Test Publish Deployment Script v3.0 (macOS Ready)
# Usage: ./deployTest.sh [optional-custom-date]
# Example: ./deployTest.sh 2025-10-10
#
# This script:
#   - Copies the private repo to a new folder
#   - Removes sensitive files (via rsync exclude)
#   - Adds homepage field to package.json for GitHub Pages
#   - Creates 404.html for client-side routing
#   - Builds the React app with correct base path
#   - Deploys only the build folder
#   - Creates a new public GitHub repo
#   - Pushes to GitHub
#   - Enables GitHub Pages (if gh CLI available)

# --- SETTINGS ---
REPO_NAME="gratitude-token-project"
GITHUB_USER="drasticstatic"
EXCLUDES=(".git" "node_modules" ".env" "private_config" "secrets" ".DS_Store" "build" "cache" "artifacts" "Docusaurus" "Notion" "boilerPlates" "extensiveUIpush" "deployTest" "syncDocs")
BUILD_BEFORE_DEPLOY=true  # Set to true to build React app before deploying
DEPLOY_BUILD_ONLY=true    # Set to true to deploy only the build folder (recommended for React apps)

# --- STEP 1: Determine release date ---
DATE=${1:-$(date +"%Y-%m-%d")}
PUBLISH_REPO="${REPO_NAME}_testPublish_${DATE}"

echo "🚀 Starting deploy for: ${PUBLISH_REPO}"
sleep 1

# --- STEP 2: Move to parent directory ---
PROJECT_DIR=$(pwd)
PARENT_DIR=$(dirname "$PROJECT_DIR")
cd "$PARENT_DIR"

if [ ! -d "$REPO_NAME" ]; then
  echo "❌ Error: Project folder '$REPO_NAME' not found in $PARENT_DIR"
  exit 1
fi

# --- STEP 3: Remove old folder if it exists ---
if [ -d "$PUBLISH_REPO" ]; then
  echo "⚠️  Removing old folder ${PUBLISH_REPO}"
  rm -rf "$PUBLISH_REPO"
fi

# --- STEP 4: Copy files safely ---
echo "📦 Copying project folder..."
EXCLUDE_ARGS=()
for item in "${EXCLUDES[@]}"; do
  EXCLUDE_ARGS+=(--exclude="$item")
done

rsync -av "${EXCLUDE_ARGS[@]}" "$REPO_NAME/" "$PUBLISH_REPO/"

cd "$PUBLISH_REPO"

# --- STEP 5: Configure for GitHub Pages ---
if [ "$BUILD_BEFORE_DEPLOY" = true ]; then
  echo "📝 Configuring package.json for GitHub Pages..."

  # Calculate the homepage URL
  HOMEPAGE_URL="https://${GITHUB_USER}.github.io/${PUBLISH_REPO}"

  # Add homepage field using Node.js
  node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  pkg.homepage = '${HOMEPAGE_URL}';
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  console.log('✅ Added homepage: ${HOMEPAGE_URL}');
  "

  # Create 404.html for client-side routing
  echo "📝 Creating 404.html for client-side routing..."
  cat > public/404.html << 'EOF'
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ethereal Offering</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
EOF
  echo "✅ Created 404.html"

  # Build the app
  echo "🏗️  Building React app with correct base path..."
  npm install --legacy-peer-deps
  npm run build

  if [ "$DEPLOY_BUILD_ONLY" = true ]; then
    echo "📦 Preparing to deploy only build folder..."

    # Move build folder to temp location
    mv build ../temp_build_${DATE}

    # Remove everything except build
    rm -rf *
    rm -rf .[!.]*  # Remove hidden files except . and ..

    # Move build contents to root
    mv ../temp_build_${DATE}/* .
    mv ../temp_build_${DATE}/.[!.]* . 2>/dev/null || true

    # Clean up temp folder
    rmdir ../temp_build_${DATE}

    echo "✅ Build complete, deploying only static files"
  else
    echo "✅ Build complete, keeping all files"
  fi
fi

# --- STEP 6: Initialize git ---
echo "🔧 Initializing new git repo..."
git init
git add .
git commit -m "Public test release ${DATE}"
git branch -M main

# --- STEP 7: Create GitHub repo via API ---
REMOTE_URL="https://github.com/${GITHUB_USER}/${PUBLISH_REPO}.git"

echo "🌐 Creating new GitHub repository..."
# Check if gh CLI is available (preferred method)
if command -v gh &> /dev/null; then
  echo "Using GitHub CLI to create repo..."

  # Check if repo already exists
  if gh repo view "$GITHUB_USER/$PUBLISH_REPO" &> /dev/null; then
    echo "⚠️  Repository already exists, pushing to existing repo..."
    git remote add origin "$REMOTE_URL" 2>/dev/null || git remote set-url origin "$REMOTE_URL"
    git push -f origin main
    echo "✅ Code pushed to existing repository"
  else
    # Create new repo
    gh repo create "$GITHUB_USER/$PUBLISH_REPO" --public --source=. --remote=origin --push
    echo "✅ Repository created and pushed via gh CLI"
  fi
else
  # Fallback to curl (requires GitHub token)
  echo "GitHub CLI not found, using curl..."
  echo "⚠️  You'll need to enter your GitHub password or token"

  # Create repo via API
  curl -u "$GITHUB_USER" https://api.github.com/user/repos \
    -d "{\"name\":\"$PUBLISH_REPO\",\"private\":false,\"description\":\"Public test release ${DATE}\"}"

  echo ""
  echo "⬆️  Pushing to GitHub..."
  git remote add origin "$REMOTE_URL"
  git push -u origin main
fi

# --- STEP 8: Enable GitHub Pages ---
if command -v gh &> /dev/null; then
  echo "🪄 Enabling GitHub Pages..."
  gh repo edit "$GITHUB_USER/$PUBLISH_REPO" --enable-issues=false

  # Enable Pages via API (correct syntax)
  gh api repos/"$GITHUB_USER"/"$PUBLISH_REPO"/pages \
    --method POST \
    -F source[branch]=main \
    -F source[path]=/ > /dev/null 2>&1 || true

  echo "✅ GitHub Pages enabled!"
else
  echo "⚠️  GitHub CLI not found - you'll need to enable Pages manually"
fi

# --- STEP 9: Final confirmation ---
echo ""
echo "🎉 Deployment complete!"
echo ""
echo "📂 Local folder: ${PARENT_DIR}/${PUBLISH_REPO}"
echo "🌍 GitHub repo: ${REMOTE_URL}"
echo "🌐 Expected site: https://${GITHUB_USER}.github.io/${PUBLISH_REPO}/"
echo ""

if ! command -v gh &> /dev/null; then
  echo "🧭 Manual steps required (GitHub CLI not installed):"
  echo "  1️⃣ Visit: ${REMOTE_URL}"
  echo "  2️⃣ Go to Settings → Pages"
  echo "  3️⃣ Set 'Branch: main' and 'Folder: /(root)'"
  echo ""
fi

echo "⏱️  GitHub Pages will be live in 1-2 minutes"
echo ""
echo "✅ Fixes Applied:"
echo "  • homepage field added to package.json"
echo "  • 404.html created for client-side routing"
echo "  • Build optimized for GitHub Pages subdirectory"
echo ""
echo "🔍 Troubleshooting:"
echo "  • If site shows blank page, wait 2-3 minutes for GitHub Pages to rebuild"
echo "  • Check browser console for errors"
echo "  • Verify GitHub Pages is enabled in repo settings"
echo ""
echo "🧹 To clean up local folder later:"
echo "   rm -rf ${PARENT_DIR}/${PUBLISH_REPO}"
