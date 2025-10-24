import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Gift, Star, Trophy, Heart, Users, Zap } from "lucide-react";

export default function CommunityRewardsModal({ isOpen, onClose }) {
  // Gift Emoji SVG
  const GiftEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">🎁</text>
      <circle cx="12" cy="12" r="11" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Community Rewards Program"
      subtitle="Earn Tokens, NFTs, & Recognition for Participation"
      titleIcon={GiftEmojiIcon}
      titleColor="#22c55e"
      borderColor="rgba(34, 197, 94, 0.5)"
      shadowColor="rgba(34, 197, 94, 0.4)"
      scrollbarColor="#22c55e"
    >
      {/* Overview */}
      <ModalCard
        icon={Gift}
        title="Rewards Program Overview"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>Community Rewards Program</strong> recognizes and incentivizes active participation 
          in the Psanctuary ecosystem through tokens, NFTs, and exclusive perks.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🎁 Reward Types</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Token Rewards</strong> - ETHO, Daily Shrooms, and Gratitude Tokens</li>
          <li><strong>NFT Airdrops</strong> - Exclusive collectibles for active members</li>
          <li><strong>Achievement Badges</strong> - On-chain proof of accomplishments</li>
          <li><strong>Discord Roles</strong> - Special roles and channel access</li>
          <li><strong>Governance Power</strong> - Bonus voting weight in DAO</li>
          <li><strong>Early Access</strong> - First access to new features and events</li>
        </ul>
      </ModalCard>

      {/* How to Earn Rewards */}
      <ModalCard
        icon={Star}
        title="How to Earn Rewards"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <p style={{ marginBottom: '12px' }}>
          Rewards are earned through various activities that contribute to the community's growth and vitality.
        </p>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>⭐ Earning Activities</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Daily Farming</strong> - Claim Daily Shrooms every 24 hours</li>
          <li><strong>DAO Participation</strong> - Vote on proposals and submit ideas</li>
          <li><strong>Content Creation</strong> - Write guides, create art, make videos</li>
          <li><strong>Community Support</strong> - Help new members in Discord</li>
          <li><strong>Bug Reporting</strong> - Find and report issues</li>
          <li><strong>Referrals</strong> - Invite friends to join the ecosystem</li>
          <li><strong>Event Participation</strong> - Join AMAs, workshops, ceremonies</li>
          <li><strong>Breeding Innovation</strong> - Create rare mushroom combinations</li>
        </ul>

        <p style={{ color: '#22c55e', fontSize: '0.9rem', fontStyle: 'italic' }}>
          💡 The more you contribute, the more you earn!
        </p>
      </ModalCard>

      {/* Reward Tiers */}
      <ModalCard
        icon={Trophy}
        title="Reward Tiers & Levels"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          Community members progress through tiers based on their cumulative contributions and activity.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🏆 Tier System (Coming Soon)</h4>
        
        <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
          <div style={{ 
            background: 'rgba(156,163,175,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(156,163,175,0.3)'
          }}>
            <h5 style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '4px' }}>🌱 Seedling (Level 1-10)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              New members - Basic rewards and access
            </p>
          </div>

          <div style={{ 
            background: 'rgba(34,197,94,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(34,197,94,0.3)'
          }}>
            <h5 style={{ color: '#22c55e', fontSize: '0.95rem', marginBottom: '4px' }}>🍄 Cultivator (Level 11-25)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Active participants - Enhanced rewards and perks
            </p>
          </div>

          <div style={{ 
            background: 'rgba(59,130,246,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(59,130,246,0.3)'
          }}>
            <h5 style={{ color: '#3b82f6', fontSize: '0.95rem', marginBottom: '4px' }}>🧙 Mystic (Level 26-50)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Dedicated contributors - Premium rewards and influence
            </p>
          </div>

          <div style={{ 
            background: 'rgba(167,139,250,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(167,139,250,0.3)'
          }}>
            <h5 style={{ color: '#a78bfa', fontSize: '0.95rem', marginBottom: '4px' }}>👑 Elder (Level 51+)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Community leaders - Maximum rewards and governance power
            </p>
          </div>
        </div>

        <p style={{ color: '#fbbf24', fontSize: '0.9rem', fontStyle: 'italic' }}>
          🎯 Level up by earning XP through community activities!
        </p>
      </ModalCard>

      {/* Achievement Badges */}
      <ModalCard
        icon={Star}
        title="Achievement Badge System"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <p style={{ marginBottom: '12px' }}>
          Earn <strong>on-chain achievement badges</strong> (NFTs) for completing specific milestones 
          and challenges.
        </p>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🏅 Badge Categories</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Farming Badges</strong> - 7-day streak, 30-day streak, 365-day streak</li>
          <li><strong>Breeding Badges</strong> - First breed, 10 breeds, rare combination</li>
          <li><strong>Governance Badges</strong> - First vote, 10 votes, proposal passed</li>
          <li><strong>Trading Badges</strong> - First swap, 100 swaps, liquidity provider</li>
          <li><strong>Burn Badges</strong> - First burn, 1000 ETHO burned, 10,000 ETHO burned</li>
          <li><strong>Social Badges</strong> - Referral master, content creator, community helper</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>✨ Badge Benefits</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Collectible NFTs</strong> - Display in your profile</li>
          <li><strong>XP Multipliers</strong> - Earn XP faster with badges</li>
          <li><strong>Exclusive Access</strong> - Unlock special features</li>
          <li><strong>Bragging Rights</strong> - Show off your achievements</li>
        </ul>
      </ModalCard>

      {/* Referral Program */}
      <ModalCard
        icon={Users}
        title="Referral & Ambassador Program"
        gradient="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))"
        accentColor="#3b82f6"
      >
        <p style={{ marginBottom: '12px' }}>
          Grow the community and earn rewards by inviting friends and promoting Psanctuary.
        </p>

        <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>👥 Referral Rewards</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Referral Bonus</strong> - 100 ETHO for each friend who joins and completes onboarding</li>
          <li><strong>Lifetime Commission</strong> - 5% of referred user's crowdsale purchases</li>
          <li><strong>Milestone Bonuses</strong> - Extra rewards at 10, 50, 100 referrals</li>
          <li><strong>Ambassador NFT</strong> - Exclusive NFT for top referrers</li>
        </ul>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🌟 Ambassador Program</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Monthly Stipend</strong> - Paid in ETHO for active ambassadors</li>
          <li><strong>Exclusive Merch</strong> - Branded swag and promotional materials</li>
          <li><strong>Direct Line</strong> - Priority support and team communication</li>
          <li><strong>Event Hosting</strong> - Host community events and workshops</li>
        </ul>
      </ModalCard>

      {/* Seasonal Events */}
      <ModalCard
        icon={Zap}
        title="Seasonal Events & Campaigns"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <p style={{ marginBottom: '12px' }}>
          Participate in limited-time events and campaigns for exclusive rewards and bonuses.
        </p>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🎉 Event Types</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Breeding Tournaments</strong> - Compete to create rarest mushrooms</li>
          <li><strong>Farming Challenges</strong> - Bonus Daily Shrooms for streaks</li>
          <li><strong>Trading Competitions</strong> - Highest volume traders win prizes</li>
          <li><strong>Governance Sprints</strong> - Extra rewards for proposal participation</li>
          <li><strong>Community Quests</strong> - Collaborative goals with shared rewards</li>
          <li><strong>Holiday Specials</strong> - Themed events for major holidays</li>
        </ul>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🏆 Event Rewards</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Limited Edition NFTs</strong> - Exclusive to event participants</li>
          <li><strong>Bonus Tokens</strong> - Extra ETHO and Daily Shrooms</li>
          <li><strong>Rare Badges</strong> - Special achievement badges</li>
          <li><strong>Leaderboard Prizes</strong> - Top performers get premium rewards</li>
        </ul>
      </ModalCard>

      {/* Loyalty Program */}
      <ModalCard
        icon={Heart}
        title="Long-Term Loyalty Rewards"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          Dedicated community members receive increasing rewards over time for sustained participation.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>💖 Loyalty Benefits</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Tenure Bonuses</strong> - Rewards scale with account age</li>
          <li><strong>Staking Multipliers</strong> - Higher APY for long-term stakers</li>
          <li><strong>Governance Weight</strong> - More voting power over time</li>
          <li><strong>VIP Access</strong> - Exclusive channels and early features</li>
          <li><strong>Anniversary NFTs</strong> - Special NFTs on account milestones</li>
        </ul>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🎂 Milestone Rewards</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>30 Days</strong> - "Committed Cultivator" badge + 500 ETHO</li>
          <li><strong>90 Days</strong> - "Dedicated Mystic" badge + 2,000 ETHO</li>
          <li><strong>1 Year</strong> - "Elder Member" badge + 10,000 ETHO + exclusive NFT</li>
          <li><strong>2+ Years</strong> - "Founding Elder" status + lifetime perks</li>
        </ul>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Gift}
        title="Start Earning Rewards Today"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <p style={{ marginBottom: '12px' }}>
          The Community Rewards Program is designed to recognize and celebrate every contribution, 
          no matter how small.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🚀 Getting Started</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Connect Your Wallet</strong> - Start tracking your progress</li>
          <li><strong>Claim Daily Shrooms</strong> - Begin your farming streak</li>
          <li><strong>Join Discord</strong> - Engage with the community</li>
          <li><strong>Complete Onboarding</strong> - Earn your first rewards</li>
          <li><strong>Invite Friends</strong> - Start earning referral bonuses</li>
        </ul>

        <p style={{ color: '#fbbf24', marginTop: '16px', fontSize: '0.95rem', fontStyle: 'italic' }}>
          🌟 Every action counts - start building your legacy today!
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

