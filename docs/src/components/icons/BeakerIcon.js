import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Beaker/Flask Icon with sparkle and animation effects
 * Features: Gold and purple sparkles, rocking motion, breathing size, bubbling liquid
 */
export default function BeakerIcon({ size = 40 }) {
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
        {/* Liquid gradient */}
        <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#ec4899" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#581c87" stopOpacity="1"/>
        </linearGradient>

        {/* Glass gradient */}
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)"/>
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)"/>
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)"/>
        </linearGradient>

        {/* Sparkle gradient */}
        <radialGradient id="beakerSparkle">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Flask body */}
      <path
        d="M 35 20 L 35 40 L 25 70 Q 25 85, 35 90 L 65 90 Q 75 85, 75 70 L 65 40 L 65 20 Z"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Liquid inside */}
      <motion.path
        d="M 36 50 L 28 70 Q 28 83, 36 87 L 64 87 Q 72 83, 72 70 L 64 50 Z"
        fill="url(#liquidGradient)"
        animate={{
          d: [
            "M 36 50 L 28 70 Q 28 83, 36 87 L 64 87 Q 72 83, 72 70 L 64 50 Z",
            "M 36 48 L 27 70 Q 27 83, 36 87 L 64 87 Q 73 83, 73 70 L 64 48 Z",
            "M 36 50 L 28 70 Q 28 83, 36 87 L 64 87 Q 72 83, 72 70 L 64 50 Z"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bubbles in liquid */}
      <motion.circle
        cx="45"
        cy="70"
        r="3"
        fill="rgba(255, 255, 255, 0.4)"
        animate={{
          cy: [70, 55, 70],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.circle
        cx="55"
        cy="75"
        r="2.5"
        fill="rgba(255, 255, 255, 0.4)"
        animate={{
          cy: [75, 60, 75],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.circle
        cx="40"
        cy="80"
        r="2"
        fill="rgba(255, 255, 255, 0.4)"
        animate={{
          cy: [80, 65, 80],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Glass shine */}
      <ellipse
        cx="40"
        cy="35"
        rx="8"
        ry="15"
        fill="url(#glassGradient)"
        opacity="0.5"
      />

      {/* Flask neck */}
      <rect
        x="42"
        y="10"
        width="16"
        height="12"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Flask rim */}
      <rect
        x="40"
        y="10"
        width="20"
        height="3"
        fill="#9ca3af"
        opacity="0.6"
      />

      {/* Measurement lines */}
      <line x1="70" y1="60" x2="73" y2="60" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>
      <line x1="70" y1="70" x2="73" y2="70" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>
      <line x1="70" y1="80" x2="73" y2="80" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>

      {/* Animated sparkles */}
      <motion.circle
        cx="25"
        cy="60"
        r="3"
        fill="url(#beakerSparkle)"
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
        cy="55"
        r="2.5"
        fill="url(#beakerSparkle)"
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
        cy="45"
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

