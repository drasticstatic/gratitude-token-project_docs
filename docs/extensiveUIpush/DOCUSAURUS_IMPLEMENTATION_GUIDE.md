# Docusaurus Implementation Guide

## 🎯 Step-by-Step Setup for gratitude-token-project_docs

This guide walks you through implementing all the stunning UI features from the main React app into your Docusaurus documentation site.

---

## Phase 1: Initial Setup (15 minutes)

### Step 1: Install Dependencies

```bash
cd /path/to/gratitude-token-project_docs

# Install search plugin (choose one)
npm install --save @docusaurus/theme-search-algolia  # For Algolia
# OR
npm install --save @easyops-cn/docusaurus-search-local  # For local search

# Install additional plugins
npm install --save @docusaurus/plugin-ideal-image
npm install --save @docusaurus/plugin-pwa
```

### Step 2: Copy Assets

```bash
# Create directories
mkdir -p static/img
mkdir -p static/img/gallery
mkdir -p src/components
mkdir -p src/css

# Copy images from main React app
cp /path/to/gratitude-token-project/public/images/EO.png static/img/
cp /path/to/gratitude-token-project/public/images/*.svg static/img/
cp /path/to/gratitude-token-project/public/images/*.png static/img/
cp /path/to/gratitude-token-project/public/images/gallery/* static/img/gallery/
```

---

## Phase 2: Configure Docusaurus (30 minutes)

### Step 3: Update docusaurus.config.js

<augment_code_snippet path="extensiveUIpush/docusaurus.config.js" mode="EXCERPT">
````javascript
const config = {
  title: 'Ethereal Offering',
  tagline: 'Sacred Token Burning & Mushroom NFT Ecosystem',
  favicon: 'img/EO.png',
  url: 'https://drasticstatic.github.io',
  baseUrl: '/gratitude-token-project_docs/',
  
  themeConfig: {
    // Navbar with spinning logo
    navbar: {
      title: 'Ethereal Offering',
      logo: {
        alt: 'Ethereal Offering Logo',
        src: 'img/EO.png',
        className: 'navbar-logo-spin',  // Custom CSS class
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/features',
          label: 'Features',
          position: 'left',
        },
        {
          to: '/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          href: 'https://github.com/drasticstatic/gratitude-token-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Features',
              to: '/features',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/psanctuary',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/psanctuary',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/drasticstatic/gratitude-token-project',
            },
            {
              label: 'Roadmap',
              to: '/roadmap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Psanctuary Church. Built with Docusaurus.`,
    },
    
    // Color mode
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    
    // Search (Algolia example)
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'ethereal-offering',
      contextualSearch: true,
    },
  },
};
````
</augment_code_snippet>

---

## Phase 3: Custom Styling (20 minutes)

### Step 4: Create Custom CSS

Create `src/css/custom.css`:

<augment_code_snippet path="extensiveUIpush/custom.css" mode="EXCERPT">
````css
/* Root Variables */
:root {
  /* Colors */
  --ifm-color-primary: #7c3aed;
  --ifm-color-primary-dark: #6d28d9;
  --ifm-color-primary-darker: #5b21b6;
  --ifm-color-primary-darkest: #581c87;
  --ifm-color-primary-light: #8b5cf6;
  --ifm-color-primary-lighter: #a78bfa;
  --ifm-color-primary-lightest: #c4b5fd;
  
  --ifm-background-color: #0f0a1e;
  --ifm-navbar-background-color: rgba(15, 10, 30, 0.95);
  --ifm-footer-background-color: #0a0614;
  
  /* Typography */
  --ifm-font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.6;
  
  /* Spacing */
  --ifm-spacing-horizontal: 1.5rem;
  --ifm-spacing-vertical: 1.5rem;
}

/* Dark mode overrides */
[data-theme='dark'] {
  --ifm-color-primary: #a78bfa;
  --ifm-background-color: #0f0a1e;
  --ifm-background-surface-color: #1a0b2e;
}

/* Spinning Logo Animation */
.navbar-logo-spin {
  animation: logoSpin 40s linear infinite;
  border-radius: 50%;
  border: 2px solid var(--ifm-color-primary);
  transition: all 0.6s ease-in-out;
}

.navbar-logo-spin:hover {
  animation: logoSlowFlip 3s ease-in-out infinite;
  border-color: #ec4899;
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
}

@keyframes logoSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes logoSlowFlip {
  0%, 100% {
    transform: rotateY(0deg) scale(1);
  }
  50% {
    transform: rotateY(180deg) scale(1.1);
  }
}

/* Gradient Background */
body {
  background: linear-gradient(135deg, #0f0a1e 0%, #1a0b2e 50%, #2d1b4e 100%);
  background-attachment: fixed;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #0f0a1e;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #7c3aed 0%, #ec4899 100%);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #8b5cf6 0%, #f472b6 100%);
}

/* Card Styles */
.card {
  background: rgba(26, 11, 46, 0.6);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: rgba(124, 58, 237, 0.6);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
  transform: translateY(-4px);
}

/* Button Styles */
.button--primary {
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
  border: none;
  transition: all 0.3s ease;
}

.button--primary:hover {
  background: linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
}

/* Navbar Enhancements */
.navbar {
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.navbar__item {
  transition: all 0.3s ease;
}

.navbar__item:hover {
  color: var(--ifm-color-primary-lighter);
  transform: translateY(-2px);
}

/* Footer Enhancements */
.footer {
  background: linear-gradient(180deg, #0a0614 0%, #0f0a1e 100%);
  border-top: 1px solid rgba(124, 58, 237, 0.2);
}

.footer__link-item:hover {
  color: var(--ifm-color-primary-lighter);
  text-decoration: underline;
}

/* Code Blocks */
.prism-code {
  background: rgba(15, 10, 30, 0.8) !important;
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 8px;
}

/* Admonitions */
.admonition {
  border-left: 4px solid var(--ifm-color-primary);
  background: rgba(26, 11, 46, 0.4);
}

.admonition-heading {
  color: var(--ifm-color-primary-lighter);
}

/* Table of Contents */
.table-of-contents {
  border-left: 2px solid rgba(124, 58, 237, 0.3);
}

.table-of-contents__link--active {
  color: var(--ifm-color-primary-lighter);
  font-weight: 600;
}

/* Search Bar */
.navbar__search-input {
  background: rgba(26, 11, 46, 0.6);
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: var(--ifm-font-color-base);
  transition: all 0.3s ease;
}

.navbar__search-input:focus {
  border-color: var(--ifm-color-primary);
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
}

/* Sidebar */
.menu {
  background: rgba(15, 10, 30, 0.4);
  border-right: 1px solid rgba(124, 58, 237, 0.2);
}

.menu__link {
  transition: all 0.2s ease;
}

.menu__link:hover {
  background: rgba(124, 58, 237, 0.1);
  color: var(--ifm-color-primary-lighter);
}

.menu__link--active {
  background: rgba(124, 58, 237, 0.2);
  color: var(--ifm-color-primary-lightest);
  border-left: 3px solid var(--ifm-color-primary);
}
````
</augment_code_snippet>

---

## Phase 4: Custom Components (45 minutes)

### Step 5: Create PageFeedback Component

Create `src/components/PageFeedback.js`:

<augment_code_snippet path="extensiveUIpush/PageFeedback.js" mode="EXCERPT">
````javascript
import React, { useState } from 'react';
import styles from './PageFeedback.module.css';

export default function PageFeedback() {
  const [feedback, setFeedback] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (isHelpful) => {
    setFeedback(isHelpful);
    setSubmitted(true);
    
    // Send to analytics (optional)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_feedback', {
        helpful: isHelpful,
        page: window.location.pathname,
      });
    }
  };

  if (submitted) {
    return (
      <div className={styles.feedbackContainer}>
        <p className={styles.thankYou}>
          ✨ Thank you for your feedback!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.question}>Was this page helpful?</p>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.buttonYes}`}
          onClick={() => handleFeedback(true)}
        >
          👍 Yes
        </button>
        <button
          className={`${styles.button} ${styles.buttonNo}`}
          onClick={() => handleFeedback(false)}
        >
          👎 No
        </button>
      </div>
    </div>
  );
}
````
</augment_code_snippet>

Create `src/components/PageFeedback.module.css`:

```css
.feedbackContainer {
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba(26, 11, 46, 0.4);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 12px;
  text-align: center;
}

.question {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--ifm-color-primary-lighter);
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.button {
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.5);
  border-radius: 8px;
  background: rgba(15, 10, 30, 0.6);
  color: var(--ifm-font-color-base);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
}

.buttonYes:hover {
  background: rgba(52, 211, 153, 0.2);
  border-color: #34d399;
}

.buttonNo:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
}

.thankYou {
  font-size: 1.1rem;
  color: var(--ifm-color-primary-lighter);
  margin: 0;
}
```

---

## Phase 5: Content Structure (60 minutes)

### Step 6: Create Sidebar Configuration

Create/update `sidebars.js`:

```javascript
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'installation', 'quick-start'],
    },
    {
      type: 'category',
      label: 'Design System',
      items: [
        'design/overview',
        'design/colors',
        'design/typography',
        'design/components',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: false,
      items: [
        'features/altar-burn',
        'features/mushroom-nfts',
        'features/crowdsale',
        'features/token-swap',
        'features/dao-governance',
        'features/agents',
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: [
        'tokenomics/overview',
        'tokenomics/distribution',
        'tokenomics/burning-mechanism',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        'technical/smart-contracts',
        'technical/frontend-architecture',
        'technical/deployment',
        'technical/testing',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/contributing',
        'community/code-of-conduct',
        'community/support',
      ],
    },
  ],
};

module.exports = sidebars;
```

---

## Phase 6: Testing & Deployment (30 minutes)

### Step 7: Test Locally

```bash
# Start development server
npm run start

# Build for production
npm run build

# Test production build
npm run serve
```

### Step 8: Deploy to GitHub Pages

```bash
# Deploy
npm run deploy
```

---

## 🎯 Success Checklist

After completing all phases, verify:

- [ ] Site loads without errors
- [ ] Logo spins continuously
- [ ] Logo flips on hover
- [ ] Search works (if configured)
- [ ] All pages are accessible
- [ ] Sidebar navigation works
- [ ] PageFeedback widget appears on docs
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] All images load
- [ ] Custom CSS applied
- [ ] Footer links work

---

## 🚀 Next Steps

1. **Add More Custom Components** - Implement FeatureCard, RoadmapTimeline, etc.
2. **Create Content** - Write documentation for each feature
3. **Add Screenshots** - Include images from the main app
4. **Set Up Analytics** - Track page views and feedback
5. **Configure SEO** - Add meta tags and descriptions
6. **Enable PWA** - Make site installable
7. **Add Blog** - Share updates and tutorials

---

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [React Documentation](https://react.dev)
- [MDX Documentation](https://mdxjs.com)
- [Algolia DocSearch](https://docsearch.algolia.com)

---

**Estimated Total Time:** 3-4 hours  
**Difficulty:** Intermediate  
**Prerequisites:** Basic React and Markdown knowledge

