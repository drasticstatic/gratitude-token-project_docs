import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { Shield, Vote, Users, TrendingUp } from 'lucide-react';

/**
 * GovernanceModal - Modal for DAO Governance feature
 */
export default function GovernanceModal({ isOpen, onClose }) {
  // Shield SVG Icon for title - Blue theme
  const ShieldIcon = () => (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 L4 6 L4 12 C4 17 8 21 12 22 C16 21 20 17 20 12 L20 6 Z" fill="#3b82f6" opacity="0.8" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M9 12 L11 14 L15 10" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="12" cy="12" r="8" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="8;9;8" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Governance"
      subtitle="Shape the future through DAO voting"
      titleIcon={ShieldIcon}
      titleColor="#3b82f6"
      borderColor="rgba(59, 130, 246, 0.5)"
      shadowColor="rgba(59, 130, 246, 0.3)"
      scrollbarColor="#3b82f6"
      developmentNote="Like the mycelium underground, our DAO governance is taking root, and will soon bear fruit."
      docusaurusSubtitle="Learn more about DAO Governance in our documentation"
    >
      <ModalCard
        icon={Shield}
        title="DAO Structure"
        content="Ethereal Offering is governed by token holders through a decentralized autonomous organization. All major decisions require community consensus."
        delay={0.1}
        accentColor="#3b82f6"
      />

      <ModalCard
        icon={Vote}
        title="Proposal System"
        content="Submit proposals for new features, treasury allocation, ceremonial events, or policy changes. Proposals require minimum token holdings and community support to reach voting stage."
        delay={0.2}
        accentColor="#60a5fa"
      />

      <ModalCard
        icon={Users}
        title="Voting Power"
        content="Voting weight is determined by token holdings, burn history, and community participation. Active contributors earn governance multipliers."
        delay={0.3}
        accentColor="#3b82f6"
      />

      <ModalCard
        icon={TrendingUp}
        title="Execution & Treasury"
        content="Approved proposals are executed on-chain via smart contracts. Treasury funds are allocated transparently based on community votes."
        delay={0.4}
        accentColor="#60a5fa"
      />

      {/* Governance Process */}
      <div style={{
        marginTop: '24px',
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(168, 85, 247, 0.1))',
        border: '2px solid rgba(124, 58, 237, 0.3)',
        borderRadius: '16px'
      }}>
        <h3 style={{ 
          color: '#7c3aed', 
          textAlign: 'center', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 2px 6px rgba(124, 58, 237, 0.5))'
        }}>
          🗳️ Governance Process
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {[
            { step: '1', title: 'Discussion', desc: 'Community debate in forums (3-7 days)', color: '#7c3aed' },
            { step: '2', title: 'Proposal', desc: 'Formal submission with details (min 1000 tokens)', color: '#a78bfa' },
            { step: '3', title: 'Voting', desc: 'Token holders vote (5-7 days)', color: '#ec4899' },
            { step: '4', title: 'Execution', desc: 'Approved proposals executed on-chain', color: '#fbbf24' }
          ].map((phase, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                background: `linear-gradient(135deg, ${phase.color}20, ${phase.color}10)`,
                border: `2px solid ${phase.color}60`,
                borderRadius: '12px',
                animation: `slideIn ${0.5 + idx * 0.2}s ease-out`
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#fff',
                flexShrink: 0
              }}>
                {phase.step}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: phase.color, fontWeight: 700, marginBottom: '4px' }}>{phase.title}</div>
                <div style={{ color: '#e5e7eb', fontSize: '0.85rem' }}>{phase.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </EnhancedModal>
  );
}

