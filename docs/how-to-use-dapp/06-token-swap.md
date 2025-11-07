---
id: 06-token-swap
title: Token Swap (AMM/DEX)
sidebar_label: Token Swap
---
# Token Swap (AMM/DEX)

*Decentralized exchange powered by constant product formula*

---

## Overview

The Ethereal Offering AMM (Automated Market Maker) allows you to swap between ETHO, PSD, and other tokens without a centralized exchange. You can:

- **Swap tokens** instantly at algorithmic prices
- **Provide liquidity** to earn trading fees
- **View pool analytics** and your position
- **Track transaction history** on-chain
- **Earn passive income** from liquidity provision

**Core Principle:**
> *Reciprocity — The exchange flows both ways, creating mutual benefit*

---

## What is an AMM?

An **Automated Market Maker (AMM)** is a decentralized exchange protocol that uses a mathematical formula to price assets and facilitate trades without order books or centralized intermediaries.

### How It Works

**Constant Product Formula:** `x * y = k`

- **x** = Amount of Token A in the pool
- **y** = Amount of Token B in the pool
- **k** = Constant product (stays the same after trades)

**Example:**
- Pool has 1,000 ETHO and 10 ETH
- k = 1,000 × 10 = 10,000
- If you buy 100 ETHO, you must add enough ETH to keep k = 10,000
- Price adjusts automatically based on supply/demand

### Benefits

✅ **No intermediaries** — Trade directly from your wallet  
✅ **Always available** — 24/7 liquidity  
✅ **Transparent pricing** — Algorithm-based, no manipulation  
✅ **Earn fees** — Liquidity providers earn 0.3% of all trades  
✅ **Permissionless** — Anyone can trade or provide liquidity

---

## How to Swap Tokens

### Step 1: Navigate to Token Swap

1. Go to the **Token Swap** page in the dApp
2. Ensure your wallet is connected
3. Check your token balances (displayed in interface)

### Step 2: Select Tokens

**Swap Interface:**

- **From:** Select token you want to swap (e.g., ETH)
- **To:** Select token you want to receive (e.g., ETHO)
- **Amount:** Enter how much you want to swap

**Available pairs:**
- ETH ↔ ETHO
- ETH ↔ PSD
- ETHO ↔ PSD
- (Additional pairs may be added via DAO governance)

### Step 3: Review Swap Details

**Before confirming, review:**

- **Exchange Rate:** How much you'll receive per token
- **Price Impact:** How much your trade affects the pool price
- **Minimum Received:** Accounting for slippage
- **Liquidity Provider Fee:** 0.3% of swap amount
- **Gas Fee:** ETH cost for transaction

**Price impact warnings:**
- **< 1%** — ✅ Good trade
- **1-3%** — ⚠️ Moderate impact
- **3-5%** — ⚠️ High impact, consider smaller amount
- **> 5%** — 🚫 Very high impact, split into multiple trades

### Step 4: Set Slippage Tolerance

**Slippage** = Difference between expected and actual price due to market movement

**Settings:**
- **0.1%** — Very tight, may fail in volatile markets
- **0.5%** — Recommended for stable markets
- **1.0%** — Recommended for normal conditions
- **3.0%** — High tolerance, use for large trades or volatile markets
- **Custom** — Set your own percentage

**Note:** Higher slippage = more likely to succeed, but you might get a worse price.

### Step 5: Confirm Swap

1. Click **"Swap"** button
2. Review transaction in wallet popup
3. Confirm transaction
4. Wait for confirmation (usually 15-60 seconds)
5. Tokens appear in your wallet

**Transaction details:**
- **From:** Your wallet address
- **To:** AMM contract address
- **Tokens sent:** Amount you're swapping
- **Tokens received:** Amount you'll get (minus fees)
- **Gas fee:** ETH cost

---

## How to Provide Liquidity

### Why Provide Liquidity?

**Earn passive income** by depositing tokens into liquidity pools:

- **Trading fees:** Earn 0.3% of every swap that uses your liquidity
- **Proportional rewards:** Your share = your % of total pool
- **Compounding:** Fees automatically added to your position
- **Community support:** Help others trade smoothly

**Example:**
- You provide $1,000 of liquidity (50% ETHO, 50% ETH)
- Pool has $100,000 total liquidity
- Your share = 1%
- Pool earns $10,000 in trading fees per month
- You earn $100 per month (1% of $10,000)

### Step 1: Navigate to Liquidity

1. Go to **Token Swap** page
2. Click **"Liquidity"** tab
3. View available pools

### Step 2: Select Pool

**Available pools:**
- **ETHO/ETH** — Primary pool
- **PSD/ETH** — Secondary pool
- **ETHO/PSD** — Direct swap pool
- (Additional pools may be added)

**Pool info displayed:**
- **Total Liquidity:** Total value locked in pool
- **Volume (24h):** Trading volume last 24 hours
- **Fees (24h):** Fees earned last 24 hours
- **APR:** Estimated annual percentage return
- **Your Share:** Your % of the pool (if you're already providing)

### Step 3: Add Liquidity

1. Click **"Add Liquidity"** on desired pool
2. Enter amount of **first token** (e.g., 100 ETHO)
3. **Second token amount** auto-calculates to maintain pool ratio
4. Review the amounts and ratio
5. Click **"Approve [Token]"** (first time only)
6. Wait for approval transaction to confirm
7. Click **"Add Liquidity"**
8. Confirm transaction in wallet
9. Receive **LP tokens** (liquidity provider tokens) representing your share

**Important:**
- You must provide **equal value** of both tokens
- Ratio is determined by current pool price
- You'll receive LP tokens representing your share
- LP tokens can be redeemed anytime for your share of the pool

### Step 4: Track Your Position

**Your Liquidity Position:**
- **Pool:** Which pool you're in
- **Your Share:** % of total pool
- **Tokens Deposited:** Amount of each token
- **Current Value:** USD value of your position
- **Fees Earned:** Total fees accumulated
- **APR:** Your current annual return rate

**View in:**
- Token Swap page → Liquidity tab → Your Positions
- Wallet → LP tokens (ERC-20)

### Step 5: Remove Liquidity (When Ready)

1. Navigate to **Your Positions**
2. Click **"Remove"** on the position
3. Choose **percentage to remove** (25% / 50% / 75% / 100%)
4. Review tokens you'll receive
5. Click **"Remove Liquidity"**
6. Confirm transaction
7. LP tokens are burned
8. You receive your share of both tokens + accumulated fees

**Note:** You can remove liquidity anytime. No lock-up period.

---

## Understanding Impermanent Loss

### What is Impermanent Loss?

**Impermanent loss** occurs when the price ratio of your deposited tokens changes compared to when you deposited them.

**Example:**
- You deposit 100 ETHO + 1 ETH when 1 ETH = 100 ETHO
- ETHO price doubles (now 1 ETH = 50 ETHO)
- Pool rebalances automatically
- You now have ~70.7 ETHO + ~1.41 ETH
- If you had just held, you'd have 100 ETHO + 1 ETH (worth more)
- The difference is "impermanent loss"

### Why "Impermanent"?

- **Loss is only realized** when you withdraw
- **If prices return** to original ratio, loss disappears
- **Trading fees** often offset impermanent loss
- **Long-term** providers usually profit despite IL

### How to Minimize

1. **Provide to stable pairs** — Less price volatility = less IL
2. **Long-term provision** — Fees accumulate over time
3. **High-volume pools** — More fees to offset IL
4. **Monitor your position** — Remove if IL becomes significant
5. **Understand the risk** — Only provide what you can afford

**Rule of thumb:** If trading fees > impermanent loss, you're profitable.

---

## Pool Analytics

### Global Pool Stats

**Visible on Token Swap page:**

- **Total Value Locked (TVL):** Total $ value in all pools
- **24h Volume:** Total trading volume last 24 hours
- **24h Fees:** Total fees earned by LPs last 24 hours
- **Total Transactions:** All-time swap count

### Individual Pool Stats

**For each pool:**

- **Liquidity:** Total tokens in pool (e.g., 10,000 ETHO + 100 ETH)
- **Volume (24h):** Trading volume
- **Fees (24h):** Fees earned
- **APR:** Estimated annual return for LPs
- **Price:** Current exchange rate
- **Your Share:** Your % of pool (if providing)

### Your Transaction History

**Track all your swaps and liquidity actions:**

- **Date/Time:** When transaction occurred
- **Type:** Swap, Add Liquidity, Remove Liquidity
- **Tokens:** What you traded or deposited
- **Amount:** How much
- **Transaction Hash:** Link to block explorer
- **Status:** Confirmed, Pending, Failed

---

## Advanced Features

### Limit Orders (Coming Soon)

**Place orders at specific prices:**
- Set your desired exchange rate
- Order executes automatically when price is reached
- No need to monitor constantly

### Liquidity Mining (Potential)

**Earn additional rewards for providing liquidity:**
- Bonus ETHO or PSD tokens
- Distributed based on your share and duration
- Incentivize liquidity for new pools
- Governed by DAO proposals

### Multi-Hop Swaps (If Needed)

**Swap through multiple pools for best price:**
- Example: ETH → ETHO → PSD (if direct ETH/PSD pool has low liquidity)
- Automatically routes through best path
- May have higher fees (multiple swaps)

---

## Best Practices

### For Swapping

1. **Check price impact** before large trades
2. **Split large trades** into smaller chunks if impact > 3%
3. **Set appropriate slippage** (0.5-1% for normal conditions)
4. **Compare prices** with other DEXs if available
5. **Verify token addresses** to avoid scams

### For Liquidity Provision

1. **Start small** to learn the mechanics
2. **Understand impermanent loss** before providing
3. **Choose high-volume pools** for better fee earnings
4. **Monitor your position** regularly
5. **Reinvest fees** by adding more liquidity (compound)
6. **Diversify** across multiple pools if possible
7. **Long-term mindset** — Fees accumulate over time

### Security

1. **Never share** your private keys or seed phrase
2. **Verify contract addresses** before approving
3. **Use hardware wallet** for large amounts
4. **Revoke approvals** for contracts you no longer use
5. **Be cautious** of phishing sites (bookmark the real dApp)

---

## Troubleshooting

### "Insufficient liquidity for this trade"

**Solution:**
- Pool doesn't have enough tokens for your swap size
- Try a smaller amount
- Provide liquidity to the pool yourself
- Wait for others to add liquidity

### "Price impact too high"

**Solution:**
- Your trade is too large relative to pool size
- Split into multiple smaller trades
- Wait for pool to grow
- Increase slippage tolerance (with caution)

### "Transaction failed"

**Possible causes:**
- Slippage tolerance too low (price moved during transaction)
- Insufficient ETH for gas
- Token approval not confirmed
- Pool parameters changed

**Solution:**
1. Increase slippage tolerance
2. Ensure enough ETH for gas
3. Confirm approval transaction first
4. Try again

### "I can't remove my liquidity"

**Solution:**
1. Ensure you have LP tokens in your wallet
2. Check if tokens are staked elsewhere
3. Verify you're on the correct network
4. Contact support if issue persists

---

## Fee Structure

### Trading Fees

- **0.3%** of every swap goes to liquidity providers
- **0.0%** protocol fee (may be added via DAO governance)

**Example:**
- You swap 100 ETHO for ETH
- Fee = 0.3 ETHO
- You receive ETH equivalent to 99.7 ETHO
- 0.3 ETHO distributed to all LPs proportionally

### Gas Fees

- **Swap:** ~50,000-100,000 gas (varies by network congestion)
- **Add Liquidity:** ~100,000-150,000 gas
- **Remove Liquidity:** ~80,000-120,000 gas
- **Approve Token:** ~45,000-60,000 gas (one-time per token)

**Tip:** Trade during low-traffic times for lower gas fees.

---

## Next Steps

Now that you understand the AMM/DEX:

1. **Try a small swap** to get comfortable
2. **Consider providing liquidity** if you hold both tokens
3. **Monitor pool analytics** to find best opportunities
4. **Track your positions** and fees earned
5. **Participate in DAO** to propose new pools or features

**Ready to participate in the crowdsale?**
→ Continue to [Sacred Offering (Crowdsale)](./07-sacred-offering.md)

**Want to see the project roadmap?**
→ Jump to [Roadmap & Community](./08-roadmap-community.md)

---

## Navigation

- **Previous:** [Oracle of Fruit](./05-oracle.md)
- **Next:** [Sacred Offering (Crowdsale)](./07-sacred-offering.md)
- **Back to:** [Expanded Table of Contents](../00-EXPANDED-TOC.md)

