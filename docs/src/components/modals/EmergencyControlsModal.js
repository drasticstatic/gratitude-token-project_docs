import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { AlertOctagon, PauseCircle, PlayCircle } from 'lucide-react';
import { Button } from '../LandingPage';

export default function EmergencyControlsModal({ 
  isOpen, 
  onClose,
  saleStatus,
  handleClose,
  handleOpen,
  handleDisableCrowdsaleWhitelist,
  loading
}) {
  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="⚠️ Emergency Controls: Circuit Breaker"
      subtitle="Pause Critical Contract Functions During Security Events"
      titleColor="#f59e0b"
      borderColor="rgba(245, 158, 11, 0.5)"
      shadowColor="rgba(245, 158, 11, 0.4)"
      scrollbarColor="#f59e0b"
    >
      <ModalCard
        icon={AlertOctagon}
        title="About Circuit Breaker"
        accentColor="#f59e0b"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
      >
        <p style={{ color: '#fbbf24', marginBottom: '12px', fontSize: '0.95rem' }}>
          ⚠️ The Circuit Breaker allows administrators to pause critical contract functions in the event of a security exploit or emergency.
        </p>
        <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6' }}>
          This is a safety mechanism to protect user funds and prevent unauthorized actions during security incidents.
          Only the contract owner can activate these controls.
        </p>
      </ModalCard>

      {saleStatus?.whitelistEnabled && (
        <ModalCard
          icon={AlertOctagon}
          title="Crowdsale Whitelist Active"
          accentColor="#f59e0b"
          gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        >
          <p style={{ color: '#d1d5db', marginBottom: '12px', fontSize: '0.9rem' }}>
            The crowdsale whitelist is currently enabled. To open the sale to everyone, disable it below.
          </p>
          <Button onClick={handleDisableCrowdsaleWhitelist} disabled={loading}>
            Disable Crowdsale Whitelist
          </Button>
        </ModalCard>
      )}

      <ModalCard
        icon={PauseCircle}
        title="Pause/Resume Controls"
        accentColor="#f59e0b"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
      >
        <div style={{ display: 'grid', gap: 12 }}>
          {/* Crowdsale Controls */}
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '8px', fontSize: '1rem' }}>Crowdsale</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button 
                onClick={handleClose} 
                disabled={loading || !saleStatus?.isOpen}
                style={{ 
                  flex: 1,
                  background: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(220,38,38,0.2))',
                  border: '2px solid rgba(239,68,68,0.5)'
                }}
              >
                <PauseCircle size={16} style={{ marginRight: 6 }}/> Pause
              </Button>
              <Button 
                onClick={handleOpen} 
                disabled={loading || saleStatus?.isOpen}
                style={{ 
                  flex: 1,
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(22,163,74,0.2))',
                  border: '2px solid rgba(34,197,94,0.5)'
                }}
              >
                <PlayCircle size={16} style={{ marginRight: 6 }}/> Resume
              </Button>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '6px', fontStyle: 'italic' }}>
              Status: {saleStatus?.isOpen ? 'Open' : 'Closed'}
            </p>
          </div>

          {/* Mushroom Farm Controls */}
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '8px', fontSize: '1rem' }}>Mushroom Farm</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button 
                onClick={() => alert('Mushroom Farm contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PauseCircle size={16} style={{ marginRight: 6 }}/> Pause
              </Button>
              <Button 
                onClick={() => alert('Mushroom Farm contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PlayCircle size={16} style={{ marginRight: 6 }}/> Resume
              </Button>
            </div>
          </div>

          {/* Breeding Lab Controls */}
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '8px', fontSize: '1rem' }}>Breeding Lab</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button 
                onClick={() => alert('Breeding Lab contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PauseCircle size={16} style={{ marginRight: 6 }}/> Pause
              </Button>
              <Button 
                onClick={() => alert('Breeding Lab contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PlayCircle size={16} style={{ marginRight: 6 }}/> Resume
              </Button>
            </div>
          </div>

          {/* DAO Controls */}
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '8px', fontSize: '1rem' }}>DAO Governance</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button 
                onClick={() => alert('DAO contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PauseCircle size={16} style={{ marginRight: 6 }}/> Pause
              </Button>
              <Button 
                onClick={() => alert('DAO contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PlayCircle size={16} style={{ marginRight: 6 }}/> Resume
              </Button>
            </div>
          </div>

          {/* Altar Burn Controls */}
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '8px', fontSize: '1rem' }}>Altar Burn</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button 
                onClick={() => alert('Altar Burn contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PauseCircle size={16} style={{ marginRight: 6 }}/> Pause
              </Button>
              <Button 
                onClick={() => alert('Altar Burn contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PlayCircle size={16} style={{ marginRight: 6 }}/> Resume
              </Button>
            </div>
          </div>

          {/* Swap Controls */}
          <div>
            <h4 style={{ color: '#fbbf24', marginBottom: '8px', fontSize: '1rem' }}>Token Swap (AMM)</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button 
                onClick={() => alert('Swap contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PauseCircle size={16} style={{ marginRight: 6 }}/> Pause
              </Button>
              <Button 
                onClick={() => alert('Swap contract integration coming soon!')}
                disabled
                style={{ flex: 1, opacity: 0.5 }}
              >
                <PlayCircle size={16} style={{ marginRight: 6 }}/> Resume
              </Button>
            </div>
          </div>
        </div>
      </ModalCard>
    </EnhancedModal>
  );
}

