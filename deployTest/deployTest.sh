#!/bin/zsh
set -e

# 🧩 Automated Test Publish Deployment Script (macOS Ready)
# Usage: ./deployTest.sh [optional-custom-date]
# Example: ./deployTest.sh 2025-10-10
#
# This script:
#   - Copies the private repo to a new folder
#   - Removes sensitive files (via rsync exclude)
#   - Builds the React app (optional)
#   - Creates a new public GitHub repo
#   - Pushes to GitHub
#   - Enables GitHub Pages (if gh CLI available)

# --- SETTINGS ---
REPO_NAME="gratitude-token-project"
GITHUB_USER="drasticstatic"
EXCLUDES=(".git" "node_modules" ".env" "private_config" "secrets" "dist" "build" ".DS_Store")
BUILD_BEFORE_DEPLOY=false  # Set to true to build React app before deploying

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

# --- STEP 5: Build the app (optional) ---
if [ "$BUILD_BEFORE_DEPLOY" = true ]; then
  echo "🏗️  Building React app..."
  npm install
  npm run build

  # Option A: Deploy only build folder (uncomment if desired)
  # echo "📦 Keeping only build output..."
  # rm -rf src/ public/ scripts/ config/ contracts/ test/

  # Option B: Keep everything (default)
  echo "✅ Build complete, keeping all files"
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
  gh repo create "$GITHUB_USER/$PUBLISH_REPO" --public --source=. --remote=origin --push
  echo "✅ Repository created and pushed via gh CLI"
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

  # Enable Pages via API
  gh api repos/"$GITHUB_USER"/"$PUBLISH_REPO"/pages \
    --method POST \
    -f source='{"branch":"main","path":"/"}' > /dev/null 2>&1 || true

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
echo "🧹 To clean up local folder later:"
echo "   rm -rf ${PARENT_DIR}/${PUBLISH_REPO}"
