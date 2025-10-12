# React Components Architecture

## 📦 Component Overview

This document explains the React component structure of Ethereal Offering, organized by functionality and purpose.

---

## 🏠 Core Layout Components

### `Navigation.js`
**Purpose:** Top navigation bar with wallet connection and page links

**Key Features:**
- Dynamic navbar height calculation (stored in CSS variable `--nav-height`)
- Wallet connection via RainbowKit
- Personalized welcome message with deterministic pseudonyms
- Responsive mobile menu
- Heartbeat animations on icons

**Important Variables:**
```javascript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [pseudonym, setPseudonym] = useState("");
const { address, isConnected } = useAccount();  // Wagmi hook
const chainId = useChainId();  // Current blockchain network
```

**Key Functions:**
- `generatePseudonym(address, config)` - Creates unique name from wallet address
- `isActive(path)` - Highlights current page in nav
- `handleClick()` - Triggers spore particle effect on link clicks

**CSS Classes:**
- `.navigation` - Main nav container
- `.nav-link-icon` - Icon with heartbeat animation
- `.force-heartbeat` - Ensures heartbeat on all icons

---

### `Footer.js`
**Purpose:** Site footer with links and copyright

**Features:**
- Social media links
- Copyright notice
- Consistent styling with site theme

---

### `DynamicPagePadding.js`
**Purpose:** Adjusts page content padding based on navbar height

**How it works:**
```javascript
useEffect(() => {
  const updatePadding = () => {
    const navHeight = document.querySelector('.navigation')?.offsetHeight || 80;
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
  };
  // Updates on resize and mount
}, []);
```

---

## 🎨 Visual Effect Components

### `MycelialNetwork.js`
**Purpose:** Full-page canvas-based network connecting title to interactive elements

**How it works:**
1. Creates `<canvas>` overlay covering entire page
2. Finds title element by `sourceId` prop
3. Detects all interactive elements (buttons, links, cards)
4. Draws animated lines (strands) connecting them
5. Adds glitter particles traveling along strands
6. Responds to mouse movement and clicks

**Key Variables:**
```javascript
const canvasRef = useRef(null);
const timeRef = useRef(0);  // Animation time
const glitterParticlesRef = useRef([]);  // Traveling particles
const clickPulsesRef = useRef([]);  // Click ripple effects
```

**Important Logic:**
```javascript
// Offset all Y coordinates by navbar height
const navH = document.querySelector('.navigation')?.offsetHeight || 0;
const centerY = (rect.top + window.scrollY + rect.height / 2) - navH;

// FAQ/Farm branching - curves around content
if (target.isFaqEdge || target.isFarmEdge) {
  const sideBias = target.x < title.x ? -1 : 1;
  offsetX += sideBias * 120;  // Curve to the side
}
```

**Animation Loop:**
- Uses `requestAnimationFrame` for smooth 60fps rendering
- Draws bezier curves with organic wobble
- Particles travel from title to targets and back

---

### `NeighboringNetwork.js`
**Purpose:** Subtle network connecting neighboring elements in reading order

**Differences from MycelialNetwork:**
- Lighter opacity (0.15 vs 0.3)
- Thinner lines (0.8px vs 1.5px)
- Connects adjacent elements, not all to title
- No glitter particles

---

### `HeroNetwork.js`
**Purpose:** SVG-based blockchain cube perimeter around hero title

**Structure:**
```javascript
<svg width="100%" height="600" viewBox="0 0 1400 600">
  {/* Top perimeter cubes */}
  <g transform="translate(700,40)">
    <rect width="60" height="60" />  {/* 3D cube */}
    <text>offer()</text>  {/* Code snippet */}
  </g>
  {/* Bottom, left, right perimeters */}
</svg>
```

**Key Features:**
- 3D isometric cube design
- Gradient fills and glowing effects
- Code snippets inside each cube
- Positioned to frame the title

---

### `ScatteredBlockchainCubes.js`
**Purpose:** Scattered blockchain cubes throughout page with web connections

**Structure:**
- 18+ cubes at various Y positions
- Mix of 65x65 squares (5 lines of code) and 70x30 rectangles (3 lines)
- Extensive tendril paths connecting cubes
- Smaller cubes (55x55) further down page

**Code Examples:**
```javascript
// Large square cube
<g transform="translate(100,180)">
  <rect x="0" y="0" width="65" height="65" rx="5" />
  <text x="4" y="14">mint()</text>
  <text x="4" y="24">NFT</text>
  <text x="4" y="34">id: 42</text>
  <text x="4" y="44">rare</text>
  <text x="4" y="54">done</text>
</g>

// Connecting path
<path d="M 130 210 Q 400 220, 1250 230" 
  stroke="url(#scatteredChainGrad)" 
  strokeDasharray="3 5" />
```

---

## 🍄 Interactive Components

### `MushroomFarm.js`
**Purpose:** Interactive mushroom growing mechanic

**State Management:**
```javascript
const [mushrooms, setMushrooms] = useState([]);
const [nutrients, setNutrients] = useState(100);
const [water, setWater] = useState(100);
```

**Key Functions:**
- `plantMushroom()` - Creates new mushroom with random traits
- `harvestMushroom(id)` - Removes mushroom, adds to inventory
- `waterPlants()` - Increases water level
- `addNutrients()` - Increases nutrient level

**Mushroom Object:**
```javascript
{
  id: Date.now(),
  type: 'Golden Teacher',  // Random from list
  stage: 0,  // 0-4 growth stages
  health: 100,
  planted: Date.now()
}
```

**Growth Logic:**
- Mushrooms grow over time (useEffect with interval)
- Require water and nutrients to thrive
- Can be harvested at stage 4

---

### `ImageGallery.js`
**Purpose:** Display NFT collection and cultivation photos

**Props:**
```javascript
{
  images: string[],  // Array of image URLs
  title: string,
  columns: number,  // Grid columns (default 3)
}
```

**Features:**
- Lazy loading images
- Placeholder shimmer effect
- Click to expand (future modal)
- Responsive grid layout

---

### `MycelialTitle.js`
**Purpose:** Wraps page titles with animated mycelial root SVG background

**Props:**
```javascript
{
  title: string,
  size: number,  // Font size in px
  icon: Component,  // Optional icon component
  isHomePage: boolean,  // Stronger network effect
  showBackground: boolean  // Show SVG roots
}
```

**SVG Structure:**
```javascript
<svg className="mycelial-title-bg">
  {/* Organic root paths */}
  <path d="M 50 100 Q 30 80, 20 60" 
    stroke="#7c3aed" 
    opacity="0.3" />
  {/* Pulsing nodes */}
  <circle cx="50" cy="100" r="3" fill="#ec4899">
    <animate attributeName="r" values="3;5;3" dur="2s" />
  </circle>
</svg>
```

---

## 🎭 Page Components

### `LandingPage.js`
**Purpose:** Homepage with hero section, features, FAQ

**Sections:**
1. **Hero** - Title, subtitle, CTA buttons
2. **Features** - Token burning, NFTs, DAO
3. **Mushroom Farm** - Interactive growing
4. **Image Gallery** - Cultivation photos
5. **FAQ** - Collapsible questions
6. **Roadmap** - Future plans (to be added)

**Key State:**
```javascript
const [showTokenInfo, setShowTokenInfo] = useState(false);
```

---

### `pages/AltarBurn.js`
**Purpose:** Ceremonial token burning interface

**Workflow:**
1. User enters amount of ETHO to burn
2. Confirms transaction
3. Smart contract burns tokens
4. Mints Proof of Burn NFT
5. Displays success with spore effect

**Key Functions:**
```javascript
const handleBurn = async () => {
  const tx = await altarContract.burn(amount);
  await tx.wait();
  celebrateTransaction();  // Spore particle effect
};
```

---

### `pages/DailyShrooms.js`
**Purpose:** Daily mushroom claiming and NFT gallery

**Features:**
- Claim daily DM tokens
- View mushroom NFT collection
- Mining & farming proposals
- Transaction history

---

### `pages/CrossBreeding.js`
**Purpose:** NFT genetic breeding interface

**Breeding Logic:**
1. Select two parent mushrooms
2. Pay breeding fee
3. Smart contract combines traits
4. Mint new offspring NFT with hybrid genetics

**Whitelist Gating:**
```javascript
const isWhitelisted = await crossBreedingContract.whitelist(address);
if (!isWhitelisted) {
  alert('You must be whitelisted to breed');
}
```

---

### `pages/Governance.js`
**Purpose:** DAO proposal creation and voting

**Proposal Structure:**
```javascript
{
  id: number,
  title: string,
  description: string,
  votesFor: BigNumber,
  votesAgainst: BigNumber,
  deadline: timestamp,
  executed: boolean
}
```

**Voting Process:**
1. Stake MDAO tokens
2. View active proposals
3. Cast vote (for/against)
4. Quorum reached → Execute proposal

---

## 🎨 Custom SVG Icons

### `icons/ContactIcon.js`, `icons/MushroomClusterIcon.js`, etc.
**Purpose:** Animated SVG icons for page titles

**Pattern:**
```javascript
export default function CustomIcon({ size = 64, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      {/* Animated paths with gradients */}
      <defs>
        <linearGradient id="iconGrad">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path stroke="url(#iconGrad)" strokeWidth="4">
        <animate attributeName="d" values="..." dur="3s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
```

---

## 🎬 Animation Components

### `effects/SporeEffect.js`
**Purpose:** Creates purple spore particle explosion

**Usage:**
```javascript
import { createSporeEffect } from './effects/SporeEffect';

// On button click
createSporeEffect(event.clientX, event.clientY);
```

**How it works:**
- Creates 30-50 particle divs
- Randomizes size, velocity, direction
- Fades out and removes after 2s

---

### `effects/TransactionSporeEffect.js`
**Purpose:** Celebration effect for successful transactions

**Enhanced features:**
- More particles (80-120)
- Larger radius
- Multiple colors (purple, pink, gold)
- Longer duration

---

## 🔧 Utility Components

### `CustomConnectButton.js`
**Purpose:** Styled wallet connection button

**Features:**
- Shows connected address (truncated)
- Network indicator
- Sparkly border animation
- Heartbeat pulse

---

### `TransactionHistory.js`
**Purpose:** Display recent blockchain transactions

**Props:**
```javascript
{
  transactions: [{
    hash: string,
    type: string,  // 'burn', 'mint', 'vote'
    amount: string,
    timestamp: number
  }]
}
```

---

## 📚 Best Practices

### Component Organization
1. **Imports** - External libraries first, then local
2. **State** - useState hooks at top
3. **Effects** - useEffect hooks after state
4. **Handlers** - Event handler functions
5. **Render** - JSX return statement

### Performance
- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers passed to children
- Lazy load images with `loading="lazy"`
- Debounce resize/scroll events

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<footer>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios

---

*Next: [02-Smart-Contracts.md](./02-Smart-Contracts.md) - Solidity contract architecture*

