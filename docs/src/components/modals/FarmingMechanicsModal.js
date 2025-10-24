import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Sprout, Zap, Clock, Package, TrendingUp, Users, Coins } from "lucide-react";

export default function FarmingMechanicsModal({ isOpen, onClose }) {
  // Scroll Emoji SVG
  const ScrollEmojiSVG = (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#fbbf24" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">📜</text>
      <circle cx="12" cy="12" r="11" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Mining & Farming Operation"
      subtitle="Gasless Internal Economy with Mushroom Tokens"
      titleIcon={ScrollEmojiSVG}
      titleColor="#fbbf24"
      borderColor="rgba(251, 191, 36, 0.5)"
      shadowColor="rgba(251, 191, 36, 0.4)"
      scrollbarColor="#fbbf24"
    >
      {/* Overview */}
      <ModalCard
        icon={Sprout}
        title="Dual-Token Farming System"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <p style={{ marginBottom: '12px' }}>
          Our farming system uses <strong>two types of mushroom tokens</strong> to create a sustainable, gasless internal economy:
        </p>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Hourly Mushrooms (Fungible)</strong> - Earned every hour, used as internal gas for transactions</li>
          <li><strong>Daily Mushrooms (Non-Fungible)</strong> - Earned once per day, used for cross-breeding NFTs</li>
        </ul>
        <p style={{ marginTop: '12px', color: '#22c55e' }}>
          Both work alongside <strong>PSILO</strong> (our internal governance token) and <strong>ETHO</strong> (our mainnet-backed value token).
        </p>
      </ModalCard>

      {/* Hourly Mushrooms */}
      <ModalCard
        icon={Clock}
        title="Hourly Mushrooms: Internal Gas"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>⏰ Collection Mechanics</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Max 8 per day</strong> for diligent collectors</li>
          <li><strong>Mist every hour</strong> - Each hour, the mushroom grows virtually</li>
          <li><strong>Harvest after 3 mists</strong> - After 3 hours, mushroom is harvestable</li>
          <li><strong>Cooldown period</strong> - 1 hour rest after harvest (mycelial recovery)</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🎯 Uses</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Voting on DAO proposals</li>
          <li>NFT lab operation gas</li>
          <li>Internal staking</li>
          <li>Micro-transactions</li>
        </ul>
      </ModalCard>

      {/* Daily Mushrooms */}
      <ModalCard
        icon={Package}
        title="Daily Mushrooms: NFT Crafting"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🎨 Non-Fungible Tokens</h4>
        <p style={{ marginBottom: '12px' }}>
          Daily mushrooms are <strong>unique, non-fungible tokens</strong> earned once per day. Each one is tied to your engagement on that specific day.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🧬 Cross-Breeding Lab</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Burn 2 daily mushrooms</strong> to create a hybrid NFT</li>
          <li>Hybrid inherits traits from both burned mushrooms</li>
          <li>Creates scarcity and strategic value</li>
          <li>Requires hourly mushrooms as gas for lab operation</li>
        </ul>
      </ModalCard>

      {/* Boost Mechanics */}
      <ModalCard
        icon={Zap}
        title="Boost Mode & Yield Enhancement"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>⚡ How to Boost Your Yield</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Deposit ETHO</strong> - Boost mushroom yield via AMM swap</li>
          <li><strong>Stake PSILO</strong> - Increase daily mushroom multiplier</li>
          <li><strong>Become a Cultivator</strong> - Earn extra mushrooms for growing sacred mushrooms</li>
          <li><strong>Teach Classes</strong> - Bonus mushrooms for ministership programs</li>
        </ul>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>📊 Boost Example</h4>
        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)' }}>
          <p style={{ marginBottom: '8px' }}><strong>Base:</strong> 1 mushroom per 3 hours</p>
          <p style={{ marginBottom: '8px' }}><strong>Boosted:</strong> 4.57 mushrooms per 3 hours</p>
          <p style={{ color: '#a78bfa' }}><strong>Visual:</strong> Cluster of mushrooms growing simultaneously!</p>
        </div>
      </ModalCard>

      {/* Mycelial Rest Period */}
      <ModalCard
        icon={TrendingUp}
        title="Mycelial Rest Period (Cooldown)"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🌱 Recovery & Regeneration</h4>
        <p style={{ marginBottom: '12px' }}>
          After harvesting, the mycelium needs time to <strong>recolonize and redistribute nutrients</strong> before the next flush. This mirrors natural mushroom cultivation cycles.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🔄 The Recovery Process</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Rest & Rehydration</strong> - Substrate replenishes water lost during fruiting</li>
          <li><strong>Nutrient Redistribution</strong> - Mycelium recovers energy for next flush</li>
          <li><strong>Regeneration</strong> - Network repairs and prepares for new growth</li>
          <li><strong>New Pins Form</strong> - Tiny mushroom beginnings appear after rest</li>
        </ul>

        <p style={{ marginTop: '12px', color: '#9ca3af', fontSize: '0.9rem' }}>
          <em>This cooldown prevents over-farming and ensures ecosystem sustainability, just like in nature.</em>
        </p>
      </ModalCard>

      {/* Substrate & Spore Store */}
      <ModalCard
        icon={Package}
        title="Substrate & Spore Store"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>🧱 Substrate Blocks</h4>
        <p style={{ marginBottom: '12px' }}>
          Every user gets <strong>one free substrate block</strong> to start farming. After 24 harvests, the substrate is depleted and must be replaced.
        </p>

        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>🛒 Spore Store</h4>
        <p style={{ marginBottom: '12px' }}>
          Purchase different spore types with varying costs and yield rates:
        </p>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Common Spores</strong> - Low cost, 1 mushroom/hour</li>
          <li><strong>Rare Spores</strong> - Medium cost, 2 mushrooms/hour</li>
          <li><strong>Exotic Spores</strong> - High cost, 4 mushrooms/hour</li>
        </ul>

        <p style={{ marginTop: '12px', color: '#f59e0b' }}>
          <strong>Payment:</strong> ETHO to PSILO swap via AMM, or use existing PSILO balance
        </p>
      </ModalCard>

      {/* PSILO as Peace Silo */}
      <ModalCard
        icon={Users}
        title="PSILO: Storehouses of Peace"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>☮️ Peace Silos</h4>
        <p style={{ marginBottom: '12px' }}>
          <strong>PSILO</strong> sounds like "Peace Silo" - we are harnessing <strong>storehouses of peace</strong> through our internal token economy.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🏛️ Token Hierarchy</h4>
        <div style={{ background: 'rgba(96,165,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(96,165,250,0.3)' }}>
          <p style={{ marginBottom: '8px' }}><strong>ETHO</strong> - Mainnet-backed value token (crowdsale)</p>
          <p style={{ marginBottom: '8px' }}><strong>PSILO</strong> - Internal governance & staking token</p>
          <p style={{ marginBottom: '8px' }}><strong>Hourly Mushrooms</strong> - Fungible internal gas</p>
          <p><strong>Daily Mushrooms</strong> - Non-fungible crafting materials</p>
        </div>

        <p style={{ marginTop: '12px', color: '#9ca3af', fontSize: '0.9rem' }}>
          <em>All housed under the Gratitude Token Project umbrella 🍄✨</em>
        </p>
      </ModalCard>

      {/* Fertilize Feature */}
      <ModalCard
        icon={Sprout}
        title="🌱 Fertilize Feature (Growth Boost)"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>
          Accelerate your mushroom growth by <strong>25-50%</strong> using ETHO or PSD tokens as fertilizer.
          Watch green sparkles and nutrient particles flow through your mycelial network as your cultivation speeds up!
        </p>
      </ModalCard>

      {/* Farming Tiers */}
      <ModalCard
        icon={TrendingUp}
        title="⛏️ Farming Tiers"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <ul style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '0.95rem', paddingLeft: '20px' }}>
          <li><strong>Free Tier:</strong> Basic misting, slow growth</li>
          <li><strong>Farmer ($5/month or 100 ETHO):</strong> Auto-mist, 2x growth speed</li>
          <li><strong>Cultivator ($10/month or 200 ETHO):</strong> Fertilize unlocked, 3x growth speed</li>
          <li><strong>Master Grower ($20/month or 500 ETHO):</strong> All features, 5x growth speed, exclusive strains</li>
        </ul>
      </ModalCard>

      {/* Revenue Streams */}
      <ModalCard
        icon={Coins}
        title="💎 Revenue Streams"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <ul style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '0.95rem', paddingLeft: '20px' }}>
          <li><strong>Fertilizer Purchases:</strong> Buy growth boosts with tokens</li>
          <li><strong>Tier Upgrades:</strong> Subscription or one-time payment options</li>
          <li><strong>Exclusive Strain NFT Sales:</strong> Rare collectibles for Master Growers</li>
          <li><strong>Fiat On-Ramp:</strong> Accept real currency for non-crypto users</li>
        </ul>
      </ModalCard>

      {/* Gamification Features */}
      <ModalCard
        icon={Package}
        title="🎮 Gamification Features"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <ul style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '0.95rem', paddingLeft: '20px' }}>
          <li><strong>Leaderboards:</strong> Compete for most mushrooms grown</li>
          <li><strong>Achievements:</strong> Unlock special strains and badges</li>
          <li><strong>Seasonal Events:</strong> Double growth weekends and special harvests</li>
          <li><strong>Referral Bonuses:</strong> Earn rewards for bringing new cultivators</li>
        </ul>
      </ModalCard>

      {/* Vision */}
      <ModalCard
        icon={Zap}
        title="💡 Vision"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <p style={{ color: '#fbbf24', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.8' }}>
          <strong>Transform mushroom farming into a sustainable income stream for the project
          while creating an engaging, rewarding experience for our community.</strong> Real currency integration opens
          doors for broader adoption beyond crypto-native users.
        </p>
      </ModalCard>

      {/* Cultivator & Teacher Incentives */}
      <ModalCard
        icon={Users}
        title="Cultivator & Teacher Incentives"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🌿 Certified Cultivators</h4>
        <p style={{ marginBottom: '12px' }}>
          Community members who grow psilocybin sacred mushrooms receive <strong>additional token allocations</strong> as recognition for their stewardship.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>📚 Teachers & Mentors</h4>
        <p style={{ marginBottom: '12px' }}>
          Ministership program instructors earn <strong>bonus mushrooms</strong> for classes taught, supporting mission-aligned education.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>💰 Treasury Support</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Tuition flows into DAO treasury</li>
          <li>Treasury allocates scholarships via voted proposals</li>
          <li>Practical support for cultivators (housing, supplies, equipment)</li>
          <li>Grants for experimental or educational projects</li>
        </ul>
      </ModalCard>

      {/* Summary */}
      <ModalCard
        icon={TrendingUp}
        title="Sustainable Engagement Loop"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🔄 The Virtuous Cycle</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>User engages hourly → earns fungible mushrooms → powers internal actions</li>
          <li>Daily engagement → earns non-fungible mushrooms → enables NFT cross-breeding</li>
          <li>PSILO accrues via mining → influences multipliers → optional ETHO conversion</li>
          <li>ETHO deposits → boost yield → treasury support → cultivator/teacher funding</li>
          <li>Community growth → more activity → vibrant internal ecosystem</li>
        </ol>

        <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(167,139,250,0.1)', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px' }}>✨ Key Benefits</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Gasless internal economy</li>
            <li>Gamified engagement</li>
            <li>Strategic NFT crafting</li>
            <li>Mission-aligned incentives</li>
            <li>Sustainable tokenomics</li>
          </ul>
        </div>
      </ModalCard>
    </EnhancedModal>
  );
}

