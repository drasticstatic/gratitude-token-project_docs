import React, { useEffect, useRef, useState } from "react";

/**
 * MycelialTitle - wraps a page or section title with animated mycelial root SVG background
 * Props:
 *  - icon: optional React component (lucide icon)
 *  - title: string title text
 *  - color: icon color (default #7c3aed purple)
 *  - size: icon size (default 64)
 *  - fontSize: text font size (optional, overrides CSS class)
 *  - isHomePage: boolean to enable super strong brain-like network
 */
export default function MycelialTitle({ icon: Icon, title, color = '#7c3aed', size = 64, fontSize, isHomePage = false, showBackground = true }) {
  const svgRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 800,
          y: ((e.clientY - rect.top) / rect.height) * 400
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop for breathing and waving
  useEffect(() => {
    let animationId;
    const animate = () => {
      setTime(t => t + 0.02);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Parallax scroll effect (home only to prevent detachment on other pages)
  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      if (svgRef.current) {
        const titleElement = svgRef.current.closest('.mycelial-title-wrapper');
        if (!titleElement) return;

        const titleRect = titleElement.getBoundingClientRect();
        const titleCenterY = titleRect.top + titleRect.height / 2;

        // Only apply parallax when title is in viewport
        if (titleCenterY > -200 && titleCenterY < window.innerHeight + 200) {
          const scrollY = window.scrollY;
          const offset = scrollY * 0.08; // reduced parallax to prevent detachment
          svgRef.current.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        }
      }
    };
    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Reset transform when not home page
  useEffect(() => {
    if (!isHomePage && svgRef.current) {
      svgRef.current.style.transform = 'translate(-50%, -50%)';
    }
  }, [isHomePage]);

  // Safe id suffix for gradient/filter ids (spaces/specials break SVG ids)
  const idSuffix = (title || 'title').toString().replace(/[^a-zA-Z0-9_-]/g, '-');

  // Calculate breathing scale and wave offset - reduced breathing, slightly more rocking
  const breathingScale = 1 + Math.sin(time) * (isHomePage ? 0.02 : 0.01); // Much less breathing
  const heartScale = 1 + Math.max(0, Math.sin(time * 2.0)) * (isHomePage ? 0.018 : 0.010);
  const waveOffset = Math.sin(time * 0.5) * 10; // Slow wave movement
  const rockingAngle = Math.sin(time * 0.3) * (isHomePage ? 3 : 1.5); // Slightly more rocking



  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%', textAlign: 'center', marginBottom: '16px' }}>
      {showBackground && (
        <svg
          ref={svgRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${breathingScale})`,
            width: isHomePage ? '650%' : '400%',
            height: isHomePage ? '850%' : '500%',
            zIndex: 0,
            opacity: showBackground ? (isHomePage ? 0.48 : 0.78) : 0,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out'
          }}
          viewBox="0 0 800 400"
        >
        <g
          stroke={`url(#myceliumGradient-${idSuffix})`}
          strokeWidth={isHomePage ? "2.5" : "1.2"}
          fill="none"
          opacity="0.85"
          filter={`url(#glow-${idSuffix})`}
          transform={`translate(${waveOffset * Math.sin(time * 0.3)}, ${waveOffset * Math.cos(time * 0.4)})`}
        >
          {/* Main thick branches */}
          <path d="M 400 200 Q 350 150, 300 120" strokeWidth={isHomePage ? "5" : "3.0"} />
          <path d="M 400 200 Q 450 150, 500 120" strokeWidth={isHomePage ? "5" : "3.0"} />
          <path d="M 400 200 Q 350 250, 300 280" strokeWidth={isHomePage ? "5" : "3.0"} />
          <path d="M 400 200 Q 450 250, 500 280" strokeWidth={isHomePage ? "5" : "3.0"} />
          <path d="M 400 200 Q 320 180, 240 160" strokeWidth={isHomePage ? "5" : "3.5"} />
          <path d="M 400 200 Q 480 180, 560 160" strokeWidth={isHomePage ? "5" : "3.5"} />
          <path d="M 400 200 Q 320 220, 240 240" strokeWidth={isHomePage ? "5" : "3.5"} />
          <path d="M 400 200 Q 480 220, 560 240" strokeWidth={isHomePage ? "5" : "3.5"} />

          {/* Secondary branches */}
          <path d="M 300 120 Q 250 100, 200 90" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 300 120 Q 280 80, 250 60" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 300 120 Q 270 140, 240 160" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 500 120 Q 550 100, 600 90" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 500 120 Q 520 80, 550 60" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 500 120 Q 530 140, 560 160" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 300 280 Q 250 300, 200 310" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 300 280 Q 280 320, 250 340" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 300 280 Q 270 260, 240 240" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 500 280 Q 550 300, 600 310" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 500 280 Q 520 320, 550 340" strokeWidth={isHomePage ? "4" : "2.5"} />
          <path d="M 500 280 Q 530 260, 560 240" strokeWidth={isHomePage ? "5" : "3"} />

          {/* Tertiary branches */}
          <path d="M 200 90 Q 180 70, 160 50" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 200 90 Q 170 100, 140 110" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 200 90 Q 190 60, 180 30" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 600 90 Q 620 70, 640 50" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 600 90 Q 630 100, 660 110" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 600 90 Q 610 60, 620 30" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 200 310 Q 180 330, 160 350" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 200 310 Q 170 300, 140 290" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 200 310 Q 190 340, 180 370" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 600 310 Q 620 330, 640 350" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 600 310 Q 630 300, 660 290" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />
          <path d="M 600 310 Q 610 340, 620 370" strokeWidth={isHomePage ? "2.5" : "1.5"} opacity="0.7" />

          {/* Additional hyphae at branch ends */}
          <path d="M 160 50 Q 150 45, 140 40" strokeWidth="1" opacity="0.6" />
          <path d="M 160 50 Q 155 35, 150 20" strokeWidth="1" opacity="0.6" />
          <path d="M 160 50 Q 145 55, 130 60" strokeWidth="1" opacity="0.6" />
          <path d="M 640 50 Q 650 45, 660 40" strokeWidth="1" opacity="0.6" />
          <path d="M 640 50 Q 645 35, 650 20" strokeWidth="1" opacity="0.6" />
          <path d="M 640 50 Q 655 55, 670 60" strokeWidth="1" opacity="0.6" />
          <path d="M 160 350 Q 150 355, 140 360" strokeWidth="1" opacity="0.6" />
          <path d="M 160 350 Q 155 365, 150 380" strokeWidth="1" opacity="0.6" />
          <path d="M 160 350 Q 145 345, 130 340" strokeWidth="1" opacity="0.6" />
          <path d="M 640 350 Q 650 355, 660 360" strokeWidth="1" opacity="0.6" />
          <path d="M 640 350 Q 645 365, 650 380" strokeWidth="1" opacity="0.6" />
          <path d="M 640 350 Q 655 345, 670 340" strokeWidth="1" opacity="0.6" />

          {/* Fine hyphae */}
          <path d="M 250 60 Q 300 50, 350 55" strokeWidth="1.5" opacity="0.5" />
          <path d="M 450 55 Q 500 50, 550 60" strokeWidth="1.5" opacity="0.5" />
          <path d="M 250 340 Q 300 350, 350 345" strokeWidth="1.5" opacity="0.5" />
          <path d="M 450 345 Q 500 350, 550 340" strokeWidth="1.5" opacity="0.5" />
          <path d="M 240 160 Q 200 150, 160 140" strokeWidth="1.5" opacity="0.5" />
          <path d="M 560 160 Q 600 150, 640 140" strokeWidth="1.5" opacity="0.5" />
          <path d="M 240 240 Q 200 250, 160 260" strokeWidth="1.5" opacity="0.5" />
          <path d="M 560 240 Q 600 250, 640 260" strokeWidth="1.5" opacity="0.5" />

          {/* Extra fine tendrils extending to edges */}
          <path d="M 160 50 Q 140 40, 120 30" strokeWidth="1" opacity="0.4" />
          <path d="M 640 50 Q 660 40, 680 30" strokeWidth="1" opacity="0.4" />
          <path d="M 160 350 Q 140 360, 120 370" strokeWidth="1" opacity="0.4" />
          <path d="M 640 350 Q 660 360, 680 370" strokeWidth="1" opacity="0.4" />
          <path d="M 140 110 Q 120 120, 100 130" strokeWidth="1" opacity="0.4" />
          <path d="M 660 110 Q 680 120, 700 130" strokeWidth="1" opacity="0.4" />
          <path d="M 140 290 Q 120 280, 100 270" strokeWidth="1" opacity="0.4" />
          <path d="M 660 290 Q 680 280, 700 270" strokeWidth="1" opacity="0.4" />

          {/* Many more tiny roots to edges */}
          <path d="M 120 30 Q 100 25, 80 20" strokeWidth="0.8" opacity="0.3" />
          <path d="M 120 30 Q 110 15, 100 0" strokeWidth="0.8" opacity="0.3" />
          <path d="M 680 30 Q 700 25, 720 20" strokeWidth="0.8" opacity="0.3" />
          <path d="M 680 30 Q 690 15, 700 0" strokeWidth="0.8" opacity="0.3" />
          <path d="M 120 370 Q 100 375, 80 380" strokeWidth="0.8" opacity="0.3" />
          <path d="M 120 370 Q 110 385, 100 400" strokeWidth="0.8" opacity="0.3" />
          <path d="M 680 370 Q 700 375, 720 380" strokeWidth="0.8" opacity="0.3" />
          <path d="M 680 370 Q 690 385, 700 400" strokeWidth="0.8" opacity="0.3" />
          <path d="M 100 130 Q 80 140, 60 150" strokeWidth="0.8" opacity="0.3" />
          <path d="M 100 130 Q 85 120, 70 110" strokeWidth="0.8" opacity="0.3" />
          <path d="M 700 130 Q 720 140, 740 150" strokeWidth="0.8" opacity="0.3" />
          <path d="M 700 130 Q 715 120, 730 110" strokeWidth="0.8" opacity="0.3" />
          <path d="M 100 270 Q 80 260, 60 250" strokeWidth="0.8" opacity="0.3" />
          <path d="M 100 270 Q 85 280, 70 290" strokeWidth="0.8" opacity="0.3" />
          <path d="M 700 270 Q 720 260, 740 250" strokeWidth="0.8" opacity="0.3" />
          <path d="M 700 270 Q 715 280, 730 290" strokeWidth="0.8" opacity="0.3" />

          {/* Ultra-fine connections to imaginary elements */}
          <path d="M 60 150 Q 40 160, 20 170" strokeWidth="0.5" opacity="0.2" />
          <path d="M 60 250 Q 40 240, 20 230" strokeWidth="0.5" opacity="0.2" />
          <path d="M 740 150 Q 760 160, 780 170" strokeWidth="0.5" opacity="0.2" />

          {/* MASSIVE EXPANSION: Many more tiny hyphae throughout the network */}
          {/* Top left quadrant */}
          <path d="M 200 90 Q 180 80, 160 70" strokeWidth="1" opacity="0.4" />
          <path d="M 200 90 Q 190 70, 180 50" strokeWidth="1" opacity="0.4" />
          <path d="M 200 90 Q 185 95, 170 100" strokeWidth="1" opacity="0.4" />
          <path d="M 250 60 Q 240 50, 230 40" strokeWidth="0.8" opacity="0.3" />
          <path d="M 250 60 Q 245 45, 240 30" strokeWidth="0.8" opacity="0.3" />
          <path d="M 250 60 Q 235 65, 220 70" strokeWidth="0.8" opacity="0.3" />
          <path d="M 280 80 Q 270 70, 260 60" strokeWidth="0.8" opacity="0.3" />
          <path d="M 280 80 Q 275 65, 270 50" strokeWidth="0.8" opacity="0.3" />

          {/* Top right quadrant */}
          <path d="M 600 90 Q 620 80, 640 70" strokeWidth="1" opacity="0.4" />
          <path d="M 600 90 Q 610 70, 620 50" strokeWidth="1" opacity="0.4" />
          <path d="M 600 90 Q 615 95, 630 100" strokeWidth="1" opacity="0.4" />
          <path d="M 550 60 Q 560 50, 570 40" strokeWidth="0.8" opacity="0.3" />
          <path d="M 550 60 Q 555 45, 560 30" strokeWidth="0.8" opacity="0.3" />
          <path d="M 550 60 Q 565 65, 580 70" strokeWidth="0.8" opacity="0.3" />
          <path d="M 520 80 Q 530 70, 540 60" strokeWidth="0.8" opacity="0.3" />
          <path d="M 520 80 Q 525 65, 530 50" strokeWidth="0.8" opacity="0.3" />

          {/* Bottom left quadrant */}
          <path d="M 200 310 Q 180 320, 160 330" strokeWidth="1" opacity="0.4" />
          <path d="M 200 310 Q 190 330, 180 350" strokeWidth="1" opacity="0.4" />
          <path d="M 200 310 Q 185 305, 170 300" strokeWidth="1" opacity="0.4" />
          <path d="M 250 340 Q 240 350, 230 360" strokeWidth="0.8" opacity="0.3" />
          <path d="M 250 340 Q 245 355, 240 370" strokeWidth="0.8" opacity="0.3" />
          <path d="M 250 340 Q 235 335, 220 330" strokeWidth="0.8" opacity="0.3" />
          <path d="M 280 320 Q 270 330, 260 340" strokeWidth="0.8" opacity="0.3" />
          <path d="M 280 320 Q 275 335, 270 350" strokeWidth="0.8" opacity="0.3" />

          {/* Bottom right quadrant */}
          <path d="M 600 310 Q 620 320, 640 330" strokeWidth="1" opacity="0.4" />
          <path d="M 600 310 Q 610 330, 620 350" strokeWidth="1" opacity="0.4" />
          <path d="M 600 310 Q 615 305, 630 300" strokeWidth="1" opacity="0.4" />
          <path d="M 550 340 Q 560 350, 570 360" strokeWidth="0.8" opacity="0.3" />
          <path d="M 550 340 Q 555 355, 560 370" strokeWidth="0.8" opacity="0.3" />
          <path d="M 550 340 Q 565 335, 580 330" strokeWidth="0.8" opacity="0.3" />
          <path d="M 520 320 Q 530 330, 540 340" strokeWidth="0.8" opacity="0.3" />
          <path d="M 520 320 Q 525 335, 530 350" strokeWidth="0.8" opacity="0.3" />

          {/* Middle connections - creating web-like structure */}
          <path d="M 300 120 Q 320 140, 340 160" strokeWidth="0.8" opacity="0.35" />
          <path d="M 500 120 Q 480 140, 460 160" strokeWidth="0.8" opacity="0.35" />
          <path d="M 300 280 Q 320 260, 340 240" strokeWidth="0.8" opacity="0.35" />
          <path d="M 500 280 Q 480 260, 460 240" strokeWidth="0.8" opacity="0.35" />
          <path d="M 350 150 Q 370 170, 390 190" strokeWidth="0.8" opacity="0.35" />
          <path d="M 450 150 Q 430 170, 410 190" strokeWidth="0.8" opacity="0.35" />
          <path d="M 350 250 Q 370 230, 390 210" strokeWidth="0.8" opacity="0.35" />
          <path d="M 450 250 Q 430 230, 410 210" strokeWidth="0.8" opacity="0.35" />

          {/* Radial connections from center */}
          <path d="M 400 200 Q 380 180, 360 160" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 420 180, 440 160" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 380 220, 360 240" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 420 220, 440 240" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 370 190, 340 180" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 430 190, 460 180" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 370 210, 340 220" strokeWidth="0.7" opacity="0.3" />
          <path d="M 400 200 Q 430 210, 460 220" strokeWidth="0.7" opacity="0.3" />

          {/* Diagonal cross-connections */}
          <path d="M 240 160 Q 260 180, 280 200" strokeWidth="0.7" opacity="0.3" />
          <path d="M 560 160 Q 540 180, 520 200" strokeWidth="0.7" opacity="0.3" />
          <path d="M 240 240 Q 260 220, 280 200" strokeWidth="0.7" opacity="0.3" />
          <path d="M 560 240 Q 540 220, 520 200" strokeWidth="0.7" opacity="0.3" />

          {/* Outer ring connections */}
          <path d="M 200 90 Q 220 110, 240 130" strokeWidth="0.6" opacity="0.25" />
          <path d="M 600 90 Q 580 110, 560 130" strokeWidth="0.6" opacity="0.25" />
          <path d="M 200 310 Q 220 290, 240 270" strokeWidth="0.6" opacity="0.25" />
          <path d="M 600 310 Q 580 290, 560 270" strokeWidth="0.6" opacity="0.25" />

          {/* Spiral-like tendrils */}
          <path d="M 300 120 Q 310 130, 320 145" strokeWidth="0.6" opacity="0.25" />
          <path d="M 500 120 Q 490 130, 480 145" strokeWidth="0.6" opacity="0.25" />
          <path d="M 300 280 Q 310 270, 320 255" strokeWidth="0.6" opacity="0.25" />
          <path d="M 500 280 Q 490 270, 480 255" strokeWidth="0.6" opacity="0.25" />
          <path d="M 740 250 Q 760 240, 780 230" strokeWidth="0.5" opacity="0.2" />
          <path d="M 80 20 Q 60 10, 40 5" strokeWidth="0.5" opacity="0.2" />
          <path d="M 720 20 Q 740 10, 760 5" strokeWidth="0.5" opacity="0.2" />
          <path d="M 80 380 Q 60 390, 40 395" strokeWidth="0.5" opacity="0.2" />
          <path d="M 720 380 Q 740 390, 760 395" strokeWidth="0.5" opacity="0.2" />
        </g>
        <defs>
          <linearGradient id={`myceliumGradient-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9">
              <animate attributeName="stopColor" values="#7c3aed;#581c87;#7c3aed" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8">
              <animate attributeName="stopColor" values="#ec4899;#db2777;#ec4899" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9">
              <animate attributeName="stopColor" values="#fbbf24;#f59e0b;#fbbf24" dur="5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id={`glow-${idSuffix}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      )}

      <h1
        className={isHomePage ? "hero-title" : "page-title"}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          fontSize: fontSize || undefined,
          textShadow: isHomePage ? '0 3px 6px rgba(0,0,0,0.9), 0 6px 12px rgba(0,0,0,0.7), 0 0 50px rgba(124,58,237,0.8), 0 0 100px rgba(236,72,153,0.6)' : '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.7), 0 0 80px rgba(236,72,153,0.5)',
          backgroundImage: 'linear-gradient(90deg, #fbbf24, #ec4899, #7c3aed, #ec4899, #fbbf24)',
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'pre-line',
          lineHeight: isHomePage ? 1.08 : 1.1,
          textAlign: 'center',
          backgroundPosition: `${50 + Math.sin(time * 0.6) * 50}% 50%`,
          WebkitTextStroke: isHomePage ? '1.5px rgba(0,0,0,0.7)' : '1px rgba(0,0,0,0.6)',
          letterSpacing: '0.05em',
          transform: `scale(${(breathingScale * heartScale).toFixed(4)}) translateY(${Math.sin(time * 0.5) * (isHomePage ? 3 : 1)}px) rotate(${rockingAngle}deg)`,
          transition: 'transform 0.1s ease-out',
          filter: `drop-shadow(0 0 ${8 + Math.sin(time * 3) * 4}px rgba(251,191,36,0.6)) drop-shadow(0 0 ${12 + Math.cos(time * 2.5) * 6}px rgba(236,72,153,0.5))`
        }}
      >
        {Icon && (
          <span style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            transform: `rotate(${Math.sin(time * 0.7) * (isHomePage ? 5 : 2)}deg)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <Icon size={size * 1.4} style={{ color, filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.9)) drop-shadow(0 0 25px rgba(236,72,153,0.6))' }} />
          </span>
        )}
        {title}
        {Icon && (
          <span style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            transform: `rotate(${Math.sin(time * 0.7 + Math.PI) * (isHomePage ? 5 : 2)}deg)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <Icon size={size * 1.4} style={{ color, filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.9)) drop-shadow(0 0 25px rgba(236,72,153,0.6))' }} />
          </span>
        )}
      </h1>
    </div>
  );
}

