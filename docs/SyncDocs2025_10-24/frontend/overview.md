---
title: Front-End Overview
description: Big-picture map of the Docusaurus front-end and the embedded dApp component library for reference and future expansion.
---

This docs site hosts two layers relevant to the “front-end” conversation:

1) Docusaurus site layer (this documentation website)
- Location: src/*
- Purpose: Public documentation, marketing, and learning surface
- Entrypoint: src/pages/index.js

2) Embedded dApp component library (for reference/demo inside docs)
- Location: docs/src/components/*
- Purpose: A curated snapshot of interactive components we can showcase, document, and port into production dApps
- Folders:
  - pages/ — higher-level feature pages (Governance, Swap, Donate, etc.)
  - modals/ — focused UI modules (Treasury, Governance, Altar, ERC20 swap, etc.)
  - effects/ — visual effects (Spore, Mist, Sparkles, Animated Cursor)
  - icons/ — brand-consistent icon set
  - helpers: CustomConnectButton.js, WalletConnectionBanner.js, TransactionHistory.js, etc.

Recommended mental model:

- Docs site is the cathedral—you teach, convene, and onboard.
- Component library is the workshop—you demonstrate modular parts that can be reused in production apps.

Key file paths to know quickly:

- Docs site home: src/pages/index.js
- Docs site theme CSS: src/css/custom.css
- dApp components root: docs/src/components/
- High-value components:
  - CustomConnectButton.js (wallet connect UX)
  - WalletConnectionBanner.js (connect reminder)
  - TreasuryAnalyticsModal.js, TreasuryProposalModal.js
  - Governance.js (page)
  - ERC20SwapModal.js
  - AltarBurn.js, AltarBurnTokensModal.js

In the following pages, you’ll get recipes and usage patterns for each area.

