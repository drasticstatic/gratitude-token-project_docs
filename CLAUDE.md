# CLAUDE.md — Persistent Instructions for Gratitude Token Docs
### DAppU Capstone — Interactive White-Paper Site (Docusaurus)

---

## ⚠ FIRST: sync this clone before you touch anything

```sh
git pull --rebase --autostash
```

Run this at the **start of every session**, before reading deeply or editing. Several agents and
Christopher push to these repos — including Cosmos agents that run unattended while nobody is at the
machine — so a clone can be behind by the time you open it.

**`--autostash` is what makes this safe on a dirty tree.** It stashes uncommitted changes, rebases
onto the remote, then reapplies them. Your in-progress work survives. Without it, `git pull --rebase`
refuses to run and you are tempted into something worse.

Why it matters more than it sounds:

- A stale clone **does not fail early.** It fails at push time, after the work is done, as a
  non-fast-forward rejection — the most expensive moment to discover it.
- The tempting fix at that point is `git push --force`, which discards whatever someone else pushed
  in the meantime. Syncing first removes the temptation.
- If a rebase does conflict, stop and resolve it deliberately. A conflict is information: someone
  else changed the same lines, and you want to know that *before* building on top of them.

**Fresh clone?** Also run `sh scripts/install-hooks.sh` — git hooks are not version-controlled, so
the commit-attribution hook stays inert until this clone is pointed at `.githooks/`. Details:
[`scripts/README.md`](./scripts/README.md).

---

## Scope

This repo is the **gratitude-token-project_docs** — the interactive white-paper documentation site for the Gratitude Token / Church DAO governance treasury protocol. Built with Docusaurus and hosted on GitHub Pages at https://drasticstatic.github.io/gratitude-token-project_docs/. It is a **PUBLIC** repository.

Agent roles for this repo:
- **Auggie (Augment CLI):** Primary builder — leads Docusaurus configuration, content structure, React components, and deployment
- **Kavanah (Augment Intent):** Coordinator/facilitator — keeps all agents in alignment, spec-driven orchestration, file deployment across repos
- **Fortuna (Claude Code CLI):** Awareness-level only — looped in for treasury decisions that intersect trading, not on every build

> **Temporary role note (active as of 2026-08-30):** Augment CLI/Intent (Auggie/Kavanah) is on
> hiatus. Fortuna (Claude Code CLI, running under the Anthropic model) is standing in for both
> roles — primary builder AND coordinator — across this repo and `gratitude-token-project` until
> Augment is usable again. This is a known, intentional substitution, not model confusion; no
> need to re-explain or re-confirm identity each session. Revert this note (restore Auggie/
> Kavanah as primary) once Augment CLI/Intent resumes normal operation.

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
- **AGENTS.override.md** — temporary task-specific overrides; delete when done (template: `~/code/my-template/AGENTS.override.md`)
- **Skills:** `.claude/skills/` — full procedure lives in the skill file; CLAUDE.md holds triggers only
- **Tasks:** `PENDING-TASKS.md` or `tasks.md` if present — active/completed task tracking
- **Agent handoffs:** `AGENT-SYNC/` (hub: `~/code/trading-assistant/`) — see `AGENT_SYNC.md` for current state
- **Memory:** `~/.claude/projects/.../memory/MEMORY.md` — auto-loaded; detail in topic files

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- ALWAYS read graphify-out/GRAPH_REPORT.md before reading any source files, running grep/glob searches, or answering codebase questions. The graph is your primary map of the codebase.
- IF graphify-out/wiki/index.md EXISTS, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

---

## Commit Convention

Reachable two ways — native terminal (`code/`/`dappu/`) and Augment Intent
(`intent/workspaces/...`). Which *application* launched the session decides the footer, not which
path — see `anthropas-argus-alfred/sandbox/AGENT_IDENTITY_REFERENCE.md` and
`INTENT_WORKTREE_LEGEND.md` for the full rule.

- Alfred-Anthropic: `Co-Authored-By: Alfred · ClaudeCodeCLI · Anthropic [Sonnet-5/Opus-#/Haiku-#]`
- Alfred-NIM: `Co-Authored-By: Alfred · ClaudeCodeCLI · NVIDIA NIM [model]`
- Kavanah-AugmentIntentUI-AuggieLogin: `Co-Authored-By: Kavanah · AugmentIntent · [model]`
- Kavanah-AugmentIntentUI-AnthropicLogin ("ClaudeMent"): `Co-Authored-By: Kavanah · ClaudeMent · Anthropic [model]`
- Kavanah-TerminalUI(macOS/Intent/VSCode standard terminal instance)-AnthropicLogin: `Co-Authored-By: Kavanah · ClaudeCodeCLI · Anthropic [model]`
- Mystarch (rare — app-level cross-workspace reach, this repo isn't its home): same engine options as Kavanah above, swap the agent name
- Auggie (native Augment CLI — currently hibernating, may return): `Co-Authored-By: Auggie · AugmentCLI · [model]`

## Commit attribution (enforced by hook)

Every commit must carry two git trailers:

```
Co-Authored-By: <Agent> · <Engine> · <Provider> [<Model>]
<Platform>-Session: <full session URL>
```

Four fields, model in **square brackets**, separator is U+00B7 MIDDLE DOT ( · ). The session
trailer is a **separate** line — folding it onto the `Co-Authored-By:` line breaks git trailer
parsing. Use the full session URL, never a truncated prefix. Key varies by platform:
`Claude-Session:` for Claude Code CLI, `Cosmos-Session:` for Cosmos.

`.githooks/commit-msg` rejects non-conforming commits. **Activate it once per clone:**

```sh
sh scripts/install-hooks.sh
```

Human-only commits: `git commit --no-verify`. Canonical convention and rationale:
[`my-template/AGENT-SYNC/README.md`](https://github.com/drasticstatic/my-template/blob/main/AGENT-SYNC/README.md)
