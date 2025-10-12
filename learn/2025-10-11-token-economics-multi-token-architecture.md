---
slug: token-economics-multi-token-architecture
title: Token Economics: The Multi-Token Architecture of Ethereal Offering
authors: [christopher]
tags: [tokenomics, blockchain, governance, technical]
---

# Token Economics: The Multi-Token Architecture of Ethereal Offering

In the world of blockchain, token design is both an art and a science. A well-designed token economy can create sustainable value, align incentives, and empower communities. Today, we're diving deep into the **multi-token architecture** of Ethereal Offering—a system designed to separate concerns, prevent conflicts, and create a robust economic ecosystem.

<!-- truncate -->

## 🎯 Why Multiple Tokens?

Many projects try to make a single token do everything: governance, utility, rewards, and value storage. This creates conflicts and complexity. Instead, Ethereal Offering uses **seven distinct tokens**, each with a clear purpose:

| Token | Symbol | Type | Primary Use | Supply |
|-------|--------|------|-------------|--------|
| **Psanctuary Token** | PSILO | ERC-20 | Crowdsale fundraising | Fixed (10M) |
| **DAO Token** | MDAO | ERC-20 | Governance voting | Fixed (1M) |
| **Ethereal Token** | ETHO | ERC-20 | Ceremonial burns, AMM trading | Deflationary |
| **Psanctuary Dollar** | PSD | ERC-20 | Stablecoin (pegged to USD) | Elastic |
| **Daily Mushroom** | DM | ERC-20 | Daily claims, gas fees | Inflationary |
| **Proof of Burn** | POB | ERC-721 | Soulbound NFT receipts | Unlimited |
| **Mushroom NFT** | SHROOM | ERC-721 | Collectible genetics | Unlimited |

This separation creates clarity, reduces complexity, and allows each token to excel at its specific function.

## 💰 PSILO - The Foundation Token

### Purpose: Initial Fundraising

PSILO is the **crowdsale token** that bootstraps the entire ecosystem. Think of it as the seed that grows into the forest.

**Total Supply:** 10,000,000 PSILO (Fixed)

**Distribution:**
- 40% - Public crowdsale (4M PSILO)
- 30% - DAO treasury (3M PSILO)
- 20% - Team (2M PSILO, 2-year vesting)
- 10% - Liquidity pools (1M PSILO)

### Crowdsale Mechanics

```solidity
// Price: 1 PSILO = 0.0001 ETH
uint256 public constant PRICE = 0.0001 ether;
uint256 public constant MIN_PURCHASE = 100 * 10**18;  // 100 PSILO
uint256 public constant MAX_PURCHASE = 50000 * 10**18;  // 50,000 PSILO
```

**Why These Numbers?**
- **Low Entry Price** - Accessible to all community members
- **Minimum Purchase** - Prevents spam and ensures serious participation
- **Maximum Purchase** - Prevents whale dominance, promotes fair distribution

### Use Cases

1. **Initial Investment** - Early supporters purchase PSILO to fund development
2. **Liquidity Provision** - Paired with ETH in Uniswap pools
3. **Conversion to MDAO** - Stake PSILO to earn governance rights
4. **Treasury Funding** - Sold strategically to fund operations

## 🏛️ MDAO - The Governance Token

### Purpose: Decentralized Decision Making

MDAO represents **voting power** in the Psanctuary DAO. One token, one vote. Simple, transparent, democratic.

**Total Supply:** 1,000,000 MDAO (Fixed)

**Distribution:**
- 50% - Earned through participation (500K MDAO)
- 30% - DAO treasury for incentives (300K MDAO)
- 20% - Founding members (200K MDAO, 1-year vesting)

### Earning MDAO: Proof of Participation

Unlike many governance tokens that are simply bought, MDAO must be **earned** through active participation:

1. **Staking PSILO** - Lock PSILO, earn MDAO over time
2. **Active Voting** - Vote on proposals regularly
3. **Proposal Creation** - Create valuable proposals that pass
4. **Contribution Rewards** - Community-approved work
5. **Liquidity Mining** - Provide ETHO/PSD liquidity

### Governance Rights

```javascript
// Minimum stake for proposal creation: 1000 MDAO
// Quorum requirement: 10% of total supply (100,000 MDAO)
// Voting period: 7 days
// Execution delay: 2 days (timelock)
```

**What Can You Vote On?**
- Treasury allocation decisions
- Smart contract upgrades
- Parameter adjustments (fees, limits, etc.)
- Partnership approvals
- Community initiatives

### The Holacracy Model

Our governance structure is inspired by **holacracy**—a system of distributed authority where power flows through circles rather than hierarchies:

- **Core Circle** - Strategic direction and treasury management
- **Development Circle** - Technical decisions and upgrades
- **Community Circle** - Outreach, education, and support
- **Spiritual Circle** - Ceremonial practices and sacred integration

Each circle has autonomy within its domain, but major decisions require cross-circle consensus.

## 🔥 ETHO - The Ceremonial Token

### Purpose: Sacred Offerings and Trading

ETHO is the **heart** of Ethereal Offering—the token that gets burned in sacred ceremonies and traded on our AMM.

**Initial Supply:** 100,000,000 ETHO  
**Supply Type:** Deflationary (burns reduce supply)

### The Burn Mechanism

```solidity
function burn(uint256 amount) external {
  _burn(msg.sender, amount);
  _mintProofOfBurn(msg.sender, amount);
  emit Offering(msg.sender, amount, block.timestamp);
}
```

When you burn ETHO:
1. **Tokens are destroyed** - Permanently removed from circulation
2. **POB NFT is minted** - Soulbound receipt of your offering
3. **Event is recorded** - Immutable record on the blockchain
4. **Supply decreases** - Creating deflationary pressure

### Use Cases

1. **Sacred Offerings** - Burn ETHO in ceremonial ritual
2. **AMM Trading** - Trade ETHO/PSD on decentralized exchange
3. **NFT Purchases** - Buy mushroom NFTs with ETHO
4. **Breeding Fees** - Pay ETHO to cross-breed mushrooms
5. **Staking** - Lock ETHO to earn MDAO

### Price Discovery Through Utility

ETHO's value comes from:
- **Burn Demand** - People want to make offerings
- **Trading Volume** - Active AMM creates liquidity
- **NFT Utility** - Required for mushroom ecosystem
- **Deflationary Pressure** - Decreasing supply over time

## 💵 PSD - The Stable Foundation

### Purpose: Predictable Pricing

PSD is our **stablecoin**, pegged to USD, providing price stability in a volatile crypto world.

**Peg:** 1 PSD = 1 USD  
**Supply Type:** Elastic (mints/burns to maintain peg)

### Stability Mechanism

```javascript
// If PSD > $1.01: Mint new PSD (increase supply)
// If PSD < $0.99: Buy back PSD (decrease supply)
// Arbitrage opportunities keep price stable
```

**Collateral:**
- Over-collateralized with ETH and USDC
- Minimum 150% collateralization ratio
- Liquidation at 120% to protect peg

### Use Cases

1. **AMM Pair** - Trade ETHO/PSD without ETH volatility
2. **Stable Pricing** - NFTs priced in PSD for consistency
3. **Savings** - Hold value without crypto volatility
4. **Payments** - Pay for services in stable currency

## 🍄 DM - The Daily Reward

### Purpose: Participation Incentives

DM (Daily Mushroom) is an **inflationary token** that rewards daily participation.

**Supply Type:** Inflationary (new tokens minted daily)  
**Distribution:** Automatic daily claims for active users

### Earning DM

- **Daily Login** - Claim DM just for showing up
- **Mushroom Harvests** - Earn DM when mushrooms mature
- **Breeding Success** - Bonus DM for successful breeding
- **Voting Participation** - Extra DM for active governance

### Use Cases

1. **Gas Fees** - Pay transaction fees in DM instead of ETH
2. **Small Purchases** - Buy items in the marketplace
3. **Tipping** - Send DM to community members
4. **Burning** - Convert DM to ETHO through burning

## 🎨 POB & SHROOM - The NFT Layer

### Proof of Burn (POB) - Soulbound Receipts

POB NFTs are **soulbound** (non-transferable) receipts of your ceremonial offerings:

```solidity
function _mintProofOfBurn(address recipient, uint256 amount) internal {
  uint256 tokenId = _nextTokenId++;
  _safeMint(recipient, tokenId);
  _setTokenURI(tokenId, generateMetadata(amount, block.timestamp));
  // Soulbound: cannot be transferred
}
```

**Metadata Includes:**
- Amount burned
- Timestamp of offering
- Unique visual representation
- Spiritual message

### Mushroom NFTs (SHROOM) - Genetic Collectibles

SHROOM NFTs are **tradeable collectibles** with genetic traits:

**Traits:**
- Species (Psilocybe cubensis, Amanita muscaria, etc.)
- Color variations
- Size and potency
- Growth rate
- Breeding compatibility

**Breeding System:**
```javascript
function breed(uint256 parent1, uint256 parent2) external {
  require(ownerOf(parent1) == msg.sender);
  require(ownerOf(parent2) == msg.sender);
  require(canBreed(parent1, parent2));
  
  uint256 childId = _mintChild(parent1, parent2);
  // Genetic traits inherited from parents
}
```

## 🌊 The Economic Flow

Here's how all these tokens work together:

1. **Entry:** Buy PSILO in crowdsale
2. **Governance:** Stake PSILO to earn MDAO
3. **Participation:** Vote with MDAO, earn DM daily
4. **Trading:** Swap ETHO/PSD on AMM
5. **Ceremony:** Burn ETHO, receive POB NFT
6. **Collection:** Buy/breed SHROOM NFTs with ETHO
7. **Stability:** Hold PSD for stable value

## 🎯 Design Principles

Our token economy follows these core principles:

1. **Separation of Concerns** - Each token has one clear purpose
2. **Aligned Incentives** - Rewards flow to active participants
3. **Sustainable Economics** - Balanced inflation/deflation
4. **Community Ownership** - DAO controls treasury and parameters
5. **Spiritual Integration** - Economics serve the sacred mission

## 🚀 Future Enhancements

As the ecosystem evolves, we're exploring:

- **Yield Farming** - Stake LP tokens to earn MDAO
- **NFT Staking** - Lock SHROOM NFTs for passive income
- **Cross-Chain Bridges** - Expand to other blockchains
- **Algorithmic Stability** - Advanced PSD peg mechanisms
- **Reputation System** - Non-transferable reputation tokens

## 🌟 Conclusion

The multi-token architecture of Ethereal Offering isn't just about complexity—it's about **clarity**. Each token serves a specific purpose, creating an ecosystem where:

- **Investors** can support the project (PSILO)
- **Governors** can guide the DAO (MDAO)
- **Participants** can engage daily (DM)
- **Ceremonialists** can make offerings (ETHO)
- **Traders** can find stability (PSD)
- **Collectors** can build value (SHROOM)
- **Seekers** can record their journey (POB)

This is economics in service of the sacred—a financial system designed not for extraction, but for **collective flourishing**.

---

*"In the garden of abundance, every token is a seed. Plant wisely, tend carefully, and watch the forest grow."*

**WAGMI** - We're All Gonna Make It 🍄✨

