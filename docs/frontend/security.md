---
sidebar_position: 10
---

# Front-End Security

We hold safety as sacred. The front end is a critical security boundary.

## Principles

- Never handle secrets or private keys client-side
- Fail safe: default to no action unless conditions are met
- Make dangerous actions obvious and deliberate

## Trust Boundaries

- Wallets: user-owned, we only request signatures when necessary
- Contracts: addresses hardcoded per-network via allowlists
- RPC: prefer reputable endpoints + fallbacks

## Inputs & Outputs

- Sanitize and validate all user inputs
- Display amounts with clear units and rounding rules
- Detect and prevent copy/paste typos where possible

## Phishing Resistance

- Always show contract names/addresses clearly
- Link to explorers with checksum addresses
- Consider ENS where appropriate, but verify

## Supply Chain

- Lock dependency versions; watch advisories
- Prefer audited libraries for crypto primitives
- Avoid dynamic code execution

## Incident Readiness

- Emergency banner and kill-switch flags
- Known-good build rollback plan
- Public postmortems with action items

Protect the flock. Communicate clearly. Move carefully when funds are at stake.
