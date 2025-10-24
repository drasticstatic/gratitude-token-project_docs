import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Image, Sparkles, TrendingUp, Award, Users, Zap } from "lucide-react";

export default function NFTCollectionModal({ isOpen, onClose }) {
  // Mushroom Emoji SVG
  const MushroomEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#f97316" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="bold">🍄</text>
      <circle cx="12" cy="12" r="11" stroke="#f97316" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="NFT Collection Manager"
      subtitle="Mushroom NFTs, Proof of Burn, & Digital Collectibles"
      titleIcon={MushroomEmojiIcon}
      titleColor="#f97316"
      borderColor="rgba(249, 115, 22, 0.5)"
      shadowColor="rgba(249, 115, 22, 0.4)"
      scrollbarColor="#f97316"
    >
      {/* Overview */}
      <ModalCard
        icon={Image}
        title="NFT Collection Overview"
        gradient="linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.15))"
        accentColor="#f97316"
      >
        <p style={{ marginBottom: '12px' }}>
          The Psanctuary ecosystem features multiple <strong>ERC721 NFT collections</strong> representing 
          unique digital assets with real-world utility and spiritual significance.
        </p>

        <h4 style={{ color: '#f97316', marginBottom: '10px' }}>🍄 NFT Collections</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Cross-Bred Mushroom NFTs</strong> - Unique genetic combinations from Breeding Lab</li>
          <li><strong>Proof of Burn NFTs</strong> - Ceremonial certificates from Altar Burn</li>
          <li><strong>Founder NFTs</strong> - Limited edition for early supporters (coming soon)</li>
          <li><strong>Achievement Badges</strong> - Earned through community participation (coming soon)</li>
        </ul>
      </ModalCard>

      {/* Cross-Bred Mushroom NFTs */}
      <ModalCard
        icon={Sparkles}
        title="Cross-Bred Mushroom NFTs"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <p style={{ marginBottom: '12px' }}>
          Each <strong>Cross-Bred Mushroom NFT</strong> is a unique genetic combination created in the 
          Breeding Lab, with distinct visual traits and metadata.
        </p>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🧬 NFT Attributes</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Parent Strains</strong> - Genetic lineage from two parent mushrooms</li>
          <li><strong>Visual Traits</strong> - Cap color, stem pattern, glow effects</li>
          <li><strong>Rarity Score</strong> - Based on trait combination probability</li>
          <li><strong>Generation Number</strong> - How many breeding cycles from original</li>
          <li><strong>Birth Date</strong> - Timestamp of creation</li>
          <li><strong>Breeder Address</strong> - Wallet that created the NFT</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🎨 Generative Art</h4>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
          Each mushroom is procedurally generated based on its genetic traits, ensuring every NFT 
          is visually unique. The art combines psychedelic aesthetics with sacred geometry.
        </p>
      </ModalCard>

      {/* Proof of Burn NFTs */}
      <ModalCard
        icon={Award}
        title="Proof of Burn NFTs"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          <strong>Proof of Burn NFTs</strong> are non-transferable certificates awarded when you burn 
          ETHO tokens at the Sacred Altar, commemorating your spiritual offering.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🔥 NFT Features</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Burn Amount</strong> - Quantity of ETHO tokens burned</li>
          <li><strong>Burn Date</strong> - Timestamp of the ceremony</li>
          <li><strong>Intention Message</strong> - Optional message set during burn</li>
          <li><strong>Visual Design</strong> - Flame intensity based on burn amount</li>
          <li><strong>Soul-Bound</strong> - Cannot be transferred (ERC721 with transfer disabled)</li>
          <li><strong>Cumulative Tracker</strong> - Shows total burns across all your NFTs</li>
        </ul>

        <p style={{ color: '#f59e0b', fontSize: '0.9rem', fontStyle: 'italic' }}>
          🔥 Your Proof of Burn NFTs are eternal records of your sacred offerings!
        </p>
      </ModalCard>

      {/* NFT Marketplace */}
      <ModalCard
        icon={TrendingUp}
        title="NFT Marketplace & Trading"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <p style={{ marginBottom: '12px' }}>
          Cross-Bred Mushroom NFTs can be traded on the integrated marketplace, with a portion of 
          sales fees supporting the DAO treasury.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🛒 Marketplace Features</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Direct Listings</strong> - Set your own price for NFTs</li>
          <li><strong>Auction System</strong> - Timed auctions for rare specimens</li>
          <li><strong>Rarity Filters</strong> - Sort by trait rarity and generation</li>
          <li><strong>Breeding History</strong> - View full genetic lineage</li>
          <li><strong>2.5% Marketplace Fee</strong> - Supports DAO treasury</li>
          <li><strong>Creator Royalties</strong> - 5% to original breeder on resales</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>💰 Pricing Dynamics</h4>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
          NFT prices are determined by rarity, generation, visual appeal, and breeding potential. 
          Rare trait combinations and early generations typically command premium prices.
        </p>
      </ModalCard>

      {/* Utility & Benefits */}
      <ModalCard
        icon={Zap}
        title="NFT Utility & Benefits"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <p style={{ marginBottom: '12px' }}>
          NFTs in the Psanctuary ecosystem provide real utility beyond just collectibility.
        </p>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>⚡ Cross-Bred Mushroom Benefits</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Breeding Rights</strong> - Use as parent for creating new NFTs</li>
          <li><strong>Staking Rewards</strong> - Earn Daily Shrooms by staking NFTs (coming soon)</li>
          <li><strong>DAO Voting Power</strong> - Bonus votes based on NFT rarity (coming soon)</li>
          <li><strong>Exclusive Access</strong> - Special events and content for holders</li>
          <li><strong>Airdrops</strong> - Receive new tokens and NFTs</li>
        </ul>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🔥 Proof of Burn Benefits</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Spiritual Recognition</strong> - Display your commitment to the path</li>
          <li><strong>Cumulative Rewards</strong> - Unlock perks based on total burns</li>
          <li><strong>Exclusive Roles</strong> - Discord roles and community status</li>
          <li><strong>Priority Access</strong> - Early access to new features</li>
        </ul>
      </ModalCard>

      {/* Collection Management */}
      <ModalCard
        icon={Users}
        title="Managing Your NFT Collection"
        gradient="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))"
        accentColor="#3b82f6"
      >
        <p style={{ marginBottom: '12px' }}>
          The NFT Collection Manager provides tools to view, organize, and manage all your NFTs 
          in one place.
        </p>

        <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>🗂️ Management Features (Coming Soon)</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Gallery View</strong> - Visual grid of all your NFTs</li>
          <li><strong>Detailed Stats</strong> - Rarity scores, traits, and metadata</li>
          <li><strong>Breeding Planner</strong> - Simulate genetic combinations</li>
          <li><strong>Portfolio Value</strong> - Track estimated collection worth</li>
          <li><strong>Transfer & Gift</strong> - Send NFTs to other wallets</li>
          <li><strong>Bulk Actions</strong> - List multiple NFTs for sale at once</li>
        </ul>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>📊 Analytics</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Collection Stats</strong> - Total NFTs, rarity breakdown</li>
          <li><strong>Breeding History</strong> - Track all your creations</li>
          <li><strong>Burn Records</strong> - Total ETHO burned and ceremonies performed</li>
          <li><strong>Market Performance</strong> - Sales history and trends</li>
        </ul>
      </ModalCard>

      {/* Future Roadmap */}
      <ModalCard
        icon={Sparkles}
        title="NFT Roadmap & Future Features"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🚀 Upcoming Features</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>3D Mushroom Models</strong> - Interactive 3D renders of NFTs</li>
          <li><strong>AR Integration</strong> - View mushrooms in augmented reality</li>
          <li><strong>NFT Staking</strong> - Earn rewards by locking NFTs</li>
          <li><strong>Breeding Tournaments</strong> - Compete to create rarest combinations</li>
          <li><strong>Physical Merch</strong> - Print your NFT on t-shirts, posters, etc.</li>
          <li><strong>Cross-Chain Bridge</strong> - Move NFTs to other blockchains</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🎯 Long-Term Vision</h4>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
          We envision a thriving NFT ecosystem where digital mushrooms become valuable assets, 
          breeding becomes an art form, and collectors build legendary collections that tell 
          the story of their spiritual journey.
        </p>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Image}
        title="Start Your NFT Collection"
        gradient="linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.15))"
        accentColor="#f97316"
      >
        <p style={{ marginBottom: '12px' }}>
          Ready to begin your journey as a mushroom cultivator and NFT collector?
        </p>

        <h4 style={{ color: '#f97316', marginBottom: '10px' }}>🍄 Getting Started</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Visit the Breeding Lab</strong> - Create your first cross-bred mushroom</li>
          <li><strong>Explore the Marketplace</strong> - Browse and purchase rare specimens</li>
          <li><strong>Burn at the Altar</strong> - Earn your first Proof of Burn NFT</li>
          <li><strong>Join the Community</strong> - Share your collection on Discord</li>
        </ul>

        <p style={{ color: '#22c55e', marginTop: '16px', fontSize: '0.95rem', fontStyle: 'italic' }}>
          🌟 Every NFT tells a story - what will yours be?
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

