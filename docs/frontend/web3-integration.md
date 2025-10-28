---
sessionbar_position: 4
---

# Web3 Integration

Wallets, providers, and chains—the connective tissue of the experience.

## Principles

- Guide, don't gate: the UI teaches users how to connect safely
- Be explicit about network, gas, and irreversible actions
- Fail soft: provide recovery paths, don't dead-end users

## Wallet UX

- `CustomConnectButton` handles connect/disconnect flows
- `WalletConnectionBanner` educates and prompts if not ready
- Provide alternate flows for mobile wallets (deep links / QR)

## Providers & Networks

- Use a single provider factory that reads ENV for RPC endpoints
- Support primary + fallback RPCs per network
- Prevent mainnet writes from test UI (feature flags)

## Chain Context

- Current chain ID displayed near action buttons
- Wrong-network messaging includes steps to switch
- Guard functions check readiness before enabling actions

## Transactions

- Preflight: estimate gas, check balances, simulate if possible
- Confirmations: present human-readable summaries
- Post-tx: link to explorer, show receipts, backoff polling

## Addressing Privacy

- Never collect private keys—wallets are user-owned
- Minimize on-chain data exposure; prefer attestations when possible
- Consider ZK patterns for sensitive flows (Aleo, proofs)

## Error Handling

- Normalize provider errors to human-friendly messages
- Differentiate: user rejected vs insufficient funds vs RPC errors
- Provide copyable diagnostics for support

## Security Notes

- Do not store secrets in front-end code
- Use allowlists for contract addresses per network
- Version and verify ABIs; don't accept unknown inputs blindly

## Testing Web3 UX

- Mock providers for unit tests
- Use testnets with faucets during QA
- Manual smoke tests on low-bandwidth/mobile devices

## Quick Checklist

- [ ] Connect/disconnect works on desktop + mobile
- [ ] Wrong-network prompts are clear and actionable
- [ ] All write actions require explicit confirmation
- [ ] Explorer links are provided after tx
- [ ] Errors are human-readable with next steps
