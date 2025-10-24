import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "./LandingPage";

export const TransactionHistory = ({ transactions = [], title = "Transaction History", compact = false }) => {
  const [isExpanded, setIsExpanded] = useState(!compact);
  const [showAll, setShowAll] = useState(false);

  const displayTransactions = compact && !showAll ? transactions.slice(0, 3) : transactions;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle size={16} style={{ color: '#22c55e' }} />;
      case 'pending':
        return <Clock size={16} style={{ color: '#f59e0b' }} />;
      case 'failed':
        return <XCircle size={16} style={{ color: '#ef4444' }} />;
      default:
        return <Clock size={16} style={{ color: '#9ca3af' }} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return '#22c55e';
      case 'pending':
        return '#f59e0b';
      case 'failed':
        return '#ef4444';
      default:
        return '#9ca3af';
    }
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  if (transactions.length === 0) {
    return (
      <Card className="feature-card" style={{ marginTop: '20px' }}>
        <CardContent>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description" style={{ textAlign: 'center', padding: '20px 0' }}>
            No transactions yet. Your transaction history will appear here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="feature-card" style={{ marginTop: '20px' }}>
      <CardContent>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            cursor: compact ? 'pointer' : 'default',
            marginBottom: isExpanded ? '16px' : '0'
          }}
          onClick={() => compact && setIsExpanded(!isExpanded)}
        >
          <h3 className="feature-title">{title} ({transactions.length})</h3>
          {compact && (
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#a78bfa', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ 
                maxHeight: compact ? '300px' : '500px', 
                overflowY: 'auto',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                borderRadius: '8px',
                padding: '12px'
              }}>
                {displayTransactions.map((tx, index) => (
                  <motion.div
                    key={tx.hash || index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{
                      padding: '12px',
                      marginBottom: '8px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '6px',
                      borderLeft: `3px solid ${getStatusColor(tx.status)}`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {getStatusIcon(tx.status)}
                        <span style={{ fontWeight: '600', color: '#d1d5db', fontSize: '0.9rem' }}>
                          {tx.type || 'Transaction'}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                        {formatTimestamp(tx.timestamp)}
                      </span>
                    </div>

                    {tx.amount && (
                      <div style={{ fontSize: '0.875rem', color: '#a78bfa' }}>
                        Amount: <span style={{ color: '#fbbf24', fontWeight: '600' }}>{tx.amount}</span>
                      </div>
                    )}

                    {tx.from && (
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'monospace' }}>
                        From: {formatAddress(tx.from)}
                      </div>
                    )}

                    {tx.to && (
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'monospace' }}>
                        To: {formatAddress(tx.to)}
                      </div>
                    )}

                    {tx.hash && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <a
                          href={`https://etherscan.io/tx/${tx.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '0.75rem',
                            color: '#7c3aed',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontFamily: 'monospace'
                          }}
                        >
                          {formatAddress(tx.hash)}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {compact && transactions.length > 3 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAll(!showAll);
                  }}
                  style={{
                    marginTop: '12px',
                    padding: '8px 16px',
                    background: 'rgba(124, 58, 237, 0.2)',
                    border: '1px solid rgba(124, 58, 237, 0.4)',
                    borderRadius: '6px',
                    color: '#a78bfa',
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(124, 58, 237, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(124, 58, 237, 0.2)';
                  }}
                >
                  {showAll ? 'Show Less' : `Show All ${transactions.length} Transactions`}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;

