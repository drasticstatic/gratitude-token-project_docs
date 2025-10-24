import React from 'react';
import './IconAnimations.css';

const WhitepaperScrollIcon = ({ size = 64, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`whitepaper-scroll-icon ${className}`}
    >
      {/* Scroll paper - BLUE COLOR SCHEME WITH ROLLERS */}
      <g className="scroll-body breathing">
        {/* Main scroll body - flatter, more scroll-like */}
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="4"
          fill="url(#scrollGradient)"
          stroke="url(#scrollStroke)"
          strokeWidth="2"
          className="sparkle-border"
        />

        {/* Left scroll roller (umbilicus) - EXTENDS BEYOND PAPYRUS */}
        <rect x="10" y="18" width="4" height="64" rx="2" fill="url(#rollerGradient)" stroke="#1e40af" strokeWidth="1" />
        {/* Left roller knobs (cornua) */}
        <circle cx="12" cy="16" r="3" fill="#60a5fa" stroke="#1e40af" strokeWidth="1" />
        <circle cx="12" cy="84" r="3" fill="#60a5fa" stroke="#1e40af" strokeWidth="1" />

        {/* Left scroll curl - rolled edge */}
        <path
          d="M 20 20 Q 15 20, 15 25 L 15 75 Q 15 80, 20 80"
          fill="url(#curlGradient)"
          stroke="url(#scrollStroke)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="15"
          cy="50"
          rx="3"
          ry="25"
          fill="url(#curlDarkGradient)"
          opacity="0.6"
        />

        {/* Right scroll roller (umbilicus) - EXTENDS BEYOND PAPYRUS */}
        <rect x="86" y="18" width="4" height="64" rx="2" fill="url(#rollerGradient)" stroke="#1e40af" strokeWidth="1" />
        {/* Right roller knobs (cornua/zhoutou) */}
        <circle cx="88" cy="16" r="3" fill="#60a5fa" stroke="#1e40af" strokeWidth="1" />
        <circle cx="88" cy="84" r="3" fill="#60a5fa" stroke="#1e40af" strokeWidth="1" />

        {/* Right scroll curl - rolled edge */}
        <path
          d="M 80 20 Q 85 20, 85 25 L 85 75 Q 85 80, 80 80"
          fill="url(#curlGradient)"
          stroke="url(#scrollStroke)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="85"
          cy="50"
          rx="3"
          ry="25"
          fill="url(#curlDarkGradient)"
          opacity="0.6"
        />
        
        {/* Wavy lines on scroll */}
        <path
          d="M 35 30 Q 40 28, 45 30 T 55 30 T 65 30"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="wavy-line"
          strokeDasharray="2,2"
        />
        <path
          d="M 35 40 Q 40 38, 45 40 T 55 40 T 65 40"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="wavy-line"
          style={{ animationDelay: '0.2s' }}
          strokeDasharray="2,2"
        />
        <path
          d="M 35 50 Q 40 48, 45 50 T 55 50 T 65 50"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="wavy-line"
          style={{ animationDelay: '0.4s' }}
          strokeDasharray="2,2"
        />
        <path
          d="M 35 60 Q 40 58, 45 60 T 55 60 T 65 60"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="wavy-line"
          style={{ animationDelay: '0.6s' }}
          strokeDasharray="2,2"
        />
      </g>
      
      {/* Pen writing - BLUE THEME - MOVES UP AND DOWN */}
      <g className="pen">
        {/* Pen body - animated position */}
        <path fill="url(#penGradient)" stroke="#1e40af" strokeWidth="1">
          <animate attributeName="d"
            values="M 70 25 L 75 20 L 77 22 L 72 27 Z;M 70 40 L 75 35 L 77 37 L 72 42 Z;M 70 55 L 75 50 L 77 52 L 72 57 Z;M 70 40 L 75 35 L 77 37 L 72 42 Z;M 70 25 L 75 20 L 77 22 L 72 27 Z"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Pen tip - animated position */}
        <path fill="#60a5fa" stroke="#1e40af" strokeWidth="0.5">
          <animate attributeName="d"
            values="M 70 25 L 68 27 L 70 29 L 72 27 Z;M 70 40 L 68 42 L 70 44 L 72 42 Z;M 70 55 L 68 57 L 70 59 L 72 57 Z;M 70 40 L 68 42 L 70 44 L 72 42 Z;M 70 25 L 68 27 L 70 29 L 72 27 Z"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Ink trail - animated position */}
        <path stroke="url(#inkGradient)" strokeWidth="1.5" fill="none" className="ink-trail" strokeLinecap="round">
          <animate attributeName="d"
            values="M 68 27 Q 60 30, 55 32;M 68 42 Q 60 45, 55 47;M 68 57 Q 60 60, 55 62;M 68 42 Q 60 45, 55 47;M 68 27 Q 60 30, 55 32"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Sparkles - BLUE THEME */}
      <circle cx="30" cy="25" r="1.5" fill="#3b82f6" className="sparkle" style={{ animationDelay: '0s' }} />
      <circle cx="70" cy="35" r="1" fill="#60a5fa" className="sparkle" style={{ animationDelay: '0.3s' }} />
      <circle cx="40" cy="70" r="1.5" fill="#93c5fd" className="sparkle" style={{ animationDelay: '0.6s' }} />
      <circle cx="65" cy="75" r="1" fill="#dbeafe" className="sparkle" style={{ animationDelay: '0.9s' }} />
      
      {/* Gradients - BLUE COLOR SCHEME */}
      <defs>
        <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="50%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>

        <linearGradient id="scrollStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="curlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>

        <linearGradient id="curlDarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="rollerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="inkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WhitepaperScrollIcon;

