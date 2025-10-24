import React, { useEffect, useRef, useState } from "react";

/**
 * MycelialNetwork - Full-page interactive mycelial root system
 * - Connects title to all interactive elements (cards, buttons, inputs)
 * - Glows where cursor hovers with heartbeat pulse
 * - Lightning storm effect for brain-like activity
 * - Parallax scrolling effect
 */
export default function MycelialNetwork({ sourceId = "page-title" }) {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [elements, setElements] = useState([]);
  const [lightweightMode, setLightweightMode] = useState(() => {
    const saved = localStorage.getItem('lightweightMode');
    return saved === null ? true : saved === 'true';
  });
  const pulsesRef = useRef([]);
  const clickPulsesRef = useRef([]);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const glitterParticlesRef = useRef([]);

  // Listen for lightweight mode changes
  useEffect(() => {
    const handleLightweightModeChange = (e) => {
      setLightweightMode(e.detail.enabled);
    };
    window.addEventListener('lightweightModeChange', handleLightweightModeChange);
    return () => window.removeEventListener('lightweightModeChange', handleLightweightModeChange);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const nav = document.querySelector('.navigation');
      const navH = nav ? nav.offsetHeight : 0;
      setMousePos({ x: e.clientX, y: e.clientY + window.scrollY - navH });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Find all interactive elements and title
  useEffect(() => {
    const updateElements = () => {
      const titleContainer = document.getElementById(sourceId) || document.querySelector('.page-title');
      const title = (titleContainer && (titleContainer.querySelector('h1, .page-title, .hero-title') || titleContainer)) || null;
      const cards = Array.from(document.querySelectorAll('.feature-card, .card, .info-box'));
      const buttons = Array.from(document.querySelectorAll('button, .btn, .nav-link, .nav-button, nav a, a.nav-link'));
      const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
      const footer = document.querySelector('footer, .footer');
      const dropdowns = Array.from(document.querySelectorAll('.dropdown-content, [class*="dropdown"], .swap-section, .liquidity-section'));
      const faqContainer = document.querySelector('.faq-container');

      const allElements = [title, ...cards, ...buttons, ...inputs, footer, ...dropdowns, faqContainer].filter(Boolean);

      const isHome = sourceId === 'landing-title';
      const positions = [];
      allElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.height > 0 && rect.width > 0;
        const inNav = !!el.closest('nav');
        const centerX = rect.left + rect.width / 2;
        // If the element is in the navbar, shift the target node slightly below the navbar so it remains visible
        const navH0 = (document.querySelector('.navigation')?.offsetHeight) || 0;
        const centerY = (inNav ? (rect.bottom + window.scrollY + 28) : (rect.top + window.scrollY + rect.height / 2)) - navH0;

        // Add center node
        positions.push({
          x: centerX,
          y: centerY,
          width: rect.width,
          height: rect.height,
          isTitle: el === title,
          isButton: buttons.includes(el) || inNav,
          isFooter: el === footer,
          isDropdown: dropdowns.includes(el),
          isNav: inNav,
          isVisible: isVisible,
          isFAQ: el.classList && el.classList.contains('faq-item'),
          element: el
        });

        // Add edge nodes for cards and larger elements
        const isFaqItem = el.classList && el.classList.contains('faq-item');
        const isCard = el.classList && (el.classList.contains('feature-card') || el.classList.contains('card') || el.classList.contains('info-box') || el.classList.contains('faq-container'));
        const isMushroomFarm = el.id === 'mushroom-farm' || (el.classList && el.classList.contains('mushroom-farm'));

        if ((isFaqItem || isMushroomFarm) && rect.width > 200) {
          // FAQ and Mushroom Farm: prefer LEFT and RIGHT edge nodes so strands branch to sides
          const leftX = rect.left;
          const rightX = rect.right;
          positions.push({ x: leftX, y: centerY, isEdge: true, isVisible, isFaqEdge: isFaqItem, isFarmEdge: isMushroomFarm });
          positions.push({ x: rightX, y: centerY, isEdge: true, isVisible, isFaqEdge: isFaqItem, isFarmEdge: isMushroomFarm });
        } else if (isCard && rect.width > 200 && rect.height > 100) {
          const navH2 = (document.querySelector('.navigation')?.offsetHeight) || 0;
          const topY = rect.top + window.scrollY - navH2;
          const bottomY = rect.bottom + window.scrollY - navH2;
          const leftX = rect.left;
          const rightX = rect.right;

          // Add edge nodes (top, bottom, left, right)
          positions.push({ x: centerX, y: topY, isEdge: true, isVisible });
          positions.push({ x: centerX, y: bottomY, isEdge: true, isVisible });
          positions.push({ x: leftX, y: centerY, isEdge: true, isVisible });
          positions.push({ x: rightX, y: centerY, isEdge: true, isVisible });
        }
      });

      // Add ambient corner and side nodes for site-wide look
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const sideStep = 320;
      const navEl = document.querySelector('.navigation');
      const navH = navEl ? navEl.offsetHeight : 0;
      const sidePadding = Math.max(navH + 8, 48); // hug just under navbar edge
      const leftX = 24;
      const rightX = window.innerWidth - 24;
      const ambient = [];
      // corners (slightly inset and under navbar)
      ambient.push({ x: leftX, y: sidePadding, isAmbient: true });
      ambient.push({ x: rightX, y: sidePadding, isAmbient: true });
      ambient.push({ x: leftX, y: docHeight - 80, isAmbient: true });
      ambient.push({ x: rightX, y: docHeight - 80, isAmbient: true });
      // side rails
      for (let y = sidePadding + 120; y < docHeight - 120; y += sideStep) {
        ambient.push({ x: leftX, y, isAmbient: true });
        ambient.push({ x: rightX, y, isAmbient: true });
      }

      // On home, add hero-perimeter nodes around the title to connect HeroNetwork boxes
      if (isHome) {
        const src = positions.find(p => p.isTitle);
        if (src) {
          const spreadX = 420;
          const spreadY = 80;
          ambient.push({ x: src.x - spreadX, y: src.y - spreadY, isAmbient: true });
          ambient.push({ x: src.x + spreadX, y: src.y - spreadY, isAmbient: true });
          ambient.push({ x: src.x - spreadX, y: src.y + spreadY, isAmbient: true });
          ambient.push({ x: src.x + spreadX, y: src.y + spreadY, isAmbient: true });
        }
      }

      setElements([...positions, ...ambient]);
    };

    updateElements();
    window.addEventListener('resize', updateElements);
    window.addEventListener('scroll', updateElements);

    // Update periodically for dynamic content (more frequent for dropdowns)
    const interval = setInterval(updateElements, 500);

    return () => {
      window.removeEventListener('resize', updateElements);
      window.removeEventListener('scroll', updateElements);
      clearInterval(interval);
    };
  }, [sourceId]);

  // Draw mycelial network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || elements.length === 0) return;

    // Set canvas size to full document height
    const updateCanvasSize = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      canvas.width = window.innerWidth;
      canvas.height = docHeight;
    };
    updateCanvasSize();

    const ctx = canvas.getContext('2d');
    const title = elements.find(el => el.isTitle);
    if (!title) return;

    // Click handler for shockwaves
    const handleClick = (e) => {
      const nav = document.querySelector('.navigation');
      const navH = nav ? nav.offsetHeight : 0;
      clickPulsesRef.current.push({ x: e.clientX, y: e.clientY + window.scrollY - navH, r: 20, alpha: 0.9 });
      if (clickPulsesRef.current.length > 8) clickPulsesRef.current.shift();
    };
    window.addEventListener('click', handleClick);

    const draw = () => {
      timeRef.current += 0.016; // ~60fps

      // Resize canvas to full page (top anchored) for consistent centering with title
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new glitter particles periodically
      if (Math.random() < 0.15 && elements.length > 0) {
        const title = elements.find(e => e.isTitle);
        const targets = elements.filter(e => !e.isTitle);
        if (title && targets.length > 0) {
          const target = targets[Math.floor(Math.random() * targets.length)];
          glitterParticlesRef.current.push({
            x: title.x,
            y: title.y,
            targetX: target.x,
            targetY: target.y,
            progress: 0,
            returning: false,
            size: 0.8 + Math.random() * 1.0,
            speed: 0.008 + Math.random() * 0.008,
            color: ['#fbbf24', '#ec4899', '#7c3aed', '#a78bfa'][Math.floor(Math.random() * 4)]
          });
        }
      }
      // Limit glitter particles
      if (glitterParticlesRef.current.length > 40) {
        glitterParticlesRef.current = glitterParticlesRef.current.slice(-40);
      }

      // Lightning storm effect (random flashes) - INCREASED on home page
      const isHomePage = elements.some(e => e.element && e.element.id === 'landing-title');
      const flashChance = isHomePage ? 0.05 : 0.03;
      const flashIntensity = isHomePage ? 0.5 : 0.35;
      const flashRadius = isHomePage ? 300 : 200;

      if (Math.random() < flashChance) {
        const flashX = Math.random() * canvas.width;
        const flashY = Math.random() * canvas.height;
        const gradient = ctx.createRadialGradient(flashX, flashY, 0, flashX, flashY, flashRadius);
        gradient.addColorStop(0, `rgba(251, 191, 36, ${flashIntensity})`);
        gradient.addColorStop(0.5, `rgba(236, 72, 153, ${flashIntensity * 0.6})`);
        gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw connections from title to all elements with multiple branches
      elements.forEach((target, index) => {
        if (target.isTitle) return;

        // Calculate distance to mouse
        const distToMouse = Math.sqrt(
          Math.pow(mousePos.x - (target.x + title.x) / 2, 2) +
          Math.pow(mousePos.y - (target.y + title.y) / 2, 2)
        );
        const mouseGlow = Math.max(0, 1 - distToMouse / 400);

        // Pulsing/growing animation based on scroll and time
        const scrollPulse = 0.3 + 0.7 * Math.sin(timeRef.current * 2 + index * 0.3);
        const growthFactor = 1 + scrollPulse * 0.3;

        // Base opacity - more visible throughout
        const distFromTop = target.y - window.scrollY;
        const navbarProximity = Math.max(0, 1 - distFromTop / 200);
        const baseOpacity = target.isButton ? 0.7 : 0.4;
        const opacity = (baseOpacity - navbarProximity * 0.2) + mouseGlow * 0.7 + scrollPulse * 0.2;

        // Draw multiple main roots from title to target for more organic attachment
        const rootOffsets = [-25, 0, 25];
        const midX = (title.x + target.x) / 2;
        const isHome = sourceId === 'landing-title';
        const midY = (title.y + target.y) / 2 - window.scrollY + (isHome ? 0 : 30);

        const dy = Math.abs(target.y - title.y);
        rootOffsets.forEach((ro, ri) => {
          if (dy > 700 && ro !== 0) return;
          ctx.beginPath();
          ctx.moveTo(title.x + ro * 0.2, title.y - window.scrollY + ri * 2);

          let offsetX = Math.sin(timeRef.current + index + ri) * 40 * growthFactor + ro;
          let offsetY = Math.cos(timeRef.current + index + ri) * 40 * growthFactor;
          if (target.isFaqEdge || target.isFarmEdge) {
            // Bow the curve more horizontally to branch around FAQ/Farm instead of cutting through
            const sideBias = target.x < title.x ? -1 : 1;
            offsetX += sideBias * 120;
            offsetY += 20;
          }

          ctx.quadraticCurveTo(
            midX + offsetX,
            midY + offsetY,
            target.x + ro * 0.3,
            target.y - window.scrollY + ri * 2
          );

          const gradient = ctx.createLinearGradient(
            title.x, title.y - window.scrollY,
            target.x, target.y - window.scrollY
          );
          gradient.addColorStop(0, `rgba(124, 58, 237, ${opacity * 0.55})`);
          gradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity * 0.65})`);
          gradient.addColorStop(1, `rgba(251, 191, 36, ${opacity * 0.9})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = (target.isButton ? 3.2 : 1.9) * growthFactor;
          ctx.lineCap = 'round';
          ctx.stroke();
        });

        // Draw many hairy branching roots to each element (denser for branchy look)
        const numBranches = target.isFAQ ? 4 : (target.isFooter ? 14 : (target.isDropdown ? 12 : (target.isButton ? 10 : 8)));
        const extraIntensity = target.isFooter ? 1.8 : (target.isDropdown ? 1.5 : 1.15);

        for (let b = 0; b < numBranches; b++) {
          ctx.beginPath();
          ctx.moveTo(title.x, title.y - window.scrollY);

          const branchOffset = (b - numBranches / 2) * 40;
          const branchMidX = midX + branchOffset + Math.sin(timeRef.current * 1.5 + index + b) * 30;
          const branchMidY = midY + Math.cos(timeRef.current * 1.5 + index + b) * 30 + 20;

          ctx.quadraticCurveTo(
            branchMidX,
            branchMidY,
            target.x + (b - numBranches / 2) * 12,
            target.y - window.scrollY + (b - numBranches / 2) * 8
          );

          ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.35 * extraIntensity})`;
          ctx.lineWidth = 1.2 * growthFactor;
          ctx.stroke();
        }

        // Smaller nodes with more hairy tendrils
        if (mouseGlow > 0.2 || target.isButton || target.isFooter || target.isDropdown) {
          const nodeSize = (2 + mouseGlow * 2) * growthFactor; // Smaller nodes
          ctx.beginPath();
          ctx.arc(target.x, target.y - window.scrollY, nodeSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 191, 36, ${Math.max(mouseGlow, target.isButton ? 0.5 : 0.3) * extraIntensity})`;
          ctx.shadowBlur = 8 + mouseGlow * 12;
          ctx.shadowColor = `rgba(251, 191, 36, ${mouseGlow * 0.7})`;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Draw many hairy tendrils around the node (more for ambient and nav)
          const numTendrils = target.isFooter ? 24 : (target.isDropdown ? 20 : (target.isNav ? 22 : 16));
          for (let t = 0; t < numTendrils; t++) {
            const angle = (t / numTendrils) * Math.PI * 2 + timeRef.current;
            const tendrilLength = (15 + Math.sin(timeRef.current * 3 + t) * 6) * extraIntensity;

            // Main tendril
            ctx.beginPath();
            ctx.moveTo(target.x, target.y - window.scrollY);
            ctx.lineTo(
              target.x + Math.cos(angle) * tendrilLength,
              target.y - window.scrollY + Math.sin(angle) * tendrilLength
            );
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.4 * extraIntensity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Sub-tendrils (hairy effect) - more of them
            for (let s = 0; s < 3; s++) {
              const subAngle = angle + (s - 1) * 0.4;
              const subLength = tendrilLength * 0.7;
              ctx.beginPath();
              ctx.moveTo(
                target.x + Math.cos(angle) * tendrilLength * 0.5,
                target.y - window.scrollY + Math.sin(angle) * tendrilLength * 0.5
              );
              ctx.lineTo(
                target.x + Math.cos(subAngle) * subLength,
                target.y - window.scrollY + Math.sin(subAngle) * subLength
              );
              ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.25 * extraIntensity})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
              }
            }

            // Sparkles around nav/ambient nodes
            if (target.isNav || target.isAmbient) {
              const sparkles = 6;
              for (let p = 0; p < sparkles; p++) {
                const a = (p / sparkles) * Math.PI * 2 + timeRef.current * 0.8;
                const r = 8 + (p % 3) * 3;
                ctx.beginPath();
                ctx.arc(
                  target.x + Math.cos(a) * r,
                  target.y - window.scrollY + Math.sin(a) * r,
                  1.2,
                  0,
                  Math.PI * 2
                );
                ctx.fillStyle = 'rgba(251,191,36,0.8)';
                ctx.fill();
              }
            }
          }

      }); // end elements.forEach
      // Neighbor-branch connections between nearby elements to reduce long verticals
      const nonTitle = elements.filter(e => !e.isTitle && !e.isAmbient);
      for (let i = 0; i < nonTitle.length; i++) {
        const a = nonTitle[i];
        // Skip pure nav icons for neighbor graph to avoid clutter at top
        if (a.isNav) continue;
        // Find up to 2 nearest neighbors within radius
        const neighbors = nonTitle
          .filter((b, j) => j !== i && !b.isNav)
          .map(b => ({ b, d: Math.hypot(a.x - b.x, a.y - b.y) }))
          .sort((m, n) => m.d - n.d)
          .slice(0, 2)
          .filter(n => n.d < 380);
        neighbors.forEach(({ b, d }, ni) => {
          const k = Math.max(0.2, 1 - d / 380);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y - window.scrollY);
          // Slight curve toward midpoint with subtle mouse attraction
          const baseMidX = (a.x + b.x) / 2;
          const baseMidY = (a.y + b.y) / 2;
          const midx = baseMidX + (mousePos.x - baseMidX) * 0.02;
          const midy = baseMidY - window.scrollY + (mousePos.y - baseMidY) * 0.02;
          ctx.quadraticCurveTo(midx, midy, b.x, b.y - window.scrollY);
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.25 * k})`;
          ctx.lineWidth = 0.8 * k;
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      // Cursor-attraction hyphae that reach toward the mouse and recede - INCREASED VISIBILITY
      const tendrilRadius = 500;
      const nearby = elements.filter(e => !e.isTitle && Math.hypot(e.x - mousePos.x, e.y - mousePos.y) < tendrilRadius);
      nearby.forEach((e, i) => {
        const d = Math.hypot(e.x - mousePos.x, e.y - mousePos.y);
        const k = Math.max(0.3, 1 - d / tendrilRadius); // Minimum 0.3 instead of 0
        ctx.beginPath();
        ctx.moveTo(e.x, e.y - window.scrollY);
        const cpx = (e.x + mousePos.x) / 2 + (Math.sin(timeRef.current * 2 + i) * 30 * k);
        const cpy = (e.y + mousePos.y) / 2 - window.scrollY + (Math.cos(timeRef.current * 2 + i) * 30 * k);
        ctx.quadraticCurveTo(cpx, cpy, mousePos.x, mousePos.y - window.scrollY);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.65 * k})`;
        ctx.lineWidth = 2.2 * k + 0.6;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Shockwave pulses like synapses - MORE PROMINENT
      if (Math.random() < 0.04) {
        pulsesRef.current.push({ x: mousePos.x, y: mousePos.y, r: 15, alpha: 0.7 });
        if (pulsesRef.current.length > 18) pulsesRef.current.shift();
      }
      pulsesRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y - window.scrollY, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(251, 191, 36, ${p.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // Inner ring
        ctx.beginPath();
        ctx.arc(p.x, p.y - window.scrollY, p.r * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${p.alpha * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        p.r += 3.5; p.alpha -= 0.025;
      });
      pulsesRef.current = pulsesRef.current.filter(p => p.alpha > 0.02);

      // Click-based shockwaves - larger and more dramatic
      clickPulsesRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y - window.scrollY, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(251, 191, 36, ${p.alpha})`;
        ctx.lineWidth = 3.5;
        ctx.stroke();
        // Middle ring
        ctx.beginPath();
        ctx.arc(p.x, p.y - window.scrollY, p.r * 0.65, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${p.alpha * 0.85})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // Inner ring
        ctx.beginPath();
        ctx.arc(p.x, p.y - window.scrollY, p.r * 0.35, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(124, 58, 237, ${p.alpha * 0.7})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        p.r += 5; p.alpha -= 0.035;
      });
      clickPulsesRef.current = clickPulsesRef.current.filter(p => p.alpha > 0.02);

      // Animate and draw glitter particles traveling along strands
      glitterParticlesRef.current.forEach((particle, idx) => {
        // Update progress with variable speed
        particle.progress += particle.speed;

        // Switch to returning when reached target
        if (particle.progress >= 1 && !particle.returning) {
          particle.returning = true;
          particle.progress = 0;
        }

        // Remove when completed full cycle
        if (particle.returning && particle.progress >= 1) {
          glitterParticlesRef.current.splice(idx, 1);
          return;
        }

        // Calculate current position along the strand
        const t = particle.progress;
        const startX = particle.returning ? particle.targetX : title.x;
        const startY = particle.returning ? particle.targetY : title.y;
        const endX = particle.returning ? title.x : particle.targetX;
        const endY = particle.returning ? title.y : particle.targetY;

        // Quadratic curve for natural path
        const midX = (startX + endX) / 2 + Math.sin(timeRef.current + idx) * 20;
        const midY = (startY + endY) / 2 + Math.cos(timeRef.current + idx) * 20;

        const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
        const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY;

        // Draw glitter particle
        ctx.beginPath();
        ctx.arc(x, y - window.scrollY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Add trailing sparkle
        ctx.beginPath();
        ctx.arc(x, y - window.scrollY, particle.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', ', 0.3)').replace('rgb', 'rgba');
        ctx.fill();
      });

      // Draw pulsing halo around title - further toned down on home and center brightness lower
      const isHome = sourceId === 'landing-title';
      const titlePulse = 0.7 + 0.3 * Math.sin(timeRef.current * 2);
      const titleGradient = ctx.createRadialGradient(
        title.x, title.y - window.scrollY, 0,
        title.x, title.y - window.scrollY, (isHome ? 200 : 240) * titlePulse
      );
      titleGradient.addColorStop(0, 'rgba(124, 58, 237, 0.45)');
      titleGradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.28)');
      titleGradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
      ctx.fillStyle = titleGradient;
      ctx.fillRect(
        title.x - 260, title.y - window.scrollY - 260,
        520, 520
      );

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('click', handleClick);
    };
  }, [elements, mousePos, sourceId]);

  // Don't render main network in lightweight mode
  if (lightweightMode) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="mycelial-canvas"
      style={{
        position: 'fixed',
        top: 'var(--nav-height, 0px)', // Align directly with navbar bottom - no gap
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.9
      }}
    />
  );
}

