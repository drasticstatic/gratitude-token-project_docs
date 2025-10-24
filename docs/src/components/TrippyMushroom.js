import React from 'react';
import { motion } from 'framer-motion';

/**
 * TrippyMushroom - Animated psychedelic mushroom SVG
 * Used on 404 page, Daily Shrooms, Cross Breeding, and Home pages
 * Features: Wavy bell-bottom stem, smooth umbrella cap with tit, breathing cap, vanishing dots
 * Lifecycle: Pin → Growing → Fruiting Body → Fade Away → Reappear (slower cycle)
 */
export default function TrippyMushroom({ size = 80, delay = 0 }) {
  const colors = ['#ec4899', '#7c3aed', '#22d3ee', '#fbbf24'];
  const colorIndex = Math.floor(delay * 2) % colors.length;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      className="trippy-mushroom"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: [0, 0.3, 0.6, 0.9, 1, 1, 1, 0.9, 0.6, 0.3, 0],
        scale: [0.3, 0.5, 0.7, 0.9, 1, 1.05, 1, 0.95, 0.7, 0.5, 0.3],
        filter: [
          `drop-shadow(0 0 5px ${colors[colorIndex]})`,
          `drop-shadow(0 0 10px ${colors[colorIndex]})`,
          `drop-shadow(0 0 15px ${colors[(colorIndex + 1) % colors.length]})`,
          `drop-shadow(0 0 20px ${colors[(colorIndex + 2) % colors.length]})`,
          `drop-shadow(0 0 20px ${colors[(colorIndex + 3) % colors.length]})`,
          `drop-shadow(0 0 20px ${colors[(colorIndex + 2) % colors.length]})`,
          `drop-shadow(0 0 15px ${colors[(colorIndex + 1) % colors.length]})`,
          `drop-shadow(0 0 10px ${colors[colorIndex]})`,
          `drop-shadow(0 0 5px ${colors[colorIndex]})`,
          `drop-shadow(0 0 3px ${colors[colorIndex]})`,
          `drop-shadow(0 0 0px ${colors[colorIndex]})`
        ]
      }}
      transition={{
        duration: 18,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatDelay: 2
      }}
    >
      {/* Wavy Bell-Bottom Stem - White with Gold Shimmer */}
      <defs>
        <linearGradient id={`stemGradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95">
            <animate attributeName="stop-color" values="#ffffff;#fbbf24;#ffffff" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9">
            <animate attributeName="stop-color" values="#fbbf24;#ffffff;#fbbf24" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95">
            <animate attributeName="stop-color" values="#ffffff;#fbbf24;#ffffff" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      <motion.path
        d="M 45 50 Q 42 65 40 80 Q 38 95 42 110 L 58 110 Q 62 95 60 80 Q 58 65 55 50 Z"
        fill={`url(#stemGradient-${delay})`}
        opacity="0.95"
        animate={{
          d: [
            "M 45 50 Q 42 65 40 80 Q 38 95 42 110 L 58 110 Q 62 95 60 80 Q 58 65 55 50 Z",
            "M 45 50 Q 43 65 42 80 Q 40 95 44 110 L 56 110 Q 60 95 58 80 Q 57 65 55 50 Z",
            "M 45 50 Q 42 65 40 80 Q 38 95 42 110 L 58 110 Q 62 95 60 80 Q 58 65 55 50 Z"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Stem highlight for depth - Gold shimmer */}
      <motion.path
        d="M 48 52 Q 46 67 45 82 Q 44 97 46 108"
        stroke="#fbbf24"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          stroke: ['#fbbf24', '#ffffff', '#fbbf24']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Smooth Umbrella Cap with Tit - Breathing Vertically */}
      <motion.path
        d="M 15 40 Q 15 25 30 18 Q 50 12 70 18 Q 85 25 85 40 Q 85 50 75 55 Q 60 60 50 60 Q 40 60 25 55 Q 15 50 15 40 Z"
        fill={colors[colorIndex]}
        opacity="0.9"
        animate={{
          fill: [...colors.map((_, i) => colors[(colorIndex + i) % colors.length]), colors[colorIndex]],
          d: [
            "M 15 40 Q 15 25 30 18 Q 50 12 70 18 Q 85 25 85 40 Q 85 50 75 55 Q 60 60 50 60 Q 40 60 25 55 Q 15 50 15 40 Z",
            "M 15 38 Q 15 23 30 16 Q 50 10 70 16 Q 85 23 85 38 Q 85 48 75 53 Q 60 58 50 58 Q 40 58 25 53 Q 15 48 15 38 Z",
            "M 15 40 Q 15 25 30 18 Q 50 12 70 18 Q 85 25 85 40 Q 85 50 75 55 Q 60 60 50 60 Q 40 60 25 55 Q 15 50 15 40 Z"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Concave Gills Underneath Cap (3D effect) */}
      <motion.path
        d="M 20 50 Q 50 45 80 50"
        stroke={colors[(colorIndex + 2) % colors.length]}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          stroke: [...colors.map((_, i) => colors[(colorIndex + i + 2) % colors.length]), colors[(colorIndex + 2) % colors.length]]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M 25 52 Q 50 48 75 52"
        stroke={colors[(colorIndex + 2) % colors.length]}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M 30 54 Q 50 51 70 54"
        stroke={colors[(colorIndex + 2) % colors.length]}
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cap Tit (nipple on top) - Breathing */}
      <motion.ellipse
        cx="50"
        cy="15"
        rx="6"
        ry="8"
        fill={colors[colorIndex]}
        opacity="0.95"
        animate={{
          fill: [...colors.map((_, i) => colors[(colorIndex + i) % colors.length]), colors[colorIndex]],
          ry: [8, 9.5, 8],
          cy: [15, 14, 15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cap shine/highlight */}
      <motion.ellipse
        cx="40"
        cy="30"
        rx="12"
        ry="8"
        fill="#fff"
        opacity="0.25"
        animate={{
          opacity: [0.25, 0.4, 0.25]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Spots on cap - scattered - VANISH AND REAPPEAR */}
      {[
        { cx: 30, cy: 35, r: 3.5 },
        { cx: 45, cy: 32, r: 2.8 },
        { cx: 60, cy: 38, r: 3.2 },
        { cx: 70, cy: 33, r: 2.5 },
        { cx: 38, cy: 45, r: 2.9 },
        { cx: 55, cy: 47, r: 3.1 }
      ].map((spot, i) => (
        <motion.circle
          key={i}
          cx={spot.cx}
          cy={spot.cy}
          r={spot.r}
          fill="#fff"
          opacity="0.7"
          animate={{
            opacity: [0.7, 0.9, 0.7, 0.3, 0, 0.3, 0.7],
            scale: [1, 1.15, 1, 0.8, 0.5, 0.8, 1],
            r: [spot.r, spot.r * 1.15, spot.r, spot.r * 0.8, spot.r * 0.5, spot.r * 0.8, spot.r]
          }}
          transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </motion.svg>
  );
}

