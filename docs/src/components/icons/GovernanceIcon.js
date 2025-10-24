import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Governance/Shield Icon with sparkle and animation effects
 * Features: Gold and purple sparkles, rocking motion, breathing size
 */
export default function GovernanceIcon({ size = 40 }) {
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
        {/* Shield gradient */}
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="1"/>
          <stop offset="50%" stopColor="#ec4899" stopOpacity="1"/>
          <stop offset="100%" stopColor="#581c87" stopOpacity="1"/>
        </linearGradient>

        {/* Sparkle gradient */}
        <radialGradient id="govSparkle">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>

        {/* Glow filter */}
        <filter id="shieldGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Shield outer glow */}
      <motion.path
        d="M 50 10 L 80 20 L 80 45 Q 80 70, 50 90 Q 20 70, 20 45 L 20 20 Z"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="3"
        opacity="0.3"
        filter="url(#shieldGlow)"
        animate={{
          strokeWidth: [3, 5, 3],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main shield */}
      <path
        d="M 50 10 L 80 20 L 80 45 Q 80 70, 50 90 Q 20 70, 20 45 L 20 20 Z"
        fill="url(#shieldGradient)"
        stroke="#581c87"
        strokeWidth="2"
      />

      {/* Shield emblem - checkmark/vote symbol */}
      <motion.path
        d="M 40 50 L 47 60 L 65 35"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          strokeWidth: [4, 5, 4],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Shield highlights */}
      <path
        d="M 35 25 Q 40 30, 45 25"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 55 22 Q 60 27, 65 22"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Decorative border */}
      <path
        d="M 50 15 L 70 23 L 70 45 Q 70 67, 50 85 Q 30 67, 30 45 L 30 23 Z"
        fill="none"
        stroke="rgba(251, 191, 36, 0.4)"
        strokeWidth="1"
        strokeDasharray="3,3"
      />

      {/* Animated sparkles */}
      <motion.circle
        cx="30"
        cy="35"
        r="3"
        fill="url(#govSparkle)"
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
        cy="40"
        r="2.5"
        fill="url(#govSparkle)"
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
        cy="20"
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
        cy="70"
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

      <motion.circle
        cx="40"
        cy="75"
        r="2"
        fill="#7c3aed"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.7
        }}
      />
    </motion.svg>
  );
}

