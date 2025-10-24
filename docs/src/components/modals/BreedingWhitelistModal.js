import React from 'react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';
import { UserPlus, UserMinus, ListCheck, Upload } from 'lucide-react';
import { generatePseudonym, spliceAddress } from '../../utils/nameGenerator';
import { Button } from '../LandingPage';

export default function BreedingWhitelistModal({ 
  isOpen, 
  onClose, 
  whitelist, 
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
      title="🧬 Breeding Lab Whitelist"
      subtitle="Manage Cross-Breeding Access Permissions"
      titleColor="#7c3aed"
      borderColor="rgba(124, 58, 237, 0.5)"
      shadowColor="rgba(124, 58, 237, 0.4)"
      scrollbarColor="#7c3aed"
    >
      <ModalCard
        icon={UserPlus}
        title="Add Address to Whitelist"
        accentColor="#7c3aed"
        gradient="linear-gradient(135deg, rgba(124,58,237,0.15), rgba(109,40,217,0.15))"
      >
        <div style={{ display: 'grid', gap: 12 }}>
          <input
            value={addressInput}
            onChange={e => setAddressInput(e.target.value)}
            placeholder="Enter Ethereum address (0x...)"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(124,58,237,0.5)',
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
              style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <UserPlus size={16} style={{ marginRight: 6 }}/>
              Add Address
            </Button>
            <Button
              onClick={() => onRemove()}
              disabled={loading || !addressInput.trim()}
              style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <UserMinus size={16} style={{ marginRight: 6 }}/>
              Remove Address
            </Button>
          </div>

          {/* Bulk Import CSV Button */}
          <Button
            onClick={() => alert('CSV import feature coming soon! Format: one address per line.')}
            disabled={loading}
            style={{
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.2))',
              border: '2px solid rgba(16, 185, 129, 0.5)'
            }}
          >
            <Upload size={16} style={{ marginRight: 6 }}/>
            Bulk Import Whitelist from CSV
          </Button>
        </div>
      </ModalCard>

      <ModalCard
        icon={ListCheck}
        title={`Whitelisted Addresses (${whitelist.length})`}
        accentColor="#7c3aed"
        gradient="linear-gradient(135deg, rgba(124,58,237,0.15), rgba(109,40,217,0.15))"
      >
        <div style={{ maxHeight: 400, overflowY: 'auto', padding: 10, border: '1px solid rgba(124,58,237,0.3)', borderRadius: 8 }}>
          {whitelist.length === 0 && (
            <p style={{ margin: 0, color: '#9ca3af', textAlign: 'center' }}>No addresses whitelisted yet</p>
          )}
          {whitelist.map((addr) => (
            <div 
              key={addr} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                gap: 8, 
                padding: '12px 0', 
                borderBottom: '1px dashed rgba(124,58,237,0.2)' 
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: '#a78bfa', fontSize: '1.1rem' }}>
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
                <UserMinus size={14} style={{ marginRight: 6 }}/>
                Remove
              </Button>
            </div>
          ))}
        </div>
      </ModalCard>
    </EnhancedModal>
  );
}

