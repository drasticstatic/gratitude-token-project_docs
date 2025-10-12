# Fixing GitHub Pages Blank Page Issue

## 🔍 Problem Diagnosis

### Current Issue
- **Symptom:** Blank white page on GitHub Pages deployment
- **URL:** https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/
- **Root Cause:** React Router configuration for GitHub Pages subdirectory deployment

### Why It's Blank

1. **React Router Issue:** The app is deployed to a subdirectory (`/gratitude-token-project_testPublish_2025-10-10/`), but React Router is configured for root path (`/`)

2. **Missing `homepage` Field:** `package.json` doesn't specify the base URL for GitHub Pages

3. **BrowserRouter vs HashRouter:** Using `BrowserRouter` without proper server configuration

---

## ✅ Solution 1: Add `homepage` to package.json (Recommended)

### Step 1: Update package.json

```json
{
  "name": "gratitude-token-project",
  "version": "1.0.0",
  "homepage": "https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10",
  "dependencies": {
    // ... rest of dependencies
  }
}
```

### Step 2: Rebuild and Redeploy

```bash
npm run build
cd build
git init
git add .
git commit -m "Fix: Add homepage for GitHub Pages"
git branch -M main
git remote add origin https://github.com/drasticstatic/gratitude-token-project_testPublish_2025-10-10.git
git push -f origin main
```

### Why This Works
- React build process uses `homepage` to set the correct base path
- All asset URLs will be prefixed with the subdirectory
- React Router will work correctly with the subdirectory

---

## ✅ Solution 2: Use HashRouter (Alternative)

### Update src/index.js

**Before:**
```jsx
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**After:**
```jsx
import { HashRouter } from 'react-router-dom';

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
```

### Why This Works
- HashRouter uses URL hash (`#`) for routing
- Works without server configuration
- URLs will look like: `https://example.com/#/about`
- No need for `homepage` field

### Pros & Cons

**Pros:**
- ✅ Works immediately on GitHub Pages
- ✅ No server configuration needed
- ✅ Simple to implement

**Cons:**
- ❌ URLs have `#` in them (less clean)
- ❌ Not ideal for SEO
- ❌ Can't use server-side rendering

---

## ✅ Solution 3: Add 404.html Redirect (Best for BrowserRouter)

### Create public/404.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ethereal Offering</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
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
```

### Update public/index.html

Add this script in the `<head>` section:

```html
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  // https://github.com/rafgraph/spa-github-pages
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### Why This Works
- Redirects 404 errors to index.html with route info
- React Router can then handle the routing
- Clean URLs without `#`
- Works with BrowserRouter

---

## ✅ Solution 4: Use gh-pages Branch (Like _docs Repo)

### Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Add Scripts to package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Deploy

```bash
npm run deploy
```

### Configure GitHub Pages

1. Go to repository settings
2. Navigate to "Pages"
3. Set Source to: **Deploy from a branch**
4. Select Branch: **gh-pages**
5. Select Folder: **/ (root)**
6. Click **Save**

### Why This Works
- `gh-pages` package handles deployment automatically
- Creates and manages `gh-pages` branch
- Properly configures base path
- Same approach as `gratitude-token-project_docs`

---

## 🎯 Recommended Solution

### For Test Deployments (deployTest.sh)

**Use Solution 1 + Solution 3:**

1. **Add `homepage` to package.json** (dynamic based on date)
2. **Add 404.html redirect** for clean URLs
3. **Keep BrowserRouter** for better UX

### Implementation in deployTest.sh

```bash
# After copying files, before building
echo "📝 Configuring for GitHub Pages..."

# Add homepage field to package.json
HOMEPAGE_URL="https://$GITHUB_USER.github.io/$PUBLISH_REPO"
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.homepage = '$HOMEPAGE_URL';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Copy 404.html to public folder
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

# Add redirect script to index.html
# (This would require more complex sed/awk manipulation)

# Then build
npm install --legacy-peer-deps
npm run build
```

---

## 🔧 Quick Fix for Current Deployment

### Option A: Redeploy with homepage

```bash
cd /Users/christopherwilson/dappu/gratitude-token-project_testPublish_2025-10-10

# Add homepage to package.json
cat package.json | jq '.homepage = "https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10"' > package.json.tmp
mv package.json.tmp package.json

# Rebuild
npm install --legacy-peer-deps
npm run build

# Redeploy
cd build
rm -rf .git
git init
git add .
git commit -m "Fix: Add homepage for GitHub Pages"
git branch -M main
git remote add origin https://github.com/drasticstatic/gratitude-token-project_testPublish_2025-10-10.git
git push -f origin main
```

### Option B: Switch to HashRouter

```bash
cd /Users/christopherwilson/dappu/gratitude-token-project_testPublish_2025-10-10

# Edit src/index.js
# Change BrowserRouter to HashRouter

# Rebuild and redeploy
npm install --legacy-peer-deps
npm run build
cd build
# ... same git commands as above
```

---

## 📊 Comparison: Main Branch vs gh-pages Branch

### Main Branch Deployment (Current)
- ✅ Simple setup
- ✅ One branch to manage
- ❌ Requires `homepage` configuration
- ❌ Needs 404.html for routing
- ❌ Source and build mixed (if not careful)

### gh-pages Branch Deployment (Like _docs)
- ✅ Clean separation of source and build
- ✅ Automatic base path handling
- ✅ Easy rollback
- ✅ Standard approach
- ❌ Requires `gh-pages` package
- ❌ Extra branch to manage

---

## 🎯 Action Plan

### Immediate Fix (5 minutes)

1. Add `homepage` to package.json
2. Rebuild the app
3. Redeploy to GitHub Pages
4. Wait 2-3 minutes for deployment
5. Test the site

### Long-term Solution (15 minutes)

1. Update `deployTest.sh` to:
   - Automatically add `homepage` field
   - Include 404.html redirect
   - Add redirect script to index.html
2. Test with new deployment
3. Document in README

### Alternative Approach (10 minutes)

1. Switch to `gh-pages` branch deployment
2. Update `deployTest.sh` to use `gh-pages` package
3. Configure GitHub Pages to use `gh-pages` branch
4. Test deployment

---

## 📝 Testing Checklist

After implementing the fix:

- [ ] Homepage loads correctly
- [ ] Navigation between pages works
- [ ] Direct URL access works (e.g., `/about`)
- [ ] Refresh on any page works
- [ ] All assets load (images, CSS, JS)
- [ ] Wallet connection works
- [ ] Smart contract interactions work
- [ ] No console errors

---

## 🔗 Resources

- [Create React App - GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)
- [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)
- [React Router - GitHub Pages](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)

---

**Next Steps:** Choose a solution and implement it. Solution 1 (homepage) + Solution 3 (404.html) is recommended for the best user experience.

