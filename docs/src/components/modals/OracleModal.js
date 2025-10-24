import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';

/**
 * OracleModal - Modal displaying Oracle of Fruit agent information
 * Content from Ethereal_Offering_agents.md
 */
export default function OracleModal({ isOpen, onClose }) {
  // Oracle Eye SVG Component
  const OracleEye = ({ direction = 'left' }) => (
    <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="40" ry="25" stroke="#22c55e" strokeWidth="4" fill="none" />
      <g>
        <circle cx="50" cy="50" r="12" fill="#22c55e">
          <animate
            attributeName="cx"
            values={direction === 'left' ? "45;55;45" : "55;45;55"}
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="50" r="6" fill="#10b981">
          <animate
            attributeName="cx"
            values={direction === 'left' ? "45;55;45" : "55;45;55"}
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="🍎 Oracle of Fruit 🍎"
      subtitle="✨ Ritual Intelligence & Insight Engine ✨"
      developmentNote="Like a mushroom maturing to drop spores, the Oracle is in development phase and to be unveiled yet."
      titleIcon={<OracleEye />}
      titleColor="#22c55e"
      borderColor="rgba(34, 197, 94, 0.5)"
      shadowColor="rgba(34, 197, 94, 0.4)"
      scrollbarColor="#22c55e"
    >
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Role Section */}
        <ModalCard
          title="🌟 Role"
          content="The Oracle of Fruit serves as your ritual intelligence and insight engine, weaving together on-chain events, ceremonial context, and community patterns to guide members through their spiritual journey."
          delay={0.1}
          accentColor="#22c55e"
        />

        {/* Functionality Section */}
        <ModalCard
          delay={0.2}
          accentColor="#34d399"
        >
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#34d399',
              marginBottom: '16px',
              filter: 'drop-shadow(0 2px 4px rgba(52, 211, 153, 0.4))'
            }}>
              ✨ Functionality
            </h3>
            <ul style={{ color: '#e5e7eb', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
              <li>Processes offering entries from Notion or memory logs</li>
              <li>Provides guidance on symbolic, spiritual, and gamified elements of offerings</li>
              <li>Suggests NFT issuances, ritual events, or treasury allocations based on historic and current activity</li>
              <li>Interfaces with the Gratitude Token system to suggest meaningful "rewards" or acknowledgements</li>
              <li>Generates visual or textual meditative content tied to mushroom/NFT metaphors</li>
            </ul>
          </div>
        </ModalCard>

        {/* Key Capabilities */}
        <ModalCard
          delay={0.3}
          accentColor="#10b981"
        >
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#10b981',
              marginBottom: '16px',
              filter: 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.4))'
            }}>
              🔮 Key Capabilities
            </h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {[
                { icon: '🌿', text: 'Ceremonial guidance and integration prompts' },
                { icon: '💎', text: 'Token/NFT explainer and tracking' },
                { icon: '📜', text: 'Governance drafting and proposal templates' },
                { icon: '💰', text: 'Treasury transparency summaries' },
                { icon: '🌱', text: 'Onboarding help and ritual reminders' },
                { icon: '📖', text: 'Gratitude journaling cues' },
                { icon: '🤝', text: 'Links to community support and harm reduction' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px',
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <span style={{ color: '#e5e7eb' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ModalCard>

        {/* Privacy Notice */}
        <ModalCard
          title="🔒 Privacy & Consent"
          content="Conversations are opt-in and respect community boundaries. The Oracle is a ritual assistant, not a therapist or financial advisor."
          delay={0.4}
          accentColor="#a78bfa"
        />
      </div>
    </EnhancedModal>
  );
}

