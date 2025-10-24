import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { Sunrise, Zap, Gift, TrendingUp } from 'lucide-react';

/**
 * DailyShroomsModal - Modal for Daily Shrooms feature
 * Includes demo toggle for animations
 */
export default function DailyShroomsModal({ isOpen, onClose }) {

  // Sunrise SVG Icon for title
  const SunriseIcon = () => (
    <svg width="51" height="51" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="#fbbf24" opacity="0.8">
        <animate attributeName="r" values="4;5;4" dur="3s" repeatCount="indefinite" />
      </circle>
      <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="6">
          <animate attributeName="y2" values="6;7;6" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="12" y1="18" x2="12" y2="22">
          <animate attributeName="y1" values="18;17;18" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34">
          <animate attributeName="x2" values="6.34;7.34;6.34" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y2" values="6.34;7.34;6.34" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78">
          <animate attributeName="x1" values="17.66;16.66;17.66" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y1" values="17.66;16.66;17.66" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="2" y1="12" x2="6" y2="12">
          <animate attributeName="x2" values="6;7;6" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="18" y1="12" x2="22" y2="12">
          <animate attributeName="x1" values="18;17;18" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66">
          <animate attributeName="x2" values="6.34;7.34;6.34" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y2" values="17.66;16.66;17.66" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22">
          <animate attributeName="x1" values="17.66;16.66;17.66" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y1" values="6.34;7.34;6.34" dur="3s" repeatCount="indefinite" />
        </line>
      </g>
      <path d="M2 16 Q12 14 22 16" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Daily Shrooms"
      subtitle="Claim your daily mushroom rewards"
      titleIcon={SunriseIcon}
      titleColor="#fbbf24"
      borderColor="rgba(251, 191, 36, 0.5)"
      shadowColor="rgba(251, 191, 36, 0.3)"
      scrollbarColor="#fbbf24"
      developmentNote="Like a mushroom maturing to drop spores, this feature is in development and will be unveiled soon."
      docusaurusSubtitle="Learn more about Daily Shrooms rewards in our documentation"
    >
      {/* Token Info from Dropdown */}
      <ModalCard
        icon={Sunrise}
        title="🍄 Daily Mushroom (ERC20 Token) - Fruiting Bodies"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>
          Every 24 hours during the <strong>fruiting phase</strong>, collect a single mushroom as an ERC20 fungible token.
          These tokens act as <strong>gas currency</strong> for cross-breeding experiments, allowing you to
          <strong> inoculate new genetic combinations</strong>. Like real cultivation, daily attention yields
          abundant harvests—accumulate these tokens to power your mycological experiments!
        </p>
      </ModalCard>

      <ModalCard
        icon={Gift}
        title="🌾 Mushroom Farm Harvest (ERC721 NFT) - Complete Flush"
        gradient="linear-gradient(135deg, rgba(124,58,237,0.15), rgba(109,40,217,0.15))"
        accentColor="#7c3aed"
      >
        <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>
          After <strong>inoculating your substrate</strong> and misting for 8 hours to maintain proper
          <strong> fruiting conditions</strong>, your first <strong>flush</strong> is ready! Harvest a complete farm
          as a unique ERC721 NFT featuring <strong>multiple psilocybin mushrooms</strong> growing from colonized substrate.
          Each farm NFT represents a successful cultivation cycle—a collectible piece of your spiritual and mycological journey!
        </p>
      </ModalCard>

      <ModalCard
        icon={Sunrise}
        title="Daily Rewards"
        content="Claim mushroom tokens every 24 hours. The longer your streak, the bigger your rewards!"
        delay={0.1}
        accentColor="#fbbf24"
      />

      <ModalCard
        icon={Zap}
        title="Streak Bonuses"
        content="Maintain your daily claim streak to unlock multipliers. 7-day streak = 1.5x, 30-day streak = 2x, 90-day streak = 3x rewards!"
        delay={0.2}
        accentColor="#f59e0b"
      />

      <ModalCard
        icon={Gift}
        title="Special Events"
        content="During ceremonial seasons and community events, daily rewards are boosted with special NFT drops and bonus tokens."
        delay={0.3}
        accentColor="#fbbf24"
      />

      <ModalCard
        icon={TrendingUp}
        title="Growth Mechanics"
        content="Daily claims contribute to your mushroom garden growth. Higher streaks unlock rare mushroom species and cross-breeding opportunities."
        delay={0.4}
        accentColor="#f59e0b"
      />
    </EnhancedModal>
  );
}

