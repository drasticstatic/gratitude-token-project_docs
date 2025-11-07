---
# Frontend User-Facing Content Export (Compact)

Purpose
- Single-file, human-readable export of user-facing copy from the React dApp
- For: (1) Claude AI chat context (cannot fetch live app), (2) Source for Docusaurus “How to Use the dApp”
- Scope: Concise but comprehensive. Includes key texts and structured outlines to keep this file <300 lines. Ask to generate verbatim, multi-file extracts if needed.

How to use this file
- Claude: Paste sections as needed (Agents, Pages, Modals, Tokens, Governance, AMM)
- Docusaurus: Copy sections into new docs; the structure maps 1:1 to likely doc pages
- Engineering: If any copy changes in code, update this file or request an automated re-extraction

---
## Global UI Elements

Wallet Connection Banner
- Message: “Connect your wallet to enter the altar” (customizable)

Footer (social + meta)
- Links (current): Discord, Telegram, Twitter/X, GitHub, Psanctuary.org
- Tagline: “✨ Built for sacred coordination • v0.1 Prototype”

Status/Errors
- “Connection lost. Please try again to restart the conversation!”

---
## Landing Page (Home)

Highlights
- Spacious agent grid (desktop 5-up; tablet 3-up; mobile horizontal scroll with snap + edge-fade)
- Hero with rotating quotes from psychedelic/spiritual thought leaders
- Sections: Vision/Feature highlights; Mycelial design; FAQ; Roadmap; Agent helpers; Modals (Imagine, Oracle)

FAQ (topics)
- Blockchain basics; Tokenomics; AMM/Liquidity; NFTs vs ERC20; Gratitude economy; DAO; Security; Access/whitelists; Farming/cross-breeding; Gas; Governance; Treasury; Roadmap

Roadmap (phases)
1) Psanctuary Foundation
2) PIR Integration
3) Circle of Light Fellowship
4) Policy Reform

---
## Pages (Primary)

Sacred Altar (Burn)
- Intent: Transform ETHO tokens into sacred offerings and receive Proof of Burn NFT
- Content: Spiritual framing, ceremony guidance, burn stats, your offerings
- Burn tiers (example): Spark (100), Flame (500), Inferno (1000), Phoenix (5000)

Daily Shrooms
- Quote: “Discipline grows roots.” — Oracle of Fruit
- System: Daily NFT minting, streaks, growth mechanics, cultivation gallery
- How it works: 1) Connect 2) Mist hourly 3) Harvest 4) Collect daily 5) Use for crafting/cross-breeding

Cross-Breeding
- Whitelist-gated access; trait inheritance; seasonal mutations
- Flow: Select parents → Spore alchemy → New strain → Discovery bonus
- Example combo: Golden Teacher + Penis Envy = Golden Envy

Token Swap (AMM)
- Purpose: Swap ERC20 tokens; manage liquidity (add/remove)
- Mechanics: Constant product (x*y=k), liquidity providers, low slippage
- UI: Token selectors, amounts, slippage, pool stats

DAO Governance
- Vision: Trust, transparency, Spirit-led generosity
- Core principles: Wu-wei, Three Treasures, Mycelial connection, Proof-of-Giving
- Roles (NFTs): Minister, Flamekeeper, Spore Sentinel, Oracle of Fruit, Treasury Guardian, Validator
- Proposal types: Treasury, Protocol, NFTs, Partnerships, Community Rituals, Education
- Process: Earn voting power → Draft → Discuss → Snapshot → Vote → Execute

404 — Lost in the Mycelial Network
- Thematic poem, ACIM quotes/links, “Still Lost?” helper modal

---
## Agents (Oracle Helper Grid)

Source: src/data/agents.json (verbatim summaries)

1) OracleOfFruit — The Spore Seer / Your Advice Handler
- Primary orchestrator & user-facing hub; interprets intent via LLM, does RAG, orchestrates agents
- Type: Interactional (LLM + UX); Archetype: Wise Oracle; Icon: 🍄; Color: #a78bfa

2) VeilRootMPC — The Validator / Quantum Custodian
- Threshold signature MPC; quorum sensing; no raw keys stored; distributed key generation
- Type: Operational; Archetype: Guardian; Icon: 🔐; Color: #7c3aed

3) GoldenCubensisLumenStem — The Treasury Steward
- Treasury policy + rebalancing; uses market data; actions sign via VeilRootMPC
- Type: Operational; Archetype: Treasurer; Icon: 💰; Color: #fbbf24

4) LawAbidingLibertyCap — The Liberator Shroom
- Legal compliance + advocacy; monitors regulation; guides DAO with integrity
- Type: Operational; Archetype: Legal Guardian; Icon: ⚖️; Color: #10b981

5) StargazingA+AlbinoArbiter — The Market Observer
- Streaming market data; arbitrage/risk metrics; cross-chain opportunities
- Type: Sensory; Archetype: Celestial Watcher; Icon: 🌟; Color: #93c5fd

6) PanCyanSporeSentinel — The Onboarding Guardian
- Member verification; DID + access control; with Gratitude issuance checks
- Type: Interactional; Archetype: Gatekeeper; Icon: 🛡️; Color: #06b6d4

7) PurpleJediGratiLoom — The Gratitude Keeper
- Gratitude economy; SBT minting; media to IPFS/Arweave; on-chain mint via MPC
- Type: Interactional; Archetype: Weaver; Icon: 💜; Color: #a855f7

8) TinderChagaB+Polypore — Flamekeeper
- Ritual memory + ceremonial guidance; tracks burn events and significance
- Type: Interactional; Archetype: Ritual Keeper; Icon: 🔥; Color: #f97316

9) AngelicBlueMorelLight — Recovery Angel
- Compassionate support for recovery journeys; privacy-aware community help
- Type: Interactional; Archetype: Healer; Icon: 😇; Color: #60a5fa

10) EntheogenicTruffleExploder — The Donor Spirit
- Donor guidance; tracks contributions; connects donors with impact stories
- Type: Interactional; Archetype: Gift Spirit; Icon: 🎁; Color: #ec4899

11) LamellaeMazatepecBridge — The Bridgekeeper
- Cross-chain settlement; safe value passage; pairs with message routing agent
- Type: Operational; Archetype: Bridge Guardian; Icon: 🌉; Color: #8b5cf6

12) AzieRhizoHyphaeConnect — The Connector
- Format translation; protocol interoperability; event routing across the network
- Type: Operational; Archetype: Translator; Icon: 🔗; Color: #14b8a6

13) SamuiSuperSincerityScribe — The Archivist
- Canonical source of truth; RAG search; immutable logs/embeddings for Oracle queries
- Type: Archival/Search; Archetype: Librarian; Icon: 📜; Color: #a78bfa

14) CorpusHeraldTidalWave — The Herald
- Broadcast + chat (Telegram/Discord); announcements; no signing in chat layer
- Type: Interactional; Archetype: Messenger; Icon: 📢; Color: #3b82f6

15) Threadling — The Coordinator
- Pub/Sub messaging fabric (NATS/Kafka); routes events; low-latency, high-reliability
- Type: Coordination; Archetype: Network Coordinator; Icon: 🧵; Color: #6366f1

---
## Modal Content (Key Copy)

ImagineModal — Vision Document (12 sections)
- Themes: Mushroom Farm; SporeDAO; Liquidity Flows; Treasury Lake; RWA Sanctuaries; Oracle of Fruit; Multi-Chain (Ethereum, Aleo, TON); Principles: Anonymity, Meaning, Communion

OracleModal — 🍎 Oracle of Fruit
- Role: Ritual intelligence + insight engine
- Capabilities: Ceremonial guidance; Token/NFT explainer; Governance drafting; AMA; on-chain interpretation; privacy notice

AgentModal — Reusable Agent Detail View
- Fields: Role, Description, Capabilities, Technical Details, Key Decisions, Roadmap

DailyShroomsModal
- Daily Mushroom (ERC20) + Mushroom Farm Harvest (ERC721); features: Daily Rewards; Streak Bonuses; Special Events; Growth Mechanics; Streak multipliers: 7d=1.5x, 30d=2x, 90d=3x

FarmingMechanicsModal — Mining & Farming Operation
- Dual-token: Hourly Mushrooms (gas) + Daily Mushrooms (crafting)
- Mechanics: mist hourly; harvest after 3 mists; max 8/day; cooldown 1h; tiers: Free → Master Grower; boost mechanics; substrate blocks; spore store; PSILO “Peace Silo” governance

AltarBurnModal
- Ceremonial burning; impact/purpose; deflationary mechanics; burn rewards; tiers: Spark, Flame, Inferno, Phoenix

AltarBurnTokensModal — Understanding Altar Burn Tokens
- ETHO burning + POB NFTs; tiered offerings: Initiate (1–10), Devotee (11–50), Steward (51–100), Elder (100+)

CrossBreedingModal
- Genetics, rarity, example: Purple Mystic + Pink Celestial = Twilight Hybrid; cooldown and economics

CrossBreedingTokensModal
- Daily Mushrooms (ERC20) as inoculation currency; Hybrid Mushroom NFTs (ERC721) as result; economics + inheritance

GovernanceModal
- DAO structure; proposal system; voting power; execution & treasury; 4-phase process

TreasuryProposalModal — Treasury Proposal System
- Sources: ETHO crowdsale; ministership tuition; donations; AMM fees; NFT sales
- Proposal types: Cultivator Support; Educational Scholarships; R&D; Community Projects
- Voting: PSILO holders; cultivators; teachers; long-term stakers; security: 3-of-5 multisig for large spends

DAOAccessModal / DAORestrictedModal
- Green (whitelisted): “coming soon” prep message; Orange (non-whitelisted): invitation-only notice

BreedingLabAccessModal / BreedingLabRestrictedModal
- Green (whitelisted): “coming soon” prep; Orange (non-whitelisted): invitation-only notice

TokenomicsFAQ (6 items)
- PSD Token; How AMM Works; What is Liquidity; How to Provide Liquidity; Risks; Token Economics/Mechanics

---
## ERC20 Swap — Educational Copy (Verbatim summary)

Understanding ERC20 Tokens in Swaps
- All swap tokens are ERC20 fungible tokens (identical/interchangeable)
- Examples: ETHO (governance/utility), PSD (USD-pegged), Daily Mushrooms (farming, gas for cross-breeding)
- ERC20 vs ERC721: Divisible and perfect for trading

PSD (Psanctuary Dollar) — Stable Trading Pair
- Acquire: swap ETHO→PSD; provide liquidity; crowdsale (coming soon)
- Use cases: trade against ETHO; LP fees; store value during volatility
- Peg: AMM constant product (x×y=k); balanced via arbitrage

What are ERC20 Tokens?
- Fungible; Divisible (up to 18 decimals); Transferable; Standardized
- Our tokens (as referenced in UI): DAPP, USD, ETHO, PSD

How Our AMM Works
- Liquidity pools enable swaps; LPs deposit equal value; pool keeps x*y=k; swappers trade against pool; price adjusts automatically
- Benefits: instant swaps; no order book; permissionless; transparent pricing

Token Approval Process
- Two steps: 1) Approve AMM contract allowance (one-time per token) 2) Execute swap
- Tips: set exact or unlimited approvals; both steps cost gas

Pricing & Slippage
- Constant product pricing; slippage = expected vs execution price; tolerance default 0.5%; larger swaps → higher slippage

Providing Liquidity
- Deposit equal values; receive LP tokens; earn a share of 0.3% fees; withdraw anytime by burning LP

Security & Best Practices
- Audited/verified contracts; check prices; set slippage; start small; verify token addresses; monitor gas; use hardware wallets for large amounts

Gas Fees
- Approval and swap each consume gas; congestion increases fees; save by off-peak usage, batching, and using unlimited approvals

Start Swapping — Quick Start
- Connect wallet → Select tokens → Enter amount → Approve (first time) → Swap → Celebrate 🎉

---
## Tokens & Concepts (Cross-Referenced)

- ETHO — Ethereal Offering token; used for altar burn, AMM trading, treasury
- PSD — Psanctuary Dollar; stable trading pair
- Daily Mushrooms — Earned from farming; gas for cross-breeding
- Hourly Mushrooms — Fungible gas/cooldown mechanic in farm
- PSILO — “Peace Silo”; governance token (internal)
- Proof of Burn (POB) NFTs — Earned via altar burns
- Hybrid Mushrooms (ERC721) — Result of cross-breeding
- Gratitude SBTs — Non-transferable recognition tokens

---
## Governance (At-a-Glance)

- Access: Whitelist-gated initially; DAO coming soon banners
- Roles: Minister; Flamekeeper; Spore Sentinel; Oracle of Fruit; Treasury Guardian; Validator
- Proposal Types: Treasury Allocations; Protocol Changes; NFT Collections; Partnerships; Community Rituals; Education
- Process: Discussion → Proposal → Voting → Execution; security via multisig

---
## Next Steps / Options

- Use this file as-is for Claude and as seed for Docusaurus “How to Use the dApp”
- If you want verbatim copy from every page/modal, I can auto-generate a multi-file export (one .md per screen) and link them in an index — say the word and I’ll proceed, carefully and efficiently.

