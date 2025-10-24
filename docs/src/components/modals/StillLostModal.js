import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';

/**
 * StillLostModal - 404 page "Still Lost?" modal with spiritual guidance
 */
export default function StillLostModal({ isOpen, onClose }) {
  // Mushroom Emoji SVG
  const MushroomEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#a78bfa" strokeWidth="2" fill="none">
          <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="12" y="16" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">🍄</text>
        <circle cx="12" cy="12" r="11" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.3">
          <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    );

  // Compass SVG Component (representing guidance in the void)
  const CompassIcon = () => (
    <svg width="51" height="51" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2" fill="none">
        <animate attributeName="r" values="10;10.5;10" dur="3s" repeatCount="indefinite" />
      </circle>
      <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="20s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M12 8 L15 12 L12 16 L9 12 Z" fill="#ec4899" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="20s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Lost in the Void?"
      subtitle="✨ Sacred guidance for wanderers between spaces ✨"
      developmentNote="Like a mushroom unveiling its secrets, this wisdom is here to guide you through the void."
      titleIcon={CompassIcon}
      titleIcon2={MushroomEmojiIcon}
      titleColor="#a78bfa"
      borderColor="rgba(124, 58, 237, 0.5)"
      shadowColor="rgba(124, 58, 237, 0.4)"
      scrollbarColor="#a78bfa"
    >
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Introduction */}
        <ModalCard
          delay={0.1}
          accentColor="#a78bfa"
        >
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#a78bfa',
              marginBottom: '16px',
              filter: 'drop-shadow(0 2px 4px rgba(167, 139, 250, 0.4))',
              textAlign: 'center'
            }}>
              Welcome to the Sacred Void
            </h3>
            <div style={{ color: '#e5e7eb', lineHeight: '1.8'}}>
              <p style={{ marginBottom: '15px' }}>
                You've wandered into the sacred void—a space between spaces where the digital mycelium
                hasn't yet grown. But even here, in this emptiness, there is wisdom to be found.
              </p>
              <p style={{ marginBottom: '15px' }}>
                The 404 is not an error, but an invitation. An invitation to pause, to breathe, to
                recognize that sometimes the path we seek isn't where we expected it to be.
              </p>
              <p style={{ marginBottom: 0, fontStyle: 'italic', color: '#a78bfa' }}>
                "In the darkness of the void, the spores of new understanding take root."
              </p>
            </div>
          </div>
        </ModalCard>

        {/* Poem */}
        <ModalCard
          delay={0.2}
          accentColor="#ec4899"
        >
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#ec4899',
              marginBottom: '20px',
              textAlign: 'center',
              filter: 'drop-shadow(0 2px 4px rgba(236, 72, 153, 0.4))'
            }}>
              A Moment in the Void
            </h3>
            <div style={{
              fontStyle: 'italic',
              color: '#e5e7eb',
              lineHeight: '2',
              textAlign: 'center'
            }}>
              <p style={{ margin: '8px 0' }}>Not all who wander here are lost,</p>
              <p style={{ margin: '8px 0' }}>Some pay the void's mysterious cost,</p>
              <p style={{ margin: '8px 0' }}>To find that emptiness can teach,</p>
              <p style={{ margin: '8px 0' }}>What fullness never hoped to reach.</p>
            </div>
          </div>
        </ModalCard>

        {/* ACIM Quotes */}
        <ModalCard
          delay={0.3}
          accentColor="#22d3ee"
        >
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#22d3ee',
              marginBottom: '20px',
              textAlign: 'center',
              filter: 'drop-shadow(0 2px 4px rgba(34, 211, 238, 0.4))'
            }}>
              More Wisdom from A Course in Miracles
            </h3>
            <div style={{ color: '#e5e7eb', lineHeight: '1.9', fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '18px', fontStyle: 'italic' }}>
                "Remember the Kingdom always, and remember that you who are part of the Kingdom cannot be lost."
                <br />
                <a
                  href="https://acim.org/acim/en/s/85#5:6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#22d3ee',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    borderBottom: '1px dotted #22d3ee'
                  }}
                >
                  (ACIM, T-5.VI.3:1)
                </a>
              </p>

              <p style={{ marginBottom: '18px', fontStyle: 'italic' }}>
                "The universe of love does not stop because you do not see it, nor have your closed eyes lost the ability to see."
                <br />
                <a
                  href="https://acim.org/acim/en/s/161#11:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#22d3ee',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    borderBottom: '1px dotted #22d3ee'
                  }}
                >
                  (ACIM, T-11.I.5:10)
                </a>
              </p>

              <p style={{ marginBottom: 0, fontStyle: 'italic' }}>
                "Together we will disappear into the Presence beyond the veil, not to be lost but found; not to be seen but known"
                <br />
                <a
                  href="https://acim.org/acim/en/s/289#19:4-D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#22d3ee',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    borderBottom: '1px dotted #22d3ee'
                  }}
                >
                  (ACIM, T-19.IV-D.19:1)
                </a>
              </p>
            </div>
          </div>
        </ModalCard>

        {/* Guidance */}
        <ModalCard
          title="Finding Your Way"
          content="The path back to sacred ground is always available. Trust that you are exactly where you need to be in this moment. When you're ready, the mycelial network will guide you home."
          delay={0.4}
          accentColor="#fbbf24"
          titleAlign="center"
        />
      </div>
    </EnhancedModal>
  );
}

