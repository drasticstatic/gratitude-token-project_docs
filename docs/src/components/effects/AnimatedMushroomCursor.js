import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedMushroomCursor
 * - A lightweight, smooth-follow mushroom cursor accent
 * - Automatically hides when Lightweight Mode is enabled
 * - Uses requestAnimationFrame + lerp for silky movement
 */
export default function AnimatedMushroomCursor({ size = 28, opacity = 0.9 }) {
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem('lightweightMode');
    // Hide when lightweight mode is ON (default OFF so cursor is visible by default)
    const lightweight = saved === null ? false : saved === 'true';
    return !lightweight;
  });

  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const posRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const timeRef = useRef(0);

  // Listen for lightweight mode changes from Navigation
  useEffect(() => {
    const handleLightweightModeChange = (e) => {
      setEnabled(!e.detail.enabled);
    };
    window.addEventListener('lightweightModeChange', handleLightweightModeChange);
    return () => window.removeEventListener('lightweightModeChange', handleLightweightModeChange);
  }, []);

  // Hide the system cursor while enabled
  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add('mush-cursor-hidden');
    return () => { document.body.classList.remove('mush-cursor-hidden'); };
  }, [enabled]);

  // Track mouse without lag: SVG is the actual cursor
  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      const t = targetRef.current;
      const p = posRef.current;
      // Snap to target (no smoothing) so SVG is the cursor
      p.x = t.x;
      p.y = t.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Local styles for subtle breathing and glow */}
      <style>{`
        @keyframes mushBreath { 0% { transform: scale(0.95); } 50% { transform: scale(1.05); } 100% { transform: scale(0.95); } }
        .animated-mushroom-cursor-inner { animation: mushBreath 4.5s ease-in-out infinite; transform-origin: center; will-change: transform; }
        .animated-mushroom-cursor-glow { filter: drop-shadow(0 2px 6px rgba(124,58,237,0.45)); }
        .mush-cursor-hidden, .mush-cursor-hidden * { cursor: none !important; }
      `}</style>

      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: size + 'px',
          height: size + 'px',
          pointerEvents: 'none',
          zIndex: 9998, // below most overlays/spores
          opacity,
        }}
      >
        <svg
          className="animated-mushroom-cursor-inner animated-mushroom-cursor-glow"
          width={size}
          height={size}
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="amc-cap" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ff9cf2" />
              <stop offset="60%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c3aed" />
            </radialGradient>
          </defs>
          <g>
            <path d="M6 14c0-6 6-11 12-11s12 5 12 11H6z" fill="url(#amc-cap)" stroke="#ec4899" strokeWidth="1.1" />
            <rect x="14" y="14" width="8" height="14" rx="3" fill="#fbbf24" stroke="#ec4899" strokeWidth="1.1" />
            <circle cx="14" cy="10" r="1.5" fill="white" opacity="0.85" />
            <circle cx="19" cy="8.5" r="1.2" fill="white" opacity="0.75" />
            <circle cx="22" cy="11" r="1" fill="white" opacity="0.6" />
          </g>
        </svg>
      </div>
    </>
  );
}

