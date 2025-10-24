import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Key, Shield, Users, Lock, CheckCircle, AlertTriangle } from "lucide-react";

export default function MultisigModal({ isOpen, onClose }) {
  // Key Emoji SVG
  const KeyEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#ec4899" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#ec4899" fontSize="11" fontWeight="bold">🔑</text>
      <circle cx="12" cy="12" r="11" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Multi-Signature & MPC Security"
      subtitle="Advanced Cryptographic Protection for Treasury Assets"
      titleIcon={KeyEmojiIcon}
      titleColor="#ec4899"
      borderColor="rgba(236, 72, 153, 0.5)"
      shadowColor="rgba(236, 72, 153, 0.4)"
      scrollbarColor="#ec4899"
    >
      {/* What is Multi-Sig */}
      <ModalCard
        icon={Key}
        title="What is Multi-Signature (Multi-Sig)?"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          <strong>Multi-signature wallets</strong> require multiple private keys to authorize a transaction, 
          preventing any single person from unilaterally accessing or moving funds.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🔐 How It Works</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>M-of-N Signatures</strong> - Requires M signatures out of N total signers (e.g., 3-of-5)</li>
          <li><strong>Distributed Control</strong> - No single point of failure or compromise</li>
          <li><strong>Transparent Execution</strong> - All signers can see pending transactions</li>
          <li><strong>On-Chain Verification</strong> - Smart contract enforces signature requirements</li>
        </ul>

        <p style={{ color: '#fbbf24', fontSize: '0.9rem', fontStyle: 'italic' }}>
          💡 Example: A 3-of-5 multi-sig requires 3 out of 5 designated signers to approve any transaction.
        </p>
      </ModalCard>

      {/* What is MPC */}
      <ModalCard
        icon={Shield}
        title="What is MPC (Multi-Party Computation)?"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <p style={{ marginBottom: '12px' }}>
          <strong>Multi-Party Computation (MPC)</strong> is an advanced cryptographic technique where multiple 
          parties jointly compute a function while keeping their inputs private. In blockchain, MPC enables 
          distributed key generation and signing without ever exposing the full private key.
        </p>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🧮 MPC Advantages</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>No Single Private Key</strong> - The full key never exists in one place</li>
          <li><strong>Threshold Signatures</strong> - Similar to multi-sig but more flexible</li>
          <li><strong>Enhanced Privacy</strong> - Participants don't reveal their key shares</li>
          <li><strong>Reduced Gas Costs</strong> - Single signature on-chain vs. multiple signatures</li>
          <li><strong>Better UX</strong> - Appears as a single signature to external observers</li>
        </ul>

        <p style={{ color: '#22c55e', fontSize: '0.9rem', fontStyle: 'italic' }}>
          ✨ MPC is like multi-sig but with cryptographic magic that keeps key shares private!
        </p>
      </ModalCard>

      {/* Multi-Sig vs MPC */}
      <ModalCard
        icon={Users}
        title="Multi-Sig vs. MPC: Key Differences"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🔄 Comparison</h4>
        
        <div style={{ marginBottom: '16px' }}>
          <h5 style={{ color: '#ec4899', marginBottom: '8px' }}>Multi-Signature:</h5>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>✅ Transparent on-chain (all signers visible)</li>
            <li>✅ Simple to understand and audit</li>
            <li>✅ Widely supported by wallets and tools</li>
            <li>❌ Higher gas costs (multiple signatures)</li>
            <li>❌ Less privacy (signers are public)</li>
          </ul>
        </div>

        <div>
          <h5 style={{ color: '#60a5fa', marginBottom: '8px' }}>MPC (Multi-Party Computation):</h5>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>✅ Lower gas costs (single signature)</li>
            <li>✅ Enhanced privacy (key shares never exposed)</li>
            <li>✅ More flexible threshold schemes</li>
            <li>✅ Better user experience</li>
            <li>❌ More complex cryptography</li>
            <li>❌ Requires specialized infrastructure</li>
          </ul>
        </div>
      </ModalCard>

      {/* Psanctuary Implementation */}
      <ModalCard
        icon={Lock}
        title="Psanctuary DAO Implementation"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>Psanctuary DAO Treasury</strong> will be secured using a combination of multi-signature 
          and MPC technologies to ensure maximum security and decentralization.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🏛️ Planned Configuration</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Treasury Multi-Sig</strong> - 4-of-7 signers for major fund movements</li>
          <li><strong>Operations Multi-Sig</strong> - 2-of-3 signers for routine operations</li>
          <li><strong>Emergency Multi-Sig</strong> - 3-of-5 signers for circuit breaker activation</li>
          <li><strong>MPC Integration</strong> - Exploring Fireblocks, Qredo, or Gnosis Safe + MPC</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>👥 Signer Roles</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Core Team</strong> - Founding members and technical leads</li>
          <li><strong>Community Representatives</strong> - Elected by DAO vote</li>
          <li><strong>External Advisors</strong> - Security experts and legal counsel</li>
          <li><strong>Automated Signers</strong> - Smart contract-based signers for specific conditions</li>
        </ul>
      </ModalCard>

      {/* Security Best Practices */}
      <ModalCard
        icon={CheckCircle}
        title="Security Best Practices"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>🛡️ Multi-Sig Security</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Hardware Wallets</strong> - All signers use Ledger or Trezor</li>
          <li><strong>Geographic Distribution</strong> - Signers in different locations</li>
          <li><strong>Time Locks</strong> - Delay execution for large transactions</li>
          <li><strong>Regular Audits</strong> - Quarterly security reviews</li>
          <li><strong>Signer Rotation</strong> - Periodic updates to signer set</li>
        </ul>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🔐 MPC Security</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Secure Key Generation</strong> - Distributed key generation ceremony</li>
          <li><strong>Encrypted Communication</strong> - TLS + additional encryption layers</li>
          <li><strong>Backup & Recovery</strong> - Encrypted key share backups</li>
          <li><strong>Monitoring</strong> - Real-time alerts for suspicious activity</li>
        </ul>
      </ModalCard>

      {/* Future Roadmap */}
      <ModalCard
        icon={AlertTriangle}
        title="Implementation Roadmap"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <p style={{ marginBottom: '12px' }}>
          Multi-signature and MPC security will be implemented in phases as the DAO matures and treasury grows.
        </p>

        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>📅 Phased Rollout</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Phase 1 (Current)</strong> - Single owner for development and testing</li>
          <li><strong>Phase 2 (Q2 2025)</strong> - 2-of-3 multi-sig for core team</li>
          <li><strong>Phase 3 (Q3 2025)</strong> - 4-of-7 multi-sig with community representatives</li>
          <li><strong>Phase 4 (Q4 2025)</strong> - MPC integration for enhanced security</li>
          <li><strong>Phase 5 (2026)</strong> - Full decentralization with automated governance</li>
        </ul>

        <p style={{ color: '#22c55e', fontSize: '0.9rem', fontStyle: 'italic' }}>
          🌱 Security grows with the community - we'll implement multi-sig when the treasury reaches critical mass!
        </p>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Users}
        title="Get Involved in Security Governance"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          As the DAO grows, we'll need trusted community members to serve as multi-sig signers and security advisors.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🙋 How to Participate</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Build Reputation</strong> - Active participation in governance</li>
          <li><strong>Technical Expertise</strong> - Demonstrate blockchain security knowledge</li>
          <li><strong>Community Trust</strong> - Earn trust through consistent contribution</li>
          <li><strong>Apply for Signer Role</strong> - Submit proposal when positions open</li>
        </ul>

        <p style={{ color: '#a78bfa', marginTop: '16px', fontSize: '0.95rem' }}>
          💜 Security is a community effort - together we protect the sacred treasury!
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

