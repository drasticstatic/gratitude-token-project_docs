import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * ScrollIndicator - Reusable scroll indicator for scrollable containers
 * Shows "Click to jump to bottom" at top, rotates 180° at bottom to "Click to return to top"
 */
export default function ScrollIndicator({ 
  containerRef, 
  color = '#fbbf24',
  shadowColor = 'rgba(251, 191, 36, 0.4)'
}) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsAtBottom(atBottom);
    };

    // Initial check
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {!isAtBottom && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '-80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            pointerEvents: 'auto',
            gap: '8px'
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: color,
              fontSize: '0.75rem',
              fontWeight: 600,
              textAlign: 'center',
              margin: 0,
              textShadow: `0 2px 8px ${shadowColor}`,
              maxWidth: '120px',
              lineHeight: '1.3'
            }}
          >
            Scroll or click button to jump to bottom
          </motion.p>
          <motion.div
            onClick={scrollToBottom}
            animate={{ y: [0, 10, 0] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: `${color}40`,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 12px ${shadowColor}`,
              cursor: 'pointer',
              border: `2px solid ${color}`
            }}
          >
            <ChevronDown size={24} style={{ color: color }} />
          </motion.div>
        </motion.div>
      )}
      {isAtBottom && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '-80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            pointerEvents: 'auto',
            gap: '8px'
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: color,
              fontSize: '0.75rem',
              fontWeight: 600,
              textAlign: 'center',
              margin: 0,
              textShadow: `0 2px 8px ${shadowColor}`
            }}
          >
            Click to return to top
          </motion.p>
          <motion.div
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: `${color}40`,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 12px ${shadowColor}`,
              cursor: 'pointer',
              border: `2px solid ${color}`
            }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} style={{ color: color }} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

