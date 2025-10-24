import React from 'react';
import { motion } from 'framer-motion';

/**
 * ModalCard - Reusable card component for modals with hover effects and breathing animation
 */
export default function ModalCard({
  icon: Icon,
  title,
  content,
  delay = 0,
  accentColor = '#a78bfa',
  shadowColor,  // Optional custom shadow color for hover
  gradient,  // Optional gradient background
  titleAlign = 'left',
  contentAlign = 'left',
  children
}) {
  // Use shadowColor if provided, otherwise derive from accentColor
  const hoverShadowColor = shadowColor || `${accentColor}50`;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        opacity: { delay },
        x: { delay }
      }}
      whileHover={{
        y: -4,
        scale: 1.01,
        boxShadow: `0 12px 32px ${hoverShadowColor}`,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      style={{
        background: gradient || 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '20px', // Vertical spacing between cards
        border: '1px solid rgba(168, 85, 247, 0.3)',
        backdropFilter: 'blur(10px)',
        cursor: 'default'
      }}
    >
      {/* Always show icon and title if provided, then show children or content */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {Icon && (
          <div style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
            borderRadius: '12px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {Icon ? (React.isValidElement(Icon) ? Icon : React.createElement(Icon, { size: 24, color: '#fff' })) : null}
          </div>
        )}
        <div style={{ flex: 1, textAlign: contentAlign }}>
          {title && (
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: accentColor,
              marginBottom: '12px',
              textAlign: titleAlign,
              filter: `drop-shadow(0 2px 4px ${accentColor}40)`
            }}>
              {title}
            </h3>
          )}
          {children || (content && (
            <p style={{
              color: '#e5e7eb',
              fontSize: '1rem',
              lineHeight: '1.7',
              whiteSpace: 'pre-line',
              margin: 0
            }}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

