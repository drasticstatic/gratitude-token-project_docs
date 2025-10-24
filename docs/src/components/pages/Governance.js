import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardContent } from "../LandingPage";
import MycelialTitle from "../MycelialTitle";
import { Shield, HelpCircle, ShieldCheck } from "lucide-react";
import GovernanceIcon from "../icons/GovernanceIcon";
import TransactionHistory from "../TransactionHistory";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import FlashlightCursor from "../FlashlightCursor";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import PageInfo from "../PageInfo";
import TrippyMushroom from "../TrippyMushroom";
import GovernanceModal from "../modals/GovernanceModal";
import TreasuryProposalModal from "../modals/TreasuryProposalModal";
import DAOAccessModal from "../modals/DAOAccessModal";
import DAORestrictedModal from "../modals/DAORestrictedModal";
import WalletConnectionBanner from "../WalletConnectionBanner";
import { useAccount } from "wagmi";

export default function Governance() {
  const { address } = useAccount();
  const [transactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTreasuryModalOpen, setIsTreasuryModalOpen] = useState(false);
  const [isDAOAccessModalOpen, setIsDAOAccessModalOpen] = useState(false);
  const [isDAORestrictedModalOpen, setIsDAORestrictedModalOpen] = useState(false);
  const [daoWhitelist, setDaoWhitelist] = useState([]);

  // Load DAO whitelist from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('dao_whitelist');
      const arr = raw ? JSON.parse(raw) : [];
      setDaoWhitelist(Array.from(new Set(arr)));
    } catch (e) {
      console.error('Failed to load DAO whitelist:', e);
    }
  }, []);

  // Whitelist check for DAO access
  const isWhitelisted = address && daoWhitelist.some(addr => addr.toLowerCase() === address.toLowerCase());

  const enterDAO = () => {
    if (isWhitelisted) {
      setIsDAOAccessModalOpen(true);
    } else {
      setIsDAORestrictedModalOpen(true);
    }
  };
  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/fruits.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.14} size={800} />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="governance-title" />
      <PageInfo pageTitle="Governance" description="Participate in DAO governance. Create proposals, vote on community decisions, and shape the future of the Psanctuary ecosystem." />
      {!address && <WalletConnectionBanner message="Connect your wallet to access the DAO" />}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="governance-title">
          <MycelialTitle icon={GovernanceIcon} title="DAO Governance" size={72} />
        </div>

        {/* Prominent Access Badge */}
        <div style={{ maxWidth: '600px', margin: '24px auto' }}>
          <div className="info-box" style={{
            background: isWhitelisted
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2))'
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
                <><ShieldCheck size={28} /> DAO Access: Granted</>
              ) : (
                <><Shield size={28} /> DAO Access: Restricted</>
              )}
            </h3>
            <div style={{ margin: 0, color: '#d1d5db' }}>
              {isWhitelisted ? (
                <>
                  <p style={{ margin: '0 0 8px 0' }}>You have been granted access to the DAO.</p>
                  <p style={{ margin: 0 }}>Proceed to participate in governance!</p>
                </>
              ) : (
                <>
                  <p style={{ margin: '0 0 8px 0' }}>The DAO is accessible by invitation only.</p>
                  <p style={{ margin: 0 }}>Contact a steward for access.</p>
                </>
              )}
            </div>
          </div>
        </div>

        <p className="page-subtitle">
          "We are co-creating a living system rooted in trust, transparency, and Spirit-led generosity."
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
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3))',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              color: '#3b82f6',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Learn More About Governance
          </motion.button>
        </div>

        {/* Treasury Proposal Button */}
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <motion.button
            onClick={() => setIsTreasuryModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3))',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              color: '#3b82f6',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Treasury Proposal System
          </motion.button>
        </div>

        {/* Enter the DAO Button - Green/Orange based on whitelist */}
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <motion.button
            onClick={enterDAO}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: isWhitelisted
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3))'
                : 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(220, 38, 38, 0.3))',
              border: isWhitelisted
                ? '2px solid rgba(34, 197, 94, 0.5)'
                : '2px solid rgba(245, 158, 11, 0.5)',
              color: isWhitelisted ? '#22c55e' : '#f59e0b',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backdropFilter: 'blur(8px)',
              boxShadow: isWhitelisted
                ? '0 4px 16px rgba(34, 197, 94, 0.4)'
                : '0 4px 16px rgba(245, 158, 11, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <Shield size={22} />
            Enter the DAO
          </motion.button>
        </div>

        <div className="content-section">
          <h2 className="section-title">Mycelial Democracy</h2>
          <p className="section-text">
            Use your role NFTs and offerings to participate in DAO decisions and collective rituals.
            Our governance follows Wu-wei principles - proposals flow naturally, no forceful agendas.
          </p>
        </div>

        <div className="features-grid" style={{ marginTop: '40px' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">📜 Active Proposals</h3>
                <p className="feature-description">
                  View and vote on community proposals. Each voice matters in our mycelial network.
                </p>
                <Button
                  size="lg"
                  style={{ marginTop: '16px', width: '100%' }}
                  onClick={() => alert('Governance portal coming soon!')}
                >
                  View Proposals
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">💰 Treasury</h3>
                <p className="feature-description">
                  Transparent view of DAO funds and allocation. Real crypto flows to support our mission.
                </p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>0 ETH</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>Treasury Balance</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">🎭 Your Roles</h3>
                <p className="feature-description">
                  Soulbound role NFTs grant special governance powers and ceremonial access.
                </p>
                <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>No Roles Yet</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>Participate to earn roles</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">Core Principles (Tao & Mycelium)</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <h3>🌊 Wu-wei Governance</h3>
              <p>Proposals flow naturally; no forceful agendas. Let decisions emerge organically from community wisdom.</p>
            </div>
            <div className="principle-card">
              <h3>💎 Three Treasures</h3>
              <p>Compassion, simplicity, humility in every decision. These guide our collective choices.</p>
            </div>
            <div className="principle-card">
              <h3>🍄 Mycelial Connection</h3>
              <p>Community acts like fungal networks—interconnected, supportive, sharing resources.</p>
            </div>
            <div className="principle-card">
              <h3>🔥 Proof-of-Giving</h3>
              <p>Honor generosity with soul-bound tokens and NFTs. Giving is receiving.</p>
            </div>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">How Governance Works</h2>
          <div className="info-box">
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Earn Voting Power:</strong> Acquire through offerings, role NFTs, and participation</li>
              <li><strong>Submit Proposals:</strong> Anyone can propose initiatives aligned with our values</li>
              <li><strong>Community Discussion:</strong> Proposals are discussed in the Whispers Board</li>
              <li><strong>Voting Period:</strong> Token holders vote using conviction voting or simple majority</li>
              <li><strong>Execution:</strong> Approved proposals are executed transparently via smart contracts</li>

              <li><strong>Treasury Allocation:</strong> Funds distributed for scholarships, ceremonies, and community projects</li>
            </ol>
          </div>
        </div>

        {/* Transactions */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <TransactionHistory transactions={transactions} title="Governance Activity" compact={true} />
        </div>

        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Proposal Types</h2>
          <div className="proposal-types" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <div className="proposal-type-card">
              <h3>💰 Treasury Allocation</h3>
              <p>Fund scholarships, ceremonies, real estate, and community initiatives</p>
            </div>
            <div className="proposal-type-card">
              <h3>🔧 Protocol Changes</h3>
              <p>Modify smart contract parameters, tokenomics, or governance rules</p>
            </div>
            <div className="proposal-type-card">
              <h3>🎨 NFT Collections</h3>
              <p>Approve new mushroom strains, seasonal events, or special editions</p>
            </div>
            <div className="proposal-type-card">
              <h3>🤝 Partnerships</h3>
              <p>Collaborate with other DAOs, organizations, or spiritual communities</p>
            </div>
            <div className="proposal-type-card">
              <h3>🌱 Community Rituals</h3>
              <p>Organize collective ceremonies, gatherings, and sacred events</p>
            </div>
            <div className="proposal-type-card">
              <h3>📚 Education</h3>
              <p>Create resources, workshops, and teachings for the community</p>
            </div>
            <div className="proposal-type-card" style={{ opacity: 0.4, pointerEvents: 'none' }}>
              <h3>🔮 Coming Soon</h3>
              <p>More proposal types will be added as the DAO evolves</p>
            </div>
            <div className="proposal-type-card" style={{ opacity: 0.4, pointerEvents: 'none' }}>
              <h3>🔮 Coming Soon</h3>
              <p>More proposal types will be added as the DAO evolves</p>
            </div>
            <div className="proposal-type-card" style={{ opacity: 0.4, pointerEvents: 'none' }}>
              <h3>🔮 Coming Soon</h3>
              <p>More proposal types will be added as the DAO evolves</p>
            </div>
            <div className="proposal-type-card" style={{ opacity: 0.4, pointerEvents: 'none' }}>
              <h3>🔮 Coming Soon</h3>
              <p>More proposal types will be added as the DAO evolves</p>
            </div>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Role NFTs & Permissions</h2>
          <div className="roles-grid">
            <div className="role-card">
              <h3>🧙 Minister</h3>
              <p>Spiritual guidance, ceremony facilitation, proposal sponsorship</p>
            </div>
            <div className="role-card">
              <h3>🔥 Flamekeeper</h3>
              <p>Manages ritual burns, tracks offerings, maintains sacred fire</p>
            </div>
            <div className="role-card">
              <h3>🌿 Spore Sentinel</h3>
              <p>Welcomes new members, guides onboarding, tracks gratitude</p>
            </div>
            <div className="role-card">
              <h3>🍇 Oracle of Fruit</h3>
              <p>Interprets offerings, generates wisdom, guides integration</p>
            </div>
            <div className="role-card">
              <h3>💼 Treasury Guardian</h3>
              <p>Oversees funds, reviews allocations, ensures transparency</p>
            </div>
            <div className="role-card">
              <h3>⚡ Validator</h3>
              <p>Runs nodes, maintains network, ensures security</p>
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

      {/* Governance Modal */}
      <GovernanceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    {/* Treasury Proposal Modal */}
    <TreasuryProposalModal isOpen={isTreasuryModalOpen} onClose={() => setIsTreasuryModalOpen(false)} />

    {/* DAO Access Modals */}
    <DAOAccessModal isOpen={isDAOAccessModalOpen} onClose={() => setIsDAOAccessModalOpen(false)} />
    <DAORestrictedModal isOpen={isDAORestrictedModalOpen} onClose={() => setIsDAORestrictedModalOpen(false)} />
    </div>
  );
}

