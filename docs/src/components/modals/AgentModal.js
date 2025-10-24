import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';

/**
 * AgentModal - Reusable modal for displaying agent information
 * Used for all 15 Oracle Agent Helpers
 */
export default function AgentModal({ isOpen, onClose, agent }) {
  if (!agent) return null;

  const details = agent.details || {};

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title={`${agent.icon} ${agent.name}`}
      subtitle={agent.title}
      developmentNote="Like a mushroom maturing to drop spores, this agent is in development phase and to be unveiled yet."
      titleColor={agent.color}
      borderColor={`${agent.color}80`}
      shadowColor={`${agent.color}66`}
      scrollbarColor={agent.color}
    >
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Subtitle Section */}
        <ModalCard
          title="🎯 Role"
          content={agent.subtitle}
          delay={0.1}
          accentColor={agent.color}
        />

        {/* Description Section */}
        <ModalCard
          title="📖 Description"
          content={agent.description}
          delay={0.2}
          accentColor={agent.color}
        />

        {/* Optional: Capabilities from processed exports */}
        {Array.isArray(details.capabilities) && details.capabilities.length > 0 && (
          <ModalCard title="🧠 Capabilities" delay={0.25} accentColor={agent.color}>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#e5e7eb', lineHeight: 1.5 }}>
              {details.capabilities.slice(0, 8).map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </ModalCard>
        )}

        {/* Type & Archetype Section */}
        <ModalCard
          title="🔧 Technical Details"
          delay={0.3}
          accentColor={agent.color}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              padding: '10px',
              background: `${agent.color}15`,
              borderRadius: '8px',
              border: `1px solid ${agent.color}40`
            }}>
              <div style={{ color: agent.color, fontWeight: 600, marginBottom: 4 }}>
                Agent Type
              </div>
              <div style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>
                {agent.type}
              </div>
            </div>
            <div style={{
              padding: '10px',
              background: `${agent.color}15`,
              borderRadius: '8px',
              border: `1px solid ${agent.color}40`
            }}>
              <div style={{ color: agent.color, fontWeight: 600, marginBottom: 4 }}>
                Archetype
              </div>
              <div style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>
                {agent.archetype}
              </div>
            </div>
          </div>
        </ModalCard>

        {/* Optional: Decisions/Questions/Roadmap snippets */}
        {Array.isArray(details.keyDecisions) && details.keyDecisions.length > 0 && (
          <ModalCard title="🧭 Key Decisions" delay={0.35} accentColor={agent.color}>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#e5e7eb', lineHeight: 1.5 }}>
              {details.keyDecisions.slice(0, 6).map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </ModalCard>
        )}

        {Array.isArray(details.roadmap) && details.roadmap.length > 0 && (
          <ModalCard title="🗺️ Roadmap" delay={0.38} accentColor={agent.color}>
            <ol style={{ margin: 0, paddingLeft: '18px', color: '#e5e7eb', lineHeight: 1.5 }}>
              {details.roadmap.slice(0, 6).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </ModalCard>
        )}

        {/* Status Notice */}
        <ModalCard
          title="🌱 Development Status"
          content="This agent is part of the Mycelial Intelligence Layer - a network of AI beings that will orchestrate the Ethereal Offering ecosystem. Currently in the conceptual and design phase."
          delay={0.4}
          accentColor="#a78bfa"
        />
      </div>
    </EnhancedModal>
  );
}

