import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { Coins, Sparkles, Dna, FlaskConical } from 'lucide-react';

/**
 * CrossBreedingTokensModal - Modal explaining Cross-Breeding tokens (ERC20 & ERC721)
 * Different green scheme from main CrossBreedingModal
 */
export default function CrossBreedingTokensModal({ isOpen, onClose }) {
  // DNA Emoji SVG
  const DNAEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#a78bfa" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">🧬</text>
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
      title="Cross-Breeding Tokens"
      subtitle="Understanding ERC20 & ERC721 tokens in breeding"
      titleIcon={DNAEmojiIcon}
      titleColor="#a78bfa"
      borderColor="rgba(167, 139, 250, 0.5)"
      shadowColor="rgba(167, 139, 250, 0.4)"
      scrollbarColor="#a78bfa"
    >
      <ModalCard
        icon={Coins}
        title="Daily Mushrooms (ERC20) - Inoculation Currency"
        content="Use your accumulated Daily Mushroom ERC20 tokens as gas currency to inoculate new genetic combinations. Each breeding attempt consumes mushroom tokens, creating a sustainable economy where daily cultivation directly enables mycological experimentation. Like real spore work, patience and resources yield magical results!"
        delay={0.1}
        accentColor="#4ade80"
      />

      <ModalCard
        icon={Dna}
        title="Hybrid Mushroom NFTs (ERC721) - New Strains"
        content="Successfully cross-breed two parent mushrooms to create a unique Hybrid Mushroom NFT (ERC721). Each hybrid is a one-of-a-kind strain with traits inherited from its parents—like discovering a new variety through selective cultivation. Create rare genetic combinations and experience the magical journey of releasing yourself from rigid principles into the spiritual light of infinite possibility!"
        delay={0.2}
        accentColor="#22c55e"
      />

      <ModalCard
        icon={FlaskConical}
        title="Breeding Economics"
        content="The breeding system creates a circular economy: Daily cultivation earns ERC20 tokens → Tokens fuel breeding experiments → Breeding creates valuable ERC721 NFTs → Rare NFTs can be traded or bred further. This sustainable loop rewards active participation and long-term cultivation."
        delay={0.3}
        accentColor="#16a34a"
      />

      <ModalCard
        icon={Sparkles}
        title="Genetic Inheritance & Rarity"
        content="Parent mushrooms pass down traits to offspring through a genetic algorithm. Rarer parents have higher chances of producing rare offspring, but even common mushrooms can occasionally yield legendary hybrids. Each breeding is a unique experiment in mycological alchemy!"
        delay={0.4}
        accentColor="#10b981"
      />
    </EnhancedModal>
  );
}

