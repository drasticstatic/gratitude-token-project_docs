# Ethereal Offering — Whitepaper (Deep Review + TON P2E & Telegram Mini-App Integration)

**Version:** 0.9  
**Author:** Psanctuary DAO (draft)  
**Purpose:** Guide design and implementation for a multi-token, spiritually-aligned ecosystem (Ethereal Offering) that unites Ethereum browser UX with TON-based Telegram mini-app play-to-earn, NFT stickers/gifts, and treasury-first economics.

---

## Table of Contents

1. **Executive Summary**
2. **TL;DR: Recommendations at a Glance**
3. **Comparative Survey: Games & Mini-Apps on TON**
4. **How TON P2E & Telegram Mini-Apps Work — Patterns & Primitives**
5. **Integration Architecture: Ethereum Browser + TON Mini-App**
6. **Tokenomics: Staking, LPs, Rewards, and Sustainability**
7. **NFTs: Tradable vs Soulbound, Surcharge & Sticker Use**
8. **Proof-of-Work vs Proof-of-Stake (Spiritual Analogies) & “Proof of You”**
9. **Example Smart-Contract Interfaces (Sketches)**
10. **Economic Design Scenarios and Sample Simulations**
11. **Risks, Mitigations, and Governance**
12. **Recommended Immediate Roadmap & Development Tasks**
13. **Appendix: Research References & Comparative Links**

---

## 1. Executive Summary

Ethereal Offering is a hybrid spiritual + open-source project combining:

- **Multi-token economy:** PSILO, MDAO, ETHO, PSD, DM, PoB, SHROOM with defined roles.
- **Ceremonial mechanics:** Burns → Proof-of-Burn (PoB) soulbound receipts; breeding & seasonal NFT evolution; Mycelium LLM agents as ritual memory.
- **Dual UX:** Ethereum browser UI for governance, legal rails, and main app; TON Telegram mini-apps for mass onboarding, P2E micro-economies, and social sticker/gift experiences.
- **Treasury-first funding model:** Routing royalties/fees toward a nonprofit treasury while allowing limited participant yield via LP share + vesting.

This document outlines how to build the TON side for P2E and stickers, integrate bridges and shared DID, and tune fee splits & staking to protect mission integrity while providing reasonable incentives.

---

## 2. TL;DR — Recommendations at a Glance

- **Use TON for P2E & sticker UX:** Telegram mini-apps + Jettons + NFT stickers are low-friction and scale well.
- **Bridge Ethereum and TON:** Use Symbiosis/Stargate or other bridges; let web users fund TON Jettons easily for play.
- **Tradable NFTs with enforced royalties:** Use TON NFT standards with tiered royalties (common: lower, rare: higher). Route royalties to the treasury.
- **Bootstrap LPs:** Start with lower treasury cuts, provide bonus farming rewards, and gradually shift via DAO.
- **Staking/locking with multipliers:** Increase TVL stability and provide non-financial governance perks.
- **Implement “Proof of You” via DID + SBT:** Prevent Sybil attacks and anchor ceremonial identity without KYC.
- **Use Mycelium Agents:** Validate/curate P2E events with human-in-the-loop or attestation models.

---

## 3. Comparative Survey: TON Mini-Apps & Games

### **WeMine**
- **Nature:** Telegram mining bot / clicker / farm sim.
- **Reward Model:** Tokenized rewards for daily interaction.
- **Relevance:** Demonstrates mass reach and retention via daily tasks.

### **PandaFiT**
- **Nature:** Gamified fitness / pet-style P2E on TON.
- **Reward Model:** Missions, points, daily check-ins.
- **Relevance:** Useful for social engagement + gamified wellness.

### **City Holder**
- **Nature:** Build-to-earn Telegram game.
- **Reward Model:** Earn in-game currency or TON for engagement.
- **Relevance:** Shows how complex economic loops sustain long-term retention.

### **TeaBank**
- **Nature:** Telegram metaverse / farm game.
- **Reward Model:** Passive yield assets (trees) that mint TON daily.
- **Relevance:** Demonstrates passive farming models with economic sinks.

### **HumanPass**
- **Nature:** DID for TON — identity-based rewards and perks.
- **Relevance:** Critical for “Proof of You” — prevents Sybil and enables reputation & rewards.

---

## 4. How TON P2E & Telegram Mini-Apps Work — Patterns & Primitives

### **Core Primitives**
- **Telegram Mini-Apps & Bots:** Webview apps inside Telegram; interact with TON via TON Connect.
- **Jettons:** TON's fungible tokens (ERC-20 analog).
- **NFT/Sticker Standards:** TON supports on-chain royalties & sticker mechanics.
- **Low Fees:** Enable frequent microtransactions & batch mints.
- **Bridges:** Symbiosis, Stargate facilitate cross-chain flows.

### **Reward Patterns**
- **Tap-to-Earn / Microtasking:** Small on-chain rewards for actions.
- **Passive Farming / Generators:** Assets that yield over time.
- **LP & Farming:** Users provide liquidity in AMMs, receive fees and farming rewards.
- **Event Drops:** Time-limited events that issue reward drops.

---

## 5. Integration Architecture: Ethereum Browser + TON Mini-App

### **High-Level Architecture**
```mermaid
flowchart LR
  subgraph Browser (Ethereum)
    EWallet[User Wallet (MetaMask)]
    WebApp[Web UI / DAO Dashboard]
    EContracts[EVM Contracts (DAO, PSILO, MDAO, ETHO)]
  end

  subgraph Bridge
    BridgeSvc[Symbiosis / Stargate]
  end

  subgraph TON Channel
    TONWallet[Ton Wallet (Tonkeeper)]
    MiniApp[Telegram Mini-App / Sticker UX]
    Jettons[Project Jettons (ETHO-J, DM-J, etc.)]
    STON[STON.fi AMM]
  end

  EWallet -->|Bridge in / out| BridgeSvc --> TONWallet
  WebApp --> EContracts
  MiniApp --> TONWallet
  TONWallet --> Jettons --> STON
  MiniApp --> MiniRewards[On-chain or Off-chain points]
  MiniRewards -->|mint jettons| TONWallet
  WebApp -->|link DID| MiniApp
```

### **Identity / Linking**
- Provide a link button from web to Telegram mini-app with a session ID.
- Use HumanPass or Self.ID/Ceramic for persistent DID.

### **Settlement & Bridging UX**
- Web users can top up TON Jettons via a Bridge modal.
- On TON, players swap Jettons on STON.fi or spend in mini-app.

---

## 6. Tokenomics: Staking, LPs, Rewards, and Sustainability

### **Key Principles**
- Separate concerns: fundraising (PSILO), governance (MDAO), ritual currency (ETHO), etc.
- Design sinks for inflationary tokens (e.g., breeding, fees, burns).
- Bootstrap LPs with time-limited rewards.

### **Staking & Locking Patterns**
- **Lock Multipliers:** Reward multiplier increases with lock duration.
- **Locked-LP Staking:** Stake LP tokens for extra yield.
- **Bonding Curves:** Let users sell tokens to the treasury at a discount for locked positions.

---

## 7. NFTs: Tradable vs Soulbound, Surcharge & Sticker Use

### **Tradable NFTs**
- **Examples:** SHROOM (collectibles), animated sticker NFTs.
- **Royalty Rates:** Common stickers: 3%, Rare SHROOMs: 7–10%.

### **Non-Transferable / Soulbound NFTs**
- **Examples:** Role NFTs, Proof-of-Burn (PoB), DID-linked credentials.

---

## 8. Proof-of-Work vs Proof-of-Stake (Spiritual Analogies) & “Proof of You”

### **Spiritual Analogies**
- **Proof-of-Work:** Active sacrifice and labor (burning ETHO, mentoring).
- **Proof-of-Stake:** Locking tokens, time commitment, staking for governance.

### **“Proof of You” — DID & SBT Design**
- **Goal:** Sybil resistance + privacy-preserving identity.
- **Components:** DID, Soulbound Welcome NFT, Proof-of-Activity attestations.

---

## 9. Example Smart-Contract Interfaces (Sketches)

### **EVM: ETHO Burn with PoB Mint**
```solidity
interface IProofOfBurn {
  function mintProof(address to, string calldata tokenURI, uint256 amount) external returns (uint256);
}

contract ETHOToken is ERC20 {
  IProofOfBurn public proof;
  function burnAndProof(uint256 amount, string calldata metadataCID) external {
    _burn(msg.sender, amount);
    proof.mintProof(msg.sender, metadataCID, amount);
  }
}
```

---

## 10. Economic Design Scenarios and Sample Simulations

### **Scenario 1: Bootstrap (First 90 Days)**
- Fee split: 0.2% LP / 0.1% treasury.
- Farming emissions: 1,000,000 ETHO distributed linearly over 90 days.

### **Scenario 2: Balanced Steady State**
- Fee split: 0.15% LP / 0.15% treasury.
- Ongoing modest emissions to LPs.

### **Scenario 3: Treasury-First Sovereign**
- Fee split: 0.06% LP / 0.24% treasury (80/20).

---

## 11. Risks, Mitigations, and Governance

### **Risks**
- Impermanent loss for LPs.
- Speculation & mission drift.
- Smart-contract exploits.

### **Mitigations**
- Educate LPs; provide impermanent loss calculators.
- Use SBTs and role-based gating for governance.
- Conduct audits & implement multi-sig emergency controls.

---

## 12. Recommended Immediate Roadmap & Development Tasks

1. Prototype Telegram mini-app (TON).
2. Bridge UX: Integrate Symbiosis/Stargate.
3. Deploy AMM pool (STON.fi).
4. Implement PoB minting & SBT Welcome on Ethereum.
5. Create sticker NFT drop & album in Telegram.
6. Design DAO governance & multi-sig.

---

## 13. Appendix: Research References & Comparative Links

- **WeMine:** Telegram bot / games listing.
- **PandaFiT:** Mini-app & Twitter/X channels.
- **STON.fi:** TON AMM docs & fee models.
- **GetGems:** Sticker/NFT marketplace examples.
- **Bridges:** Symbiosis, Stargate for cross-chain bridging.

---

**Closing Reflection:** Proof-of-You & the Project Soul  
“Proof of You” means a recorded, cryptographic attestation of presence, intention, and accountability. It sustains the sacred via transparent, community-controlled economics.
