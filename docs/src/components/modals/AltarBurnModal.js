import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { Flame, Heart, TrendingDown, Award } from 'lucide-react';

/**
 * AltarBurnModal - Modal for Altar Burn feature
 */
export default function AltarBurnModal({ isOpen, onClose }) {
  // Flame SVG Icon for title
  const FlameIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 C12 2 8 6 8 10 C8 13 10 15 12 15 C14 15 16 13 16 10 C16 6 12 2 12 2 Z" fill="#f97316" opacity="0.8">
        <animate attributeName="d" values="M12 2 C12 2 8 6 8 10 C8 13 10 15 12 15 C14 15 16 13 16 10 C16 6 12 2 12 2 Z;M12 2 C12 2 7 6 7 10 C7 13 9 15 12 15 C15 15 17 13 17 10 C17 6 12 2 12 2 Z;M12 2 C12 2 8 6 8 10 C8 13 10 15 12 15 C14 15 16 13 16 10 C16 6 12 2 12 2 Z" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M12 8 C12 8 10 10 10 12 C10 13.5 11 14.5 12 14.5 C13 14.5 14 13.5 14 12 C14 10 12 8 12 8 Z" fill="#fbbf24" opacity="0.9">
        <animate attributeName="d" values="M12 8 C12 8 10 10 10 12 C10 13.5 11 14.5 12 14.5 C13 14.5 14 13.5 14 12 C14 10 12 8 12 8 Z;M12 8 C12 8 9.5 10 9.5 12 C9.5 13.5 10.5 14.5 12 14.5 C13.5 14.5 14.5 13.5 14.5 12 C14.5 10 12 8 12 8 Z;M12 8 C12 8 10 10 10 12 C10 13.5 11 14.5 12 14.5 C13 14.5 14 13.5 14 12 C14 10 12 8 12 8 Z" dur="2s" repeatCount="indefinite" />
      </path>
      <ellipse cx="12" cy="18" rx="6" ry="3" fill="#f97316" opacity="0.3">
        <animate attributeName="rx" values="6;7;6" dur="2s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Altar Burn"
      subtitle="Ceremonial token burning for sacred offerings"
      titleIcon={FlameIcon}
      titleColor="#f97316"
      borderColor="rgba(249, 115, 22, 0.5)"
      shadowColor="rgba(249, 115, 22, 0.3)"
      scrollbarColor="#f97316"
      developmentNote="Like burning incense to purify a space, this feature is in development and will soon be ready for ceremonial use."
      docusaurusSubtitle="Learn more about Altar Burn ceremonies in our documentation"
    >
      <ModalCard
        icon={Flame}
        title="Ceremonial Burning"
        content="Burn tokens as a sacred offering to support humanitarian aid, spiritual recovery, and community growth. Each burn is a ritual act of giving."
        delay={0.1}
        accentColor="#f97316"
      />

      <ModalCard
        icon={Heart}
        title="Impact & Purpose"
        content="Burned tokens are permanently removed from circulation, creating deflationary pressure. Proceeds fund Psanctuary Church's mission: harm reduction, spiritual integration, and community support."
        delay={0.2}
        accentColor="#ec4899"
      />

      <ModalCard
        icon={TrendingDown}
        title="Deflationary Mechanics"
        content="Every burn reduces total supply, increasing scarcity and value for remaining holders. Burn events are recorded on-chain with ceremonial metadata."
        delay={0.3}
        accentColor="#a78bfa"
      />

      <ModalCard
        icon={Award}
        title="Burn Rewards"
        content="Burners receive commemorative NFTs, governance weight bonuses, and access to exclusive ceremonial events. Larger burns unlock rare mushroom species."
        delay={0.4}
        accentColor="#fbbf24"
      />

      {/* Burn Visualization */}
      <div style={{
        marginTop: '24px',
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.1))',
        border: '2px solid rgba(249, 115, 22, 0.3)',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          color: '#f97316', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 2px 6px rgba(249, 115, 22, 0.5))'
        }}>
          🔥 Burn Tiers & Rewards
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {[
            { tier: 'Spark', amount: '100 tokens', reward: 'Bronze NFT', color: '#f97316' },
            { tier: 'Flame', amount: '500 tokens', reward: 'Silver NFT', color: '#fbbf24' },
            { tier: 'Inferno', amount: '1000 tokens', reward: 'Gold NFT', color: '#ec4899' },
            { tier: 'Phoenix', amount: '5000 tokens', reward: 'Legendary NFT', color: '#a78bfa' }
          ].map((tier, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                background: `linear-gradient(135deg, ${tier.color}20, ${tier.color}10)`,
                border: `2px solid ${tier.color}60`,
                borderRadius: '12px',
                animation: `flicker ${1.5 + idx * 0.3}s ease-in-out infinite`
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔥</div>
              <div style={{ color: tier.color, fontWeight: 700, marginBottom: '4px' }}>{tier.tier}</div>
              <div style={{ color: '#e5e7eb', fontSize: '0.85rem', marginBottom: '4px' }}>{tier.amount}</div>
              <div style={{ color: tier.color, fontSize: '0.8rem', opacity: 0.8 }}>→ {tier.reward}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </EnhancedModal>
  );
}

