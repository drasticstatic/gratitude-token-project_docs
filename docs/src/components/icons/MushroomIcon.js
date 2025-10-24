import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Mushroom Icon with sparkle and animation effects
 * Features: Gold and purple sparkles, rocking motion, breathing size
 */
export default function MushroomIcon({ size = 40 }) {
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
        {/* Gradient for cap */}
        <radialGradient id="capGradient" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="1"/>
          <stop offset="100%" stopColor="#581c87" stopOpacity="1"/>
        </radialGradient>
        
        {/* Gradient for stem */}
        <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" stopOpacity="1"/>
          <stop offset="100%" stopColor="#d1d5db" stopOpacity="1"/>
        </linearGradient>

        {/* Sparkle gradient */}
        <radialGradient id="sparkleGradient">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Mushroom Cap */}
      <ellipse
        cx="50"
        cy="35"
        rx="35"
        ry="25"
        fill="url(#capGradient)"
        stroke="#581c87"
        strokeWidth="2"
      />
      
      {/* Cap spots */}
      <circle cx="35" cy="30" r="4" fill="rgba(255, 255, 255, 0.3)"/>
      <circle cx="55" cy="28" r="3" fill="rgba(255, 255, 255, 0.3)"/>
      <circle cx="45" cy="38" r="3.5" fill="rgba(255, 255, 255, 0.3)"/>
      <circle cx="60" cy="35" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>

      {/* Gills under cap */}
      <path
        d="M 20 35 Q 50 45, 80 35"
        fill="none"
        stroke="rgba(88, 28, 135, 0.3)"
        strokeWidth="1"
      />
      <path
        d="M 25 37 Q 50 47, 75 37"
        fill="none"
        stroke="rgba(88, 28, 135, 0.3)"
        strokeWidth="1"
      />

      {/* Stem */}
      <rect
        x="42"
        y="35"
        width="16"
        height="45"
        rx="8"
        fill="url(#stemGradient)"
        stroke="#9ca3af"
        strokeWidth="1"
      />

      {/* Stem texture */}
      <line x1="45" y1="40" x2="45" y2="75" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>
      <line x1="55" y1="40" x2="55" y2="75" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>

      {/* Base/substrate */}
      <ellipse
        cx="50"
        cy="80"
        rx="20"
        ry="5"
        fill="rgba(120, 53, 15, 0.6)"
        stroke="rgba(92, 40, 10, 0.8)"
        strokeWidth="1"
      />

      {/* Animated sparkles */}
      <motion.circle
        cx="25"
        cy="25"
        r="3"
        fill="url(#sparkleGradient)"
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
        cy="30"
        r="2.5"
        fill="url(#sparkleGradient)"
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
        fill="url(#sparkleGradient)"
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
        cx="75"
        cy="40"
        r="2"
        fill="#fbbf24"
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

