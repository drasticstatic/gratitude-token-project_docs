# Smart Contract Information

Subtitle: Deployed Contracts & Technical Details

Contract Owner & Governance
- The contract owner has administrative privileges to manage critical functions like pausing contracts, updating parameters, and managing whitelists.
- Current Owner Address: {ownerOnChain || 'Loading...'}
- 🔐 Owner Responsibilities
  - Emergency Controls — Pause/resume contracts during security events
  - Whitelist Management — Add/remove addresses from whitelists
  - Parameter Updates — Adjust crowdsale rates, fees, etc.
  - Ownership Transfer — Transfer to multi-sig or DAO governance

Deployed Smart Contracts
- 📜 Core Contracts
  - ETHO Token (ERC20)
    - Primary governance and utility token
    - Address: Coming soon...
  - PSD Token (ERC20)
    - Stablecoin pegged to USD for trading
    - Address: Coming soon...
  - Crowdsale Contract
    - Token sale and fundraising mechanism
    - Address: Check config.json
  - AMM (Automated Market Maker)
    - Decentralized token swap and liquidity pools
    - Address: Check config.json

Network & Deployment Details
- 🌐 Network Information
  - Primary Network — Ethereum Mainnet (Chain ID: 1)
  - Testnet — Sepolia (Chain ID: 11155111)
  - Local Development — Hardhat Network (Chain ID: 31337)
- 📅 Deployment Timeline
  - Phase 1 (Current) — Local development and testing
  - Phase 2 (Q1 2025) — Sepolia testnet deployment
  - Phase 3 (Q2 2025) — Mainnet deployment (limited features)
  - Phase 4 (Q3 2025) — Full ecosystem launch

Contract Verification & Audits
- All smart contracts will be verified on Etherscan and audited by reputable security firms before mainnet deployment.
- ✅ Verification Status
  - Source Code — Published on GitHub (MIT License)
  - Etherscan Verification — Pending mainnet deployment
  - Security Audits — Scheduled for Q1 2025
  - Bug Bounty Program — Launching with mainnet
- 🔍 Audit Partners (Planned)
  - OpenZeppelin — Smart contract security audit
  - Trail of Bits — Comprehensive security review
  - Certik — Formal verification and monitoring

Technical Specifications
- ⚙️ Contract Standards
  - ERC20 — Fungible tokens (ETHO, PSD, Daily Shrooms)
  - ERC721 — Non-fungible tokens (Mushroom NFTs, Proof of Burn)
  - OpenZeppelin v5 — Battle-tested contract libraries
  - Solidity 0.8.20+ — Latest stable compiler version
- 🛠️ Development Tools
  - Hardhat — Development environment and testing
  - Ethers.js — Blockchain interaction library
  - Wagmi + RainbowKit — Wallet connection and hooks
  - React 18 — Frontend framework

Useful Links & Resources
- 🔗 External Resources
  - GitHub Repository — https://github.com/drasticstatic/gratitude-token-project (View Source Code →)
  - Etherscan — Contract verification (coming soon)
  - Documentation — Technical docs (coming soon)
  - Audit Reports — Security audits (coming soon)
- 🌱 All contracts are open-source and transparent - inspect the code yourself!

Security Notice
- ⚠️ Important: This project is currently in active development. Do not send real funds to any contracts until official mainnet launch is announced.
- 🛡️ Security Best Practices
  - Verify Addresses — Always double-check contract addresses
  - Use Hardware Wallets — Ledger or Trezor for large amounts
  - Start Small — Test with small amounts first
  - Stay Updated — Follow official channels for announcements

