# 🍄 Ethereal Offering - Complete Project Brief for Docusaurus Documentation Site

## 📋 Project Context

This document serves as a comprehensive prompt for building the **Gratitude Token Project Documentation Site** using Docusaurus, hosted on GitHub Pages at:
- **Public Docs Repo:** https://github.com/drasticstatic/gratitude-token-project_docs
- **Private Dev Repo:** https://github.com/drasticstatic/gratitude-token-project (private)

The documentation site should mirror the psychedelic, mycelial aesthetic of the main dApp while providing clear, professional documentation, whitepaper, tutorials, and blog content.

---

## 🎯 Elevator Pitch

**Ethereal Offering** is a Web3 ceremonial platform for Psanctuary Church that transforms blockchain technology into a sacred tool for spiritual recovery and community healing. 

Users burn ETHO tokens in ceremonial offerings, receiving soulbound Proof of Burn NFTs as eternal witnesses to their intentions. The platform combines:
- **Sacred Token Burning** - Ceremonial ETHO offerings to fund community treasury
- **Mushroom NFT Ecosystem** - Collectible genetic strains with cross-breeding mechanics
- **DAO Governance** - Democratic decision-making via PSD token voting
- **AMM/Swap** - Decentralized ETHO/PSD trading with liquidity rewards
- **Recovery Integration** - Partnerships with Psychedelics in Recovery (PIR) and Circle of Light Fellowship

Built on Ether-1 blockchain with React, Hardhat, OpenZeppelin v5, RainbowKit, and Wagmi, Ethereal Offering creates a transparent, censorship-resistant platform for psychedelic spirituality, harm reduction education, and policy reform advocacy.

**In one sentence:** *Ethereal Offering is a blockchain-based ceremonial platform that transforms token burning into sacred offerings, funding recovery communities and psychedelic research through transparent DAO governance.*

---

## 🎨 UI/UX Design System

### Color Palette
```css
/* Primary Colors */
--purple-primary: #7c3aed;
--purple-dark: #581c87;
--purple-light: #a78bfa;

/* Accent Colors */
--pink-primary: #ec4899;
--pink-light: #f472b6;
--gold-primary: #fbbf24;
--green-primary: #22c55e;
--green-dark: #10b981;
--orange-primary: #f97316;
--red-primary: #ef4444;

/* Neutrals */
--gray-light: #d1d5db;
--gray-medium: #9ca3af;
--gray-dark: #1a1a1a;
--black: #000000;
--white: #ffffff;
```

### Typography
- **Headings:** System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
- **Body:** Same system font stack for consistency
- **Poem/Ceremonial Text:** Georgia, serif (italic for emphasis)
- **Code:** Monospace (Consolas, Monaco, 'Courier New')

### Visual Effects
1. **Glassmorphism**
   - `backdrop-filter: blur(8px-12px)`
   - Semi-transparent backgrounds: `rgba(124,58,237,0.1)` to `rgba(124,58,237,0.3)`
   - Subtle borders: `2px solid rgba(124,58,237,0.3)`

2. **Gradients**
   - Purple to Pink: `linear-gradient(135deg, #7c3aed, #ec4899)`
   - Gold to Orange: `linear-gradient(135deg, #fbbf24, #f97316)`
   - Green to Teal: `linear-gradient(135deg, #22c55e, #10b981)`

3. **Shadows**
   - Glow effects: `box-shadow: 0 4px 12px rgba(124,58,237,0.4), 0 0 20px rgba(236,72,153,0.3)`
   - Text shadows: `text-shadow: 0 0 20px currentColor`

4. **Animations**
   - Heartbeat: `@keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }`
   - Breathing: Opacity and scale pulsing
   - Sparkles: Traveling particles with opacity animations
   - Mycelial connections: Animated SVG paths connecting elements

### Component Patterns
1. **Cards**
   - Rounded corners: `border-radius: 16px-20px`
   - Glassmorphism background
   - Shimmer borders (animated gradient borders)
   - Hover effects: `transform: scale(1.02)` with transition

2. **Buttons**
   - Gradient backgrounds
   - Rounded: `border-radius: 12px`
   - Hover: Scale 1.05, enhanced glow
   - Active: Scale 0.95

3. **Expandable Sections**
   - Framer Motion AnimatePresence
   - Smooth height transitions
   - ChevronDown/ChevronUp icons
   - Color-coded headers

4. **SVG Icons**
   - Custom animated SVGs (mushrooms, blockchain cubes, mycelial networks)
   - Gradient fills with `<linearGradient>`
   - Pulsing, rotating, and morphing animations
   - Filter effects: `<feGaussianBlur>`, `<feMerge>`

### Mycelial Network Theme
- **Concept:** Interconnected nodes representing community, like mycelium connecting mushrooms
- **Visual:** Canvas-based network with animated lines connecting elements
- **Colors:** Purple/pink gradients with glowing nodes
- **Metaphor:** "We are the fruiting bodies; the mycelium is our shared connection"

### Mushroom Cultivation Terminology
- **Spores:** Ideas, proposals, new members
- **Mycelium:** Community network, DAO infrastructure
- **Fruiting:** Successful projects, NFT minting, token launches
- **Substrate:** Foundation (blockchain, smart contracts)
- **Colonization:** Community growth, adoption
- **Flush:** Batch of NFTs, governance cycles

---

## 📚 Docusaurus Site Structure

### Landing Page
**Hero Section:**
- Animated mycelial network background
- Blockchain cube perimeter around title
- Gradient text: "Ethereal Offering"
- Subtitle: "Sacred Blockchain Ceremonies for Spiritual Recovery"
- CTA buttons: "Read Whitepaper" | "Launch dApp" | "Join Community"

**Features Grid:**
1. 🔥 Sacred Altar - Token burning ceremonies
2. 🍄 Mushroom NFTs - Genetic breeding ecosystem
3. 🏛️ DAO Governance - Community-driven decisions
4. 💱 AMM/Swap - Decentralized trading
5. 🕊️ Recovery Integration - PIR & Circle of Light
6. 📜 Policy Advocacy - Psychedelic reform

**Quick Stats:**
- Total ETHO Burned: [Dynamic]
- Active DAO Members: [Dynamic]
- NFTs Minted: [Dynamic]
- Treasury Value: [Dynamic]

**Roadmap Preview:**
- Visual timeline with 4 phases
- Links to detailed roadmap page

### Whitepaper (GitBook-style Documentation)

**Structure:**
```
docs/
├── introduction/
│   ├── elevator-pitch.md
│   ├── problem-statement.md
│   ├── solution-overview.md
│   └── vision-mission.md
├── tokenomics/
│   ├── etho-token.md
│   ├── psilo-token.md
│   ├── psd-governance-token.md
│   ├── distribution.md
│   └── burn-mechanics.md
├── sacred-altar/
│   ├── overview.md
│   ├── ceremony-guide.md
│   ├── proof-of-burn-nfts.md
│   └── spiritual-significance.md
├── mushroom-nfts/
│   ├── genetics-system.md
│   ├── cross-breeding.md
│   ├── daily-shrooms.md
│   └── rarity-tiers.md
├── dao-governance/
│   ├── overview.md
│   ├── proposal-system.md
│   ├── voting-mechanics.md
│   ├── treasury-management.md
│   └── holacracy-structure.md
├── amm-swap/
│   ├── liquidity-pools.md
│   ├── trading-mechanics.md
│   ├── fees-rewards.md
│   └── slippage-protection.md
├── recovery-integration/
│   ├── psychedelics-in-recovery.md
│   ├── circle-of-light-fellowship.md
│   ├── harm-reduction.md
│   └── integration-support.md
├── technical/
│   ├── smart-contracts.md
│   ├── architecture.md
│   ├── security-audits.md
│   └── blockchain-choice.md
├── legal/
│   ├── constitution.md
│   ├── disclaimers.md
│   ├── religious-freedom.md
│   └── compliance.md
└── roadmap/
    ├── phase-1-foundation.md
    ├── phase-2-pir-integration.md
    ├── phase-3-circle-of-light.md
    └── phase-4-policy-reform.md
```

### Tutorials

**User Guides:**
1. **Getting Started**
   - Setting up MetaMask
   - Connecting to Ether-1 network
   - Acquiring ETHO tokens

2. **Sacred Altar Guide**
   - Preparing for ceremony
   - Burning tokens step-by-step
   - Viewing Proof of Burn NFTs

3. **Mushroom NFT Guide**
   - Claiming daily shrooms
   - Understanding genetics
   - Cross-breeding tutorial

4. **DAO Participation**
   - Acquiring PSD tokens
   - Creating proposals
   - Voting on governance

5. **AMM/Swap Tutorial**
   - Adding liquidity
   - Swapping tokens
   - Earning fees

**Developer Guides:**
1. **Smart Contract Integration**
   - ABI documentation
   - Web3 connection examples
   - Event listening

2. **Running Local Node**
   - Hardhat setup
   - Deploying contracts
   - Testing suite

3. **Contributing to Codebase**
   - Git workflow
   - Code standards
   - Pull request process

### Blog

**Categories:**
- 📰 Project Updates
- 🔬 Research & Education
- 🎨 Community Spotlights
- 🏛️ Governance Proposals
- 🍄 Psychedelic Science
- ⚖️ Policy & Advocacy

**Sample Posts:**
1. "Introducing Ethereal Offering: Sacred Blockchain Ceremonies"
2. "The Science of Psilocybin-Assisted Therapy"
3. "How DAO Governance Empowers Recovery Communities"
4. "Mushroom NFT Genetics: A Deep Dive"
5. "Circle of Light Fellowship Integration Announcement"
6. "Harm Reduction Best Practices for Psychedelic Use"

### Additional Pages

1. **FAQ**
   - General questions
   - Technical questions
   - Legal questions
   - Spiritual/ceremonial questions

2. **Glossary**
   - Blockchain terms
   - Psychedelic terms
   - Mushroom cultivation terms
   - DAO governance terms

3. **Community**
   - Discord link
   - Telegram link
   - Twitter/X link
   - GitHub link
   - Mighty Networks link

4. **Resources**
   - Research papers
   - Harm reduction guides
   - Integration resources
   - Policy reform organizations

5. **Team**
   - Core contributors
   - Advisors
   - Partner organizations

6. **Press Kit**
   - Logos
   - Brand guidelines
   - Media assets
   - Press releases

---

## 🛠️ Technical Implementation Notes

### Docusaurus Configuration

**docusaurus.config.js:**
```javascript
module.exports = {
  title: 'Ethereal Offering',
  tagline: 'Sacred Blockchain Ceremonies for Spiritual Recovery',
  url: 'https://drasticstatic.github.io',
  baseUrl: '/gratitude-token-project_docs/',
  organizationName: 'drasticstatic',
  projectName: 'gratitude-token-project_docs',
  trailingSlash: false,
  
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Ethereal Offering',
      logo: {
        alt: 'Psanctuary Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/elevator-pitch',
          position: 'left',
          label: 'Whitepaper',
        },
        {
          to: '/tutorials',
          label: 'Tutorials',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://drasticstatic.github.io/gratitude-token-project',
          label: 'Launch dApp',
          position: 'right',
        },
        {
          href: 'https://github.com/drasticstatic/gratitude-token-project_docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Whitepaper', to: '/docs/introduction/elevator-pitch' },
            { label: 'Tutorials', to: '/tutorials' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/psanctuary' },
            { label: 'Telegram', href: 'https://t.me/psanctuary' },
            { label: 'Twitter', href: 'https://twitter.com/psanctuary' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/drasticstatic' },
            { label: 'Launch dApp', href: 'https://drasticstatic.github.io/gratitude-token-project' },
          ],
        },
      ],
      copyright: `Built with 💜 by the Psanctuary Community | ${new Date().getFullYear()}`,
    },
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/drasticstatic/gratitude-token-project_docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/drasticstatic/gratitude-token-project_docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
```

### Custom CSS (src/css/custom.css)

```css
/**
 * Ethereal Offering - Custom Docusaurus Theme
 * Psychedelic, mycelial aesthetic matching main dApp
 */

:root {
  /* Primary Colors */
  --purple-primary: #7c3aed;
  --purple-dark: #581c87;
  --purple-light: #a78bfa;
  --pink-primary: #ec4899;
  --pink-light: #f472b6;
  --gold-primary: #fbbf24;
  --green-primary: #22c55e;
  --orange-primary: #f97316;

  /* Docusaurus overrides */
  --ifm-color-primary: #7c3aed;
  --ifm-color-primary-dark: #6d2fd9;
  --ifm-color-primary-darker: #581c87;
  --ifm-color-primary-darkest: #4c1d95;
  --ifm-color-primary-light: #8b5cf6;
  --ifm-color-primary-lighter: #a78bfa;
  --ifm-color-primary-lightest: #c4b5fd;

  --ifm-background-color: #000000;
  --ifm-background-surface-color: #1a1a1a;
  --ifm-font-color-base: #d1d5db;
  --ifm-heading-color: #ffffff;

  --ifm-code-font-size: 95%;
  --ifm-navbar-background-color: rgba(0, 0, 0, 0.95);
  --ifm-footer-background-color: #0a0a0a;
}

/* Dark mode (default) */
[data-theme='dark'] {
  --ifm-background-color: #000000;
  --ifm-background-surface-color: #1a1a1a;
}

/* Light mode */
[data-theme='light'] {
  --ifm-background-color: #f9fafb;
  --ifm-background-surface-color: #ffffff;
  --ifm-font-color-base: #1a1a1a;
}

/* Glassmorphism cards */
.card {
  background: linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.05));
  border: 2px solid rgba(124,58,237,0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(124,58,237,0.2);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(124,58,237,0.4);
  border-color: rgba(124,58,237,0.5);
}

/* Gradient headings */
h1, h2 {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Buttons */
.button {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  border: 2px solid #a78bfa;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(124,58,237,0.4);
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(124,58,237,0.6);
}

.button:active {
  transform: scale(0.95);
}

/* Navbar */
.navbar {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(124,58,237,0.3);
}

.navbar__logo {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Sidebar */
.menu {
  background: linear-gradient(180deg, rgba(124,58,237,0.05), rgba(0,0,0,0.1));
  border-right: 1px solid rgba(124,58,237,0.2);
}

.menu__link {
  border-radius: 8px;
  transition: all 0.2s ease;
}

.menu__link:hover {
  background: rgba(124,58,237,0.2);
  color: #a78bfa;
}

.menu__link--active {
  background: linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.2));
  border-left: 3px solid #7c3aed;
  color: #a78bfa;
}

/* Code blocks */
.prism-code {
  background: rgba(26, 26, 26, 0.95);
  border: 1px solid rgba(124,58,237,0.3);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

/* Admonitions */
.admonition {
  border-radius: 12px;
  border-left: 4px solid;
  backdrop-filter: blur(8px);
}

.admonition-note {
  background: rgba(124,58,237,0.1);
  border-color: #7c3aed;
}

.admonition-tip {
  background: rgba(34,197,94,0.1);
  border-color: #22c55e;
}

.admonition-warning {
  background: rgba(251,191,36,0.1);
  border-color: #fbbf24;
}

.admonition-danger {
  background: rgba(239,68,68,0.1);
  border-color: #ef4444;
}

/* Footer */
.footer {
  background: linear-gradient(180deg, #0a0a0a, #000000);
  border-top: 1px solid rgba(124,58,237,0.3);
}

.footer__link-item:hover {
  color: #a78bfa;
  text-decoration: underline;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #7c3aed, #ec4899);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #8b5cf6, #f472b6);
}

/* Sparkle animation for special elements */
@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

.sparkle {
  animation: sparkle 2s ease-in-out infinite;
}

/* Breathing animation for hero elements */
@keyframes breathing {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
}

.breathing {
  animation: breathing 4s ease-in-out infinite;
}
```

### React Components for Landing Page

**src/components/HeroSection.js:**
```jsx
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.mycelialBackground}>
        {/* Animated mycelial network canvas */}
        <canvas id="mycelial-canvas" className={styles.canvas}></canvas>
      </div>

      <div className="container">
        <h1 className={styles.heroTitle}>
          <span className={styles.gradient}>Ethereal Offering</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Sacred Blockchain Ceremonies for Spiritual Recovery
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction/elevator-pitch">
            📜 Read Whitepaper
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://drasticstatic.github.io/gratitude-token-project">
            🚀 Launch dApp
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/psanctuary">
            💬 Join Community
          </Link>
        </div>
      </div>
    </header>
  );
}
```

**src/components/FeaturesSection.js:**
```jsx
import React from 'react';
import styles from './FeaturesSection.module.css';

const features = [
  {
    title: '🔥 Sacred Altar',
    description: 'Ceremonial token burning with Proof of Burn NFTs',
    color: '#7c3aed',
  },
  {
    title: '🍄 Mushroom NFTs',
    description: 'Genetic breeding ecosystem with cross-breeding',
    color: '#ec4899',
  },
  {
    title: '🏛️ DAO Governance',
    description: 'Community-driven decisions via PSD token voting',
    color: '#fbbf24',
  },
  {
    title: '💱 AMM/Swap',
    description: 'Decentralized ETHO/PSD trading with liquidity rewards',
    color: '#22c55e',
  },
  {
    title: '🕊️ Recovery Integration',
    description: 'Partnerships with PIR and Circle of Light Fellowship',
    color: '#a78bfa',
  },
  {
    title: '📜 Policy Advocacy',
    description: 'Psychedelic reform and religious freedom',
    color: '#f97316',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Platform Features</h2>
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard} style={{borderColor: feature.color}}>
              <h3 style={{color: feature.color}}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 📝 Content Writing Guidelines

### Tone & Voice
- **Professional yet Spiritual:** Balance technical accuracy with ceremonial reverence
- **Inclusive & Welcoming:** Open to all backgrounds, non-judgmental
- **Educational:** Explain blockchain and psychedelic concepts clearly
- **Transparent:** Honest about risks, limitations, and legal complexities
- **Empowering:** Focus on community autonomy and self-governance

### Writing Style
- Use **active voice** for clarity
- **Short paragraphs** (2-4 sentences) for readability
- **Bullet points** for lists and key takeaways
- **Code examples** for technical documentation
- **Analogies** to explain complex concepts (mycelium = network, fruiting = success)

### Mushroom/Mycelial Metaphors
- "Spores of innovation"
- "Mycelial connections across the community"
- "Fruiting bodies of successful governance"
- "Substrate of blockchain technology"
- "Colonizing new territories of spiritual practice"
- "Flush of new NFTs"

### SEO Keywords
- Psychedelic DAO
- Sacred token burning
- Blockchain ceremonies
- Psilocybin NFTs
- Decentralized recovery
- Entheogenic spirituality
- Harm reduction blockchain
- Religious freedom crypto

---

## 🔗 Cross-Linking Strategy

### From Main dApp to Docs Site
- **Whitepaper Button:** Links to `/docs/introduction/elevator-pitch`
- **FAQ Links:** Deep links to specific FAQ sections
- **Tutorial Links:** "Learn More" buttons link to relevant tutorials
- **Blog Updates:** News section links to latest blog posts

### From Docs Site to Main dApp
- **Launch dApp Button:** Prominent in navbar and hero
- **Try It Now CTAs:** Throughout tutorials
- **Live Demo Links:** In technical documentation

### Internal Cross-Links
- Related docs at bottom of each page
- "See also" sections
- Glossary term links
- Tutorial prerequisites

---

## 🎯 Success Metrics

### Documentation Goals
- **Clarity:** Users can complete tasks without external help
- **Completeness:** All features documented
- **Accuracy:** Technical details match implementation
- **Accessibility:** Clear for both beginners and developers

### Engagement Metrics
- Page views on whitepaper
- Tutorial completion rates
- Blog post shares
- Community link clicks
- GitHub stars/forks

---

## 🚀 Deployment Workflow

1. **Local Development:**
   ```bash
   cd gratitude-token-project_docs
   npm start
   # Preview at http://localhost:3000
   ```

2. **Build & Deploy:**
   ```bash
   npm run build
   GIT_USER=drasticstatic USE_SSH=true npm run deploy
   ```

3. **Live Site:**
   - https://drasticstatic.github.io/gratitude-token-project_docs

4. **Sync from Private Repo:**
   ```bash
   ./syncDocs.sh
   ```

---

## 📋 Next Steps

1. **Initialize Docusaurus site** in public repo
2. **Create custom theme** matching dApp aesthetic
3. **Write core documentation** (whitepaper sections)
4. **Build landing page** with hero and features
5. **Set up blog** with initial posts
6. **Create tutorials** for key user flows
7. **Add FAQ and glossary**
8. **Deploy to GitHub Pages**
9. **Link from main dApp**
10. **Announce to community**

---

**This document provides everything needed to build a professional, beautiful Docusaurus documentation site that mirrors the psychedelic aesthetic of Ethereal Offering while providing clear, comprehensive information for users, developers, and the broader community.**


