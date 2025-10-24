import React from "react";
import { motion } from "framer-motion";
import TrippyMushroom from "./TrippyMushroom";

export default function Footer() {
  // Generate random positions for hyphae nodes
  const generateHyphae = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
  };

  const hyphae = generateHyphae(30);

  // Generate roots coming down from above
  const generateConnectingRoots = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      startX: (i / count) * 100 + (Math.random() - 0.5) * 10,
      endX: (i / count) * 100 + (Math.random() - 0.5) * 20,
      controlX1: (i / count) * 100 + (Math.random() - 0.5) * 30,
      controlY1: -30 + Math.random() * 20,
      controlX2: (i / count) * 100 + (Math.random() - 0.5) * 30,
      controlY2: 30 + Math.random() * 20,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
  };

  const connectingRoots = generateConnectingRoots(12);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <div className="footer" style={{
        width: '100%',
        maxWidth: '900px',
        padding: '40px 20px',
        borderTop: '2px solid rgba(124, 58, 237, 0.5)',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grain\' x=\'0\' y=\'0\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1.5\' fill=\'%23d4a574\' opacity=\'0.3\'/%3E%3Ccircle cx=\'5\' cy=\'5\' r=\'1\' fill=\'%23c9984a\' opacity=\'0.2\'/%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'1\' fill=\'%23e6c896\' opacity=\'0.25\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23grain)\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover, 20px 20px',
        backgroundPosition: 'center, bottom',
        position: 'relative',
        overflow: 'visible'
      }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '32px', 
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <a
          href="https://discord.gg/psanctuary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
          onMouseLeave={(e) => e.target.style.color = '#a78bfa'}
        >
          Discord
        </a>
        <a
          href="https://t.me/psanctuary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
          onMouseLeave={(e) => e.target.style.color = '#a78bfa'}
        >
          Telegram
        </a>
        <a
          href="https://twitter.com/psanctuary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
          onMouseLeave={(e) => e.target.style.color = '#a78bfa'}
        >
          Twitter
        </a>
        <a
          href="https://github.com/psanctuary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
          onMouseLeave={(e) => e.target.style.color = '#a78bfa'}
        >
          GitHub
        </a>
        <a
          href="https://www.psanctuary.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
          onMouseLeave={(e) => e.target.style.color = '#a78bfa'}
        >
          Psanctuary.org
        </a>
      </div>
      <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
        ✨ Built for sacred coordination • v0.1 Prototype
      </div>
      </div>

      {/* Side Waving Roots - Left */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100px',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <motion.path
            key={`left-${i}`}
            d={`M 0 ${i * 12.5} Q 30 ${i * 12.5 + 5}, 50 ${i * 12.5 + 10} T 100 ${i * 12.5 + 20}`}
            stroke="url(#rootGradient)"
            strokeWidth="0.5"
            fill="none"
            animate={{
              d: [
                `M 0 ${i * 12.5} Q 30 ${i * 12.5 + 5}, 50 ${i * 12.5 + 10} T 100 ${i * 12.5 + 20}`,
                `M 0 ${i * 12.5} Q 35 ${i * 12.5 - 5}, 55 ${i * 12.5 + 5} T 100 ${i * 12.5 + 15}`,
                `M 0 ${i * 12.5} Q 30 ${i * 12.5 + 5}, 50 ${i * 12.5 + 10} T 100 ${i * 12.5 + 20}`,
              ],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Side Waving Roots - Right */}
      <svg
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100px',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <motion.path
            key={`right-${i}`}
            d={`M 100 ${i * 12.5} Q 70 ${i * 12.5 + 5}, 50 ${i * 12.5 + 10} T 0 ${i * 12.5 + 20}`}
            stroke="url(#rootGradient)"
            strokeWidth="0.5"
            fill="none"
            animate={{
              d: [
                `M 100 ${i * 12.5} Q 70 ${i * 12.5 + 5}, 50 ${i * 12.5 + 10} T 0 ${i * 12.5 + 20}`,
                `M 100 ${i * 12.5} Q 65 ${i * 12.5 - 5}, 45 ${i * 12.5 + 5} T 0 ${i * 12.5 + 15}`,
                `M 100 ${i * 12.5} Q 70 ${i * 12.5 + 5}, 50 ${i * 12.5 + 10} T 0 ${i * 12.5 + 20}`,
              ],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Connecting Roots from Above */}
      <svg
        style={{
          position: 'absolute',
          top: '-100px',
          left: 0,
          width: '100%',
          height: '100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {connectingRoots.map((root) => (
          <motion.path
            key={root.id}
            d={`M ${root.startX} 0 C ${root.controlX1} ${root.controlY1}, ${root.controlX2} ${root.controlY2}, ${root.endX} 100`}
            stroke="url(#rootGradient)"
            strokeWidth="0.3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.8, 0.3],
              strokeWidth: [0.2, 0.4, 0.2]
            }}
            transition={{
              pathLength: { duration: 2, delay: root.delay },
              opacity: { duration: root.duration, delay: root.delay, repeat: Infinity },
              strokeWidth: { duration: root.duration, delay: root.delay, repeat: Infinity }
            }}
          />
        ))}

        {/* Pulsing nodes at connection points */}
        {connectingRoots.map((root) => (
          <motion.circle
            key={`node-${root.id}`}
            cx={root.endX}
            cy="100"
            r="0.5"
            fill="#fbbf24"
            animate={{
              opacity: [0.3, 1, 0.3],
              r: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: root.duration,
              delay: root.delay,
              repeat: Infinity
            }}
          />
        ))}
      </svg>

      {/* Mycelial Hyphae Background */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4
        }}
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footerHyphaeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Fine hyphae network */}
        <g stroke="url(#footerHyphaeGradient)" fill="none" strokeWidth="1" opacity="0.6">
          {/* Horizontal main branches - ANIMATED */}
          <motion.path
            d="M 0 100 Q 250 80, 500 100 T 1000 100"
            strokeWidth="2"
            animate={{
              d: [
                "M 0 100 Q 250 80, 500 100 T 1000 100",
                "M 0 100 Q 250 120, 500 100 T 1000 100",
                "M 0 100 Q 250 80, 500 100 T 1000 100",
              ],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 0 120 Q 250 140, 500 120 T 1000 120"
            strokeWidth="2"
            animate={{
              d: [
                "M 0 120 Q 250 140, 500 120 T 1000 120",
                "M 0 120 Q 250 100, 500 120 T 1000 120",
                "M 0 120 Q 250 140, 500 120 T 1000 120",
              ],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.path
            d="M 0 80 Q 250 60, 500 80 T 1000 80"
            strokeWidth="1.5"
            animate={{
              d: [
                "M 0 80 Q 250 60, 500 80 T 1000 80",
                "M 0 80 Q 250 100, 500 80 T 1000 80",
                "M 0 80 Q 250 60, 500 80 T 1000 80",
              ],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.path
            d="M 0 140 Q 250 160, 500 140 T 1000 140"
            strokeWidth="1.5"
            animate={{
              d: [
                "M 0 140 Q 250 160, 500 140 T 1000 140",
                "M 0 140 Q 250 120, 500 140 T 1000 140",
                "M 0 140 Q 250 160, 500 140 T 1000 140",
              ],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Vertical connecting branches */}
          <path d="M 100 0 Q 90 50, 100 100 T 100 200" strokeWidth="1" opacity="0.4" />
          <path d="M 200 0 Q 210 50, 200 100 T 200 200" strokeWidth="1" opacity="0.4" />
          <path d="M 300 0 Q 290 50, 300 100 T 300 200" strokeWidth="1" opacity="0.4" />
          <path d="M 400 0 Q 410 50, 400 100 T 400 200" strokeWidth="1" opacity="0.4" />
          <path d="M 500 0 Q 490 50, 500 100 T 500 200" strokeWidth="1" opacity="0.4" />
          <path d="M 600 0 Q 610 50, 600 100 T 600 200" strokeWidth="1" opacity="0.4" />
          <path d="M 700 0 Q 690 50, 700 100 T 700 200" strokeWidth="1" opacity="0.4" />
          <path d="M 800 0 Q 810 50, 800 100 T 800 200" strokeWidth="1" opacity="0.4" />
          <path d="M 900 0 Q 890 50, 900 100 T 900 200" strokeWidth="1" opacity="0.4" />

          {/* Diagonal cross-connections */}
          <path d="M 0 100 L 200 80" strokeWidth="0.8" opacity="0.3" />
          <path d="M 200 120 L 400 100" strokeWidth="0.8" opacity="0.3" />
          <path d="M 400 80 L 600 120" strokeWidth="0.8" opacity="0.3" />
          <path d="M 600 100 L 800 140" strokeWidth="0.8" opacity="0.3" />
          <path d="M 800 80 L 1000 100" strokeWidth="0.8" opacity="0.3" />
        </g>

        {/* Pulsing nodes */}
        {hyphae.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill="#fbbf24"
            animate={{
              opacity: [0.3, 1, 0.3],
              r: [1.5, 3, 1.5],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Small Trippy Mushrooms - Growing from Substratum along top of footer */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '-30px',
            left: `${(i / 20) * 100}%`,
            transform: 'translateX(-50%)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        >
          <TrippyMushroom
            size={30 + Math.random() * 25}
            delay={i * 0.5}
          />
        </div>
      ))}

      </div>
    </div>
  );
}

