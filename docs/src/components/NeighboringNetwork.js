import React, { useEffect, useRef, useState } from "react";

/**
 * NeighboringNetwork
 * Subtle, low-opacity canvas that connects neighboring on-page elements in reading order
 * to suggest undercurrent interconnectedness without cluttering the main network.
 *
 * Render this alongside MycelialNetwork, but with lower z-index and thinner lines.
 */
export default function NeighboringNetwork({ selectors = '.feature-card, .card, .info-box, .faq-item', isHomePage = false }) {
  const canvasRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const els = Array.from(document.querySelectorAll(selectors));
      const positions = els
        .map(el => {
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return null;
          return {
            el,
            x: r.left + r.width / 2,
            y: r.top + r.height / 2 + window.scrollY,
            top: r.top + window.scrollY,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);
      setNodes(positions);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [selectors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle background connections between neighboring items - denser on home
      const baseOpacity = isHomePage ? 0.28 : 0.18;
      const lineWidth = isHomePage ? 1.2 : 0.85;
      const dashPattern = isHomePage ? [8, 8] : [6, 10];

      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i];
        const b = nodes[i + 1];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        const opacity = Math.max(0.08, Math.min(baseOpacity, 250 / (dist + 1)));

        ctx.beginPath();
        const midx = (a.x + b.x) / 2 + Math.sin(i * 0.7) * 15;
        const midy = (a.y + b.y) / 2 - window.scrollY + Math.cos(i * 0.6) * 15;
        ctx.moveTo(a.x, a.y - window.scrollY);
        ctx.quadraticCurveTo(midx, midy, b.x, b.y - window.scrollY);
        ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
        ctx.lineWidth = lineWidth;
        ctx.setLineDash(dashPattern);
        ctx.stroke();
        ctx.setLineDash([]);

        // Add MORE branching sub-connections
        if (i < nodes.length - 2 && Math.random() > 0.5) {
          const c = nodes[i + 2];
          const dist2 = Math.hypot(c.x - a.x, c.y - a.y);
          if (dist2 < 600) {
            ctx.beginPath();
            const midx2 = (a.x + c.x) / 2 + Math.sin(i * 1.2) * 20;
            const midy2 = (a.y + c.y) / 2 - window.scrollY + Math.cos(i * 1.2) * 20;
            ctx.moveTo(a.x, a.y - window.scrollY);
            ctx.quadraticCurveTo(midx2, midy2, c.x, c.y - window.scrollY);
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.5})`;
            ctx.lineWidth = lineWidth * 0.6;
            ctx.setLineDash([4, 12]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }

        // Additional branching to i+3 nodes
        if (i < nodes.length - 3 && Math.random() > 0.65) {
          const d = nodes[i + 3];
          const dist3 = Math.hypot(d.x - a.x, d.y - a.y);
          if (dist3 < 700) {
            ctx.beginPath();
            const midx3 = (a.x + d.x) / 2 + Math.sin(i * 1.5) * 25;
            const midy3 = (a.y + d.y) / 2 - window.scrollY + Math.cos(i * 1.5) * 25;
            ctx.moveTo(a.x, a.y - window.scrollY);
            ctx.quadraticCurveTo(midx3, midy3, d.x, d.y - window.scrollY);
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.4})`;
            ctx.lineWidth = lineWidth * 0.5;
            ctx.setLineDash([3, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [nodes, isHomePage]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.5,
      }}
    />
  );
}

