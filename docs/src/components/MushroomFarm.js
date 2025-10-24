import React, { useState, useEffect, useCallback } from "react";
import { Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { celebrateTransaction } from "./effects/TransactionSporeEffect";
import MistRainEffect from "./effects/MistRainEffect";
import MushroomCluster from "./mushroom-farm/MushroomCluster";
import SubstrateBlock from "./mushroom-farm/SubstrateBlock";
import PsilocybinMolecule from "./mushroom-farm/PsilocybinMolecule";



// Localized countdown components to avoid re-rendering the entire farm every second
function NextMistCountdown({ lastMistTime }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!lastMistTime) return <span>Ready now!</span>;
  const eightHours = 8 * 60 * 60 * 1000;
  const timeLeft = eightHours - (now - lastMistTime);
  if (timeLeft <= 0) return <span>Ready now!</span>;

  const hours = Math.floor(timeLeft / (60 * 60 * 1000));
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
  return <span>{hours}h {minutes}m {seconds}s</span>;
}

function CooldownCountdown({ lastHarvestTime }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!lastHarvestTime) return <span>Ready now!</span>;
  const oneHour = 60 * 60 * 1000;
  const timeLeft = oneHour - (now - lastHarvestTime);
  if (timeLeft <= 0) return <span>Ready now!</span>;

  const minutes = Math.floor(timeLeft / (60 * 1000));
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
  return <span>{minutes}m {seconds}s</span>;
}

/**
 * MushroomFarm - Interactive mushroom growing mechanic
 * - One daily mushroom to collect
 * - Mist every 8 hours to grow additional mushrooms
 * - Animated SVG mushroom that grows when misted
 */
export default function MushroomFarm() {
  const [lastMistTime, setLastMistTime] = useState(null);
  const [lastCollectTime, setLastCollectTime] = useState(null);
  const [mushroomGrowth, setMushroomGrowth] = useState(0);
  const [mushroomsCollected, setMushroomsCollected] = useState(0);
  const [shroomNFTCollected, setShroomNFTCollected] = useState(0);

  const [lastHarvestTime, setLastHarvestTime] = useState(null);
  const [regenSeed, setRegenSeed] = useState(0);

  const [chargeFlash, setChargeFlash] = useState(false);
  const [mistRainOn, setMistRainOn] = useState(false);
  const [autoMistDueAt, setAutoMistDueAt] = useState(() => {
    const saved = localStorage.getItem('autoMistDueAt');
    return saved ? parseInt(saved) : null;
  });
  const [infoOpen, setInfoOpen] = useState(false);
  const [needsRehydrate, setNeedsRehydrate] = useState(() => {
    const saved = localStorage.getItem('needsRehydrate');
    return saved === 'true';
  });

  const [demoMode, setDemoMode] = useState(() => {
    const saved = localStorage.getItem('mushroomFarmDemo');
    return saved === 'true';
  });

  const [boostSystemEnabled] = useState(() => localStorage.getItem('boostSystemEnabled') === 'true');
  const [humidifierEnabled, setHumidifierEnabled] = useState(() => localStorage.getItem('humidifierEnabled') === 'true');
  const [substrates, setSubstrates] = useState(() => {
    try {
      const saved = localStorage.getItem('substrates');
      return saved ? JSON.parse(saved) : [
        { id: 'main', label: 'Main Substrate', max: 3, remaining: 3, active: true },
        { id: 'boost1', label: 'Boost Substrate A', max: 4, remaining: 4, active: false },
        { id: 'boost2', label: 'Boost Substrate B', max: 4, remaining: 4, active: false },
      ];
    } catch {
      return [ { id: 'main', label: 'Main Substrate', max: 3, remaining: 3, active: true } ];
    }
  });

  // Load from localStorage
  useEffect(() => {
    const savedMistTime = localStorage.getItem('lastMistTime');
    const savedCollectTime = localStorage.getItem('lastCollectTime');
    const savedGrowth = localStorage.getItem('mushroomGrowth');
    const savedCollected = localStorage.getItem('mushroomsCollected');
    const savedShroomNFT = localStorage.getItem('shroomNFTCollected');
    const savedHarvestTime = localStorage.getItem('lastHarvestTime');

    const savedDemo = localStorage.getItem('mushroomFarmDemo');

    if (savedMistTime) setLastMistTime(parseInt(savedMistTime));
    if (savedCollectTime) setLastCollectTime(parseInt(savedCollectTime));
    if (savedGrowth) setMushroomGrowth(parseFloat(savedGrowth));
    if (savedCollected) setMushroomsCollected(parseInt(savedCollected));
    if (savedShroomNFT) setShroomNFTCollected(parseInt(savedShroomNFT));
    if (savedHarvestTime) setLastHarvestTime(parseInt(savedHarvestTime));
    if (savedDemo !== null) setDemoMode(savedDemo === 'true');
  }, []);

  // Persist demo mode and notify listeners for UI sync across pages
  useEffect(() => {
    localStorage.setItem('mushroomFarmDemo', demoMode ? 'true' : 'false');
    try { window.dispatchEvent(new CustomEvent('mushroomFarmDemoChanged', { detail: { demoMode } })); } catch {}
  }, [demoMode]);

  // Check if can mist (every 8 hours)
  const canMist = useCallback(() => {
    if (needsRehydrate) return false;
    if (demoMode) return true;
    if (!lastMistTime) return true;
    const eightHours = 8 * 60 * 60 * 1000;
    return Date.now() - lastMistTime >= eightHours;
  }, [needsRehydrate, demoMode, lastMistTime]);

  // Check if can collect daily mushroom
  const canCollectDaily = useCallback(() => {
    if (demoMode) return true;
    if (!lastCollectTime) return true;
    const oneDay = 24 * 60 * 60 * 1000;
    return Date.now() - lastCollectTime >= oneDay;
  }, [demoMode, lastCollectTime]);



  // Handle misting
  const handleMist = useCallback(() => {
    if (!canMist()) return;

    const now = Date.now();
    setLastMistTime(now);
    localStorage.setItem('lastMistTime', now.toString());

    // Grow mushroom
    const newGrowth = Math.min(mushroomGrowth + (1/3), 1);
    setMushroomGrowth(newGrowth);
    localStorage.setItem('mushroomGrowth', newGrowth.toString());

    // Humidifier automation: schedule next auto-mist if enabled and not fully grown
    if (humidifierEnabled && newGrowth < 1) {
      const delay = demoMode ? 6000 : 8 * 60 * 60 * 1000;
      const due = now + delay;
      setAutoMistDueAt(due);
      try { localStorage.setItem('autoMistDueAt', due.toString()); } catch {}
    } else if (humidifierEnabled && newGrowth >= 1) {
      setAutoMistDueAt(null);
      try { localStorage.removeItem('autoMistDueAt'); } catch {}
    }

    // New full-page mist rain effect - instant start, longer duration (3.5s)
    setMistRainOn(true);
    setTimeout(() => setMistRainOn(false), 3500);
  }, [canMist, mushroomGrowth, humidifierEnabled, demoMode]);

  // Handle collecting mushroom
  const handleCollect = () => {
    if (mushroomGrowth < 1) return;

    const newCount = mushroomsCollected + 1;
    setMushroomsCollected(newCount);
    localStorage.setItem('mushroomsCollected', newCount.toString());

    // Consume a substrate flush
    setSubstrates((prev) => {
      const next = prev.map(s => ({ ...s }));
      const mainIdx = next.findIndex(s => s.id === 'main');
      if (mainIdx >= 0 && next[mainIdx].remaining > 0) {
        next[mainIdx].remaining -= 1;
      } else if (boostSystemEnabled) {
        const bIdx = next.findIndex(s => s.id !== 'main' && s.active && s.remaining > 0);
        if (bIdx >= 0) next[bIdx].remaining -= 1;
      }
      try { localStorage.setItem('substrates', JSON.stringify(next)); } catch {}
      return next;
    });

    // Reset growth and require re-hydration before next mist
    setMushroomGrowth(0);
    localStorage.setItem('mushroomGrowth', '0');
    setNeedsRehydrate(true);
    try { localStorage.setItem('needsRehydrate', 'true'); } catch {}
    const regenStart = Date.now();
    setLastMistTime(regenStart);
    try { localStorage.setItem('lastMistTime', regenStart.toString()); } catch {}
    // Start harvest cooldown (1 hour)
    const harvestNow = Date.now();
    setLastHarvestTime(harvestNow);
    try { localStorage.setItem('lastHarvestTime', harvestNow.toString()); } catch {}
  };

  // Handle daily collection (ERC721 SHROOM NFT)
  const handleDailyCollect = useCallback(() => {
    if (!canCollectDaily()) return;

    const now = Date.now();
    setLastCollectTime(now);
    localStorage.setItem('lastCollectTime', now.toString());

    const newCount = (shroomNFTCollected || 0) + 1;
    setShroomNFTCollected(newCount);
    localStorage.setItem('shroomNFTCollected', newCount.toString());

    // Notify other components (e.g., DailyShrooms page counter)
    window.dispatchEvent(new CustomEvent('shroomNFTUpdated', { detail: { count: newCount } }));

    // UX feedback for demo/testing until on-chain mint is wired
    try { celebrateTransaction('🍄 Daily Mushroom Collected!'); } catch {}
    setTimeout(() => alert('Daily mint coming soon! Wallet connection is necessary to participate and acts as your unique spore print (identity).'), 500);
  }, [shroomNFTCollected, canCollectDaily]);

  // Listen for cross-component daily collect triggers (from DailyShrooms page CTA)
  useEffect(() => {
    const handler = () => handleDailyCollect();
    window.addEventListener('triggerDailyCollect', handler);
    return () => window.removeEventListener('triggerDailyCollect', handler);
  }, [lastCollectTime, demoMode, shroomNFTCollected, handleDailyCollect]);

  // Persist boost system toggle and substrates
  useEffect(() => {
    localStorage.setItem('boostSystemEnabled', boostSystemEnabled ? 'true' : 'false');
  }, [boostSystemEnabled]);
  useEffect(() => {
    localStorage.setItem('humidifierEnabled', humidifierEnabled ? 'true' : 'false');
  }, [humidifierEnabled]);
  useEffect(() => {
    try { localStorage.setItem('substrates', JSON.stringify(substrates)); } catch {}
  }, [substrates]);

  // Normalize substrate maxima across reloads (ensure main=3, boosts=4)
  useEffect(() => {
    setSubstrates(prev => {
      let changed = false;
      const next = prev.map(s => {
        const isMain = s.id === 'main';
        const expectedMax = isMain ? 3 : 4;
        if (s.max !== expectedMax) {
          changed = true;
          const remaining = Math.min((s.remaining ?? expectedMax), expectedMax);
          return { ...s, max: expectedMax, remaining };
        }
        return s;
      });
      if (changed) {
        try { localStorage.setItem('substrates', JSON.stringify(next)); } catch {}
        return next;
      }
      return prev;
    });
  }, []);


  const toggleBoostSubstrate = (id) => {
    setSubstrates(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const reinoculate = (id) => {
    setSubstrates((prev) => prev.map(s => s.id === id ? { ...s, remaining: s.max } : s));
  };

  // Re-hydrate / feed: small nudge to growth for demo UX + electric charge flash
  const rehydrate = () => {
    setChargeFlash(true);
    setTimeout(() => setChargeFlash(false), 1600);
    setNeedsRehydrate(false);
    try { localStorage.setItem('needsRehydrate', 'false'); } catch {}
    setMushroomGrowth(prev => {
      const next = Math.min(1, prev + 0.1);
      try { localStorage.setItem('mushroomGrowth', next.toString()); } catch {}
      return next;
    });
    // Trigger substrate root/pin regeneration visuals
    setRegenSeed(prev => (prev || 0) + 1);
  };


  // Burn ETHO to skip cooldown (demo placeholder)
  const burnToSkipCooldown = () => {
    try { alert('\n ETHO Burn coming soon \n\n Cooldown has succesfully been skipped for demonstration'); } catch {}
    const past = Date.now() - (8 * 60 * 60 * 1000 + 1000);
    setLastMistTime(past);
    try { localStorage.setItem('lastMistTime', past.toString()); } catch {}
    const pastHarvest = Date.now() - (60 * 60 * 1000 + 1000);
    setLastHarvestTime(pastHarvest);
    try { localStorage.setItem('lastHarvestTime', pastHarvest.toString()); } catch {}
    setNeedsRehydrate(false);
    try { localStorage.setItem('needsRehydrate', 'false'); } catch {}
  };

  // Humidifier auto-misting scheduler
  useEffect(() => {
    if (!humidifierEnabled || !autoMistDueAt) return;
    const id = setInterval(() => {
      if (Date.now() >= autoMistDueAt && mushroomGrowth < 1) {
        handleMist();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [humidifierEnabled, autoMistDueAt, mushroomGrowth, handleMist]);




  return (
    <div id="mushroom-farm" className="mushroom-farm" style={{
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1))',
      borderRadius: '16px',
      padding: '32px',
      border: '1px solid rgba(124, 58, 237, 0.3)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: chargeFlash ? '0 0 0 0.22px rgba(59,130,246,0.6), 0 0 22px rgba(59,130,246,0.4)' : 'none',
      transition: 'box-shadow 0.3s ease'
    }}>
      <MistRainEffect visible={mistRainOn} onDone={() => setMistRainOn(false)} withinContainer />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h3 style={{
          fontSize: '2.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: '#a78bfa',
          margin: 0
        }}>
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Animated grow-to-harvest cycle */}
            <g style={{ animation: 'growCycle 4s ease-in-out infinite' }}>
              {/* Spore/Seed */}
              <circle cx="20" cy="80" r="3" fill="#3ac9ed" opacity="0.8">
                <animate attributeName="opacity" values="0.88;0;0.88" dur="5s" repeatCount="indefinite" />
              </circle>

              {/* Sprout */}
              <line x1="35" y1="80" x2="35" y2="70" stroke="#22c55e" strokeWidth="3.5">
                <animate attributeName="y2" values="80;70;80" dur="4s" repeatCount="indefinite" />
              </line>
              <circle cx="35" cy="70" r="3.5" fill="#22c55e">
                <animate attributeName="r" values="0;3.5;0" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Growing mushroom */}
              <rect x="47" y="65" width="6" height="15" rx="1" fill="#fbbf24">
                <animate attributeName="height" values="5;15;5" dur="5s" repeatCount="indefinite" />
                <animate attributeName="y" values="75;65;75" dur="5s" repeatCount="indefinite" />
              </rect>
              <path d="M 50 55 Q 45 57, 44 62 Q 44 65, 47 66 L 53 66 Q 56 65, 56 62 Q 55 57, 50 55 Z" fill="#ec4899">
                <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
              </path>

              {/* Mature mushroom */}
              <rect x="67" y="55" width="8.8" height="25" rx="3" fill="#a78bfa" >
                <animate attributeName="width" values="7.7;9.9;7.7" dur="4s" repeatCount="indefinite" begin="3s" />
              </rect>
              <path d="M 71 35 Q 63 38, 62 45 Q 62 50, 67 53 L 75 53 Q 80 50, 80 45 Q 79 38, 71 35 Z" fill="#7c3aed" >
                <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="3s" />
              </path>
              <ellipse cx="68" cy="42" rx="2" ry="3" fill="#fbbf24" opacity="0.8">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" begin="3s" />
              </ellipse>

              {/* Harvest sparkle */}
              <g opacity="0.8">
                <line x1="85" y1="40" x2="90" y2="35" stroke="#fbbf24" strokeWidth="2">
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="3s" />
                </line>
                <line x1="90" y1="40" x2="85" y2="35" stroke="#fbbf24" strokeWidth="2">
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="3s" />
                </line>
              </g>
            </g>
          </svg>
          Mushroom Farm
        </h3>

        {/* Humidifier + Demo toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Small blue badge between Efficiency and toggles */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 8px', borderRadius: 999, background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.35)', color: '#60a5fa', fontSize: '0.8rem', fontWeight: 700 }}>
            <Droplets size={14} />
            <span>Humidifier</span>
          <div style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.9rem' }}>Efficiency: {humidifierEnabled ? '100%' : '50%'}</div>
          </span>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#60a5fa', fontSize: '0.95rem' }}>
            <span style={{ color: humidifierEnabled ? '#60a5fa' : '#93c5fd', fontWeight: 600 }}>Demo Humidifier</span>
            <span
              role="switch"
              aria-checked={humidifierEnabled}
              onClick={() => setHumidifierEnabled(!humidifierEnabled)}
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                background: humidifierEnabled ? 'linear-gradient(135deg, #60a5fa, #3b82f6)' : 'rgba(148,163,184,0.35)',
                boxShadow: humidifierEnabled ? '0 0 12px rgba(96,165,250,0.5)' : 'inset 0 0 6px rgba(0,0,0,0.4)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 2,
                  left: humidifierEnabled ? 22 : 2,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  transition: 'left 0.25s ease'
                }}
              />
            </span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#d1d5db', fontSize: '0.95rem' }}>
            <span style={{ color: demoMode ? '#fbbf24' : '#9ca3af', fontWeight: 600 }}>Demo Misting</span>
            <span
              role="switch"
              aria-checked={demoMode}
              onClick={() => setDemoMode(!demoMode)}
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                background: demoMode ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'rgba(148,163,184,0.35)',
                boxShadow: demoMode ? '0 0 12px rgba(251,191,36,0.5)' : 'inset 0 0 6px rgba(0,0,0,0.4)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 2,
                  left: demoMode ? 22 : 2,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  transition: 'left 0.25s ease'
                }}
              />
            </span>
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Mushroom Growing Area with psychedelic background */}
        <div style={{
          flex: 1,
          minWidth: '250px',
          textAlign: 'center',
          position: 'relative',
          borderRadius: 10,
          boxShadow: chargeFlash ? '0 0 0 0.22px rgba(59,130,246,0.5), 0 0 18px rgba(59,130,246,0.35)' : 'none',
          transition: 'box-shadow 0.3s ease',
          padding: '12px',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.08), rgba(236,72,153,0.05), transparent)',
          overflow: 'visible'
        }}>
          {/* Psychedelic background with spore wisps and sun rays */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 10, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            <svg width="100%" height="75%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <radialGradient id="glitterBg" cx="50%" cy="30%">
                  <stop offset="0%" stopColor="rgba(251, 190, 36, 0.55)"/>
                  <stop offset="50%" stopColor="rgba(167, 139, 250, 0.33)"/>
                  <stop offset="100%" stopColor="transparent"/>
                  <animate attributeName="r" values="50%;70%;50%" dur="14s" repeatCount="indefinite"/>
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#glitterBg)"/>
              {/* Sun rays */}
              <g opacity="0.25">
                <line x1="50%" y1="0" x2="20%" y2="100%" stroke="rgba(251,191,36,0.4)" strokeWidth="2">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="4.1s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="1;3;2" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="400" to="40" dur="22s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(251, 251, 36, 0.66)" strokeWidth="3">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="2;3;1" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="40" to="-40" dur="22s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="80%" y2="100%" stroke="rgba(251,191,36,0.4)" strokeWidth="2">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="4.2s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="1;3;2" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="400" to="40" dur="22s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="30%" y2="100%" stroke="rgba(251, 158, 36, 0.66)" strokeWidth="3">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="3.8s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="2;3;1" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="40" to="-40" dur="22s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="70%" y2="100%" stroke="rgba(251,191,36,0.4)" strokeWidth="2">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="4.5s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="1;3;2" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="400" to="40" dur="22s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="40%" y2="100%" stroke="rgba(251, 251, 36, 0.66)" strokeWidth="3">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="4.1s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="2;3;1" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="40" to="-40" dur="22s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="60%" y2="100%" stroke="rgba(251,191,36,0.4)" strokeWidth="2">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="3.9s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="1;3;2" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="400" to="40" dur="22s" repeatCount="indefinite"/>                  <animateTransform attributeName="transform" type="skewX" from="30" to="-30" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(251, 158, 36, 0.66)" strokeWidth="3">
                  <animate attributeName="opacity" values="0.0;1.0;0.0" dur="3.7s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="rgba(251,191,36,0.4);rgba(251, 251, 36, 0.66);rgba(251,191,36,0.4); rgba(251, 158, 36, 0.66);rgba(221, 190, 110, 0.4);rgba(168, 166, 148, 0.66);rgba(199, 147, 16, 0.55)" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="strokeWidth" values="2;3;1" dur="0.1s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="11s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="scale" from="0.5" to="1.5" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="10 10" dur="5s" repeatCount="indefinite"/>
                  <animateTransform attributeName="transform" type="skewX" from="40" to="-40" dur="22s" repeatCount="indefinite"/>
                </line>
              </g>
              {/* Floating spore wisps */}
              <g>
                <circle cx="15%" cy="25%" r="3" fill="rgba(167,139,250,0.6)">
                  <animate attributeName="cy" values="25%;75%;25%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="15%;85%;15%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="85%" cy="40%" r="2.5" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="40%;80%;40%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="85%;15%;85%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="30%" cy="60%" r="2" fill="rgba(236,72,153,0.5)">
                  <animate attributeName="cy" values="60%;20%;60%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="30%;70%;30%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="70%" cy="70%" r="2.8" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="70%;30%;70%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="70%;30%;70%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="11s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40%" cy="90%" r="2.2" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="90%;50%;90%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="40%;60%;40%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="12s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60%" cy="20%" r="3.5" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="20%;70%;20%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="60%;40%;60%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="90%" cy="50%" r="2.8" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="50%;10%;50%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="90%;10%;90%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="20%" cy="80%" r="3.2" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="80%;40%;80%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="20%;80%;20%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="11s" repeatCount="indefinite"/>
                </circle>
                <circle cx="50%" cy="10%" r="2.5" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="10%;60%;10%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="50%;10%;50%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80%" cy="30%" r="2" fill="rgba(236,72,153,0.5)">
                  <animate attributeName="cy" values="30%;80%;30%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="80%;20%;80%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="30%" cy="70%" r="2.8" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="70%;30%;70%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="30%;70%;30%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="11s" repeatCount="indefinite"/>
                </circle>
                <circle cx="70%" cy="50%" r="3.5" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="50%;10%;50%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="70%;30%;70%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40%" cy="80%" r="3.2" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="80%;40%;80%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="40%;60%;40%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="12s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60%" cy="20%" r="2.5" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="20%;70%;20%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="60%;40%;60%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="90%" cy="40%" r="2" fill="rgba(236,72,153,0.5)">
                  <animate attributeName="cy" values="40%;80%;40%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="90%;10%;90%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="20%" cy="70%" r="2.8" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="70%;30%;70%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="20%;80%;20%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="11s" repeatCount="indefinite"/>
                </circle>
                <circle cx="50%" cy="10%" r="3.5" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="10%;60%;10%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="50%;10%;50%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80%" cy="30%" r="2.2" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="30%;80%;30%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="80%;20%;80%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="12s" repeatCount="indefinite"/>
                </circle>
                <circle cx="30%" cy="70%" r="2.5" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="70%;30%;70%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="30%;70%;30%" dur="11s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="11s" repeatCount="indefinite"/>
                </circle>
                <circle cx="70%" cy="50%" r="3" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="50%;10%;50%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="70%;30%;70%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40%" cy="80%" r="2.8" fill="rgba(251,191,36,0.5)">
                  <animate attributeName="cy" values="80%;40%;80%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="40%;60%;40%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1.0;0.3" dur="12s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60%" cy="20%" r="2.2" fill="rgba(147,197,253,0.6)">
                  <animate attributeName="cy" values="20%;70%;20%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="60%;40%;60%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;1.0;0.2" dur="8s" repeatCount="indefinite"/>
                </circle>
              </g>
            </svg>
          </div>

          {/* Clickable mist area with dashed border indicator */}
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              cursor: canMist() ? 'pointer' : 'not-allowed',
              padding: '0px',
              width: '100%',
              border: canMist() ? '2px dashed rgba(147,197,253,0.4)' : '2px dashed rgba(148,163,184,0.2)',
              borderRadius: '16px',
              boxShadow: chargeFlash ? '0 0 0 .44px rgba(59,130,246,0.7), 0 0 18px rgba(59,130,246,0.5)' : 'none',
              transition: 'all 0.3s ease',
              zIndex: 1
            }}
            onClick={handleMist}
            onMouseEnter={(e) => {
              if (canMist()) {
                e.currentTarget.style.borderColor = 'rgba(147,197,253,0.8)';
                e.currentTarget.style.background = 'rgba(147,197,253,0.05)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = canMist() ? 'rgba(147,197,253,0.4)' : 'rgba(148,163,184,0.2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {/* 3-Row Vertical Layout: Main cluster + substrate, Boost A clusters + substrate, Boost B clusters + substrate */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px' }}>

              {/* ROW 0: Psilocybin molecule */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginBottom: '-122px' }}>
                <motion.svg
                    width="280"
                    height="280"
                    viewBox="0 0 222 280"
                    animate={{ scale: [.8, 1.1, .8] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                  <PsilocybinMolecule scale={.8} chargeFlash={chargeFlash} />
                  </motion.svg>
              </div>
              {/* ROW 1: Main mushroom cluster + Main substrate block */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                {/* Main mushroom cluster (largest) or Psilocybin molecule when no growth */}
                  <motion.svg
                    width="280"
                    height="280"
                    viewBox="0 0 140 140"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform' }}
                  >
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={1} chargeFlash={chargeFlash} />
                  </motion.svg>

                {/* Main substrate block - centered, touching mushroom stems */}
                <div style={{ marginTop: '-133px' , marginBottom: '-11px' }}>
                  <SubstrateBlock
                    flushesRemaining={substrates.find(s => s.id === 'main')?.remaining || 0}
                    maxFlushes={substrates.find(s => s.id === 'main')?.max || 3}
                    scale={1}
                    chargeFlash={chargeFlash}
                    regenSeed={regenSeed}
                  />
                </div>
              </div>

              {/* ROW 2: Boost A - 3 clusters + substrate block */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', opacity: boostSystemEnabled ? 1 : 0.55 }}>
                {/* 3 mushroom clusters (smaller replicas of main cluster) */}
                <motion.svg
                  width="280"
                  height="140"
                  viewBox="0 0 280 70"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Left cluster */}
                  <g transform="translate(0, 0)">
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={.75} chargeFlash={chargeFlash} />
                  </g>
                  {/* Center cluster */}
                  <g transform="translate(95, 0)">
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={.75} chargeFlash={chargeFlash} />
                  </g>
                  {/* Right cluster */}
                  <g transform="translate(180, 0)">
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={.75} chargeFlash={chargeFlash} />
                  </g>
                </motion.svg>

                {/* Boost A substrate block - centered, touching clusters */}
                <div style={{ marginTop: '-55px' , marginBottom: '-11px' }}>
                  <SubstrateBlock
                    flushesRemaining={substrates.find(s => s.id === 'boost1')?.remaining || 0}
                    maxFlushes={substrates.find(s => s.id === 'boost1')?.max || 4}
                    scale={1.2}
                    chargeFlash={chargeFlash}
                    regenSeed={regenSeed}
                  />
                </div>
              </div>

              {/* ROW 3: Boost B - 3 clusters + substrate block */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', opacity: boostSystemEnabled ? 1 : 0.55 }}>
                {/* 3 mushroom clusters (smaller replicas of main cluster) */}
                <motion.svg
                  width="280"
                  height="140"
                  viewBox="0 0 280 70"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Left cluster */}
                  <g transform="translate(0, 0)">
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={.75} chargeFlash={chargeFlash} />
                  </g>
                  {/* Center cluster */}
                  <g transform="translate(90, 0)">
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={.75} chargeFlash={chargeFlash} />
                  </g>
                  {/* Right cluster */}
                  <g transform="translate(180, 0)">
                    <MushroomCluster mushroomGrowth={mushroomGrowth} scale={.75} chargeFlash={chargeFlash} />
                  </g>
                </motion.svg>

                {/* Boost B substrate block - centered, touching clusters */}
                <div style={{ marginTop: '-55px' , marginBottom: '33px' }}>
                  <SubstrateBlock
                    flushesRemaining={substrates.find(s => s.id === 'boost2')?.remaining || 0}
                    maxFlushes={substrates.find(s => s.id === 'boost2')?.max || 4}
                    chargeFlash={chargeFlash}
                    scale={1.2}
                    regenSeed={regenSeed}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Actions */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={handleDailyCollect}
              disabled={!canCollectDaily()}
              style={{
                padding: '12px 24px',
                background: canCollectDaily()
                  ? 'linear-gradient(135deg, #ec48998d, #7c3aed, #ec48998d)'
                  : 'rgba(124, 58, 237, 0.3)',
                color: 'white',
                borderWidth: canCollectDaily() ? '2.2px' : '0.5px',
                borderColor: canCollectDaily() ? 'rgba(124, 58, 237, 0.8)' : 'rgba(124, 58, 237, 0.2)',
                borderRadius: '8px',
                cursor: canCollectDaily() ? 'pointer' : 'not-allowed',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: canCollectDaily() ? '0 11px 44px rgba(124, 58, 237, 0.5)' : 'none',
                marginBottom: '12px'
              }}
            >
              {canCollectDaily() ? '✨ Click HERE to Collect Your Daily SHROOM NFT' : '⏰ Come back tomorrow for another SHROOM NFT'}
            </button>

          <div style={{ marginBottom: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {/* PSILO (ERC20) Harvested */}
            <div style={{ padding: '12px', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.35)', borderRadius: 12, textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#22c55e' }}>{mushroomsCollected}</div>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>PSILO Harvested</div>
            </div>
            {/* SHROOM (ERC721) Collected */}
            <div style={{ padding: '12px', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 12, textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#a78bfa' }}>{shroomNFTCollected}</div>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>SHROOM NFTs Collected</div>
            </div>
          </div>

            <button
              onClick={handleCollect}
              disabled={mushroomGrowth < 1}
              style={{
                padding: '12px 24px',
                background: mushroomGrowth >= 1
                  ? 'linear-gradient(135deg, #34d3998d, #22c55e, #10b9818d)'
                  : 'rgba(34, 197, 94, 0.3)', // Green gradient when ready, otherwise light green
                color: 'white',
                borderWidth: mushroomGrowth >= 1 ? '2.2px' : '0.5px',
                borderColor: mushroomGrowth >= 1 ? 'rgba(34, 197, 94, 0.8)' : 'rgba(34, 197, 94, 0.2)',
                borderRadius: '8px',
                cursor: mushroomGrowth >= 1 ? 'pointer' : 'not-allowed',
                fontSize: mushroomGrowth >= 1 ? '2rem' : '1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: mushroomGrowth >= 1 ? '0 11px 44px rgba(34, 197, 94, 0.5)' : 'none'
              }}
            >
              {mushroomGrowth >= 1 ? '🍄 Time to Harvest PSILO - Your ERC20 Mushrooms' : '💦 Keep Misting to Farm PSILO...'}
            </button>
          </div>

          <div
            style={{
              marginTop: '24px',
              fontSize: '0.875rem',
              color: '#9ca3af',
              display: 'flex',
              flexDirection: 'column',
              gap: 8 ,
              textAlign : 'center',
              alignItems: 'center',
              borderWidth: '2px solid rgba(58, 237, 100, 0.55)',
              borderRadius: 12,
              boxShadow: '0 4px 12px rgba(58, 237, 142, 0.3)',
              padding: '12px',
              background: 'rgba(58, 237, 153, 0.11)'
          }}>
            <big>Growth: {Math.round(mushroomGrowth * 100)}%</big>
            {mushroomGrowth >= 1 && <span style={{ color: '#22c55e' }}><big>🍄 Harvestable! 🍄</big></span>}
            {mushroomGrowth < 1 && <span style={{ color: '#fbbf24' }}>🍄 PSILO Ready in: {Math.ceil((1 - mushroomGrowth) * 3)} mists 💦</span>}
            {mushroomGrowth < 1 && <span style={{ color: '#2f8be0' }}>💧 Next Mist: <NextMistCountdown lastMistTime={lastMistTime} /> ⏰</span>}
            {mushroomGrowth >= 1 && <span style={{ color: '#fbbf24' }}><small>⏰ Harvest Cooldown: <CooldownCountdown lastHarvestTime={lastHarvestTime} /></small></span>}
            {mushroomGrowth >= 1 && <span style={{ color: '#a78bfa' }}>🔥 Skip Cooldown by Burning ETHO</span>}
          </div>

          {/* Persistent hint */}
          <div
            style={{
              marginTop: '44px',
              color: '#93c5fd',
              fontSize: '1.25rem',
              textAlign: 'center',
              borderWidth: '1px solid rgba(58, 183, 237, 0.55)',
              borderRadius: 12,
              boxShadow: '0 4px 12px rgba(23, 193, 231, 0.3)',
              padding: '12px',
              background: 'rgba(79, 111, 193, 0.24)'
            }}
          >
            {needsRehydrate
              ? '⚡ Press Re-hydrate / Feed to restart growth'
              : (humidifierEnabled
                  ? '💧 Humidifier is currently handling your misting - check back soon ⏰'
                  : (canMist() ? '← Your humidifier is ineffective @ 50% efficiency. Manually click on the mushroom farm to mist now 💦' : (<span>⏰ Return for next mist in: <NextMistCountdown lastMistTime={lastMistTime} /></span>))
                )}
          </div>

          {/* Boost & Substrates (demo-capable) */}
          <div style={{ marginTop: '44px', padding: '12px', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 12, background: 'rgba(124,58,237,0.08)' , boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: '#a78bfa' }}>Boost & Substrates</div>
              <div />
                <div style={{ marginTop: '8px' , marginBottom: '8px' , alignItems: 'center', justifyContent: 'center' , display: 'flex' }}>
                  <button onClick={burnToSkipCooldown} style={{ padding: '8px 12px', borderRadius: 8, alignSelf: 'center', border: '1px solid rgba(124,58,237,0.5)', background: 'rgba(124,58,237,0.15)', color: '#a78bfa', fontWeight: 700, fontSize: '0.85rem' }}>
                    🔥 Burn ETHO to skip cooldown
                  </button>
                </div>
            </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Main substrate row (own row) */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {substrates.filter(s => s.id === 'main').map((s) => {
                    const maxFlushes = s.id === 'main' ? 3 : 4;
                    const totalSegments = maxFlushes * 4; // 3 mist phases + 1 cooldown per flush (visual)
                    const usedFlushes = (maxFlushes - s.remaining);
                    const phaseSeg = s.remaining > 0 ? Math.floor(mushroomGrowth * 3) : 0; // advance all simultaneously
                    const usedSegments = Math.min(totalSegments, usedFlushes * 4 + phaseSeg);
                    return (
                      <div key={s.id} style={{ flex: '1 1 100%', minWidth: '100%', padding: '10px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(124,58,237,0.35)', boxShadow: chargeFlash ? '0 0 0 2px rgba(59,130,246,0.7), 0 0 18px rgba(59,130,246,0.5)' : 'none', transition: 'box-shadow 280ms ease' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                          <div style={{ fontWeight: 600, color: '#e5e7eb' }}>{s.label}</div>
                          {s.id !== 'main' && (
                            <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: '0.7rem', fontWeight: 700, color: s.active ? '#22c55e' : '#9ca3af', border: `1px solid ${s.active ? 'rgba(34,197,94,0.6)' : 'rgba(148,163,184,0.45)'}`, background: s.active ? 'rgba(34,197,94,0.12)' : 'rgba(148,163,184,0.15)' }}>
                              {s.active ? 'Boost On' : 'Boost Off'}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: 6 }}>Flushes remaining: {s.remaining}/{s.max}</div>
                        {/* Depletion progress bar (color-coded: white/gold/purple/mid-blue) */}
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${totalSegments}, 1fr)`, gap: 2, alignItems: 'center', marginBottom: 8 }}>
                          {Array.from({ length: totalSegments }).map((_, i) => {
                            const mod = i % 4;
                            const color = mod === 0 ? '#ffffff' : mod === 1 ? '#fbbf24' : mod === 2 ? '#a78bfa' : '#60a5fa';
                            const isCooldown = mod === 3;
                            return (
                              <div
                                key={i}
                                style={{
                                  height: 6,
                                  borderRadius: 2,
                                  background: isCooldown
                                    ? (i < usedSegments
                                        ? 'repeating-linear-gradient(45deg, rgba(96,165,250,0.9), rgba(96,165,250,0.9) 4px, rgba(59,130,246,0.35) 4px, rgba(59,130,246,0.35) 8px)'
                                        : 'repeating-linear-gradient(45deg, rgba(148,163,184,0.45), rgba(148,163,184,0.45) 4px, rgba(31,41,55,0.35) 4px, rgba(31,41,55,0.35) 8px)')
                                    : (i < usedSegments ? color : 'rgba(148,163,184,0.35)'),
                                  border: isCooldown ? '1px solid rgba(96,165,250,0.6)' : 'none',
                                  boxShadow: chargeFlash && i < usedSegments ? '0 0 10px rgba(59,130,246,0.7)' : 'none'
                                }}
                              />
                            );
                          })}
                        </div>
                        {/* Buttons area */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <button onClick={rehydrate} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(59,130,246,0.5)', background: 'rgba(59,130,246,0.15)', color: '#93c5fd', fontWeight: 700 }}>Re-hydrate / Feed</button>
                          {s.remaining === 0 && (
                            <button onClick={() => reinoculate(s.id)} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(251,191,36,0.6)', background: 'rgba(251,191,36,0.15)', color: '#fbbf24', fontWeight: 700 }}>Replace depleted substrate & add spawn</button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Boost substrates row (A & B side-by-side) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {substrates.filter(s => s.id !== 'main').map((s) => {
                    const maxFlushes = s.id === 'main' ? 3 : 4;
                    const totalSegments = maxFlushes * 4; // 3 mist phases + 1 cooldown per flush (visual)
                    const usedFlushes = (maxFlushes - s.remaining);
                    const phaseSeg = s.remaining > 0 ? Math.floor(mushroomGrowth * 3) : 0; // advance all simultaneously
                    const usedSegments = Math.min(totalSegments, usedFlushes * 4 + phaseSeg);
                    return (
                      <div key={s.id} style={{ minWidth: 0, padding: '10px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(124,58,237,0.35)', boxShadow: chargeFlash ? '0 0 0 2px rgba(59,130,246,0.7), 0 0 18px rgba(59,130,246,0.5)' : 'none', transition: 'box-shadow 280ms ease' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                          <div style={{ fontWeight: 600, color: '#e5e7eb' }}>{s.label}</div>
                          {s.id !== 'main' && (
                            <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: '0.7rem', fontWeight: 700, color: s.active ? '#22c55e' : '#9ca3af', border: `1px solid ${s.active ? 'rgba(34,197,94,0.6)' : 'rgba(148,163,184,0.45)'}`, background: s.active ? 'rgba(34,197,94,0.12)' : 'rgba(148,163,184,0.15)' }}>
                              {s.active ? 'Boost On' : 'Boost Off'}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: 6 }}>Flushes remaining: {s.remaining}/{s.max}</div>
                        {/* Depletion progress bar (color-coded: white/gold/purple/mid-blue) */}
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${totalSegments}, 1fr)`, gap: 2, alignItems: 'center', marginBottom: 8 }}>
                          {Array.from({ length: totalSegments }).map((_, i) => {
                            const mod = i % 4;
                            const color = mod === 0 ? '#ffffff' : mod === 1 ? '#fbbf24' : mod === 2 ? '#a78bfa' : '#60a5fa';
                            const isCooldown = mod === 3;
                            return (
                              <div
                                key={i}
                                style={{
                                  height: 6,
                                  borderRadius: 2,
                                  background: isCooldown
                                    ? (i < usedSegments
                                        ? 'repeating-linear-gradient(45deg, rgba(96,165,250,0.9), rgba(96,165,250,0.9) 4px, rgba(59,130,246,0.35) 4px, rgba(59,130,246,0.35) 8px)'
                                        : 'repeating-linear-gradient(45deg, rgba(148,163,184,0.45), rgba(148,163,184,0.45) 4px, rgba(31,41,55,0.35) 4px, rgba(31,41,55,0.35) 8px)')
                                    : (i < usedSegments ? color : 'rgba(148,163,184,0.35)'),
                                  border: isCooldown ? '1px solid rgba(96,165,250,0.6)' : 'none',
                                  boxShadow: chargeFlash && i < usedSegments ? '0 0 10px rgba(59,130,246,0.7)' : 'none'
                                }}
                              />
                            );
                          })}
                        </div>
                        {/* Buttons area */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <button onClick={rehydrate} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(59,130,246,0.5)', background: 'rgba(59,130,246,0.15)', color: '#93c5fd', fontWeight: 700 }}>Re-hydrate / Feed</button>
                          {s.remaining === 0 && (
                            <button onClick={() => reinoculate(s.id)} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid rgba(251,191,36,0.6)', background: 'rgba(251,191,36,0.15)', color: '#fbbf24', fontWeight: 700 }}>Replace depleted substrate & add spawn</button>
                          )}
                          {s.id !== 'main' && (
                            <button onClick={() => { try { if (s.active) { alert('\nWarning: You have DISABLED boost \n\n Staking & unstaking coming soon \n\n Enjoy Demo Mode!'); } else { alert('\nCongratulations: You have ENABLED boost \n\n Staking coming soon \n\n Enjoy Demo Mode'); } } catch {} toggleBoostSubstrate(s.id); }} style={{ padding: '6px 10px', borderRadius: 8, border: s.active ?'1px solid rgba(178, 20, 52, 0.5)' : '1px solid rgba(34,197,94,0.5)', background: s.active ? 'rgba(190, 132, 167, 0.2)' : 'rgba(34,197,94,0.15)', color: s.active ? '#c41221' : '#22c55e', fontWeight: 700 }}>
                              {s.active ? 'Unstake ETHO | Disable Boost' : 'Stake ETHO | Enable Boost'}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
          <div style={{ marginTop: '22px' , display: 'flex', flexDirection: 'column', gap: 8 , textAlign : 'center' , alignItems: 'center' }}>
            <button onClick={() => setInfoOpen(v => !v)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 10, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', color: '#a78bfa', fontWeight: 700 }}>
              <span style={{ transform: infoOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}>›</span>
              <span style={{ fontSize: '1.0rem' }}>💡 How to collect PSILO - Click to read more</span>
              <span style={{ marginLeft: 'auto', transform: infoOpen ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}>‹</span>
            </button>
            {infoOpen && (
              <div style={{ marginTop: 8, fontSize: '1.1rem', color: '#6b7280', lineHeight: '1.5', background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(124,58,237,0.35)', padding: 10, borderRadius: 10 }}>
                <p>🍄‍🟫 Click on your mushroom farm to water it 💧</p>
                <p>⏰ Return back 8hrs later to mist again (unless you have a humidifier active) and after 3 mists, a flush will be ready to harvest. 24hrs max yield = 1 PSILO, unless boosted via ETHO</p>
                <p>Then after harvest there is an 8hr mycelium regeneration phase before misting can resume, unless skipped via burning ETHO to skip cooldown</p>
                <p>When the mushrooms are mature, harvest them! These will later be used as gas for cross-breeding experiments and more</p>
                <p>Toggle the demo mode to test out your farm!</p>
                <p><em>Note: If no engagement for 24h, the cycle resets back to the first stage for sustainability</em></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

