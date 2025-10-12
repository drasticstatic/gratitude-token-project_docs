---
sidebar_position: 6
---

# DM Token - Daily Mushroom Rewards

## 🍄 Overview

**DM** (Daily Mushroom) is the **daily rewards token** that incentivizes consistent participation in the Ethereal Offering ecosystem. It's earned through daily check-ins, ceremonies, and community engagement.

| Property | Value |
|----------|-------|
| **Symbol** | DM |
| **Type** | ERC-20 |
| **Initial Supply** | 1,000,000,000 (1B) |
| **Decimals** | 18 |
| **Supply Model** | Inflationary (daily emissions) |
| **Primary Use** | Daily rewards, gas fees, breeding fees |

---

## 🎯 Purpose & Philosophy

### Why Daily Rewards?

**Consistency is key** in both spiritual practice and recovery:

- **12-Step Programs** - "One day at a time"
- **Meditation** - Daily practice builds the habit
- **Recovery** - Show up every day
- **Community** - Regular participation strengthens bonds

**DM rewards this consistency:**
- Check in daily → Earn DM
- Participate regularly → Earn more DM
- Build streaks → Earn bonuses
- Stay engaged → Grow your balance

### The Daily Practice

DM is inspired by:
- **AA Chips** - Physical tokens for attendance
- **Meditation Apps** - Streak tracking and rewards
- **TON Mining** - Daily tap-to-earn mechanics
- **Gratitude Journaling** - Daily reflection practice

**It's not about getting rich—it's about showing up.**

---

## 💰 How to Earn DM

### 1. Daily Check-In

The simplest way to earn DM:

1. Visit the dApp daily
2. Click "Daily Check-In"
3. Receive 10 DM instantly
4. Build your streak for bonuses

**Streak Bonuses:**
- 7 days: +10% DM (11 DM per day)
- 30 days: +25% DM (12.5 DM per day)
- 90 days: +50% DM (15 DM per day)
- 365 days: +100% DM (20 DM per day)

**Example:**
- Day 1-6: 10 DM/day = 60 DM
- Day 7-29: 11 DM/day = 253 DM
- Day 30-89: 12.5 DM/day = 750 DM
- Day 90-364: 15 DM/day = 4,125 DM
- Day 365+: 20 DM/day

**After 1 year: 5,188 DM earned!**

### 2. Ceremonial Participation

Earn DM for making offerings:

- **Small Offering** (< 100 ETHO): 50 DM
- **Medium Offering** (100-1000 ETHO): 200 DM
- **Large Offering** (> 1000 ETHO): 1,000 DM
- **Mega Offering** (> 10,000 ETHO): 5,000 DM

**Bonus:** First offering of the week = 2x DM

### 3. Community Engagement

Earn DM for contributing:

- **Discord Activity** - 5 DM per meaningful message
- **Forum Posts** - 25 DM per quality post
- **Helping Others** - 50 DM per helpful answer
- **Event Attendance** - 100 DM per community call
- **Content Sharing** - 10 DM per social share

**Moderation:** Spam is detected and penalized

### 4. NFT Activities

Earn DM through the NFT ecosystem:

- **Breed Mushrooms** - 25 DM per successful breed
- **Harvest Mushrooms** - 10 DM per harvest
- **Trade NFTs** - 5 DM per trade
- **Complete Collections** - 500 DM per complete set

### 5. Liquidity Provision

Earn DM for providing liquidity:

- **DM/PSD Pool** - 20% APY in DM
- **ETHO/PSD Pool** - 5% APY in DM
- **PSILO/ETH Pool** - 10% APY in DM

**Example:**
- Provide $1,000 to DM/PSD pool
- Earn: $200/year in DM (20% APY)
- Plus swap fees (0.06% per trade)

### 6. Referrals

Earn DM for bringing friends:

- **Referral Signs Up** - 100 DM
- **Referral Makes First Offering** - 500 DM
- **Referral Reaches 30-Day Streak** - 1,000 DM

**Unlimited referrals!**

---

## 🔄 Use Cases

### 1. Pay for Gas Fees

Use DM to pay for transaction fees:

```solidity
// Pay gas with DM instead of ETH
function makeOfferingWithDM(uint256 ethoAmount, bytes32 intention) external {
    // Calculate gas cost in DM
    uint256 dmGasCost = estimateGasInDM();
    
    // Burn DM for gas
    dm.burnFrom(msg.sender, dmGasCost);
    
    // Execute offering (no ETH needed)
    altar.makeOffering(ethoAmount, intention);
}
```

**Benefits:**
- No need to hold ETH
- Use earned DM for fees
- Simplifies onboarding
- Reduces friction

**Conversion Rate:**
- 1 DM ≈ $0.001 (0.1 cent)
- Typical gas: 0.001 ETH ($2)
- Cost in DM: 2,000 DM

### 2. Breeding Fees

Pay DM to breed Mushroom NFTs:

| Rarity Combo | DM Fee | Cooldown |
|--------------|--------|----------|
| Common + Common | 100 DM | 1 day |
| Common + Uncommon | 250 DM | 2 days |
| Uncommon + Uncommon | 500 DM | 3 days |
| Uncommon + Rare | 1,000 DM | 5 days |
| Rare + Rare | 2,500 DM | 7 days |
| Epic + Epic | 10,000 DM | 14 days |

**Why DM?**
- Prevents spam breeding
- Rewards daily participants
- Creates DM demand
- Sustainable economy

### 3. Swap for Other Tokens

Trade DM on the AMM:

- **DM → PSD** - Convert to stablecoin
- **DM → ETHO** - Get ceremonial tokens
- **DM → MDAO** - Acquire governance power

**Typical Prices:**
- 1 DM ≈ $0.001
- 1,000 DM ≈ $1 PSD
- 10,000 DM ≈ 20 ETHO (at $0.05/ETHO)

### 4. Unlock Features

Spend DM to access premium features:

- **Custom Profile** - 1,000 DM
- **Animated Avatar** - 2,500 DM
- **Special Discord Role** - 5,000 DM
- **Priority Support** - 10,000 DM
- **Beta Access** - 25,000 DM

### 5. Tip Community Members

Send DM as thanks:

- **Helpful Answer** - Tip 10-100 DM
- **Great Content** - Tip 100-1,000 DM
- **Amazing Contribution** - Tip 1,000+ DM

**How to tip:**
1. Click "Tip" button on post
2. Enter DM amount
3. Add optional message
4. Confirm transaction
5. Recipient receives DM + notification

---

## 📊 Emission Schedule

### Daily Emissions

DM is emitted daily to reward participants:

| Year | Daily Emission | Annual Emission | Total Supply |
|------|---------------|----------------|--------------|
| 1 | 1,000,000 DM | 365M DM | 1.365B |
| 2 | 900,000 DM | 328.5M DM | 1.694B |
| 3 | 810,000 DM | 295.65M DM | 1.989B |
| 4 | 729,000 DM | 266M DM | 2.255B |
| 5 | 656,100 DM | 239.5M DM | 2.494B |

**Emission decreases 10% per year** (deflationary pressure)

### Distribution

Daily emissions are distributed:

- **40%** - Daily check-ins
- **25%** - Ceremonial participation
- **20%** - Liquidity mining
- **10%** - Community engagement
- **5%** - Special events

**Example Day 1:**
- Total emission: 1,000,000 DM
- Check-ins: 400,000 DM (divided among all who checked in)
- Ceremonies: 250,000 DM (divided by offering size)
- Liquidity: 200,000 DM (proportional to LP share)
- Engagement: 100,000 DM (moderator discretion)
- Events: 50,000 DM (special occasions)

---

## 🔥 Burn Mechanisms

### What Reduces DM Supply?

DM is burned (permanently destroyed) when:

1. **Gas Fees** - DM used for transactions
2. **Breeding Fees** - DM paid to breed NFTs
3. **Feature Unlocks** - DM spent on premium features
4. **Voluntary Burns** - Users can burn DM for POB NFTs

**Burn Rate:**
- Year 1: ~100M DM burned
- Year 2: ~150M DM burned
- Year 3: ~200M DM burned

**Net Supply:**
- Emissions - Burns = Net Inflation
- Year 1: 365M - 100M = +265M (26.5% inflation)
- Year 2: 328M - 150M = +178M (10.5% inflation)
- Year 3: 295M - 200M = +95M (4.8% inflation)

**Eventually reaches equilibrium** (emissions = burns)

---

## 🎮 Gamification

### Achievements

Unlock achievements for DM bonuses:

| Achievement | Requirement | Reward |
|-------------|------------|--------|
| **First Steps** | 7-day streak | 100 DM |
| **Dedicated** | 30-day streak | 500 DM |
| **Committed** | 90-day streak | 2,000 DM |
| **Devoted** | 365-day streak | 10,000 DM |
| **Eternal Flame** | 730-day streak | 50,000 DM |

### Leaderboards

Compete for top spots:

- **Daily Check-In Streak** - Longest current streak
- **Total DM Earned** - All-time earnings
- **Community Contributor** - Most engagement DM
- **Generous Tipper** - Most DM tipped to others

**Top 10 get special recognition + bonus DM!**

### Quests

Complete quests for DM rewards:

**Weekly Quests:**
- Check in 7 days in a row: 100 DM
- Make 3 offerings: 200 DM
- Help 5 community members: 150 DM
- Breed 2 mushrooms: 100 DM

**Monthly Quests:**
- 30-day check-in streak: 1,000 DM
- Make 10 offerings: 2,000 DM
- Refer 3 friends: 1,500 DM
- Complete all weekly quests: 5,000 DM

---

## 📱 TON Integration

### Telegram Mini-App

Earn DM through Telegram:

1. **Open Mini-App** - In Telegram messenger
2. **Daily Mining** - Tap to earn DM
3. **Meditation Timer** - Earn DM for mindfulness
4. **Gratitude Journal** - Reflect and earn
5. **Service Logging** - Track contributions

**Benefits:**
- No separate app needed
- Familiar interface
- Social integration
- Cross-platform (mobile, desktop, web)

### Mining Mechanics

Inspired by successful TON projects:

- **Tap-to-Earn** - Simple daily engagement
- **Energy System** - Regenerates over time
- **Upgrades** - Increase earning rate
- **Boosts** - Temporary multipliers

**Example:**
- Base rate: 10 DM per tap
- Energy: 100 (regenerates 1/minute)
- Upgrade to Level 2: 15 DM per tap
- Use boost: 2x for 10 minutes

---

## 💡 Economic Design

### Inflationary but Sustainable

DM is intentionally inflationary:

**Why inflation?**
- Rewards ongoing participation
- Prevents hoarding
- Encourages spending/using
- Funds ecosystem growth

**Why sustainable?**
- Decreasing emissions (10% per year)
- Increasing burns (more usage)
- Approaches equilibrium
- Long-term stability

### Value Proposition

DM value comes from:

1. **Utility** - Pay fees, breed NFTs, unlock features
2. **Demand** - Needed for ecosystem participation
3. **Scarcity** - Decreasing emissions over time
4. **Network Effects** - More users = more value

**Not an investment token** - DM is for using, not holding

---

## 🔗 Resources

- **[Daily Check-In](https://etherealoffering.org/checkin)** - Earn DM daily
- **[Swap DM](https://etherealoffering.org/swap)** - Trade for other tokens
- **[Breed NFTs](https://etherealoffering.org/breed)** - Use DM for breeding
- **[Leaderboard](https://etherealoffering.org/leaderboard)** - See top earners
- **[Telegram Mini-App](https://t.me/etherealoffering_bot)** - Earn on Telegram
- **[DM Stats](https://etherealoffering.org/dm-stats)** - View metrics

---

*"Show up. Every day. One day at a time. The DM you earn is proof of your presence, your commitment, your journey."* 🍄✨

