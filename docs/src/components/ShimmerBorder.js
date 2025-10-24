import React from 'react';

/**
 * ShimmerBorder - Traveling sparkle particles around element border
 * Mimics the mushroom gallery placeholder effect
 * Used for contact cards and other highlighted elements
 */
export default function ShimmerBorder({ width = 300, height = 280 }) {
  return (
    <svg style={{
      position: 'absolute',
      top: '-15px',
      left: '-15px',
      width: 'calc(100% + 30px)',
      height: 'calc(100% + 30px)',
      pointerEvents: 'none',
      zIndex: 10
    }} viewBox={`0 0 ${width} ${height}`} fill="none">
      {/* Traveling sparkle particles - expanded path */}
      <circle r="3" fill="#fbbf24">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path={`M 15,15 L ${width-15},15 L ${width-15},${height-15} L 15,${height-15} Z`}
        />
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      <circle r="2" fill="#ec4899">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          begin="2s"
          path={`M 15,15 L ${width-15},15 L ${width-15},${height-15} L 15,${height-15} Z`}
        />
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      <circle r="2.5" fill="#a78bfa">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          begin="4s"
          path={`M 15,15 L ${width-15},15 L ${width-15},${height-15} L 15,${height-15} Z`}
        />
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

