---
sidebar_position: 7
---

# Front-End Testing

We test to protect people and treasuries, not just code.

## What to Test

- Critical flows: connect wallet, network switch, submit proposal, make offering, swap
- Error states: wrong network, rejection, insufficient funds, RPC down
- Accessibility: tabbability, ARIA labels, color contrast
- Visual regressions (optional): snapshot of critical components

## Tools

- React Testing Library: behavior-focused tests
- Jest/Vitest: unit and integration tests
- MSW: mock network requests

## Patterns

- Mock provider/wallet in test harness
- Render components with minimal viable context
- Prefer user-centric assertions (visible text, roles)

## Example Test Outline

```
describe('Governance', () => {
  it('renders proposals and handles vote', async () => {
    // mock proposals
    // render <Governance />
    // expect list, click vote, assert confirmation
  });
});
```

## CI

- Run tests on PRs
- Fail fast on flake by reducing reliance on timeouts

## Manual QA

- Test on mobile devices and slow networks
- Verify explorer links and post-tx UX

Test what matters most to the community. Confidence is a feature.
