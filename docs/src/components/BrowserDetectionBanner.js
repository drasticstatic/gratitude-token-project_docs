import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

/**
 * BrowserDetectionBanner - Shows warnings for Safari and mobile devices
 * - Safari: Triggers on wallet connect (not initial load)
 * - Mobile: Auto-dismisses after 10 seconds, shows on each refresh
 * - Dismissible with localStorage persistence
 */
export default function BrowserDetectionBanner() {
  const [showSafariBanner, setShowSafariBanner] = useState(false);
  const [showMobileBanner, setShowMobileBanner] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || window.innerWidth <= 768;

    // Show mobile banner on each refresh (not stored in localStorage)
    if (isMobile) {
      setShowMobileBanner(true);

      // Auto-dismiss after 10 seconds
      const timer = setTimeout(() => {
        setShowMobileBanner(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for wallet connection events to show Safari banner
    const handleWalletConnect = () => {
      const safariBannerDismissed = localStorage.getItem('safariBannerDismissed') === 'true';
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      if (isSafari && !safariBannerDismissed) {
        setShowSafariBanner(true);
      }
    };

    // Listen for RainbowKit wallet connection
    window.addEventListener('walletConnected', handleWalletConnect);

    return () => {
      window.removeEventListener('walletConnected', handleWalletConnect);
    };
  }, []);

  const dismissSafariBanner = () => {
    localStorage.setItem('safariBannerDismissed', 'true');
    setShowSafariBanner(false);
  };

  const dismissMobileBanner = () => {
    setShowMobileBanner(false);
  };

  return (
    <>
      {/* Safari Browser Warning Banner */}
      <AnimatePresence>
        {showSafariBanner && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height, 80px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10000,
              width: '90%',
              maxWidth: '600px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.95), rgba(236, 72, 153, 0.95))',
              backdropFilter: 'blur(12px)',
              border: '2px solid rgba(251, 191, 36, 0.8)',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4), 0 0 60px rgba(236, 72, 153, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            {/* Warning Icon */}
            <AlertTriangle 
              size={28} 
              style={{ 
                color: '#7c3aed',
                flexShrink: 0,
                filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.6))'
              }} 
            />

            {/* Message */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <p style={{
                margin: 0,
                fontSize: '15px',
                fontWeight: 600,
                color: '#1a0b2e',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
                lineHeight: '1.4'
              }}>
                Using Safari? Switch to <strong>Chrome</strong>, <strong>Brave</strong>,<br />
                or another <strong>web3-ready browser</strong> for full functionality.
              </p>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={dismissSafariBanner}
              style={{
                background: 'rgba(124, 58, 237, 0.3)',
                border: '2px solid rgba(124, 58, 237, 0.6)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <X size={20} style={{ color: '#fbbf24' }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Device Warning Banner */}
      <AnimatePresence>
        {showMobileBanner && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
            style={{
              position: 'fixed',
              top: showSafariBanner ? 'calc(var(--nav-height, 80px) + 90px)' : 'var(--nav-height, 80px)',
              left: '20px',
              right: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
              zIndex: 10000,
              width: 'auto',
              maxWidth: '560px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.95), rgba(168, 85, 247, 0.95))',
              backdropFilter: 'blur(12px)',
              border: '2px solid rgba(168, 85, 247, 0.8)',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              transition: 'top 0.3s ease'
            }}
          >
            {/* Warning Icon */}
            <AlertTriangle 
              size={28} 
              style={{ 
                color: '#fbbf24',
                flexShrink: 0,
                filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))'
              }} 
            />

            {/* Message */}
            <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
              <p style={{
                margin: 0,
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                lineHeight: '1.4',
                wordWrap: 'break-word'
              }}>
                For fuller immersive experience,<br />
                switch to <strong>desktop</strong>
              </p>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={dismissMobileBanner}
              style={{
                background: 'rgba(251, 191, 36, 0.3)',
                border: '2px solid rgba(251, 191, 36, 0.6)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(251, 191, 36, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(251, 191, 36, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <X size={20} style={{ color: '#7c3aed' }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

