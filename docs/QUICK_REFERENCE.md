# Quick Reference Guide

## 🚀 Common Commands

### Deploy Test Snapshot

```bash
# Deploy with today's date
./deployTest/deployTest.sh

# Deploy with custom date
./deployTest/deployTest.sh 2025-10-15

# Expected URL
https://drasticstatic.github.io/gratitude-token-project_testPublish_YYYY-MM-DD/
```

---

### Sync Documentation

```bash
# Preview changes (dry-run)
./syncDocs/syncDocs.sh --dry-run

# Perform actual sync
./syncDocs/syncDocs.sh

# Expected URL
https://drasticstatic.github.io/gratitude-token-project_docs/
```

---

### Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm start
# Visit: http://localhost:3000

# Run tests
npx hardhat test

# Build for production
npm run build

# Test production build locally
npx serve -s build -p 3001
# Visit: http://localhost:3001
```

---

## 📁 Repository Structure

```
Private Repo (gratitude-token-project)
├── contracts/              # Smart contracts
├── src/                    # React app
├── test/                   # Tests
├── Docusaurus/             # Docs (synced to public)
├── deployTest/             # Deployment automation
└── syncDocs/               # Sync automation

Public Docs Repo (gratitude-token-project_docs)
├── docs/                   # Synced from private repo
├── src/                    # Docusaurus theme
└── docusaurus.config.js    # Docusaurus config

Public Test Repos (gratitude-token-project_testPublish_YYYY-MM-DD)
└── [build files only]      # No source code
```

---

## 🔗 Important URLs

### Repositories
- **Private:** https://github.com/drasticstatic/gratitude-token-project (private)
- **Docs:** https://github.com/drasticstatic/gratitude-token-project_docs
- **Latest Test:** https://github.com/drasticstatic/gratitude-token-project_testPublish_2025-10-10

### Live Sites
- **Docs:** https://drasticstatic.github.io/gratitude-token-project_docs/
- **Latest Test:** https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/

---

## 🐛 Troubleshooting

### Blank Page on GitHub Pages

```bash
# Redeploy with updated script
./deployTest/deployTest.sh YYYY-MM-DD
```

### 404 Errors on Refresh

```bash
# Script v3.0 creates 404.html automatically
# If using old deployment, redeploy
./deployTest/deployTest.sh YYYY-MM-DD
```

### Sync Fails

```bash
# Check repositories exist
ls ~/dappu/gratitude-token-project
ls ~/dappu/gratitude-token-project_docs

# Pull latest changes
cd ~/dappu/gratitude-token-project
git pull origin main

cd ~/dappu/gratitude-token-project_docs
git pull origin main
```

### Build Fails

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Clear Hardhat cache
rm -rf cache artifacts
npx hardhat clean
```

---

## 📝 File Locations

### Scripts
- `deployTest/deployTest.sh` - Deploy test snapshots
- `syncDocs/syncDocs.sh` - Sync documentation

### Documentation
- `SESSION_SUMMARY.md` - What we accomplished
- `DEPLOYMENT_WALKTHROUGH.md` - Complete guide
- `CURRENT_DEPLOYMENT_FIX.md` - Fix current deployment
- `WORKSPACE_ORGANIZATION.md` - Organization plan
- `unusedFiles.md` - Files to review
- `deployTest/deployTest_README.md` - Deploy script docs
- `syncDocs/syncDocs_README.md` - Sync script docs

### Configuration
- `package.json` - Node.js dependencies
- `hardhat.config.js` - Hardhat configuration
- `.gitignore` - Git ignore rules

---

## ✅ Pre-Deployment Checklist

Before deploying:

- [ ] Code works locally (`npm start`)
- [ ] Tests pass (`npx hardhat test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Production build tested (`npx serve -s build`)
- [ ] No console errors
- [ ] All routes work
- [ ] Images load correctly

---

## 🔄 Typical Workflow

### 1. Development

```bash
cd ~/dappu/gratitude-token-project

# Make changes
# ... edit files ...

# Test locally
npm start

# Run tests
npx hardhat test

# Commit
git add .
git commit -m "Your message"
git push origin main
```

### 2. Update Documentation

```bash
# Edit docs in Docusaurus/
# ... edit files ...

# Sync to public repo
./syncDocs/syncDocs.sh

# Verify
# Visit: https://drasticstatic.github.io/gratitude-token-project_docs/
```

### 3. Deploy Test Snapshot

```bash
# Deploy
./deployTest/deployTest.sh

# Wait 2 minutes

# Verify
# Visit: https://drasticstatic.github.io/gratitude-token-project_testPublish_YYYY-MM-DD/
```

---

## 🎯 Quick Fixes

### Fix Current Deployment

```bash
./deployTest/deployTest.sh 2025-10-10
```

### Update Docs

```bash
./syncDocs/syncDocs.sh
```

### Clean Workspace

```bash
# Remove build artifacts
rm -rf build cache artifacts

# Remove node_modules
rm -rf node_modules
npm install --legacy-peer-deps
```

### Reset to Clean State

```bash
# Stash changes
git stash

# Pull latest
git pull origin main

# Clean install
rm -rf node_modules
npm install --legacy-peer-deps

# Rebuild
npm run build
```

---

## 📊 Script Options

### deployTest.sh

```bash
# Basic usage
./deployTest/deployTest.sh

# Custom date
./deployTest/deployTest.sh 2025-10-15

# Configuration (edit script)
BUILD_BEFORE_DEPLOY=true    # Build before deploying
DEPLOY_BUILD_ONLY=true      # Deploy only build folder
```

### syncDocs.sh

```bash
# Dry run (preview)
./syncDocs/syncDocs.sh --dry-run

# Actual sync
./syncDocs/syncDocs.sh

# Configuration (edit script)
SYNC_SOURCES=(...)          # What to sync
EXCLUDES=(...)              # What to exclude
```

---

## 🔐 Security Notes

### Never Commit
- `.env` files
- `secrets/` directory
- `private_config/` directory
- Private keys
- API tokens

### Always Exclude
- `node_modules/`
- `build/`
- `cache/`
- `artifacts/`
- `.DS_Store`

### Scripts Automatically Exclude
- All sensitive files
- Build artifacts
- Documentation folders (from app deployment)

---

## 📞 Getting Help

### Documentation
1. Read `DEPLOYMENT_WALKTHROUGH.md`
2. Check `deployTest/TROUBLESHOOTING.md`
3. Review `syncDocs/syncDocs_README.md`

### Debugging
1. Check browser console (F12)
2. Check GitHub Pages settings
3. Verify GitHub Pages build status
4. Test production build locally

### Resources
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Docusaurus Docs](https://docusaurus.io/docs)
- [React Router Docs](https://reactrouter.com/)

---

## 💡 Pro Tips

1. **Always test locally first** - Catch issues before deploying
2. **Use dry-run for syncs** - Preview changes before committing
3. **Keep deployments dated** - Easy to track versions
4. **Clean up old deployments** - Delete repos you no longer need
5. **Document changes** - Update README when adding features
6. **Commit frequently** - Easy to roll back if needed
7. **Test production builds** - `npx serve -s build` before deploying
8. **Check console for errors** - Browser DevTools are your friend

---

## 🎓 Learning Resources

### Created in This Session
- Complete deployment automation
- Documentation sync automation
- Comprehensive guides
- Troubleshooting documentation

### Skills Demonstrated
- Bash/Zsh scripting
- GitHub CLI usage
- GitHub Pages deployment
- React build optimization
- Multi-repo workflows
- Documentation best practices

---

## ✨ Quick Wins

### Share Your Work

```bash
# Deploy test snapshot
./deployTest/deployTest.sh

# Share URL
echo "Check out my dApp: https://drasticstatic.github.io/gratitude-token-project_testPublish_$(date +%Y-%m-%d)/"

# Share docs
echo "Read the docs: https://drasticstatic.github.io/gratitude-token-project_docs/"
```

### Update Everything

```bash
# One command to update all public repos
./syncDocs/syncDocs.sh && ./deployTest/deployTest.sh
```

---

**Keep this file handy for quick reference!** 📌

