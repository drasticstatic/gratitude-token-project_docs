import React from "react";
import { motion } from "framer-motion";

// Multi-mushroom cluster icon for Daily Shrooms title (keep original MushroomIcon for other uses)
export default function MushroomClusterIcon({ size = 88, color = "#a78bfa" }) {
  const s = size; // outer box
  const cap = (cx, cy, r, fill, stroke = color, sw = 2) => (
    <g>
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.65} fill={fill} stroke={stroke} strokeWidth={sw} />
      <path d={`M ${cx - r * 0.75} ${cy} Q ${cx} ${cy + r * 0.35}, ${cx + r * 0.75} ${cy}`} fill="none" stroke={stroke} strokeWidth={sw * 0.6} opacity="0.6" />
    </g>
  );
  const stem = (x, y, h, w, stroke = color, sw = 2) => (
    <path d={`M ${x} ${y} C ${x - w} ${y + h * 0.25}, ${x + w * 0.25} ${y + h * 0.55}, ${x} ${y + h} C ${x - w * 0.2} ${y + h * 0.85}, ${x + w * 0.15} ${y + h * 0.95}, ${x} ${y + h}`} fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
  );

  return (
    <svg width={s} height={s} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', filter: 'drop-shadow(0 0 12px rgba(124,58,237,0.8))', animation: 'heartbeat 2s ease-in-out infinite, iconRocking 3s ease-in-out infinite' }}>
      <defs>
        <linearGradient id="m-cap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Left small mushroom */}
      {stem(35, 52, 28, 6)}
      {cap(30, 48, 12, 'url(#m-cap)')}
      {/* Left gills */}
      <path d="M 22 49 Q 30 52, 38 49" stroke={color} strokeWidth="0.8" opacity="0.6" fill="none" />

      {/* Right small mushroom */}
      {stem(68, 50, 30, 7)}
      {cap(70, 46, 14, 'url(#m-cap)')}
      {/* Right gills */}
      <path d="M 60 47 Q 70 50, 80 47" stroke={color} strokeWidth="0.8" opacity="0.6" fill="none" />

      {/* Center tall mushroom */}
      {stem(52, 40, 40, 8)}
      {cap(52, 34, 18, 'url(#m-cap)')}
      {/* Center gills */}
      <path d="M 38 36 Q 52 40, 66 36" stroke={color} strokeWidth="1" opacity="0.6" fill="none" />

      {/* Ground */}
      <path d="M 18 82 Q 50 88, 82 82" fill="none" stroke={color} strokeWidth="2" opacity="0.5" />

      {/* Animated Sparkles */}
      <motion.circle
        cx="24" cy="30" r="1.4" fill="#fbbf24"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.3, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.circle
        cx="78" cy="28" r="1.4" fill="#ec4899"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.3, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7
        }}
      />
      <motion.circle
        cx="58" cy="18" r="1.2" fill="#a78bfa"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.3, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.4
        }}
      />
      <motion.circle
        cx="42" cy="22" r="1" fill="#fbbf24"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [0.7, 1.2, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.circle
        cx="68" cy="38" r="1.1" fill="#7c3aed"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [0.7, 1.2, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      />
    </svg>
  );
}

