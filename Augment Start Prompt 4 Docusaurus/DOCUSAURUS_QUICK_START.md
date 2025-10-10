# 🚀 Ethereal Offering Docusaurus - Quick Start Guide

## 📋 Overview

This guide will help you set up the Ethereal Offering documentation site using Docusaurus in the public repository:
- **Repo:** https://github.com/drasticstatic/gratitude-token-project_docs
- **Live Site:** https://drasticstatic.github.io/gratitude-token-project_docs

## 🎯 Goals

1. Create a professional documentation site matching the main dApp aesthetic
2. Provide comprehensive whitepaper, tutorials, and blog
3. Enable easy content updates via Markdown
4. Deploy automatically to GitHub Pages
5. Cross-link with main dApp for seamless user experience

## ⚡ Quick Setup (5 Minutes)

### Step 1: Initialize Docusaurus

```bash
# Navigate to your projects folder
cd ~/Documents/projects

# Create new Docusaurus site
npx create-docusaurus@latest gratitude-token-project_docs classic

# Navigate into the new site
cd gratitude-token-project_docs

# Start development server
npm start
```

Your site is now running at http://localhost:3000

### Step 2: Configure for GitHub Pages

Edit `docusaurus.config.js`:

```javascript
module.exports = {
  title: 'Ethereal Offering',
  tagline: 'Sacred Blockchain Ceremonies for Spiritual Recovery',
  url: 'https://drasticstatic.github.io',
  baseUrl: '/gratitude-token-project_docs/',
  organizationName: 'drasticstatic',
  projectName: 'gratitude-token-project_docs',
  trailingSlash: false,
  
  // ... rest of config
};
```

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial Docusaurus setup"
git branch -M main
git remote add origin https://github.com/drasticstatic/gratitude-token-project_docs.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run build
GIT_USER=drasticstatic USE_SSH=true npm run deploy
```

Wait 1-2 minutes, then visit:
👉 https://drasticstatic.github.io/gratitude-token-project_docs

## 🎨 Customization Checklist

### [ ] Update Theme Colors

Edit `src/css/custom.css`:
- Set primary color to `#7c3aed` (purple)
- Add gradient backgrounds
- Configure glassmorphism effects
- Add custom animations

### [ ] Create Landing Page

Edit `src/pages/index.js`:
- Add hero section with mycelial background
- Create features grid
- Add stats section
- Include roadmap preview

### [ ] Write Core Documentation

Create these files in `docs/`:
- `introduction/elevator-pitch.md`
- `introduction/problem-statement.md`
- `introduction/solution-overview.md`
- `introduction/vision-mission.md`
- `tokenomics/etho-token.md`
- `tokenomics/psilo-token.md`
- `tokenomics/psd-governance-token.md`
- `sacred-altar/overview.md`
- `dao-governance/overview.md`

### [ ] Set Up Blog

Create initial posts in `blog/`:
- `2025-01-10-introducing-ethereal-offering.md`
- `2025-01-15-psilocybin-research-overview.md`
- `2025-01-20-dao-governance-explained.md`

### [ ] Configure Navigation

Edit `docusaurus.config.js` navbar:
```javascript
navbar: {
  items: [
    { type: 'doc', docId: 'introduction/elevator-pitch', label: 'Whitepaper' },
    { to: '/tutorials', label: 'Tutorials' },
    { to: '/blog', label: 'Blog' },
    { href: 'https://drasticstatic.github.io/gratitude-token-project', label: 'Launch dApp' },
  ],
},
```

### [ ] Add Custom Components

Create in `src/components/`:
- `HeroSection.js` - Animated hero with mycelial background
- `FeaturesSection.js` - Feature cards grid
- `StatsSection.js` - Live stats from blockchain
- `RoadmapSection.js` - Visual timeline

### [ ] Link from Main dApp

In main dApp, update whitepaper button:
```jsx
<Link to="https://drasticstatic.github.io/gratitude-token-project_docs/docs/introduction/elevator-pitch">
  📜 Read Whitepaper
</Link>
```

## 📁 Recommended File Structure

```
gratitude-token-project_docs/
├── docs/
│   ├── introduction/
│   │   ├── elevator-pitch.md
│   │   ├── problem-statement.md
│   │   ├── solution-overview.md
│   │   └── vision-mission.md
│   ├── tokenomics/
│   │   ├── etho-token.md
│   │   ├── psilo-token.md
│   │   ├── psd-governance-token.md
│   │   └── distribution.md
│   ├── sacred-altar/
│   │   ├── overview.md
│   │   ├── ceremony-guide.md
│   │   └── proof-of-burn-nfts.md
│   ├── mushroom-nfts/
│   │   ├── genetics-system.md
│   │   ├── cross-breeding.md
│   │   └── daily-shrooms.md
│   ├── dao-governance/
│   │   ├── overview.md
│   │   ├── proposal-system.md
│   │   └── voting-mechanics.md
│   ├── amm-swap/
│   │   ├── liquidity-pools.md
│   │   └── trading-mechanics.md
│   ├── recovery-integration/
│   │   ├── psychedelics-in-recovery.md
│   │   └── circle-of-light-fellowship.md
│   ├── technical/
│   │   ├── smart-contracts.md
│   │   └── architecture.md
│   ├── legal/
│   │   ├── constitution.md
│   │   └── disclaimers.md
│   └── roadmap/
│       ├── phase-1-foundation.md
│       ├── phase-2-pir-integration.md
│       ├── phase-3-circle-of-light.md
│       └── phase-4-policy-reform.md
├── blog/
│   ├── 2025-01-10-introducing-ethereal-offering.md
│   ├── 2025-01-15-psilocybin-research.md
│   └── 2025-01-20-dao-governance.md
├── src/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── FeaturesSection.js
│   │   └── StatsSection.js
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       ├── index.js
│       └── tutorials.js
├── static/
│   ├── img/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   └── og-image.png
│   └── fonts/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

## 🎨 Design Consistency

### Colors to Use
- **Purple:** `#7c3aed` (primary)
- **Pink:** `#ec4899` (accent)
- **Gold:** `#fbbf24` (highlights)
- **Green:** `#22c55e` (success)
- **Gray:** `#d1d5db` (text)

### Fonts
- **Headings:** System fonts (same as main dApp)
- **Body:** System fonts
- **Code:** Monospace

### Effects
- **Glassmorphism:** `backdrop-filter: blur(10px)`
- **Gradients:** Purple to pink, gold to orange
- **Shadows:** Glowing effects with color
- **Animations:** Heartbeat, breathing, sparkles

## 🔗 Cross-Linking

### From Docs to dApp
```markdown
[🚀 Try the Sacred Altar](https://drasticstatic.github.io/gratitude-token-project/altar)
```

### From dApp to Docs
```jsx
<Link to="https://drasticstatic.github.io/gratitude-token-project_docs/docs/sacred-altar/ceremony-guide">
  Learn How to Perform a Ceremony
</Link>
```

## 📝 Content Writing Tips

### Use Mycelial Metaphors
- "Spores of innovation"
- "Mycelial connections"
- "Fruiting bodies of success"
- "Substrate of blockchain"

### Tone
- Professional yet spiritual
- Educational and clear
- Inclusive and welcoming
- Transparent about risks

### Structure
- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Code examples for technical docs
- Analogies for complex concepts

## 🚀 Deployment Commands

### Local Development
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
GIT_USER=drasticstatic USE_SSH=true npm run deploy
```

### Sync from Private Repo
```bash
./syncDocs.sh
```

## 📊 Success Checklist

- [ ] Site loads at https://drasticstatic.github.io/gratitude-token-project_docs
- [ ] Custom theme matches main dApp aesthetic
- [ ] All core documentation pages created
- [ ] Blog has at least 3 posts
- [ ] Tutorials cover key user flows
- [ ] FAQ and glossary complete
- [ ] Cross-links work between dApp and docs
- [ ] Mobile responsive
- [ ] SEO optimized (meta tags, sitemap)
- [ ] Analytics integrated (optional)

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
npm run clear
npm run build
```

### Deployment Fails
```bash
# Check SSH keys
ssh -T git@github.com

# Use HTTPS instead
GIT_USER=drasticstatic npm run deploy
```

### Styles Not Updating
```bash
# Clear browser cache
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

## 📚 Resources

- **Docusaurus Docs:** https://docusaurus.io/docs
- **GitHub Pages:** https://docs.github.com/en/pages
- **Markdown Guide:** https://www.markdownguide.org
- **React Docs:** https://react.dev

## 🎯 Next Steps

1. **Initialize site** with `npx create-docusaurus`
2. **Customize theme** with purple/pink gradients
3. **Write elevator pitch** and core docs
4. **Create landing page** with hero and features
5. **Deploy to GitHub Pages**
6. **Link from main dApp**
7. **Announce to community**

---

**You now have everything you need to build a beautiful, professional documentation site for Ethereal Offering! 🍄✨**

## 📞 Support

- **Discord:** https://discord.gg/psanctuary
- **GitHub Issues:** https://github.com/drasticstatic/gratitude-token-project_docs/issues
- **Email:** support@psanctuary.org

---

*"We are the fruiting bodies; the mycelium is our shared connection."*

