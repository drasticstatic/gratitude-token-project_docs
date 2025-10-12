---
id: technical-roadmap
title: Technical Roadmap & Architecture
---

# Technical Roadmap & Architecture

**Generated:** 2025-10-11 21:45:26 UTC

This document outlines the technical architecture and stepwise roadmap for the Ethereal Offering project.

## High-Level Architecture

1. **Aleo & ZKP Voting:** Privacy-preserving decision making for sensitive DAO votes.
2. **Hybrid MPC:** Distributed key management for stewards with DAO-triggered recovery.
3. **EVM Side-Chains (Stacked):** Layered chains for payments, identity, NFTs, and P2E features.
4. **Gratitude Token + SBTs:** Non-speculative utility and soulbound tokens for role and recognition.
5. **Treasury & DEX Integration:** Arbitrage profits and treasury management workflows.

## Phase Breakdown

**Phase 0 — Preservation & Documentation (Present)**  
- Publish docs (this repository), convert conversation logs to structured MD content, and prepare Augment prompts.

**Phase 1 — Foundations (0–3 months)**  
- GitBook/Docusaurus launch, Gratitude Token PoC, simple Aleo voting PoC, EVM side-chain payments PoC.

**Phase 2 — Core Infrastructure (3–9 months)**  
- Implement hybrid MPC, audited smart contracts for Gratitude Token/SBTs, treasury automation, DEX arbitrage alpha integration.

**Phase 3 — Community & Ministry Launch (9–18 months)**  
- Onboard church/fellowship nodes, launch mobile-friendly UX for fellowship use, establish grants & care programs.

**Phase 4 — Maturation (18+ months)**  
- Full privacy-integrated voting, multiple side-chains in production, robust steward rotation and recovery.

## Aleo Voting PoC (Actionable Steps)

1. Define voter eligibility and registration process.
2. Build a circuit for vote commitment generation (Aleo).
3. Implement an off-chain bulletin board for commitments and on-chain ZK proof anchors.
4. Design the tallying circuit and dispute resolution mechanism.

## MPC Steward Rotation Template (Suggested Parameters)

- Threshold: k-of-n (e.g., 3-of-5).
- Rotation trigger: DAO vote with 60% quorum.
- Staking: stewards stake tokens; inactivity penalties apply after a grace period.
- Recovery: two-stage DAO vote + time-lock to prevent rush recoveries.

## EVM Side-Chain & Compression (Music Analogy)

- Treat side-chains as tracks in a mix. Use compression as state consolidation (zk-rollups, state commitments).
- Implement cross-chain relayers and use ZK proofs or optimistic fraud proofs for settlement.

