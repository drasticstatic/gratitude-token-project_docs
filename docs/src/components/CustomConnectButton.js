import React, { useState, useEffect } from "react";
import { useAccount, useDisconnect, useConnect } from "wagmi";
import { Wallet, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import Web3BrowserModal from "./modals/Web3BrowserModal";

/**
 * Get network information based on chain ID
 */
export const getNetworkInfo = (chain) => {
  const base = (overrides = {}) => ({ icon: null, imgSrc: null, name: 'Unknown Network', color: '#9ca3af', emoji: '⚡', ...overrides });
  if (!chain) return base();

  const chainId = chain.id;

  // Hardhat local network
  if (chainId === 31337) {
    return base({
      imgSrc: `${process.env.PUBLIC_URL}/images/hardhat.png`,
      name: 'Hardhat —network localhost',
      color: '#fbbf24',
      emoji: '🏗️'
    });
  }

  // Ethereum Mainnet
  if (chainId === 1) {
    return base({
      imgSrc: `${process.env.PUBLIC_URL}/images/ethereum.svg`,
      name: 'Ethereum Mainnet',
      color: '#627eea',
      emoji: '⟠'
    });
  }

  // Sepolia Testnet
  if (chainId === 11155111) {
    return base({
      imgSrc: `${process.env.PUBLIC_URL}/images/ethereum.svg`,
      name: 'Sepolia Testnet',
      color: '#627eea',
      emoji: '⟠'
    });
  }

  // Default
  return base({
    name: chain.name ? `${chain.name}` : 'Unknown Network',
    color: '#a78bfa'
  });
};

/**
 * CustomConnectButton - Custom wallet connect/disconnect button
 * Matches site aesthetic with network indicators
 */
export default function CustomConnectButton() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connect } = useConnect();
  const [showWeb3Modal, setShowWeb3Modal] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  // Detect Safari browser
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !userAgent.includes('chrome');
    setIsSafari(isSafariBrowser);
  }, []);

  const handleConnect = () => {
    // Check if Web3 provider is available
    const hasWeb3Provider = typeof window.ethereum !== 'undefined';

    // If Safari and no Web3 provider, show modal
    if (isSafari && !hasWeb3Provider) {
      setShowWeb3Modal(true);
      return;
    }

    // Use the first available connector (usually injected wallet like MetaMask)
    const injectedConnector = connectors.find(c => c.id === 'injected') || connectors[0];
    if (injectedConnector) {
      connect({ connector: injectedConnector });
    } else if (!hasWeb3Provider) {
      // No connector and no Web3 provider - show modal
      setShowWeb3Modal(true);
    }
  };

  if (isConnected) {
    return (
      <>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Disconnect Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => disconnect()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.2))',
              border: '2px solid rgba(239, 68, 68, 0.5)',
              borderRadius: '12px',
              color: '#f87171',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(220, 38, 38, 0.3))';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.7)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(239, 68, 68, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.2))';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.2)';
            }}
          >
            <LogOut size={16} />
            Disconnect
          </motion.button>
        </div>

        {/* Web3 Browser Modal */}
        <Web3BrowserModal isOpen={showWeb3Modal} onClose={() => setShowWeb3Modal(false)} />
      </>
    );
  }

  return (
    <>
      <motion.button className="sparkly-border sparkly-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleConnect}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))',
          border: '2px solid rgba(59, 130, 246, 0.5)',
          borderRadius: '12px',
          color: '#60a5fa',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)',
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.3))';
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.7)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))';
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
        }}
      >
        <Wallet size={24} style={{ width: 24, height: 24, flexShrink: 0 }} className="wallet-icon-heartbeat" />
        Connect Wallet
      </motion.button>

      {/* Web3 Browser Modal */}
      <Web3BrowserModal isOpen={showWeb3Modal} onClose={() => setShowWeb3Modal(false)} />
    </>
  );
}

