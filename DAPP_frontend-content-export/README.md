# Frontend Content Export

Purpose
- Verbatim, human-readable export of all user-facing copy from the React dApp
- For Claude chat context and as seed/source for a Docusaurus "How to Use the dApp" section

How this folder is organized
- One .md per page or modal in the app
- UI components with user-facing text are grouped together
- ALL-IN-ONE.md aggregates everything with a printable single-file view + table of contents

Start here
- Read ALL-IN-ONE.md for a complete single-file view
- Or browse individual files:
  - 01-landing-page.md
  - ui-components.md (Footer, Wallet banner)
  - modals/* (one per modal)
  - pages/* (one per page)
  - agents.md (15 Oracle Helper Agents)


Notes
- This is a verbatim export of the copy rendered in the UI (no dev-only text)
- Text is grouped by component sections (e.g., FAQ items, Roadmap phases)
- If copy changes in React, re-run this export to stay in sync

Next steps
- Use these files to create a "How to Use the dApp" section in Docusaurus
- Optional: split into guides (Landing, Altar Burn, Swap, Farming, DAO, etc.)


