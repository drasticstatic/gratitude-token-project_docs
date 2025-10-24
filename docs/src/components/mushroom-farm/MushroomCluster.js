import React from 'react';
import { motion } from 'framer-motion';

/**
 * MushroomCluster - Reusable component for a cluster of 5 psilocybin mushrooms
 * Features:
 * - 1 center mushroom + 4 surrounding mushrooms
 * - 3+ color-changing dots on each cap
 * - Veil rings appear at 85%+ growth
 * - Scalable for different sizes
 */
const MushroomCluster = ({ 
  mushroomGrowth = 0, 
  scale = 1, 
  chargeFlash = false 
}) => {
  // Single mushroom component with color-changing dots
  const Mushroom = ({ x, y, size = 1, rotation = 0 }) => {
    const stemWidth = 16 * size;
    const stemHeight = 30 * size * mushroomGrowth;
    const capRx = 25 * size * mushroomGrowth;
    const capRy = 15 * size * mushroomGrowth;
    const showVeil = mushroomGrowth >= 0.85;

    return (
      <g
        transform={`translate(${x}, ${y}) rotate(${rotation})`}
        style={{
          filter: chargeFlash ? 'drop-shadow(0 0 10px rgba(59,130,246,0.85))' : 'none',
          transition: 'filter 0.3s ease'
        }}
      >
        {/* Stem */}
        <motion.rect
          x={-stemWidth / 2}
          y="-15"
          width={stemWidth}
          height={stemHeight}
          rx="8"
          fill="url(#stemGradient)"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: mushroomGrowth }}
          transition={{ duration: 0.5 }}
          style={{
            transformOrigin: 'center top'
          }}
        />

        {/* Veil ring (broken veil stage) - appears at 85%+ growth */}
        {showVeil && (
          <motion.ellipse
            cx="0"
            cy={1 * mushroomGrowth}
            rx={10 * size}
            ry="2"
            fill="rgba(255,255,255,0.6)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Cap */}
        <motion.ellipse
          cx="0"
          cy="-15"
          rx={capRx}
          ry={capRy}
          fill="url(#capGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: mushroomGrowth }}
          transition={{ duration: 0.5 }}
          style={{
            transformOrigin: 'center'
          }}
        />

        {/* Color-changing dots on cap (3-5 dots per mushroom) */}
        {mushroomGrowth > 0.3 && (
          <>
            {/* Dot 1 - Golden to Purple to Pink */}
            <circle cx={-8 * size} cy="-15" r={2.5 * size * mushroomGrowth} fill="#fbbf24">
              <animate 
                attributeName="fill" 
                values="#fbbf24;#a78bfa;#ec4899;#fbbf24" 
                dur="4s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.8;1;0.8" 
                dur="2s" 
                repeatCount="indefinite"
              />
            </circle>

            {/* Dot 2 - Purple to Pink to Golden */}
            <circle cx={8 * size} cy="-15" r={2.5 * size * mushroomGrowth} fill="#a78bfa">
              <animate 
                attributeName="fill" 
                values="#a78bfa;#ec4899;#fbbf24;#a78bfa" 
                dur="5s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.8;1;0.8" 
                dur="2.5s" 
                repeatCount="indefinite"
              />
            </circle>

            {/* Dot 3 - Pink to Golden to Purple */}
            <circle cx="0" cy={-20 * size} r={2.5 * size * mushroomGrowth} fill="#ec4899">
              <animate 
                attributeName="fill" 
                values="#ec4899;#fbbf24;#a78bfa;#ec4899" 
                dur="6s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.8;1;0.8" 
                dur="3s" 
                repeatCount="indefinite"
              />
            </circle>

            {/* Dot 4 - Cyan to Golden */}
            <circle cx={-4 * size} cy={-10 * size} r={2 * size * mushroomGrowth} fill="#93c5fd">
              <animate 
                attributeName="fill" 
                values="#93c5fd;#fbbf24;#93c5fd" 
                dur="4.5s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.7;1;0.7" 
                dur="2.2s" 
                repeatCount="indefinite"
              />
            </circle>

            {/* Dot 5 - Purple glow */}
            <circle cx={4 * size} cy={-10 * size} r={2 * size * mushroomGrowth} fill="#7c3aed">
              <animate 
                attributeName="fill" 
                values="#7c3aed;#ec4899;#7c3aed" 
                dur="5.5s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.7;1;0.7" 
                dur="2.8s" 
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </g>
    );
  };

  return (
    <motion.g transform={`scale(${scale})`}
      initial={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.45)) brightness(1)' }}
      animate={{ filter: [
        'drop-shadow(0 0 10px rgba(59,130,246,0.45)) brightness(1)',
        'drop-shadow(0 0 16px rgba(59,130,246,0.85)) brightness(1.16)',
        'drop-shadow(0 0 10px rgba(59,130,246,0.45)) brightness(1)'
      ] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'filter' }}
    >
      {/* Shared gradients */}
      <defs>
        <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Center mushroom (largest) */}
      <Mushroom x={70} y={70} size={1} rotation={0} />

      {/* Surrounding mushrooms (4 smaller ones) */}
      <Mushroom x={35} y={55} size={0.75} rotation={-5} />
      <Mushroom x={105} y={55} size={0.75} rotation={5} />
      <Mushroom x={25} y={85} size={0.7} rotation={-8} />
      <Mushroom x={115} y={85} size={0.7} rotation={8} />
    </motion.g>
  );
};

export default React.memo(MushroomCluster);
