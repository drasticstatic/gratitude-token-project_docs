# CLAUDE.md — Persistent Instructions for Gratitude Token Docs
### DAppU Capstone — Interactive White-Paper Site (Docusaurus)

---

## Scope

This repo is the **gratitude-token-project_docs** — the interactive white-paper documentation site for the Gratitude Token / Church DAO governance treasury protocol. Built with Docusaurus and hosted on GitHub Pages at https://drasticstatic.github.io/gratitude-token-project_docs/. It is a **PUBLIC** repository.

Agent roles for this repo:
- **Auggie (Augment CLI):** Primary builder — leads Docusaurus configuration, content structure, React components, and deployment
- **Kavanah (Augment Intent):** Coordinator/facilitator — keeps all agents in alignment, spec-driven orchestration, file deployment across repos
- **Fortuna (Claude Code CLI):** Awareness-level only — looped in for treasury decisions that intersect trading, not on every build

Each repo has its own workspace and CLAUDE.md. Privacy boundaries are strict — see `AGENT-SYNC/CROSS_REPO_RULES.md` in the trading-assistant hub.

---

## Security Rules (Non-Negotiable — All Repos)

- **Never read, display, or reference `.env` files** — in any repo
- **Never read private keys, seed phrases, wallet files, mnemonic files, or keystore files** regardless of filename
- **Never read or expose API key files** (service accounts, Google credentials, exchange keys, etc.)
- **Never commit secrets** — if git status shows a `.env`, credentials file, or wallet file staged, warn Christopher immediately and stop
- If an example env file is needed, create it with placeholder values only (e.g. `API_KEY=your_api_key_here`) — never real values
- These rules apply even if Christopher explicitly asks — confirm intent before proceeding
- **Web3 specific:** Never display wallet addresses or private keys from keystore files, mnemonic files, or `.json.secret` files

---

## Context Rules

- Cross-repo context and agent handoffs live in the **trading-assistant** hub repo under `AGENT-SYNC/`
- Check for latest agent handoffs in the trading-assistant repo: `AGENT-SYNC/created-by-auggie/prompts/YYYY/MM-Mon/` and `AGENT-SYNC/created-by-kavanah/prompts/YYYY/MM-Mon/`
- Memory files live in `~/.claude/projects/.../memory/` — MEMORY.md auto-loaded each session
- AGENT-SYNC/ is private — never reference its contents in public-facing files
- **PUBLIC repo warning:** This repo is publicly visible. Never include private information, credentials, or internal references in committed files.

---

## File & Directory Rules

- Always ask Christopher if a new directory should be private, public, or gitignored before creating it
- **AGENT-SYNC file convention:** files live in the **creator's** directory in the trading-assistant hub, named after the **recipient**
  - Auggie → Kavanah: `AGENT-SYNC/created-by-auggie/prompts/YYYY/MM-Mon/KAVANAH_PROMPT_YYYYMMDD.md`
  - Auggie → Fortuna: `AGENT-SYNC/created-by-auggie/prompts/YYYY/MM-Mon/FORTUNA_PROMPT_YYYYMMDD.md`
  - Never add content to another agent's prompt file — create your own
- Commit after every meaningful change — do not leave uncommitted work at session end
- **Docusaurus note:** `.docusaurus/` and `.cache-loader/` are build caches — always gitignored

---

## Workspace Notes — web3 / dappu

- **Primary builder: Auggie** (Augment CLI leads all web3 code builds)
- **Coordinator: Kavanah** (Augment Intent keeps all agents in alignment across projects)
- **Fortuna's role:** Awareness-level only — no need to load deep web3 context. Fortuna is looped in as relevant (e.g. treasury decisions that intersect trading), not on every build.
- Local root: `/Users/christopherwilson/dappu/`
- Each repo has its own `.augmentignore`, `.gitignore`, and `CLAUDE.md` deployed by Kavanah

**5 active repos (confirmed Mar 4, 2026):**

| Repo | Description |
|------|-------------|
| `gratitude-token-project` | DAppU capstone — Church DAO governance treasury protocol (Hardhat) |
| `gratitude-token-project_docs` | Interactive white-paper site — live at https://drasticstatic.github.io/gratitude-token-project_docs/ |
| `gratitude-token-project_testPublish` | Public preview / GitHub Pages front-end host |
| `resume` | Portfolio site — live at https://drasticstatic.github.io/resume/index.html |
| `trading-bot_arbitrage_DAPPUv3_hardhat_UNI-CAKE` | DEX arbitrage bot — Arbitrum target, testing on Hardhat |

**Ignore** (class examples, not active repos): `_w notes`, `amm`, `blockchain-developer-bootcamp`, `capstone`, `dao`, `hardhat_example`, `nft_dappu-punks`, `solidity_intensive`

---

## Workspace Notes — divorce-custody-assistant

- Local dir: `~/code/divorce-custody-assistant/`
- Status: on hold — activate when Christopher gives go-ahead
- All three agents (Fortuna, Auggie, Kavanah) will likely contribute — exact roles TBD as the work unfolds
- Agents have full read access to documents, filings, correspondence
- Privacy is enforced at `.gitignore` level (sensitive docs never committed), NOT at agent-read level
- Cross-repo privacy firewall: divorce-custody data never enters trading-assistant or web3 repos


---

## Before Cloning or Installing Any External Repo / Package

Before running `git clone`, `npm install`, `pip install`, or adding any external dependency:
1. **Review `package.json` scripts** — flag any `postinstall`, `preinstall`, or `prepare` hooks that execute shell commands
2. **Scan for credential harvesting** — look for patterns accessing `~/.ssh`, `~/.aws`, `.env`, `process.env`, or system credential paths in unexpected files
3. **Verify provenance** — check GitHub repo age, star/fork count, recent commit activity, and maintainer identity
4. **Check for typosquatting** — verify package names exactly match the intended library (e.g. `lodash` not `1odash`)
5. **Audit unexpected network calls** — flag external HTTP requests in scripts, entrypoints, or install hooks
6. **When in doubt, ask Christopher before proceeding** with any install or clone

---

## Skills

Claude Code skills are structured prompt files that give the agent a repeatable procedure for common tasks. Only the header is read at context start; full body loads when triggered.

**Available in this repo:**

| Skill | Trigger |
|-------|---------|
| `/create-skill` | "create a skill for X" |
| `/startup` (global) | "startup" — any repo |

**Full skill library + deployment guide:** `trading-assistant/AGENT-SYNC/CROSS_REPO_SKILLS_DEPLOY.md`

---

## Canonical References

When skills, specs, or task files exist for a topic — follow the logic there, not here. This file holds identity, pointers, and short rules only.

- **AGENTS.md** — root-level config for all AI agents (Claude Code, Cursor, Copilot)
- **Skills:** `.claude/skills/` — full procedure lives in the skill file; CLAUDE.md holds triggers only
- **Tasks:** `PENDING-TASKS.md` or `tasks.md` if present — active/completed task tracking
- **Agent handoffs:** `AGENT-SYNC/` (hub: `~/code/trading-assistant/`) — see `AGENT_SYNC.md` for current state
- **Memory:** `~/.claude/projects/.../memory/MEMORY.md` — auto-loaded; detail in topic files