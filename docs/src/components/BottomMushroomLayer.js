import React from 'react';
import TrippyMushroom from './TrippyMushroom';

/**
 * BottomMushroomLayer - Global mushroom layer at bottom of all pages
 * Renders mushrooms across full viewport width at bottom edge
 */
export default function BottomMushroomLayer() {
  return (
    <>
      {/* Bottom edge mushrooms - spread across full page width */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`global-bottom-mushroom-${i}`}
          style={{
            position: 'fixed',
            bottom: '0px',
            left: `${(i / 30) * 100 + Math.random() * 2}%`,
            transform: 'translateX(-50%)',
            zIndex: 999,
            pointerEvents: 'none'
          }}
        >
          <TrippyMushroom 
            size={25 + Math.random() * 25} 
            delay={i * 0.4 + Math.random() * 0.3} 
          />
        </div>
      ))}
    </>
  );
}

