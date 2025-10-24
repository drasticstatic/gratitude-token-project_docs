import React from "react";

/**
 * PsanctuaryWatermark - Glowing watermark for all pages
 * Props:
 *  - opacity: watermark opacity (default 0.12 for better visibility with glow)
 *  - size: watermark size in pixels (default 800)
 */
export default function PsanctuaryWatermark({ opacity = 0.12, size = 800 }) {
  return (
    <>
      {/* Glowing watermark - breathing lungs effect with subtle heartbeat */}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, pointerEvents: 'none' }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/psanctuary-icon.webp`}
          alt="Psanctuary"
          style={{
            width: `${size * 1.125}px`,
            height: `${size}px`,
            opacity: opacity,
            objectFit: 'cover',
            filter: 'drop-shadow(0 0 40px rgba(124, 58, 237, 0.6)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.4))',
            animation: 'watermarkGlow 4s ease-in-out infinite, watermarkBreath 10s ease-in-out infinite, watermarkHeartbeat 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Orbiting intricate energy ball around watermark */}
      <svg
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${size * 1.3}px`,
          height: `${size * 1.3}px`,
          pointerEvents: 'none',
          zIndex: 1
        }}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="energyGrad" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#ec4899', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 0.6 }} />
          </radialGradient>
        </defs>
        {/* Main energy ball */}
        <g>
          <circle r="5" fill="url(#energyGrad)" opacity="0.9">
            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              path="M 100,20 A 80,80 0 1,1 99.9,20 Z"
            />
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Multiple trailing particles */}
          <circle r="3" fill="#fbbf24" opacity="0.7">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="0.15s" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="2.5" fill="#ec4899" opacity="0.6">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="0.3s" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill="#7c3aed" opacity="0.5">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="0.45s" />
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.8" fill="#22c55e" opacity="0.5">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="0.6s" />
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="#a78bfa" opacity="0.4">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="0.75s" />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.2" fill="#f472b6" opacity="0.4">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="0.9s" />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          {/* Added extra trailing particles for richer trail */}
          <circle r="1.1" fill="#34d399" opacity="0.35">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="1.05s" />
            <animate attributeName="opacity" values="0.35;0.1;0.35" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.0" fill="#fde68a" opacity="0.35">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" begin="1.2s" />
            <animate attributeName="opacity" values="0.35;0.1;0.35" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Inner sparkles rotating around energy ball */}
          <circle r="1" fill="#fbbf24" opacity="0.8">
            <animateMotion dur="14s" repeatCount="indefinite" path="M 100,20 A 80,80 0 1,1 99.9,20 Z" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
      
      <style>{`
        @keyframes watermarkGlow {
          0%, 100% {
            filter: drop-shadow(0 0 40px rgba(124, 58, 237, 0.6)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 60px rgba(124, 58, 237, 0.8)) drop-shadow(0 0 120px rgba(236, 72, 153, 0.6));
          }
        }
        @keyframes heartbeatCentered {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          30% { transform: translate(-50%, -50%) scale(1.04); }
          60% { transform: translate(-50%, -50%) scale(1.0); }
        }
      `}</style>
    </>
  );
}

