import React from 'react';
import { motion } from 'framer-motion';

export default function GearIcon({ size = 72 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.9)) drop-shadow(0 0 25px rgba(236,72,153,0.6))',
        display: 'inline-block'
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <defs>
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        
        {/* Sparkle effect */}
        <filter id="gearSparkle">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
          <feBlend in="SourceGraphic" in2="glow" />
        </filter>
      </defs>

      {/* Main gear */}
      <g filter="url(#gearSparkle)">
        {/* Gear teeth */}
        <path
          d="M 50 10 L 55 15 L 55 20 L 45 20 L 45 15 Z
             M 70 15 L 75 20 L 72 28 L 63 25 L 66 17 Z
             M 85 30 L 88 37 L 82 43 L 75 38 L 78 30 Z
             M 90 50 L 85 55 L 80 55 L 80 45 L 85 45 Z
             M 85 70 L 88 63 L 82 57 L 75 62 L 78 70 Z
             M 70 85 L 75 80 L 72 72 L 63 75 L 66 83 Z
             M 50 90 L 55 85 L 55 80 L 45 80 L 45 85 Z
             M 30 85 L 25 80 L 28 72 L 37 75 L 34 83 Z
             M 15 70 L 12 63 L 18 57 L 25 62 L 22 70 Z
             M 10 50 L 15 55 L 20 55 L 20 45 L 15 45 Z
             M 15 30 L 12 37 L 18 43 L 25 38 L 22 30 Z
             M 30 15 L 25 20 L 28 28 L 37 25 L 34 17 Z"
          fill="url(#gearGradient)"
          stroke="#7c3aed"
          strokeWidth="1"
        />
        
        {/* Inner gear body */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="url(#gearGradient)"
          stroke="#ec4899"
          strokeWidth="2"
        />
        
        {/* Center hole */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="rgba(0,0,0,0.3)"
          stroke="#fbbf24"
          strokeWidth="2"
        />
        
        {/* Sparkle points */}
        <motion.circle
          cx="50"
          cy="20"
          r="2"
          fill="#fbbf24"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.circle
          cx="80"
          cy="50"
          r="2"
          fill="#ec4899"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <motion.circle
          cx="50"
          cy="80"
          r="2"
          fill="#7c3aed"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.circle
          cx="20"
          cy="50"
          r="2"
          fill="#fbbf24"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1.5
          }}
        />
      </g>
    </motion.svg>
  );
}

