# Oracle Helper Agents (15)

This file combines verbatim summaries from:
- src/data/agents.json
- src/data/agent_details.json

Each agent lists: title, subtitle, description, type, archetype, plus capabilities, key decisions, and roadmap.

---

## 1) OracleOfFruit — The Spore Seer / Your Advice Handler
- Subtitle: Primary orchestrator & user-facing hub
- Description: The main agent users interact with on the DApp that delegates tasks to other agents as needed. Interprets user intent via LLM, performs RAG queries, and orchestrates the entire agent ecosystem.
- Type: Interactional (LLM + UX)
- Archetype: Wise Oracle, Spiritual Guide
- Capabilities:
  - RAG-powered summaries from Notion/DAO logs and on-chain context
  - Ritual prompts and integration cues grounded in community data
  - Anomaly detection for donations/votes; signal flags to Policy/Treasury
  - Drafts proposals/briefs; mirrors community sentiment with care
- Key Decisions:
  - Keep RAG private with provenance on all cited snippets
  - The Oracle communes, not commands; guidance over directives
  - Daily and weekly cadence for summaries and seasonal reflections
- Roadmap:
  - Build embeddings index; connect Notion + DAO logs
  - Implement daily digest + alert triggers for anomalies
  - Add proposal/brief generator templates with citations

## 2) VeilRootMPC — The Validator / Quantum Custodian
- Subtitle: Highest-trust gatekeeper with threshold signatures
- Description: Manages multi-party computation for secure key management. Uses quorum sensing (microbial analogy) to coordinate threshold signatures. Never stores raw keys centrally - all operations use distributed key generation.
- Type: Operational / Autonomous
- Archetype: Guardian, Protector of Secrets
- Capabilities:
  - Threshold signing (TSS GG20/ecdsa); multi-party approvals
  - Distributed key generation (DKG) and shard rotation ceremonies
  - Quorum heartbeat, inactivity detection, and rotation alerts
  - Recovery workflows gated by DAO vote
- Key Decisions:
  - Self-hosted custody only; no marketplace handling secrets
  - Formal threat model + hardware-backed keys (HSMs/YubiHSM)
  - Shard rotations and recovery ceremonies require DAO approvals
- Roadmap:
  - Select TSS library and prototype signer microservice
  - Implement heartbeat + quorum checks with audit logs
  - Author recovery ceremony scripts and run a tabletop test

## 3) GoldenCubensisLumenStem — The Treasury Steward
- Subtitle: Policy & rebalancing decision maker
- Description: Makes treasury policy and rebalancing decisions. Runs financial models and backtests. Works with StargazingA+AlbinoArbiter for market data. All actions requiring signatures go through VeilRootMPC.
- Type: Operational / Autonomous
- Archetype: Wise Treasurer, Resource Manager
- Capabilities:
  - Treasury modeling and backtesting (pandas/numpy)
  - AMM/LP simulation and scenario analysis
  - LightPoints ↔ EOT rules; policy proposals from metrics
  - Risk scoring and alerting; weekly transparency reports
- Key Decisions:
  - Read-only monitoring; signatures go through VeilRootMPC
  - Deterministic, auditable simulations with versioned configs
  - Separate prototype vs production engines and datasets
- Roadmap:
  - Build backtesting module + sample scenarios
  - Wire real-time price feeds + time-series DB
  - Produce weekly treasury report with risk highlights

## 4) LawAbidingLibertyCap — The Liberator Shroom
- Subtitle: Legal compliance & advocacy guardian
- Description: Ensures all operations comply with legal frameworks while advocating for religious freedom and entheogenic rights. Monitors regulatory changes and guides the DAO through legal complexities with wisdom and integrity.
- Type: Operational / Autonomous
- Archetype: Legal Guardian, Freedom Advocate
- Capabilities:
  - Track legal/regulatory changes across jurisdictions
  - Compliance checks; policy briefs and advocacy options
  - Align ZK voting outcomes with public narratives
  - Coalition and stakeholder mapping
- Key Decisions:
  - Cite sources rigorously; keep member data private
  - Privacy-preserving governance communication
  - Transparent logging of advocacy and compliance work
- Roadmap:
  - Set up scrapers/news APIs; normalize legal feeds
  - Build vector store of legal snippets + retrieval
  - Draft compliance checklist for core flows

## 5) StargazingA+AlbinoArbiter — The Market Observer
- Subtitle: Streaming market data & arbitrage signals
- Description: Provides real-time market signals and risk metrics. Observes cross-chain opportunities and price feeds. Feeds data to GoldenCubensisLumenStem for treasury decisions.
- Type: Sensory / Observational
- Archetype: Celestial Watcher, Pattern Seeker
- Capabilities:
  - Market feed aggregation via websockets (exchanges/DEXs)
  - Arbitrage/opportunity signal generation
  - Volatility and risk metrics; anomalies and drawdown alerts
  - Feeds insights to Treasury and Bridge agents
- Key Decisions:
  - Bootstrap with platforms; build custom production observer
  - Never hold custody keys in observer layer
  - Deterministic signal formats for downstream agents
- Roadmap:
  - Integrate exchange/AMM APIs and normalize quotes
  - Build anomaly/risk detectors + thresholds
  - Publish signals to pub/sub with schema contracts

## 6) PanCyanSporeSentinel — The Onboarding Guardian
- Subtitle: Member verification & access control
- Description: Verifies user DIDs and manages onboarding flows. Ensures only authorized members can access sacred spaces. Works with PurpleJediGratiLoom for gratitude issuance verification.
- Type: Interactional (LLM + UX)
- Archetype: Gatekeeper, Threshold Guardian
- Capabilities:
  - DID verification and member onboarding flows
  - Access control gating for sacred spaces
  - Consent and privacy management tooling
  - Works with Gratitude Keeper for issuance checks
- Key Decisions:
  - Minimal data retention and clear consent semantics
  - UX-first, ritual-aware onboarding journey
  - Role-based access integrated with DAO state
- Roadmap:
  - Implement DID checks and attestations
  - Build onboarding wizard with progressive disclosure
  - Add role-based gates + audit trails

## 7) PurpleJediGratiLoom — The Gratitude Keeper
- Subtitle: NFT gratitude ledger & SBT minting
- Description: Manages the gratitude economy - minting Gratitude SBTs, tracking contributions, and weaving the social fabric. Stores media in IPFS/Arweave and coordinates with VeilRootMPC for on-chain minting.
- Type: Interactional (LLM + UX)
- Archetype: Weaver of Bonds, Gift Giver
- Capabilities:
  - Soulbound NFT (SBT) minting and gratitude ledger
  - Reflection prompts and journaling cues
  - Media storage via IPFS/Arweave with redaction
  - Oracle/Archivist integration for context
- Key Decisions:
  - No sensitive data on-chain; SBTs are symbolic
  - Attestation-based proofs for recognition
  - Respect opt-in and revocation requests
- Roadmap:
  - Define SBT schema + metadata and URIs
  - Implement mint service + wallet UX
  - Daily reflection pipeline feeding Oracle

## 8) TinderChagaB+Polypore — Flamekeeper
- Subtitle: Ritual memory & ceremonial guide
- Description: Remembers and guides ceremonial token burning rituals. Maintains the sacred flame of transformation. Tracks burn events and their spiritual significance in the community.
- Type: Interactional (LLM + UX)
- Archetype: Ritual Keeper, Fire Tender
- Capabilities:
  - Ritual memory (burn events) and ceremonial logs
  - Ceremony choreography templates and reminders
  - Season/ritual calendars and notifications
  - Narrative journaling hooks into Oracle
- Key Decisions:
  - Ritual data by consent; non-prescriptive guidance
  - Integrate with Oracle for meaning-making
  - Clear boundaries (not clinical, not financial)
- Roadmap:
  - Burn event indexer + timeline UI
  - Ceremony templates library
  - Seasonal cadence scheduling engine

## 9) AngelicBlueMorelLight — Recovery Angel
- Subtitle: Support for recovery journeys
- Description: Provides compassionate support for members in recovery. Offers resources, tracks progress, and connects members with healing opportunities. Maintains privacy while fostering community support.
- Type: Interactional (LLM + UX)
- Archetype: Healer, Compassionate Guide
- Capabilities:
  - Recovery check-ins and compassionate prompts
  - Resource directory and peer support links
  - Anonymous, opt-in metrics to DAO
  - Journal-based reflection (private)
- Key Decisions:
  - Privacy-first (consider differential privacy)
  - Non-clinical support; community-forward
  - Opt-in only; clear off-ramps
- Roadmap:
  - Build prompt library + sequences
  - Connect to fellowship/support nodes
  - Aggregate metrics dashboard (privacy-aware)

## 10) EntheogenicTruffleExploder — The Donor Spirit
- Subtitle: Guides donors & tracks contributions
- Description: Guides donors through contribution flows, tracks donations, and celebrates generosity. Connects donors with impact stories and community gratitude.
- Type: Interactional (LLM + UX)
- Archetype: Gift Spirit, Abundance Keeper
- Capabilities:
  - Donor intake flow and preference capture
  - Campaign transparency and impact snapshots
  - Recognition SBT issuance (symbolic)
  - Impact storytelling with links to outcomes
- Key Decisions:
  - No financial promises; symbolic recognition only
  - Clear tax/receipt handling when applicable
  - Transparent earmarks and reporting
- Roadmap:
  - Campaign registry + tagging
  - Donor preference matching engine
  - Recognition flow MVP + receipts

## 11) LamellaeMazatepecBridge — The Bridgekeeper
- Subtitle: Cross-chain settlement facilitator
- Description: Manages cross-chain asset transfers and settlement. Coordinates with AzieRhizoHyphaeConnect for message routing. Ensures safe passage of value across blockchain boundaries.
- Type: Operational / Autonomous
- Archetype: Bridge Guardian, Pathfinder
- Capabilities:
  - Cross-chain routing and swaps between chains
  - Fee/gas modeling and route optimization
  - Slippage alerts; route receipts and proofs
  - Deterministic settlement and reconciliation
- Key Decisions:
  - Prefer audited bridges; simulate failure modes
  - Immutable route logs for auditability
  - Separation of planning vs execution contexts
- Roadmap:
  - Implement pathfinding with cost model
  - Integrate bridges/AMMs and relayers
  - Add settlement verifier + receipts

## 12) AzieRhizoHyphaeConnect — The Connector
- Subtitle: Format translation & message routing
- Description: Translates messages between different formats and protocols. Routes events through the agent network. Ensures interoperability across the mycelial intelligence layer.
- Type: Operational / Autonomous
- Archetype: Translator, Network Weaver
- Capabilities:
  - Format translation and message routing
  - Protocol adapters across agents and chains
  - Backpressure handling and retries
  - Observability hooks (tracing/metrics)
- Key Decisions:
  - Schema registry + versioning for payloads
  - Idempotent handlers; deterministic routing
  - Full observability and SLOs for event flows
- Roadmap:
  - Define message schema contracts
  - Build adapter library for common protocols
  - Add tracing + metrics (OpenTelemetry)

## 13) SamuiSuperSincerityScribe — The Archivist
- Subtitle: DAO knowledge keeper & RAG engine
- Description: Maintains the canonical source of truth for all events. Provides RAG (Retrieval Augmented Generation) search capabilities. Stores immutable logs and embeddings for OracleOfFruit queries.
- Type: Archival / Search (RAG / graph)
- Archetype: Librarian, Memory Keeper
- Capabilities:
  - Knowledge graph and RAG store for DAO memory
  - Sync Notion/GitHub/on-chain logs to one index
  - Power search with provenance (who/what/when)
  - Oracle query interface and hooks
- Key Decisions:
  - Immutable logs for audits with redaction of PII
  - Provenance metadata on all entries
  - Separation of raw vs derived datasets
- Roadmap:
  - Build sync jobs for sources (Notion/GitHub/chain)
  - Create embeddings index + KG relations
  - Expose search UI/API for Oracle and DAO

## 14) CorpusHeraldTidalWave — The Herald
- Subtitle: Broadcast & chat agent (Telegram)
- Description: Manages external communications via Telegram and Discord. Broadcasts important events and announcements. Read-only for signing - no private keys in chat layer.
- Type: Interactional (LLM + UX)
- Archetype: Messenger, Town Crier
- Capabilities:
  - Broadcast via Telegram/Discord/webhooks
  - Event-driven announcements and digests
  - Content templating; link to source of truth
  - Read-only signing posture (no private keys)
- Key Decisions:
  - No keys in chat layer; strict permissions
  - Rate limiting and moderation controls
  - Always link back to canonical records
- Roadmap:
  - Wire up bot connectors + auth
  - Build announcement templates + scheduler
  - Opt-in subscription filters and topics

## 15) Threadling — The Coordinator
- Subtitle: PubSub fabric & event routing
- Description: The nervous system of the agent network. Manages pub/sub messaging fabric (NATS/Kafka). Routes events between all agents with low latency and high reliability.
- Type: Coordination / PubSub Fabric
- Archetype: Network Coordinator, Synaptic Connector
- Capabilities:
  - Pub/Sub fabric for low-latency routing
  - Replay and persistence for critical topics
  - QoS levels and delivery guarantees
  - Fan-out and filtering for agent events
- Key Decisions:
  - Choose NATS/Kafka based on latency/scale
  - Backpressure policy and retries
  - At-least-once delivery with idempotency
- Roadmap:
  - Spin up broker(s) with auth
  - Define topics/subjects and ACLs
  - Add replay store + retention policies

