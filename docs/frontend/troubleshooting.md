---
sidebar_position: 11
---

# Troubleshooting

Common issues and how to resolve them quickly.

## Wallet & Network

- Not detecting wallet: ensure a Web3-capable browser or install MetaMask
- Stuck on wrong network: use the network switch button in the banner
- Transactions failing: check gas settings, balances, and contract addresses

## UI & Performance

- Slow animations: enable Reduced Motion in settings or OS preferences
- Layout issues on mobile: clear cache, verify viewport meta present
- Images not loading: check CDN cache and path case-sensitivity

## Data & Sync

- Proposal list empty: verify RPC endpoint and indexer status
- Stale balances: trigger a manual refresh or re-subscribe
- Explorer links 404: confirm chain and address checksums

## Build & Deploy

- 404s on GitHub Pages: check `baseUrl` in docusaurus config
- ENV not loading: ensure proper .env file name and prefix
- Mismatched addresses: verify network map by chain ID

## When in Doubt

- Use the emergency banner to inform users
- Disable risky flows via feature flags
- Ask in #dev-support with logs and steps

Our goal is calm guidance. People arrive anxious—leave them reassured.
