import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ExternalLink } from 'lucide-react';
import ReactDOM from 'react-dom';


/**
 * EnhancedModal - Base modal component with all requested effects:
 * - Darker background behind cards
 * - Breathing effect on modal and cards
 * - Colored scrollbar matching drop shadow
 * - Sticky header with title
 * - Animated scroll indicator (hides at bottom)
 * - Docusaurus link at bottom with subtitle
 * - Cards move on hover
 * - Transparent backdrop (mushrooms and glitter shine through)
 * - Cursor effects work through modal
 */
export default function EnhancedModal({
  isOpen,
  onClose,
  title,
  subtitle,
  developmentNote,
  titleIcon,
  titleIcon2,
  titleColor = '#22c55e',
  borderColor = 'rgba(34, 197, 94, 0.5)',
  shadowColor = 'rgba(34, 197, 94, 0.4)',
  scrollbarColor = '#22c55e',
  children
}) {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const contentRef = useRef(null);

  // Check scroll position
  const handleScroll = (e) => {
    const element = e.target;
    const isBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
    setIsAtBottom(isBottom);
  };

  // Auto scroll to bottom
  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: contentRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  // Auto scroll to top
  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reset scroll position when modal opens
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
      setIsAtBottom(false);
    }
  }, [isOpen]);

  // Notify global listeners about modal visibility changes (for banners, etc.)
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('modalVisibilityChange', { detail: { isOpen } }));
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay BEHIND mushrooms - lower z-index */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.55)',
              zIndex: 9999, // Below modal content but above page content
              pointerEvents: 'none'
            }}
          />

          {/* Clickable backdrop layer - transparent, above mushrooms */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'transparent',
              zIndex: 10001, // Above mushrooms
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflowY: 'auto',
              cursor: 'pointer',
              pointerEvents: 'auto'
            }}
          >
            {/* Modal Content - Breathing animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0
              }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(26, 11, 46, 0.98), rgba(17, 24, 39, 0.98))', // Darker background
                border: `2px solid ${borderColor}`,
                borderRadius: '20px',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                boxShadow: `0 20px 60px ${shadowColor}, 0 0 100px ${shadowColor}`,
                position: 'relative',
                zIndex: 10002, // Above mushrooms and backdrop
                display: 'flex',
                flexDirection: 'column',
                animation: 'breathe 4s ease-in-out infinite', // Breathing effect
                pointerEvents: 'auto' // Modal itself captures clicks
              }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: `${borderColor.replace('0.5', '0.2')}`,
                  border: `2px solid ${borderColor}`,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={20} style={{ color: titleColor }} />
              </motion.button>

              {/* Sticky Header */}
              <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 9,
                background: 'linear-gradient(135deg, rgba(26, 11, 46, 0.98), rgba(17, 24, 39, 0.98))',
                padding: '40px 30px 20px',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                borderBottom: `1px solid ${borderColor}`
              }}>
                {/* Title with Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  marginBottom: subtitle ? '10px' : '0'
                }}>
                  {(titleIcon2 || titleIcon) && (
                    <div style={{ filter: `drop-shadow(0 2px 8px ${shadowColor})` }}>
                      {titleIcon2 && (React.isValidElement(titleIcon2) ? titleIcon2 : React.createElement(titleIcon2))}
                      {titleIcon2 && titleIcon && <span>&nbsp;&nbsp;&nbsp;</span>}
                      {titleIcon && (React.isValidElement(titleIcon) ? titleIcon : React.createElement(titleIcon))}
                    </div>
                  )}
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${titleColor}, ${titleColor}dd)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    margin: 0,
                    textAlign: 'center',
                    filter: `drop-shadow(0 2px 8px ${shadowColor})`
                  }}>
                    {title}
                  </h2>
                  {(titleIcon || titleIcon2) && (
                    <div style={{ filter: `drop-shadow(0 2px 8px ${shadowColor})` }}>
                      {titleIcon && (React.isValidElement(titleIcon) ? titleIcon : React.createElement(titleIcon))}
                      {titleIcon && titleIcon2 && <span>&nbsp;&nbsp;&nbsp;</span>}
                      {titleIcon2 && (React.isValidElement(titleIcon2) ? titleIcon2 : React.createElement(titleIcon2))}
                    </div>
                  )}
                </div>

                {/* Subtitle */}
                {subtitle && (
                  <p style={{
                    fontSize: '1.1rem',
                    color: `${titleColor}dd`,
                    textAlign: 'center',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    {subtitle}
                  </p>
                )}

                {/* Development Note */}
                {developmentNote && (
                  <div style={{
                    marginTop: '20px',
                    padding: '12px 16px',
                    background: 'rgba(251, 191, 36, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: '0.95rem',
                      color: '#fbbf24',
                      lineHeight: '1.5'
                    }}>
                      ⚠️ {developmentNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Scrollable Content with Custom Scrollbar */}
              <div
                ref={contentRef}
                onScroll={handleScroll}
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '30px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: `${scrollbarColor} rgba(0, 0, 0, 0.3)`
                }}
                className="enhanced-modal-content"
              >
                {children}
              </div>

              {/* Scroll Indicator - Always visible, clickable */}
              <AnimatePresence>
                {!isAtBottom && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'sticky',
                      bottom: '20px',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0 30px',
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
                        color: titleColor,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        margin: 0
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
                        background: `${borderColor.replace('0.5', '0.8')}`,
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${shadowColor}`,
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronDown size={24} style={{ color: titleColor }} />
                    </motion.div>
                  </motion.div>
                )}
                {isAtBottom && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'sticky',
                      bottom: '20px',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0 30px',
                      zIndex: 10,
                      pointerEvents: 'auto',
                      gap: '8px'
                    }}
                  >
                    <motion.div
                      onClick={scrollToTop}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ rotate: { duration: 0.5, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: `${borderColor.replace('0.5', '0.8')}`,
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${shadowColor}`,
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronDown size={24} style={{ color: titleColor }} />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        color: titleColor,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        margin: 0
                      }}
                    >
                      Click to return to top
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer with Docusaurus Link */}
              <div style={{
                position: 'sticky',
                bottom: 0,
                zIndex: 9,
                background: 'linear-gradient(135deg, rgba(26, 11, 46, 0.98), rgba(17, 24, 39, 0.98))',
                padding: '20px 30px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
                borderTop: `1px solid ${borderColor}`
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://drasticstatic.github.io/gratitude-token-project_docs/', '_blank')}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: `linear-gradient(135deg, ${borderColor.replace('0.5', '0.3')}, ${borderColor.replace('0.5', '0.2')})`,
                    border: `2px solid ${borderColor}`,
                    borderRadius: '12px',
                    color: titleColor,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: `0 4px 12px ${shadowColor}`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>Hop to respecitive whitepaper section of the Etheral Offering Docusaurus site</span>
                  <ExternalLink size={20} />
                </motion.button>
                <p style={{
                  margin: '12px 0 0 0',
                  fontSize: '0.85rem',
                  color: '#9ca3af',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  to explore the full vision and technical details
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Custom Scrollbar Styles */}
          <style>{`
            .enhanced-modal-content::-webkit-scrollbar {
              width: 12px;
            }
            .enhanced-modal-content::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.3);
              border-radius: 10px;
            }
            .enhanced-modal-content::-webkit-scrollbar-thumb {
              background: ${scrollbarColor};
              border-radius: 10px;
              box-shadow: 0 0 10px ${shadowColor};
            }
            .enhanced-modal-content::-webkit-scrollbar-thumb:hover {
              background: ${titleColor};
            }
            @keyframes breathe {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.01); }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  , document.body);
}

