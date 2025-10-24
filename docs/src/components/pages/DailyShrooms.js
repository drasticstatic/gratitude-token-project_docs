import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardContent } from "../LandingPage";
import MycelialTitle from "../MycelialTitle";
import { HelpCircle } from "lucide-react";
import TransactionHistory from "../TransactionHistory";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import NeighboringNetwork from "../NeighboringNetwork";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import MushroomFarm from "../MushroomFarm";
import ImageGallery from "../ImageGallery";
import FlashlightCursor from "../FlashlightCursor";
import MushroomClusterIcon from "../icons/MushroomClusterIcon";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import PageInfo from "../PageInfo";
import TrippyMushroom from "../TrippyMushroom";
import WalletConnectionBanner from "../WalletConnectionBanner";
import { useAccount } from "wagmi";
// Lazy-loaded modals for bundle size
const DailyShroomsModal = lazy(() => import("../modals/DailyShroomsModal"));
const FarmingMechanicsModal = lazy(() => import("../modals/FarmingMechanicsModal"));

export default function DailyShrooms() {
  const { address } = useAccount();
  const transactions = [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFarmingModalOpen, setIsFarmingModalOpen] = useState(false);

  // Mirror SHROOM NFT count from MushroomFarm via custom event
  const [shroomCount, setShroomCount] = useState(() => parseInt(localStorage.getItem('shroomNFTCollected') || '0'));
  useEffect(() => {
    const handler = (e) => {
      const next = typeof e.detail?.count === 'number'
        ? e.detail.count
        : parseInt(localStorage.getItem('shroomNFTCollected') || '0');
      setShroomCount(next);
    };
    window.addEventListener('shroomNFTUpdated', handler);
    return () => window.removeEventListener('shroomNFTUpdated', handler);
  }, []);
  // Keep demo state in sync with farm via custom event
  const [demoActive, setDemoActive] = useState(() => localStorage.getItem('mushroomFarmDemo') === 'true');
  useEffect(() => {
    const handler = (e) => setDemoActive(!!e.detail?.demoMode);
    window.addEventListener('mushroomFarmDemoChanged', handler);
    return () => window.removeEventListener('mushroomFarmDemoChanged', handler);
  }, []);

  // Local helper mirrors farm logic; uses synced demoActive
  const canCollectDaily = () => {
    if (demoActive) return true;
    const saved = parseInt(localStorage.getItem('lastCollectTime') || '0');
    if (!saved) return true;
    return Date.now() - saved >= 24 * 60 * 60 * 1000;
  };


  // Cultivation Gallery - ALL real photos from cultivation
  const cultivationGallery = [
    `${process.env.PUBLIC_URL}/images/gallery/IMG_4612.png`,
    `${process.env.PUBLIC_URL}/images/gallery/IMG_4747.png`,
    `${process.env.PUBLIC_URL}/images/gallery/IMG_4788.png`,
    `${process.env.PUBLIC_URL}/images/gallery/IMG_4790.png`,
    `${process.env.PUBLIC_URL}/images/gallery/IMG_4817.png`,
    `${process.env.PUBLIC_URL}/images/gallery/IMG_4876.png`,
    `${process.env.PUBLIC_URL}/images/gallery/IMG_6088.png`,
  ];

  // Digital NFT Collection - Placeholders for future artwork
  const digitalNFTCollection = [
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
  ];

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/pins.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.14} size={800} />
      <NeighboringNetwork />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="daily-shrooms-title" />
      <PageInfo pageTitle="Daily Shrooms" description="Claim your daily mushroom NFT and participate in the sacred cultivation cycle. Collect unique strains and contribute to the mycelial network." />
      {!address && <WalletConnectionBanner message="Connect your wallet to farm and view your collection" />}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="daily-shrooms-title">
          <MycelialTitle icon={MushroomClusterIcon} title="Daily Shrooms" size={88} />
        </div>

        <p className="page-subtitle">
          "Discipline grows roots." - Oracle of Fruit
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
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3))',
              border: '2px solid rgba(251, 191, 36, 0.5)',
              color: '#fbbf24',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Learn More About Daily Shrooms
          </motion.button>
        </div>

        {/* Farming Mechanics Button */}
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <motion.button
            onClick={() => setIsFarmingModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3))',
              border: '2px solid rgba(251, 191, 36, 0.5)',
              color: '#fbbf24',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Mining & Farming Operation Proposal
          </motion.button>
        </div>


        {/* Mushroom Farm */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <MushroomFarm />
        </div>

        {/* Digital NFT Collection */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <ImageGallery images={digitalNFTCollection} title="Your Shrooms Harvested as NFTs" maxDisplay={5} />
        </div>

        <div className="content-section">
          <h2 className="section-title">Daily Ritual Farming</h2>
          <p className="section-text">
            Log in daily to farm or mine your mushroom NFTs and watch your collection grow.
            Each day brings a new opportunity to cultivate your spiritual garden.
          </p>
        </div>

        <div className="features-grid" style={{ marginTop: '40px' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">🍄 Daily Mint</h3>
                <p className="feature-description">
                  Claim your daily mushroom NFT. Each one is unique with its own oracle phrase and traits.
                </p>
                {canCollectDaily() ? (
                  <Button
                    size="lg"
                    style={{
                      marginTop: '16px',
                      width: '100%',
                      background: canCollectDaily()
                        ? 'linear-gradient(135deg, #ec48998d, #7c3aed, #ec48998d)'
                        : 'rgba(124, 58, 237, 0.3)',
                      color: 'white',
                      borderWidth: canCollectDaily() ? '2.2px' : '0.5px',
                      borderColor: canCollectDaily() ? 'rgba(124, 58, 237, 0.8)' : 'rgba(124, 58, 237, 0.2)',
                      borderRadius: '8px',
                      cursor: canCollectDaily() ? 'pointer' : 'not-allowed',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      boxShadow: canCollectDaily() ? '0 11px 44px rgba(124, 58, 237, 0.5)' : 'none'
                    }}
                    onClick={() => {
                      // Trigger the same daily collect the farm uses (Farm handles toast + alert)
                      window.dispatchEvent(new CustomEvent('triggerDailyCollect'));
                    }}
                  >
                    You can also click HERE if you forgot to CLAIM your daily SHROOM NFT up above!
                  </Button>
                ) : (
                  <div
                    style={{
                      marginTop: '16px',
                      width: '100%',
                      padding: '12px 16px',
                      textAlign: 'center',
                      color: '#d1d5db',
                      background: 'rgba(124,58,237,0.15)',
                      border: '1px dashed rgba(124,58,237,0.35)',
                      borderRadius: '8px',
                      fontWeight: 600
                    }}
                  >
                    ⏰ Come back tomorrow for another SHROOM NFT
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">📊 Your Collection</h3>
                <p className="feature-description">
                  View your growing collection of daily mushrooms. Track your streak and discover rare variants.
                </p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(124, 58, 237, 0.2)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>{shroomCount}</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>Mushrooms Collected</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">🔥 Current Streak</h3>
                <p className="feature-description">
                  Maintain your daily practice. Longer streaks unlock special seasonal mutations.
                </p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(251, 146, 60, 0.2)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>0 days</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>Keep the flame alive!</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">How It Works</h2>
          <div className="info-box">
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Connect Your Wallet:</strong> Link your Web3 wallet to participate</li>
              <li><strong>Daily Check-in:</strong> Return each day to claim your mushroom NFT</li>
              <li><strong>Build Your Collection:</strong> Each mushroom is unique with different traits and oracle wisdom</li>
              <li><strong>Maintain Streaks:</strong> Consecutive days unlock rare mutations and seasonal variants</li>
              <li><strong>Use in Breeding:</strong> Daily mushrooms can be combined to create rare cross-bred strains</li>
            </ol>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Mushroom Traits</h2>
          <div className="traits-grid">
            <div className="trait-box">
              <span className="trait-label">Strain:</span>
              <span className="trait-value">Golden Teacher, Blue Meanie, Penis Envy, etc.</span>
            </div>
            <div className="trait-box">
              <span className="trait-label">Rarity:</span>
              <span className="trait-value">Common, Uncommon, Rare, Epic, Legendary</span>
            </div>
            <div className="trait-box">
              <span className="trait-label">Oracle:</span>
              <span className="trait-value">Unique wisdom phrase from the Oracle of Fruit</span>
            </div>
            <div className="trait-box">
              <span className="trait-label">Season:</span>
              <span className="trait-value">Spring, Summer, Fall, Winter, Equinox, Solstice</span>
            </div>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '40px' }}>
          <TransactionHistory transactions={transactions} title="Your Daily Activity" compact={true} />
        </div>

        {/* Cultivation Photo Gallery */}
        <div className="content-section" style={{ marginTop: '60px' }}>
          <ImageGallery images={cultivationGallery} title="Mushroom Cultivation Gallery" />
        </div>

        <Footer />
      </motion.div>

      {/* Trippy Mushrooms - Decorative - INCREASED COUNT & VARIED SIZES */}
      {[
        { top: '12%', left: '6%', delay: 0, size: 72 },
        { top: '25%', right: '8%', delay: 1.5, size: 68 },
        { top: '50%', left: '4%', delay: 2.5, size: 78 },
        { bottom: '20%', right: '6%', delay: 1.2, size: 70 },
        // NEW: More mushrooms
        { top: '18%', left: '12%', delay: 0.8, size: 58 },
        { top: '35%', right: '10%', delay: 2.0, size: 85 },
        { top: '60%', left: '8%', delay: 1.6, size: 64 },
        { bottom: '30%', right: '12%', delay: 2.3, size: 76 },
        { top: '42%', left: '6%', delay: 1.0, size: 80 },
        { bottom: '12%', left: '10%', delay: 2.8, size: 62 }
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, -15, 0],
            rotate: [0, 10, -8, 0],
            scale: [1, 1.08, 0.96, 1]
          }}
          transition={{
            duration: 7,
            delay: pos.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            ...pos,
            filter: 'drop-shadow(0 0 10px currentColor)',
            zIndex: 10000, // Above modal backdrop, below modal content
            pointerEvents: 'none'
          }}
        >
          <TrippyMushroom size={pos.size} delay={pos.delay} />
        </motion.div>
      ))}

      {/* Lazy modals wrapped in Suspense */}
      <Suspense fallback={<div style={{textAlign:'center', color:'#a78bfa', padding:'12px'}}>Loading…</div>}>
        <DailyShroomsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <FarmingMechanicsModal isOpen={isFarmingModalOpen} onClose={() => setIsFarmingModalOpen(false)} />
      </Suspense>
    </div>
  );
}

