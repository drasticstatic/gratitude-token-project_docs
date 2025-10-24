import { useEffect } from 'react';
import './SporeEffect.css';
import config from '../../config.json';

/**
 * SporeEffect - Creates dark purple spore particles that fall when elements are clicked
 * Symbolizes mushroom culture "breaking the veil" - psychedelic/spiritual theme
 */
export const createSporeEffect = (event) => {
  const container = document.getElementById('spore-container');
  if (!container) {
    console.warn('Spore container not found! Make sure SporeContainer is mounted.');
    return;
  }

  const x = event.clientX;
  const y = event.clientY;

  // Create 8-12 spore particles per click
  const sporeCount = Math.floor(Math.random() * 5) + 8;

  for (let i = 0; i < sporeCount; i++) {
    const spore = document.createElement('div');
    spore.className = 'spore-particle';

    // Random position around click point
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 20;

    spore.style.left = `${x + offsetX}px`;
    spore.style.top = `${y + offsetY}px`;

    // Random size between 3-8px
    const size = Math.random() * 5 + 3;
    spore.style.width = `${size}px`;
    spore.style.height = `${size}px`;

    // Random animation duration
    const duration = Math.random() * 1 + 1.5; // 1.5-2.5s
    spore.style.animationDuration = `${duration}s`;

    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    spore.style.setProperty('--drift', `${drift}px`);

    // Random delay for staggered effect
    const delay = Math.random() * 0.2;
    spore.style.animationDelay = `${delay}s`;

    container.appendChild(spore);

    // Remove after animation completes
    setTimeout(() => {
      spore.remove();
    }, (duration + delay) * 1000);
  }

  // Optional additional spore rain for extra drama
  if (config?.enableCursorSporeRain) {
    createSporeRain(x, y);
  }
};

/**
 * SporeContainer - Container component for spore particles
 * Must be added to the root of the app
 */
// Create extra cascading spores with longer fall distance
const createSporeRain = (x, y) => {
  const container = document.getElementById('spore-container');
  if (!container) return;

  const rainCount = Math.floor(Math.random() * 8) + 10; // 10-18
  for (let i = 0; i < rainCount; i++) {
    const spore = document.createElement('div');
    spore.className = 'spore-particle';

    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 10;

    spore.style.left = `${x + offsetX}px`;
    spore.style.top = `${y + offsetY}px`;

    const size = Math.random() * 3 + 2; // smaller
    spore.style.width = `${size}px`;
    spore.style.height = `${size}px`;

    const duration = Math.random() * 1.2 + 2.2; // 2.2-3.4s
    spore.style.animationDuration = `${duration}s`;

    const drift = (Math.random() - 0.5) * 140;
    spore.style.setProperty('--drift', `${drift}px`);

    spore.style.setProperty('--fall', '520px');

    const delay = Math.random() * 0.35;
    spore.style.animationDelay = `${delay}s`;

    container.appendChild(spore);
    setTimeout(() => spore.remove(), (duration + delay) * 1000);
  }
};

export const SporeContainer = () => {
  useEffect(() => {
    // Create container if it doesn't exist
    if (!document.getElementById('spore-container')) {
      const container = document.createElement('div');
      container.id = 'spore-container';
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
      `;
      document.body.appendChild(container);
    }

    // Optionally set a custom mushroom cursor globally (bigger and more visible)
    if (config?.enableCursorSporeRain) {
      const style = document.createElement('style');
      style.id = 'mushroom-cursor-style';
      style.innerHTML = `
        body { cursor: url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'>
          <defs>
            <radialGradient id='capGrad' cx='50%' cy='40%' r='60%'>
              <stop offset='0%' stop-color='#ff9cf2'/>
              <stop offset='60%' stop-color='#a78bfa'/>
              <stop offset='100%' stop-color='#7c3aed'/>
            </radialGradient>
            <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
              <feGaussianBlur stdDeviation='1.5' result='coloredBlur'/>
              <feMerge>
                <feMergeNode in='coloredBlur'/>
                <feMergeNode in='SourceGraphic'/>
              </feMerge>
            </filter>
          </defs>
          <g filter='url(#glow)'>
            <path d='M6 14c0-6 6-11 12-11s12 5 12 11H6z' fill='url(#capGrad)' stroke='#ec4899' stroke-width='1.2'/>
            <rect x='14' y='14' width='8' height='14' rx='3' fill='#fbbf24' stroke='#ec4899' stroke-width='1.2'/>
            <circle cx='14' cy='10' r='1.5' fill='white' opacity='0.85'/>
            <circle cx='19' cy='8.5' r='1.2' fill='white' opacity='0.75'/>
            <circle cx='22' cy='11' r='1' fill='white' opacity='0.6'/>
          </g>
        </svg>`)}") 18 18, auto; }
      `;
      if (!document.getElementById('mushroom-cursor-style')) {
        document.head.appendChild(style);
      }
    }

    return () => {
      const container = document.getElementById('spore-container');
      if (container) container.remove();
      const style = document.getElementById('mushroom-cursor-style');
      if (style) style.remove();
    };
  }, []);

  return null;
};

/**
 * Hook to add spore effect to an element
 */
export const useSporeEffect = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = (e) => {
      createSporeEffect(e);
    };

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref]);
};

