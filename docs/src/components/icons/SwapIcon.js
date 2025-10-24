import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Swap/Exchange Icon with sparkle and animation effects
 * Features: Gold and purple sparkles, rocking motion, breathing size, rotating arrows
 */
export default function SwapIcon({ size = 40 }) {
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
        {/* Arrow gradient */}
        <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="1"/>
          <stop offset="100%" stopColor="#ec4899" stopOpacity="1"/>
        </linearGradient>

        <linearGradient id="arrowGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="1"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="1"/>
        </linearGradient>

        {/* Sparkle gradient */}
        <radialGradient id="swapSparkle">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Circular path */}
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="rgba(124, 58, 237, 0.2)"
        strokeWidth="2"
        strokeDasharray="5,5"
      />

      {/* Top arrow (pointing right) */}
      <motion.g
        animate={{
          x: [0, 3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path
          d="M 20 35 L 65 35 L 65 30 L 75 40 L 65 50 L 65 45 L 20 45 Z"
          fill="url(#arrowGradient1)"
          stroke="#581c87"
          strokeWidth="1.5"
        />
        {/* Arrow shine */}
        <path
          d="M 25 37 L 60 37 L 60 35 L 65 40 L 60 43 L 60 41 L 25 41 Z"
          fill="rgba(255, 255, 255, 0.2)"
        />
      </motion.g>

      {/* Bottom arrow (pointing left) */}
      <motion.g
        animate={{
          x: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <path
          d="M 80 55 L 35 55 L 35 50 L 25 60 L 35 70 L 35 65 L 80 65 Z"
          fill="url(#arrowGradient2)"
          stroke="#dc2626"
          strokeWidth="1.5"
        />
        {/* Arrow shine */}
        <path
          d="M 75 57 L 40 57 L 40 55 L 35 60 L 40 63 L 40 61 L 75 61 Z"
          fill="rgba(255, 255, 255, 0.2)"
        />
      </motion.g>

      {/* Center circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="12"
        fill="rgba(124, 58, 237, 0.3)"
        stroke="#7c3aed"
        strokeWidth="2"
        animate={{
          r: [12, 14, 12],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center symbol */}
      <text
        x="50"
        y="55"
        fontSize="16"
        fill="#fbbf24"
        textAnchor="middle"
        fontWeight="bold"
      >
        ⇄
      </text>

      {/* Animated sparkles */}
      <motion.circle
        cx="20"
        cy="30"
        r="3"
        fill="url(#swapSparkle)"
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
        cx="80"
        cy="70"
        r="2.5"
        fill="url(#swapSparkle)"
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
        cx="75"
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
        cx="25"
        cy="75"
        r="2"
        fill="#ec4899"
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

