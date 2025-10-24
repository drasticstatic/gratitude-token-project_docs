import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { Heart, DollarSign, Users, TrendingUp } from 'lucide-react';

/**
 * DonateModal - Modal for Donate/Crowdsale feature
 */
export default function DonateModal({ isOpen, onClose }) {
  // Heart SVG Icon for title
  const HeartIcon = () => (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21 C12 21 3 15 3 9 C3 6 5 4 7.5 4 C9.5 4 11 5 12 6.5 C13 5 14.5 4 16.5 4 C19 4 21 6 21 9 C21 15 12 21 12 21 Z" fill="#ec4899" opacity="0.8" stroke="#ec4899" strokeWidth="2">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="8" cy="11" r="1.1" fill="#a78bfa" opacity="0.9">
        <animate attributeName="r" values="1.1;3.1;2.1" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="17" cy="8" r="2.2" fill="#a78bfa" opacity="0.9">
        <animate attributeName="r" values="2.1;3.1;1.1" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="12" cy="11" r="3.3" fill="#f472b6" opacity="0.4">
        <animate attributeName="r" values="2.2;7.7;1.1" dur="5s" repeatCount="indefinite" begin="1.0s" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Donate"
      subtitle="Support the mission through sacred giving"
      titleIcon={HeartIcon}
      titleColor="#a78bfa"
      borderColor="rgba(167, 139, 250, 0.5)"
      shadowColor="rgba(167, 139, 250, 0.3)"
      scrollbarColor="#a78bfa"
      developmentNote="Similar to spawn, the crowdsale is fully colonized and ready to spread its mycelium to substrate soon."
      docusaurusSubtitle="Learn more about donation mechanics in our documentation"
    >
      <ModalCard
        icon={Heart}
        title="Sacred Giving"
        content="Donate ETH or stablecoins to support Psanctuary Church's mission: harm reduction, spiritual integration, psychedelic education, and community healing."
        delay={0.1}
        accentColor="#ec4899"
      />

      <ModalCard
        icon={DollarSign}
        title="Crowdsale Mechanics"
        content="Purchase PSD tokens during crowdsale phases. Early supporters receive bonus tokens, exclusive NFTs, and governance weight. Funds directly support humanitarian aid."
        delay={0.2}
        accentColor="#fbbf24"
      />

      <ModalCard
        icon={Users}
        title="Community Impact"
        content="100% of donations fund real-world programs: psychedelic integration circles, harm reduction training, spiritual recovery resources, and community support networks."
        delay={0.3}
        accentColor="#a78bfa"
      />

      <ModalCard
        icon={TrendingUp}
        title="Donor Benefits"
        content="Donors receive commemorative NFTs, governance voting power, access to exclusive events, and recognition in the community hall of gratitude."
        delay={0.4}
        accentColor="#22d3ee"
      />

      {/* Donation Tiers */}
      <div style={{
        marginTop: '24px',
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.1))',
        border: '2px solid rgba(236, 72, 153, 0.3)',
        borderRadius: '16px'
      }}>
        <h3 style={{ 
          color: '#ec4899', 
          textAlign: 'center', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 2px 6px rgba(236, 72, 153, 0.5))'
        }}>
          💝 Donation Tiers
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px'
        }}>
          {[
            { tier: 'Seedling', amount: '0.1 ETH', bonus: '+10% tokens', color: '#22d3ee' },
            { tier: 'Sprout', amount: '0.5 ETH', bonus: '+20% tokens', color: '#a78bfa' },
            { tier: 'Bloom', amount: '1 ETH', bonus: '+30% tokens', color: '#ec4899' },
            { tier: 'Garden', amount: '5 ETH', bonus: '+50% tokens', color: '#fbbf24' }
          ].map((tier, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                background: `linear-gradient(135deg, ${tier.color}20, ${tier.color}10)`,
                border: `2px solid ${tier.color}60`,
                borderRadius: '12px',
                textAlign: 'center',
                animation: `heartbeat ${1.5 + idx * 0.2}s ease-in-out infinite`
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💖</div>
              <div style={{ color: tier.color, fontWeight: 700, marginBottom: '4px' }}>{tier.tier}</div>
              <div style={{ color: '#e5e7eb', fontSize: '0.85rem', marginBottom: '4px' }}>{tier.amount}</div>
              <div style={{ color: tier.color, fontSize: '0.8rem', opacity: 0.8 }}>{tier.bonus}</div>
            </div>
          ))}
        </div>
        <p style={{ 
          color: '#e5e7eb', 
          textAlign: 'center', 
          marginTop: '20px', 
          fontSize: '0.9rem',
          fontStyle: 'italic'
        }}>
          All donations are tax-deductible and support 501(c)(3) charitable activities.
        </p>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05); }
          50% { transform: scale(1); }
          75% { transform: scale(1.05); }
        }
      `}</style>
    </EnhancedModal>
  );
}

