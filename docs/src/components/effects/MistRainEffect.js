import React, { useEffect } from 'react';
import { Droplet } from 'lucide-react';

/**
 * MistRainEffect
 * - Full-page mist rain overlay (always fixed to viewport)
 * - Lightweight: CSS keyframes + small DOM
 * - Use: <MistRainEffect visible={flag} onDone={() => setFlag(false)} durationMs={1800} />
 */
export default function MistRainEffect({ visible, onDone, durationMs = 3500, density = 60 }) {
  useEffect(() => {
    if (!visible) return;
    // Extend rain duration to 3.5 seconds (was 2 seconds)
    const id = setTimeout(() => onDone && onDone(), durationMs);
    return () => clearTimeout(id);
  }, [visible, durationMs, onDone]);

  if (!visible) return null;

  const drops = Array.from({ length: density }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 0.3; // Reduced delay for more instant effect
    const speed = 2.8 + Math.random() * 1.2; // Slower fall for longer duration (2.8-4s)
    const size = 16 + Math.random() * 16;
    const hue = ["#93c5fd", "#60a5fa", "#3b82f6"][i % 3];
    return { i, left, delay, speed, size, hue };
  });

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, pointerEvents: 'none', overflow: 'hidden' }}>
      <style>{`
        @keyframes mistFall {
          0% { transform: translateY(-100vh); opacity: 0.0; }
          10% { opacity: 0.95; }
          90% { opacity: 0.95; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .mist-sheen { position: absolute; inset: 0; background: radial-gradient(ellipse at top, rgba(147,197,253,0.10), transparent 60%); filter: blur(10px); }
      `}</style>

      {/* Subtle background sheen */}
      <div className="mist-sheen" />

      {/* Droplets - fall from top to bottom of full viewport */}
      {drops.map(({ i, left, delay, speed, size, hue }) => (
        <div key={i}
          style={{
            position: 'absolute', top: 0, left: `${left}%`,
            animation: `mistFall ${speed}s ${delay}s forwards ease-in`,
            transform: 'translateY(-100vh)',
            color: hue,
            filter: 'drop-shadow(0 0 8px rgba(96,165,250,0.55))',
          }}
        >
          <Droplet size={size} />
        </div>
      ))}
    </div>
  );
}

