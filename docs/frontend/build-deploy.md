---
sidebar_position: 8
---

# Build & Deploy

Deploying the docs and the dApp safely and predictably.

## Docs (This Portal)

- Local dev: `npm start`
- Build: `npm run build`
- Output: `/build` (static site)
- Hosting: GitHub Pages, Netlify, or Vercel
- Base URL: ensure `docusaurus.config.js` `url` + `baseUrl` match hosting

## dApp Front-End (Production)

- Use environment-specific builds (staging/prod)
- Validate contract addresses during build
- Sentry or similar for client-side error logging (PII-free)
- CDN cache headers for static assets

## Release Process

1. Tag version
2. Build artifacts
3. Smoke test on staging (testnet)
4. Announce deployment window
5. Promote to production

## Rollback Plan

- Keep previous build artifacts handy
- Feature flags to disable risky flows
- Emergency banner component ready to inform users

## Monitoring

- Track errors, tx success rates, RPC health
- Alerting on critical issues

Ship with intention, observe with humility, iterate with care.
