import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Offering/Heart Icon with sparkle and animation effects
 * Features: Gold and purple sparkles, rocking motion, breathing size
 */
export default function OfferingIcon({ size = 40 }) {
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
        {/* Heart gradient */}
        <radialGradient id="heartGradient" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="1"/>
          <stop offset="100%" stopColor="#581c87" stopOpacity="1"/>
        </radialGradient>

        {/* Sparkle gradient */}
        <radialGradient id="offeringSparkle">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>

        {/* Glow filter */}
        <filter id="heartGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Saucer beneath heart */}
      <ellipse cx="50" cy="88" rx="22" ry="5" fill="rgba(124,58,237,0.3)" stroke="#7c3aed" strokeWidth="1.5" />
      <ellipse cx="50" cy="87" rx="18" ry="3" fill="rgba(236,72,153,0.2)" />

      {/* Hover effect - subtle lines from heart to saucer */}
      <motion.line
        x1="50" y1="75" x2="50" y2="85"
        stroke="#ec4899"
        strokeWidth="0.5"
        opacity="0.3"
        strokeDasharray="2 2"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Outer glow */}
      <motion.path
        d="M 50 85 C 50 85, 20 60, 20 40 C 20 25, 30 15, 40 15 C 45 15, 50 20, 50 20 C 50 20, 55 15, 60 15 C 70 15, 80 25, 80 40 C 80 60, 50 85, 50 85 Z"
        fill="none"
        stroke="#ec4899"
        strokeWidth="3"
        opacity="0.3"
        filter="url(#heartGlow)"
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

      {/* Main heart */}
      <motion.path
        d="M 50 85 C 50 85, 20 60, 20 40 C 20 25, 30 15, 40 15 C 45 15, 50 20, 50 20 C 50 20, 55 15, 60 15 C 70 15, 80 25, 80 40 C 80 60, 50 85, 50 85 Z"
        fill="url(#heartGradient)"
        stroke="#581c87"
        strokeWidth="2"
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Heart highlights */}
      <ellipse
        cx="35"
        cy="30"
        rx="8"
        ry="10"
        fill="rgba(255, 255, 255, 0.2)"
      />
      <ellipse
        cx="60"
        cy="28"
        rx="6"
        ry="8"
        fill="rgba(255, 255, 255, 0.2)"
      />

      {/* Offering hands beneath */}
      <path
        d="M 30 70 Q 25 75, 20 78 L 22 80 Q 27 77, 32 72 Z"
        fill="rgba(251, 191, 36, 0.6)"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <path
        d="M 70 70 Q 75 75, 80 78 L 78 80 Q 73 77, 68 72 Z"
        fill="rgba(251, 191, 36, 0.6)"
        stroke="#fbbf24"
        strokeWidth="1"
      />

      {/* Animated sparkles */}
      <motion.circle
        cx="25"
        cy="30"
        r="3"
        fill="url(#offeringSparkle)"
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
        cx="75"
        cy="35"
        r="2.5"
        fill="url(#offeringSparkle)"
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
        cy="15"
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
        cx="65"
        cy="50"
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

      <motion.circle
        cx="35"
        cy="55"
        r="2"
        fill="#ec4899"
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

