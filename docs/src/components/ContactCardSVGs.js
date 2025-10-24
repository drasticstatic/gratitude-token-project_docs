import React from "react";

// Custom psychedelic animated SVG icons for contact cards

export const DiscordSVG = () => (
  <svg width="88" height="88" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="discordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    {/* Discord chat bubble - MORE SPACIOUS */}
    <path d="M 25 30 C 25 26, 28 23, 32 23 L 68 23 C 72 23, 75 26, 75 30 L 75 62 C 75 66, 72 69, 68 69 L 58 69 L 55 75 L 48 69 L 32 69 C 28 69, 25 66, 25 62 Z"
      stroke="url(#discordGrad)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
    </path>
    {/* Eyes - blinking animation */}
    <ellipse cx="40" cy="45" rx="4" ry="5" stroke="url(#discordGrad)" strokeWidth="5" fill="none">
      <animate attributeName="ry" values="5;5;0.5;5;5" dur="4s" repeatCount="indefinite" />
    </ellipse>
    <ellipse cx="60" cy="45" rx="4" ry="5" stroke="url(#discordGrad)" strokeWidth="5" fill="none">
      <animate attributeName="ry" values="5;5;0.5;5;5" dur="4s" repeatCount="indefinite" />
    </ellipse>
    {/* Smile - animated curve */}
    <path d="M 36 56 Q 50 61, 64 56" stroke="url(#discordGrad)" strokeWidth="4.5" fill="none" strokeLinecap="round">
      <animate attributeName="d" values="M 36 56 Q 50 61, 64 56;M 36 56 Q 50 63, 64 56;M 36 56 Q 50 61, 64 56" dur="3s" repeatCount="indefinite" />
    </path>
    {/* Sparkles around bubble */}
    <circle cx="20" cy="35" r="1.5" fill="#a78bfa">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="80" cy="50" r="1.8" fill="#ec4899">
      <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
    </circle>
  </svg>
);

export const TelegramSVG = () => (
  <svg width="84" height="84" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="telegramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0088cc" />
        <stop offset="50%" stopColor="#00aaff" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    {/* Paper plane with MORE flapping wings animation */}
    <path d="M 25 50 L 75 30 L 55 75 L 45 55 Z" stroke="url(#telegramGrad)" strokeWidth="5.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="d" values="M 25 50 L 75 30 L 55 75 L 45 55 Z;M 25 45 L 75 25 L 55 75 L 45 55 Z;M 25 50 L 75 30 L 55 75 L 45 55 Z;M 25 55 L 75 35 L 55 75 L 45 55 Z;M 25 50 L 75 30 L 55 75 L 45 55 Z" dur="1.2s" repeatCount="indefinite" />
    </path>
    <path d="M 45 55 L 75 30" stroke="url(#telegramGrad)" strokeWidth="4.5" strokeLinecap="round">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" repeatCount="indefinite" />
    </path>
    {/* Pulsing dot */}
    <circle cx="45" cy="55" r="4" fill="url(#telegramGrad)">
      <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
    </circle>
    {/* Jet stream trail - MORE PARTICLES */}
    <circle cx="35" cy="52" r="2.5" fill="#0088cc">
      <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="cx" values="45;35;25" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="30" cy="51" r="2" fill="#00aaff">
      <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
      <animate attributeName="cx" values="45;30;15" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
    </circle>
    <circle cx="25" cy="50" r="1.5" fill="#7c3aed">
      <animate attributeName="opacity" values="0;0.5;0" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
      <animate attributeName="cx" values="45;25;10" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
    </circle>
  </svg>
);

export const TwitterSVG = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="twitterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1DA1F2" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    {/* X logo - main element */}
    <path d="M 30 30 L 70 70" stroke="url(#twitterGrad)" strokeWidth="8" strokeLinecap="round">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M 70 30 L 30 70" stroke="url(#twitterGrad)" strokeWidth="8" strokeLinecap="round">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
    </path>
    {/* Glowing center */}
    <circle cx="50" cy="50" r="8" fill="url(#twitterGrad)" opacity="0.6">
      <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Sparkles around X */}
    <circle cx="25" cy="25" r="2" fill="#1DA1F2">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="75" cy="25" r="2" fill="#ec4899">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="25" cy="75" r="2" fill="#7c3aed">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="75" cy="75" r="2" fill="#a78bfa">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
    </circle>
  </svg>
);

export const GitHubSVG = () => (
  <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="githubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    {/* Cat silhouette - head */}
    <circle cx="50" cy="42" r="18" stroke="url(#githubGrad)" strokeWidth="4" fill="rgba(124,58,237,0.1)" />
    {/* Cat ears */}
    <path d="M 35 28 L 32 18 L 40 26" fill="url(#githubGrad)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
    </path>
    <path d="M 65 28 L 68 18 L 60 26" fill="url(#githubGrad)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1.5s" />
    </path>
    {/* Eyes - blinking */}
    <circle cx="43" cy="40" r="2.5" fill="url(#githubGrad)">
      <animate attributeName="ry" values="2.5;2.5;0.3;2.5;2.5" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="57" cy="40" r="2.5" fill="url(#githubGrad)">
      <animate attributeName="ry" values="2.5;2.5;0.3;2.5;2.5" dur="4s" repeatCount="indefinite" />
    </circle>
    {/* Nose */}
    <circle cx="50" cy="46" r="2" fill="#ec4899" />
    {/* Whiskers */}
    <path d="M 32 44 L 22 42" stroke="url(#githubGrad)" strokeWidth="1.5" opacity="0.7" />
    <path d="M 32 46 L 22 48" stroke="url(#githubGrad)" strokeWidth="1.5" opacity="0.7" />
    <path d="M 68 44 L 78 42" stroke="url(#githubGrad)" strokeWidth="1.5" opacity="0.7" />
    <path d="M 68 46 L 78 48" stroke="url(#githubGrad)" strokeWidth="1.5" opacity="0.7" />
    {/* Body */}
    <ellipse cx="50" cy="68" rx="16" ry="12" stroke="url(#githubGrad)" strokeWidth="4" fill="rgba(168,85,247,0.1)" />
    {/* Tail - wagging */}
    <path d="M 66 68 Q 75 65, 78 58" stroke="url(#githubGrad)" strokeWidth="4" fill="none" strokeLinecap="round">
      <animate attributeName="d" values="M 66 68 Q 75 65, 78 58;M 66 68 Q 78 68, 82 62;M 66 68 Q 75 65, 78 58;M 66 68 Q 72 62, 75 55;M 66 68 Q 75 65, 78 58" dur="2s" repeatCount="indefinite" />
    </path>
    {/* Paws */}
    <circle cx="42" cy="78" r="3" fill="url(#githubGrad)" opacity="0.8" />
    <circle cx="58" cy="78" r="3" fill="url(#githubGrad)" opacity="0.8" />
  </svg>
);

export const EmailSVG = () => (
  <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    {/* Envelope */}
    <rect x="20" y="35" width="60" height="40" rx="4" stroke="url(#emailGrad)" strokeWidth="5" fill="none" />
    {/* Flap - MORE animated opening */}
    <path d="M 20 35 L 50 55 L 80 35" stroke="url(#emailGrad)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="d" values="M 20 35 L 50 55 L 80 35;M 20 35 L 50 48 L 80 35;M 20 35 L 50 55 L 80 35;M 20 35 L 50 52 L 80 35;M 20 35 L 50 55 L 80 35" dur="3s" repeatCount="indefinite" />
    </path>
    {/* Letter inside - peeking out */}
    <rect x="35" y="48" width="30" height="3" rx="1" fill="#a78bfa" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="35" y="53" width="25" height="2" rx="1" fill="#ec4899" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="0.5s" />
    </rect>
    {/* MORE Sparkles around envelope */}
    <circle cx="15" cy="45" r="2" fill="#fbbf24">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="85" cy="50" r="2" fill="#ec4899">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="18" cy="65" r="1.5" fill="#a78bfa">
      <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="82" cy="68" r="1.8" fill="#fbbf24">
      <animate attributeName="opacity" values="0;1;0" dur="2.3s" repeatCount="indefinite" begin="1.5s" />
    </circle>
  </svg>
);

export const MightyNetworksSVG = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="mightyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    {/* Circle of people holding hands */}
    <g>
      {/* Person 1 - top */}
      <circle cx="50" cy="25" r="5" fill="url(#mightyGrad)">
        <animate attributeName="r" values="5;5.5;5" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M 50 30 L 50 40" stroke="url(#mightyGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 50 33 L 42 38" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 33 L 58 38" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Person 2 - right */}
      <circle cx="75" cy="50" r="5" fill="url(#mightyGrad)">
        <animate attributeName="r" values="5;5.5;5" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <path d="M 75 55 L 75 65" stroke="url(#mightyGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 75 58 L 67 63" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 75 58 L 83 63" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Person 3 - bottom */}
      <circle cx="50" cy="75" r="5" fill="url(#mightyGrad)">
        <animate attributeName="r" values="5;5.5;5" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
      <path d="M 50 70 L 50 60" stroke="url(#mightyGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 50 67 L 42 62" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 67 L 58 62" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Person 4 - left */}
      <circle cx="25" cy="50" r="5" fill="url(#mightyGrad)">
        <animate attributeName="r" values="5;5.5;5" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </circle>
      <path d="M 25 55 L 25 65" stroke="url(#mightyGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 25 58 L 17 63" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 25 58 L 33 63" stroke="url(#mightyGrad)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Connecting hands - circle */}
      <circle cx="50" cy="50" r="30" stroke="url(#mightyGrad)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5 5">
        <animate attributeName="stroke-dashoffset" values="0;10;0" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Heart in center - pulsing */}
      <path d="M 50 45 C 50 42, 47 40, 45 42 C 43 44, 43 46, 45 48 L 50 53 L 55 48 C 57 46, 57 44, 55 42 C 53 40, 50 42, 50 45 Z"
        fill="url(#mightyGrad)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1 1;1.1 1.1;1 1" dur="1.5s" repeatCount="indefinite" additive="sum" />
      </path>
    </g>
  </svg>
);

export const WebsiteSVG = () => (
  <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 auto 16px', display: 'block' }}
    className="contact-icon-animated">
    <defs>
      <linearGradient id="websiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    {/* Globe - MORE revolving with pulsing */}
    <circle cx="50" cy="50" r="28" stroke="url(#websiteGrad)" strokeWidth="5" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Latitude lines - rotating */}
    <ellipse cx="50" cy="50" rx="28" ry="14" stroke="url(#websiteGrad)" strokeWidth="3" fill="none" opacity="0.7">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
    </ellipse>
    <ellipse cx="50" cy="50" rx="28" ry="7" stroke="url(#websiteGrad)" strokeWidth="2.5" fill="none" opacity="0.5">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
    </ellipse>
    {/* Longitude lines - rotating */}
    <ellipse cx="50" cy="50" rx="14" ry="28" stroke="url(#websiteGrad)" strokeWidth="3" fill="none" opacity="0.7">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
    </ellipse>
    <ellipse cx="50" cy="50" rx="7" ry="28" stroke="url(#websiteGrad)" strokeWidth="2.5" fill="none" opacity="0.5">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
    </ellipse>
    {/* Center meridian - rotating */}
    <line x1="50" y1="22" x2="50" y2="78" stroke="url(#websiteGrad)" strokeWidth="3" opacity="0.6">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
    </line>
    {/* Equator - rotating */}
    <line x1="22" y1="50" x2="78" y2="50" stroke="url(#websiteGrad)" strokeWidth="3" opacity="0.6">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="15s" repeatCount="indefinite" />
    </line>
    {/* MORE Orbiting particles */}
    <circle cx="78" cy="50" r="3" fill="#fbbf24">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="50" cy="22" r="2.5" fill="#ec4899">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="22" cy="50" r="2" fill="#7c3aed">
      <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

