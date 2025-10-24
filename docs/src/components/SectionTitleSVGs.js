import React from "react";

// Custom psychedelic animated SVG titles for sections

export const FAQTitleSVG = () => (
  <svg width="100%" height="80" viewBox="0 0 700 80" preserveAspectRatio="xMidYMid meet"
    style={{ display: 'block', margin: '0 auto 24px' }}>
    <defs>
      <linearGradient id="faqGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed">
          <animate attributeName="stop-color" values="#7c3aed;#ec4899;#fbbf24;#7c3aed" dur="6s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#ec4899">
          <animate attributeName="stop-color" values="#ec4899;#fbbf24;#7c3aed;#ec4899" dur="6s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#fbbf24">
          <animate attributeName="stop-color" values="#fbbf24;#7c3aed;#ec4899;#fbbf24" dur="6s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <filter id="faqGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Question mark icon - left side with more padding */}
    <g transform="translate(60, 40)">
      <circle cx="0" cy="0" r="28" stroke="url(#faqGrad)" strokeWidth="4" fill="none" filter="url(#faqGlow)">
        <animate attributeName="r" values="28;30;28" dur="3s" repeatCount="indefinite" />
      </circle>
      <path d="M -8 -12 Q -8 -20, 0 -20 Q 8 -20, 8 -12 Q 8 -4, 0 0" 
        stroke="url(#faqGrad)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#faqGlow)" />
      <circle cx="0" cy="8" r="3" fill="url(#faqGrad)" filter="url(#faqGlow)">
        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Title text - centered in wider viewBox */}
    <text x="350" y="50" textAnchor="middle"
      fill="url(#faqGrad)" 
      fontSize="36" 
      fontWeight="700" 
      fontFamily="system-ui, -apple-system, sans-serif"
      filter="url(#faqGlow)">
      Frequently Asked Questions
    </text>

    {/* Question mark icon - right side with more padding */}
    <g transform="translate(640, 40)">
      <circle cx="0" cy="0" r="28" stroke="url(#faqGrad)" strokeWidth="4" fill="none" filter="url(#faqGlow)">
        <animate attributeName="r" values="28;30;28" dur="3s" repeatCount="indefinite" begin="1.5s" />
      </circle>
      <path d="M -8 -12 Q -8 -20, 0 -20 Q 8 -20, 8 -12 Q 8 -4, 0 0" 
        stroke="url(#faqGrad)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#faqGlow)" />
      <circle cx="0" cy="8" r="3" fill="url(#faqGrad)" filter="url(#faqGlow)">
        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </g>

    {/* Decorative mycelial strands */}
    <path d="M 80 40 Q 150 35, 220 40" stroke="url(#faqGrad)" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 6">
      <animate attributeName="d" values="M 80 40 Q 150 35, 220 40;M 80 40 Q 150 45, 220 40;M 80 40 Q 150 35, 220 40" dur="4s" repeatCount="indefinite" />
    </path>
    <path d="M 380 40 Q 450 35, 520 40" stroke="url(#faqGrad)" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 6">
      <animate attributeName="d" values="M 380 40 Q 450 35, 520 40;M 380 40 Q 450 45, 520 40;M 380 40 Q 450 35, 520 40" dur="4s" repeatCount="indefinite" begin="2s" />
    </path>
  </svg>
);

export const RoadmapTitleSVG = () => (
  <svg width="100%" height="100" viewBox="0 0 500 100" preserveAspectRatio="xMidYMid meet"
    style={{ display: 'block', margin: '0 auto 24px' }}>
    <defs>
      <linearGradient id="roadmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24">
          <animate attributeName="stop-color" values="#fbbf24;#ec4899;#7c3aed;#fbbf24" dur="6s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#ec4899">
          <animate attributeName="stop-color" values="#ec4899;#7c3aed;#fbbf24;#ec4899" dur="6s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#7c3aed">
          <animate attributeName="stop-color" values="#7c3aed;#fbbf24;#ec4899;#7c3aed" dur="6s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <filter id="roadmapGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Windy Road Sign - left side */}
    <g transform="translate(50, 50)">
      {/* Road sign post - taller */}
      <rect x="-3" y="15" width="6" height="35" fill="#9ca3af" rx="1">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Diamond warning sign background */}
      <rect x="-22" y="-22" width="44" height="44" fill="#fbbf24" rx="3"
        transform="rotate(45 0 0)" filter="url(#roadmapGlow)">
        <animate attributeName="fill" values="#fbbf24;#f97316;#fbbf24" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* Animated windy road waves inside sign */}
      <path d="M -15 -8 Q -8 -12, 0 -8 Q 8 -4, 15 -8"
        stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round">
        <animate attributeName="d"
          values="M -15 -8 Q -8 -12, 0 -8 Q 8 -4, 15 -8;M -15 -8 Q -8 -10, 0 -8 Q 8 -6, 15 -8;M -15 -8 Q -8 -14, 0 -8 Q 8 -2, 15 -8;M -15 -8 Q -8 -10, 0 -8 Q 8 -6, 15 -8;M -15 -8 Q -8 -12, 0 -8 Q 8 -4, 15 -8"
          dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M -15 0 Q -8 4, 0 0 Q 8 -4, 15 0"
        stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round">
        <animate attributeName="d"
          values="M -15 0 Q -8 4, 0 0 Q 8 -4, 15 0;M -15 0 Q -8 2, 0 0 Q 8 -2, 15 0;M -15 0 Q -8 6, 0 0 Q 8 -6, 15 0;M -15 0 Q -8 2, 0 0 Q 8 -2, 15 0;M -15 0 Q -8 4, 0 0 Q 8 -4, 15 0"
          dur="2s" repeatCount="indefinite" begin="0.3s" />
      </path>
      <path d="M -15 8 Q -8 12, 0 8 Q 8 4, 15 8"
        stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round">
        <animate attributeName="d"
          values="M -15 8 Q -8 12, 0 8 Q 8 4, 15 8;M -15 8 Q -8 10, 0 8 Q 8 6, 15 8;M -15 8 Q -8 14, 0 8 Q 8 2, 15 8;M -15 8 Q -8 10, 0 8 Q 8 6, 15 8;M -15 8 Q -8 12, 0 8 Q 8 4, 15 8"
          dur="2s" repeatCount="indefinite" begin="0.6s" />
      </path>

      {/* Sparkle particles around sign */}
      <circle cx="-25" cy="-25" r="2" fill="#fbbf24">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="-25" r="1.5" fill="#ec4899">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
      <circle cx="-25" cy="25" r="1.5" fill="#a78bfa">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.3s" />
      </circle>
      <circle cx="25" cy="25" r="2" fill="#fbbf24">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
    </g>

    {/* Title text - adjusted for taller viewBox */}
    <text x="250" y="60" textAnchor="middle"
      fill="url(#roadmapGrad)" 
      fontSize="42" 
      fontWeight="700" 
      fontFamily="system-ui, -apple-system, sans-serif"
      filter="url(#roadmapGlow)">
      Roadmap
    </text>

    {/* Compass icon - right side */}
    <g transform="translate(460, 50)">
      {/* Compass circle - increased stroke width */}
      <circle cx="0" cy="0" r="28" stroke="url(#roadmapGrad)" strokeWidth="5" fill="none" filter="url(#roadmapGlow)">
        <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Compass needle - pointing north */}
      <path d="M 0 -18 L -4 0 L 0 18 L 4 0 Z" fill="url(#roadmapGrad)" filter="url(#roadmapGlow)">
        <animateTransform attributeName="transform" type="rotate" values="0 0 0;10 0 0;-10 0 0;0 0 0" dur="4s" repeatCount="indefinite" />
      </path>

      {/* Center dot */}
      <circle cx="0" cy="0" r="3" fill="#fbbf24" filter="url(#roadmapGlow)">
        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Cardinal directions - N, E, S, W - larger font and better positioning */}
      <text x="0" y="-38" textAnchor="middle" fill="url(#roadmapGrad)" fontSize="14" fontWeight="700" filter="url(#roadmapGlow)">N</text>
      <text x="38" y="6" textAnchor="middle" fill="url(#roadmapGrad)" fontSize="14" fontWeight="700" filter="url(#roadmapGlow)">E</text>
      <text x="0" y="45" textAnchor="middle" fill="url(#roadmapGrad)" fontSize="14" fontWeight="700" filter="url(#roadmapGlow)">S</text>
      <text x="-38" y="6" textAnchor="middle" fill="url(#roadmapGrad)" fontSize="14" fontWeight="700" filter="url(#roadmapGlow)">W</text>

      {/* Sparkle particles around compass */}
      <circle cx="-32" cy="-32" r="2" fill="#fbbf24">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="-32" r="1.5" fill="#ec4899">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="-32" cy="32" r="1.5" fill="#a78bfa">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle cx="32" cy="32" r="2" fill="#fbbf24">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </circle>
    </g>

    {/* Decorative path lines - adjusted for taller viewBox */}
    <path d="M 80 50 Q 120 45, 160 50" stroke="url(#roadmapGrad)" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 6">
      <animate attributeName="stroke-dashoffset" values="0;20;0" dur="3s" repeatCount="indefinite" />
    </path>
    <path d="M 340 50 Q 380 55, 420 50" stroke="url(#roadmapGrad)" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4 6">
      <animate attributeName="stroke-dashoffset" values="0;20;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
    </path>
  </svg>
);

export const QuotesSVG = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" 
    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '16px' }}>
    <defs>
      <linearGradient id="quotesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa">
          <animate attributeName="stop-color" values="#a78bfa;#fbbf24;#ec4899;#a78bfa" dur="5s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#ec4899">
          <animate attributeName="stop-color" values="#ec4899;#a78bfa;#fbbf24;#ec4899" dur="5s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <filter id="quotesGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Opening quote mark */}
    <path d="M 25 35 Q 20 25, 25 20 Q 30 15, 35 20 L 30 35 Z" 
      fill="url(#quotesGrad)" filter="url(#quotesGlow)">
      <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
    </path>
    
    {/* Closing quote mark */}
    <path d="M 65 65 Q 70 75, 65 80 Q 60 85, 55 80 L 60 65 Z" 
      fill="url(#quotesGrad)" filter="url(#quotesGlow)">
      <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" begin="1.5s" />
    </path>
    
    {/* Decorative sparkles */}
    <circle cx="50" cy="20" r="3" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="80" cy="50" r="2" fill="#a78bfa" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="20" cy="80" r="2.5" fill="#ec4899" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite" begin="1s" />
    </circle>
  </svg>
);

