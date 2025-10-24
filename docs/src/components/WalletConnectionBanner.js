import React, { useEffect, useState } from "react";
import { Wallet } from "lucide-react";
import { useAccount } from "wagmi";

export default function WalletConnectionBanner({ message }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { isConnected, status } = useAccount();
  const [bannerTop, setBannerTop] = useState('calc(var(--nav-height, 80px) + 8px)');
  const [hasMeasuredTop, setHasMeasuredTop] = useState(false);
  const [enableTransition, setEnableTransition] = useState(false);

  // Track modal open/close to hide banner while modals are visible
  useEffect(() => {
    const handler = (e) => setModalOpen(!!e.detail?.isOpen);
    window.addEventListener('modalVisibilityChange', handler);
    return () => window.removeEventListener('modalVisibilityChange', handler);
  }, []);

  // Compute a stable top offset to avoid initial flicker/jump (esp. Safari)
  useEffect(() => {
    const updateTop = () => {
      try {
        const nav = document.querySelector('nav, #navbar, .navbar');
        if (nav) {
          const rect = nav.getBoundingClientRect();
          setBannerTop(`${Math.round(rect.height) + 8}px`);
        } else {
          const rootVar = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
          if (rootVar && rootVar.trim()) {
            setBannerTop(`calc(${rootVar.trim()} + 8px)`);
          }
        }
      } catch {
        setBannerTop('calc(var(--nav-height, 80px) + 8px)');
      }
    };

    updateTop();
    setHasMeasuredTop(true);
    requestAnimationFrame(() => setEnableTransition(true));

    let ro;
    const nav = document.querySelector('nav, #navbar, .navbar');
    if (typeof ResizeObserver !== 'undefined' && nav) {
      ro = new ResizeObserver(updateTop);
      ro.observe(nav);
    }
    window.addEventListener('resize', updateTop);

    return () => {
      window.removeEventListener('resize', updateTop);
      if (ro && nav) ro.unobserve(nav);
    };
  }, []);

  // Hide while any modal is open, or while wagmi is connecting/reconnecting (prevents brief flash), or when connected
  if (modalOpen) return null;
  if (status === 'connecting' || status === 'reconnecting') return null;
  if (isConnected) return null;

  return (
    <div style={{
      position: 'fixed',
      top: bannerTop,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10004,
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '0 20px',
      transition: enableTransition ? 'top 0.1s ease-out' : 'none',
      visibility: hasMeasuredTop ? 'visible' : 'hidden'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(220,38,38,0.75), rgba(239,68,68,0.75))',
        border: '2px solid rgba(239,68,68,0.6)',
        borderRadius: '12px',
        padding: '12px 24px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 32px rgba(220,38,38,0.4), 0 0 20px rgba(239,68,68,0.3)',
        width: 'fit-content'
      }}>
        <Wallet size={20} color="#fbbf24" />
        <span style={{
          color: '#ffffff',
          fontSize: '0.95rem',
          fontWeight: 600,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          {message}
        </span>
      </div>
    </div>
  );
}
