import React from 'react';
import { motion } from 'framer-motion';
import { X, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * DAOAccessModal - Modal shown when whitelisted user enters DAO
 * Blue theme matching governance
 */
export default function DAOAccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dark overlay backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          zIndex: 9999,
          backdropFilter: 'blur(4px)'
        }}
      />

      {/* Transparent clickable layer */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10001,
          cursor: 'pointer'
        }}
      />

      {/* Modal content */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10002,
          pointerEvents: 'none'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            width: '90vw',
            maxWidth: '500px',
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95))',
            border: '2px solid rgba(34, 197, 94, 0.5)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(34, 197, 94, 0.3)',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.4)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(34, 197, 94, 0.3)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(34, 197, 94, 0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={20} style={{ color: '#22c55e' }} />
        </button>

        {/* Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'inline-block' }}
          >
            <ShieldCheck size={64} style={{ color: '#22c55e' }} />
          </motion.div>
        </div>

        {/* Title */}
        <h2 style={{
          color: '#22c55e',
          fontSize: '1.75rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px',
          textShadow: '0 2px 12px rgba(34, 197, 94, 0.4)'
        }}>
          🏛️ DAO Access Granted!
        </h2>

        {/* Content - Each sentence on its own line */}
        <div style={{
          color: '#d1d5db',
          fontSize: '1rem',
          lineHeight: '1.8',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <p style={{ margin: '0 0 12px 0' }}>
            DAO governance coming soon!
          </p>
          <p style={{ margin: '0 0 12px 0' }}>
            Prepare your proposals.
          </p>
          <p style={{ margin: '0', color: '#4ade80', fontStyle: 'italic' }}>
            The mycelial council awaits your wisdom...
          </p>
        </div>

        {/* Sparkles decoration */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={24} style={{ color: '#22c55e' }} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={24} style={{ color: '#4ade80' }} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={24} style={{ color: '#22c55e' }} />
          </motion.div>
        </div>

        {/* Close button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '32px',
            width: '100%',
            padding: '14px 24px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3))',
            border: '2px solid rgba(34, 197, 94, 0.5)',
            borderRadius: '12px',
            color: '#22c55e',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)'
          }}
        >
          Got it! 🏛️
        </motion.button>
        </motion.div>
      </div>
    </>
  );
}

