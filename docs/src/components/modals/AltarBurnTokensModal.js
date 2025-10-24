import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Flame, Award, TrendingUp, Zap, Shield, Sparkles } from "lucide-react";

export default function AltarBurnTokensModal({ isOpen, onClose }) {
  // Flame Emoji SVG
  const FlameEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#f97316" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="bold">🔥</text>
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
      title="Understanding Altar Burn Tokens"
      subtitle="Sacred Offerings & Proof of Burn NFTs"
      titleIcon={FlameEmojiIcon}
      titleColor="#f97316"
      borderColor="rgba(249, 115, 22, 0.5)"
      shadowColor="rgba(249, 115, 22, 0.4)"
      scrollbarColor="#f97316"
    >
      {/* ETHO Tokens (ERC20) - From Dropdown */}
      <ModalCard
        icon={Flame}
        title="🔥 ETHO Tokens (ERC20) - The Material Offering"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>
          Burn your <strong>ETHO (Ethereal Token)</strong> ERC20 tokens as a ceremonial offering.
          Like <strong>sublimation in alchemy</strong>, where matter transforms from solid to gas without
          passing through liquid, your tokens undergo a sacred transformation—transcending their material
          form to become eternal proof of your spiritual offering.
        </p>
      </ModalCard>

      {/* Proof of Burn NFT (ERC721) - From Dropdown */}
      <ModalCard
        icon={Award}
        title="🏆 Proof of Burn NFT (ERC721) - The Spiritual Light"
        gradient="linear-gradient(135deg, rgba(124,58,237,0.15), rgba(109,40,217,0.15))"
        accentColor="#7c3aed"
      >
        <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>
          In return, receive a unique <strong>Proof of Burn NFT</strong> (ERC721 soulbound token)
          that permanently records your offering on the blockchain. This is the alchemical principle of
          <strong> releasing oneself from material attachment (magic) into spiritual light (divine consciousness)</strong>.
          Your non-transferable certificate serves as an eternal testament to your sacred transformation.
        </p>
      </ModalCard>

      {/* Overview */}
      <ModalCard
        icon={Flame}
        title="The Sacred Altar"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>Altar Burn</strong> is a ceremonial mechanism where community members make <strong>sacred offerings</strong> by burning ETHO tokens in exchange for unique, non-fungible <strong>Proof of Burn (POB)</strong> NFTs.
        </p>

        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>🔥 The Burning Ceremony</h4>
        <p style={{ marginBottom: '12px' }}>
          When you burn ETHO tokens at the altar, they are <strong>permanently removed from circulation</strong>, creating deflationary pressure while generating a unique NFT that represents your offering.
        </p>

        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.3)' }}>
          <p style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '8px' }}>✨ What You Receive</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Unique Proof of Burn NFT</li>
            <li>Permanent record of your offering</li>
            <li>Enhanced community status</li>
            <li>Potential future utility and rewards</li>
          </ul>
        </div>
      </ModalCard>

      {/* Token Types */}
      <ModalCard
        icon={Award}
        title="Altar Burn Token Types"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🎨 NFT Categories</h4>
        
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '6px' }}>🔥 Proof of Burn (POB) NFTs</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li><strong>Unique ID</strong> - Each burn generates a one-of-a-kind NFT</li>
            <li><strong>Burn Amount</strong> - Records exact ETHO amount burned</li>
            <li><strong>Timestamp</strong> - Permanent record of ceremony date/time</li>
            <li><strong>Burner Address</strong> - Your wallet address as the offerer</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '6px' }}>🏆 Tiered Offerings</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li><strong>Initiate</strong> - 1-10 ETHO burned (Bronze tier)</li>
            <li><strong>Devotee</strong> - 11-50 ETHO burned (Silver tier)</li>
            <li><strong>Steward</strong> - 51-100 ETHO burned (Gold tier)</li>
            <li><strong>Elder</strong> - 100+ ETHO burned (Platinum tier)</li>
          </ul>
        </div>

        <p style={{ color: '#9ca3af', fontSize: '0.9rem', fontStyle: 'italic' }}>
          Higher tiers may unlock special privileges, voting power, or exclusive access to future features.
        </p>
      </ModalCard>

      {/* Deflationary Mechanics */}
      <ModalCard
        icon={TrendingUp}
        title="Deflationary Tokenomics"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>📉 Reducing Supply</h4>
        <p style={{ marginBottom: '12px' }}>
          Every ETHO token burned at the altar is <strong>permanently removed from circulation</strong>, creating a deflationary effect that can increase the value of remaining tokens.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🔄 The Burn Cycle</h4>
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li>Community member sends ETHO to burn contract</li>
          <li>Tokens are permanently locked (sent to 0x000...dead address)</li>
          <li>Unique POB NFT is minted to burner's wallet</li>
          <li>Total supply decreases, scarcity increases</li>
          <li>Remaining ETHO becomes more valuable</li>
        </ol>

        <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.3)' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '8px' }}>📊 Economic Impact</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Reduces circulating supply</li>
            <li>Increases scarcity over time</li>
            <li>Rewards long-term holders</li>
            <li>Creates sustainable value appreciation</li>
          </ul>
        </div>
      </ModalCard>

      {/* NFT Utility */}
      <ModalCard
        icon={Zap}
        title="POB NFT Utility"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>⚡ Current Benefits</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Proof of Commitment</strong> - Demonstrates dedication to the mission</li>
          <li><strong>Community Recognition</strong> - Visible status in the ecosystem</li>
          <li><strong>Governance Weight</strong> - Potential voting power multiplier</li>
          <li><strong>Collectible Value</strong> - Unique, tradeable NFT asset</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🔮 Future Utility (Proposed)</h4>
        <div style={{ background: 'rgba(251,191,36,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(251,191,36,0.3)' }}>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li><strong>Exclusive Access</strong> - Special events, retreats, or ceremonies</li>
            <li><strong>Yield Boosts</strong> - Enhanced mushroom farming rates</li>
            <li><strong>Priority Allocation</strong> - Early access to new features or tokens</li>
            <li><strong>Cross-Breeding Bonuses</strong> - Special traits in NFT lab</li>
            <li><strong>Treasury Rewards</strong> - Periodic airdrops or distributions</li>
          </ul>
        </div>

        <p style={{ marginTop: '12px', color: '#9ca3af', fontSize: '0.9rem', fontStyle: 'italic' }}>
          Future utility will be determined by DAO governance proposals.
        </p>
      </ModalCard>

      {/* Ceremonial Significance */}
      <ModalCard
        icon={Sparkles}
        title="Ceremonial & Spiritual Significance"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🕉️ Sacred Offering</h4>
        <p style={{ marginBottom: '12px' }}>
          The act of burning tokens at the altar is more than an economic transaction—it's a <strong>ceremonial offering</strong> that symbolizes:
        </p>

        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Sacrifice</strong> - Giving up material value for spiritual purpose</li>
          <li><strong>Commitment</strong> - Demonstrating dedication to the community</li>
          <li><strong>Transformation</strong> - Converting tokens into permanent legacy</li>
          <li><strong>Gratitude</strong> - Expressing thanks for the sacred work</li>
        </ul>

        <div style={{ background: 'rgba(236,72,153,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(236,72,153,0.3)' }}>
          <p style={{ color: '#ec4899', fontWeight: 600, marginBottom: '8px' }}>✨ The Ritual</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            When you approach the altar, you're participating in a <strong>digital ceremony</strong> that mirrors ancient practices of offering and sacrifice. Your POB NFT becomes a permanent testament to your participation in this sacred work.
          </p>
        </div>
      </ModalCard>

      {/* How to Burn */}
      <ModalCard
        icon={Flame}
        title="How to Make an Offering"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>🔥 Step-by-Step Process</h4>
        
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Connect Your Wallet</strong> - Ensure you have ETHO tokens</li>
          <li><strong>Enter Burn Amount</strong> - Choose how much ETHO to offer</li>
          <li><strong>Review Transaction</strong> - Confirm the burn is permanent</li>
          <li><strong>Approve & Execute</strong> - Sign the transaction in MetaMask</li>
          <li><strong>Receive POB NFT</strong> - Unique NFT minted to your wallet</li>
          <li><strong>Celebrate!</strong> - Your offering is complete 🎉</li>
        </ol>

        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.3)' }}>
          <p style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '8px' }}>⚠️ Important Notes</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Burned tokens are <strong>permanently destroyed</strong></li>
            <li>This action <strong>cannot be reversed</strong></li>
            <li>Only burn what you can afford to lose</li>
            <li>POB NFTs are yours to keep forever</li>
          </ul>
        </div>
      </ModalCard>

      {/* Security */}
      <ModalCard
        icon={Shield}
        title="Security & Transparency"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🔒 Smart Contract Security</h4>
        <p style={{ marginBottom: '12px' }}>
          The Altar Burn contract has been <strong>audited and verified</strong> to ensure your offerings are handled securely and transparently.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>📊 On-Chain Verification</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li>All burns are publicly verifiable on the blockchain</li>
          <li>POB NFT metadata is permanently stored on-chain</li>
          <li>Total burn statistics are transparent and auditable</li>
          <li>No centralized control over burned tokens</li>
        </ul>

        <div style={{ background: 'rgba(96,165,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(96,165,250,0.3)' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '8px' }}>✅ Trust Guarantees</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Open-source contract code</li>
            <li>Third-party security audit</li>
            <li>Immutable burn records</li>
            <li>Community-governed upgrades</li>
          </ul>
        </div>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Sparkles}
        title="Join the Sacred Ceremony"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <p style={{ marginBottom: '12px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          By making an offering at the altar, you become part of a <strong>sacred tradition</strong> that combines ancient ceremonial practices with modern blockchain technology.
        </p>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)', marginBottom: '16px' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px' }}>🌟 Your Offering Supports</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Deflationary tokenomics for all holders</li>
            <li>Long-term ecosystem sustainability</li>
            <li>Sacred mushroom cultivation and research</li>
            <li>Community education and outreach</li>
          </ul>
        </div>

        <p style={{ textAlign: 'center', color: '#a78bfa', fontWeight: 600, fontSize: '1.1rem' }}>
          🔥 Make your sacred offering today 🔥
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

