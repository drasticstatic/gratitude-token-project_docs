# AGENTS.md
> AI Agent Configuration — gratitude-token-project_docs
> Read by: Claude Code, Cursor, GitHub Copilot, and other AI coding assistants.
> See `CLAUDE.md` for Claude Code–specific rules.

---

## Project Overview

**gratitude-token-project_docs** is the interactive white-paper documentation site for the Gratitude Token / Church DAO governance treasury protocol. Built with Docusaurus and hosted on GitHub Pages.

**Live:** https://drasticstatic.github.io/gratitude-token-project_docs/
**Visibility:** PUBLIC — all content committed here is publicly visible
**Primary builder:** Auggie (Augment CLI)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Docusaurus v3 |
| Language | React, MDX, TypeScript |
| Package manager | npm |
| Hosting | GitHub Pages |
| Node version | Node.js 18+ |

---

## Common Commands

```bash
# Install dependencies
npm install

# Start local dev server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages (if configured)
npm run deploy
```

---

## Coding Standards

- Docusaurus conventions for sidebar config, frontmatter, and MDX components
- Docs in `docs/` — keep filenames kebab-case
- All images optimized before committing (`pngquant` or similar)
- No internal/private information in any committed file

---

## Agent Boundaries

**Do:**
- Follow Docusaurus structure strictly
- Keep content appropriate for public view at all times
- Ask before creating new doc categories or restructuring the sidebar

**Don't:**
- Include private wallet addresses, API keys, or internal team references
- Commit build artifacts (`.docusaurus/`, `build/` are gitignored)
- Add npm packages without flagging to Christopher first

---

## Security Rules

- **PUBLIC repo:** Every committed file is publicly visible — no private information whatsoever
- Never read, display, or commit `.env` files, private keys, or credential files
- Before adding any dependency: audit install hooks and verify provenance

---

## Canonical References

- `CLAUDE.md` — Agent roles, scope boundaries, and session rules
- `AGENTS.md` (this file) — Universal AI agent config
- `README.md` — Project overview and architecture
