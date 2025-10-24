import React from 'react';
import { motion } from 'framer-motion';

export default function ContactIcon({ size = 40, style = {} }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={style}
      animate={{
        rotate: [-2, 2, -2],
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <defs>
        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <radialGradient id="contactGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow effect */}
      <circle cx="50" cy="50" r="40" fill="url(#contactGlow)" opacity="0.3" />

      {/* Envelope body */}
      <rect
        x="20"
        y="35"
        width="60"
        height="40"
        rx="4"
        fill="url(#contactGradient)"
        stroke="#fbbf24"
        strokeWidth="2"
      />

      {/* Envelope flap - back */}
      <path
        d="M 20 35 L 50 55 L 80 35"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Envelope flap - front */}
      <path
        d="M 20 35 L 50 55 L 80 35"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Message lines inside */}
      <line x1="30" y1="50" x2="70" y2="50" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
      <line x1="30" y1="57" x2="60" y2="57" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
      <line x1="30" y1="64" x2="65" y2="64" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />

      {/* Sparkle 1 - top left */}
      <motion.circle
        cx="15"
        cy="25"
        r="2"
        fill="#fbbf24"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle 2 - top right */}
      <motion.circle
        cx="85"
        cy="28"
        r="2.5"
        fill="#ec4899"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle 3 - bottom left */}
      <motion.circle
        cx="18"
        cy="78"
        r="2"
        fill="#7c3aed"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle 4 - bottom right */}
      <motion.circle
        cx="82"
        cy="80"
        r="2.5"
        fill="#fbbf24"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Heart symbol on envelope */}
      <motion.path
        d="M 50 45 C 50 42, 47 40, 45 40 C 43 40, 41 42, 41 44 C 41 47, 50 52, 50 52 C 50 52, 59 47, 59 44 C 59 42, 57 40, 55 40 C 53 40, 50 42, 50 45 Z"
        fill="#ec4899"
        opacity="0.8"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

