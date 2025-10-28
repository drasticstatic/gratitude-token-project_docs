---
title: Pages (Feature Surfaces)
description: High-level feature pages from the component library you can showcase and port.
---

Location: docs/src/components/pages/

Included examples:

- AdminPanel.js — admin operations surface (guard behind role checks)
- AltarBurn.js — ceremony-themed token burn actions
- Contact.js — communication entry
- CrossBreeding.js — NFT/mushroom mechanics showcase
- DailyShrooms.js — habit/ritual flows
- Donate.js — contributor onramp
- Governance.js — proposals/voting surface
- NotFound404.js — fallback page
- Swap.js — ERC20 swap demo

Usage guidance:

- Treat these as educational blueprints; wire them to your production contracts when ready
- Pair with WalletConnectionBanner and CustomConnectButton so affordances make sense
- Keep destructive actions behind confirmations; explain clearly in the UI

Cross-links:

- Treasury modals: ./modals
- Wallet buttons: ../web3-integration

