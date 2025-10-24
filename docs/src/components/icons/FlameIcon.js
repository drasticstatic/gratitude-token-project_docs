import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Flame Icon with sparkle and animation effects
 * Features: Gold and purple sparkles, rocking motion, breathing size
 */
export default function FlameIcon({ size = 40 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: [-3, 3, -3],
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <defs>
        {/* Outer flame gradient - purple/pink scheme */}
        <linearGradient id="outerFlame" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#ec4899" stopOpacity="1"/>
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="1"/>
        </linearGradient>

        {/* Inner flame gradient */}
        <linearGradient id="innerFlame" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="1"/>
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="100%" stopColor="#ec4899" stopOpacity="1"/>
        </linearGradient>

        {/* Sparkle gradient */}
        <radialGradient id="flameSparkle">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Pile of sticks beneath flame */}
      <line x1="35" y1="85" x2="65" y2="85" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="88" x2="70" y2="88" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="82" x2="62" y2="82" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="90" x2="60" y2="90" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33" y1="86" x2="45" y2="84" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="84" x2="67" y2="86" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />

      {/* Outer flame */}
      <motion.path
        d="M 50 10 Q 35 30, 30 50 Q 28 65, 35 75 Q 42 85, 50 90 Q 58 85, 65 75 Q 72 65, 70 50 Q 65 30, 50 10 Z"
        fill="url(#outerFlame)"
        stroke="#7c3aed"
        strokeWidth="1"
        animate={{
          d: [
            "M 50 10 Q 35 30, 30 50 Q 28 65, 35 75 Q 42 85, 50 90 Q 58 85, 65 75 Q 72 65, 70 50 Q 65 30, 50 10 Z",
            "M 50 8 Q 33 28, 28 48 Q 26 63, 33 73 Q 40 83, 50 88 Q 60 83, 67 73 Q 74 63, 72 48 Q 67 28, 50 8 Z",
            "M 50 10 Q 35 30, 30 50 Q 28 65, 35 75 Q 42 85, 50 90 Q 58 85, 65 75 Q 72 65, 70 50 Q 65 30, 50 10 Z"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Middle flame */}
      <motion.path
        d="M 50 20 Q 40 35, 38 50 Q 37 60, 42 68 Q 46 75, 50 78 Q 54 75, 58 68 Q 63 60, 62 50 Q 60 35, 50 20 Z"
        fill="url(#innerFlame)"
        animate={{
          d: [
            "M 50 20 Q 40 35, 38 50 Q 37 60, 42 68 Q 46 75, 50 78 Q 54 75, 58 68 Q 63 60, 62 50 Q 60 35, 50 20 Z",
            "M 50 18 Q 38 33, 36 48 Q 35 58, 40 66 Q 44 73, 50 76 Q 56 73, 60 66 Q 65 58, 64 48 Q 62 33, 50 18 Z",
            "M 50 20 Q 40 35, 38 50 Q 37 60, 42 68 Q 46 75, 50 78 Q 54 75, 58 68 Q 63 60, 62 50 Q 60 35, 50 20 Z"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      />

      {/* Inner core */}
      <motion.ellipse
        cx="50"
        cy="50"
        rx="8"
        ry="15"
        fill="#fef3c7"
        opacity="0.9"
        animate={{
          ry: [15, 18, 15],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated sparkles */}
      <motion.circle
        cx="30"
        cy="40"
        r="3"
        fill="url(#flameSparkle)"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0
        }}
      />
      
      <motion.circle
        cx="70"
        cy="45"
        r="2.5"
        fill="url(#flameSparkle)"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5
        }}
      />

      <motion.circle
        cx="50"
        cy="25"
        r="2"
        fill="#fbbf24"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
      />

      <motion.circle
        cx="60"
        cy="60"
        r="2"
        fill="#7c3aed"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1.5
        }}
      />
    </motion.svg>
  );
}

