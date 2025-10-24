import React from "react";
import EnhancedModal from "./EnhancedModal";
import ModalCard from "./ModalCard";
import { BarChart3, TrendingUp, PieChart, DollarSign, Activity, Target } from "lucide-react";

export default function TreasuryAnalyticsModal({ isOpen, onClose }) {
  // Chart Emoji SVG
  const ChartEmojiIcon = () => (
    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#22d3ee" strokeWidth="2" fill="none">
        <animate attributeName="r" values="9;9.5;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="12" y="16" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="bold">📊</text>
      <circle cx="12" cy="12" r="11" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="r" values="11;12;11" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Treasury Analytics Dashboard"
      subtitle="Real-Time Financial Insights & Metrics"
      titleIcon={ChartEmojiIcon}
      titleColor="#22d3ee"
      borderColor="rgba(34, 211, 238, 0.5)"
      shadowColor="rgba(34, 211, 238, 0.4)"
      scrollbarColor="#22d3ee"
    >
      {/* Overview */}
      <ModalCard
        icon={BarChart3}
        title="Treasury Overview"
        gradient="linear-gradient(135deg, rgba(34,211,238,0.15), rgba(6,182,212,0.15))"
        accentColor="#22d3ee"
      >
        <p style={{ marginBottom: '12px' }}>
          The <strong>Treasury Analytics Dashboard</strong> provides real-time insights into the DAO's 
          financial health, fund allocation, and growth metrics.
        </p>

        <h4 style={{ color: '#22d3ee', marginBottom: '10px' }}>📈 Key Metrics (Coming Soon)</h4>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div style={{ 
            background: 'rgba(34,211,238,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(34,211,238,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', fontSize: '0.9rem', marginBottom: '4px' }}>Total Treasury Value</h5>
            <p style={{ fontSize: '1.5rem', color: '#22d3ee', margin: 0, fontWeight: 'bold' }}>$0.00 USD</p>
          </div>
          
          <div style={{ 
            background: 'rgba(34,211,238,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(34,211,238,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', fontSize: '0.9rem', marginBottom: '4px' }}>ETHO Holdings</h5>
            <p style={{ fontSize: '1.5rem', color: '#22d3ee', margin: 0, fontWeight: 'bold' }}>0 ETHO</p>
          </div>

          <div style={{ 
            background: 'rgba(34,211,238,0.1)', 
            padding: '10px', 
            borderRadius: '6px',
            border: '1px solid rgba(34,211,238,0.3)'
          }}>
            <h5 style={{ color: '#fbbf24', fontSize: '0.9rem', marginBottom: '4px' }}>PSD Reserves</h5>
            <p style={{ fontSize: '1.5rem', color: '#22d3ee', margin: 0, fontWeight: 'bold' }}>0 PSD</p>
          </div>
        </div>
      </ModalCard>

      {/* Revenue Streams */}
      <ModalCard
        icon={DollarSign}
        title="Revenue Streams"
        gradient="linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))"
        accentColor="#22c55e"
      >
        <p style={{ marginBottom: '12px' }}>
          The DAO treasury is funded through multiple revenue streams to ensure sustainable growth.
        </p>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>💰 Income Sources</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Crowdsale Revenue</strong> - Primary fundraising from ETHO token sales</li>
          <li><strong>AMM Swap Fees</strong> - 0.3% fee on all token swaps</li>
          <li><strong>NFT Marketplace Fees</strong> - 2.5% on cross-bred mushroom sales</li>
          <li><strong>Ministership Tuition</strong> - Educational program enrollment fees</li>
          <li><strong>Donations</strong> - Community contributions via Gratitude Tokens</li>
          <li><strong>Altar Burn Revenue</strong> - Portion of burned ETHO allocated to treasury</li>
        </ul>

        <p style={{ color: '#fbbf24', fontSize: '0.9rem', fontStyle: 'italic' }}>
          📊 Revenue breakdown charts coming soon!
        </p>
      </ModalCard>

      {/* Fund Allocation */}
      <ModalCard
        icon={PieChart}
        title="Fund Allocation Strategy"
        gradient="linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.15))"
        accentColor="#a78bfa"
      >
        <p style={{ marginBottom: '12px' }}>
          Treasury funds are allocated according to DAO-approved budgets and strategic priorities.
        </p>

        <h4 style={{ color: '#a78bfa', marginBottom: '10px' }}>🎯 Allocation Categories</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Development (30%)</strong> - Smart contract development, audits, infrastructure</li>
          <li><strong>Operations (20%)</strong> - Day-to-day expenses, salaries, tools</li>
          <li><strong>Marketing (15%)</strong> - Community growth, partnerships, events</li>
          <li><strong>Scholarships (15%)</strong> - Ministership program financial aid</li>
          <li><strong>Cultivator Grants (10%)</strong> - Support for mushroom cultivation projects</li>
          <li><strong>Emergency Reserve (10%)</strong> - Contingency fund for unexpected needs</li>
        </ul>

        <p style={{ color: '#22d3ee', fontSize: '0.9rem', fontStyle: 'italic' }}>
          📊 Interactive pie chart visualization coming soon!
        </p>
      </ModalCard>

      {/* Growth Metrics */}
      <ModalCard
        icon={TrendingUp}
        title="Growth & Performance Metrics"
        gradient="linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.15))"
        accentColor="#fbbf24"
      >
        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>📈 Key Performance Indicators</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Monthly Revenue Growth</strong> - Track income trends over time</li>
          <li><strong>Treasury Runway</strong> - Months of operations funded at current burn rate</li>
          <li><strong>Token Price Performance</strong> - ETHO and PSD price charts</li>
          <li><strong>Liquidity Pool TVL</strong> - Total value locked in AMM pools</li>
          <li><strong>Active Proposals</strong> - Number of treasury proposals in voting</li>
          <li><strong>Scholarship Recipients</strong> - Students supported by treasury</li>
        </ul>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🎯 Strategic Goals</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Q1 2025</strong> - Reach $100K treasury value</li>
          <li><strong>Q2 2025</strong> - Fund 10 scholarships</li>
          <li><strong>Q3 2025</strong> - Achieve $1M TVL in liquidity pools</li>
          <li><strong>Q4 2025</strong> - Support 50+ cultivator projects</li>
        </ul>
      </ModalCard>

      {/* Transparency & Reporting */}
      <ModalCard
        icon={Activity}
        title="Transparency & Reporting"
        gradient="linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))"
        accentColor="#3b82f6"
      >
        <p style={{ marginBottom: '12px' }}>
          All treasury transactions are publicly visible on-chain, with regular financial reports 
          published for community review.
        </p>

        <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>📋 Reporting Schedule</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Real-Time</strong> - All transactions visible on Etherscan</li>
          <li><strong>Weekly</strong> - Treasury balance snapshots</li>
          <li><strong>Monthly</strong> - Detailed financial reports with analysis</li>
          <li><strong>Quarterly</strong> - Strategic review and budget adjustments</li>
          <li><strong>Annual</strong> - Comprehensive year-end report and audit</li>
        </ul>

        <h4 style={{ color: '#22c55e', marginBottom: '10px' }}>🔍 Audit Trail</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>On-Chain Verification</strong> - Every transaction recorded on blockchain</li>
          <li><strong>Multi-Sig Transparency</strong> - All signers and approvals visible</li>
          <li><strong>Proposal History</strong> - Complete record of all treasury proposals</li>
          <li><strong>External Audits</strong> - Annual third-party financial audits</li>
        </ul>
      </ModalCard>

      {/* Analytics Tools */}
      <ModalCard
        icon={Target}
        title="Analytics Tools & Integrations"
        gradient="linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))"
        accentColor="#ec4899"
      >
        <p style={{ marginBottom: '12px' }}>
          The treasury dashboard will integrate with leading blockchain analytics platforms for 
          comprehensive insights.
        </p>

        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>🛠️ Planned Integrations</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li><strong>Dune Analytics</strong> - Custom dashboards and SQL queries</li>
          <li><strong>Nansen</strong> - Wallet tracking and smart money insights</li>
          <li><strong>DeBank</strong> - Portfolio tracking and DeFi analytics</li>
          <li><strong>Etherscan</strong> - Contract verification and transaction history</li>
          <li><strong>CoinGecko/CMC</strong> - Token price tracking and market data</li>
        </ul>

        <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>📊 Custom Dashboards</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Treasury Health</strong> - Real-time balance and runway metrics</li>
          <li><strong>Revenue Analytics</strong> - Income breakdown by source</li>
          <li><strong>Spending Tracker</strong> - Expense categorization and trends</li>
          <li><strong>Proposal Impact</strong> - ROI analysis for funded proposals</li>
        </ul>
      </ModalCard>

      {/* Call to Action */}
      <ModalCard
        icon={BarChart3}
        title="Access the Dashboard"
        gradient="linear-gradient(135deg, rgba(34,211,238,0.15), rgba(6,182,212,0.15))"
        accentColor="#22d3ee"
      >
        <p style={{ marginBottom: '12px' }}>
          The full Treasury Analytics Dashboard is currently under development and will be available 
          with the mainnet launch.
        </p>

        <h4 style={{ color: '#22d3ee', marginBottom: '10px' }}>🚀 Coming Soon</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Interactive Charts</strong> - Real-time data visualization</li>
          <li><strong>Historical Data</strong> - Track trends over time</li>
          <li><strong>Export Reports</strong> - Download CSV/PDF financial reports</li>
          <li><strong>Custom Alerts</strong> - Get notified of significant treasury events</li>
        </ul>

        <p style={{ color: '#22c55e', marginTop: '16px', fontSize: '0.95rem', fontStyle: 'italic' }}>
          📊 Transparency is our foundation - every dollar accounted for, every decision visible!
        </p>
      </ModalCard>
    </EnhancedModal>
  );
}

