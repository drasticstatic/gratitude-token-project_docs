import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { Settings, Database, Shield, Activity } from 'lucide-react';

/**
 * AdminPanelModal - Modal for Admin Panel (owner-only)
 */
export default function AdminPanelModal({ isOpen, onClose }) {
  // Gear Emoji SVG
  const GearEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#22d3ee" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="bold">⚙️</text>
      <circle cx="12" cy="12" r="11" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  // Settings/Gear SVG Icon for title
  const SettingsIcon = () => (
    <svg width="51" height="51" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" fill="#22d3ee" opacity="0.8">
        <animate attributeName="r" values="3;3.5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <g stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" transform-origin="12 12">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="8s" repeatCount="indefinite" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </g>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Admin Panel"
      subtitle="Contract management & system controls"
      titleIcon={SettingsIcon}
      titleIcon2={GearEmojiIcon}
      titleColor="#22d3ee"
      borderColor="rgba(34, 211, 238, 0.5)"
      shadowColor="rgba(34, 211, 238, 0.3)"
      scrollbarColor="#22d3ee"
      developmentNote="Like heroic doeses of psilocybin, this page is reserved for those who have journeyed deep enough to understand the responsibility it entails."
      docusaurusSubtitle="Learn more about Admin Panel capabilities in our documentation"
    >
      <ModalCard
        icon={Settings}
        title="Contract Controls"
        content="Manage smart contract parameters: pause/unpause functions, update fee structures, adjust breeding cooldowns, and configure reward multipliers."
        delay={0.1}
        accentColor="#22d3ee"
      />

      <ModalCard
        icon={Database}
        title="Treasury Management"
        content="Monitor treasury balances, approve fund allocations, execute approved governance proposals, and generate financial transparency reports."
        delay={0.2}
        accentColor="#3b82f6"
      />

      <ModalCard
        icon={Shield}
        title="Security & Access"
        content="Manage admin roles, whitelist addresses, configure multi-sig requirements, and monitor suspicious activity. All actions are logged on-chain."
        delay={0.3}
        accentColor="#a78bfa"
      />

      <ModalCard
        icon={Activity}
        title="Analytics & Monitoring"
        content="Real-time dashboards for token metrics, burn statistics, NFT minting activity, governance participation, and user engagement trends."
        delay={0.4}
        accentColor="#fbbf24"
      />

      {/* Admin Actions */}
      <div style={{
        marginTop: '24px',
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))',
        border: '2px solid rgba(34, 211, 238, 0.3)',
        borderRadius: '16px'
      }}>
        <h3 style={{ 
          color: '#22d3ee', 
          textAlign: 'center', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 2px 6px rgba(34, 211, 238, 0.5))'
        }}>
          🔐 Admin Capabilities
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {[
            { icon: '⏸️', title: 'Pause/Resume', desc: 'Emergency contract controls', color: '#22d3ee' },
            { icon: '💰', title: 'Treasury', desc: 'Fund allocation & transfers', color: '#3b82f6' },
            { icon: '🎨', title: 'NFT Minting', desc: 'Special edition releases', color: '#a78bfa' },
            { icon: '📊', title: 'Analytics', desc: 'System health monitoring', color: '#fbbf24' },
            { icon: '🔧', title: 'Parameters', desc: 'Fee & reward adjustments', color: '#ec4899' },
            { icon: '👥', title: 'Roles', desc: 'Access control management', color: '#22c55e' }
          ].map((action, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                background: `linear-gradient(135deg, ${action.color}20, ${action.color}10)`,
                border: `2px solid ${action.color}60`,
                borderRadius: '12px',
                textAlign: 'center',
                animation: `fadeIn ${0.3 + idx * 0.1}s ease-out`
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{action.icon}</div>
              <div style={{ color: action.color, fontWeight: 700, marginBottom: '4px', fontSize: '0.9rem' }}>{action.title}</div>
              <div style={{ color: '#e5e7eb', fontSize: '0.75rem' }}>{action.desc}</div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '20px',
          padding: '12px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#ef4444', margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>
            ⚠️ Admin actions are logged on-chain and subject to community oversight
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </EnhancedModal>
  );
}

