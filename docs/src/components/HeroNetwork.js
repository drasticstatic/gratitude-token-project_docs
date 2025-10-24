import React, { useRef, useEffect } from "react";

// Subtle hero overlay with blockchain-like symbols on left/right of title
export default function HeroNetwork({ anchorId = "landing-title" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const nav = document.querySelector('.navigation');
      const navH = nav ? nav.offsetHeight : 0;
      const anchor = document.getElementById(anchorId) || document.querySelector('.hero-title') || document.querySelector('.page-title');
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const centerY = rect.top + window.scrollY + rect.height / 2 - navH;
      // The main top group is centered at y=300; align container to title center
      el.style.transform = `translateY(${Math.round(centerY - 300)}px)`;
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update);
    const int = setInterval(update, 300);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
      clearInterval(int);
    };
  }, [anchorId]);

  return (
    <div
      ref={ref}
      className="hero-network-container"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'visible'
      }}
    >
      <svg width="100%" height="600" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid meet" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <linearGradient id="heroChainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.55" />
          </linearGradient>
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top perimeter cubes - LARGER around title - centered with title (now 6 groups) */}
        <g transform="translate(700,0)" stroke="url(#heroChainGrad)" strokeWidth="1.5" fill="none" filter="url(#heroGlow)">
          {/* Added two extra cube groups (diagonals) for a fuller circle */}
          {/* Left LARGE SQUARE cube with 5 lines */}
          <g>
            <rect x="-260" y="-40" width="100" height="100" rx="7" fill="rgba(124,58,237,0.12)" />
            <path d="M -260 -40 L -242 -52 L -142 -52 L -160 -40 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M -160 -40 L -142 -52 L -142 48 L -160 60 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-254" y="-22" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">const tx = &#123;</text>
            <text x="-254" y="-8" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">  hash: &apos;0xabc&apos;,</text>
            <text x="-254" y="6" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">  block: 42069,</text>
            <text x="-254" y="20" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">  gas: 21000</text>
            <text x="-254" y="34" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">&#125;;</text>
          </g>
          {/* Center-left LARGE rect cube */}
          <g>
            <rect x="-120" y="-25" width="110" height="50" rx="6" fill="rgba(168,85,247,0.12)" />
            <path d="M -120 -25 L -103 -36 L 7 -36 L -10 -25 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M -10 -25 L 7 -36 L 7 14 L -10 25 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-114" y="-8" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">block: 12345678</text>
            <text x="-114" y="4" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">nonce: 42</text>
            <text x="-114" y="16" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">timestamp: now</text>
          </g>
          {/* Top-left extra cube group */}
          <g>
            <rect x="-200" y="-140" width="80" height="80" rx="6" fill="rgba(124,58,237,0.12)" />
            <path d="M -200 -140 L -188 -150 L -120 -150 L -132 -140 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M -132 -140 L -120 -150 L -120 -70 L -132 -60 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-194" y="-124" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">tx.ok</text>
            <text x="-194" y="-112" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">= true</text>
          </g>
          {/* Top-right extra cube group */}
          <g>
            <rect x="120" y="-140" width="80" height="80" rx="6" fill="rgba(168,85,247,0.12)" />
            <path d="M 120 -140 L 132 -150 L 200 -150 L 188 -140 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 188 -140 L 200 -150 L 200 -70 L 188 -60 Z" fill="rgba(251,191,36,0.18)" />
            <text x="126" y="-124" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">sig</text>
            <text x="126" y="-112" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">0x…</text>
          </g>

          {/* Center-right LARGE rect cube */}
          <g>
            <rect x="10" y="-25" width="110" height="50" rx="6" fill="rgba(124,58,237,0.12)" />
            <path d="M 10 -25 L 27 -36 L 137 -36 L 120 -25 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 120 -25 L 137 -36 L 137 14 L 120 25 Z" fill="rgba(251,191,36,0.18)" />
            <text x="16" y="-8" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">gas: 21000</text>
            <text x="16" y="4" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">wei: 1e18</text>
            <text x="16" y="16" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">gwei: 50</text>
          </g>
          {/* Right LARGE SQUARE cube with 5 lines */}
          <g>
            <rect x="160" y="-40" width="100" height="100" rx="7" fill="rgba(168,85,247,0.12)" />
            <path d="M 160 -40 L 178 -52 L 278 -52 L 260 -40 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 260 -40 L 278 -52 L 278 48 L 260 60 Z" fill="rgba(251,191,36,0.18)" />
            <text x="166" y="-22" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">transfer(to,</text>
            <text x="166" y="-8" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">  from, value)</text>
            <text x="166" y="6" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">nonce: 7</text>
            <text x="166" y="20" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">chainId: 1</text>
            <text x="166" y="34" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">success: true</text>
          </g>
        </g>

        {/* Bottom perimeter cubes - LARGER (moved further down for wrapped title clearance) */}
        <g transform="translate(700,560)" stroke="url(#heroChainGrad)" strokeWidth="1.5" fill="none" filter="url(#heroGlow)">
          {/* Left LARGE SQUARE cube */}
          <g>
            <rect x="-260" y="-40" width="100" height="100" rx="7" fill="rgba(124,58,237,0.12)" />
            <path d="M -260 -40 L -242 -52 L -142 -52 L -160 -40 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M -160 -40 L -142 -52 L -142 48 L -160 60 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-254" y="-22" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">emit Offering</text>
            <text x="-254" y="-8" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">(user, amt,</text>
            <text x="-254" y="6" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace"> timestamp,</text>
            <text x="-254" y="20" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace"> proofNFT)</text>
            <text x="-254" y="34" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">;</text>
          </g>
          {/* Center-left LARGE rect cube */}
          <g>
            <rect x="-120" y="-25" width="110" height="50" rx="6" fill="rgba(168,85,247,0.12)" />
            <path d="M -120 -25 L -103 -36 L 7 -36 L -10 -25 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M -10 -25 L 7 -36 L 7 14 L -10 25 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-114" y="-8" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">require(bal &gt; 0,</text>
            <text x="-114" y="4" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace"> &quot;Insufficient&quot;)</text>
            <text x="-114" y="16" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">;</text>
          </g>
          {/* Center-right LARGE rect cube */}
          <g>
            <rect x="10" y="-25" width="110" height="50" rx="6" fill="rgba(124,58,237,0.12)" />
            <path d="M 10 -25 L 27 -36 L 137 -36 L 120 -25 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 120 -25 L 137 -36 L 137 14 L 120 25 Z" fill="rgba(251,191,36,0.18)" />
            <text x="16" y="-8" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">mapping(address</text>
            <text x="16" y="4" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace"> =&gt; uint256)</text>
            <text x="16" y="16" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">balances;</text>
          </g>
          {/* Right LARGE SQUARE cube */}
          <g>
            <rect x="160" y="-40" width="100" height="100" rx="7" fill="rgba(168,85,247,0.12)" />
            <path d="M 160 -40 L 178 -52 L 278 -52 L 260 -40 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 260 -40 L 278 -52 L 278 48 L 260 60 Z" fill="rgba(251,191,36,0.18)" />
            <text x="166" y="-22" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">function burn</text>
            <text x="166" y="-8" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">(uint amt)</text>
            <text x="166" y="6" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">external</text>
            <text x="166" y="20" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">returns(id)</text>
            <text x="166" y="34" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">&#123;...&#125;</text>
          </g>
        </g>

        {/* Left side cubes */}
        <g transform="translate(150,210)" stroke="url(#heroChainGrad)" strokeWidth="1.5" fill="none" filter="url(#heroGlow)">
          <g>
            <rect x="-80" y="-24" width="80" height="48" rx="8" fill="rgba(124,58,237,0.12)" />
            <path d="M -80 -24 L -68 -34 L 12 -34 L 0 -24 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 0 -24 L 12 -34 L 12 14 L 0 24 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-75" y="-8" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">struct</text>
            <text x="-75" y="2" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">Token &#123;</text>
            <text x="-75" y="12" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">uint id</text>
          </g>
          <g>
            <rect x="10" y="-24" width="80" height="48" rx="8" fill="rgba(168,85,247,0.12)" />
            <path d="M 10 -24 L 22 -34 L 102 -34 L 90 -24 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 90 -24 L 102 -34 L 102 14 L 90 24 Z" fill="rgba(251,191,36,0.18)" />
            <text x="15" y="-8" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">string</text>
            <text x="15" y="2" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">name;</text>
            <text x="15" y="12" fill="#fbbf24" opacity="0.65" fontSize="9" fontFamily="monospace">&#125;</text>
          </g>
        </g>

        {/* Right side cubes */}
        <g transform="translate(1250,210)" stroke="url(#heroChainGrad)" strokeWidth="1.5" fill="none" filter="url(#heroGlow)">
          <g>
            <rect x="-90" y="-24" width="80" height="48" rx="8" fill="rgba(124,58,237,0.12)" />
            <path d="M -90 -24 L -78 -34 L 2 -34 L -10 -24 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M -10 -24 L 2 -34 L 2 14 L -10 24 Z" fill="rgba(251,191,36,0.18)" />
            <text x="-85" y="-8" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">event</text>
            <text x="-85" y="2" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">Burn(</text>
            <text x="-85" y="12" fill="#ec4899" opacity="0.65" fontSize="9" fontFamily="monospace">uint amt</text>
          </g>
          <g>
            <rect x="0" y="-24" width="80" height="48" rx="8" fill="rgba(168,85,247,0.12)" />
            <path d="M 0 -24 L 12 -34 L 92 -34 L 80 -24 Z" fill="rgba(236,72,153,0.18)" />
            <path d="M 80 -24 L 92 -34 L 92 14 L 80 24 Z" fill="rgba(251,191,36,0.18)" />
            <text x="5" y="-8" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">address</text>
            <text x="5" y="2" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">indexed</text>
            <text x="5" y="12" fill="#a78bfa" opacity="0.65" fontSize="9" fontFamily="monospace">user)</text>
          </g>
        </g>

        {/* Mycelial web connections - INCREASED VISIBILITY */}
        {/* Top row connections */}
        <path d="M 510 50 Q 520 45, 590 50" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M 610 50 Q 620 45, 690 50" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M 710 50 Q 720 45, 790 50" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M 810 50 Q 820 45, 890 50" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />

        {/* Bottom row connections */}
        <path d="M 510 370 Q 520 375, 590 370" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M 610 370 Q 620 375, 690 370" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M 710 370 Q 720 375, 790 370" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M 810 370 Q 820 375, 890 370" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />

        {/* Left side connections */}
        <path d="M 150 186 Q 145 200, 150 234" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />

        {/* Right side connections */}
        <path d="M 1250 186 Q 1255 200, 1250 234" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.6" fill="none" strokeDasharray="4 3" />

        {/* Corner connections - completing the loop */}
        <path d="M 300 50 Q 220 120, 150 186" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.5" fill="none" strokeDasharray="4 3" />
        <path d="M 1100 50 Q 1180 120, 1250 186" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.5" fill="none" strokeDasharray="4 3" />
        <path d="M 150 234 Q 220 300, 300 370" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.5" fill="none" strokeDasharray="4 3" />
        <path d="M 1250 234 Q 1180 300, 1100 370" stroke="url(#heroChainGrad)" strokeWidth="2.2" opacity="0.5" fill="none" strokeDasharray="4 3" />

        {/* Spider web-like cross connections for network effect - MORE VISIBLE */}
        <path d="M 500 50 Q 350 140, 250 210" stroke="#7c3aed" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="2 4" />
        <path d="M 900 50 Q 1050 140, 1150 210" stroke="#ec4899" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="2 4" />
        <path d="M 250 210 Q 350 280, 500 370" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="2 4" />
        <path d="M 1150 210 Q 1050 280, 900 370" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="2 4" />

        {/* Subtle connective waves behind title */}
        <path d="M 100 210 Q 350 150, 700 210 T 1300 210" stroke="url(#heroChainGrad)" strokeWidth="2" fill="none" opacity="0.28">
          <animate attributeName="d" dur="6s" repeatCount="indefinite"
            values="M 100 210 Q 350 150, 700 210 T 1300 210; M 100 210 Q 350 170, 700 210 T 1300 210; M 100 210 Q 350 150, 700 210 T 1300 210" />
        </path>
      </svg>
    </div>
  );
}

