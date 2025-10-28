---
title: State and Data Flow (Wallet → UI → Contracts)
description: How user state flows through wallet connection, UI components, and contract interactions.
---

Core idea: Keep the user’s intent visible and safe. We surface connection status, network, and action consequences clearly.

Primary touchpoints:

- Wallet connection UX: docs/src/components/CustomConnectButton.js
- Connection reminders: docs/src/components/WalletConnectionBanner.js
- Action modals: docs/src/components/modals/* (e.g., Treasury, Altar, Governance)
- Transaction feedback: docs/src/components/TransactionHistory.js

Common flow:

1) User clicks Connect in CustomConnectButton
- Uses wagmi useConnect and injected connector when available
- Safari fallback opens Web3BrowserModal to guide installing a wallet

2) While disconnected
- WalletConnectionBanner renders a fixed, gentle prompt at top offset beneath navbar
- It automatically hides while modals are open or while connecting

3) When connected
- UI reveals action buttons and modals (e.g., Donate, Swap, Governance proposals)
- Modals orchestrate validation, user confirmation, and transaction submission

4) After submission
- TransactionHistory (or local patterns) can surface pending/confirmed states
- Errors are presented as actionable instructions (e.g., wrong network → switch)

Patterns to emulate:

- Defensive UX: Detect Safari, check window.ethereum presence, show education modal when needed
- Progressive disclosure: don’t show advanced actions until wallet is connected and correct network is selected
- Clear styling signals: success (greens), warnings (ambers), destructive (reds)

Future-ready suggestions:

- Lift shared state into a React Context if you need global wallet/tx history across many pages
- Standardize a toast/notification system for background confirmations
- Add analytics hooks (privacy-preserving) to understand where users struggle

