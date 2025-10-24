import React from 'react';
import { Coins, TrendingUp, Shield, Users, Droplet, AlertTriangle } from 'lucide-react';
import EnhancedModal from './EnhancedModal';
import ModalCard from './ModalCard';

export default function TokenomicsFAQ({ isOpen, onClose }) {
  // Help Circle SVG Component
  const HelpCircleIcon = () => (
    <svg width="51" height="51" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2" fill="none">
        <animate attributeName="r" values="10;10.5;10" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17" r="1.8" fill="#3b82f6">
        <animate attributeName="r" values="0.5;0.7;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
  const faqs = [
    {
      icon: Coins,
      question: "What is PSD Token?",
      answer: "PSD (Psilocybin Sacrament Dollar) is the governance and utility token of Psanctuary Church's Ethereal Offering ecosystem. It represents your stake in the community and grants voting rights in the DAO. PSD enables you to participate in governance decisions, provide liquidity, and engage in ceremonial token burning."
    },
    {
      icon: TrendingUp,
      question: "How Does the AMM Work?",
      answer: "Our Automated Market Maker (AMM) uses a constant product formula (x * y = k) to enable decentralized token swaps. This means the product of the two token reserves remains constant. When you swap tokens, you're trading directly with the liquidity pool, and the price adjusts automatically based on supply and demand."
    },
    {
      icon: Droplet,
      question: "What is Liquidity?",
      answer: "Liquidity refers to the pool of tokens available for trading. When you provide liquidity, you deposit equal USD values of both tokens (ETHO and PSD) into the pool. In return, you receive LP (Liquidity Provider) tokens representing your proportional share of the pool. Liquidity providers earn a portion of trading fees."
    },
    {
      icon: Users,
      question: "How Do I Provide Liquidity?",
      answer: "1. Connect your wallet to the dApp\n2. Navigate to the Swap page\n3. Click 'Manage Liquidity'\n4. Enter equal USD values of both ETHO and PSD tokens\n5. Approve the transaction in your wallet\n6. Receive LP tokens representing your pool share\n\nYou can withdraw your liquidity at any time by burning your LP tokens."
    },
    {
      icon: AlertTriangle,
      question: "What Are the Risks?",
      answer: "• Impermanent Loss: If token prices diverge significantly, you may have less value than if you held the tokens separately\n• Smart Contract Risk: Always DYOR (Do Your Own Research) and understand the code before interacting\n• Market Volatility: Cryptocurrency prices can change rapidly\n• Liquidity Risk: In low-liquidity pools, large trades can cause significant price slippage"
    },
    {
      icon: Shield,
      question: "Token Economics & Mechanics",
      answer: "• Total Supply: Fixed at deployment (no inflation)\n• Distribution: Community-driven through DAO governance\n• Utility: Governance voting, staking rewards, ceremonial burning, liquidity provision\n• Burning Mechanism: Tokens can be ceremonially burned as offerings, permanently reducing supply\n• Governance: 1 PSD = 1 vote in DAO proposals\n• Rewards: Liquidity providers earn trading fees proportional to their pool share"
    }
  ];

  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="Tokenomics FAQ"
      subtitle="Everything you need to know about PSD token economics and mechanics"
      developmentNote="Like mushrooms adapting to changing conditions, our tokenomics are evolving to support the ecosystem."
      titleIcon={<HelpCircleIcon />}
      titleColor="#a78bfa"
      borderColor="rgba(167, 139, 250, 0.5)"
      shadowColor="rgba(167, 139, 250, 0.4)"
      scrollbarColor="#a78bfa"
    >
      {/* FAQ Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {faqs.map((faq, index) => (
          <ModalCard
            key={index}
            icon={faq.icon}
            title={faq.question}
            content={faq.answer}
            delay={index * 0.1}
            accentColor={
              index === 0 ? '#a78bfa' :
              index === 1 ? '#7c3aed' :
              index === 2 ? '#ec4899' :
              index === 3 ? '#a78bfa' :
              index === 4 ? '#7c3aed' :
              '#ec4899'
            }
          />
        ))}

        {/* Disclaimer */}
        <div style={{
          marginTop: '20px',
          padding: '20px',
          background: 'rgba(236, 72, 153, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#f472b6', fontSize: '0.95rem', fontWeight: '600', margin: 0 }}>
            ⚠️ DISCLAIMER: This is not financial advice. Always DYOR (Do Your Own Research) before interacting with smart contracts.
          </p>
        </div>
      </div>
    </EnhancedModal>
  );
}

