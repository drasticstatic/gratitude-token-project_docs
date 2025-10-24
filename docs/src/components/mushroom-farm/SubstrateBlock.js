import React, { useMemo } from 'react';
import { motion } from 'framer-motion';


/**
 * SubstrateBlock - Translucent substrate container with extensive mycelium network
 * Features:
 * - Translucent container with 3D perspective
 * - ~50 wavy mycelium root lines branching into hyphae
 * - 20-30+ pin mushrooms with varying wavy stem lengths
 * - Dangling roots from top of block
 * - Glitter particles
 */
const SubstrateBlock = ({
  flushesRemaining = 3,
  maxFlushes = 3,
  scale = 1,
  chargeFlash = false,
  regenSeed = 0
}) => {
  // Generate random wavy path for mycelium roots
  const generateWavyRoot = (startX, startY, index) => {
    const segments = 3 + Math.floor(Math.random() * 3);
    let path = `M${startX},${startY}`;
    let currentX = startX;
    let currentY = startY;

    for (let i = 0; i < segments; i++) {
      const deltaX = (Math.random() - 0.5) * 40;
      const deltaY = -20 - Math.random() * 30;
      const controlX = currentX + (Math.random() - 0.5) * 30;
      const controlY = currentY + deltaY / 2;
      currentX += deltaX;
      currentY += deltaY;
      path += ` Q${controlX},${controlY} ${currentX},${currentY}`;
    }

    return path;
  };

  // Generate hyphae branches from a point
  const generateHyphae = (x, y, count = 3) => {
    const branches = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * 120 - 60) * (Math.PI / 180);
      const length = 10 + Math.random() * 15;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      branches.push({ x1: x, y1: y, x2: endX, y2: endY });
    }
    return branches;
  };

  // Generate 50 mycelium roots with varying colors (memoized so they don't re-generate on re-renders)
  const myceliumRoots = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const startX = 15 + Math.random() * 250;
      const startY = 25 + Math.random() * 105;
      const path = generateWavyRoot(startX, startY, i);
      const colorIndex = i % 6;
      const gradientId = `rootGradient${colorIndex}`;
      return { path, gradientId, index: i };
    });
  }, [regenSeed]);

  // Generate 25-30 pin mushrooms with wavy stems (memoized)
  const pins = useMemo(() => {
    const pinCount = 25 + Math.floor(Math.random() * 6);
    return Array.from({ length: pinCount }, (_, i) => {
      const x = 20 + Math.random() * 240;
      const y = 30 + Math.random() * 95;
      const height = 5 + Math.random() * 15; // Some with longer stems
      const capSize = 2 + Math.random() * 3;
      const waviness = (Math.random() - 0.5) * 10;
      return { x, y, height, capSize, waviness, index: i };
    });
  }, [regenSeed]);

  // Generate dangling roots from top of block (memoized)
  const danglingRoots = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const x = 20 + (i * 16);
      const length = 10 + Math.random() * 20;
      const waviness = (Math.random() - 0.5) * 8;
      const pulseDur = `${(3 + Math.random() * 2).toFixed(2)}s`;
      return { x, length, waviness, index: i, pulseDur };
    });
  }, [regenSeed]);
  // Glitter positions & timings (memoized)
  const glitters = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      return {
        key: `glitter-${i}`,
        x: 20 + Math.random() * 240,
        y: 30 + Math.random() * 95,
        size: 1 + Math.random() * 2,
        dur: (1 + Math.random() * 2).toFixed(2) + 's',
        begin: (Math.random() * 2).toFixed(2) + 's'
      };
    });
  }, [regenSeed]);


  return (
    <svg
      width={280 * scale}
      height={140 * scale}
      viewBox="0 0 280 140"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Root gradients - 6 different color schemes */}
        <linearGradient id="rootGradient0" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="rootGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f9a8d4" />
        </linearGradient>
        <linearGradient id="rootGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="rootGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
        <linearGradient id="rootGradient4" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="rootGradient5" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>

        {/* Glitter gradient */}
        <linearGradient id="glitterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="25%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="75%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      {/* 3D Substrate block - Translucent container with chargeFlash effect */}
      <g
        filter={chargeFlash ? 'drop-shadow(0 0 12px rgba(59,130,246,0.8))' : 'none'}
        style={{ transition: 'filter 280ms ease' }}
      >
        {/* Front face - translucent */}
        <rect
          x="15"
          y="25"
          width="250"
          height="105"
          rx="5"
          fill="rgba(139, 92, 246, 0.08)"
          stroke={chargeFlash ? "rgba(59,130,246,0.7)" : "rgba(167, 139, 250, 0.3)"}
          strokeWidth={chargeFlash ? "3" : "2"}
        />

        {/* Top face - perspective */}
        <path
          d="M15,25 L30,15 L280,15 L265,25 Z"
          fill="rgba(167, 139, 250, 0.12)"
          stroke={chargeFlash ? "rgba(59,130,246,0.7)" : "rgba(167, 139, 250, 0.3)"}
          strokeWidth="1"
        />

        {/* Right side face - perspective */}
        <path
          d="M265,25 L280,15 L280,120 L265,130 Z"
          fill="rgba(124, 58, 237, 0.1)"
          stroke={chargeFlash ? "rgba(59,130,246,0.7)" : "rgba(167, 139, 250, 0.3)"}
          strokeWidth="1"
        />
      </g>

      {/* Dangling roots from top of block */}
      <g opacity="0.7">
        {danglingRoots.map(root => (
          <path
            key={`dangle-${root.index}`}
            d={`M${root.x},15 Q${root.x + root.waviness},${15 + root.length / 2} ${root.x},${15 + root.length}`}
            stroke="url(#rootGradient0)"
            strokeWidth="1"
            fill="none"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur={root.pulseDur}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </g>

      {/* 50 Wavy mycelium root lines with subtle energy pulse */}
      <motion.g
        opacity="0.85"
        initial={{ filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.35)) brightness(1)' }}
        animate={{ filter: [
          'drop-shadow(0 0 6px rgba(59,130,246,0.35)) brightness(1)',
          'drop-shadow(0 0 12px rgba(59,130,246,0.75)) brightness(1.12)',
          'drop-shadow(0 0 6px rgba(59,130,246,0.35)) brightness(1)'
        ] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'filter' }}
      >
        {myceliumRoots.map(root => (
          <g key={`root-${root.index}`}>
            <path
              d={root.path}
              stroke={`url(#${root.gradientId})`}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="4 6"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${3 + (root.index % 5)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                values="1.5;2;1.5"
                dur={`${4 + (root.index % 3)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                values="0;12;0"
                dur={`${9 + (root.index % 7)}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </motion.g>

      {/* Pin mushrooms (primordia) - 25-30 scattered around */}
      <g>
        {pins.map(pin => (
          <g key={`pin-${pin.index}`} transform={`translate(${pin.x}, ${pin.y})`}>
            {/* Wavy stem */}
            <path
              d={`M0,0 Q${pin.waviness},${-pin.height / 2} 0,${-pin.height}`}
              stroke="rgba(251, 191, 36, 0.7)"
              strokeWidth="3.3"
              fill="none"
            >
              <animate
                attributeName="opacity"
                values="0.5;0.9;0.5"
                dur={`${2 + (pin.index % 4)}s`}
                repeatCount="indefinite"
              />
            </path>
            {/* Tiny cap */}
            <circle
              cx="1.1"
              cy={-pin.height}
              r={pin.capSize}
              fill="rgba(167, 139, 250, 0.6)"
            >
              <animate
                attributeName="r"
                values={`${pin.capSize};${pin.capSize + 0.5};${pin.capSize}`}
                dur={`${2.5 + (pin.index % 3)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="rgba(167, 139, 250, 0.6);rgba(236, 72, 153, 0.6);rgba(251, 191, 36, 0.6);rgba(167, 139, 250, 0.6)"
                dur={`${6 + (pin.index % 4)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.9;0.6"
                dur={`${3 + (pin.index % 5)}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </g>

      {/* Glitter particles */}
      <g>
        {glitters.map(g => (
          <circle
            key={g.key}
            cx={g.x}
            cy={g.y}
            r={g.size}
            fill="url(#glitterGradient)"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={g.dur}
              repeatCount="indefinite"
              begin={g.begin}
            />
          </circle>
        ))}
      </g>

      {/* Flushes remaining indicator */}
      <text
        x="140"
        y="135"
        fontSize="10"
        fill="rgba(167, 139, 250, 0.6)"
        textAnchor="middle"
        fontFamily="monospace"
      >
        {flushesRemaining}/{maxFlushes} flushes
      </text>
    </svg>
  );
};

export default React.memo(SubstrateBlock);

