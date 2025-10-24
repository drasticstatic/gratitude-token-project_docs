import React from 'react';
import { motion } from 'framer-motion';

export default function SimpleChurchIcon({ size = 32 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="churchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      
      {/* Church building */}
      <rect
        x="35"
        y="55"
        width="30"
        height="30"
        fill="url(#churchGradient)"
        opacity="0.9"
      />
      
      {/* Roof */}
      <polygon
        points="50,35 25,55 75,55"
        fill="#92400e"
        opacity="0.9"
      />
      
      {/* Steeple */}
      <rect
        x="46"
        y="25"
        width="8"
        height="15"
        fill="#92400e"
        opacity="0.9"
      />
      
      {/* Cross on top */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="50" y1="15" x2="50" y2="28" stroke="#fbbf24" strokeWidth="2.5"/>
        <line x1="45" y1="20" x2="55" y2="20" stroke="#fbbf24" strokeWidth="2.5"/>
      </motion.g>
      
      {/* Door */}
      <rect
        x="45"
        y="70"
        width="10"
        height="15"
        rx="2"
        fill="#78350f"
        opacity="0.9"
      />
      
      {/* Windows with glow */}
      <rect x="38" y="62" width="6" height="6" fill="#fbbf24" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="56" y="62" width="6" height="6" fill="#fbbf24" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
      </rect>
      
      {/* Sparkle */}
      <circle cx="80" cy="30" r="3" fill="#fbbf24">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </motion.svg>
  );
}

