import React from 'react';
import { motion } from 'framer-motion';

export default function MeshingGears() {
  return (
    <>
      {/* Main gears at top */}
      <div style={{
        position: 'fixed',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '60%',
        maxWidth: '600px',
        maxHeight: '600px',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.3
      }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          
          {/* Gear shape definition */}
          <g id="gear">
            <circle cx="0" cy="0" r="40" fill="url(#gearGradient)" stroke="#581c87" strokeWidth="2"/>
            <circle cx="0" cy="0" r="20" fill="rgba(0,0,0,0.5)" stroke="#581c87" strokeWidth="1"/>
            {/* Teeth */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = Math.cos(angle) * 40;
              const y1 = Math.sin(angle) * 40;
              return (
                <g key={i}>
                  <rect
                    x={x1 - 4}
                    y={y1 - 6}
                    width="8"
                    height="20"
                    fill="url(#gearGradient)"
                    stroke="#581c87"
                    strokeWidth="1"
                    transform={`rotate(${i * 30} ${x1} ${y1})`}
                  />
                </g>
              );
            })}
          </g>
          
          <g id="smallGear">
            <circle cx="0" cy="0" r="25" fill="url(#gearGradient)" stroke="#581c87" strokeWidth="2"/>
            <circle cx="0" cy="0" r="12" fill="rgba(0,0,0,0.5)" stroke="#581c87" strokeWidth="1"/>
            {/* Teeth */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              const x1 = Math.cos(angle) * 25;
              const y1 = Math.sin(angle) * 25;
              return (
                <g key={i}>
                  <rect
                    x={x1 - 3}
                    y={y1 - 4}
                    width="6"
                    height="12"
                    fill="url(#gearGradient)"
                    stroke="#581c87"
                    strokeWidth="1"
                    transform={`rotate(${i * 45} ${x1} ${y1})`}
                  />
                </g>
              );
            })}
          </g>
        </defs>
        
        {/* Large center gear - clockwise */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <use href="#gear" x="200" y="200" />
        </motion.g>
        
        {/* Top right gear - counter-clockwise */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '280px 140px' }}
        >
          <use href="#smallGear" x="280" y="140" />
        </motion.g>
        
        {/* Bottom left gear - counter-clockwise */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '120px 260px' }}
        >
          <use href="#smallGear" x="120" y="260" />
        </motion.g>
        
        {/* Top left gear - clockwise */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <use href="#gear" x="100" y="100" transform="scale(0.7)" />
        </motion.g>
        
        {/* Bottom right gear - clockwise */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '300px 300px' }}
        >
          <use href="#gear" x="300" y="300" transform="scale(0.7)" />
        </motion.g>
        
        {/* Small accent gears */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '320px 240px' }}
        >
          <use href="#smallGear" x="320" y="240" transform="scale(0.6)" />
        </motion.g>
        
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '80px 160px' }}
        >
          <use href="#smallGear" x="80" y="160" transform="scale(0.6)" />
        </motion.g>
      </svg>
    </div>

    {/* Smaller gears scattered throughout the page */}
    <div style={{
      position: 'fixed',
      top: '40%',
      left: '10%',
      width: '120px',
      height: '120px',
      pointerEvents: 'none',
      zIndex: 0,
      opacity: 0.15
    }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="smallGearGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 50px' }}
        >
          <use href="#smallGear" x="50" y="50" />
        </motion.g>
      </svg>
    </div>

    <div style={{
      position: 'fixed',
      top: '60%',
      right: '8%',
      width: '100px',
      height: '100px',
      pointerEvents: 'none',
      zIndex: 0,
      opacity: 0.15
    }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 50px' }}
        >
          <use href="#smallGear" x="50" y="50" transform="scale(0.8)" />
        </motion.g>
      </svg>
    </div>

    <div style={{
      position: 'fixed',
      bottom: '20%',
      left: '15%',
      width: '90px',
      height: '90px',
      pointerEvents: 'none',
      zIndex: 0,
      opacity: 0.12
    }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 50px' }}
        >
          <use href="#smallGear" x="50" y="50" transform="scale(0.7)" />
        </motion.g>
      </svg>
    </div>

    <div style={{
      position: 'fixed',
      bottom: '30%',
      right: '12%',
      width: '110px',
      height: '110px',
      pointerEvents: 'none',
      zIndex: 0,
      opacity: 0.15
    }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 50px' }}
        >
          <use href="#smallGear" x="50" y="50" transform="scale(0.85)" />
        </motion.g>
      </svg>
    </div>
  </>
  );
}

