---
sidebar_position: 2
---

# Front-End Architecture

This section outlines how we structure UI, flows, and state for a clear, maintainable, and extensible front end.

## Layered Design

- App shell: navigation, footer, global effects, layout
- Pages: Swap, Governance, AltarBurn, Donate, Contact
- Domain modals: Treasury, DAO, NFT, Oracle, Admin
- Primitives: buttons, cards, inputs, typography
- Effects: spores, sparkles, mist, cursor trails
- Icons: SVG sets with subtle animations

## Component Roles

- `Navigation`, `Footer`: global chrome and routes
- `WalletConnectionBanner`, `CustomConnectButton`: session/wallet UX
- `PageInfo`, `InfoSection`, `SectionTitleSVGs`: structure and copy
- Domain components: `MushroomFarm`, `MycelialNetwork`, `HeroNetwork`
- Page-level: `Swap`, `Governance`, `AltarBurn`, `Donate`, `DailyShrooms`

## Page Composition Pattern

1. Fetch/init session state (wallet, network)
2. Render page info (context, warnings, how-to)
3. Render domain UI (forms, charts, actions)
4. Render modals for complex/confirm flows
5. Collect analytics and event telemetry (privacy-respecting)

## Data Flow

- UI state via React hooks (local) and lightweight contexts (global)
- Async services wrapped in single-responsibility functions
- Side-effects gated by confirmations and preflight checks
- Error boundaries + toasts/modals for feedback

## Safety Controls

- Disable actions when preconditions unmet (no wallet, wrong network)
- Confirmations for any on-chain mutation
- Explicit gas and network context shown to user
- Clear rollback and failure states

## Styling

- CSS Modules for scoped styles
- Respect reduced motion preference
- Theming via CSS variables (light/dark support)

## Accessibility

- Keyboard-first interactions, focus rings
- ARIA labels for icons and actions
- High contrast defaults

## Internationalization (optional)

- Content through message maps
- Avoid hard-coded strings in logic

## Observability

- Non-PII analytics: page views, success rates, error classes
- Feature flags for incremental rollout

## Extensibility Guidelines

- Name components by domain (e.g., `TreasuryProposalModal`)
- Keep components pure; push side effects to hooks/services
- Encapsulate Web3 calls in adapters
- Prefer composition over inheritance

## Example Directory Shape

```
src/
  components/
    pages/
    modals/
    ui/
    icons/
    effects/
  hooks/
  services/
  styles/
```

This keeps domain code discoverable and cohesive. Add new features by composing these layers.
