# 🚀 deployTest.sh - Test Deployment Script

## 📋 Overview

This script automates the process of creating public test deployment snapshots from your private development repository. It:

1. ✅ Copies your private repo to a new timestamped folder
2. ✅ Excludes sensitive files (`.env`, `secrets/`, etc.)
3. ✅ Optionally builds the React app
4. ✅ Creates a new public GitHub repository
5. ✅ Pushes the code to GitHub
6. ✅ Enables GitHub Pages automatically (if `gh` CLI available)

## 🎯 Goal

Create public test deployments like:
- `gratitude-token-project_testPublish_2025-01-10`
- `gratitude-token-project_testPublish_2025-01-15`
- `gratitude-token-project_testPublish_2025-02-01`

Each deployment is:
- **Timestamped** - Easy to track versions
- **Public** - Accessible for user testing
- **Clean** - No sensitive data
- **Hosted** - Live on GitHub Pages

## ⚙️ Prerequisites

### Required
- ✅ **Git** - Installed and configured
- ✅ **GitHub Account** - With push access
- ✅ **Node.js & npm** - If building React app

### Recommended
- ⭐ **GitHub CLI (`gh`)** - For automatic repo creation and Pages setup
  - Install: `brew install gh`
  - Authenticate: `gh auth login`

### Without GitHub CLI
- You'll need to enter your GitHub password when prompted
- Manual GitHub Pages setup required (script provides instructions)

## 🚀 Usage

### Basic Usage (Auto Date)
```bash
./deployTest.sh
```
Creates: `gratitude-token-project_testPublish_2025-01-10` (today's date)

### Custom Date
```bash
./deployTest.sh 2025-02-15
```
Creates: `gratitude-token-project_testPublish_2025-02-15`

### With Build Step
Edit script line 20:
```bash
BUILD_BEFORE_DEPLOY=true
```
Then run:
```bash
./deployTest.sh
```

## 📁 What Gets Excluded

The script automatically excludes:
- `.git` - Git history
- `node_modules` - Dependencies (too large)
- `.env` - Environment variables
- `private_config/` - Private configuration
- `secrets/` - Secret keys
- `dist/` - Build artifacts
- `build/` - Build artifacts
- `.DS_Store` - macOS system files

## 🔧 Configuration

Edit these variables in the script:

```bash
REPO_NAME="gratitude-token-project"        # Your private repo name
GITHUB_USER="drasticstatic"                # Your GitHub username
BUILD_BEFORE_DEPLOY=false                  # Set to true to build before deploy
```

## 📊 Step-by-Step Process

### Step 1: Determine Date
- Uses provided date or defaults to today
- Creates folder name: `gratitude-token-project_testPublish_YYYY-MM-DD`

### Step 2: Navigate to Parent Directory
- Finds parent directory of current project
- Validates project folder exists

### Step 3: Clean Old Folder
- Removes old folder with same date if exists
- Prevents conflicts

### Step 4: Copy Files
- Uses `rsync` to copy files
- Excludes sensitive files automatically
- Preserves file permissions

### Step 5: Build App (Optional)
- Runs `npm install` and `npm run build`
- Can keep only build output or all files
- Configurable via `BUILD_BEFORE_DEPLOY`

### Step 6: Initialize Git
- Creates new git repository
- Commits all files
- Sets default branch to `main`

### Step 7: Create GitHub Repo
**With GitHub CLI (`gh`):**
- Creates repo automatically
- Pushes code in one command
- No password prompt needed

**Without GitHub CLI:**
- Uses `curl` to call GitHub API
- Prompts for GitHub password
- Pushes code separately

### Step 8: Enable GitHub Pages
**With GitHub CLI:**
- Enables Pages automatically
- Sets source to `main` branch, root folder
- Disables issues (optional)

**Without GitHub CLI:**
- Provides manual instructions
- You must enable Pages in repo settings

### Step 9: Confirmation
- Displays local folder path
- Shows GitHub repo URL
- Shows expected GitHub Pages URL
- Provides cleanup command

## 🌐 GitHub Pages Setup

### Automatic (with `gh` CLI)
Pages are enabled automatically. Wait 1-2 minutes, then visit:
```
https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-01-10/
```

### Manual (without `gh` CLI)
1. Visit: `https://github.com/drasticstatic/gratitude-token-project_testPublish_2025-01-10`
2. Go to **Settings** → **Pages**
3. Set **Branch:** `main`
4. Set **Folder:** `/(root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

## 🔐 Authentication

### Option 1: GitHub CLI (Recommended)
```bash
gh auth login
```
Follow prompts to authenticate. No password needed for future runs.

### Option 2: Personal Access Token
1. Create token: https://github.com/settings/tokens
2. Select scopes: `repo`, `delete_repo`
3. When prompted for password, paste token instead

### Option 3: SSH Keys
Edit script line 73 to use SSH:
```bash
REMOTE_URL="git@github.com:${GITHUB_USER}/${PUBLISH_REPO}.git"
```

## 🧹 Cleanup

### Remove Local Folder
```bash
rm -rf ~/Documents/projects/gratitude-token-project_testPublish_2025-01-10
```

### Delete GitHub Repo
```bash
gh repo delete drasticstatic/gratitude-token-project_testPublish_2025-01-10
```

Or manually:
1. Visit repo on GitHub
2. Settings → Danger Zone → Delete this repository

## ⚠️ Troubleshooting

### "Project folder not found"
- Make sure you're running script from inside `gratitude-token-project/`
- Or edit `REPO_NAME` variable to match your folder name

### "Permission denied (publickey)"
- Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- Or use HTTPS with personal access token

### "Repository already exists"
- Delete old repo on GitHub first
- Or use different date

### "GitHub Pages not enabled"
- Install GitHub CLI: `brew install gh`
- Or enable manually in repo settings

### Build fails
- Check `package.json` has `build` script
- Ensure dependencies are installed
- Check for build errors in output

## 📝 Best Practices

### Before Each Deployment
- [ ] Test locally: `npm run build`
- [ ] Review excluded files
- [ ] Check for sensitive data
- [ ] Update version/changelog

### After Each Deployment
- [ ] Test live site
- [ ] Share URL with testers
- [ ] Document feedback
- [ ] Update docs site with new test link

### Security Checklist
- [ ] No `.env` files
- [ ] No private keys
- [ ] No API secrets
- [ ] No database credentials
- [ ] No internal URLs

## 🔗 Integration with Docs Site

Update your Docusaurus docs to link to latest test:

```markdown
[👉 Test the current prototype](https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-01-10/)
```

Or create a redirect:
```javascript
// In docusaurus.config.js
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/test',
            to: 'https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-01-10/',
          },
        ],
      },
    ],
  ],
};
```

## 📊 Example Workflow

### Weekly Test Releases
```bash
# Monday - Deploy alpha
./deployTest.sh 2025-01-13-alpha

# Wednesday - Deploy beta
./deployTest.sh 2025-01-15-beta

# Friday - Deploy RC
./deployTest.sh 2025-01-17-rc
```

### Version Tagging
```bash
# Add version to commit message
git commit -m "Public test release ${DATE} - v0.1.0-alpha"
```

## 🎯 Next Steps

1. **Install GitHub CLI** (if not already):
   ```bash
   brew install gh
   gh auth login
   ```

2. **Make script executable**:
   ```bash
   chmod +x deployTest.sh
   ```

3. **Test run**:
   ```bash
   ./deployTest.sh
   ```

4. **Verify deployment**:
   - Check GitHub repo created
   - Wait 2 minutes
   - Visit GitHub Pages URL

5. **Share with testers**:
   - Post URL in Discord
   - Add to docs site
   - Request feedback

## 📚 Related Scripts

- **syncDocs.sh** - Sync documentation from private to public docs repo
- **deployProd.sh** - Deploy to production (future)

## 🆘 Support

- **Discord:** https://discord.gg/psanctuary
- **GitHub Issues:** https://github.com/drasticstatic/gratitude-token-project/issues
- **Documentation:** See `whitepaper/Docusaurus | SetupGuide.md`

---

**Ready to deploy! 🚀**

