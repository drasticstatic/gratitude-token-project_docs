---
sidebar_position: 6
---

# Network Configuration

Configure networks, RPC endpoints, explorers, and contract addresses in one place.

## ENV Strategy

- Use `.env` files (local, staging, prod)
- Prefix variables for clarity (e.g., `VITE_RPC_MAINNET`, `VITE_RPC_SEPOLIA`)
- Never commit secrets

## Address Maps

- Map by chain ID: `{1: {contracts: {...}}, 11155111: {...}}`
- Keep explorers per chain for linkouts
- Validate at startup and surface clear errors

## Features by Network

- Enable features gradually with flags
- Hide production-only flows on test environments

## Chain Switching UX

- Provide an obvious network indicator
- Offer one-click switch buttons
- Disable write buttons on wrong networks

## Health Monitoring

- Track RPC health and autoswitch to fallbacks
- Show banner if degraded

## Example Shape

```
const networks = {
  1: { name: 'Ethereum', rpc: process.env.VITE_RPC_MAINNET, explorer: 'https://etherscan.io', contracts: {/*...*/} },
  11155111: { name: 'Sepolia', rpc: process.env.VITE_RPC_SEPOLIA, explorer: 'https://sepolia.etherscan.io', contracts: {/*...*/} },
};
```

Make the right path the easy path: clear, centralized configuration.
