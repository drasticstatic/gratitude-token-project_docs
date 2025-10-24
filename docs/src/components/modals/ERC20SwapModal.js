import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Repeat, Shield, Zap, TrendingUp, Coins, Lock } from "lucide-react";

export default function ERC20SwapModal({ isOpen, onClose }) {
  // Cycle Emoji SVG
  const CycleEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#a78bfa" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">🔄</text>
      <circle cx="12" cy="12" r="11" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Understanding Tokens in Swaps"
      subtitle="How Our AMM Powers Token Exchange"
      titleIcon={CycleEmojiIcon}
      titleColor="#7c3aed"
      borderColor="rgba(124, 58, 237, 0.5)"
      shadowColor="rgba(124, 58, 237, 0.4)"
      scrollbarColor="#7c3aed"
    >
      {/* Understanding ERC20 Tokens in Swaps - From Dropdown */}
      <ModalCard
        icon={Coins}
        title="Understanding ERC20 Tokens in Swaps"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '12px', fontSize: '0.95rem' }}>
          All tokens in this swap are <strong style={{ color: '#ec4899' }}>ERC20 fungible tokens</strong>,
          meaning each token is identical and interchangeable. This standard enables:
        </p>
        <ul style={{ color: '#d1d5db', lineHeight: '1.8', paddingLeft: '20px', fontSize: '0.95rem' }}>
          <li><strong style={{ color: '#fbbf24' }}>ETHO (Ethereal Token)</strong> - The primary governance and utility token</li>
          <li><strong style={{ color: '#fbbf24' }}>PSD (Psanctuary Dollar)</strong> - Stablecoin pegged to USD for stable trading</li>
          <li><strong style={{ color: '#fbbf24' }}>Daily Mushrooms</strong> - Earned from farming, used as gas currency for cross-breeding</li>
        </ul>
        <p style={{ color: '#d1d5db', lineHeight: '1.6', marginTop: '12px', fontSize: '0.95rem' }}>
          ERC20 tokens can be freely swapped, transferred, and used in liquidity pools.
          Unlike NFTs (ERC721), these tokens are divisible and perfect for trading!
        </p>
      </ModalCard>

      {/* What is PSD - From Dropdown */}
      <ModalCard
        icon={Coins}
        title="💰 PSD (Psanctuary Dollar) - Your Stable Trading Pair"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <div style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#ec4899' }}>What is PSD?</strong><br />
            PSD is a stablecoin representation pegged to USD value, designed for stable trading within the Ethereal Offering ecosystem.
          </p>

          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#ec4899' }}>How to acquire PSD:</strong><br />
            • Swap ETHO tokens for PSD in this AMM<br />
            • Receive PSD when providing liquidity to the pool<br />
            • Purchase directly through the crowdsale (coming soon)
          </p>

          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#ec4899' }}>Use cases:</strong><br />
            • Trade against ETHO for stable value exchange<br />
            • Provide liquidity to earn LP tokens and trading fees<br />
            • Store value without volatility during market fluctuations
          </p>

          <p style={{ marginBottom: 0 }}>
            <strong style={{ color: '#ec4899' }}>Peg maintenance:</strong><br />
            The AMM's constant product formula (x × y = k) automatically balances the PSD/ETHO ratio, maintaining stable pricing through arbitrage opportunities.
          </p>
        </div>
      </ModalCard>

      {/* What is ERC20 */}
      <ModalCard
        icon={Coins}
        title="What are ERC20 Tokens?"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <p style={{ marginBottom: '12px' }}>
          <strong>ERC20</strong> is the technical standard for fungible tokens on the Ethereum blockchain. It defines a common set of rules that all Ethereum tokens must follow.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🔑 Key Characteristics</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Fungible</strong> - Each token is identical and interchangeable</li>
          <li><strong>Divisible</strong> - Can be divided into smaller units (up to 18 decimals)</li>
          <li><strong>Transferable</strong> - Can be sent between wallets</li>
          <li><strong>Standardized</strong> - Works with all ERC20-compatible wallets and dApps</li>
        </ul>

        <div style={{ background: 'rgba(96,165,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(96,165,250,0.3)' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '8px' }}>📋 Our ERC20 Tokens</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li><strong>DAPP</strong> - Our primary utility token</li>
            <li><strong>USD</strong> - Stablecoin for price stability</li>
            <li><strong>ETHO</strong> - Ethereal Offering token (crowdsale)</li>
            <li><strong>PSD</strong> - Psilocybin Sacred Dollar</li>
          </ul>
        </div>
      </ModalCard>

      {/* How AMM Works */}
      <ModalCard
        icon={Repeat}
        title="How Our AMM Works"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🔄 Automated Market Maker</h4>
        <p style={{ marginBottom: '12px' }}>
          Our <strong>AMM (Automated Market Maker)</strong> allows you to swap tokens without needing a traditional order book or centralized exchange.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>💧 Liquidity Pools</h4>
        <p style={{ marginBottom: '12px' }}>
          Instead of matching buyers and sellers, our AMM uses <strong>liquidity pools</strong>—reserves of two tokens that enable instant swaps.
        </p>

        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Liquidity Providers</strong> deposit equal values of both tokens</li>
          <li><strong>Pool Reserves</strong> maintain a constant product (x * y = k)</li>
          <li><strong>Swappers</strong> trade against the pool, changing the ratio</li>
          <li><strong>Price Adjusts</strong> automatically based on supply and demand</li>
        </ol>

        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.3)' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '8px' }}>✨ Benefits</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Instant swaps 24/7</li>
            <li>No order book needed</li>
            <li>Permissionless trading</li>
            <li>Transparent pricing</li>
          </ul>
        </div>
      </ModalCard>

      {/* Token Approval */}
      <ModalCard
        icon={Lock}
        title="Token Approval Process"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🔐 Why Approval is Needed</h4>
        <p style={{ marginBottom: '12px' }}>
          Before swapping, you must <strong>approve</strong> the AMM contract to spend your tokens. This is a security feature of the ERC20 standard.
        </p>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>📝 Two-Step Process</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Approval Transaction</strong> - Grant permission to AMM contract
            <ul style={{ marginLeft: '20px', marginTop: '6px' }}>
              <li>MetaMask will ask you to approve spending limit</li>
              <li>You can set exact amount or unlimited approval</li>
              <li>This costs gas but only needs to be done once per token</li>
            </ul>
          </li>
          <li style={{ marginTop: '8px' }}><strong>Swap Transaction</strong> - Execute the actual token exchange
            <ul style={{ marginLeft: '20px', marginTop: '6px' }}>
              <li>AMM uses your approved allowance to swap tokens</li>
              <li>You receive the output token instantly</li>
              <li>This also costs gas</li>
            </ul>
          </li>
        </ol>

        <div style={{ background: 'rgba(251,191,36,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(251,191,36,0.3)' }}>
          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '8px' }}>⚠️ Important</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            Approval is a <strong>one-time setup</strong> per token. Once approved, you can swap multiple times without re-approving (unless you revoke permission).
          </p>
        </div>
      </ModalCard>

      {/* Pricing & Slippage */}
      <ModalCard
        icon={TrendingUp}
        title="Pricing & Slippage"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>💱 How Prices are Determined</h4>
        <p style={{ marginBottom: '12px' }}>
          The AMM uses a <strong>constant product formula</strong> (x * y = k) to calculate swap prices:
        </p>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)', marginBottom: '16px' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '8px' }}>
            <strong>x</strong> = Amount of Token A in pool<br />
            <strong>y</strong> = Amount of Token B in pool<br />
            <strong>k</strong> = Constant product (x * y)
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#a78bfa' }}>
            When you swap, you add to one side and remove from the other, maintaining k.
          </p>
        </div>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>📉 Understanding Slippage</h4>
        <p style={{ marginBottom: '12px' }}>
          <strong>Slippage</strong> is the difference between expected price and execution price. Larger swaps cause more slippage.
        </p>

        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Low Slippage</strong> - Small swaps relative to pool size</li>
          <li><strong>High Slippage</strong> - Large swaps that significantly change the ratio</li>
          <li><strong>Slippage Tolerance</strong> - Maximum acceptable price change (default 0.5%)</li>
        </ul>
      </ModalCard>

      {/* Liquidity Provision */}
      <ModalCard
        icon={Zap}
        title="Providing Liquidity"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>💧 Become a Liquidity Provider</h4>
        <p style={{ marginBottom: '12px' }}>
          You can <strong>earn fees</strong> by providing liquidity to the pool. When you deposit tokens, you receive <strong>LP (Liquidity Provider) tokens</strong> representing your share.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>💰 How It Works</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Deposit</strong> equal values of both tokens (e.g., 100 DAPP + 100 USD)</li>
          <li><strong>Receive LP tokens</strong> representing your pool share</li>
          <li><strong>Earn fees</strong> from every swap (proportional to your share)</li>
          <li><strong>Withdraw</strong> anytime by burning LP tokens to reclaim your share</li>
        </ol>

        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.3)' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '8px' }}>📊 Rewards</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Earn 0.3% fee on all swaps</li>
            <li>Fees automatically compound in the pool</li>
            <li>Withdraw principal + accumulated fees anytime</li>
            <li>Support ecosystem liquidity</li>
          </ul>
        </div>

        <p style={{ marginTop: '12px', color: '#9ca3af', fontSize: '0.9rem', fontStyle: 'italic' }}>
          Note: Liquidity provision carries risk of impermanent loss. Research before providing liquidity.
        </p>
      </ModalCard>

      {/* Security */}
      <ModalCard
        icon={Shield}
        title="Security & Best Practices"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>🔒 Smart Contract Security</h4>
        <p style={{ marginBottom: '12px' }}>
          Our AMM contracts are <strong>audited and verified</strong> to ensure your funds are safe during swaps.
        </p>

        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>✅ Best Practices</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Check Prices</strong> - Always review the exchange rate before confirming</li>
          <li><strong>Set Slippage</strong> - Adjust tolerance based on market conditions</li>
          <li><strong>Start Small</strong> - Test with small amounts first</li>
          <li><strong>Verify Tokens</strong> - Ensure you're swapping the correct token addresses</li>
          <li><strong>Monitor Gas</strong> - Check gas prices to avoid overpaying</li>
        </ul>

        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.3)' }}>
          <p style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '8px' }}>⚠️ Safety Tips</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Never share your private keys or seed phrase</li>
            <li>Double-check transaction details in MetaMask</li>
            <li>Be aware of front-running on large swaps</li>
            <li>Use hardware wallets for large amounts</li>
          </ul>
        </div>
      </ModalCard>

      {/* Gas Fees */}
      <ModalCard
        icon={Zap}
        title="Understanding Gas Fees"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>⛽ What are Gas Fees?</h4>
        <p style={{ marginBottom: '12px' }}>
          <strong>Gas fees</strong> are transaction costs paid to Ethereum miners/validators for processing your swap on the blockchain.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>💸 Fee Breakdown</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Approval</strong> - One-time gas fee to approve token spending</li>
          <li><strong>Swap</strong> - Gas fee for each swap transaction</li>
          <li><strong>Network Congestion</strong> - Fees increase during high demand</li>
        </ul>

        <div style={{ background: 'rgba(236,72,153,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(236,72,153,0.3)' }}>
          <p style={{ color: '#ec4899', fontWeight: 600, marginBottom: '8px' }}>💡 Save on Gas</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Swap during off-peak hours (weekends, late night)</li>
            <li>Batch multiple swaps together when possible</li>
            <li>Use unlimited approval to avoid re-approving</li>
            <li>Monitor gas prices with tools like Etherscan Gas Tracker</li>
          </ul>
        </div>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Repeat}
        title="Start Swapping"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <p style={{ marginBottom: '12px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          Now that you understand how ERC20 tokens and our AMM work, you're ready to start swapping!
        </p>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)', marginBottom: '16px' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px' }}>🚀 Quick Start</p>
          <ol style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Connect your wallet</li>
            <li>Select tokens to swap</li>
            <li>Enter amount</li>
            <li>Approve token (if first time)</li>
            <li>Execute swap</li>
            <li>Celebrate! 🎉</li>
          </ol>
        </div>

        <p style={{ textAlign: 'center', color: '#a78bfa', fontWeight: 600, fontSize: '1.1rem' }}>
          🔄 Happy Swapping! 🔄
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

