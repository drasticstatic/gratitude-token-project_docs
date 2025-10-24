import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorWebbing - Creates animated mycelial hyphae connecting cursor to page elements
 * Used on 404 page to show off cool webbing effect
 * Matches MycelialNetwork's cursor-attraction hyphae behavior
 */
export default function CursorWebbing() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [elements, setElements] = useState([]);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    // Get all interactive elements to connect to
    const updateElements = () => {
      const interactiveElements = document.querySelectorAll('button, a, h1, h2, .trippy-mushroom, svg');
      const elementPositions = Array.from(interactiveElements).slice(0, 25).map(el => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2 + window.scrollY
        };
      });
      setElements(elementPositions);
    };

    updateElements();
    window.addEventListener('resize', updateElements);

    // Track mouse position
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY + window.scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateElements);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cursor-attraction hyphae that reach toward the mouse (matches MycelialNetwork)
      const tendrilRadius = 500;
      const nearby = elements.filter(e => {
        const d = Math.hypot(e.x - mousePos.x, e.y - mousePos.y);
        return d < tendrilRadius;
      });

      nearby.forEach((e, i) => {
        const d = Math.hypot(e.x - mousePos.x, e.y - mousePos.y);
        const k = Math.max(0.3, 1 - d / tendrilRadius); // Minimum 0.3 for visibility

        // Draw curved line from element to cursor (quadratic curve with animated control point)
        ctx.beginPath();
        ctx.moveTo(e.x, e.y - window.scrollY);

        // Animated control point (wavy motion)
        const cpx = (e.x + mousePos.x) / 2 + (Math.sin(timeRef.current * 2 + i) * 30 * k);
        const cpy = (e.y + mousePos.y) / 2 - window.scrollY + (Math.cos(timeRef.current * 2 + i) * 30 * k);

        ctx.quadraticCurveTo(cpx, cpy, mousePos.x, mousePos.y - window.scrollY);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.65 * k})`;
        ctx.lineWidth = 2.2 * k + 0.6;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw node at element
        ctx.fillStyle = `rgba(236, 72, 153, ${0.8 * k})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y - window.scrollY, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow around node
        ctx.fillStyle = `rgba(168, 85, 247, ${0.4 * k})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y - window.scrollY, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby elements (spider web cross-connections)
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const el1 = elements[i];
          const el2 = elements[j];
          const distance = Math.sqrt(
            Math.pow(el1.x - el2.x, 2) + Math.pow(el1.y - el2.y, 2)
          );

          // Connect elements within 300px
          if (distance < 300) {
            const opacity = (1 - distance / 300) * 0.2;
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(el1.x, el1.y - window.scrollY);
            ctx.lineTo(el2.x, el2.y - window.scrollY);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, elements]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}

