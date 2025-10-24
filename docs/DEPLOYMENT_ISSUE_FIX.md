# 🐛 Main dApp Deployment Issue - Root Cause & Fix

## 📋 Problem Summary

**Issue:** Site deployed to `https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/`
- Loads with only navbar and background (no content)
- Clicking home button redirects to `https://drasticstatic.github.io` (wrong URL)
- Home page renders correctly at wrong URL

**Status:** 🔴 CRITICAL - Needs immediate fix

---

## 🔍 Root Cause Analysis

### Issue 1: Missing React Router `basename`

**File:** `src/index.js` (Line 97)

**Current Code:**
```javascript
<Router>
  {/* Routes */}
</Router>
```

**Problem:** React Router doesn't know it's deployed to a subdirectory

**Fix Required:**
```javascript
<Router basename={process.env.PUBLIC_URL}>
  {/* Routes */}
</Router>
```

---

### Issue 2: 404.html Redirect Logic

**File:** `public/404.html`

**Current Status:** May not exist or may have incorrect redirect logic

**Required 404.html:**
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

---

### Issue 3: index.html Redirect Handler

**File:** `public/index.html`

**Required Addition:** Add redirect handler script before closing `</head>` tag

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

---

## ✅ Complete Fix Implementation

### Step 1: Update src/index.js

**Add basename to Router:**

```javascript
// Line 97 - Update Router component
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* Visual Effects - Applied to all pages */}
      <DynamicPagePadding />
      <Sparkles />
      <CursorTrail />
      <SporeContainer />

      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/daily-shrooms" element={<DailyShrooms />} />
        <Route path="/cross-breeding" element={<CrossBreeding />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/altar" element={<AltarBurn />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
```

---

### Step 2: Create/Update public/404.html

**Create file:** `public/404.html`

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

---

### Step 3: Update public/index.html

**Add redirect handler before closing `</head>` tag:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/images/EO.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#581c87" />
    <meta
      name="description"
      content="Ethereal Offering - Burn tokens. Grow mushrooms. Shape the DAO. Experience the ritual of giving."
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/EO.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Ethereal Offering 🌌 | Sacred Economy DAO</title>
    
    <!-- Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
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
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

---

### Step 4: Verify package.json

**Ensure homepage field is set correctly:**

```json
{
  "name": "gratitude-token-project",
  "version": "0.1.0",
  "homepage": "https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10",
  ...
}
```

**Note:** deployTest.sh should already be setting this automatically

---

### Step 5: Rebuild and Redeploy

```bash
# Clean previous build
rm -rf build/

# Rebuild with correct configuration
npm run build

# Verify homepage in built package.json
cat build/package.json | grep homepage

# Redeploy using deployTest.sh
./deployTest/deployTest.sh 2025-10-10
```

---

## 🧪 Testing Checklist

After redeployment, verify:

- [ ] Site loads at: `https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/`
- [ ] Home page content renders immediately
- [ ] Navbar appears correctly
- [ ] Background effects work
- [ ] Clicking home button stays at correct URL
- [ ] All navigation links work
- [ ] Refreshing any page works correctly
- [ ] No 404 errors
- [ ] Favicon displays correctly

---

## 📝 Why This Happens

### GitHub Pages Subdirectory Deployment

When deploying to `username.github.io/repo-name/`:

1. **React Router needs basename** - Tells router the app is not at root
2. **404.html needed** - GitHub Pages serves 404 for client-side routes
3. **Redirect script needed** - Converts 404 to proper route
4. **PUBLIC_URL must be set** - For asset paths (done by homepage field)

### Without These Fixes

- Router thinks it's at `https://drasticstatic.github.io/` (root)
- Clicking home navigates to `/` which is `https://drasticstatic.github.io/`
- Direct navigation to routes gets 404 from GitHub
- Assets may not load correctly

---

## 🔄 Update deployTest.sh

The deployTest.sh script should already handle most of this, but verify it includes:

1. ✅ Sets homepage field in package.json
2. ✅ Creates 404.html
3. ⚠️ May need to update index.html with redirect script
4. ⚠️ May need to update src/index.js with basename

**Recommendation:** Update deployTest.sh to automatically:
- Add basename to Router in src/index.js
- Add redirect script to public/index.html
- Create public/404.html

---

## 🎯 Priority Actions

### Immediate (Do Now)
1. Update `src/index.js` - Add `basename={process.env.PUBLIC_URL}` to Router
2. Create `public/404.html` with redirect script
3. Update `public/index.html` with redirect handler
4. Rebuild and redeploy

### Short-term (Next)
1. Update `deployTest.sh` to automate these fixes
2. Test deployment thoroughly
3. Document in deployment guide

### Long-term (Future)
1. Consider custom domain to avoid subdirectory issues
2. Add automated deployment tests
3. Create deployment verification script

---

## 📚 References

- [SPA GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [React Router Basename](https://reactrouter.com/en/main/router-components/browser-router#basename)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)

---

**Status:** Ready to implement  
**Priority:** 🔴 CRITICAL  
**Estimated Time:** 15 minutes  
**Impact:** Fixes broken deployment completely

