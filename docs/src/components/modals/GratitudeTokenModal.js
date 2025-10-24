import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Heart, Sparkles, Users, TrendingUp, Gift, Zap } from "lucide-react";

export default function GratitudeTokenModal({ isOpen, onClose }) {
  // HeartWithRibbon Emoji SVG
  const HeartwithRibbonEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#ec4899" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#ec4899" fontSize="11" fontWeight="bold">💝</text>
      <circle cx="12" cy="12" r="11" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="The Gratitude Token ($GRAT)"
      subtitle="Cultivating Appreciation Through Blockchain"
      titleIcon={HeartwithRibbonEmojiIcon}
      titleColor="#ec4899"
      borderColor="rgba(236, 72, 153, 0.5)"
      shadowColor="rgba(236, 72, 153, 0.4)"
      scrollbarColor="#ec4899"
    >
      {/* Overview */}
      <ModalCard
        icon={Heart}
        title="What is the Gratitude Token?"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>Gratitude Token ($GRAT)</strong> is the heart of our ecosystem—a token designed to <strong>express appreciation, support sacred work, and build community</strong> through the power of giving.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>💖 Core Purpose</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Express Gratitude</strong> - Send tokens to show appreciation</li>
          <li><strong>Support the Mission</strong> - Fund sacred mushroom cultivation and education</li>
          <li><strong>Build Community</strong> - Create bonds through reciprocal giving</li>
          <li><strong>Reward Contribution</strong> - Recognize those who serve the community</li>
        </ul>

        <div style={{ background: 'rgba(236,72,153,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(236,72,153,0.3)' }}>
          <p style={{ color: '#ec4899', fontWeight: 600, marginBottom: '8px' }}>✨ The Gratitude Economy</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            Unlike traditional tokens focused solely on financial value, $GRAT embodies the <strong>spirit of reciprocity and appreciation</strong> that lies at the heart of sacred community.
          </p>
        </div>
      </ModalCard>

      {/* Token Umbrella */}
      <ModalCard
        icon={Sparkles}
        title="The Gratitude Token Project Umbrella"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🏛️ Ecosystem Architecture</h4>
        <p style={{ marginBottom: '12px' }}>
          The Gratitude Token Project serves as the <strong>umbrella framework</strong> for our entire token ecosystem:
        </p>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '6px' }}>🌟 ETHO (Ethereal Offering)</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Main project token from crowdsale. Mainnet-backed, tradeable, represents financial support to the mission.
          </p>

          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '6px' }}>☮️ PSILO (Peace Silos)</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Internal governance and staking token. Earned through farming/mining, powers DAO voting and internal economy.
          </p>

          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '6px' }}>🍄 Mushroom Tokens</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Hourly (fungible) and Daily (non-fungible) tokens used as internal gas and NFT crafting materials.
          </p>

          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '6px' }}>💝 GRAT (Gratitude Token)</p>
          <p style={{ fontSize: '0.95rem', marginLeft: '20px' }}>
            The spiritual and social layer—expressing appreciation, supporting contributors, and building community bonds.
          </p>
        </div>

        <p style={{ color: '#9ca3af', fontSize: '0.9rem', fontStyle: 'italic' }}>
          All tokens work together to create a holistic ecosystem of value, governance, and gratitude.
        </p>
      </ModalCard>

      {/* How to Earn */}
      <ModalCard
        icon={Gift}
        title="How to Earn Gratitude Tokens"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🌱 Ways to Receive $GRAT</h4>
        
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🎁 Community Contributions</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Receive $GRAT from community members as thanks</li>
            <li>Earn through helpful forum posts and guidance</li>
            <li>Get rewarded for supporting newcomers</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🌿 Cultivation & Teaching</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Certified cultivators receive $GRAT allocations</li>
            <li>Teachers earn tokens for ministership programs</li>
            <li>Mentors rewarded for guiding students</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>🏛️ DAO Participation</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Active governance participation</li>
            <li>Successful proposal submissions</li>
            <li>Community moderation and support</li>
          </ul>
        </div>

        <div>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>💰 Treasury Distributions</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Periodic airdrops to active members</li>
            <li>Scholarship recipients</li>
            <li>Grant program participants</li>
          </ul>
        </div>
      </ModalCard>

      {/* How to Use */}
      <ModalCard
        icon={Zap}
        title="How to Use Gratitude Tokens"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>⚡ Token Utility</h4>
        
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '6px' }}>💝 Express Appreciation</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Send $GRAT to community members to thank them for their help, wisdom, or contributions.
          </p>

          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '6px' }}>🎓 Support Education</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Donate $GRAT to scholarship funds, helping others access sacred mushroom education.
          </p>

          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '6px' }}>🗳️ Governance Participation</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Stake $GRAT for voting power in community decisions and treasury proposals.
          </p>

          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '6px' }}>🎁 Tip Creators</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px', marginLeft: '20px' }}>
            Reward content creators, artists, and educators who enrich the community.
          </p>

          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '6px' }}>🔄 Swap for Other Tokens</p>
          <p style={{ fontSize: '0.95rem', marginLeft: '20px' }}>
            Exchange $GRAT for ETHO, PSILO, or other ecosystem tokens via our AMM.
          </p>
        </div>
      </ModalCard>

      {/* Gratitude Economy */}
      <ModalCard
        icon={Users}
        title="The Gratitude Economy"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🔄 Reciprocity & Flow</h4>
        <p style={{ marginBottom: '12px' }}>
          The Gratitude Token creates a <strong>circular economy of appreciation</strong> where value flows through acts of giving and receiving.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>💫 The Gratitude Cycle</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Contribution</strong> - Member helps, teaches, or creates value</li>
          <li><strong>Recognition</strong> - Community sends $GRAT as thanks</li>
          <li><strong>Accumulation</strong> - Recipient builds gratitude balance</li>
          <li><strong>Redistribution</strong> - They pass gratitude forward to others</li>
          <li><strong>Community Growth</strong> - Cycle strengthens bonds and culture</li>
        </ol>

        <div style={{ background: 'rgba(96,165,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(96,165,250,0.3)' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '8px' }}>🌟 Cultural Impact</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            By tokenizing gratitude, we make appreciation <strong>visible, measurable, and transferable</strong>—creating a culture where contribution is recognized and reciprocity is embedded in the system.
          </p>
        </div>
      </ModalCard>

      {/* Tokenomics */}
      <ModalCard
        icon={TrendingUp}
        title="Tokenomics & Distribution"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>📊 Supply & Allocation</h4>
        
        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.3)', marginBottom: '16px' }}>
          <p style={{ marginBottom: '8px' }}><strong>Total Supply:</strong> 1,000,000,000 $GRAT</p>
          <p style={{ marginBottom: '8px' }}><strong>Initial Distribution:</strong></p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>40% - Community Rewards Pool</li>
            <li>25% - Treasury for Grants & Scholarships</li>
            <li>20% - Cultivator & Teacher Allocations</li>
            <li>10% - Liquidity Provision</li>
            <li>5% - Development & Operations</li>
          </ul>
        </div>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🔄 Emission Schedule</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Year 1:</strong> 20% of rewards pool distributed</li>
          <li><strong>Year 2-5:</strong> Gradual reduction in emission rate</li>
          <li><strong>Long-term:</strong> Sustainable low-emission model</li>
          <li><strong>Governance:</strong> Community can vote to adjust emissions</li>
        </ul>
      </ModalCard>

      {/* How to Get Started */}
      <ModalCard
        icon={Heart}
        title="How to Get Started with $GRAT"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🚀 Begin Your Gratitude Journey</h4>
        
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Connect Your Wallet</strong> - Use MetaMask or compatible wallet</li>
          <li><strong>Acquire $GRAT</strong> - Earn through contribution or swap other tokens</li>
          <li><strong>Join the Community</strong> - Participate in Discord, forums, and events</li>
          <li><strong>Express Gratitude</strong> - Send tokens to those who help you</li>
          <li><strong>Contribute Value</strong> - Share knowledge, help others, create content</li>
          <li><strong>Receive Appreciation</strong> - Build your gratitude balance</li>
          <li><strong>Pay It Forward</strong> - Continue the cycle of giving</li>
        </ol>

        <div style={{ background: 'rgba(236,72,153,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(236,72,153,0.3)' }}>
          <p style={{ color: '#ec4899', fontWeight: 600, marginBottom: '8px' }}>💡 Pro Tips</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Start small - even 1 $GRAT shows appreciation</li>
            <li>Be genuine - send tokens when you truly feel grateful</li>
            <li>Include a message - explain why you're grateful</li>
            <li>Don't hoard - gratitude grows when it flows</li>
          </ul>
        </div>
      </ModalCard>

      {/* Vision */}
      <ModalCard
        icon={Sparkles}
        title="The Vision: A Gratitude-Based Economy"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🌈 Beyond Traditional Finance</h4>
        <p style={{ marginBottom: '12px' }}>
          The Gratitude Token represents a <strong>paradigm shift</strong> from purely transactional economics to a model based on <strong>appreciation, reciprocity, and community care</strong>.
        </p>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>✨ Our Aspirations</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li>Create a culture where contribution is naturally rewarded</li>
          <li>Make gratitude a measurable and transferable asset</li>
          <li>Build economic systems aligned with sacred values</li>
          <li>Demonstrate that appreciation can be a foundation for prosperity</li>
          <li>Inspire other communities to adopt gratitude-based models</li>
        </ul>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px', fontSize: '1.05rem' }}>
            🙏 "In gratitude, we find abundance"
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            By embedding gratitude into our economic system, we create a world where appreciation flows freely, contribution is recognized, and community thrives through reciprocal care.
          </p>
        </div>

        <p style={{ marginTop: '16px', textAlign: 'center', color: '#a78bfa', fontWeight: 600, fontSize: '1.1rem' }}>
          💝 Join us in cultivating a gratitude-based future 💝
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

