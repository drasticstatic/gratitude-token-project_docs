import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Button, Card, CardContent } from "../LandingPage";
import { useAccount } from "wagmi";
import { ListCheck, HelpCircle, ShieldAlert, AlertOctagon, Users, Key, BarChart3, Wallet } from "lucide-react";
import MycelialTitle from "../MycelialTitle";
import GearIcon from "../icons/GearIcon";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import FlashlightCursor from "../FlashlightCursor";
import MeshingGears from "../MeshingGears";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import TrippyMushroom from "../TrippyMushroom";
import AdminPanelModal from "../modals/AdminPanelModal";
import BreedingWhitelistModal from "../modals/BreedingWhitelistModal";
import DAOWhitelistModal from "../modals/DAOWhitelistModal";
import DenylistModal from "../modals/DenylistModal";
import EmergencyControlsModal from "../modals/EmergencyControlsModal";
import MultisigModal from "../modals/MultisigModal";
import ContractInfoModal from "../modals/ContractInfoModal";
import TreasuryAnalyticsModal from "../modals/TreasuryAnalyticsModal";
import NFTCollectionModal from "../modals/NFTCollectionModal";
import CommunityRewardsModal from "../modals/CommunityRewardsModal";
import {
  loadProvider,
  loadNetwork,
  loadCrowdsale,
  loadCrowdsaleStatus,
  closeCrowdsale,
  openCrowdsale,
  toggleWhitelist
} from "../../store/interactions";

const OWNER_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266".toLowerCase();

export default function AdminPanel() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBreedingWhitelistModalOpen, setIsBreedingWhitelistModalOpen] = useState(false);
  const [isDAOWhitelistModalOpen, setIsDAOWhitelistModalOpen] = useState(false);
  const [isDenylistModalOpen, setIsDenylistModalOpen] = useState(false);
  const [isEmergencyControlsModalOpen, setIsEmergencyControlsModalOpen] = useState(false);
  const [isMultisigModalOpen, setIsMultisigModalOpen] = useState(false);
  const [isContractInfoModalOpen, setIsContractInfoModalOpen] = useState(false);
  const [isTreasuryAnalyticsModalOpen, setIsTreasuryAnalyticsModalOpen] = useState(false);
  const [isNFTCollectionModalOpen, setIsNFTCollectionModalOpen] = useState(false);
  const [isCommunityRewardsModalOpen, setIsCommunityRewardsModalOpen] = useState(false);
  const { address } = useAccount();

  const provider = useSelector(s => s.provider.connection);
  const chainId = useSelector(s => s.provider.chainId);
  const crowdsale = useSelector(s => s.crowdsale.contract);
  const saleStatus = useSelector(s => s.crowdsale.saleStatus);

  const [ownerOnChain, setOwnerOnChain] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [daoAddressInput, setDaoAddressInput] = useState("");
  const [denyAddressInput, setDenyAddressInput] = useState("");
  const [breedingWhitelist, setBreedingWhitelist] = useState([]);
  const [daoWhitelist, setDaoWhitelist] = useState([]);
  const [denylist, setDenylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [useOnChainBreeding, setUseOnChainBreeding] = useState(false);
  const [useOnChainDAO, setUseOnChainDAO] = useState(false);
  const [useOnChainDenylist, setUseOnChainDenylist] = useState(false);

  const isOwner = useMemo(() => (address || "").toLowerCase() === OWNER_ADDRESS, [address]);

  useEffect(() => {
    const init = async () => {
      try {
        const p = provider || await loadProvider(dispatch);
        const cId = chainId || await loadNetwork(p, dispatch);
        const sale = crowdsale || await loadCrowdsale(p, cId, dispatch);
        await loadCrowdsaleStatus(sale, dispatch);

        // Owner and whitelist list if available
        try {
          if (sale && typeof sale.owner === 'function') {
            const owner = await sale.owner();
            setOwnerOnChain(owner);
          }
        } catch {}
        // Load local breeding whitelist
        try {
          const raw = localStorage.getItem('breeding_whitelist');
          const arr = raw ? JSON.parse(raw) : [];
          setBreedingWhitelist(Array.from(new Set(arr)));
        } catch {}
        // Load local DAO whitelist
        try {
          const raw = localStorage.getItem('dao_whitelist');
          const arr = raw ? JSON.parse(raw) : [];
          setDaoWhitelist(Array.from(new Set(arr)));
        } catch {}
        // Load local denylist
        try {
          const raw = localStorage.getItem('global_denylist');
          const arr = raw ? JSON.parse(raw) : [];
          setDenylist(Array.from(new Set(arr)));
        } catch {}
      } catch (e) {
        console.error("Admin init error:", e);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refresh owner address when provider/crowdsale become available
  useEffect(() => {
    const fetchOwner = async () => {
      try {
        if (crowdsale && typeof crowdsale.owner === 'function') {
          const owner = await crowdsale.owner();
          setOwnerOnChain(owner);
        }
      } catch (e) {
        // ignore; modal will still show Loading...
      }
    };
    fetchOwner();
  }, [crowdsale, provider]);


  if (!isOwner) {
    return (
      <div className="page-container">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="page-content" style={{ textAlign: 'center' }}>
        <h1 className="page-title">Admin Panel</h1>
          <div className="info-box" style={{ maxWidth: 600, margin: "20px auto" }}>
            <p style={{ margin: 0 }}>
              Access Denied. Connect with the owner wallet to access the admin page.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }


  const handleClose = async () => {
    try {
      setLoading(true);
      await closeCrowdsale(provider, crowdsale);
      await loadCrowdsaleStatus(crowdsale, dispatch);
    } catch (e) {
      console.error(e);
      alert("Failed to close crowdsale");
    } finally { setLoading(false); }
  };

  const handleOpen = async () => {
    try {
      setLoading(true);
      await openCrowdsale(provider, crowdsale);
      await loadCrowdsaleStatus(crowdsale, dispatch);
    } catch (e) {
      console.error(e);
      alert("Failed to open crowdsale");
    } finally { setLoading(false); }
  };
  const handleDisableCrowdsaleWhitelist = async () => {
    try {
      setLoading(true);
      await toggleWhitelist(provider, crowdsale, false);
      await loadCrowdsaleStatus(crowdsale, dispatch);
    } catch (e) {
      console.error(e);
      alert('Failed to disable crowdsale whitelist');
    } finally { setLoading(false); }
  };



  const handleAdd = () => {
    try {
      setLoading(true);
      const addr = (addressInput || '').trim();
      if (!addr) return;
      const raw = localStorage.getItem('breeding_whitelist');
      const arr = raw ? JSON.parse(raw) : [];
      if (!arr.includes(addr)) arr.push(addr);
      localStorage.setItem('breeding_whitelist', JSON.stringify(arr));
      setBreedingWhitelist(Array.from(new Set(arr)));
      setAddressInput('');
    } catch (e) {
      console.error(e);
      alert('Failed to add address');
    } finally { setLoading(false); }
  };

  const handleRemove = (addr) => {
    const addressToRemove = (addr || addressInput || '').trim();
    if (!addressToRemove) return;
    try {
      setLoading(true);
      const raw = localStorage.getItem('breeding_whitelist');
      const arr = raw ? JSON.parse(raw) : [];
      const next = arr.filter(a => a.toLowerCase() !== addressToRemove.toLowerCase());
      localStorage.setItem('breeding_whitelist', JSON.stringify(next));
      setBreedingWhitelist(Array.from(new Set(next)));
      setAddressInput('');
    } catch (e) {
      console.error(e);
      alert('Failed to remove address');
    } finally { setLoading(false); }
  };

  const handleDaoAdd = () => {
    try {
      setLoading(true);
      const addr = (daoAddressInput || '').trim();
      if (!addr) return;
      const raw = localStorage.getItem('dao_whitelist');
      const arr = raw ? JSON.parse(raw) : [];
      if (!arr.includes(addr)) arr.push(addr);
      localStorage.setItem('dao_whitelist', JSON.stringify(arr));
      setDaoWhitelist(Array.from(new Set(arr)));
      setDaoAddressInput('');
    } catch (e) {
      console.error(e);
      alert('Failed to add address');
    } finally { setLoading(false); }
  };

  const handleDaoRemove = (addr) => {
    const addressToRemove = (addr || daoAddressInput || '').trim();
    if (!addressToRemove) return;
    try {
      setLoading(true);
      const raw = localStorage.getItem('dao_whitelist');
      const arr = raw ? JSON.parse(raw) : [];
      const next = arr.filter(a => a.toLowerCase() !== addressToRemove.toLowerCase());
      localStorage.setItem('dao_whitelist', JSON.stringify(next));
      setDaoWhitelist(Array.from(new Set(next)));
      setDaoAddressInput('');
    } catch (e) {
      console.error(e);
      alert('Failed to remove address');
    } finally { setLoading(false); }
  };

  const handleDenyAdd = () => {
    try {
      setLoading(true);
      const addr = (denyAddressInput || '').trim();
      if (!addr) return;
      const raw = localStorage.getItem('global_denylist');
      const arr = raw ? JSON.parse(raw) : [];
      if (!arr.includes(addr)) arr.push(addr);
      localStorage.setItem('global_denylist', JSON.stringify(arr));
      setDenylist(Array.from(new Set(arr)));
      setDenyAddressInput('');
    } catch (e) {
      console.error(e);
      alert('Failed to add address to denylist');
    } finally { setLoading(false); }
  };

  const handleDenyRemove = (addr) => {
    const addressToRemove = (addr || denyAddressInput || '').trim();
    if (!addressToRemove) return;
    try {
      setLoading(true);
      const raw = localStorage.getItem('global_denylist');
      const arr = raw ? JSON.parse(raw) : [];
      const next = arr.filter(a => a.toLowerCase() !== addressToRemove.toLowerCase());
      localStorage.setItem('global_denylist', JSON.stringify(next));
      setDenylist(Array.from(new Set(next)));
      setDenyAddressInput('');
    } catch (e) {
      console.error(e);
      alert('Failed to remove address from denylist');
    } finally { setLoading(false); }
  };

  return (
    <div className="page-container" style={{
      position: 'relative',
      background: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))',
      minHeight: '100vh'
    }}>
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.14} size={800} />
      {/* Multiple meshing gears animation */}
      <MeshingGears />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="admin-title" />
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="page-content" style={{ position: 'relative', zIndex: 2 }}>
        <div id="admin-title">
          <MycelialTitle icon={GearIcon} title="Admin Panel" size={72} />
        </div>

        <p className="page-subtitle">
          "Welcome fungist, to the realm of administration."
        </p>

        {/* Learn More Button */}
        <div style={{ textAlign: 'center', margin: '40px auto' }}>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.3))',
              border: '2px solid rgba(34, 211, 238, 0.5)',
              color: '#22d3ee',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-block',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(34, 211, 238, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Learn More About Admin Panel
          </motion.button>
        </div>

        {/* KPI Dashboard - Placeholder */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(59,130,246,0.1))',
          border: '2px solid rgba(124,58,237,0.3)',
          borderRadius: '16px',
          padding: '33px',
          marginBottom: '32px',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#a78bfa',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <BarChart3 size={28} />
            Key Performance Indicators
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#22d3ee' }}>--</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>Total Users</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fbbf24' }}>--</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>Active Wallets</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ec4899' }}>--</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>NFTs Minted</div>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#22c55e' }}>--</div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>Treasury Balance</div>
            </div>
          </div>
        </div>

        <div className="features-grid" style={{ marginTop: 40 }}>
          {/* Row 1: Whitelists and Denylist */}

          {/* Card 1: Breeding Whitelist */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={20} style={{ color: '#a78bfa' }} />
                Breeding Whitelist {useOnChainBreeding ? '(On-Chain)' : '(Local)'}
              </h3>
              <p className="feature-description">
                Manage cross-breeding lab access permissions
              </p>

              {/* Toggle: Local vs On-Chain */}
              <div style={{ marginTop: '12px', marginBottom: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={useOnChainBreeding}
                    onChange={(e) => setUseOnChainBreeding(e.target.checked)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    Use On-Chain Whitelist (when contracts are ready)
                  </span>
                </label>
              </div>

              <div className="info-box" style={{ marginBottom: '12px' }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af' }}>
                  {useOnChainBreeding
                    ? '🔗 On-chain whitelist will be managed via smart contract calls'
                    : '💾 Local whitelist stored in browser localStorage'}
                </p>
              </div>

              <Button
                onClick={() => setIsBreedingWhitelistModalOpen(true)}
                style={{ width: '100%' }}
              >
                <ListCheck size={16} style={{ marginRight: 6 }}/>
                Manage Whitelist ({breedingWhitelist.length})
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: DAO Whitelist */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={20} style={{ color: '#60a5fa' }} />
                DAO Whitelist {useOnChainDAO ? '(On-Chain)' : '(Local)'}
              </h3>
              <p className="feature-description">
                Manage DAO governance access permissions
              </p>

              {/* Toggle: Local vs On-Chain */}
              <div style={{ marginTop: '12px', marginBottom: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={useOnChainDAO}
                    onChange={(e) => setUseOnChainDAO(e.target.checked)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    Use On-Chain Whitelist (when contracts are ready)
                  </span>
                </label>
              </div>

              <div className="info-box" style={{ marginBottom: '12px' }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af' }}>
                  {useOnChainDAO
                    ? '🔗 On-chain whitelist will be managed via smart contract calls'
                    : '💾 Local whitelist stored in browser localStorage'}
                </p>
              </div>

              <Button
                onClick={() => setIsDAOWhitelistModalOpen(true)}
                style={{ width: '100%' }}
              >
                <ListCheck size={16} style={{ marginRight: 6 }}/>
                Manage Whitelist ({daoWhitelist.length})
              </Button>
            </CardContent>
          </Card>

          {/* Card 3: Global Denylist */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldAlert size={20} style={{ color: '#f87171' }} />
                Global Denylist {useOnChainDenylist ? '(On-Chain)' : '(Local)'}
              </h3>
              <p className="feature-description">
                Block addresses that violate terms of service
              </p>

              {/* Toggle: Local vs On-Chain */}
              <div style={{ marginTop: '12px', marginBottom: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={useOnChainDenylist}
                    onChange={(e) => setUseOnChainDenylist(e.target.checked)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    Use On-Chain Denylist (when contracts are ready)
                  </span>
                </label>
              </div>

              <div className="info-box" style={{ marginBottom: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#fca5a5' }}>
                  {useOnChainDenylist
                    ? '🔗 On-chain denylist will be managed via smart contract calls'
                    : '💾 Local denylist stored in browser localStorage'}
                </p>
              </div>

              <Button
                onClick={() => setIsDenylistModalOpen(true)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(220,38,38,0.2))',
                  border: '2px solid rgba(239,68,68,0.5)'
                }}
              >
                <AlertOctagon size={16} style={{ marginRight: 6 }}/>
                Manage Denylist ({denylist.length})
              </Button>
            </CardContent>
          </Card>

          {/* Row 2: Multisignature/MPC, Emergency Controls, Contract Info */}

          {/* Card 4: Multisignature/MPC */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <Key size={20} style={{ color: '#ec4899' }} />
                <span>
                  Multi-signature / MPC <br/>
                  (Multi-Party Computation)
                </span>
              </h3>
              <p className="feature-description">
                🔐 Multi-party approval for critical on-chain actions
              </p>
              <Button onClick={() => setIsMultisigModalOpen(true)} style={{ width: '100%', marginTop: '12px' }}>
                <Key size={16} style={{ marginRight: 6 }}/>
                Learn About Multi-Sig & MPC
              </Button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '12px', fontStyle: 'italic' }}>
                Coming soon - Multi-signature security for treasury
              </p>
            </CardContent>
          </Card>

          {/* Card 5: Emergency Circuit Breaker */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <AlertOctagon size={20} style={{ color: '#f59e0b' }} />
                <span>
                  Emergency Controls:<br/>
                  "Circuit Breaker"
                </span>
              </h3>
              <p className="feature-description">
                Pause critical contract functions during security events
              </p>
              <Button onClick={() => setIsEmergencyControlsModalOpen(true)} style={{ width: '100%', marginTop: '12px' }}>
                <AlertOctagon size={16} style={{ marginRight: 6 }}/>
                Manage Emergency Controls
              </Button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '12px', fontStyle: 'italic' }}>
                Status: Crowdsale {saleStatus?.isOpen ? 'Open' : 'Closed'} | Other features: Coming soon
              </p>
            </CardContent>
          </Card>

          {/* Card 6: Contract Info */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title">Contract Info</h3>
              <p className="feature-description">
                📄 Smart contract addresses, deployment info, and technical details
              </p>
              <Button onClick={() => setIsContractInfoModalOpen(true)} style={{ width: '100%', marginTop: '12px' }}>
                <BarChart3 size={16} style={{ marginRight: 6 }}/>
                View Contract Information
              </Button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '12px', fontStyle: 'italic' }}>
                Owner: {ownerOnChain ? `${ownerOnChain.slice(0, 6)}...${ownerOnChain.slice(-4)}` : 'Loading...'}
              </p>
            </CardContent>
          </Card>

          {/* Row 3: Treasury Analytics, NFT Collection Manager, Community Rewards, */}

          {/* Card 7: Treasury Analytics */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Wallet size={20} style={{ color: '#22d3ee' }} />
                Treasury Analytics
              </h3>
              <p className="feature-description">
                📊 Real-time treasury metrics and allocation tracking
              </p>
              <Button onClick={() => setIsTreasuryAnalyticsModalOpen(true)} style={{ width: '100%', marginTop: '12px' }}>
                <Wallet size={16} style={{ marginRight: 6 }}/>
                View Treasury Analytics
              </Button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '12px', fontStyle: 'italic' }}>
                Coming soon - Real-time financial dashboards
              </p>
            </CardContent>
          </Card>

          {/* Card 8: NFT Collection Manager */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title">NFT Collection Manager</h3>
              <p className="feature-description">
                🎨 Manage mushroom NFT collections, cross-breeding permissions, and rarity tiers
              </p>
              <Button onClick={() => setIsNFTCollectionModalOpen(true)} style={{ width: '100%', marginTop: '12px' }}>
                <Users size={16} style={{ marginRight: 6 }}/>
                Manage NFT Collections
              </Button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '12px', fontStyle: 'italic' }}>
                Coming soon - NFT management tools
              </p>
            </CardContent>
          </Card>

          {/* Card 9: Community Rewards */}
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title">Community Rewards</h3>
              <p className="feature-description">
                🎁 Configure reward multipliers, airdrops, and incentive programs
              </p>
              <Button onClick={() => setIsCommunityRewardsModalOpen(true)} style={{ width: '100%', marginTop: '12px' }}>
                <HelpCircle size={16} style={{ marginRight: 6 }}/>
                Manage Community Rewards
              </Button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '12px', fontStyle: 'italic' }}>
                Coming soon - Reward distribution system
              </p>
              <div className="info-box" style={{ marginTop: 12 }}>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.875rem' }}>
                  Set up farming bonuses, referral rewards, and special event distributions. Coming soon.
                </p>
              </div>
            </CardContent>
          </Card>
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

      {/* Admin Panel Modal */}
      <AdminPanelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Breeding Whitelist Modal */}
      <BreedingWhitelistModal
        isOpen={isBreedingWhitelistModalOpen}
        onClose={() => setIsBreedingWhitelistModalOpen(false)}
        whitelist={breedingWhitelist}
        addressInput={addressInput}
        setAddressInput={setAddressInput}
        onAdd={handleAdd}
        onRemove={handleRemove}
        loading={loading}
      />

      {/* DAO Whitelist Modal */}
      <DAOWhitelistModal
        isOpen={isDAOWhitelistModalOpen}
        onClose={() => setIsDAOWhitelistModalOpen(false)}
        whitelist={daoWhitelist}
        addressInput={daoAddressInput}
        setAddressInput={setDaoAddressInput}
        onAdd={handleDaoAdd}
        onRemove={handleDaoRemove}
        loading={loading}
      />

      {/* Denylist Modal */}
      <DenylistModal
        isOpen={isDenylistModalOpen}
        onClose={() => setIsDenylistModalOpen(false)}
        denylist={denylist}
        addressInput={denyAddressInput}
        setAddressInput={setDenyAddressInput}
        onAdd={handleDenyAdd}
        onRemove={handleDenyRemove}
        loading={loading}
      />

      {/* Emergency Controls Modal */}
      <EmergencyControlsModal
        isOpen={isEmergencyControlsModalOpen}
        onClose={() => setIsEmergencyControlsModalOpen(false)}
        saleStatus={saleStatus}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleDisableCrowdsaleWhitelist={handleDisableCrowdsaleWhitelist}
        loading={loading}
      />

      {/* Multi-Sig Modal */}
      <MultisigModal
        isOpen={isMultisigModalOpen}
        onClose={() => setIsMultisigModalOpen(false)}
      />

      {/* Contract Info Modal */}
      <ContractInfoModal
        isOpen={isContractInfoModalOpen}
        onClose={() => setIsContractInfoModalOpen(false)}
        ownerOnChain={ownerOnChain}
      />

      {/* Treasury Analytics Modal */}
      <TreasuryAnalyticsModal
        isOpen={isTreasuryAnalyticsModalOpen}
        onClose={() => setIsTreasuryAnalyticsModalOpen(false)}
      />

      {/* NFT Collection Modal */}
      <NFTCollectionModal
        isOpen={isNFTCollectionModalOpen}
        onClose={() => setIsNFTCollectionModalOpen(false)}
      />

      {/* Community Rewards Modal */}
      <CommunityRewardsModal
        isOpen={isCommunityRewardsModalOpen}
        onClose={() => setIsCommunityRewardsModalOpen(false)}
      />
    </div>
  );
}

/*
 * NOTES FOR FUTURE ON-CHAIN INTEGRATION:
 *
 * When smart contracts are ready, toggle the switches in the Breeding Whitelist and DAO Whitelist cards
 * to switch from localStorage to on-chain whitelist management.
 *
 * For on-chain whitelists, replace the localStorage calls with smart contract calls:
 *
 * Example for Breeding Lab:
 * - Read whitelist: await breedingContract.isWhitelisted(address)
 * - Add to whitelist: await breedingContract.addToWhitelist(address)
 * - Remove from whitelist: await breedingContract.removeFromWhitelist(address)
 *
 * Example for DAO:
 * - Read whitelist: await daoContract.isWhitelisted(address)
 * - Add to whitelist: await daoContract.addToWhitelist(address)
 * - Remove from whitelist: await daoContract.removeFromWhitelist(address)
 *
 * The toggle switches (useOnChainBreeding, useOnChainDAO) control which method to use.
 */

