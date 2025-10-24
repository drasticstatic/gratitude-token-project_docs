import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { Globe, Chrome, Zap, Download, Smartphone } from "lucide-react";

export default function Web3BrowserModal({ isOpen, onClose }) {
  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="⚠️ Web3 Browser Required"
      subtitle="Safari is Not Compatible - Switch to a Web3 Browser"
      titleColor="#f97316"
      borderColor="rgba(249, 115, 22, 0.5)"
      shadowColor="rgba(249, 115, 22, 0.4)"
      scrollbarColor="#f97316"
    >
      {/* Safari Detection */}
      <ModalCard
        icon={Globe}
        title="Safari is Not Web3-Compatible"
        gradient="linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.15))"
        accentColor="#f59e0b"
      >
        <p style={{ marginBottom: '12px' }}>
          Safari doesn't natively support Web3 wallet extensions like MetaMask. To interact with this dApp, you'll need to use a <strong>Web3-compatible browser</strong>.
        </p>

        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.3)' }}>
          <p style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '8px' }}>⚠️ Why Safari Doesn't Work</p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Safari blocks browser extensions that inject Web3 providers</li>
            <li>MetaMask and other wallet extensions cannot run in Safari</li>
            <li>Apple's security policies prevent Web3 wallet integration</li>
          </ul>
        </div>
      </ModalCard>

      {/* Desktop Solutions */}
      <ModalCard
        icon={Chrome}
        title="Desktop: Use a Web3 Browser"
        gradient="linear-gradient(135deg, rgba(96,165,250,0.15), rgba(59,130,246,0.15))"
        accentColor="#60a5fa"
      >
        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🖥️ Recommended Desktop Browsers</h4>
        
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '6px' }}>
            <Chrome size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            Google Chrome (Recommended)
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Download: <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>chrome.google.com</a></li>
            <li>Install MetaMask extension from <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>metamask.io</a></li>
            <li>Best compatibility with Web3 dApps</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '6px' }}>
            🦊 Firefox
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Download: <a href="https://www.mozilla.org/firefox/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>mozilla.org/firefox</a></li>
            <li>Install MetaMask extension</li>
            <li>Good Web3 support</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '6px' }}>
            🌐 Brave Browser
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Download: <a href="https://brave.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>brave.com</a></li>
            <li>Built-in crypto wallet (no extension needed!)</li>
            <li>Privacy-focused with Web3 support</li>
          </ul>
        </div>

        <div>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '6px' }}>
            🔷 Microsoft Edge
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Download: <a href="https://www.microsoft.com/edge" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>microsoft.com/edge</a></li>
            <li>Install MetaMask extension</li>
            <li>Chromium-based, good Web3 support</li>
          </ul>
        </div>
      </ModalCard>

      {/* Mobile Solutions */}
      <ModalCard
        icon={Smartphone}
        title="Mobile: Use a Web3 Wallet App"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>📱 Mobile Web3 Browsers</h4>
        
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>
            🦊 MetaMask Mobile App (Recommended)
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Download from App Store or Google Play</li>
            <li>Built-in Web3 browser</li>
            <li>Open dApps directly in the app</li>
            <li>Visit: <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e' }}>metamask.io/download</a></li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>
            🌈 Rainbow Wallet
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Beautiful, user-friendly interface</li>
            <li>Built-in dApp browser</li>
            <li>Visit: <a href="https://rainbow.me/" target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e' }}>rainbow.me</a></li>
          </ul>
        </div>

        <div>
          <p style={{ color: '#22c55e', fontWeight: 600, marginBottom: '6px' }}>
            💎 Trust Wallet
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li>Multi-chain support</li>
            <li>Built-in dApp browser</li>
            <li>Visit: <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e' }}>trustwallet.com</a></li>
          </ul>
        </div>
      </ModalCard>

      {/* Quick Setup Guide */}
      <ModalCard
        icon={Zap}
        title="Quick Setup Guide"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>⚡ Get Started in 3 Steps</h4>
        
        <ol style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Download a Web3 Browser</strong>
            <ul style={{ marginLeft: '20px', marginTop: '6px' }}>
              <li>Desktop: Chrome, Firefox, Brave, or Edge</li>
              <li>Mobile: MetaMask app, Rainbow, or Trust Wallet</li>
            </ul>
          </li>
          <li style={{ marginTop: '8px' }}><strong>Install MetaMask (Desktop only)</strong>
            <ul style={{ marginLeft: '20px', marginTop: '6px' }}>
              <li>Visit <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>metamask.io</a></li>
              <li>Click "Download" and install the browser extension</li>
              <li>Create a new wallet or import existing one</li>
            </ul>
          </li>
          <li style={{ marginTop: '8px' }}><strong>Return to This Site</strong>
            <ul style={{ marginLeft: '20px', marginTop: '6px' }}>
              <li>Open this website in your new Web3 browser</li>
              <li>Click "Connect Wallet" in the top right</li>
              <li>Approve the connection in MetaMask</li>
              <li>Start exploring! 🍄✨</li>
            </ul>
          </li>
        </ol>

        <div style={{ background: 'rgba(251,191,36,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(251,191,36,0.3)' }}>
          <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '8px' }}>💡 Pro Tip</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            If you're on mobile, the <strong>MetaMask Mobile App</strong> is the easiest solution. Just download it, create a wallet, and browse to this site within the app!
          </p>
        </div>
      </ModalCard>

      {/* Why Web3 Matters */}
      <ModalCard
        icon={Download}
        title="Why Web3 Browsers Matter"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🔐 What Makes Web3 Different?</h4>
        
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Your Keys, Your Crypto</strong> - You control your assets, not a company</li>
          <li><strong>Direct Blockchain Interaction</strong> - No intermediaries or centralized servers</li>
          <li><strong>Wallet = Identity</strong> - Your wallet address is your universal Web3 identity</li>
          <li><strong>Permissionless Access</strong> - No sign-ups, no passwords, just connect and go</li>
        </ul>

        <div style={{ background: 'rgba(167,139,250,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(167,139,250,0.3)' }}>
          <p style={{ color: '#a78bfa', fontWeight: 600, marginBottom: '8px' }}>🌟 The Future is Decentralized</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            Web3 browsers and wallets are the gateway to a new internet where you own your data, assets, and identity. Welcome to the revolution! 🚀
          </p>
        </div>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={Chrome}
        title="Ready to Get Started?"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          Choose your platform and download a Web3 browser today:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
          <a
            href="https://www.google.com/chrome/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '12px 16px',
              background: 'rgba(96,165,250,0.1)',
              border: '1px solid rgba(96,165,250,0.3)',
              borderRadius: '8px',
              color: '#60a5fa',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(96,165,250,0.2)';
              e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(96,165,250,0.1)';
              e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)';
            }}
          >
            <strong>🖥️ Desktop:</strong> Download Google Chrome
          </a>

          <a
            href="https://metamask.io/download/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '12px 16px',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: '8px',
              color: '#22c55e',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(34,197,94,0.2)';
              e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(34,197,94,0.1)';
              e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
            }}
          >
            <strong>📱 Mobile:</strong> Download MetaMask App
          </a>
        </div>

        <p style={{ textAlign: 'center', color: '#ec4899', fontWeight: 600, fontSize: '1.1rem' }}>
          🍄 See you on the other side! ✨
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

