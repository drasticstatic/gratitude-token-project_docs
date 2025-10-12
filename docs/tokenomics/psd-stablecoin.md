---
sidebar_position: 5
---

# PSD - Psanctuary Dollar Stablecoin

## 💵 Overview

**PSD** (Psanctuary Dollar) is the **stablecoin** of the Ethereal Offering ecosystem, designed to maintain a 1:1 peg with the US Dollar. It provides price stability for trading, ceremonies, and treasury management.

| Property | Value |
|----------|-------|
| **Symbol** | PSD |
| **Type** | ERC-20 |
| **Supply** | Elastic (mints/burns to maintain peg) |
| **Decimals** | 18 |
| **Peg** | 1 PSD = $1 USD |
| **Primary Use** | Stable trading pair, treasury reserve |

---

## 🎯 Why a Stablecoin?

### The Volatility Problem

Cryptocurrencies are notoriously volatile:
- ETH can swing 10-20% in a day
- PSILO price depends on market sentiment
- ETHO is deflationary and unpredictable
- MDAO value fluctuates with governance activity

**This creates problems:**
- Hard to price offerings consistently
- Difficult to budget treasury allocations
- Risky for users who want stability
- Confusing for newcomers

### The PSD Solution

PSD provides **price stability**:
- Always worth $1 USD
- Predictable value for planning
- Safe haven during volatility
- Easy mental accounting

**Use cases:**
- **Trading Pair** - ETHO/PSD pool (stable pricing)
- **Treasury Reserve** - Store value without volatility
- **Offering Pricing** - "Burn $100 worth of ETHO"
- **Payments** - Pay for services in stable currency

---

## 🏦 Peg Mechanism

### How PSD Maintains $1 Peg

PSD uses a **hybrid collateralization model**:

#### 1. Over-Collateralization (Primary)

Users deposit collateral to mint PSD:

```solidity
// Deposit ETH to mint PSD
function mintPSD(uint256 ethAmount) external payable {
    require(msg.value == ethAmount, "ETH mismatch");
    
    // Require 150% collateralization
    uint256 psdAmount = (ethAmount * ethPrice) / 1.5;
    
    // Mint PSD to user
    psd.mint(msg.sender, psdAmount);
    
    // Lock ETH as collateral
    collateral[msg.sender] += ethAmount;
}
```

**Example:**
- Deposit 1 ETH ($2,000)
- Receive 1,333 PSD ($1,333)
- Collateralization ratio: 150%

**Why 150%?**
- Protects against ETH price drops
- Maintains peg during volatility
- Provides liquidation buffer

#### 2. Algorithmic Stabilization (Secondary)

If PSD deviates from $1, the protocol adjusts:

**If PSD > $1.01 (too expensive):**
- Reduce collateral requirements
- Incentivize minting (create more PSD)
- Increase supply to lower price

**If PSD < $0.99 (too cheap):**
- Increase collateral requirements
- Incentivize burning (reduce PSD supply)
- Decrease supply to raise price

#### 3. Treasury Backing (Tertiary)

The DAO treasury holds reserves:
- 20% of treasury in USDC/DAI
- Can buy PSD if price drops
- Can sell PSD if price rises
- Acts as buyer/seller of last resort

### Liquidation Mechanism

If collateral value drops too low:

```solidity
// Liquidate undercollateralized position
function liquidate(address user) external {
    uint256 collateralValue = getCollateralValue(user);
    uint256 debtValue = psdDebt[user];
    
    // If collateral < 120% of debt, liquidate
    if (collateralValue < debtValue * 1.2) {
        // Liquidator pays off debt
        psd.burnFrom(msg.sender, debtValue);
        
        // Liquidator receives collateral + 5% bonus
        uint256 liquidationBonus = collateralValue * 0.05;
        payable(msg.sender).transfer(collateralValue + liquidationBonus);
        
        // Clear user's position
        delete collateral[user];
        delete psdDebt[user];
    }
}
```

**Liquidation Example:**
- User deposited 1 ETH ($2,000), minted 1,333 PSD
- ETH drops to $1,500
- Collateral ratio: 112.5% (below 120% threshold)
- Liquidator pays 1,333 PSD, receives 1 ETH + 5% bonus
- User loses collateral but debt is cleared

---

## 💰 How to Get PSD

### 1. Mint with Collateral

Deposit ETH or other approved assets:

1. Go to **"Mint PSD"** page
2. Choose collateral type (ETH, WBTC, etc.)
3. Enter amount to deposit
4. See how much PSD you'll receive
5. Confirm transaction
6. Receive PSD in your wallet

**Fees:**
- Minting fee: 0.5%
- Redemption fee: 0.5%
- Fees go to treasury

### 2. Swap on AMM

Trade other tokens for PSD:

- **ETHO/PSD Pool** - Primary pair
- **DM/PSD Pool** - Daily rewards to stable
- **MDAO/PSD Pool** - Governance to stable

**Swap fees:** 0.3% (80% to treasury, 20% to LPs)

### 3. Earn as Rewards

Receive PSD for participation:

- **Liquidity Provision** - Earn PSD for providing liquidity
- **Staking Rewards** - Some staking pools pay in PSD
- **DAO Grants** - Treasury allocations in PSD
- **Bounties** - Bug bounties paid in PSD

### 4. Purchase Directly

Buy PSD with fiat:

- **Credit Card** - Via Moonpay/Transak integration
- **Bank Transfer** - Via Circle/Coinbase
- **P2P** - Buy from other users

---

## 🔄 Use Cases

### 1. Stable Trading Pair

The ETHO/PSD pool is the primary trading pair:

**Benefits:**
- Price ETHO in dollars (easier to understand)
- Less impermanent loss than ETHO/ETH
- Stable liquidity for large trades
- Predictable swap outcomes

**Example:**
- ETHO price: $0.05
- Want to buy $100 worth
- Need: 2,000 ETHO
- Swap 100 PSD → 2,000 ETHO
- Simple!

### 2. Treasury Reserve

The DAO holds PSD for stability:

- **Budget Allocations** - Pay developers in PSD
- **Grant Programs** - Fund projects in PSD
- **Emergency Fund** - Stable reserve for crises
- **Operational Expenses** - Servers, tools, etc.

**Why not hold USD directly?**
- PSD is on-chain (programmable)
- No bank account needed
- Instant transfers
- Transparent on blockchain

### 3. Offering Pricing

Price ceremonial burns in dollars:

- "Burn $10 worth of ETHO"
- "Burn $100 worth of ETHO"
- "Burn $1,000 worth of ETHO"

**How it works:**
1. User wants to burn $100 worth
2. Check ETHO/PSD price (e.g., $0.05)
3. Calculate: $100 / $0.05 = 2,000 ETHO
4. User burns 2,000 ETHO
5. Consistent dollar value regardless of ETHO price

### 4. Payments & Salaries

Pay contributors in stable currency:

- **Developers** - $5,000/month in PSD
- **Moderators** - $500/month in PSD
- **Content Creators** - $100/article in PSD
- **Service Providers** - Invoices in PSD

**Benefits:**
- Predictable income
- No volatility risk
- Easy accounting
- Professional standard

---

## 📊 Collateral Types

### Accepted Collateral

| Asset | Collateral Ratio | Liquidation Threshold |
|-------|-----------------|---------------------|
| **ETH** | 150% | 120% |
| **WBTC** | 150% | 120% |
| **USDC** | 105% | 102% |
| **DAI** | 105% | 102% |
| **PSILO** | 200% | 150% |

**Why different ratios?**
- More volatile assets need higher collateral
- Stablecoins need less (already stable)
- PSILO is project token (higher risk)

### Multi-Collateral Positions

You can use multiple assets:

**Example:**
- Deposit 0.5 ETH ($1,000)
- Deposit 0.01 WBTC ($500)
- Total collateral: $1,500
- Can mint: $1,000 PSD (150% ratio)

**Benefits:**
- Diversify collateral risk
- Use what you have
- Optimize capital efficiency

---

## 🛡️ Risk Management

### Risks

⚠️ **Important Risks:**

1. **Collateral Volatility** - ETH price can drop, triggering liquidation
2. **Smart Contract Risk** - Bugs could cause loss of funds
3. **Peg Risk** - PSD could lose $1 peg temporarily
4. **Liquidation Risk** - Lose collateral if ratio drops too low
5. **Oracle Risk** - Price feed manipulation

### Mitigation Strategies

✅ **How we mitigate:**

1. **Over-Collateralization** - 150% buffer protects against drops
2. **Audited Contracts** - Professional security audits
3. **Multiple Peg Mechanisms** - Collateral + algorithmic + treasury
4. **Liquidation Warnings** - Email/Discord alerts before liquidation
5. **Chainlink Oracles** - Decentralized, manipulation-resistant price feeds

### Best Practices

✅ **User best practices:**

- **Monitor Collateral Ratio** - Check daily
- **Maintain Buffer** - Keep ratio above 200%
- **Set Alerts** - Get notified if ratio drops
- **Diversify Collateral** - Don't use only one asset
- **Understand Liquidation** - Know the risks

---

## 📈 PSD Economics

### Supply Dynamics

PSD supply is **elastic** (changes based on demand):

```
Total Supply = Sum of all minted PSD
Circulating Supply = Total Supply - Burned PSD
```

**Supply increases when:**
- Users mint more PSD (deposit collateral)
- Demand for PSD is high
- PSD price > $1 (arbitrage opportunity)

**Supply decreases when:**
- Users burn PSD (redeem collateral)
- Demand for PSD is low
- PSD price < $1 (arbitrage opportunity)

### Arbitrage Mechanism

Keeps PSD at $1 through profit incentive:

**If PSD = $1.02:**
1. Arbitrageur deposits $100 ETH
2. Mints 100 PSD (costs $100)
3. Sells 100 PSD for $102 (profit $2)
4. Repeat until PSD = $1

**If PSD = $0.98:**
1. Arbitrageur buys 100 PSD for $98
2. Redeems for $100 worth of ETH
3. Profit $2
4. Repeat until PSD = $1

**This keeps PSD stable automatically!**

---

## 🔗 Integration

### For Developers

Integrate PSD into your dApp:

```javascript
// Get PSD contract
const psd = new ethers.Contract(PSD_ADDRESS, PSD_ABI, signer);

// Check balance
const balance = await psd.balanceOf(userAddress);

// Transfer PSD
await psd.transfer(recipientAddress, amount);

// Approve spending
await psd.approve(spenderAddress, amount);

// Mint PSD with ETH
await psdMinter.mintWithETH({ value: ethAmount });

// Redeem PSD for ETH
await psdMinter.redeemForETH(psdAmount);
```

### For Merchants

Accept PSD as payment:

1. **Generate Payment Address** - Unique address per invoice
2. **Display QR Code** - Customer scans and pays
3. **Monitor Blockchain** - Watch for payment confirmation
4. **Deliver Product** - Once payment confirmed

**Benefits:**
- No chargebacks
- Instant settlement
- Low fees (0.5%)
- Global reach

---

## 📊 Metrics & Analytics

### Key Metrics

**Supply Metrics:**
- Total Supply: [Check Contract]
- Circulating Supply: [Total - Burned]
- Collateral Value: [Sum of all collateral]
- Collateralization Ratio: [Collateral / Supply]

**Peg Metrics:**
- Current Price: [Check AMM]
- 24h High/Low: [Price range]
- Deviation from $1: [Price - $1]
- Peg Stability: [% of time within $0.99-$1.01]

**Activity Metrics:**
- Daily Mints: [New PSD created]
- Daily Burns: [PSD redeemed]
- Net Supply Change: [Mints - Burns]
- Liquidations: [Number and value]

---

## 🔗 Resources

- **[Mint PSD](https://etherealoffering.org/mint-psd)** - Create PSD with collateral
- **[Redeem PSD](https://etherealoffering.org/redeem-psd)** - Get collateral back
- **[Swap PSD](https://etherealoffering.org/swap)** - Trade for other tokens
- **[PSD Dashboard](https://etherealoffering.org/psd-stats)** - View metrics
- **[Collateral Manager](https://etherealoffering.org/collateral)** - Manage positions
- **[Etherscan](https://etherscan.io/)** - Verify contract

---

*"Stability is not stagnation—it's the foundation for growth. PSD provides the solid ground on which our ecosystem flourishes."* 💵✨

