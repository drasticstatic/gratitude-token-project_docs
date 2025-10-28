---
sidebar_position: 3
title: Tokenomics & Economic Model
---

# Tokenomics & Economic Model

## Multi-Token Ecosystem

Ethereal Offering uses a **three-token model** designed to create sustainable value while aligning economic incentives with spiritual practice.

## PSILO Token 🍄

### Overview
**PSILO** (Psilocybin Sanctuary Illumination Ledger Offering) is the primary utility and governance token of the Ethereal Offering ecosystem.

### Token Specifications
- **Standard**: ERC-20
- **Total Supply**: 1,000,000,000 (1 billion)
- **Decimals**: 18
- **Symbol**: PSILO
- **Contract**: [To be deployed]

### Distribution Breakdown

| Allocation | Amount | Percentage | Vesting |
|------------|--------|------------|---------|
| Community Rewards | 400,000,000 | 40% | 4 years linear |
| Treasury DAO | 250,000,000 | 25% | Unlocked |
| Liquidity Pools | 200,000,000 | 20% | Unlocked |
| Team & Advisors | 100,000,000 | 10% | 4 years, 1-year cliff |
| Strategic Partners | 50,000,000 | 5% | 2 years linear |

### Utility Functions

1. **Governance**
   - Vote on treasury allocation
   - Propose ecosystem changes
   - Elect council members
   - Adjust protocol parameters

2. **Staking**
   - Earn LIGHT token rewards
   - Increase governance weight
   - Access premium features
   - Participate in exclusive events

3. **Offerings**
   - Burn PSILO to mint PoB NFTs
   - Contribute to community treasury
   - Unlock spiritual achievements
   - Gain social status

4. **Ecosystem Access**
   - Pay for retreat bookings
   - Purchase spiritual services
   - Access educational content
   - Participate in ceremonies

### Burn Mechanisms

#### Transaction Burn (2%)
Every PSILO transfer burns 2% of the amount:
```
Transfer 1,000 PSILO:
- Recipient receives: 980 PSILO
- Burned: 20 PSILO
```

**Exceptions** (no burn):
- DEX/CEX trading pairs
- Staking/unstaking
- Treasury operations
- Whitelisted contracts

#### Offering Burn (100%)
When minting PoB NFTs, 100% of PSILO is burned:
```
Mint Gold NFT:
- User burns: 10,000 PSILO
- NFT minted: Living Offering #1234
- PSILO supply: -10,000 permanently
```

#### Quarterly Treasury Burn
DAO votes on burning excess treasury:
```
Q1 2025 Proposal:
- Treasury balance: 50M PSILO
- Proposed burn: 5M PSILO (10%)
- Voting period: 7 days
- If passed: Burned after 48-hour timelock
```

### Deflationary Model

**Target Supply Reduction**:
- Year 1: -10% (900M remaining)
- Year 3: -30% (700M remaining)
- Year 5: -50% (500M remaining)
- Year 10: -70% (300M remaining)

**Burn Rate Projections**:
```
Assumptions:
- 100K active users
- Average 10 transactions/month per user
- 1,000 NFT mints/month
- Quarterly treasury burns

Monthly Burn:
- Transaction burns: 2M PSILO
- NFT mints: 10M PSILO
- Treasury burns: 4M PSILO (quarterly average)
Total: ~16M PSILO/month = 192M/year
```

## LIGHT Token ✨

### Overview
**LIGHT** (Living Illumination Gratitude Harvest Token) is the reward token that represents "spiritual dividends" from ecosystem growth.

### Token Specifications
- **Standard**: ERC-20
- **Total Supply**: Dynamic (minted based on treasury performance)
- **Decimals**: 18
- **Symbol**: LIGHT
- **Contract**: [To be deployed]

### Minting Formula

LIGHT is minted quarterly based on:
```
LIGHT_Minted = (Treasury_Growth_USD * Participation_Rate) / PSILO_Price_USD

Where:
- Treasury_Growth_USD = Current treasury value - Previous quarter value
- Participation_Rate = Active_Stakers / Total_Token_Holders
- PSILO_Price_USD = Chainlink oracle price
```

**Example**:
```
Q1 2025:
- Treasury grew from $1M to $1.5M (+$500K)
- 10,000 active stakers / 50,000 total holders = 20% participation
- PSILO price = $0.10

LIGHT_Minted = ($500,000 * 0.20) / $0.10 = 1,000,000 LIGHT
Distributed to stakers proportionally
```

### Utility Functions

1. **Staking Rewards**
   - Stake LIGHT to earn more LIGHT
   - Compound rewards automatically
   - Boost PSILO staking APY

2. **Conversion**
   - Convert LIGHT → PSILO at dynamic rate
   - Rate based on treasury backing
   - Minimum 30-day holding period

3. **Premium Access**
   - Pay for exclusive content
   - Access advanced features
   - Priority retreat booking
   - VIP community events

### Burn Mechanisms

- 50% of LIGHT used for conversions is burned
- Quarterly burns based on DAO votes
- Penalty burns from early unstaking

## PoB NFTs 🔥

### Overview
**Proof of Burn NFTs** are unique, non-fungible tokens minted when users burn PSILO as offerings.

### NFT Specifications
- **Standard**: ERC-721
- **Supply**: Unlimited (minted on demand)
- **Metadata**: IPFS + Arweave
- **Marketplace**: OpenSea, Rarible, custom marketplace

### Rarity Tiers & Burn Requirements

| Tier | PSILO Burned | Governance Weight | Estimated Value |
|------|--------------|-------------------|-----------------|
| Bronze | 100-999 | 100 | $10-100 |
| Silver | 1,000-9,999 | 500 | $100-1,000 |
| Gold | 10,000-99,999 | 2,500 | $1,000-10,000 |
| Platinum | 100,000-999,999 | 15,000 | $10,000-100,000 |
| Diamond | 1,000,000+ | 100,000 | $100,000+ |

### NFT Attributes

Each NFT has dynamic attributes:

1. **Visual Traits**
   - Background (7 variants)
   - Aura color (12 variants)
   - Sacred geometry (15 patterns)
   - Elemental effects (4 types)
   - Rarity glow (5 intensities)

2. **Functional Traits**
   - Governance weight
   - Staking boost multiplier
   - Treasury allocation influence
   - Community status level

3. **Evolutionary Traits**
   - Generation (breeding count)
   - Lineage (parent NFTs)
   - Mutations (rare traits)
   - Age (time since mint)

### NFT Utility

1. **Governance Power**
   - Vote on DAO proposals
   - Weighted by rarity tier
   - Stackable with PSILO staking

2. **Staking Boost**
   - Increase LIGHT rewards
   - Multiplier based on rarity
   - Stackable across multiple NFTs

3. **Social Status**
   - Display in profile
   - Access exclusive channels
   - Priority in community events
   - Recognition in leaderboards

4. **Breeding/Evolution**
   - Combine two NFTs to create new one
   - Inherit traits from parents
   - Chance of rare mutations
   - Burns additional PSILO

### NFT Marketplace

**Primary Market** (Minting):
- Direct from contract
- Pay in PSILO (burned)
- Instant minting
- No fees

**Secondary Market** (Trading):
- OpenSea integration
- Custom marketplace (2.5% fee to treasury)
- Peer-to-peer transfers
- Rental market (coming soon)

## Economic Sustainability

### Revenue Streams

1. **Transaction Fees**: 0.5% of all PSILO transfers → Treasury
2. **NFT Marketplace**: 2.5% of secondary sales → Treasury
3. **Premium Subscriptions**: $10-50/month → Treasury
4. **Partnership Fees**: Integration fees from partners → Treasury
5. **Retreat Bookings**: 10% commission → Treasury

### Treasury Allocation

The DAO governs treasury allocation across:

| Category | Target % | Purpose |
|----------|----------|---------|
| Development | 30% | Smart contracts, apps, infrastructure |
| Marketing | 20% | Community growth, partnerships |
| Operations | 15% | Team salaries, legal, admin |
| Charitable | 15% | Grants to aligned organizations |
| Strategic Reserve | 10% | Emergency fund, opportunities |
| Liquidity | 10% | DEX pools, market making |

### Value Accrual

**For PSILO Holders**:
- Deflationary supply increases scarcity
- Governance rights over growing treasury
- Staking rewards in LIGHT
- Access to ecosystem services

**For LIGHT Holders**:
- Direct claim on treasury growth
- Staking rewards compound
- Conversion to PSILO at favorable rates
- Premium feature access

**For NFT Holders**:
- Governance power
- Social status and recognition
- Staking boost multipliers
- Potential appreciation in secondary market

## Comparison to Traditional Models

### vs. Traditional Charity

| Aspect | Traditional | Ethereal Offering |
|--------|-------------|-------------------|
| Transparency | Low (annual reports) | High (real-time on-chain) |
| Donor Control | None | Direct governance |
| Value Return | Zero | Tokens + NFTs + rewards |
| Sustainability | Donation-dependent | Self-sustaining treasury |
| Accountability | Limited | Immutable record |

### vs. Other Crypto Projects

| Aspect | Typical DeFi | Ethereal Offering |
|--------|--------------|-------------------|
| Purpose | Profit maximization | Spiritual + economic alignment |
| Governance | Token-weighted | Token + NFT + reputation |
| Value Creation | Trading fees | Offerings + fees + services |
| Community | Transactional | Mission-driven |
| Longevity | Speculative | Sustainable model |

## Risk Mitigation

### Economic Risks

1. **Token Price Volatility**
   - Mitigation: Treasury diversification, stablecoin reserves
   - Deflationary pressure supports price floor

2. **Low Participation**
   - Mitigation: Gamification, rewards, community building
   - Multiple utility functions drive demand

3. **Regulatory Changes**
   - Mitigation: Legal structure, compliance framework
   - Decentralized governance reduces single point of failure

### Technical Risks

1. **Smart Contract Bugs**
   - Mitigation: Multiple audits, bug bounty, gradual rollout
   - Upgradeable contracts with timelock

2. **Oracle Failures**
   - Mitigation: Multiple oracle sources, fallback mechanisms
   - Manual override for emergencies

## Conclusion

The Ethereal Offering tokenomics model creates a **virtuous cycle**:

1. Users burn PSILO for NFTs → Supply decreases
2. Decreased supply → Price pressure increases
3. Higher prices → Treasury value grows
4. Treasury growth → More LIGHT minted
5. LIGHT rewards → More staking participation
6. More participation → Stronger community
7. Stronger community → More offerings
8. **Cycle repeats and amplifies**

This is not a zero-sum game of speculation, but a **positive-sum economy** where individual sacrifice creates collective abundance.

---

*"Not creating value, but awakening worth."*

