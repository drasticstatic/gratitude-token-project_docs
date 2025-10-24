import React, { useEffect, useRef } from "react";

// Scattered blockchain cubes throughout the page with parallax scrolling
export default function ScatteredBlockchainCubes() {
  const containerRef = useRef(null);

  // Parallax scrolling effect - cubes move at different speeds
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      // Apply different transform speeds to create depth - negative to move slower than page
      containerRef.current.style.transform = `translateY(${scrollY * -0.15}px)`;
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        willChange: 'transform'
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1400 2000" preserveAspectRatio="xMidYMin slice" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <linearGradient id="scatteredChainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.5" />
          </linearGradient>
          <filter id="scatteredGlow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top section cubes - MORE near title area, webbed together - SMALLER SIZE */}
        <g transform="translate(100,180)" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="45" height="45" rx="4" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 7 -6 L 52 -6 L 45 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 45 0 L 52 -6 L 52 39 L 45 45 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="14" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">mint()</text>
          <text x="4" y="24" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">token</text>
          <text x="4" y="34" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">NFT #42</text>
          <text x="4" y="44" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">owner</text>
          <text x="4" y="54" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">success</text>
        </g>

        <g transform="translate(1220,200)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -8 L 75 -8 L 65 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 65 0 L 75 -8 L 75 57 L 65 65 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="14" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">burn()</text>
          <text x="4" y="24" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">amount</text>
          <text x="4" y="34" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">50 ETHO</text>
          <text x="4" y="44" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">proof</text>
          <text x="4" y="54" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">eternal</text>
        </g>

        {/* Additional cubes near title - MORE DENSITY */}
        <g transform="translate(180,220)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="rgba(236,72,153,0.1)" />
          <path d="M 0 0 L 10 -8 L 75 -8 L 65 0 Z" fill="rgba(124,58,237,0.15)" />
          <path d="M 65 0 L 75 -8 L 75 57 L 65 65 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="14" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">stake()</text>
          <text x="4" y="24" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">MDAO</text>
          <text x="4" y="34" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">100 tkn</text>
          <text x="4" y="44" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">locked</text>
          <text x="4" y="54" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">voting</text>
        </g>

        <g transform="translate(1160,240)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="rgba(251,191,36,0.1)" />
          <path d="M 0 0 L 10 -8 L 75 -8 L 65 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 65 0 L 75 -8 L 75 57 L 65 65 Z" fill="rgba(124,58,237,0.15)" />
          <text x="4" y="14" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">swap()</text>
          <text x="4" y="24" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">ETHO</text>
          <text x="4" y="34" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">for PSD</text>
          <text x="4" y="44" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">AMM</text>
          <text x="4" y="54" fill="#a78bfa" opacity="0.6" fontSize="7" fontFamily="monospace">pool</text>
        </g>

        <g transform="translate(260,190)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 75 -8 L 65 0 Z" fill="rgba(251,191,36,0.15)" />
          <path d="M 65 0 L 75 -8 L 75 57 L 65 65 Z" fill="rgba(236,72,153,0.15)" />
          <text x="4" y="14" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">vote()</text>
          <text x="4" y="24" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">prop</text>
          <text x="4" y="34" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">#42</text>
          <text x="4" y="44" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">quorum</text>
          <text x="4" y="54" fill="#fbbf24" opacity="0.6" fontSize="7" fontFamily="monospace">passed</text>
        </g>

        <g transform="translate(1080,210)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="rgba(236,72,153,0.1)" />
          <path d="M 0 0 L 10 -8 L 75 -8 L 65 0 Z" fill="rgba(124,58,237,0.15)" />
          <path d="M 65 0 L 75 -8 L 75 57 L 65 65 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="14" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">breed()</text>
          <text x="4" y="24" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">NFT</text>
          <text x="4" y="34" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">genes</text>
          <text x="4" y="44" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">rare</text>
          <text x="4" y="54" fill="#ec4899" opacity="0.6" fontSize="7" fontFamily="monospace">spawn</text>
        </g>

        <g transform="translate(120,260)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">offer()</text>
          <text x="4" y="22" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">ETHO: 7</text>
          <text x="4" y="31" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">proof</text>
          <text x="4" y="40" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">tx</text>
          <text x="4" y="49" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">ok</text>
        </g>

        <g transform="translate(1240,300)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">swap()</text>
          <text x="4" y="19" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">ETHO</text>
          <text x="4" y="27" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">PSD</text>
        </g>

        <g transform="translate(220,420)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">farm()</text>
          <text x="4" y="22" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">yield</text>
          <text x="4" y="31" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">rate</text>
          <text x="4" y="40" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">psd</text>
          <text x="4" y="49" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">etho</text>
        </g>

        <g transform="translate(1160,480)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">vote()</text>
          <text x="4" y="19" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">prop</text>
          <text x="4" y="27" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">3</text>
        </g>

        {/* Web connections - EXTENSIVE tendrils connecting all top cubes - THINNER STROKE */}
        <path d="M 130 210 Q 400 220, 1250 230" stroke="url(#scatteredChainGrad)" strokeWidth="0.8" opacity="0.3" fill="none" strokeDasharray="3 5" />
        <path d="M 165 245 Q 700 250, 1255 265" stroke="url(#scatteredChainGrad)" strokeWidth="0.8" opacity="0.3" fill="none" strokeDasharray="3 5" />
        <path d="M 150 290 Q 400 310, 1260 320" stroke="url(#scatteredChainGrad)" strokeWidth="0.8" opacity="0.3" fill="none" strokeDasharray="3 5" />
        <path d="M 240 450 Q 600 380, 1180 490" stroke="url(#scatteredChainGrad)" strokeWidth="0.8" opacity="0.3" fill="none" strokeDasharray="3 5" />
        {/* New connections for additional cubes */}
        <path d="M 210 250 Q 500 240, 1190 270" stroke="url(#scatteredChainGrad)" strokeWidth="0.8" opacity="0.3" fill="none" strokeDasharray="3 5" />
        <path d="M 290 220 Q 700 215, 1110 240" stroke="url(#scatteredChainGrad)" strokeWidth="0.8" opacity="0.3" fill="none" strokeDasharray="3 5" />
        <path d="M 130 210 Q 220 205, 290 220" stroke="url(#scatteredChainGrad)" strokeWidth="1.3" opacity="0.3" fill="none" strokeDasharray="2 5" />
        <path d="M 1250 230 Q 1200 235, 1190 270" stroke="url(#scatteredChainGrad)" strokeWidth="1.3" opacity="0.3" fill="none" strokeDasharray="2 5" />
        {/* Diagonal connections for richer web */}
        <path d="M 130 210 Q 300 400, 240 450" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        <path d="M 1250 230 Q 1200 350, 1180 490" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        <path d="M 210 250 Q 180 350, 150 290" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        <path d="M 1110 240 Q 1140 320, 1260 320" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />

        <g transform="translate(200,800)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small square cube with 5 lines */}
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">event:</text>
          <text x="4" y="22" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">Transfer</text>
          <text x="4" y="31" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">amount:</text>
          <text x="4" y="40" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">100 ETHO</text>
          <text x="4" y="49" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">success</text>
        </g>

        <g transform="translate(1100,900)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small rectangular cube with 3 lines */}
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">mint NFT</text>
          <text x="4" y="19" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">tokenId:</text>
          <text x="4" y="27" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">42</text>
        </g>

        {/* Bottom section cubes - SLIGHTLY SMALLER */}
        <g transform="translate(300,1400)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Slightly smaller square cube with 5 lines */}
          <rect x="0" y="0" width="55" height="55" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 65 -8 L 55 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 55 0 L 65 -8 L 65 47 L 55 55 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="12" fill="#fbbf24" opacity="0.6" fontSize="6" fontFamily="monospace">burn():</text>
          <text x="4" y="21" fill="#fbbf24" opacity="0.6" fontSize="6" fontFamily="monospace">50 ETHO</text>
          <text x="4" y="30" fill="#fbbf24" opacity="0.6" fontSize="6" fontFamily="monospace">proof:</text>
          <text x="4" y="39" fill="#fbbf24" opacity="0.6" fontSize="6" fontFamily="monospace">NFT #7</text>
          <text x="4" y="48" fill="#fbbf24" opacity="0.6" fontSize="6" fontFamily="monospace">eternal</text>
        </g>

        <g transform="translate(1000,1500)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small rectangular cube with 3 lines */}
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">vote()</text>
          <text x="4" y="19" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">prop: 3</text>
          <text x="4" y="27" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">yes: 1</text>
        </g>

        {/* More bottom cubes */}
        <g transform="translate(700,1550)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small rect cube */}
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">claim()</text>
          <text x="4" y="19" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">rewards</text>
          <text x="4" y="27" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">pending</text>
        </g>

        {/* Additional scattered cubes - SMALLER */}
        <g transform="translate(600,1100)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small square cube with 5 lines */}
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">breed():</text>
          <text x="4" y="22" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">parent1</text>
          <text x="4" y="31" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">parent2</text>
          <text x="4" y="40" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">hybrid:</text>
          <text x="4" y="49" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">rare!</text>
        </g>

        {/* More middle section cubes */}
        <g transform="translate(900,1000)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small rect cube */}
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">swap()</text>
          <text x="4" y="19" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">ETHO/PSD</text>
          <text x="4" y="27" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">rate: 1.5</text>
        </g>

        <g transform="translate(400,950)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          {/* Small square cube */}
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">stake:</text>
          <text x="4" y="22" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">amount</text>
          <text x="4" y="31" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">duration</text>
          <text x="4" y="40" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">rewards</text>
          <text x="4" y="49" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">locked</text>
        </g>

        {/* Mycelial web connections between scattered cubes - MORE CONNECTIONS */}
        <path d="M 230 830 Q 400 900, 630 1130" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 1135 930 Q 900 1000, 660 1130" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 330 1430 Q 500 1450, 660 1137" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 1035 1530 Q 850 1400, 690 1137" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 260 860 Q 600 1200, 1035 1530" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        <path d="M 1165 930 Q 700 1200, 330 1430" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        {/* New connections for additional cubes */}
        <path d="M 430 980 Q 600 1000, 930 1030" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 460 1010 Q 600 1100, 730 1580" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 970 1030 Q 900 1200, 770 1580" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" opacity="0.35" fill="none" strokeDasharray="3 5" />
        <path d="M 230 830 Q 350 900, 430 980" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        <path d="M 1000 1030 Q 1050 1250, 1035 1530" stroke="url(#scatteredChainGrad)" strokeWidth="1.2" opacity="0.25" fill="none" strokeDasharray="2 6" />
        {/* Additional upper/mid cubes for richer density */}
        <g transform="translate(180,700)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">offer()</text>
          <text x="4" y="22" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">amount</text>
          <text x="4" y="31" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">proof</text>
          <text x="4" y="40" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">txid</text>
          <text x="4" y="49" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">done</text>
        </g>
        <g transform="translate(1180,780)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">mint()</text>
          <text x="4" y="19" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">token</text>
          <text x="4" y="27" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">id: 9</text>
        </g>
        <g transform="translate(250,1220)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">stake()</text>
          <text x="4" y="22" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">pool</text>
          <text x="4" y="31" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">APR</text>
          <text x="4" y="40" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">lock</text>
          <text x="4" y="49" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">claim</text>
        </g>
        <g transform="translate(1120,1320)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">vote()</text>
          <text x="4" y="19" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">yes/no</text>
          <text x="4" y="27" fill="#fbbf24" opacity="0.6" fontSize="6.5" fontFamily="monospace">sig</text>
        </g>
        <g transform="translate(520,1700)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="60" height="60" rx="5" fill="rgba(124,58,237,0.1)" />
          <path d="M 0 0 L 10 -8 L 70 -8 L 60 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 60 0 L 70 -8 L 70 52 L 60 60 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="13" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">farm()</text>
          <text x="4" y="22" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">yield</text>
          <text x="4" y="31" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">rate</text>
          <text x="4" y="40" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">psd</text>
          <text x="4" y="49" fill="#ec4899" opacity="0.6" fontSize="6.5" fontFamily="monospace">etho</text>
        </g>
        <g transform="translate(960,1720)" stroke="url(#scatteredChainGrad)" strokeWidth="1.5" fill="none" filter="url(#scatteredGlow)">
          <rect x="0" y="0" width="70" height="30" rx="5" fill="rgba(168,85,247,0.1)" />
          <path d="M 0 0 L 10 -7 L 80 -7 L 70 0 Z" fill="rgba(236,72,153,0.15)" />
          <path d="M 70 0 L 80 -7 L 80 23 L 70 30 Z" fill="rgba(251,191,36,0.15)" />
          <text x="4" y="11" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">swap</text>
          <text x="4" y="19" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">fee</text>
          <text x="4" y="27" fill="#a78bfa" opacity="0.6" fontSize="6.5" fontFamily="monospace">slip</text>
        </g>

      </svg>
    </div>
  );
}

