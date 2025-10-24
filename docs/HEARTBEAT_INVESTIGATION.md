# 🔍 Heartbeat Animation Investigation

## Issue Reported

User noticed that the heartbeat animation on Daily Shrooms and Cross Breeding pages is different than the rest of the site.

---

## Findings

### Multiple Heartbeat Definitions Found

#### 1. Main Heartbeat (src/index.css)
**Location:** Lines 1074-1078  
**Name:** `watermarkHeartbeat`

```css
@keyframes watermarkHeartbeat {
  0%, 100% { filter: drop-shadow(0 0 40px rgba(124, 58, 237, 0.6)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.4)); }
  10%, 30% { filter: drop-shadow(0 0 50px rgba(124, 58, 237, 0.75)) drop-shadow(0 0 100px rgba(236, 72, 153, 0.55)); }
  20%, 40% { filter: drop-shadow(0 0 40px rgba(124, 58, 237, 0.6)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.4)); }
}
```

**Applied to:** Psanctuary watermark

---

#### 2. Standard Heartbeat (src/index.css)
**Location:** Lines 1080-1097  
**Applied to:** Navigation icons, wallet button, etc.

```css
.wallet-connect-btn,
.wallet-icon-heartbeat,
.nav-links a svg,
.nav-logo svg,
.nav-icon-heartbeat,
.nav-link-icon,
nav a svg,
.navigation a svg,
.nav-link svg,
.force-heartbeat,
.nav-admin-icon {
  animation-name: heartbeat !important;
  animation-duration: 2s !important;
  animation-timing-function: ease-in-out !important;
  animation-iteration-count: infinite !important;
  animation-fill-mode: both !important;
}
```

**Note:** This references a `heartbeat` animation but doesn't define it in src/index.css!

---

#### 3. Icon Heartbeat (src/components/icons/IconAnimations.css)
**Location:** Lines 20-42  
**Name:** `heartbeat`

```css
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
}

.heartbeat {
  animation: heartbeat 2s ease-in-out infinite;
  transform-origin: center;
}
```

**Applied to:** New icon components (WhitepaperScrollIcon, SpiritualFoundationIcon)

---

#### 4. 404 Page Heartbeat (public/404.html)
**Location:** Lines 81-87

```css
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.05); }
  20% { transform: scale(1); }
  30% { transform: scale(1.05); }
  40% { transform: scale(1); }
}
```

**Applied to:** 404 page button

---

#### 5. Contact Icon Heartbeat (src/index.css)
**Location:** Lines 1182-1184

```css
.contact-icon-animated {
  animation: heartbeat 2s ease-in-out infinite, iconRocking 3s ease-in-out infinite;
}
```

---

#### 6. Contact Card Title Heartbeat (src/index.css)
**Location:** Lines 1186-1194

```css
.contact-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px currentColor;
  letter-spacing: 0.5px;
  margin: 12px 0;
  animation: heartbeat 2s ease-in-out infinite;
}
```

---

## Problem Analysis

### Missing Heartbeat Definition in src/index.css

**Issue:** Many elements reference `animation-name: heartbeat` but there's NO `@keyframes heartbeat` definition in src/index.css!

**Where it's referenced:**
- Navigation icons
- Wallet button
- Contact icons
- Contact card titles
- Cross-breeding page icons (lines 1110-1119)

**Where it's defined:**
- ✅ src/components/icons/IconAnimations.css
- ✅ public/404.html
- ❌ NOT in src/index.css

---

## Why Daily Shrooms & Cross Breeding Feel Different

### Possible Reasons:

1. **Missing Animation Definition**
   - Elements are trying to use `heartbeat` animation
   - But it's not defined in the main CSS file
   - Browser may be ignoring the animation
   - Or falling back to a different animation

2. **CSS Specificity Issues**
   - IconAnimations.css defines heartbeat
   - But it may not be imported globally
   - Only works when icon components are used

3. **Different Transform Origins**
   - Some heartbeats use `transform-origin: center`
   - Others don't specify
   - This can make the animation feel different

4. **Different Scale Values**
   - IconAnimations.css: scale(1.1)
   - 404 page: scale(1.05)
   - Inconsistent scaling creates different "feels"

---

## Recommended Fix

### Option 1: Add Global Heartbeat Definition

Add to `src/index.css` (near the top, around line 50):

```css
/* Global heartbeat animation - consistent across all pages */
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
}
```

---

### Option 2: Import IconAnimations.css Globally

Add to `src/index.js`:

```javascript
import './components/icons/IconAnimations.css';
```

This makes all icon animations available globally.

---

### Option 3: Standardize All Heartbeat Animations

**Create a single source of truth:**

1. Define heartbeat in src/index.css
2. Remove duplicate definitions from:
   - IconAnimations.css (keep it but import from main)
   - 404.html (use same values)
3. Ensure all heartbeat animations use:
   - Same scale values (1.1)
   - Same duration (2s)
   - Same timing function (ease-in-out)
   - Same transform-origin (center)

---

## Testing Steps

1. **Check if heartbeat is working:**
   ```bash
   # Open browser dev tools
   # Navigate to Daily Shrooms
   # Inspect nav icons
   # Check computed styles for animation
   ```

2. **Compare pages:**
   - Home page heartbeat
   - Daily Shrooms heartbeat
   - Cross Breeding heartbeat
   - Contact page heartbeat

3. **Look for:**
   - Different animation speeds
   - Different scale amounts
   - Missing animations
   - Jerky vs smooth animations

---

## Additional Notes

### Other Breathing Animations

There are also multiple breathing animations:
- `cardBreathing` (lines 403-412)
- `buttonBreathing` (lines 414-421)
- `footerBreathing` (lines 423-432)
- `faqBreathing` (lines 434-443)
- `gentleBreathing` (lines 1171-1174)
- `breathe` (IconAnimations.css)

**Recommendation:** Consolidate these into a few standard animations:
- `breathe` - General breathing (scale 1.0 to 1.05)
- `breatheSubtle` - Subtle breathing (scale 1.0 to 1.02)
- `heartbeat` - Double pulse (scale 1.0 to 1.1)

---

## Cross-Breeding Specific Code

**Lines 1110-1119 in src/index.css:**

```css
.navigation a[href="/cross-breeding"] span .nav-link-icon {
  animation: heartbeat 2s ease-in-out infinite !important;
  animation-name: heartbeat !important;
  animation-duration: 2s !important;
  animation-timing-function: ease-in-out !important;
  animation-iteration-count: infinite !important;
  animation-fill-mode: both !important;
  transform-origin: center center !important;
  will-change: transform !important;
}
```

**This is trying to force heartbeat on cross-breeding nav icon, but if heartbeat isn't defined, it won't work!**

---

## Summary

**Root Cause:** Missing `@keyframes heartbeat` definition in src/index.css

**Impact:** 
- Navigation icons may not animate properly
- Daily Shrooms and Cross Breeding pages feel different
- Inconsistent user experience

**Solution:** Add global heartbeat definition to src/index.css

**Priority:** Medium (affects UX consistency)

---

**Next Steps:**
1. Add global heartbeat definition
2. Test on all pages
3. Verify consistency
4. Consider consolidating all breathing/heartbeat animations

---

🍄 ✨ ⛪

