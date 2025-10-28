---
title: Wallet & Treasury Surfaces
description: Connection buttons, banners, and treasury modals that make onchain flows humane.
---

Key files:

- CustomConnectButton.js — main connect/disconnect control with network hints
- WalletConnectionBanner.js — gentle top-banner reminder to connect
- TreasuryAnalyticsModal.js — spend/receive analytics, charts-ready
- TreasuryProposalModal.js — proposal authoring UX

Design checklist:

- Always show network context (Hardhat, Mainnet, Sepolia)
- Explain costs and risks in plain language before tx
- Offer a clear cancel path at every step
- After success, invite the next helpful action (share, view on explorer, join governance)

See also:

- State & Data Flow: ../state-and-dataflow
- Modals: ./modals

