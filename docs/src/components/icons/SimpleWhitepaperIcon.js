import React from 'react';
import { motion } from 'framer-motion';

export default function SimpleWhitepaperIcon({ size = 32 }) {
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
        <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* Scroll body - BLUE */}
      <rect
        x="25"
        y="20"
        width="50"
        height="60"
        rx="3"
        fill="url(#scrollGradient)"
        opacity="0.9"
      />

      {/* Scroll curl at top - BLUE */}
      <path
        d="M 25 20 Q 25 15, 30 15 L 70 15 Q 75 15, 75 20"
        fill="#60a5fa"
        opacity="0.7"
      />

      {/* Text lines - BLUE/WHITE */}
      <line x1="35" y1="35" x2="65" y2="35" stroke="#dbeafe" strokeWidth="2" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="35" y1="45" x2="65" y2="45" stroke="#dbeafe" strokeWidth="2" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="35" y1="55" x2="65" y2="55" stroke="#dbeafe" strokeWidth="2" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" begin="0.6s" repeatCount="indefinite"/>
      </line>
      <line x1="35" y1="65" x2="55" y2="65" stroke="#dbeafe" strokeWidth="2" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" begin="0.9s" repeatCount="indefinite"/>
      </line>

      {/* Sparkle - BLUE */}
      <circle cx="80" cy="25" r="3" fill="#93c5fd">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </motion.svg>
  );
}

