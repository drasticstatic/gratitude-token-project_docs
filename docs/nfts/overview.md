---
sidebar_position: 1
---

# NFT Ecosystem Overview

## 🎨 Two NFT Collections

Ethereal Offering features **two distinct NFT collections**, each serving a unique purpose in the ecosystem:

1. **Proof of Burn (POB)** - Soulbound receipts of ceremonial offerings
2. **Mushroom NFTs (SHROOM)** - Tradeable collectibles with genetic traits

## 🔥 Proof of Burn NFTs

### Purpose: Sacred Records

POB NFTs are **soulbound tokens** (non-transferable) that serve as permanent records of your ceremonial token burns. Think of them as digital prayer beads—each one marking a moment of surrender, gratitude, and spiritual offering.

### How They Work

When you burn ETHO tokens in a ceremony:

```solidity
function burn(uint256 amount) external {
  _burn(msg.sender, amount);
  _mintProofOfBurn(msg.sender, amount);
  emit Offering(msg.sender, amount, block.timestamp);
}
```

1. **ETHO is destroyed** - Permanently removed from circulation
2. **POB NFT is minted** - Unique token created for you
3. **Metadata is recorded** - Amount, timestamp, and spiritual message
4. **Soulbound forever** - Cannot be transferred or sold

### Metadata Structure

Each POB NFT contains:

```json
{
  "name": "Proof of Burn #1234",
  "description": "Sacred offering of 100 ETHO on October 12, 2025",
  "image": "ipfs://...",
  "attributes": [
    {
      "trait_type": "Amount Burned",
      "value": "100 ETHO"
    },
    {
      "trait_type": "Timestamp",
      "value": "2025-10-12T14:30:00Z"
    },
    {
      "trait_type": "Ceremony Type",
      "value": "Gratitude Offering"
    },
    {
      "trait_type": "Spiritual Message",
      "value": "In surrender, I find freedom"
    }
  ]
}
```

### Visual Design

POB NFTs feature:
- **Unique artwork** - Generated based on burn amount and timestamp
- **Sacred geometry** - Patterns reflecting spiritual significance
- **Color gradients** - Purple, pink, and gold representing transformation
- **Animated elements** - Subtle movements in the metadata

### Use Cases

1. **Spiritual Record** - Track your offering journey
2. **Community Recognition** - Display your commitment
3. **Governance Weight** - Future: POB holders may get bonus voting power
4. **Access Control** - Unlock special features or content
5. **Personal Reflection** - Meditate on your path

## 🍄 Mushroom NFTs

### Purpose: Collectible Genetics

SHROOM NFTs are **tradeable collectibles** representing unique mushroom strains with genetic traits. They can be bought, sold, bred, and harvested for rewards.

### Genetic Traits

Each mushroom has multiple traits:

#### Species
- **Psilocybe cubensis** - Golden Teacher, B+, Penis Envy
- **Psilocybe azurescens** - Flying Saucer, Blue Angel
- **Amanita muscaria** - Classic red and white
- **Psilocybe cyanescens** - Wavy caps
- **Panaeolus cyanescens** - Blue Meanies

#### Visual Traits
- **Cap Color** - Red, gold, blue, purple, white
- **Stem Color** - White, cream, blue-tinged
- **Veil Type** - Partial, universal, none
- **Spore Print** - Purple-brown, black, white

#### Growth Traits
- **Size** - Tiny, small, medium, large, giant
- **Growth Rate** - Slow, medium, fast, rapid
- **Potency** - Mild, moderate, strong, very strong
- **Yield** - Low, medium, high, abundant

#### Special Traits
- **Bioluminescence** - Glows in the dark (rare)
- **Albino** - Pure white coloration (rare)
- **Mutation** - Unique genetic variation (very rare)
- **Ancient** - Legendary strain (ultra rare)

### Rarity System

```javascript
// Rarity distribution
Common: 60%      // Standard traits
Uncommon: 25%    // One rare trait
Rare: 10%        // Multiple rare traits
Epic: 4%         // Special trait + rare traits
Legendary: 1%    // Ancient or mutated
```

### Breeding System

Combine two mushrooms to create offspring:

```solidity
function breed(uint256 parent1, uint256 parent2) external {
  require(ownerOf(parent1) == msg.sender);
  require(ownerOf(parent2) == msg.sender);
  require(canBreed(parent1, parent2));
  require(msg.value >= breedingFee);
  
  uint256 childId = _mintChild(parent1, parent2);
  // Genetic traits inherited from parents
}
```

**Breeding Mechanics:**
- **Cooldown Period** - 7 days between breeds
- **Breeding Fee** - 10 ETHO per breed
- **Genetic Inheritance** - 50% from each parent + 10% mutation chance
- **Trait Combinations** - Some traits are dominant, others recessive

**Breeding Outcomes:**
- **70% chance** - Traits from both parents
- **20% chance** - New trait mutation
- **10% chance** - Rare trait upgrade

### Growing & Harvesting

Mushroom NFTs can be "planted" to grow and harvest rewards:

```javascript
function plant(uint256 tokenId) external {
  require(ownerOf(tokenId) == msg.sender);
  require(!isPlanted(tokenId));
  
  plantedMushrooms[tokenId] = PlantData({
    plantedAt: block.timestamp,
    harvestableAt: block.timestamp + growthPeriod,
    yieldAmount: calculateYield(tokenId)
  });
}

function harvest(uint256 tokenId) external {
  require(ownerOf(tokenId) == msg.sender);
  require(isHarvestable(tokenId));
  
  uint256 yield = plantedMushrooms[tokenId].yieldAmount;
  _mint(msg.sender, yield); // Mint ETHO or DM tokens
  
  delete plantedMushrooms[tokenId];
}
```

**Growth Mechanics:**
- **Growth Period** - 3-14 days depending on traits
- **Yield Amount** - Based on size, potency, and yield traits
- **Harvest Rewards** - ETHO or DM tokens
- **Re-planting** - Can plant again immediately after harvest

### Marketplace

Buy and sell mushrooms on the integrated marketplace:

```solidity
function listForSale(uint256 tokenId, uint256 price) external {
  require(ownerOf(tokenId) == msg.sender);
  
  listings[tokenId] = Listing({
    seller: msg.sender,
    price: price,
    listedAt: block.timestamp
  });
}

function purchase(uint256 tokenId) external payable {
  Listing memory listing = listings[tokenId];
  require(msg.value >= listing.price);
  
  // Transfer NFT to buyer
  _transfer(listing.seller, msg.sender, tokenId);
  
  // Pay seller (minus 2.5% marketplace fee)
  uint256 fee = listing.price * 25 / 1000;
  payable(listing.seller).transfer(listing.price - fee);
  payable(treasury).transfer(fee);
}
```

**Marketplace Features:**
- **2.5% fee** - Goes to DAO treasury
- **ETHO or PSD** - Accept both tokens
- **Auction system** - Coming soon
- **Offers** - Make offers below listing price

## 🎮 Gamification

### Achievements

Unlock achievements for various activities:

- **First Burn** - Make your first offering
- **Collector** - Own 10 mushrooms
- **Breeder** - Successfully breed 5 mushrooms
- **Farmer** - Harvest 100 times
- **Trader** - Complete 50 marketplace transactions
- **Rare Hunter** - Own an Epic or Legendary mushroom

### Leaderboards

Compete on various leaderboards:

- **Total Burns** - Most ETHO burned
- **Collection Size** - Most mushrooms owned
- **Breeding Success** - Most successful breeds
- **Harvest Yield** - Highest total harvest
- **Trading Volume** - Most marketplace activity

### Quests

Complete quests for bonus rewards:

- **Daily Quest** - Harvest a mushroom (Reward: 10 DM)
- **Weekly Quest** - Breed a new mushroom (Reward: 50 DM)
- **Monthly Quest** - Burn 100 ETHO (Reward: Rare mushroom)

## 🌟 Future Features

### Staking
Lock mushroom NFTs to earn passive rewards:

```javascript
function stakeMushroom(uint256 tokenId) external {
  // Earn MDAO based on rarity and traits
}
```

### Mutations
Rare events that change mushroom traits:

- **Cosmic Ray** - Random trait mutation
- **Genetic Drift** - Gradual trait changes over time
- **Hybridization** - Combine species

### Cross-Breeding
Breed mushrooms across different species:

- **Higher risk** - Lower success rate
- **Higher reward** - Potential for unique combinations
- **New species** - Discover never-before-seen strains

### NFT Utility
Use mushrooms for additional benefits:

- **Ceremony Boost** - Burn with mushroom for bonus POB
- **Governance Weight** - Rare mushrooms = more voting power
- **Access Control** - Legendary mushrooms unlock exclusive features

## 📚 Learn More

- **[Breeding Guide](/docs/nfts/breeding-guide)** - Master the breeding system
- **[Marketplace Tutorial](/docs/nfts/marketplace)** - Buy and sell mushrooms
- **[Trait Reference](/docs/nfts/traits)** - Complete trait catalog
- **[Growing Guide](/docs/nfts/growing)** - Maximize your harvests

---

*"Each mushroom is a teacher. Each offering is a prayer. Together they form the sacred garden of our collective awakening."* 🍄✨

