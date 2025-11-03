import React, { useEffect } from 'react';
import styles from './CosmicDust.module.css';

// Imperative particle burst for one-off visual flourish (no React state retained)
export function spawnCosmicDust({ x, y, count = 18, colors } = {}) {
  if (typeof document === 'undefined') return;
  const root = document.createElement('div');
  root.className = styles.dustRoot;
  document.body.appendChild(root);

  const palette = colors || [
    'rgba(236,72,153,0.9)', // pink
    'rgba(147,51,234,0.9)', // violet
    'rgba(59,130,246,0.95)', // blue
    'rgba(255,255,255,0.9)', // white
  ];

  const rect = document.body.getBoundingClientRect();
  const cx = typeof x === 'number' ? x : rect.width - 64;
  const cy = typeof y === 'number' ? y : 20;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = styles.particle;
    const size = 3 + Math.random() * 6;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${cx}px`;
    p.style.top = `${cy}px`;
    p.style.background = palette[i % palette.length];

    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 140;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed * 0.65;
    const rot = (Math.random() * 240 - 120).toFixed(1);
    const life = 1000 + Math.random() * 1000;

    p.style.setProperty('--dx', `${dx}px`);
    p.style.setProperty('--dy', `${dy}px`);
    p.style.setProperty('--rot', `${rot}deg`);
    p.style.setProperty('--life', `${life}ms`);

    root.appendChild(p);
    setTimeout(() => p.remove(), life + 100);
  }

  // Cleanup the root after particles finish
  setTimeout(() => root.remove(), 2200);
}

// Optional React overlay (unused for now but handy if needed)
export default function CosmicDustOverlay() {
  useEffect(() => {
    return () => {};
  }, []);
  return <div className={styles.dustRoot} />;
}

