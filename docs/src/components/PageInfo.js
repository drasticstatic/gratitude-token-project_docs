import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * PageInfo component - displays help icon with tooltip
 * Shows page description and link to FAQ section
 */
export default function PageInfo({ description, pageTitle }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [topPosition, setTopPosition] = useState(75);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  // Dynamically calculate position based on navbar height - FASTER UPDATE
  useEffect(() => {
    const updatePosition = () => {
      const navbar = document.querySelector('.navigation');
      if (navbar) {
        const navHeight = navbar.offsetHeight;
        setTopPosition(navHeight + 10);
      }
    };

    updatePosition();
    intervalRef.current = setInterval(updatePosition, 100); // Update every 100ms instead of 500ms

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Scroll to FAQ with title at top of viewport (accounting for navbar)
  const handleFAQClick = (e) => {
    e.stopPropagation();
    navigate('/', { state: { scrollToFAQ: true } });
    setTimeout(() => {
      const faqElement = document.getElementById('faq');
      const navHeight = document.querySelector('.navigation')?.offsetHeight || 80;
      if (faqElement) {
        const elementPosition = faqElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight - 20; // 20px buffer
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    setShowTooltip(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: `${topPosition}px`,
        right: '20px',
        zIndex: 999
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <HelpCircle
        size={28}
        className="page-info-icon"
        style={{
          color: '#a78bfa',
          cursor: 'pointer',
          filter: 'drop-shadow(0 0 8px rgba(124,58,237,0.6))',
          transition: 'all 0.3s ease',
          animation: 'heartbeat 2s ease-in-out infinite'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#ec4899';
          e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(236,72,153,0.8))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#a78bfa';
          e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(124,58,237,0.6))';
        }}
      />

      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '0',
            width: '280px',
            padding: '14px',
            background: 'linear-gradient(135deg, rgba(26,26,26,0.98), rgba(58,28,113,0.95))',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(124,58,237,0.5)',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 0 20px rgba(124,58,237,0.3)',
            zIndex: 1000
          }}
        >
          <h4 style={{
            color: '#fbbf24',
            fontSize: '1rem',
            fontWeight: '700',
            margin: '0 0 8px 0'
          }}>
            {pageTitle}
          </h4>
          <p style={{
            color: '#d1d5db',
            fontSize: '0.875rem',
            lineHeight: 1.5,
            margin: '0 0 12px 0'
          }}>
            {description}
          </p>
          <button
            onClick={handleFAQClick}
            style={{
              padding: '6px 12px',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))',
              border: '1px solid rgba(124,58,237,0.5)',
              borderRadius: '6px',
              color: '#a78bfa',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%',
              marginBottom: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(236,72,153,0.5))';
              e.currentTarget.style.color = '#fbbf24';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))';
              e.currentTarget.style.color = '#a78bfa';
            }}
          >
            View FAQs →
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://drasticstatic.github.io/gratitude-token-project_docs/', '_blank');
              setShowTooltip(false);
            }}
            style={{
              padding: '6px 12px',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.3), rgba(124,58,237,0.3))',
              border: '1px solid rgba(34,211,238,0.5)',
              borderRadius: '6px',
              color: '#22d3ee',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34,211,238,0.5), rgba(124,58,237,0.5))';
              e.currentTarget.style.color = '#fbbf24';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(34,211,238,0.3), rgba(124,58,237,0.3))';
              e.currentTarget.style.color = '#22d3ee';
            }}
          >
            🌟 Deepen in Docusaurus →
          </button>
        </div>
      )}
    </div>
  );
}

