import React, { useEffect, useState } from 'react';
import styles from './SporeGlitter.module.css';

/**
 * SporeGlitter - Animated particle effect component
 * Creates magical spore-like particles that float and fade
 */
export default function SporeGlitter({ trigger, x, y }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!trigger) return;

    // Create 15-25 particles on each trigger
    const particleCount = Math.floor(Math.random() * 11) + 15;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = {
        id: Date.now() + i,
        x: x || Math.random() * window.innerWidth,
        y: y || Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4, // 4-12px
        duration: Math.random() * 2 + 1.5, // 1.5-3.5s
        delay: Math.random() * 0.3, // 0-0.3s delay
        angle: Math.random() * 360,
        distance: Math.random() * 150 + 50, // 50-200px travel
        color: getRandomSporeColor(),
        rotation: Math.random() * 720 - 360, // -360 to 360 degrees
      };
      newParticles.push(particle);
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Clean up old particles after animation
    const timeout = setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 4000);

    return () => clearTimeout(timeout);
  }, [trigger, x, y]);

  return (
    <div className={styles.sporeContainer}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className={styles.spore}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--angle': `${particle.angle}deg`,
            '--distance': `${particle.distance}px`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
            '--rotation': `${particle.rotation}deg`,
            background: particle.color,
          }}
        />
      ))}
    </div>
  );
}

function getRandomSporeColor() {
  const colors = [
    'radial-gradient(circle, rgba(124, 58, 237, 0.9), rgba(124, 58, 237, 0.3))', // Purple
    'radial-gradient(circle, rgba(236, 72, 153, 0.9), rgba(236, 72, 153, 0.3))', // Pink
    'radial-gradient(circle, rgba(147, 51, 234, 0.9), rgba(147, 51, 234, 0.3))', // Violet
    'radial-gradient(circle, rgba(219, 39, 119, 0.9), rgba(219, 39, 119, 0.3))', // Rose
    'radial-gradient(circle, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.3))', // Light purple
    'radial-gradient(circle, rgba(244, 114, 182, 0.9), rgba(244, 114, 182, 0.3))', // Light pink
    'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))', // White sparkle
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

