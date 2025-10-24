import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { ShieldAlert, UserX, ListX } from 'lucide-react';
import { generatePseudonym, spliceAddress } from '../../utils/nameGenerator';
import { Button } from '../LandingPage';

export default function DenylistModal({ 
  isOpen, 
  onClose, 
  denylist, 
  addressInput, 
  setAddressInput,
  onAdd,
  onRemove,
  loading 
}) {
  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="🚫 Global Denylist"
      subtitle="Manage Blocked Addresses (Terms Violations)"
      titleColor="#ef4444"
      borderColor="rgba(239, 68, 68, 0.5)"
      shadowColor="rgba(239, 68, 68, 0.4)"
      scrollbarColor="#ef4444"
    >
      <ModalCard
        icon={ShieldAlert}
        title="Add Address to Denylist"
        accentColor="#ef4444"
        gradient="linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.15))"
      >
        <p style={{ color: '#fca5a5', marginBottom: '16px', fontSize: '0.95rem' }}>
          ⚠️ Denylisted addresses will be blocked from all dApp features. Use this for addresses that violate terms of service.
        </p>
        <div style={{ display: 'grid', gap: 12 }}>
          <input
            value={addressInput}
            onChange={e => setAddressInput(e.target.value)}
            placeholder="Enter Ethereum address (0x...)"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(239,68,68,0.5)',
              background: 'rgba(0,0,0,0.3)',
              color: 'white',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <Button
              onClick={onAdd}
              disabled={loading || !addressInput.trim()}
              style={{ 
                height: '44px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(220,38,38,0.2))',
                border: '2px solid rgba(239,68,68,0.5)'
              }}
            >
              <UserX size={16} style={{ marginRight: 6 }}/>
              Block Address
            </Button>
            <Button
              onClick={() => onRemove()}
              disabled={loading || !addressInput.trim()}
              style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <UserX size={16} style={{ marginRight: 6 }}/>
              Unblock Address
            </Button>
          </div>
        </div>
      </ModalCard>

      <ModalCard
        icon={ListX}
        title={`Blocked Addresses (${denylist.length})`}
        accentColor="#ef4444"
        gradient="linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.15))"
      >
        <div style={{ maxHeight: 400, overflowY: 'auto', padding: 10, border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8 }}>
          {denylist.length === 0 && (
            <p style={{ margin: 0, color: '#9ca3af', textAlign: 'center' }}>No addresses blocked yet</p>
          )}
          {denylist.map((addr) => (
            <div 
              key={addr} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                gap: 8, 
                padding: '12px 0', 
                borderBottom: '1px dashed rgba(239,68,68,0.2)' 
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: '#f87171', fontSize: '1.1rem' }}>
                  {generatePseudonym(addr)}
                </div>
                <small style={{ color: '#9ca3af', fontFamily: 'monospace' }}>
                  {spliceAddress(addr)}
                </small>
              </div>
              <Button 
                onClick={() => onRemove(addr)} 
                size="sm"
                style={{ flexShrink: 0 }}
              >
                <UserX size={14} style={{ marginRight: 6 }}/>
                Unblock
              </Button>
            </div>
          ))}
        </div>
      </ModalCard>
    </EnhancedModal>
  );
}

