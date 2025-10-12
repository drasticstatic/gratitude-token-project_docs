---
sidebar_position: 4
---

# Trading Tokens on the AMM

Learn how to swap tokens using the **Automated Market Maker (AMM)** - a decentralized exchange built into Ethereal Offering.

## 🔄 What is an AMM?

An **Automated Market Maker** is a decentralized exchange that uses **liquidity pools** instead of traditional order books.

**Traditional Exchange:**
- Buyers and sellers place orders
- Orders matched by exchange
- Centralized (exchange controls funds)

**AMM:**
- Liquidity pools hold token pairs
- Smart contract calculates prices
- Decentralized (you control funds)

**Benefits:**
- No KYC (know your customer)
- No account needed
- Trade directly from wallet
- 24/7 availability
- Transparent pricing

---

## 💱 Available Trading Pairs

### Primary Pairs

| Pair | Purpose | Liquidity |
|------|---------|-----------|
| **ETHO/PSD** | Ceremonial token ↔ Stablecoin | High |
| **PSILO/ETH** | Crowdsale token ↔ Ethereum | High |
| **MDAO/PSD** | Governance ↔ Stablecoin | Medium |
| **DM/PSD** | Daily rewards ↔ Stablecoin | Medium |
| **PSILO/ETHO** | Crowdsale ↔ Ceremonial | Low |

### Why These Pairs?

**ETHO/PSD:**
- Price ETHO in dollars
- Stable trading
- Main liquidity pool

**PSILO/ETH:**
- Access Ethereum liquidity
- Standard DeFi pair
- Easy on/off ramp

**MDAO/PSD:**
- Sell governance tokens
- Stable pricing
- Exit liquidity

**DM/PSD:**
- Convert daily rewards
- Cash out earnings
- Stable value

---

## 📋 Prerequisites

Before trading, ensure you have:

- ✅ **Wallet Connected** - MetaMask or similar
- ✅ **Tokens to Swap** - Source token in wallet
- ✅ **ETH for Gas** - ~0.001-0.01 ETH for transaction fee
- ✅ **Understanding of Slippage** - Price movement tolerance

---

## 🔄 Step-by-Step Trading Guide

### Step 1: Access the Swap Interface

1. Visit [etherealoffering.org](https://etherealoffering.org)
2. Click **"Swap"** in navigation
3. Ensure wallet is connected
4. You'll see the swap interface

### Step 2: Select Tokens

**Choose what to swap:**

1. **"From" Token** - What you're selling
2. **"To" Token** - What you're buying

**Example:**
- From: ETHO
- To: PSD

**Click token selector** to choose from available tokens.

### Step 3: Enter Amount

**Two ways to enter:**

**Option A: Enter "From" amount**
- Type amount of token you're selling
- "To" amount auto-calculates

**Option B: Enter "To" amount**
- Type amount of token you want
- "From" amount auto-calculates

**Example:**
- From: 1,000 ETHO
- To: 50 PSD (auto-calculated)
- Rate: 1 ETHO = 0.05 PSD

### Step 4: Review Swap Details

**Check the details:**

**Price Information:**
- **Exchange Rate** - How many tokens per token
- **Price Impact** - How much your trade moves the price
- **Minimum Received** - Worst case after slippage
- **Liquidity Provider Fee** - 0.3% fee

**Example:**
```
Swap 1,000 ETHO for PSD

Exchange Rate: 1 ETHO = 0.05 PSD
You Pay: 1,000 ETHO
You Receive: ~50 PSD
Price Impact: 0.5%
Minimum Received: 49.5 PSD (1% slippage)
LP Fee: 3 ETHO (0.3%)
```

### Step 5: Adjust Slippage (Optional)

**What is slippage?**
- Price can change between clicking "Swap" and transaction confirming
- Slippage tolerance = how much price change you'll accept

**Default:** 1% (recommended)

**Adjust if needed:**
- **Low liquidity:** Increase to 2-5%
- **High liquidity:** Can use 0.5%
- **Urgent trade:** Increase slippage
- **Patient trade:** Decrease slippage

**Click settings icon** (⚙️) to adjust.

### Step 6: Approve Token (First Time Only)

**First time swapping a token:**

1. Click **"Approve ETHO"** (or whatever token)
2. MetaMask pops up
3. Review approval (allows AMM to spend your tokens)
4. Click **"Confirm"**
5. Wait for confirmation (~15 seconds)

**Note:** Only needed once per token. Future swaps won't require approval.

### Step 7: Execute Swap

**Now you're ready:**

1. Click **"Swap"**
2. MetaMask pops up with transaction details
3. Review:
   - Tokens being swapped
   - Amounts
   - Gas fee
   - Total cost
4. Click **"Confirm"**
5. Wait for transaction to complete (~15-30 seconds)

### Step 8: Confirm Success

**After transaction confirms:**

✅ **Success Message** - "Swap successful!"  
✅ **Tokens Received** - Check your wallet balance  
✅ **Transaction Hash** - View on Etherscan  

**Verify:**
- Old token balance decreased
- New token balance increased
- Transaction shows on Etherscan

---

## 💡 Trading Strategies

### Strategy 1: Dollar-Cost Averaging (DCA)

**Goal:** Reduce volatility risk

**Method:**
- Buy fixed dollar amount regularly
- Weekly or monthly
- Regardless of price

**Example:**
- Buy $100 worth of PSILO every week
- Week 1: PSILO = $0.10, buy 1,000 PSILO
- Week 2: PSILO = $0.05, buy 2,000 PSILO
- Week 3: PSILO = $0.15, buy 666 PSILO
- **Average price: $0.09**

**Benefits:**
- Reduces timing risk
- Emotional discipline
- Long-term accumulation

### Strategy 2: Limit Orders (Manual)

**Goal:** Buy/sell at specific price

**Method:**
- Set target price
- Check regularly
- Execute when price hits target

**Example:**
- Want to buy ETHO at $0.04
- Current price: $0.05
- Wait for price to drop
- Execute swap when $0.04

**Note:** No automatic limit orders (yet). Must check manually.

### Strategy 3: Arbitrage

**Goal:** Profit from price differences

**Method:**
- Find price difference between exchanges
- Buy on cheaper exchange
- Sell on expensive exchange
- Profit the difference

**Example:**
- ETHO on our AMM: $0.05
- ETHO on Uniswap: $0.06
- Buy 1,000 ETHO on our AMM ($50)
- Sell 1,000 ETHO on Uniswap ($60)
- **Profit: $10 (minus gas fees)**

**Risks:**
- Gas fees can eat profits
- Price can change quickly
- Requires speed and capital

---

## ⚠️ Important Considerations

### Price Impact

**What is it?**
- How much your trade moves the price
- Larger trades = higher impact
- Smaller pools = higher impact

**Example:**
- Pool: 10,000 ETHO / 500 PSD
- You buy 1,000 ETHO (10% of pool)
- Price impact: ~5%
- You pay more than current price

**How to reduce:**
- Trade smaller amounts
- Split into multiple trades
- Wait for more liquidity
- Use larger pools

### Slippage

**What is it?**
- Price change between signing and confirming
- Network congestion can delay confirmation
- Price can move during delay

**Example:**
- You click "Swap" at 1 ETHO = 0.05 PSD
- Transaction takes 30 seconds to confirm
- Price moves to 1 ETHO = 0.049 PSD
- You receive less than expected

**Protection:**
- Set slippage tolerance (1% default)
- If price moves more than tolerance, transaction reverts
- You don't lose funds, just pay gas fee

### Impermanent Loss (For LPs)

**What is it?**
- Loss experienced by liquidity providers
- When token prices diverge
- "Impermanent" because it can reverse

**Example:**
- You provide 1,000 ETHO + 50 PSD
- ETHO price doubles
- Pool rebalances (you have less ETHO, more PSD)
- You would have more if you just held

**Note:** This affects liquidity providers, not traders.

---

## 📊 Advanced Features

### Multi-Hop Swaps

**What is it?**
- Swap through multiple pools
- Get better rates
- Automatic routing

**Example:**
- Want: DM → PSILO
- No direct DM/PSILO pool
- Route: DM → PSD → PSILO
- AMM finds best path automatically

**Benefits:**
- Access any token pair
- Better prices
- More flexibility

### Gas Optimization

**Save on gas fees:**

**1. Trade During Low-Traffic Times**
- Weekends (lower fees)
- Late night UTC (lower fees)
- Avoid Monday mornings (high fees)

**2. Batch Transactions**
- Approve + Swap in one session
- Multiple swaps together
- Reduces total gas

**3. Use Gas Trackers**
- [ETH Gas Station](https://ethgasstation.info/)
- [Gas Now](https://www.gasnow.org/)
- Wait for low gas prices

**4. Adjust Gas Settings**
- Use "Standard" not "Fast"
- Be patient (save 30-50%)
- Only use "Fast" if urgent

---

## 🔗 Resources

- **[Swap Interface](https://etherealoffering.org/swap)** - Trade tokens
- **[Liquidity Pools](https://etherealoffering.org/pools)** - View pool stats
- **[Analytics](https://etherealoffering.org/analytics)** - Price charts
- **[Etherscan](https://etherscan.io/)** - Verify transactions
- **[Gas Tracker](https://ethgasstation.info/)** - Monitor gas prices

---

## 🙏 Tips for Success

**✅ Best Practices:**
- Start with small amounts
- Understand price impact
- Set reasonable slippage
- Check gas fees before trading
- Verify transaction on Etherscan
- Keep records for taxes

**❌ Avoid:**
- Trading more than you can afford to lose
- Ignoring price impact
- Setting slippage too high (front-running risk)
- Trading during high gas fees
- Emotional trading (FOMO, panic)
- Not understanding what you're trading

---

**Next:** [Providing Liquidity →](./05-providing-liquidity)

*"Trade with intention, not emotion. Every swap is a choice, every choice is sacred."* 🍄✨

