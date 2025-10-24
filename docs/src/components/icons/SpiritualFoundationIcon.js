import React from 'react';
import './IconAnimations.css';

const SpiritualFoundationIcon = ({ size = 64, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`spiritual-foundation-icon ${className}`}
    >
      {/* Church building */}
      <g className="church-body breathing">
        {/* Main building */}
        <rect
          x="30"
          y="50"
          width="40"
          height="35"
          fill="url(#churchGradient)"
          stroke="url(#churchStroke)"
          strokeWidth="2"
          className="sparkle-border"
        />
        
        {/* Roof */}
        <path
          d="M 25 50 L 50 30 L 75 50 Z"
          fill="url(#roofGradient)"
          stroke="url(#churchStroke)"
          strokeWidth="2"
        />
        
        {/* Steeple base */}
        <rect
          x="45"
          y="20"
          width="10"
          height="10"
          fill="url(#steepleGradient)"
          stroke="url(#churchStroke)"
          strokeWidth="1.5"
        />
        
        {/* Steeple roof */}
        <path
          d="M 43 20 L 50 10 L 57 20 Z"
          fill="url(#roofGradient)"
          stroke="url(#churchStroke)"
          strokeWidth="1.5"
        />
        
        {/* Cross on top */}
        <g className="cross heartbeat">
          <rect x="49" y="5" width="2" height="8" fill="#fbbf24" stroke="#581c87" strokeWidth="0.5" />
          <rect x="46" y="8" width="8" height="2" fill="#fbbf24" stroke="#581c87" strokeWidth="0.5" />
        </g>
        
        {/* Door */}
        <path
          d="M 42 70 Q 42 65, 45 65 L 55 65 Q 58 65, 58 70 L 58 85 L 42 85 Z"
          fill="url(#doorGradient)"
          stroke="#581c87"
          strokeWidth="1.5"
        />
        
        {/* Windows */}
        <rect
          x="35"
          y="55"
          width="8"
          height="10"
          rx="2"
          fill="url(#windowGradient)"
          stroke="#581c87"
          strokeWidth="1"
          className="window-glow"
        />
        <rect
          x="57"
          y="55"
          width="8"
          height="10"
          rx="2"
          fill="url(#windowGradient)"
          stroke="#581c87"
          strokeWidth="1"
          className="window-glow"
        />
      </g>
      
      {/* Divine light pouring out - MORE LIGHT RAYS */}
      <g className="divine-light">
        {/* Light rays from left window */}
        <path
          d="M 39 60 L 35 75"
          stroke="url(#lightGradient)"
          strokeWidth="2.5"
          opacity="0.7"
          className="light-ray"
          style={{ animationDelay: '0s' }}
        />
        <path
          d="M 39 60 L 30 70"
          stroke="url(#lightGradient)"
          strokeWidth="2"
          opacity="0.6"
          className="light-ray"
          style={{ animationDelay: '0.2s' }}
        />
        <path
          d="M 39 60 L 32 78"
          stroke="url(#lightGradient)"
          strokeWidth="1.5"
          opacity="0.5"
          className="light-ray"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M 39 60 L 25 72"
          stroke="url(#lightGradient)"
          strokeWidth="1.5"
          opacity="0.4"
          className="light-ray"
          style={{ animationDelay: '0.6s' }}
        />

        {/* Light rays from right window */}
        <path
          d="M 61 60 L 65 75"
          stroke="url(#lightGradient)"
          strokeWidth="2.5"
          opacity="0.7"
          className="light-ray"
          style={{ animationDelay: '0.1s' }}
        />
        <path
          d="M 61 60 L 70 70"
          stroke="url(#lightGradient)"
          strokeWidth="2"
          opacity="0.6"
          className="light-ray"
          style={{ animationDelay: '0.3s' }}
        />
        <path
          d="M 61 60 L 68 78"
          stroke="url(#lightGradient)"
          strokeWidth="1.5"
          opacity="0.5"
          className="light-ray"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M 61 60 L 75 72"
          stroke="url(#lightGradient)"
          strokeWidth="1.5"
          opacity="0.4"
          className="light-ray"
          style={{ animationDelay: '0.7s' }}
        />

        {/* Light from door - BRIGHTER AND MORE RAYS */}
        <path
          d="M 50 75 L 50 92"
          stroke="url(#lightGradient)"
          strokeWidth="4"
          opacity="0.8"
          className="light-ray"
          style={{ animationDelay: '0.15s' }}
        />
        <path
          d="M 50 75 L 45 90"
          stroke="url(#lightGradient)"
          strokeWidth="3"
          opacity="0.7"
          className="light-ray"
          style={{ animationDelay: '0.25s' }}
        />
        <path
          d="M 50 75 L 55 90"
          stroke="url(#lightGradient)"
          strokeWidth="3"
          opacity="0.7"
          className="light-ray"
          style={{ animationDelay: '0.35s' }}
        />
        <path
          d="M 50 75 L 40 88"
          stroke="url(#lightGradient)"
          strokeWidth="2"
          opacity="0.6"
          className="light-ray"
          style={{ animationDelay: '0.45s' }}
        />
        <path
          d="M 50 75 L 60 88"
          stroke="url(#lightGradient)"
          strokeWidth="2"
          opacity="0.6"
          className="light-ray"
          style={{ animationDelay: '0.55s' }}
        />

        {/* Additional radiant glow from cross */}
        <path
          d="M 50 10 L 50 20"
          stroke="#fbbf24"
          strokeWidth="2"
          opacity="0.5"
          className="light-ray"
          style={{ animationDelay: '0.8s' }}
        />
        <path
          d="M 50 10 L 45 18"
          stroke="#fbbf24"
          strokeWidth="1.5"
          opacity="0.4"
          className="light-ray"
          style={{ animationDelay: '0.9s' }}
        />
        <path
          d="M 50 10 L 55 18"
          stroke="#fbbf24"
          strokeWidth="1.5"
          opacity="0.4"
          className="light-ray"
          style={{ animationDelay: '1s' }}
        />
      </g>
      
      {/* Sparkles around church */}
      <circle cx="25" cy="40" r="1.5" fill="#22d3ee" className="sparkle" style={{ animationDelay: '0s' }} />
      <circle cx="75" cy="40" r="1" fill="#ec4899" className="sparkle" style={{ animationDelay: '0.3s' }} />
      <circle cx="20" cy="60" r="1.5" fill="#34d399" className="sparkle" style={{ animationDelay: '0.6s' }} />
      <circle cx="80" cy="60" r="1" fill="#fbbf24" className="sparkle" style={{ animationDelay: '0.9s' }} />
      <circle cx="50" cy="25" r="1.5" fill="#a78bfa" className="sparkle" style={{ animationDelay: '0.45s' }} />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="churchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="50%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#ddd6fe" />
        </linearGradient>
        
        <linearGradient id="churchStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#581c87" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        
        <linearGradient id="steepleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        
        <linearGradient id="doorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#581c87" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        
        <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        
        <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" opacity="0.8" />
          <stop offset="50%" stopColor="#22d3ee" opacity="0.6" />
          <stop offset="100%" stopColor="#a78bfa" opacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SpiritualFoundationIcon;

