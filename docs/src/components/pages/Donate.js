import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { Button, Card, CardContent } from "../LandingPage";
import { ShieldCheck, Coins, Heart, HelpCircle } from "lucide-react";
import MycelialTitle from "../MycelialTitle";
import config from "../../config.json";
import TransactionHistory from "../TransactionHistory";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import FlashlightCursor from "../FlashlightCursor";
import OfferingIcon from "../icons/OfferingIcon";
import { celebrateTransaction } from "../effects/TransactionSporeEffect";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import TrippyMushroom from "../TrippyMushroom";
import DonateModal from "../modals/DonateModal";
import GratitudeTokenModal from "../modals/GratitudeTokenModal";
import WalletConnectionBanner from "../WalletConnectionBanner";

import PageInfo from "../PageInfo";
import {
  loadProvider,
  loadNetwork,
  loadAccount,
  loadCrowdsale,
  loadCrowdsaleStatus,
  loadCrowdsaleStats,
  checkWhitelist,
  loadUserContribution,
  buyTokens
} from "../../store/interactions";

export default function Donate() {
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGratitudeModalOpen, setIsGratitudeModalOpen] = useState(false);

  // Config flags
  const crowdsaleActive = config?.crowdsaleActive !== false;

  // Redux state
  const provider = useSelector(state => state.provider.connection);
  const chainId = useSelector(state => state.provider.chainId);
  const account = useSelector(state => state.provider.account);
  const crowdsale = useSelector(state => state.crowdsale.contract);
  const saleStatus = useSelector(state => state.crowdsale.saleStatus);
  const stats = useSelector(state => state.crowdsale.stats);
  const user = useSelector(state => state.crowdsale.userContribution);
  const txPending = useSelector(state => state.crowdsale.transaction.isPending);

  // Load blockchain + crowdsale data
  useEffect(() => {
    const init = async () => {
      try {
        const p = provider || loadProvider(dispatch);
        const cId = chainId || await loadNetwork(p, dispatch);

        // Wire events
        if (window.ethereum) {
          window.ethereum.on('chainChanged', () => window.location.reload());
          window.ethereum.on('accountsChanged', async () => {
            await loadAccount(dispatch);
            if (crowdsale) {
              await loadUserContribution(crowdsale, account, dispatch);
              await checkWhitelist(crowdsale, account, dispatch);
            }
          });
        }

        const sale = crowdsale || await loadCrowdsale(p, cId, dispatch);
        await loadCrowdsaleStatus(sale, dispatch);
        await loadCrowdsaleStats(sale, dispatch);

        // Ensure account and user contribution are loaded
        const acc = account || await loadAccount(dispatch);
        if (acc) {
          await checkWhitelist(sale, acc, dispatch);
          await loadUserContribution(sale, acc, dispatch);
        }
      } catch (e) {
        console.error('Donate init error:', e);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isPaused = saleStatus?.isPaused;
  const buttonDisabled = !crowdsaleActive || isPaused || !donationAmount || parseFloat(donationAmount) <= 0 || txPending;
  const buttonLabel = !crowdsaleActive ? 'Coming Soon 🌟' : (isPaused ? 'Paused ⏸️' : (txPending ? 'Processing… ⏳' : 'Contribute Now 💝'));

  const handleContribute = async () => {
    if (buttonDisabled) return;
    try {
      const tx = await buyTokens(provider, crowdsale, donationAmount, dispatch);

      // Add to transaction history
      if (tx) {
        const newTx = {
          hash: tx.hash,
          type: 'Contribution',
          amount: `${donationAmount} ETH`,
          from: account,
          to: crowdsale.address,
          timestamp: Date.now(),
          status: 'success'
        };
        setTransactions(prev => [newTx, ...prev]);

        // Celebrate with spore effect!
        celebrateTransaction(`🎉 Contribution Complete! ${donationAmount} ETH donated`);
      }

      // Refresh stats and user info
      await loadCrowdsaleStats(crowdsale, dispatch);
      if (account) await loadUserContribution(crowdsale, account, dispatch);
    } catch (e) {
      console.error('Contribution failed:', e);
      alert('Transaction failed. See console for details.');
    }
  };

  const totalTokensSold = stats?.totalTokensSold || '0';
  const yourContribution = user?.amount || '0';
  const isWhitelisted = user?.isWhitelisted;

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/donate.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <FlashlightCursor />
      <ScatteredBlockchainCubes />

      <PsanctuaryWatermark opacity={0.14} size={800} />
      <MycelialNetwork sourceId="donate-title" />
      <PageInfo pageTitle="Sacred Offering" description="Make sacred offerings to support the Psanctuary ecosystem. Contribute PSD to receive ETHO tokens and participate in the ceremonial economy." />
      {!account && !isModalOpen && !isGratitudeModalOpen && (
        <WalletConnectionBanner message="Connect your wallet to contribute and/or view your contributions" />
      )}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="donate-title">
          <MycelialTitle icon={OfferingIcon} title="Sacred Offering" size={72} />
        </div>

        <p className="page-subtitle">
          "Giving is receiving. Support the sacred economy and receive EOT tokens."
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
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))',
              border: '2px solid rgba(236, 72, 153, 0.5)',
              color: '#ec4899',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Learn More About Sacred Offering
          </motion.button>
        </div>

        {/* Gratitude Token Button - Pink */}
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
          <motion.button
            onClick={() => setIsGratitudeModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))',
              border: '2px solid rgba(236, 72, 153, 0.5)',
              color: '#ec4899',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Learn More About the Gratitude Token $GRAT
          </motion.button>
        </div>

        {/* Stats */}
        <div className="features-grid" style={{ marginTop: '40px', marginBottom: '60px' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Heart size={48} style={{ color: '#ec4899', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Total Raised</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    {stats?.totalRaised ? `${ethers.utils.formatEther(stats.totalRaised)} ETH` : '0 ETH'}
                  </p>
                  <p className="feature-description">From generous souls</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <ShieldCheck size={48} style={{ color: isWhitelisted ? '#22c55e' : '#f59e0b', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Your Contribution</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    {yourContribution} ETH
                  </p>
                  <p className="feature-description">Whitelist: {isWhitelisted ? 'Yes ✅' : 'No ⚠️'}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Coins size={48} style={{ color: '#fbbf24', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Tokens Sold</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    {totalTokensSold}
                  </p>
                  <p className="feature-description">Cumulative PSILO minted</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Donation Interface */}
        <div className="content-section">
          <h2 className="section-title">Make a Sacred Offering</h2>
          <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
            <Card className="feature-card" style={{ width: '100%', maxWidth: '100%' }}>
              <CardContent style={{ padding: '40px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                    Amount (ETH)
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="0.1"
                    step="0.01"
                    min="0"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(124, 58, 237, 0.5)',
                      background: 'rgba(0, 0, 0, 0.3)',
                      color: 'white',
                      fontSize: '1.125rem',
                    }}
                  />
                  {donationAmount && (
                    <p style={{ marginTop: '8px', color: '#a78bfa', fontSize: '0.875rem' }}>
                      You will receive: {(parseFloat(donationAmount) * 1000 || 0).toFixed(2)} EOT
                    </p>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '24px' }}>
                  {['0.1', '0.5', '1', '5'].map(amount => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      style={{
                        padding: '8px',
                        borderRadius: '6px',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        background: donationAmount === amount ? 'rgba(124, 58, 237, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {amount} ETH
                    </button>
                  ))}
                </div>

                <Button
                  size="lg"
                  style={{ width: '100%' }}
                  onClick={handleContribute}
                  disabled={buttonDisabled}
                >
                  {buttonLabel}
                </Button>

                {/* Status messages */}
                {!crowdsaleActive && (
                  <p style={{ marginTop: '16px', fontSize: '0.875rem', color: '#9ca3af', textAlign: 'center' }}>
                    Smart contract integration pending
                  </p>
                )}

                {crowdsaleActive && isPaused && (
                  <p style={{ marginTop: '16px', fontSize: '0.875rem', color: '#f59e0b', textAlign: 'center' }}>
                    Sale is temporarily paused by admin ⏸️
                  </p>
                )}

                {crowdsaleActive && !isPaused && (
                  <p style={{ marginTop: '16px', fontSize: '0.875rem', color: '#22c55e', textAlign: 'center' }}>
                    Crowdsale is now active! ✨
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sale Statistics */}
        {crowdsaleActive && (
          <div className="content-section" style={{ marginTop: '60px' }}>
            <h2 className="section-title">Crowdsale Statistics</h2>
            <Card className="feature-card">
              <CardContent>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                  <div className="info-box" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px' }}>Total Raised</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>
                      {stats?.totalRaised ? `${ethers.utils.formatEther(stats.totalRaised)} ETH` : '0 ETH'}
                    </div>
                  </div>
                  <div className="info-box" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px' }}>Tokens Sold</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899' }}>
                      {stats?.totalTokensSold || '0'}
                    </div>
                  </div>
                  <div className="info-box" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px' }}>Status</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: saleStatus?.isOpen ? '#22c55e' : '#f59e0b' }}>
                      {saleStatus?.isOpen ? '🟢 Open' : '🟡 Closed'}
                    </div>
                  </div>
                  <div className="info-box" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px' }}>Whitelist</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: saleStatus?.whitelistEnabled ? '#7c3aed' : '#22c55e' }}>
                      {saleStatus?.whitelistEnabled ? '🔒 Enabled' : '🌍 Public'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* How It Works */}
        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">How the Crowdsale Works</h2>
          <div className="info-box">
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Connect Your Wallet:</strong> Link your Web3 wallet to participate</li>
              <li><strong>Choose Amount:</strong> Select or enter the amount of ETH you wish to contribute</li>
              <li><strong>Receive EOT Tokens:</strong> Get Ethereal Offering Tokens at the current rate</li>
              <li><strong>Support the Mission:</strong> Your contribution funds ceremonies, scholarships, and community projects</li>
              <li><strong>Participate in DAO:</strong> Use your EOT tokens for governance and ceremonial burns</li>
            </ol>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <h2 className="section-title">Use of Funds</h2>
          <div className="proposal-types" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="proposal-type-card">
              <h3>🏛️ Ceremonies</h3>
              <p>Fund sacred gatherings, rituals, and spiritual events for the community</p>
            </div>
            <div className="proposal-type-card">
              <h3>🎓 Scholarships</h3>
              <p>Support members seeking education, training, and personal development</p>
            </div>
            <div className="proposal-type-card">
              <h3>🏡 Real Estate</h3>
              <p>Acquire land and property for community spaces and sanctuaries</p>
            </div>
            <div className="proposal-type-card">
              <h3>🌱 Community Projects</h3>
              <p>Develop tools, resources, and initiatives that serve the collective</p>
            </div>
            <div className="proposal-type-card">
              <h3>🔬 Research</h3>
              <p>Support studies on psychedelics, consciousness, and healing modalities</p>
            </div>
            <div className="proposal-type-card">
              <h3>🤝 Partnerships</h3>
              <p>Collaborate with aligned organizations and spiritual communities</p>
            </div>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="content-section" style={{ marginTop: '40px' }}>
          <div className="info-box" style={{ background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
            <h3 style={{ color: '#22c55e', marginTop: 0 }}>💎 Transparency & Trust</h3>
            <p style={{ color: '#d1d5db', margin: 0 }}>
              All funds are managed transparently through the DAO treasury. Every allocation is voted on by the community
              and recorded on-chain. You can view all transactions and proposals in the Governance section.
            </p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="content-section" style={{ marginTop: '40px', maxWidth: '900px', margin: '40px auto 0' }}>
          <TransactionHistory
            transactions={transactions}
            title="Your Contribution History"
            compact={false}
          />
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

      {/* Donate Modal */}
      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Gratitude Token Modal */}
      <GratitudeTokenModal isOpen={isGratitudeModalOpen} onClose={() => setIsGratitudeModalOpen(false)} />
    </div>
  );
}

