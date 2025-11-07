# Tokenomics Conflict Audit

**Date:** November 7, 2025  
**Purpose:** Identify and document conflicts between dApp frontend content and whitepaper tokenomics  
**Status:** 🔴 **CRITICAL CONFLICTS FOUND** — Requires immediate review and resolution

---

## Executive Summary

This audit compares tokenomics information from two primary sources:
1. **DAPP_frontend-content-export/ALL-IN-ONE.md** — Live dApp frontend content
2. **whitepaper4print/03-whitepaper/05-tokenomics.md** — Printable whitepaper

### 🚨 Major Conflicts Identified

| Issue | dApp Frontend | Whitepaper | Severity |
|-------|---------------|------------|----------|
| **Primary Token Name** | ETHO (Ethereal Token) | PSILO (Psilocybin Sanctuary Illumination Ledger Offering) | 🔴 CRITICAL |
| **Token Supply** | Not specified | 1 billion PSILO | 🟡 HIGH |
| **Burn Mechanism** | Proof-of-Giving (tokens → treasury) | Proof-of-Burn (tokens destroyed) | 🔴 CRITICAL |
| **Stablecoin** | PSD (Psanctuary Dollar) | Not mentioned in whitepaper | 🟡 HIGH |
| **Reward Token** | Daily Mushrooms (ERC-20) | LIGHT Token (ERC-20) | 🔴 CRITICAL |
| **Governance Token** | ETHO | PSILO | 🔴 CRITICAL |

---

## Detailed Conflict Analysis

### 1. Primary Utility/Governance Token

#### 🔴 CRITICAL CONFLICT

**dApp Frontend (ETHO):**
- Name: **ETHO** (Ethereal Token)
- Standard: ERC-20
- Uses:
  - Voting on proposals
  - Burning at altar for Proof of Burn NFTs
  - Participating in ecosystem economics
  - Primary governance and utility token

**Whitepaper (PSILO):**
- Name: **PSILO** (Psilocybin Sanctuary Illumination Ledger Offering)
- Standard: ERC-20
- Total Supply: 1,000,000,000 (1 billion)
- Decimals: 18
- Uses:
  - Governance (vote on treasury, propose changes, elect council, adjust parameters)
  - Staking (earn LIGHT rewards, increase governance weight, access premium features)
  - Offerings (burn PSILO to mint PoB NFTs)
  - Ecosystem Access (retreat bookings, spiritual services, educational content, ceremonies)

**Resolution Needed:**
- ✅ **Option A:** Rename ETHO → PSILO across entire dApp
- ✅ **Option B:** Update whitepaper to use ETHO instead of PSILO
- ✅ **Option C:** Clarify that ETHO and PSILO are the same token (ticker vs full name)

**Recommendation:** Option C seems most likely — ETHO is the ticker, PSILO is the full name. Update both documents to clarify this relationship.

---

### 2. Burn Mechanism Philosophy

#### 🔴 CRITICAL CONFLICT

**dApp Frontend (Proof-of-Giving):**
- Tokens go to **treasury** (not destroyed)
- Real value flows to community
- Treasury holds real crypto (ETH, USDC, ETHO)
- Funds deployed for ceremonies, scholarships, real estate, projects
- User receives soulbound Proof of Burn NFT
- **Philosophy:** "The best of both worlds — you get the spiritual merit of 'burning' while the community gets real resources to deploy"

**Whitepaper (Proof-of-Burn):**
- **Transaction Burn (2%):** Every PSILO transfer burns 2% permanently
- **Offering Burn (100%):** When minting PoB NFTs, 100% of PSILO is burned (destroyed)
- **Quarterly Treasury Burn:** DAO votes on burning excess treasury
- **Deflationary Model:** Target supply reduction over 10 years
  - Year 1: -10% (900M remaining)
  - Year 5: -50% (500M remaining)
  - Year 10: -70% (300M remaining)

**Resolution Needed:**
- ✅ **Option A:** Update whitepaper to reflect Proof-of-Giving model (tokens → treasury, not destroyed)
- ✅ **Option B:** Update dApp to implement true Proof-of-Burn (tokens destroyed)
- ✅ **Option C:** Hybrid model: Some burns go to treasury, some are destroyed

**Recommendation:** Option A — The Proof-of-Giving model is more aligned with the spiritual mission and provides real resources for community benefit. Update whitepaper to reflect this.

**Impact:** This is a fundamental economic design decision that affects:
- Token supply dynamics
- Treasury funding model
- Deflationary vs inflationary pressure
- Community resource availability

---

### 3. Stablecoin (PSD)

#### 🟡 HIGH PRIORITY

**dApp Frontend:**
- **PSD (Psanctuary Dollar)** exists
- Stablecoin pegged 1:1 to USD
- ERC-20 token
- Uses:
  - Stable trading within ecosystem
  - Donations and crowdsale participation
  - Denominating certain rituals
- How to get: AMM swap, direct purchase

**Whitepaper:**
- **No mention of PSD**
- Only PSILO and LIGHT tokens described
- No stablecoin in tokenomics model

**Resolution Needed:**
- ✅ Add PSD to whitepaper tokenomics section
- ✅ Specify PSD supply, minting mechanism, and peg maintenance
- ✅ Clarify relationship between PSD, PSILO, and LIGHT

**Recommendation:** Add comprehensive PSD section to whitepaper, including:
- Token specifications (supply, decimals, contract)
- Peg mechanism (algorithmic, collateralized, or hybrid)
- Use cases and utility
- Integration with PSILO and LIGHT

---

### 4. Reward/Farming Token

#### 🔴 CRITICAL CONFLICT

**dApp Frontend (Daily Mushrooms):**
- **Daily Mushrooms (ERC-20)**
- Earned via daily participation (farming)
- Primary use: **Gas currency for cross-breeding experiments**
- Accumulate through daily farming
- Trade on AMM (if enabled)
- Claim one Daily Mushroom (ERC-20) every 24 hours
- Acts as gas-like resource for actions

**Whitepaper (LIGHT Token):**
- **LIGHT (Living Illumination Gratitude Harvest Token)**
- Reward token representing "spiritual dividends"
- Dynamic supply (minted based on treasury performance)
- Minted quarterly based on treasury growth
- Distributed to PSILO stakers proportionally
- Formula: `LIGHT_Minted = (Treasury_Growth_USD * Participation_Rate) / PSILO_Price_USD`

**Resolution Needed:**
- ✅ **Option A:** Daily Mushrooms and LIGHT are different tokens (both exist)
- ✅ **Option B:** Rename Daily Mushrooms → LIGHT
- ✅ **Option C:** Remove LIGHT from whitepaper, keep Daily Mushrooms

**Recommendation:** Option A — Both tokens serve different purposes:
- **Daily Mushrooms:** Daily farming rewards, gas for cross-breeding (utility)
- **LIGHT:** Quarterly staking rewards, treasury performance dividends (passive income)

Update whitepaper to include both tokens with clear differentiation.

---

### 5. Token Supply & Distribution

#### 🟡 HIGH PRIORITY

**dApp Frontend:**
- No specific supply numbers mentioned
- No distribution breakdown
- No vesting schedules
- No allocation percentages

**Whitepaper:**
- **PSILO Total Supply:** 1,000,000,000 (1 billion)
- **Distribution:**
  - Community Rewards: 400M (40%) — 4 years linear vesting
  - Treasury DAO: 250M (25%) — Unlocked
  - Liquidity Pools: 200M (20%) — Unlocked
  - Team & Advisors: 100M (10%) — 4 years, 1-year cliff
  - Strategic Partners: 50M (5%) — 2 years linear
- **LIGHT:** Dynamic supply (minted quarterly)

**Resolution Needed:**
- ✅ Add supply and distribution information to dApp frontend
- ✅ OR remove from whitepaper if not finalized
- ✅ Ensure consistency across all documentation

**Recommendation:** Add supply/distribution info to dApp frontend for transparency. Users should know total supply and allocation.

---

### 6. Burn Tiers & Rewards

#### ✅ CONSISTENT (Minor Differences)

**dApp Frontend:**
- Spark (100 ETHO) → Bronze Tier
- Flame (500 ETHO) → Silver Tier
- Inferno (1,000 ETHO) → Gold Tier
- Phoenix (5,000+ ETHO) → Legendary Tier

**Whitepaper:**
- Not explicitly detailed in tokenomics section
- May be covered elsewhere

**Status:** ✅ No conflict — dApp provides more detail

---

### 7. AMM/DEX Token Pairs

#### ✅ CONSISTENT

**dApp Frontend:**
- Swap between ERC-20 tokens: ETHO, PSD, Daily Mushrooms
- Constant product formula (x * y = k)
- Liquidity provision earns fees

**Whitepaper:**
- Not detailed in tokenomics section
- Consistent with dApp description

**Status:** ✅ No conflict

---

## Summary of Required Actions

### 🔴 Critical (Must Fix Before Launch)

1. **Resolve ETHO vs PSILO naming**
   - Clarify if they're the same token (ticker vs full name)
   - Update all documentation for consistency
   - Ensure smart contracts use correct naming

2. **Resolve Proof-of-Giving vs Proof-of-Burn**
   - Choose one model or create hybrid
   - Update whitepaper burn mechanics
   - Adjust deflationary projections if using Proof-of-Giving

3. **Clarify Daily Mushrooms vs LIGHT**
   - Document both tokens if both exist
   - Differentiate use cases clearly
   - Update tokenomics model to include both

### 🟡 High Priority (Should Fix Soon)

4. **Add PSD to whitepaper**
   - Full token specifications
   - Peg mechanism details
   - Use cases and utility

5. **Add supply/distribution to dApp**
   - Total supply numbers
   - Allocation breakdown
   - Vesting schedules

### 🟢 Low Priority (Nice to Have)

6. **Expand burn tier details in whitepaper**
7. **Add AMM/DEX details to whitepaper**
8. **Create unified tokenomics diagram** showing all tokens and their relationships

---

## Recommended Next Steps

1. **Founder Review** — Review this audit and make decisions on each conflict
2. **Update Whitepaper** — Implement chosen resolutions in whitepaper
3. **Update dApp Content** — Ensure frontend matches whitepaper
4. **Smart Contract Audit** — Verify contracts match final tokenomics design
5. **Community Communication** — Announce any changes to tokenomics clearly

---

## Notes for Review

- **Do NOT remove conflicting information** — Both versions preserved in this audit
- **Conflicts noted for founder decision** — Not resolved unilaterally
- **All differences documented** — Even minor inconsistencies included
- **Recommendations provided** — But final decision rests with founder

---

**Audit Completed:** November 7, 2025  
**Auditor:** Augment Agent  
**Status:** Awaiting founder review and resolution decisions

