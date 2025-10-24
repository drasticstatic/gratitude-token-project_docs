import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../LandingPage';
import PsanctuaryWatermark from '../PsanctuaryWatermark';
import ScatteredBlockchainCubes from '../ScatteredBlockchainCubes';
import FlashlightCursor from '../FlashlightCursor';
import MycelialTitle from '../MycelialTitle';
import { createSporeEffect } from '../effects/SporeEffect';
import CursorWebbing from '../CursorWebbing';
import TrippyMushroom from '../TrippyMushroom';
import CursorTrail from '../effects/CursorTrail';
import Footer from '../Footer';
import { HelpCircle, ChevronDown } from 'lucide-react';
import StillLostModal from '../modals/StillLostModal';
import ScrollIndicator from '../ScrollIndicator';

export default function NotFound404() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const poemContainerRef = useRef(null);

  const [triggerFallback, setTriggerFallback] = useState(false);
  const Slow = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: () => <div /> }), 2000)));
  const FallbackMount = ({ onDone }) => {
    useEffect(() => { const t = setTimeout(() => onDone && onDone(), 50); return () => clearTimeout(t); }, [onDone]);
    return <Slow />;
  };

  // GitHub Pages SPA redirect handler
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== window.location.href) {
      window.history.replaceState(null, null, redirect);
    }
  }, []);

  // Add rainbow ripple effect on click (using SporeEffect)
  const handleClick = (e) => {
    createSporeEffect(e);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #3d2663 100%)',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${process.env.PUBLIC_URL}/images/EO.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '100px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
      }}
    >
      {/* Force Suspense fallback tester */}
      <button
        onClick={() => setTriggerFallback(true)}
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 20px)',
          left: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(236,72,153,0.25))',
          color: '#a78bfa',
          border: '2px solid rgba(124,58,237,0.5)',
          borderRadius: 12,
          padding: '8px 12px',
          cursor: 'pointer',
          backdropFilter: 'blur(6px)'
        }}
        title="Force Suspense Fallback"
      >
        Test Fallback
      </button>

      {triggerFallback && (
        <Suspense fallback={
          <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', zIndex: 1000, border: '2px solid rgba(124,58,237,0.5)', backdropFilter: 'blur(8px)', dropShadow: '0 8px 32px rgba(124, 58, 237, 0.3)', background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(236,72,153,0.06))', color: '#a78bfa', fontWeight: 700, padding: 24 }}>
            <h1><div style= {{ display: 'inline-block' }} className="custom-spinner-dots" /> 🍄&nbsp;
            <div style= {{ display: 'inline-block' }} className="custom-spinner-dots" /> Loading&nbsp;
            <div style= {{ display: 'inline-block' }} className="custom-spinner-dots" />
            <div style= {{ display: 'inline-block' }} className="custom-spinner-dots" />
            <div style= {{ display: 'inline-block' }} className="custom-spinner-dots" /></h1>
            <h1><div style= {{ display: 'inline-block' }} className="custom-spinner" /></h1>
        </div>
        }>
          <FallbackMount onDone={() => setTriggerFallback(false)} />
        </Suspense>
      )}

      {/* Flashlight Cursor Effect */}
      <FlashlightCursor />

      {/* Cursor Trail - Rainbow Ripples on Movement */}
      <CursorTrail />

      {/* Cursor Webbing Effect */}
      <CursorWebbing />

      {/* Psanctuary Watermark */}
      <PsanctuaryWatermark opacity={0.12} size={900} />

      {/* Scattered Blockchain Cubes */}
      <ScatteredBlockchainCubes />

      {/* Lightning Effects */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <defs>
          <linearGradient id="lightning1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lightning2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Lightning bolts */}
        <path d="M 15% 10% L 18% 30% L 12% 30% L 20% 60%" stroke="url(#lightning1)" strokeWidth="2" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0;0.8;0;0.6;0" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M 85% 15% L 82% 35% L 88% 35% L 80% 65%" stroke="url(#lightning2)" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0;0.7;0;0.5;0" dur="5s" begin="1s" repeatCount="indefinite" />
        </path>
        <path d="M 50% 5% L 48% 25% L 52% 25% L 45% 50%" stroke="url(#lightning1)" strokeWidth="2.5" fill="none" opacity="0.7">
          <animate attributeName="opacity" values="0;0.9;0;0.7;0" dur="6s" begin="2s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Mycelial Network Connections */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <defs>
          <linearGradient id="mycelialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Curved mycelial paths connecting elements */}
        <motion.path
          d="M 10,50 Q 30,30 50,50 T 90,50"
          stroke="url(#mycelialGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.path
          d="M 20,80 Q 40,60 60,80 T 100,80"
          stroke="url(#mycelialGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </svg>

      {/* Lighthouse Effect - Light Shining Through */}
      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '600px',
          background: 'radial-gradient(ellipse at top, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: 'center',
          zIndex: 10,
          position: 'relative',
          padding: '40px',
          paddingTop: '60px',
          maxWidth: '900px',
          width: '100%'
        }}
      >
        {/* Mycelial Title for 404 - EVEN BIGGER! */}
        <div id="404-title" style={{ marginBottom: '15px', paddingTop: '40px' }}>
          <MycelialTitle title="404" fontSize="5.55rem" />
        </div>

        {/* Title - Styled like FAQ Title with Question Marks */}
        <svg width="100%" height="100" viewBox="0 0 800 100" preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block', margin: '0 auto 40px' }}>
          <defs>
            <linearGradient id="lost404Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed">
                <animate attributeName="stop-color" values="#7c3aed;#ec4899;#22d3ee;#7c3aed" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#ec4899">
                <animate attributeName="stop-color" values="#ec4899;#22d3ee;#7c3aed;#ec4899" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#22d3ee">
                <animate attributeName="stop-color" values="#22d3ee;#7c3aed;#ec4899;#22d3ee" dur="6s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="lost404Glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Question mark icon - left side */}
          <g transform="translate(80, 50)">
            <circle cx="0" cy="0" r="30" stroke="url(#lost404Grad)" strokeWidth="4" fill="none" filter="url(#lost404Glow)">
              <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite" />
            </circle>
            <path d="M -8 -12 Q -8 -20, 0 -20 Q 8 -20, 8 -12 Q 8 -4, 0 0"
              stroke="url(#lost404Grad)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#lost404Glow)" />
            <circle cx="0" cy="8" r="3" fill="url(#lost404Grad)" filter="url(#lost404Glow)">
              <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Title text - centered */}
          <text x="400" y="60" textAnchor="middle"
            fill="url(#lost404Grad)"
            fontSize="42"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, sans-serif"
            filter="url(#lost404Glow)">
            Lost in the Mycelial Network
          </text>

          {/* Question mark icon - right side */}
          <g transform="translate(720, 50)">
            <circle cx="0" cy="0" r="30" stroke="url(#lost404Grad)" strokeWidth="4" fill="none" filter="url(#lost404Glow)">
              <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <path d="M -8 -12 Q -8 -20, 0 -20 Q 8 -20, 8 -12 Q 8 -4, 0 0"
              stroke="url(#lost404Grad)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#lost404Glow)" />
            <circle cx="0" cy="8" r="3" fill="url(#lost404Grad)" filter="url(#lost404Glow)">
              <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
          </g>

          {/* Decorative mycelial strands */}
          <path d="M 110 50 Q 180 45, 250 50" stroke="url(#lost404Grad)" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 6">
            <animate attributeName="d" values="M 110 50 Q 180 45, 250 50;M 110 50 Q 180 55, 250 50;M 110 50 Q 180 45, 250 50" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 550 50 Q 620 45, 690 50" stroke="url(#lost404Grad)" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 6">
            <animate attributeName="d" values="M 550 50 Q 620 45, 690 50;M 550 50 Q 620 55, 690 50;M 550 50 Q 620 45, 690 50" dur="4s" repeatCount="indefinite" begin="2s" />
          </path>
        </svg>

        {/* Description */}
        <p style={{
          fontSize: '1.2rem',
          color: '#d1d5db',
          marginBottom: '22px',
          lineHeight: '1.8',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
        }}>
          The path you seek has dissolved into the cosmic web.<br/>
          Perhaps it was never meant to be found, or perhaps <br/>
          it's waiting to be discovered in another dimension of the network.
          <br/><br/>
          Let the mushroom 🍄 unveil the light ✨<br/>
          that's forever shining through the void ⚫️<br/>
          guide you back home 🏡 where all journeys begin 🏁
        </p>

        {/* Return Button */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Button
            size="lg"
            onClick={() => navigate('/')}
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899, #7c3aed)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              padding: '18px 36px',
              fontSize: '1.2rem',
              boxShadow: '0 4px 30px rgba(124, 58, 237, 0.6)'
            }}
          >
            Return to Sacred Ground
          </Button>
        </motion.div>
      </motion.div>

      <div style={{ marginTop: '60px', marginBottom: '40px', width: '100%', maxWidth: '900px', zIndex: 10, position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} style={{ color: '#22d3ee', filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))' }} />
          </motion.div>
          <h2 style={{
            color: '#22d3ee',
            margin: 0,
            fontSize: '1.75rem',
            textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
          }}>
            or continue wandering...
          </h2>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} style={{ color: '#22d3ee', filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))' }} />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Poem Section - Like AltarBurn Page */}
      <div style={{ marginTop: '60px', marginBottom: '40px', width: '100%', maxWidth: '900px', zIndex: 10 }}>
        <h2 style={{
          color: '#fbbf24',
          marginBottom: '32px',
          textAlign: 'center',
          fontSize: '2rem',
          textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
        }}>
          🍄 Poem of the Lost Path
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
              In the void where pages fade,<br />
              Where digital paths have not been laid,<br />
              The mushroom grows in sacred dark,<br />
              A luminescent, guiding spark.
            </p>
            <p style={{ marginBottom: '24px', color: '#ec4899' }}>
              Not all who wander here are lost,<br />
              Some pay the void's mysterious cost,<br />
              To find that emptiness can teach,<br />
              What fullness never hoped to reach.
            </p>
            <p style={{ marginBottom: '24px', color: '#22d3ee' }}>
              So rest here, traveler, take your time,<br />
              Let spores of wisdom gently climb,<br />
              Through networks of the mind and soul,<br />
              Until you find your way back whole.
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

      {/* ACIM Quotes Section - Scrollable - MORE PADDING BEFORE FOOTER */}
      <div style={{ marginTop: '40px', marginBottom: '120px', paddingBottom: '60px', width: '100%', maxWidth: '900px', zIndex: 10, position: 'relative' }}>
        <h2 style={{
          color: '#fbbf24',
          marginBottom: '32px',
          textAlign: 'center',
          fontSize: '1.8rem',
          textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
        }}>
          ✨ Wisdom from A Course in Miracles
        </h2>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '32px',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(124,58,237,0.1))',
          border: '2px solid rgba(34,211,238,0.3)',
          borderRadius: '20px',
          maxHeight: '400px',
          overflowY: 'auto',
          boxShadow: '0 8px 32px rgba(34,211,238,0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1rem',
              lineHeight: '1.9',
              color: '#d1d5db'
            }}
          >
            <p style={{ marginBottom: '24px', fontStyle: 'italic', color: '#a78bfa' }}>
              "Your way is lost, but think not this is loss"
              <br />
              <a
                href="https://acim.org/acim/en/s/246#17:5"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#22d3ee',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  borderBottom: '1px dotted #22d3ee'
                }}
              >
                (ACIM, T-17.V.9:2)
              </a>
            </p>

            <p style={{ marginBottom: '24px', fontStyle: 'italic', color: '#ec4899' }}>
              "Heaven has not lost it, but you have lost sight of Heaven"
              <br />
              <a
                href="https://acim.org/acim/en/s/268#18:9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#22d3ee',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  borderBottom: '1px dotted #22d3ee'
                }}
              >
                (ACIM, T-18.IX.1:8)
              </a>
            </p>

            <p style={{ marginBottom: '0', fontStyle: 'italic', color: '#22d3ee' }}>
              "The children of God are holy and the miracle honors their holiness, which can be hidden but never lost."
              <br />
              <a
                href="https://acim.org/acim/en/s/11#1:1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fbbf24',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  borderBottom: '1px dotted #fbbf24'
                }}
              >
                (ACIM, T-1.I.31:3)
              </a>
            </p>

          </motion.div>
        </div>
        <div style={{ marginTop: '60px', marginBottom: '40px', width: '100%', maxWidth: '900px', zIndex: 10, position: 'relative' }}>
        <h2 style={{
          color: '#22d3ee',
          marginBottom: '16px',
          textAlign: 'center',
          fontSize: '1.5rem',
          textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
        }}>
          If you still feel lost, there's a button just for that 😅 <br/><br/>
          Look up & to the right <big><em>👆</em></big>
        </h2>
        </div>
      </div>

      {/* Trippy Mushrooms - Custom SVGs - INCREASED COUNT & VARIED SIZES */}
      {[
        // Corners and edges
        { top: '8%', left: '8%', delay: 0, size: 85 },
        { top: '15%', right: '12%', delay: 1.5, size: 72 },
        { bottom: '12%', left: '15%', delay: 3, size: 95 },
        { bottom: '20%', right: '8%', delay: 2, size: 62 },
        { top: '45%', left: '3%', delay: 1, size: 78 },
        { top: '55%', right: '5%', delay: 2.5, size: 88 },
        // Closer to text
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
        { top: '42%', right: '10%', delay: 1.1, size: 80 },
        // EXTRA: Even more mushrooms for 404 page (30+ total)
        { top: '5%', left: '20%', delay: 0.3, size: 64 },
        { top: '10%', right: '25%', delay: 1.7, size: 77 },
        { top: '18%', left: '30%', delay: 2.4, size: 52 },
        { top: '25%', right: '28%', delay: 0.6, size: 86 },
        { top: '32%', left: '15%', delay: 1.9, size: 69 },
        { top: '58%', right: '20%', delay: 2.7, size: 73 },
        { top: '68%', left: '22%', delay: 0.4, size: 81 },
        { top: '75%', right: '24%', delay: 1.2, size: 57 },
        { bottom: '8%', left: '25%', delay: 2.1, size: 92 },
        { bottom: '15%', right: '22%', delay: 0.7, size: 67 }
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, -20, 0],
            rotate: [0, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            duration: 8,
            delay: pos.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            ...pos,
            filter: 'drop-shadow(0 0 10px currentColor)',
            zIndex: 2
          }}
        >
          <TrippyMushroom size={pos.size} delay={pos.delay} />
        </motion.div>
      ))}

      {/* Floating Sparkles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 2, 1],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '6px',
            height: '6px',
            background: `radial-gradient(circle, ${['#fbbf24', '#ec4899', '#22d3ee', '#7c3aed'][i % 4]}, transparent)`,
            borderRadius: '50%',
            boxShadow: '0 0 10px currentColor',
            zIndex: 3
          }}
        />
      ))}

      {/* "Still Lost?" Button - Top Right - Opens Modal */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setShowModal(true)}
        title="Need more guidance?"
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 20px)',
          right: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3))',
          border: '2px solid rgba(124, 58, 237, 0.5)',
          borderRadius: '12px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
          transition: 'all 0.3s ease',
          animation: 'heartbeat 2s ease-in-out infinite',
          color: '#a78bfa',
          fontSize: '1rem',
          fontWeight: '600'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.6)';
          e.currentTarget.style.color = '#ec4899';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.4)';
          e.currentTarget.style.color = '#a78bfa';
        }}
      >
        <HelpCircle size={22} />
        <span>Still Lost?</span>
      </motion.button>

      {/* Footer */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <Footer />
      </div>

      {/* Still Lost Modal */}
      <StillLostModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes rainbowRipple {
          0% {
            width: 20px;
            height: 20px;
            opacity: 0.8;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

