import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../LandingPage";
import MycelialTitle from "../MycelialTitle";
import { ShieldCheck, Shield, HelpCircle } from "lucide-react";
import { useAccount } from "wagmi";
import TransactionHistory from "../TransactionHistory";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import NeighboringNetwork from "../NeighboringNetwork";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import ImageGallery from "../ImageGallery";
import FlashlightCursor from "../FlashlightCursor";
import BeakerIcon from "../icons/BeakerIcon";
import { celebrateTransaction } from "../effects/TransactionSporeEffect";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import PageInfo from "../PageInfo";
import TrippyMushroom from "../TrippyMushroom";
import CrossBreedingModal from "../modals/CrossBreedingModal";
import CrossBreedingTokensModal from "../modals/CrossBreedingTokensModal";
import BreedingLabAccessModal from "../modals/BreedingLabAccessModal";
import BreedingLabRestrictedModal from "../modals/BreedingLabRestrictedModal";
import WalletConnectionBanner from "../WalletConnectionBanner";

export default function CrossBreeding() {
  const { address } = useAccount();
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [isRestrictedModalOpen, setIsRestrictedModalOpen] = useState(false);
  const [transactions] = useState([]);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [isLabAccessModalOpen, setIsLabAccessModalOpen] = useState(false);

  // Cross-Bred Collection images - ALL placeholders (digital NFTs to be created)
  const nftGallery = [
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
  ];

  // Load breeding whitelist from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('breeding_whitelist');
      const arr = raw ? JSON.parse(raw) : [];
      const addrLc = (address || '').toLowerCase();
      setIsWhitelisted(arr.map(a => a.toLowerCase()).includes(addrLc));
    } catch {}
  }, [address]);

  const enterBreedingLab = () => {
    if (!isWhitelisted) {
      setIsRestrictedModalOpen(true);
      return;
    }
    celebrateTransaction('🧬 Cross-Breeding Initiated! A hybrid is on its way!');
    setIsLabAccessModalOpen(true);
  };
  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/agar.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.14} size={800} />
      <NeighboringNetwork />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="breeding-title" />
      <PageInfo pageTitle="Cross-Breeding" description="Cross-breed your mushroom NFTs to create rare hybrid strains. Whitelist-gated experimental cultivation for advanced mycelial gardeners." />
      {!address && <WalletConnectionBanner message="Connect your wallet to breed and view your collection" />}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="breeding-title">
          <MycelialTitle icon={BeakerIcon} title="Cross-Breeding" size={72} />
        </div>

        {/* Prominent Access Badge */}
        <div style={{ maxWidth: '600px', margin: '24px auto' }}>
          <div className="info-box" style={{
            background: isWhitelisted
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(124, 58, 237, 0.2))'
              : 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(220, 38, 38, 0.2))',
            borderColor: isWhitelisted ? 'rgba(34, 197, 94, 0.5)' : 'rgba(245, 158, 11, 0.5)',
            textAlign: 'center',
            padding: '20px'
          }}>
            <h3 style={{
              margin: '0 0 8px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              color: isWhitelisted ? '#22c55e' : '#f59e0b',
              fontSize: '1.5rem'
            }}>
              {isWhitelisted ? (
                <><ShieldCheck size={28} /> Breeding Access: Granted</>
              ) : (
                <><Shield size={28} /> Breeding Access: Restricted</>
              )}
            </h3>
            <div style={{ margin: 0, color: '#d1d5db' }}>
              {isWhitelisted ? (
                <>
                  <p style={{ margin: '0 0 8px 0' }}>You have been granted access to the Breeding Lab.</p>
                  <p style={{ margin: 0 }}>Proceed to create rare hybrid strains!</p>
                </>
              ) : (
                <>
                  <p style={{ margin: '0 0 8px 0' }}>The Breeding Lab is accessible by invitation only.</p>
                  <p style={{ margin: 0 }}>Contact a steward for access.</p>
                </>
              )}
            </div>
          </div>
        </div>

        <p className="page-subtitle">
          "The fruit decays, the vision remains." - Oracle of Fruit
        </p>

        {/* Modal Buttons */}
        <div style={{ textAlign: 'center', margin: '20px auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          {/* Learn More About Cross-Breeding */}
          <motion.button
            onClick={() => setIsInfoModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(167, 139, 250, 0.3))',
              border: '2px solid rgba(167, 139, 250, 0.5)',
              color: '#a78bfa',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} />
            Learn More About Cross-Breeding
          </motion.button>

          {/* Understanding Tokens */}
          <motion.button
            onClick={() => setIsTokenModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(167, 139, 250, 0.3))',
              border: '2px solid rgba(167, 139, 250, 0.5)',
              color: '#a78bfa',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(167, 139, 250, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} />
            Understanding Cross-Breeding Tokens
          </motion.button>

          {/* Enter Breeding Lab - Moved from Spore Alchemy card */}
          <motion.button
            onClick={enterBreedingLab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: isWhitelisted
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(22, 163, 74, 0.4))'
                : 'linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(220, 38, 38, 0.4))',
              border: isWhitelisted
                ? '2px solid rgba(34, 197, 94, 0.6)'
                : '2px solid rgba(245, 158, 11, 0.6)',
              color: isWhitelisted ? '#22c55e' : '#f59e0b',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(8px)',
              boxShadow: isWhitelisted
                ? '0 6px 16px rgba(34, 197, 94, 0.5)'
                : '0 6px 16px rgba(245, 158, 11, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            {isWhitelisted ? <ShieldCheck size={22} /> : <Shield size={22} />}
            Enter Breeding Lab
          </motion.button>
        </div>

        {/* Cross-Bred Collection */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <ImageGallery images={nftGallery} title="Your Cross-Bred NFT Shroom Collection" maxDisplay={5} />
        </div>

        <div className="content-section">
          <h2 className="section-title">Mycelial Fusion Alchemy</h2>
          <p className="section-text">
            Combine different mushroom NFTs to unlock rare hybrid strains and seasonal evolutions.
            Each fusion creates a unique offspring with blended traits from its parents.
          </p>
        </div>

        <div className="features-grid" style={{ marginTop: '40px' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">🧬 Spore Alchemy</h3>
                <p className="feature-description">
                  Select two or more mushrooms from your collection to create a new cross-bred strain.
                  Combine genetic traits to discover unique hybrid varieties.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">🌌 Seasonal Mutations</h3>
                <p className="feature-description">
                  Certain mushrooms mutate automatically during equinoxes and solstices.
                </p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>Next Event:</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>Winter Solstice 2025</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">🏆 Rare Discoveries</h3>
                <p className="feature-description">
                  Be the first to discover new strains and earn community recognition.
                </p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(251, 191, 36, 0.2)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>Strains Found:</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>0 / ∞</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">Breeding Mechanics</h2>
          <div className="info-box">
            <h3 style={{ marginTop: 0 }}>How Cross-Breeding Works:</h3>
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Select Parents:</strong> Choose 2+ mushroom NFTs from your collection</li>
              <li><strong>Spore Alchemy:</strong> Burn/combine via the Spore Alchemy Contract</li>
              <li><strong>New Strain:</strong> Receive a unique offspring with mixed metadata traits</li>
              <li><strong>Discovery Bonus:</strong> First-time strain discoveries earn special recognition</li>
              <li><strong>Seasonal Timing:</strong> Breeding during special events unlocks rare mutations</li>
            </ol>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Example Combinations</h2>
          <div className="breeding-examples">
            <div className="breeding-card">
              <div className="breeding-formula">
                <span className="parent">🍄 Golden Teacher</span>
                <span className="plus">+</span>
                <span className="parent">🍄 Penis Envy</span>
                <span className="equals">=</span>
                <span className="offspring">🧪 Golden Envy</span>
              </div>
              <p className="breeding-desc">Epic rarity cross-bred strain</p>
            </div>

            <div className="breeding-card">
              <div className="breeding-formula">
                <span className="parent">🍄 Blue Meanie</span>
                <span className="plus">+</span>
                <span className="parent">🍄 Albino A+</span>
                <span className="equals">=</span>
                <span className="offspring">🌌 Winter Whitecap</span>
              </div>
              <p className="breeding-desc">Seasonal mutant (Winter Solstice)</p>
            </div>

            <div className="breeding-card">


              <div className="breeding-formula">
                <span className="parent">🍄 7x Daily</span>
                <span className="plus">+</span>
                <span className="parent">🍄 1x Mined</span>
                <span className="equals">=</span>
                <span className="offspring">🍇 Fruit of Offering</span>
              </div>
              <p className="breeding-desc">Ultra-rare ceremonial NFT</p>
            </div>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Trait Inheritance</h2>
          <div className="traits-grid">
            <div className="trait-box">
              <span className="trait-label">Visual Traits:</span>
              <span className="trait-value">Color, pattern, and form blend from parents</span>
            </div>
            <div className="trait-box">
              <span className="trait-label">Oracle Wisdom:</span>
              <span className="trait-value">New unique phrase generated for offspring</span>
            </div>
            <div className="trait-box">
              <span className="trait-label">Rarity Level:</span>
              <span className="trait-value">Determined by parent rarities + randomness</span>
            </div>
            <div className="trait-box">
              <span className="trait-label">Special Properties:</span>
              <span className="trait-value">Unlock DAO access, breeding bonuses, etc.</span>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <TransactionHistory transactions={transactions} title="Breeding History" compact={true} />
        </div>

        <Footer />
      </motion.div>

      {/* Trippy Mushrooms - Decorative - INCREASED COUNT & VARIED SIZES */}
      {[
        { top: '15%', left: '7%', delay: 0.5, size: 74 },
        { top: '30%', right: '9%', delay: 1.8, size: 68 },
        { top: '55%', left: '5%', delay: 2.2, size: 82 },
        { bottom: '18%', right: '7%', delay: 1.0, size: 72 },
        // NEW: More mushrooms
        { top: '20%', left: '11%', delay: 1.2, size: 60 },
        { top: '40%', right: '11%', delay: 2.5, size: 88 },
        { top: '65%', left: '9%', delay: 1.5, size: 66 },
        { bottom: '28%', right: '10%', delay: 2.0, size: 78 },
        { top: '48%', left: '7%', delay: 0.8, size: 84 },
        { bottom: '10%', left: '12%', delay: 2.7, size: 64 }
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -35, -18, 0],
            rotate: [0, 12, -9, 0],
            scale: [1, 1.09, 0.97, 1]
          }}
          transition={{
            duration: 7.5,
            delay: pos.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            ...pos,
            filter: 'drop-shadow(0 0 12px currentColor)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          <TrippyMushroom size={pos.size} delay={pos.delay} />
        </motion.div>
      ))}

      {/* Modals */}
      <CrossBreedingModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <CrossBreedingTokensModal isOpen={isTokenModalOpen} onClose={() => setIsTokenModalOpen(false)} />
      <BreedingLabAccessModal isOpen={isLabAccessModalOpen} onClose={() => setIsLabAccessModalOpen(false)} />
      <BreedingLabRestrictedModal isOpen={isRestrictedModalOpen} onClose={() => setIsRestrictedModalOpen(false)} />
    </div>
  );
}

