import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { FlaskConical, Dna, Sparkles, TrendingUp } from 'lucide-react';

/**
 * CrossBreedingModal - Modal for Cross-Breeding feature
 */
export default function CrossBreedingModal({ isOpen, onClose }) {
  // Flask/Conical SVG Icon for title - Dark green theme
  const FlaskIcon = () => (
    <svg width="51" height="51" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3 L9 9 L4 19 C3 21 4 22 6 22 L18 22 C20 22 21 21 20 19 L15 9 L15 3" stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7" y1="3" x2="17" y2="3" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
      {/* Bubbles */}
      <circle cx="10" cy="16" r="1.5" fill="#22c55e" opacity="0.6">
        <animate attributeName="cy" values="16;14;16" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="14" cy="18" r="1" fill="#16a34a" opacity="0.5">
        <animate attributeName="cy" values="18;15;18" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="14" r="1.2" fill="#4ade80" opacity="0.7">
        <animate attributeName="cy" values="14;12;14" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Cross-Breeding"
      subtitle="Combine mushrooms to create rare species"
      titleIcon={FlaskIcon}
      titleColor="#a78bfa"
      borderColor="rgba(167, 139, 250, 0.5)"
      shadowColor="rgba(167, 139, 250, 0.4)"
      scrollbarColor="#a78bfa"
      developmentNote="Similar to how an agar plate needs a period of incubation to grow, our breeding feature has been inoculated with the spores of innovation. Monitor the plates regularly to check for signs of mycelial growth. Once the spores start developing into mycelia, they will be in close proximity and cross their haploids."
      docusaurusSubtitle="Learn more about Cross-Breeding mechanics in our documentation"
    >
      <ModalCard
        icon={FlaskConical}
        title="Breeding Mechanics"
        content="Combine two mushroom NFTs to create a new hybrid species. Each parent contributes traits like color, pattern, rarity, and special abilities."
        delay={0.1}
        accentColor="#4ade80"
      />

      <ModalCard
        icon={Dna}
        title="Genetic Traits"
        content="Mushrooms carry genetic markers that determine offspring characteristics. Rare traits have lower inheritance rates, making legendary mushrooms highly valuable."
        delay={0.2}
        accentColor="#16a34a"
      />

      <ModalCard
        icon={Sparkles}
        title="Rarity System"
        content="Common + Common = Uncommon (70%), Rare (25%), Legendary (5%). Uncommon + Rare = Rare (60%), Legendary (30%), Mythic (10%). Breeding costs scale with parent rarity."
        delay={0.3}
        accentColor="#4ade80"
      />

      <ModalCard
        icon={TrendingUp}
        title="Cooldown & Economics"
        content="Each mushroom has a breeding cooldown (24-72 hours based on rarity). Breeding requires token burns, creating deflationary pressure while rewarding collectors."
        delay={0.4}
        accentColor="#22c55e"
      />

      {/* Visual Example */}
      <div style={{
        marginTop: '24px',
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
        border: '2px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '16px'
      }}>
        <h3 style={{ 
          color: '#a78bfa', 
          textAlign: 'center', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 2px 6px rgba(168, 85, 247, 0.5))'
        }}>
          🧪 Breeding Example
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          {/* Parent 1 */}
          <div style={{
            padding: '16px',
            background: 'rgba(168, 85, 247, 0.2)',
            border: '2px solid rgba(168, 85, 247, 0.5)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🍄</div>
            <div style={{ color: '#a78bfa', fontSize: '0.9rem', fontWeight: 600 }}>Purple Mystic</div>
            <div style={{ color: '#e5e7eb', fontSize: '0.8rem' }}>Rare</div>
          </div>

          {/* Plus Sign */}
          <div style={{ fontSize: '2rem', color: '#fbbf24' }}>+</div>

          {/* Parent 2 */}
          <div style={{
            padding: '16px',
            background: 'rgba(236, 72, 153, 0.2)',
            border: '2px solid rgba(236, 72, 153, 0.5)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🍄</div>
            <div style={{ color: '#ec4899', fontSize: '0.9rem', fontWeight: 600 }}>Pink Celestial</div>
            <div style={{ color: '#e5e7eb', fontSize: '0.8rem' }}>Uncommon</div>
          </div>

          {/* Equals Sign */}
          <div style={{ fontSize: '2rem', color: '#22d3ee' }}>=</div>

          {/* Offspring */}
          <div style={{
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))',
            border: '2px solid rgba(251, 191, 36, 0.6)',
            borderRadius: '12px',
            textAlign: 'center',
            animation: 'glow 2s ease-in-out infinite'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '8px' }}>✨🍄✨</div>
            <div style={{ color: '#fbbf24', fontSize: '0.9rem', fontWeight: 600 }}>Twilight Hybrid</div>
            <div style={{ color: '#22d3ee', fontSize: '0.8rem' }}>Legendary</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.4); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
        }
      `}</style>
    </EnhancedModal>
  );
}

