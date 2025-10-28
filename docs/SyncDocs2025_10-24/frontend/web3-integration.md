---
title: Web3 Integration (Wallets, Networks, Safety)
description: Connection patterns, network detection, and user education for smooth onramps.
---

Reference components:

- CustomConnectButton: docs/src/components/CustomConnectButton.js
- WalletConnectionBanner: docs/src/components/WalletConnectionBanner.js
- Web3BrowserModal: docs/src/components/modals/Web3BrowserModal.js

Highlights:

- Wagmi hooks (useAccount, useConnect, useDisconnect) provide connection state
- Network tagging via getNetworkInfo(chain) for context-aware UI copy and color
- Safari-first UX: if no window.ethereum and Safari is detected, educate before failing

Network coverage (current examples):

- Hardhat localhost (31337)
- Ethereum Mainnet (1)
- Sepolia Testnet (11155111)

User safety practices:

- Explain what “Connect” does and does not do (no custody taken; requests read access)
- Preface any transaction with a plain-language summary and fee estimate guidance
- Handle chain mismatches gracefully: suggest network switch, don’t block the app silently

Troubleshooting on public computers:

- If no wallet is installed, open Web3BrowserModal and follow install links
- If corporate firewalls block extensions, use read-only mode to browse content
- Keep a QR link to the live site so mobile wallets can be used to interact remotely

