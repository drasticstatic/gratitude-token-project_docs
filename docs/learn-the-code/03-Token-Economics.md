# Token Economics & Multi-Token Architecture

## 🪙 Overview

Ethereal Offering uses a **multi-token architecture** to separate concerns and provide clear utility for each token type. This prevents conflicts and creates a robust economic ecosystem.

---

## 🎯 Token Purposes Summary

| Token | Symbol | Type | Primary Use | Supply |
|-------|--------|------|-------------|--------|
| **Psanctuary Token** | PSILO | ERC-20 | Crowdsale fundraising | Fixed (10M) |
| **DAO Token** | MDAO | ERC-20 | Governance voting | Fixed (1M) |
| **Ethereal Token** | ETHO | ERC-20 | Ceremonial burns, AMM trading | Deflationary |
| **Psanctuary Dollar** | PSD | ERC-20 | Stablecoin (pegged to USD) | Elastic |
| **Daily Mushroom** | DM | ERC-20 | Daily claims, gas fees | Inflationary |
| **Proof of Burn** | POB | ERC-721 | Soulbound NFT receipts | Unlimited |
| **Mushroom NFT** | SHROOM | ERC-721 | Collectible genetics | Unlimited |

---

## 💰 1. PSILO - Psanctuary Token (Crowdsale)

### Purpose
Initial fundraising token for project development and treasury bootstrapping.

### Mechanics
- **Total Supply:** 10,000,000 PSILO
- **Distribution:**
  - 40% - Public crowdsale
  - 30% - DAO treasury
  - 20% - Team (2-year vesting)
  - 10% - Liquidity pools

### Crowdsale Details
```solidity
// Price: 1 PSILO = 0.0001 ETH
uint256 public constant PRICE = 0.0001 ether;
uint256 public constant MIN_PURCHASE = 100 * 10**18;  // 100 PSILO
uint256 public constant MAX_PURCHASE = 50000 * 10**18;  // 50,000 PSILO
```

### Use Cases
1. **Initial Investment** - Early supporters purchase PSILO
2. **Conversion** - Can be swapped for ETH to fund development
3. **Liquidity** - Paired with ETH in Uniswap pools
4. **Governance** - May be converted to MDAO for voting rights

### Smart Contract
`EtherealOfferingToken.sol` (to be renamed `PSILOToken.sol`)

---

## 🏛️ 2. MDAO - DAO Governance Token

### Purpose
Voting rights and treasury management in the decentralized autonomous organization.

### Mechanics
- **Total Supply:** 1,000,000 MDAO
- **Distribution:**
  - 50% - Earned through participation (staking, proposals)
  - 30% - DAO treasury for incentives
  - 20% - Founding members (1-year vesting)

### Voting Power
```javascript
// 1 MDAO = 1 vote
// Minimum stake for proposal creation: 1000 MDAO
// Quorum requirement: 10% of total supply
```

### Earning MDAO
1. **Staking PSILO** - Lock PSILO, earn MDAO over time
2. **Active Participation** - Create proposals, vote regularly
3. **Contribution Rewards** - Community-approved work
4. **Liquidity Mining** - Provide ETHO/PSD liquidity

### Governance Rights
- Create proposals (requires 1000 MDAO stake)
- Vote on proposals (1 MDAO = 1 vote)
- Treasury allocation decisions
- Smart contract upgrades
- Parameter adjustments (fees, limits, etc.)

### Smart Contract
`MDAOToken.sol` (to be created)

---

## 🔥 3. ETHO - Ethereal Offering Token

### Purpose
Primary token for ceremonial burns and AMM trading pair with PSD.

### Mechanics
- **Initial Supply:** 100,000,000 ETHO
- **Deflationary** - Burns reduce total supply
- **Minting** - New ETHO minted through:
  - Daily mushroom harvests
  - Breeding rewards
  - Staking yields

### Burn Mechanism
```solidity
function burn(uint256 amount) external {
  _burn(msg.sender, amount);
  _mintProofOfBurn(msg.sender, amount);
  emit Offering(msg.sender, amount, block.timestamp);
}
```

### Use Cases
1. **Sacred Offerings** - Burn ETHO in ceremonial ritual
2. **AMM Trading** - Trade ETHO/PSD on decentralized exchange
3. **NFT Purchases** - Buy mushroom NFTs with ETHO
4. **Breeding Fees** - Pay ETHO to cross-breed mushrooms
5. **Staking** - Lock ETHO to earn MDAO

### Price Discovery
- **AMM Pool:** ETHO/PSD constant product formula
- **Burn Pressure:** Deflationary from ceremonial burns
- **Utility Demand:** NFT purchases, breeding, staking

### Smart Contract
`Token.sol` (to be renamed `ETHOToken.sol`)

---

## 💵 4. PSD - Psanctuary Dollar (Stablecoin)

### Purpose
Stable value representation pegged to USD for predictable pricing.

### Mechanics
- **Peg:** 1 PSD = 1 USD
- **Collateral:** Over-collateralized with ETH/USDC
- **Elastic Supply:** Mints/burns to maintain peg

### Stability Mechanism
```javascript
// If PSD > $1.01: Mint new PSD (increase supply)
// If PSD < $0.99: Buy back PSD (decrease supply)
// Arbitrage opportunities keep price stable
```

### Use Cases
1. **AMM Pair** - Trade ETHO/PSD without ETH volatility
2. **Stable Pricing** - NFTs priced in PSD for consistency
3. **Treasury Reserve** - DAO holds PSD for stable value
4. **Donations** - Accept PSD for predictable funding

### Collateralization
- **Minimum Ratio:** 150% (1.5 ETH per 1 PSD)
- **Liquidation:** If ratio drops below 120%
- **Redemption:** Always redeemable for $1 worth of collateral

### Smart Contract
`PSDToken.sol` (to be created)

---

## 🍄 5. DM - Daily Mushroom Token

### Purpose
Daily participation rewards and gas fee payment within ecosystem.

### Mechanics
- **Inflationary** - New DM minted daily
- **Daily Claim:** 10 DM per wallet per day
- **Decay:** Unclaimed DM expires after 7 days

### Claiming Process
```solidity
function claimDaily() external {
  require(block.timestamp >= lastClaim[msg.sender] + 1 days, "Already claimed");
  _mint(msg.sender, 10 * 10**18);
  lastClaim[msg.sender] = block.timestamp;
}
```

### Use Cases
1. **Gas Fees** - Pay DM instead of ETH for certain actions
2. **Breeding Costs** - Subsidize breeding fees with DM
3. **Voting Weight** - Bonus voting power for active claimers
4. **Marketplace** - Trade DM for ETHO or NFTs

### Economic Balance
- **Inflation Rate:** ~3650 DM per wallet per year
- **Burn Sinks:** Breeding, marketplace fees
- **Velocity:** High turnover, low hoarding

---

## 🎨 6. POB - Proof of Burn NFT (ERC-721)

### Purpose
Soulbound NFT receipt for ceremonial token burns.

### Mechanics
- **Non-Transferable** - Cannot be sold or transferred
- **Permanent Record** - Immutable on-chain history
- **Metadata:** Amount burned, timestamp, wallet address

### NFT Structure
```json
{
  "name": "Proof of Burn #42",
  "description": "Sacred offering of 100 ETHO",
  "attributes": [
    {"trait_type": "Amount", "value": "100 ETHO"},
    {"trait_type": "Date", "value": "2025-10-07"},
    {"trait_type": "Wallet", "value": "0x1234...5678"}
  ],
  "image": "ipfs://Qm.../burn-certificate.png"
}
```

### Spiritual Significance
- **Permanent Witness** - Blockchain as eternal record
- **Non-Commodified** - Cannot be sold (soulbound)
- **Identity Marker** - Shows commitment to practice

---

## 🍄 7. SHROOM - Mushroom NFT (ERC-721)

### Purpose
Collectible mushroom NFTs with genetic traits for breeding.

### Genetics System
```javascript
{
  species: "Golden Teacher",
  rarity: "Rare",  // Common, Uncommon, Rare, Epic, Legendary
  traits: {
    capColor: "Golden",
    stemThickness: 8,
    sporeDensity: 7,
    potency: 9,
    growthSpeed: 6
  },
  generation: 1,  // Increases with breeding
  parents: [tokenId1, tokenId2]  // null for Gen 0
}
```

### Breeding Mechanics
1. **Select Parents** - Two mushrooms with desired traits
2. **Pay Fee** - 50 ETHO + 100 DM
3. **Genetic Combination** - Traits inherited with variation
4. **Rarity Chance** - Small chance for rarity upgrade
5. **Mint Offspring** - New NFT with hybrid genetics

### Rarity Distribution
- **Common:** 50% (Gen 0 mints)
- **Uncommon:** 30%
- **Rare:** 15%
- **Epic:** 4%
- **Legendary:** 1%

---

## 🔄 Token Interactions & Flows

### Crowdsale → Treasury
```
User buys PSILO with ETH
→ ETH goes to treasury
→ PSILO distributed to user
→ User can stake PSILO for MDAO
```

### Daily Participation
```
User claims 10 DM daily
→ Uses DM for breeding fees
→ Breeds two mushrooms
→ Pays 50 ETHO + 100 DM
→ Receives new mushroom NFT
```

### Ceremonial Burn
```
User burns 100 ETHO
→ ETHO supply decreases
→ Proof of Burn NFT minted
→ Funds go to DAO treasury
→ DAO votes on fund allocation
```

### AMM Trading
```
User swaps 1000 ETHO for PSD
→ AMM calculates price
→ Liquidity pool rebalances
→ User receives ~$1000 PSD
→ Can use PSD for stable purchases
```

---

## 📊 Economic Sustainability

### Revenue Streams
1. **Crowdsale** - Initial funding
2. **Trading Fees** - 0.3% on AMM swaps
3. **Breeding Fees** - 50 ETHO + 100 DM per breed
4. **Marketplace Fees** - 2.5% on NFT sales

### Treasury Management
- **DAO Controlled** - All funds governed by MDAO holders
- **Diversified** - Mix of ETH, PSILO, ETHO, PSD
- **Transparent** - All transactions on-chain
- **Proposals** - Community decides allocations

### Deflationary Pressure
- **ETHO Burns** - Ceremonial offerings reduce supply
- **DM Sinks** - Breeding and fees remove DM
- **POB Minting** - Permanent record of burns

---

## 🎓 Key Takeaways for Presentation

1. **Separation of Concerns** - Each token has distinct purpose
2. **Economic Loops** - Tokens interact to create sustainable ecosystem
3. **Deflationary + Inflationary** - Balance between scarcity and accessibility
4. **Governance** - Community controls treasury and parameters
5. **Spiritual + Financial** - Tokens serve both sacred and economic functions

---

*Next: [04-Visual-Effects.md](./04-Visual-Effects.md) - Mycelial networks & animations*

