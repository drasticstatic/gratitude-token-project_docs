import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { FileText, Code, Shield, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

export default function ContractInfoModal({ isOpen, onClose, ownerOnChain }) {
  // Document Emoji SVG
  const DocumentEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#a78bfa" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">📄</text>
      <circle cx="12" cy="12" r="11" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Smart Contract Information"
      subtitle="Deployed Contracts & Technical Details"
      titleIcon={DocumentEmojiIcon}
      titleColor="#a78bfa"
      borderColor="rgba(167, 139, 250, 0.5)"
      shadowColor="rgba(167, 139, 250, 0.4)"
      scrollbarColor="#a78bfa"
    >
      {/* Contract Owner */}
      <ModalCard
        icon={Shield}
        title="Contract Owner & Governance"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>contract owner</strong> has administrative privileges to manage critical functions 
          like pausing contracts, updating parameters, and managing whitelists.
        </p>

        <div style={{ 
          background: 'rgba(167,139,250,0.1)', 
          padding: '12px', 
          borderRadius: '8px',
          border: '1px solid rgba(167,139,250,0.3)',
          marginBottom: '12px'
        }}>
          <h4 style={{ color: '#a78bfa', marginBottom: '8px', fontSize: '0.9rem' }}>Current Owner Address:</h4>
          <p style={{ 
            fontFamily: 'monospace', 
            fontSize: '0.85rem', 
            color: '#fbbf24',
            wordBreak: 'break-all',
            margin: 0
          }}>
            {ownerOnChain || 'Loading...'}
          </p>
        </div>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🔐 Owner Responsibilities</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Emergency Controls</strong> - Pause/resume contracts during security events</li>
          <li><strong>Whitelist Management</strong> - Add/remove addresses from whitelists</li>
          <li><strong>Parameter Updates</strong> - Adjust crowdsale rates, fees, etc.</li>
          <li><strong>Ownership Transfer</strong> - Transfer to multi-sig or DAO governance</li>
        </ul>
      </ModalCard>

      {/* Deployed Contracts */}
      <ModalCard
        icon={Code}
        title="Deployed Smart Contracts"
        gradient="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))"
        accentColor="#3b82f6"
      >
        <p style={{ marginBottom: '12px' }}>
          The Psanctuary ecosystem consists of multiple interconnected smart contracts deployed on Ethereum.
        </p>

        <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>📜 Core Contracts</h4>
        
        <div style={{ display: 'grid', gap: '12px' }}>
          {/* ETHO Token */}
          <div style={{ 
            background: 'rgba(59,130,246,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(59,130,246,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', marginBottom: '6px', fontSize: '0.95rem' }}>ETHO Token (ERC20)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Primary governance and utility token
            </p>
            <p style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.75rem', 
              color: '#a78bfa',
              marginTop: '6px',
              wordBreak: 'break-all'
            }}>
              Address: Coming soon...
            </p>
          </div>

          {/* PSD Token */}
          <div style={{ 
            background: 'rgba(59,130,246,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(59,130,246,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', marginBottom: '6px', fontSize: '0.95rem' }}>PSD Token (ERC20)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Stablecoin pegged to USD for trading
            </p>
            <p style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.75rem', 
              color: '#a78bfa',
              marginTop: '6px',
              wordBreak: 'break-all'
            }}>
              Address: Coming soon...
            </p>
          </div>

          {/* Crowdsale */}
          <div style={{ 
            background: 'rgba(59,130,246,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(59,130,246,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', marginBottom: '6px', fontSize: '0.95rem' }}>Crowdsale Contract</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Token sale and fundraising mechanism
            </p>
            <p style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.75rem', 
              color: '#a78bfa',
              marginTop: '6px',
              wordBreak: 'break-all'
            }}>
              Address: Check config.json
            </p>
          </div>

          {/* AMM */}
          <div style={{ 
            background: 'rgba(59,130,246,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(59,130,246,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', marginBottom: '6px', fontSize: '0.95rem' }}>AMM (Automated Market Maker)</h5>
            <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>
              Decentralized token swap and liquidity pools
            </p>
            <p style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.75rem', 
              color: '#a78bfa',
              marginTop: '6px',
              wordBreak: 'break-all'
            }}>
              Address: Check config.json
            </p>
          </div>
        </div>
      </ModalCard>

      {/* Network Information */}
      <ModalCard
        icon={FileText}
        title="Network & Deployment Details"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🌐 Network Information</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Primary Network</strong> - Ethereum Mainnet (Chain ID: 1)</li>
          <li><strong>Testnet</strong> - Sepolia (Chain ID: 11155111)</li>
          <li><strong>Local Development</strong> - Hardhat Network (Chain ID: 31337)</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>📅 Deployment Timeline</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Phase 1 (Current)</strong> - Local development and testing</li>
          <li><strong>Phase 2 (Q1 2025)</strong> - Sepolia testnet deployment</li>
          <li><strong>Phase 3 (Q2 2025)</strong> - Mainnet deployment (limited features)</li>
          <li><strong>Phase 4 (Q3 2025)</strong> - Full ecosystem launch</li>
        </ul>
      </ModalCard>

      {/* Contract Verification */}
      <ModalCard
        icon={CheckCircle}
        title="Contract Verification & Audits"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <p style={{ marginBottom: '12px' }}>
          All smart contracts will be verified on Etherscan and audited by reputable security firms 
          before mainnet deployment.
        </p>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>✅ Verification Status</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Source Code</strong> - Published on GitHub (MIT License)</li>
          <li><strong>Etherscan Verification</strong> - Pending mainnet deployment</li>
          <li><strong>Security Audits</strong> - Scheduled for Q1 2025</li>
          <li><strong>Bug Bounty Program</strong> - Launching with mainnet</li>
        </ul>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🔍 Audit Partners (Planned)</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>OpenZeppelin</strong> - Smart contract security audit</li>
          <li><strong>Trail of Bits</strong> - Comprehensive security review</li>
          <li><strong>Certik</strong> - Formal verification and monitoring</li>
        </ul>
      </ModalCard>

      {/* Technical Specifications */}
      <ModalCard
        icon={Code}
        title="Technical Specifications"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>⚙️ Contract Standards</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>ERC20</strong> - Fungible tokens (ETHO, PSD, Daily Shrooms)</li>
          <li><strong>ERC721</strong> - Non-fungible tokens (Mushroom NFTs, Proof of Burn)</li>
          <li><strong>OpenZeppelin v5</strong> - Battle-tested contract libraries</li>
          <li><strong>Solidity 0.8.20+</strong> - Latest stable compiler version</li>
        </ul>

        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🛠️ Development Tools</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Hardhat</strong> - Development environment and testing</li>
          <li><strong>Ethers.js</strong> - Blockchain interaction library</li>
          <li><strong>Wagmi + RainbowKit</strong> - Wallet connection and hooks</li>
          <li><strong>React 18</strong> - Frontend framework</li>
        </ul>
      </ModalCard>

      {/* External Links */}
      <ModalCard
        icon={ExternalLink}
        title="Useful Links & Resources"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🔗 External Resources</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>
            <strong>GitHub Repository</strong> - 
            <a 
              href="https://github.com/drasticstatic/gratitude-token-project" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fbbf24', marginLeft: '8px' }}
            >
              View Source Code →
            </a>
          </li>
          <li><strong>Etherscan</strong> - Contract verification (coming soon)</li>
          <li><strong>Documentation</strong> - Technical docs (coming soon)</li>
          <li><strong>Audit Reports</strong> - Security audits (coming soon)</li>
        </ul>

        <p style={{ color: '#22c55e', marginTop: '16px', fontSize: '0.95rem', fontStyle: 'italic' }}>
          🌱 All contracts are open-source and transparent - inspect the code yourself!
        </p>
      </ModalCard>

      {/* Security Notice */}
      <ModalCard
        icon={AlertCircle}
        title="Security Notice"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <p style={{ marginBottom: '12px', color: '#fca5a5' }}>
          ⚠️ <strong>Important:</strong> This project is currently in active development. 
          Do not send real funds to any contracts until official mainnet launch is announced.
        </p>

        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>🛡️ Security Best Practices</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Verify Addresses</strong> - Always double-check contract addresses</li>
          <li><strong>Use Hardware Wallets</strong> - Ledger or Trezor for large amounts</li>
          <li><strong>Start Small</strong> - Test with small amounts first</li>
          <li><strong>Stay Updated</strong> - Follow official channels for announcements</li>
        </ul>
      </ModalCard>
    </EnhancedModal>
  );
}

