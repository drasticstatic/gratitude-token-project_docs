---
title: Modals (Focused Actions)
description: Action-specific modals powering donations, treasury, altar, governance, and more.
---

Location: docs/src/components/modals/

Representative modals (not exhaustive):

- DonateModal.js — collecting contributions with clarity and consent
- ERC20SwapModal.js — swap flow with validation
- TreasuryAnalyticsModal.js — read analytics from treasury events
- TreasuryProposalModal.js — craft proposals; dual-token or 1p1v flows as required
- GovernanceModal.js — delegation, voting, quorum visualization
- AltarBurnModal.js & AltarBurnTokensModal.js — explicit confirmation flows
- AdminPanelModal.js — privileged controls; lock behind safe checks
- Web3BrowserModal.js — education for non-Web3 browsers (esp. Safari)
- DAOWhitelistModal.js / DenylistModal.js — boundary-setting tools

Design patterns:

- Keep copy empathetic and precise; summarize risks and outcomes
- Separate read-only insights (analytics) from write intents (tx)
- Emit custom events (optional) to coordinate UI (e.g., hide banners during modals)

Related:

- State & Data Flow: ../state-and-dataflow
- Web3 Integration: ../web3-integration

