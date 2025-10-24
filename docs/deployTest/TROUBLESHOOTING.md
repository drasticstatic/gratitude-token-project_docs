# deployTest Troubleshooting Guide

## Common Issues and Solutions

### 1. GitHub Pages Shows 404 Error

**Symptom:**
```
404 There isn't a GitHub Pages site here.
```

**Root Cause:**
GitHub Pages was serving React **source code** instead of the **built** production bundle. React apps need to be compiled before deployment.

**Solution:**
The script now automatically builds the React app and deploys only the production files.

**What Changed:**
1. Set `BUILD_BEFORE_DEPLOY=true` in the script
2. Set `DEPLOY_BUILD_ONLY=true` to deploy only compiled files
3. Script now runs `npm install --legacy-peer-deps && npm run build`
4. Only the `build/` folder contents are pushed to GitHub

**Manual Fix (if needed):**
```bash
cd /path/to/your/project_testPublish_YYYY-MM-DD
npm install --legacy-peer-deps
npm run build
cd build
git init
git add .
git commit -m "Deploy React build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -f origin main
```

---

### 2. npm install Fails with Dependency Conflicts

**Symptom:**
```
npm ERR! ERESOLVE could not resolve
npm ERR! Could not resolve dependency
```

**Root Cause:**
TypeScript version conflict between `react-scripts@5.0.1` (requires TypeScript ^4) and your project (uses TypeScript 5.9.3).

**Solution:**
Use `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

**Why This Works:**
- Tells npm to ignore peer dependency conflicts
- Allows installation with mismatched versions
- Safe for most React projects

**Updated in Script:**
The script now automatically uses `--legacy-peer-deps` when building.

---

### 3. Repository Already Exists Error

**Symptom:**
```
GraphQL: Name already exists on this account (createRepository)
```

**Root Cause:**
You ran the script multiple times on the same date, trying to create the same repository name.

**Solution:**
The script now checks if the repository exists before creating it:
```bash
if gh repo view "$GITHUB_USER/$PUBLISH_REPO" &> /dev/null; then
  echo "⚠️  Repository already exists, pushing to existing repo..."
  git push -f origin main
else
  gh repo create "$GITHUB_USER/$PUBLISH_REPO" --public --source=. --remote=origin --push
fi
```

**Manual Workaround:**
1. Delete the existing repository on GitHub
2. Or change the date in the script to create a new repo name
3. Or manually push to the existing repo

---

### 4. GitHub CLI Not Authenticated

**Symptom:**
```
To get started with GitHub CLI, please run:  gh auth login
```

**Root Cause:**
GitHub CLI is installed but not authenticated.

**Solution:**
```bash
gh auth login
```

**Follow the prompts:**
1. Select: **GitHub.com**
2. Protocol: **HTTPS**
3. Authenticate Git: **Yes**
4. Method: **Login with a web browser**
5. Copy the one-time code
6. Press Enter to open browser
7. Paste code and authorize

**Verify Authentication:**
```bash
gh auth status
```

---

### 5. GitHub Pages Not Enabled

**Symptom:**
Repository exists but no Pages URL is available.

**Root Cause:**
GitHub Pages API call failed or Pages wasn't enabled.

**Solution:**
The script now automatically enables Pages via API:
```bash
gh api repos/"$GITHUB_USER"/"$PUBLISH_REPO"/pages \
  --method POST \
  -F source[branch]=main \
  -F source[path]=/
```

**Manual Fix:**
1. Go to GitHub repository settings
2. Navigate to "Pages" section
3. Set Source to: **Deploy from a branch**
4. Select Branch: **main**
5. Select Folder: **/ (root)**
6. Click **Save**

---

### 6. Build Warnings About Bundle Size

**Symptom:**
```
The bundle size is significantly larger than recommended.
Consider reducing it with code splitting
```

**Root Cause:**
React app includes large dependencies (Web3, Hardhat, etc.).

**Impact:**
- Warnings only, build still succeeds
- Site will work but may load slower
- Not critical for test deployments

**Long-term Solutions:**
1. Implement code splitting
2. Use dynamic imports for heavy libraries
3. Analyze bundle with `npm run build -- --stats`
4. Consider lazy loading for routes

**For Now:**
Safe to ignore for test deployments.

---

### 7. Source Map Parsing Warnings

**Symptom:**
```
Failed to parse source map from '.../node_modules/@walletconnect/...'
```

**Root Cause:**
Some dependencies have missing source map files.

**Impact:**
- Warnings only, doesn't affect functionality
- Source maps help with debugging
- Not critical for production builds

**Solution:**
Safe to ignore. These are third-party library issues.

---

### 8. ESLint Warnings During Build

**Symptom:**
```
Line 3:26: 'HardHat' is defined but never used  no-unused-vars
```

**Root Cause:**
Unused imports or variables in your code.

**Impact:**
- Warnings only, build still succeeds
- Good practice to fix but not blocking

**Solution:**
Clean up unused imports:
```javascript
// Remove unused imports
import { Wallet, Zap } from 'lucide-react';  // Remove if not used
```

Or disable specific warnings:
```javascript
// eslint-disable-next-line no-unused-vars
const unusedVar = something;
```

---

### 9. Git Secrets Scanning Skips Large Files

**Symptom:**
```
Skipped static/js/main.16ec6e2e.js.map: content is over 1,048,576 bytes
```

**Root Cause:**
Gitleaks (secret scanner) skips files over 1MB.

**Impact:**
- Normal behavior for large build files
- Source maps are often large
- No security risk for public test repos

**Solution:**
No action needed. This is expected for React builds.

---

### 10. GitHub Pages Takes Time to Deploy

**Symptom:**
Site shows 404 immediately after push.

**Root Cause:**
GitHub Pages needs 1-2 minutes to build and deploy.

**Solution:**
Wait 2-3 minutes after pushing, then refresh the page.

**Check Deployment Status:**
```bash
gh repo view YOUR_USERNAME/REPO_NAME --web
```
Then navigate to "Actions" tab to see deployment progress.

---

## Debugging Tips

### Check GitHub Pages Status
```bash
gh api repos/YOUR_USERNAME/REPO_NAME/pages
```

### View Repository Details
```bash
gh repo view YOUR_USERNAME/REPO_NAME --json url,homepageUrl,hasPages
```

### Test Build Locally
```bash
npm install --legacy-peer-deps
npm run build
npx serve -s build
```
Then open http://localhost:3000

### Check Git Remote
```bash
git remote -v
```

### View Recent Commits
```bash
git log --oneline -5
```

---

## Getting Help

If you encounter issues not covered here:

1. **Check the logs** - Read error messages carefully
2. **Verify prerequisites** - Git, Node.js, GitHub CLI installed
3. **Check GitHub status** - https://www.githubstatus.com/
4. **Review script settings** - Ensure `BUILD_BEFORE_DEPLOY=true`
5. **Test manually** - Try building and deploying step-by-step

---

## Success Checklist

✅ GitHub CLI installed and authenticated  
✅ Script has execute permissions (`chmod +x deployTest.sh`)  
✅ `BUILD_BEFORE_DEPLOY=true` in script  
✅ `DEPLOY_BUILD_ONLY=true` in script  
✅ npm dependencies install successfully  
✅ React app builds without errors  
✅ Git push completes successfully  
✅ GitHub Pages enabled on repository  
✅ Wait 2-3 minutes for deployment  
✅ Site loads at `https://USERNAME.github.io/REPO_NAME/`  

---

**Last Updated:** 2025-10-10  
**Script Version:** 2.0 (with build automation)

