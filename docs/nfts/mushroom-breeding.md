---
sidebar_position: 2
---

# Mushroom NFT Breeding Guide

## 🍄 Overview

The **Mushroom NFT (SHROOM)** breeding system allows you to combine two mushrooms to create offspring with unique genetic traits. It's a gamified system that rewards strategy, patience, and a bit of luck.

---

## 🧬 Genetic System

### Traits

Each Mushroom NFT has **6 genetic traits**:

| Trait | Description | Rarity Impact |
|-------|-------------|---------------|
| **Potency** | Strength of effects (1-100) | Higher = Rarer |
| **Color** | Visual appearance (12 colors) | Some colors rarer |
| **Size** | Physical dimensions (Tiny to Massive) | Extremes are rare |
| **Pattern** | Cap pattern (Solid, Spotted, Striped, etc.) | Complex patterns rare |
| **Glow** | Bioluminescence (None to Radiant) | Glowing is rare |
| **Aura** | Spiritual energy (Calm to Transcendent) | Higher auras rare |

### Rarity Tiers

Based on trait combination:

| Rarity | Probability | Trait Requirements |
|--------|------------|-------------------|
| **Common** | 50% | Average traits |
| **Uncommon** | 30% | 1-2 rare traits |
| **Rare** | 15% | 3-4 rare traits |
| **Epic** | 4% | 5 rare traits |
| **Legendary** | 1% | All traits maxed |

**Example Legendary:**
- Potency: 100
- Color: Cosmic Purple
- Size: Massive
- Pattern: Fractal
- Glow: Radiant
- Aura: Transcendent

---

## 🔬 Breeding Mechanics

### Basic Breeding

Combine two mushrooms to create offspring:

```solidity
function breed(uint256 parent1Id, uint256 parent2Id) external {
    // Check ownership
    require(ownerOf(parent1Id) == msg.sender, "Not owner");
    require(ownerOf(parent2Id) == msg.sender, "Not owner");
    
    // Check cooldown
    require(canBreed(parent1Id), "Parent 1 on cooldown");
    require(canBreed(parent2Id), "Parent 2 on cooldown");
    
    // Pay breeding fee in DM
    uint256 fee = calculateBreedingFee(parent1Id, parent2Id);
    dm.burnFrom(msg.sender, fee);
    
    // Generate offspring genetics
    Genetics memory offspring = generateOffspring(parent1Id, parent2Id);
    
    // Mint new mushroom
    uint256 newId = _mint(msg.sender, offspring);
    
    // Set cooldowns
    setBreedingCooldown(parent1Id);
    setBreedingCooldown(parent2Id);
    
    emit Bred(parent1Id, parent2Id, newId);
}
```

### Genetic Inheritance

Offspring inherit traits from parents:

**Dominant/Recessive System:**
- Each trait has dominant and recessive genes
- 50% chance to inherit from each parent
- 10% chance of mutation (random trait)

**Example:**
- Parent 1: Potency 80 (dominant), Color Blue (recessive)
- Parent 2: Potency 60 (recessive), Color Red (dominant)
- Offspring possibilities:
  - 45% Potency 80, Blue
  - 45% Potency 60, Red
  - 5% Potency 90 (mutation up)
  - 5% Potency 50 (mutation down)

### Breeding Fees

Fees depend on parent rarity:

| Parent Combo | DM Fee | Cooldown |
|--------------|--------|----------|
| Common + Common | 100 DM | 1 day |
| Common + Uncommon | 250 DM | 2 days |
| Uncommon + Uncommon | 500 DM | 3 days |
| Uncommon + Rare | 1,000 DM | 5 days |
| Rare + Rare | 2,500 DM | 7 days |
| Rare + Epic | 5,000 DM | 10 days |
| Epic + Epic | 10,000 DM | 14 days |
| Epic + Legendary | 25,000 DM | 21 days |
| Legendary + Legendary | 100,000 DM | 30 days |

**Why fees?**
- Prevents spam breeding
- Creates DM demand
- Rewards strategic breeding
- Maintains rarity value

### Cooldown System

After breeding, mushrooms need rest:

- **Cooldown Period** - Can't breed again until cooldown expires
- **Varies by Rarity** - Rarer mushrooms need longer rest
- **Both Parents** - Both mushrooms go on cooldown
- **Visible Timer** - See exact time remaining

**Cooldown Reduction:**
- Pay 2x DM fee to halve cooldown
- Special events may reduce cooldowns
- Legendary mushrooms can reduce cooldown by 25%

---

## 🎯 Breeding Strategies

### Strategy 1: Mass Production

**Goal:** Create many mushrooms quickly

**Method:**
- Breed Common + Common (cheap, fast)
- Sell offspring on marketplace
- Reinvest profits into more breeding

**Pros:**
- Low cost (100 DM per breed)
- Short cooldown (1 day)
- Steady income

**Cons:**
- Low rarity offspring
- Lower sale prices
- Competitive market

### Strategy 2: Rarity Hunting

**Goal:** Create Legendary mushrooms

**Method:**
- Breed highest rarity parents
- Save best offspring
- Gradually improve genetics

**Pros:**
- Potential for huge payoff
- Legendary mushrooms very valuable
- Satisfying progression

**Cons:**
- High cost (up to 100K DM)
- Long cooldowns (30 days)
- Low success rate (1%)

### Strategy 3: Trait Specialization

**Goal:** Maximize specific traits

**Method:**
- Focus on one trait (e.g., Potency)
- Breed mushrooms with high Potency
- Create "pure line" of max Potency

**Pros:**
- Easier than full Legendary
- Collectors value specialized traits
- Can sell to breeders

**Cons:**
- Other traits may be poor
- Limited market
- Requires patience

### Strategy 4: Color Collection

**Goal:** Collect all 12 colors

**Method:**
- Breed for missing colors
- Trade with other collectors
- Complete the rainbow

**Pros:**
- Clear goal
- Achievement reward (500 DM)
- Aesthetic satisfaction

**Cons:**
- Some colors very rare
- May need to buy on marketplace
- Expensive to complete

---

## 📊 Breeding Probabilities

### Rarity Outcomes

When breeding, offspring rarity depends on parents:

**Common + Common:**
- 70% Common
- 25% Uncommon
- 5% Rare
- 0% Epic/Legendary

**Uncommon + Uncommon:**
- 40% Common
- 40% Uncommon
- 15% Rare
- 5% Epic
- 0% Legendary

**Rare + Rare:**
- 20% Common
- 30% Uncommon
- 30% Rare
- 15% Epic
- 5% Legendary

**Epic + Epic:**
- 10% Common
- 20% Uncommon
- 30% Rare
- 30% Epic
- 10% Legendary

**Legendary + Legendary:**
- 0% Common
- 10% Uncommon
- 20% Rare
- 40% Epic
- 30% Legendary

**Key Insight:** Higher rarity parents = better odds, but never guaranteed!

### Mutation Rates

Mutations can improve or worsen traits:

- **Positive Mutation** - Trait increases (5% chance)
- **Negative Mutation** - Trait decreases (5% chance)
- **No Mutation** - Inherits from parent (90% chance)

**Mutation Magnitude:**
- Small: ±5 points (70% of mutations)
- Medium: ±10 points (25% of mutations)
- Large: ±20 points (5% of mutations)

**Example:**
- Parent Potency: 70
- Positive mutation (+10)
- Offspring Potency: 80

---

## 🌱 Growing & Harvesting

### Growth Stages

Newly bred mushrooms go through stages:

| Stage | Duration | Description |
|-------|----------|-------------|
| **Spore** | 0-24 hours | Just minted, not visible |
| **Sprout** | 1-3 days | Small, traits emerging |
| **Growing** | 3-7 days | Developing, traits visible |
| **Mature** | 7+ days | Fully grown, can breed |

**Accelerate Growth:**
- Pay 500 DM to skip to next stage
- Special fertilizer items (rare drops)
- Community events (growth boost weekends)

### Harvesting

Mature mushrooms can be "harvested":

```solidity
function harvest(uint256 mushroomId) external {
    require(ownerOf(mushroomId) == msg.sender, "Not owner");
    require(isMatured(mushroomId), "Not mature");
    
    // Burn the mushroom NFT
    _burn(mushroomId);
    
    // Reward based on rarity
    uint256 dmReward = calculateHarvestReward(mushroomId);
    dm.mint(msg.sender, dmReward);
    
    // Small chance of special item
    if (random() < 0.05) {
        items.mint(msg.sender, FERTILIZER_ITEM);
    }
    
    emit Harvested(mushroomId, dmReward);
}
```

**Harvest Rewards:**
- Common: 50 DM
- Uncommon: 150 DM
- Rare: 500 DM
- Epic: 2,000 DM
- Legendary: 10,000 DM

**Why harvest?**
- Get DM immediately
- Free up breeding slots
- Gamble on special items
- Reduce supply (increases rarity value)

---

## 💰 Marketplace

### Buying Mushrooms

Purchase mushrooms from other users:

1. Browse marketplace
2. Filter by rarity, traits, price
3. Click "Buy Now" or "Make Offer"
4. Confirm transaction
5. Mushroom transferred to your wallet

**Marketplace Fee:** 2.5% (goes to treasury)

### Selling Mushrooms

List your mushrooms for sale:

1. Go to "My Mushrooms"
2. Click "Sell" on mushroom
3. Set price in ETH or PSD
4. Choose "Fixed Price" or "Auction"
5. List on marketplace

**Pricing Tips:**
- Check recent sales of similar rarity
- Rare traits command premium
- Legendary mushrooms: $100-$1,000+
- Common mushrooms: $1-$10

### Trading

Direct trades with other users:

1. Initiate trade offer
2. Select your mushroom(s)
3. Request their mushroom(s)
4. Both parties approve
5. Atomic swap (both or neither)

**No fees on direct trades!**

---

## 🏆 Achievements & Rewards

### Breeding Achievements

| Achievement | Requirement | Reward |
|-------------|------------|--------|
| **First Breed** | Breed 1 mushroom | 100 DM |
| **Prolific Breeder** | Breed 10 mushrooms | 500 DM |
| **Master Breeder** | Breed 100 mushrooms | 5,000 DM |
| **Legendary Breeder** | Breed 1,000 mushrooms | 50,000 DM |
| **First Rare** | Breed a Rare | 250 DM |
| **First Epic** | Breed an Epic | 1,000 DM |
| **First Legendary** | Breed a Legendary | 10,000 DM |
| **Rainbow Collector** | Own all 12 colors | 2,500 DM |
| **Perfect Specimen** | Breed 100/100 Potency | 5,000 DM |

### Leaderboards

Compete for top spots:

- **Most Mushrooms Bred** - All-time total
- **Most Legendaries** - Legendary count
- **Highest Potency** - Max Potency bred
- **Most Valuable Collection** - Total portfolio value

**Top 10 get special Discord roles!**

---

## 🔬 Advanced Genetics

### Genetic Calculator

Use the breeding calculator to predict outcomes:

1. Select Parent 1
2. Select Parent 2
3. See probability distribution
4. View possible trait ranges
5. Calculate expected value

**Example Output:**
- 40% chance of Uncommon
- 15% chance of Rare
- Expected Potency: 65-75
- Expected value: $15

### Punnett Squares

For genetics nerds:

```
Parent 1: Pp (Potency 80 dominant, 60 recessive)
Parent 2: Pp (Potency 70 dominant, 50 recessive)

Punnett Square:
     P    p
P   PP   Pp
p   Pp   pp

Outcomes:
- 25% PP (80 + 70) / 2 = 75
- 50% Pp (80 + 50) / 2 = 65 or (70 + 60) / 2 = 65
- 25% pp (60 + 50) / 2 = 55
```

**Simplified:** Offspring Potency likely 55-75

---

## 📚 Resources

- **[Breed Mushrooms](https://etherealoffering.org/breed)** - Start breeding
- **[Marketplace](https://etherealoffering.org/marketplace)** - Buy/sell mushrooms
- **[Breeding Calculator](https://etherealoffering.org/calculator)** - Predict outcomes
- **[My Collection](https://etherealoffering.org/collection)** - View your mushrooms
- **[Leaderboard](https://etherealoffering.org/leaderboard)** - Top breeders
- **[Genetics Guide](https://docs.etherealoffering.org/genetics)** - Deep dive

---

*"Each mushroom is a unique expression of the mycelial network. Breed with intention, patience, and love."* 🍄✨

