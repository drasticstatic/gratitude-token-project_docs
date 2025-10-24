# 🌌 Instructions for Augment Agent in _docs Workspace

## 📋 Mission: Enhance Docusaurus Site to Match Main dApp

**Date:** 2025-10-12  
**Target Repo:** gratitude-token-project_docs  
**Live Site:** https://drasticstatic.github.io/gratitude-token-project_docs/  
**Main dApp:** https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/

---

## 🎯 Priority Tasks

### 1. ✨ Branding & Icons

#### Home Icon & Favicon
- **Current Issue:** Using Psanctuary logo (psanctuary-icon.webp)
- **Required Change:** Use Ethereal Offering logo (EO.png)
- **Location:** `docs/assets/EO.png` (synced from main repo)
- **Requirements:**
  - Circular shape (not square)
  - Animated rotation around center (like navbar on main dApp)
  - Same coin-like rotation effect as main site's navbar
  - Research: Animated favicons using CSS animations or animated GIF/APNG

#### Psanctuary Watermark
- **Add:** Breathing Psanctuary watermark from main dApp
- **Location:** Background element on Docusaurus site
- **Effect:** Same breathing animation as main dApp
- **Asset:** `docs/assets/psanctuary-icon.webp`

---

### 2. 🎨 Navbar Enhancement

#### Match Main dApp Navbar Style
- **Breathing Effect:** Add to entire navbar (same as main dApp)
- **Home Button:** Exact same design as main dApp with EO.png rotating
- **Lucide Icons:** Add next to each navbar title
  - Breathing effect on icons
  - Heartbeat effect on icons
  - Use same icon library as main dApp

#### Navbar Layout
**Left Side:**
- Home button (EO.png rotating)
- Navbar links with Lucide icons

**Right Side:**
- Psanctuary icon (psanctuary-icon.webp) - positioned like main dApp
- Contact card SVGs (synced from main repo):
  - Discord icon (breathing + heartbeat)
  - GitHub icon (breathing + heartbeat)
  - Other contact icons (breathing + heartbeat)
  - All sized appropriately
  - All act as clickable links
- Light/Dark mode toggle

#### Contact Card SVGs to Sync
**Location in main repo:** `src/components/icons/` or similar
**Files needed:**
- Discord SVG
- GitHub SVG
- X/Twitter SVG
- Contact SVG
- Any other social icons

**Effects Required:**
- Breathing animation
- Heartbeat animation
- Hover effects
- Click/link functionality

---

### 3. 🚀 Launch dApp Button

#### Homepage Button
- **Text:** "Launch dApp"
- **Link:** https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/
- **Note:** User will update date as needed
- **Style:** Match main dApp button styling

#### Context to Share
- Main dApp is deployed via `deployTest.sh` script
- Uses GitHub Pages hosting
- Repository created automatically by script
- Script details synced via syncDocs.sh

---

### 4. 📄 404 Page

#### Issue
- Currently showing plain 404 page
- Previously had nice custom 404.html

#### Required
- Restore/create custom 404 page
- Match psychedelic theme
- Include navigation back to home
- Friendly error message
- Consider: Same style as main dApp's 404 (if it has one)

---

### 5. 📚 Content & Navigation

#### New Navbar Tab: "Future Plans"
**Create sidebar structure for:**

**Files from "Claude GPT export 2" folder:**
1. **creating a community platform.json**
   - Convert to: `community-platform-vision.md`
   - Sidebar entry: "Community Platform Vision"

2. **tokenizing church assets.json**
   - Convert to: `tokenizing-church-assets.md`
   - Sidebar entry: "Tokenizing Church Assets"

3. **Deploying Ethereum vs Monad-LayerZero.json**
   - Convert to: `ethereum-vs-monad-layerzero.md`
   - Sidebar entry: "Ethereum vs Monad-LayerZero"

**Sidebar Structure:**
```
Future Plans
├── Community Platform Vision
├── Tokenizing Church Assets
└── Ethereum vs Monad-LayerZero
```

#### New Homepage Button: "Spiritual Foundation"
- **Text:** "Spiritual Foundation"
- **Link:** `/docs/whitepaper/SpiritualFoundation`
- **Style:** Match "Whitepaper" and "Read Docs" buttons
- **Location:** Homepage alongside existing buttons

#### Homepage Content Addition
**Add to Docusaurus Homepage:**
- **Content:** "A Sacred Preface for the Gratitude Protocol"
- **Source:** `docs/whitepaper/SpiritualFoundation.md`
- **Format:** Same style as "Poem of the Sacred Offering" on main dApp's Sacred Altar page
- **Styling:**
  - Centered text
  - Elegant typography
  - Psychedelic color accents
  - Breathing/glowing effects
  - Sacred aesthetic

---

### 6. 🔄 Content to Sync via syncDocs.sh

#### Additional Files to Add to SYNC_SOURCES

**Contact Card SVGs:**
```bash
"src/components/icons"  # All SVG icons
```

**Deployment Script:**
```bash
"deployTest/deployTest.sh"
"deployTest/deployTest_README.md"
"deployTest/TROUBLESHOOTING.md"
```

**Claude GPT Export 2:**
```bash
"Docusaurus | Gitbook/Claude GPT export 2"
```

**404 Page (if exists):**
```bash
"public/404.html"
```

#### Exclusions to Maintain
**DO NOT SYNC (keep private):**
- `.env` files
- Smart contracts (`contracts/`)
- Private keys
- Sensitive configuration
- Test data
- Local development files

**Current exclusions are correct - maintain them!**

---

## 🐛 Known Issues to Fix

### Main dApp Deployment Issue

**Problem:**
- Site loads at: `https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/`
- Shows only navbar and background (no content)
- Clicking home button redirects to: `https://drasticstatic.github.io`
- Home page renders correctly at wrong URL

**Likely Causes:**
1. `homepage` field in package.json incorrect
2. React Router base path misconfigured
3. 404.html redirect logic incorrect
4. Asset paths not resolving correctly

**Investigation Needed:**
1. Check deployed package.json homepage field
2. Verify React Router basename configuration
3. Check 404.html redirect script
4. Verify PUBLIC_URL environment variable
5. Check index.html base href

**This is a CRITICAL issue for the main dApp - needs fixing!**

---

## 🎨 Design System Reference

### Colors (Psychedelic Theme)
```css
--primary-purple: #581c87, #7c3aed, #a78bfa
--accent-pink: #ec4899, #f472b6
--accent-cyan: #22d3ee
--accent-emerald: #34d399
--accent-amber: #fbbf24
```

### Animations
- **Breathing:** Subtle scale pulse (0.95 to 1.05)
- **Heartbeat:** Double pulse rhythm
- **Rotation:** Smooth 360° rotation (coin effect)
- **Glow:** Pulsing box-shadow with theme colors

### Typography
- **Font:** Inter
- **Base Size:** 16px
- **Line Height:** 1.6

---

## 📦 Assets Available (Synced)

### Images
- `docs/assets/EO.png` - Ethereal Offering logo
- `docs/assets/psanctuary-icon.webp` - Psanctuary logo
- `docs/assets/altar.png` - Altar image
- `docs/assets/drasticstatica.png` - Blog author profile

### Icons & Components (SYNCED - src/components/)
**IMPORTANT:** Entire src/components directory is now synced!

**Available Icons:**
- **ContactCardSVGs.js** - USE THIS for navbar contact icons (Discord, GitHub, X, etc.)
- BeakerIcon.js
- ContactIcon.js
- FlameIcon.js
- GearIcon.js
- GovernanceIcon.js
- MushroomClusterIcon.js
- MushroomIcon.js
- OfferingIcon.js
- SwapIcon.js
- **WhitepaperScrollIcon.js** - NEW animated scroll with pen writing
- **SpiritualFoundationIcon.js** - NEW animated church with divine light
- **IconAnimations.css** - All animation styles (breathing, heartbeat, sparkle, etc.)

**Animated Favicon:**
- **favicon.svg** - Animated SVG with rounded corners, rotation + breathing effects

### Scripts
- `deployTest.sh` - Deployment automation
- `syncDocs.sh` - Documentation sync
- `convert_chatgpt_robust.py` - Convert ChatGPT JSON exports to Markdown
- `batch_convert_json.sh` - Batch convert all JSON files

### Converted ChatGPT Conversations (Markdown)
**Successfully Converted (5 files):**
1. **blockchain project report.md** - Comprehensive blockchain development report
2. **chat export plan.md** - Documentation planning conversation
3. **creating a community platform.md** - Community platform vision (Future Plans)
4. **Deploying Ethereum vs Monad-LayerZero.md** - Deployment strategy (Future Plans)
5. **tokenizing church assets.md** - Asset tokenization plans (Future Plans)

**Note:** blockchain development assistance.json is corrupted and could not be converted.
All converted files are in their respective chatGPT json exports directories.

---

## 🛠️ Technical Implementation Notes

### Animated Favicon
**Options:**
1. **Animated GIF:** Simple but limited
2. **APNG:** Better quality, broader support
3. **SVG + CSS:** Best quality, modern browsers
4. **Canvas API:** Most control, more complex

**Recommended Approach:**
```html
<!-- In Docusaurus config or index.html -->
<link rel="icon" type="image/svg+xml" href="/img/favicon.svg">
```

**SVG with CSS Animation:**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <style>
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .rotating {
      animation: rotate 3s linear infinite;
      transform-origin: center;
    }
  </style>
  <g class="rotating">
    <!-- EO.png content here -->
  </g>
</svg>
```

### Breathing Effect CSS
```css
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

.breathing {
  animation: breathe 3s ease-in-out infinite;
}
```

### Heartbeat Effect CSS
```css
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.1); }
  20% { transform: scale(1); }
  30% { transform: scale(1.1); }
  40% { transform: scale(1); }
}

.heartbeat {
  animation: heartbeat 2s ease-in-out infinite;
}
```

---

## 📝 Step-by-Step Implementation

### Phase 1: Branding & Icons
1. Update favicon to EO.png (circular, animated)
2. Update home icon to EO.png (rotating)
3. Add Psanctuary watermark with breathing effect

### Phase 2: Navbar Enhancement
1. Add breathing effect to navbar
2. Update home button to match main dApp
3. Add Lucide icons to navbar items
4. Add contact card SVGs to right side
5. Position Psanctuary icon on right side

### Phase 3: Content & Navigation
1. Create "Future Plans" navbar tab
2. Convert JSON files to markdown
3. Create sidebar structure
4. Add "Spiritual Foundation" button
5. Add Sacred Preface to homepage

### Phase 4: Links & Integration
1. Add "Launch dApp" button with correct URL
2. Fix/create custom 404 page
3. Test all links and navigation

### Phase 5: Testing & Deployment
1. Test locally
2. Verify all animations work
3. Check responsive design
4. Deploy to GitHub Pages
5. Verify live site

---

## 🔗 Important Links

### Main dApp
- **Live:** https://drasticstatic.github.io/gratitude-token-project_testPublish_2025-10-10/
- **Repo:** github.com/drasticstatic/gratitude-token-project_testPublish_2025-10-10

### Docusaurus Site
- **Live:** https://drasticstatic.github.io/gratitude-token-project_docs/
- **Repo:** github.com/drasticstatic/gratitude-token-project_docs

### Private Dev Repo
- **Repo:** github.com/drasticstatic/gratitude-token-project

---

## ✅ Success Criteria

- [ ] Favicon is EO.png, circular, and rotating
- [ ] Home icon matches main dApp exactly
- [ ] Psanctuary watermark breathing on page
- [ ] Navbar has breathing effect
- [ ] All navbar items have Lucide icons with effects
- [ ] Contact card SVGs on right side with effects
- [ ] "Launch dApp" button links correctly
- [ ] Custom 404 page restored
- [ ] "Future Plans" tab with sidebar complete
- [ ] "Spiritual Foundation" button added
- [ ] Sacred Preface on homepage
- [ ] All animations smooth and performant
- [ ] Site matches main dApp aesthetic

---

**Remember:** This site represents the spiritual and technical heart of the Ethereal Offering project. Every detail matters. 🍄✨⛪

