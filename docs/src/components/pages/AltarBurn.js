import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, CardContent } from "../LandingPage";
import { Award, Heart, Flame, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import MycelialTitle from "../MycelialTitle";
import TransactionHistory from "../TransactionHistory";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import FlashlightCursor from "../FlashlightCursor";
import FlameIcon from "../icons/FlameIcon";
import { celebrateTransaction } from "../effects/TransactionSporeEffect";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import PageInfo from "../PageInfo";
import TrippyMushroom from "../TrippyMushroom";
import AltarBurnModal from "../modals/AltarBurnModal";
import AltarBurnTokensModal from "../modals/AltarBurnTokensModal";
import ScrollIndicator from "../ScrollIndicator";
import WalletConnectionBanner from "../WalletConnectionBanner";
import { useAccount } from "wagmi";

export default function AltarBurn() {
  const { address } = useAccount();
  const [burnAmount, setBurnAmount] = useState("");
  const [intention, setIntention] = useState("");
  const [transactions] = useState([]);

  const [expandedCard, setExpandedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTokensModalOpen, setIsTokensModalOpen] = useState(false);
  const poemContainerRef = useRef(null);

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/altar.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20px',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.14} size={800} />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="altar-title" />
      <PageInfo pageTitle="Sacred Altar" description="Transform ETHO tokens into sacred offerings through ceremonial burning. Receive Proof of Burn NFTs as eternal witnesses to your sacrifice and intention." />
      {!address && <WalletConnectionBanner message="Connect your wallet to enter the altar" />}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="altar-title">
          <MycelialTitle icon={FlameIcon} title="Sacred Altar" size={72} />
        </div>

        <p className="page-subtitle">
          Transform your tokens into sacred offerings. Burn ETHO and receive a Proof of Burn NFT.
        </p>
        <p className="page-subtitle">
          "All the wood in Lebanon's forests and all Lebanon's animals would not be enough to make a burnt offering worthy of our God."
        </p>
        <p className="page-subtitle">
          ~ Isaiah 40:18 - "To Whom can you compare God?"
        </p>
        
        {/* Learn More Button */}
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(251, 191, 36, 0.3))',
              border: '2px solid rgba(249, 115, 22, 0.5)',
              color: '#f97316',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Learn More About Altar Burn
          </motion.button>
        </div>

        {/* Understanding Altar Burn Tokens Button */}
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <motion.button
            onClick={() => setIsTokensModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(251, 191, 36, 0.3))',
              border: '2px solid rgba(249, 115, 22, 0.5)',
              color: '#f97316',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Understanding Altar Burn Tokens
          </motion.button>
        </div>

        {/* Burn Stats */}
        <div className="features-grid" style={{ marginTop: '40px', marginBottom: '60px' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Flame size={48} style={{ color: '#f97316', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Total Burned</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    0 EOT
                  </p>
                  <p className="feature-description">Offered to the treasury</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Award size={48} style={{ color: '#fbbf24', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Proof NFTs Minted</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    0
                  </p>
                  <p className="feature-description">Soulbound certificates</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Heart size={48} style={{ color: '#ec4899', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Your Offerings</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    0
                  </p>
                  <p className="feature-description">Ceremonial burns</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Burn Interface */}
        <div className="content-section">
          <h2 className="section-title">Burn an Offering</h2>
          <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
            <Card className="feature-card" style={{ width: '100%', maxWidth: '100%' }}>
              <CardContent style={{ padding: '40px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                    Amount to Burn (EOT)
                  </label>
                  <input
                    type="number"
                    value={burnAmount}
                    onChange={(e) => setBurnAmount(e.target.value)}
                    placeholder="100"
                    step="1"
                    min="0"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(249, 115, 22, 0.5)',
                      background: 'rgba(0, 0, 0, 0.3)',
                      color: 'white',
                      fontSize: '1.125rem',
                    }}
                  />
                  <p style={{ marginTop: '8px', color: '#9ca3af', fontSize: '0.875rem' }}>
                    Your Balance: 0 EOT
                  </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                    Sacred Intention
                  </label>
                  <textarea
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                    placeholder="What is your intention for this offering? (e.g., 'For healing and growth', 'In gratitude for abundance', 'To support the community')"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(249, 115, 22, 0.5)',
                      background: 'rgba(0, 0, 0, 0.3)',
                      color: 'white',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                  <p style={{ marginTop: '8px', color: '#9ca3af', fontSize: '0.875rem' }}>
                    Your intention will be recorded on-chain with your Proof of Burn NFT
                  </p>
                </div>

                <div style={{
                  marginBottom: '24px',
                  padding: '16px',
                  background: 'rgba(249, 115, 22, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                }}>
                  <h4 style={{ color: '#f97316', marginTop: 0, marginBottom: '8px', fontSize: '1rem' }}>
                    🔥 What Happens When You Burn:
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    <li>Your EOT tokens are sent to the treasury (not destroyed)</li>
                    <li>You receive a soulbound Proof of Burn NFT</li>
                    <li>Your intention is recorded on-chain forever</li>
                    <li>You contribute to the sacred economy</li>
                  </ul>
                </div>

                <Button
                  size="lg"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #f97316, #dc2626)',
                  }}
                  onClick={() => {
                    celebrateTransaction(`🔥 ${burnAmount} EOT Burned with Sacred Intention!`);
                    setTimeout(() => alert('AltarBurn contract integration coming soon! 🔥'), 500);
                  }}
                >
                  🔥 Burn Offering
                </Button>

                <p style={{ marginTop: '16px', fontSize: '0.875rem', color: '#9ca3af', textAlign: 'center' }}>
                  Smart contract integration pending
                </p>
              </CardContent>
            </Card>
          </div>
        </div>



        {/* Recent Burns */}
        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">Recent Offerings</h2>
          <div className="info-box">
            <p style={{ textAlign: 'center', color: '#9ca3af', fontStyle: 'italic' }}>
              No offerings yet. Be the first to make a sacred burn! 🔥
            </p>
          </div>
        </div>

        {/* Your Proof of Burn NFTs */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Your Proof of Burn NFTs</h2>
          <div className="info-box">
            <p style={{ textAlign: 'center', color: '#9ca3af', fontStyle: 'italic' }}>
              Connect your wallet to view your Proof of Burn certificates
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">The Sacred Burn Ceremony</h2>
          <div className="info-box">
            <h3 style={{ color: '#f97316', marginTop: 0 }}>🔥 Proof-of-Giving Tokenomics</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.8' }}>
              Unlike traditional token burns that destroy value, the Ethereal Offering uses a "Proof-of-Giving" model.
              When you burn EOT tokens at the altar:
            </p>
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Tokens Go to Treasury:</strong> Your EOT tokens are transferred to the DAO treasury, not destroyed</li>
              <li><strong>Real Value Flows:</strong> The treasury holds real crypto (ETH, USDC) from the crowdsale</li>
              <li><strong>Community Benefit:</strong> Your offering funds ceremonies, scholarships, and community projects</li>
              <li><strong>Permanent Record:</strong> You receive a soulbound Proof of Burn NFT with your intention</li>
              <li><strong>Sacred Exchange:</strong> You give tokens, the community receives resources, you receive spiritual merit</li>
            </ol>
          </div>
        </div>

        {/* Spiritual Significance */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Spiritual Significance</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <h3>🙏 Gratitude</h3>
              <p>Express thanks for abundance by giving back to the community</p>
            </div>
            <div className="principle-card">
              <h3>🌊 Non-Attachment</h3>
              <p>Practice letting go of material wealth for spiritual growth</p>
            </div>
            <div className="principle-card">
              <h3>🤝 Reciprocity</h3>
              <p>Participate in the sacred economy of giving and receiving</p>
            </div>
            <div className="principle-card">
              <h3>✨ Intention</h3>
              <p>Infuse your offering with purpose and meaning</p>
            </div>
            <div className="principle-card">
              <h3>🔥 Transformation</h3>
              <p>Transform digital tokens into real-world impact</p>
            </div>
            <div className="principle-card">
              <h3>📜 Legacy</h3>
              <p>Leave a permanent record of your contribution on-chain</p>
            </div>
          </div>
        </div>

        {/* Contract Info */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <div className="info-box" style={{ background: 'rgba(124, 58, 237, 0.1)', borderColor: 'rgba(124, 58, 237, 0.3)' }}>
            <h3 style={{ color: '#a78bfa', marginTop: 0 }}>📋 Smart Contract Details</h3>
            <p style={{ color: '#d1d5db', marginBottom: '12px' }}>
              The AltarBurn contract handles the ceremonial burning process:
            </p>
            <ul style={{ paddingLeft: '20px', color: '#d1d5db', lineHeight: '1.8', margin: 0 }}>
              <li><strong>burnOffering():</strong> Burns EOT tokens and mints Proof of Burn NFT</li>
              <li><strong>Treasury:</strong> Receives all burned tokens for community use</li>
              <li><strong>ProofOfBurn NFT:</strong> Soulbound (non-transferable) certificate</li>
              <li><strong>On-Chain Intention:</strong> Your message is stored permanently</li>
            </ul>

        {/* Transactions */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <TransactionHistory transactions={transactions} title="Altar Burn History" compact={true} />
        </div>

          </div>
        </div>

        {/* Scrolling Poem Section */}
        <div className="content-section" style={{ marginTop: '60px', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ color: '#fbbf24', marginBottom: '32px' }}>
            🕊️ Poem of the Sacred Offering
          </h2>
          <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
            <div
              ref={poemContainerRef}
              style={{
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.1))',
                border: '2px solid rgba(124,58,237,0.3)',
                borderRadius: '20px',
                maxHeight: '400px',
                overflowY: 'auto',
                boxShadow: '0 8px 32px rgba(124,58,237,0.2)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.1rem',
                  lineHeight: '2',
                  color: '#d1d5db',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}
              >
              <p style={{ marginBottom: '24px', color: '#a78bfa' }}>
                In the digital flame, we release what we hold,<br />
                Not for destruction, but transformation untold.<br />
                Each token a prayer, each burn a release,<br />
                From grasping to giving, from chaos to peace.
              </p>
              <p style={{ marginBottom: '24px', color: '#ec4899' }}>
                The altar receives what we freely bestow,<br />
                Not into the void, but to help others grow.<br />
                Our offerings flow to the treasury's care,<br />
                Funding ceremonies, scholarships to share.
              </p>
              <p style={{ marginBottom: '24px', color: '#fbbf24' }}>
                A soulbound witness, the NFT remains,<br />
                Eternal proof of our spiritual gains.<br />
                Not wealth accumulated, but wealth set free,<br />
                In service of healing, recovery, and we.
              </p>
              <p style={{ marginBottom: '24px', color: '#22c55e' }}>
                Like mushrooms that fruit from mycelial thread,<br />
                Our gifts nourish networks, the living, the dead.<br />
                What dies in the flame is reborn in the whole,<br />
                The blockchain remembers each generous soul.
              </p>
              <p style={{ marginBottom: 0, color: '#a78bfa', fontWeight: 'bold' }}>
                So burn with intention, with gratitude, grace,<br />
                Transform your abundance to bless this sacred space.<br />
                In letting go fully, we find what is true:<br />
                The more that we give, the more we renew.
              </p>
              </motion.div>
            </div>

            {/* Scroll Indicator - Outside scrollable container */}
            <ScrollIndicator
              containerRef={poemContainerRef}
              color="#fbbf24"
              shadowColor="rgba(251, 191, 36, 0.4)"
            />
          </div>
        </div>

        {/* Expandable Ceremonial Cards */}
        <div className="content-section" style={{ marginTop: '60px', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ color: '#ec4899', marginBottom: '32px' }}>
            🔥 Ceremonial Guidance
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '20px' }}>

            {/* Card 1: Preparing for the Ceremony */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.05))',
              border: '2px solid rgba(124,58,237,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedCard === 1 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#a78bfa',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span>🕯️ Preparing for the Ceremony</span>
                {expandedCard === 1 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <AnimatePresence>
                {expandedCard === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <p><strong>Set Your Intention:</strong> Before burning, take time to reflect on why you're making this offering. What are you releasing? What are you inviting in?</p>
                      <p><strong>Create Sacred Space:</strong> Light a candle, burn incense, or play ceremonial music. Make this moment special.</p>
                      <p><strong>Ground Yourself:</strong> Take three deep breaths. Feel your connection to the earth and the digital realm.</p>
                      <p><strong>Write Your Intention:</strong> Craft a meaningful message that will be stored on-chain forever. Speak from the heart.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: The Burning Ritual */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(251,191,36,0.05))',
              border: '2px solid rgba(236,72,153,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedCard === 2 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#ec4899',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(236,72,153,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span>🔥 The Burning Ritual</span>
                {expandedCard === 2 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <AnimatePresence>
                {expandedCard === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <p><strong>Enter the Amount:</strong> Choose how many ETHO tokens you wish to offer. There is no minimum—give what feels right.</p>
                      <p><strong>Speak Your Intention:</strong> Type your message into the intention field. This will be permanently recorded on the blockchain.</p>
                      <p><strong>Confirm the Transaction:</strong> When ready, click "Burn Offering" and approve the transaction in your wallet.</p>
                      <p><strong>Witness the Transformation:</strong> Watch as your tokens flow to the treasury and your Proof of Burn NFT is minted.</p>
                      <p><strong>Receive Your NFT:</strong> The soulbound NFT appears in your wallet as eternal proof of your offering.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: After the Offering */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(34,197,94,0.05))',
              border: '2px solid rgba(251,191,36,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedCard === 3 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fbbf24',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(251,191,36,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span>✨ After the Offering</span>
                {expandedCard === 3 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <AnimatePresence>
                {expandedCard === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <p><strong>Sit in Gratitude:</strong> Take a moment to feel the completion of the ceremony. Notice any shifts in your energy or awareness.</p>
                      <p><strong>Journal Your Experience:</strong> Write about what you released and what you're calling in. Integration is key.</p>
                      <p><strong>Share (Optional):</strong> If you feel called, share your experience with the community in Discord or Telegram.</p>
                      <p><strong>Track Your Impact:</strong> Visit the leaderboard to see how your offering contributes to the collective treasury.</p>
                      <p><strong>Return When Ready:</strong> The altar is always here. Burn as often as feels aligned with your spiritual practice.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Trippy Mushrooms - Decorative - INCREASED COUNT & VARIED SIZES */}
        {[
          // Corners and edges
          { top: '8%', left: '8%', delay: 0, size: 85 },
          { top: '15%', right: '12%', delay: 1.5, size: 72 },
          { bottom: '12%', left: '15%', delay: 3, size: 95 },
          { bottom: '20%', right: '8%', delay: 2, size: 62 },
          { top: '45%', left: '3%', delay: 1, size: 78 },
          { top: '55%', right: '5%', delay: 2.5, size: 88 },
          // Closer to content
          { top: '35%', left: '25%', delay: 1.8, size: 68 },
          { top: '40%', right: '22%', delay: 2.2, size: 75 },
          { top: '50%', left: '28%', delay: 0.8, size: 60 },
          { top: '48%', right: '26%', delay: 1.3, size: 70 },
          { bottom: '35%', left: '20%', delay: 2.8, size: 78 },
          { bottom: '38%', right: '18%', delay: 1.6, size: 65 },
          // More mushrooms with varied sizes
          { top: '22%', left: '18%', delay: 0.5, size: 55 },
          { top: '28%', right: '16%', delay: 2.0, size: 82 },
          { top: '60%', left: '12%', delay: 1.4, size: 70 },
          { top: '65%', right: '14%', delay: 2.6, size: 58 },
          { bottom: '28%', left: '10%', delay: 0.9, size: 90 },
          { bottom: '45%', right: '12%', delay: 1.9, size: 66 },
          { top: '38%', left: '8%', delay: 2.3, size: 74 },
          { top: '42%', right: '10%', delay: 1.1, size: 80 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              pointerEvents: 'none',
              zIndex: 2
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0, 1.1, 1],
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              delay: pos.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut'
            }}
          >
            <TrippyMushroom size={pos.size} delay={pos.delay} />
          </motion.div>
        ))}

        <Footer />
      </motion.div>

      {/* Altar Burn Modal */}
      <AltarBurnModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    {/* Altar Burn Tokens Modal */}
    <AltarBurnTokensModal isOpen={isTokensModalOpen} onClose={() => setIsTokensModalOpen(false)} />
    </div>
  );
}

