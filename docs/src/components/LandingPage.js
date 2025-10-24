import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createSporeEffect } from "./effects/SporeEffect";
import config from "../config.json";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import InfoSection from "./InfoSection";
import MycelialNetwork from "./MycelialNetwork";
import NeighboringNetwork from "./NeighboringNetwork";
import MycelialTitle from "./MycelialTitle";
import Footer from "./Footer";
import FlashlightCursor from "./FlashlightCursor";
import PsanctuaryWatermark from "./PsanctuaryWatermark";
import HeroNetwork from "./HeroNetwork";
import ScatteredBlockchainCubes from "./ScatteredBlockchainCubes";
import OracleModal from "./modals/OracleModal";
import ImagineModal from "./modals/ImagineModal";

import AgentModal from "./modals/AgentModal";
import { FAQTitleSVG, RoadmapTitleSVG, QuotesSVG } from "./SectionTitleSVGs";
import WhitepaperScrollIcon from "./icons/WhitepaperScrollIcon";
import SpiritualFoundationIcon from "./icons/SpiritualFoundationIcon";
import TrippyMushroom from "./TrippyMushroom";
import agentData from "../data/agents.json";
import agentDetails from "../data/agent_details.json";

// Note: We'll use our custom components below instead of shadcn/ui for now
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

// Simple button component to replace shadcn/ui dependency
// Now includes spore effect on click
export const Button = ({
  children,
  onClick,
  size = "default",
  variant = "default",
  className = "",
  ...props
}) => {
  const sizeClass = size === "lg" ? "btn-lg" : "";
  const variantClass = variant === "secondary" ? "btn-secondary" :
                      variant === "outline" ? "btn-outline" : "btn-primary";

  const handleClick = (e) => {
    // Add spore effect if enabled (default to true if not specified)
    const sporeEnabled = config?.enableSporeEffect !== false;
    console.log('🔘 Button clicked! enableSporeEffect:', sporeEnabled);
    if (sporeEnabled) {
      createSporeEffect(e);
    }

    // Call original onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple card components to replace shadcn/ui dependency
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Rotating Quotes Component
// Rotating Quotes Component - Displays psychedelic/spiritual wisdom
// Features: Auto-rotation, play/pause, countdown timer, glassmorphism
function RotatingQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12); // 12 seconds per quote (slower for readability)

  const quotes = [
    {
      text: "Reality, as you currently experience it, is something like a waking dream. It is disguising deeper and more intensified levels of being and knowing. For those who are ready and willing, the doors to those other levels now stand open.",
      author: "Daniel Pinchbeck"
    },
    {
      text: "Psychedelics are not a substitute for faith. They are a door to authentic faith, born of encountering directly the sacred dimension of everyday experience. This is not the only gate to that discovery, but it is the most ancient and universal, and potentially the most accessible to the majority of the human race.",
      author: "Rick Doblin"
    },
    {
      text: "The psychedelic experience is a journey to new realms of consciousness. The scope and content of the experience is limitless, but its characteristic features are the transcendence of verbal concepts, of space-time dimensions, and of the ego or identity.",
      author: "Timothy Leary"
    },
    {
      text: "We are not going in circles, we are going upwards. The path is a spiral; we have already climbed many steps.",
      author: "Hermann Hesse"
    }
  ];

  // Auto-rotation timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setTimeLeft(12); // Reset timer when quote changes
    }, 12000); // 12 seconds per quote

    return () => clearInterval(interval);
  }, [quotes.length, isPaused]);

  // Countdown timer
  useEffect(() => {
    if (isPaused) return;

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 12;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isPaused]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '900px',
        margin: '80px auto',
        padding: '48px 32px',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(236, 72, 153, 0.25))',
        borderRadius: '20px',
        border: '2px solid rgba(124, 58, 237, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(124, 58, 237, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Enhanced glassmorphism overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        pointerEvents: 'none'
      }} />

      {/* Navigation controls - top right */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        zIndex: 10
      }}>
        {/* Countdown timer */}
        <div style={{
          fontSize: '0.875rem',
          color: '#a78bfa',
          fontWeight: '600',
          background: 'rgba(124, 58, 237, 0.3)',
          padding: '6px 12px',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          {timeLeft}s
        </div>

        {/* Previous quote button */}
        <button
          onClick={() => {
            setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
            setTimeLeft(12);
          }}
          style={{
            background: 'rgba(124, 58, 237, 0.3)',
            border: '2px solid rgba(124, 58, 237, 0.5)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span style={{ color: '#a78bfa', fontSize: '1rem' }}>◀</span>
        </button>

        {/* Play/Pause button */}
        <button
          onClick={() => {
            setIsPaused(!isPaused);
            if (isPaused) setTimeLeft(12); // Reset timer when resuming
          }}
          style={{
            background: 'rgba(124, 58, 237, 0.3)',
            border: '2px solid rgba(124, 58, 237, 0.5)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span style={{ color: '#a78bfa', fontSize: '1rem' }}>
            {isPaused ? '▶' : '⏸'}
          </span>
        </button>

        {/* Next quote button */}
        <button
          onClick={() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
            setTimeLeft(12);
          }}
          style={{
            background: 'rgba(124, 58, 237, 0.3)',
            border: '2px solid rgba(124, 58, 237, 0.5)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span style={{ color: '#a78bfa', fontSize: '1rem' }}>▶</span>
        </button>
      </div>

      {/* Decorative quote icon */}
      <div style={{ textAlign: 'center', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
        <QuotesSVG />
      </div>

      {/* Quote text with slower fade transition */}
      <motion.div
        key={currentQuote}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <p style={{
          fontSize: '1.25rem',
          lineHeight: '1.8',
          color: '#e5e7eb',
          fontStyle: 'italic',
          textAlign: 'center',
          marginBottom: '24px',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)'
        }}>
          "{quotes[currentQuote].text}"
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: '#a78bfa',
          textAlign: 'center',
          fontWeight: '600',
          textShadow: '0 2px 8px rgba(124, 58, 237, 0.5)'
        }}>
          — {quotes[currentQuote].author}
        </p>
      </motion.div>

      {/* Quote indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '32px',
        position: 'relative',
        zIndex: 1
      }}>
        {quotes.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentQuote(index);
              setTimeLeft(12); // Reset timer when manually changing quote
            }}
            style={{
              width: currentQuote === index ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentQuote === index
                ? 'linear-gradient(90deg, #7c3aed, #ec4899)'
                : 'rgba(124, 58, 237, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.5s ease'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Psanctuary.org's Mission?",
      answer: "Psanctuary is a decentralized spiritual community advocating for religious freedom and the sacred use of entheogenic sacraments. We integrate ancient plant medicine wisdom with modern blockchain technology, creating a sovereign space for spiritual exploration, healing, and collective growth. Our mission is to preserve and protect the right to use sacred mushrooms as tools for consciousness expansion and divine connection."
    },
    {
      question: "What is a Blockchain and Why Does It Matter?",
      answer: "A blockchain is a decentralized, immutable ledger that records transactions across a network of computers. For Psanctuary, this means your spiritual offerings, NFT collections, and governance votes are permanently recorded and cannot be censored or controlled by any central authority. It's the technological foundation for true digital sovereignty and religious freedom."
    },
    {
      question: "What is a Wallet and How Do I Use It?",
      answer: "A crypto wallet (like MetaMask) is your digital identity on the blockchain. Your wallet address (e.g., 0x1234...5678) is like a bank account number - it's public and used to receive tokens. Your private key is like your password - never share it! Connect your wallet to interact with our dApp, sign transactions, and manage your digital assets."
    },
    {
      question: "What is Gas and Why Do I Need It?",
      answer: "Gas is the fee paid to blockchain validators for processing your transactions. Think of it like postage for sending a letter. On our platform, Daily Mushroom tokens (ERC20) act as gas currency for cross-breeding, creating a self-sustaining ecosystem where your daily farming directly powers your genetic experiments."
    },
    {
      question: "What is PSD (Psanctuary Dollar)?",
      answer: "PSD is a stablecoin pegged to USD, designed for stable trading within the Ethereal Offering ecosystem. It's an ERC20 token that maintains a 1:1 value with the US Dollar, providing a reliable medium of exchange for all platform transactions without the volatility of other cryptocurrencies."
    },
    {
      question: "What is ETHO (Ethereal Token)?",
      answer: "ETHO is the primary governance and utility token of the Ethereal Offering platform. As an ERC20 token, it's used for voting on proposals, burning at the altar for Proof of Burn NFTs, and participating in the ecosystem's economic activities. Holding ETHO gives you a voice in our decentralized spiritual community."
    },
    {
      question: "What's the difference between ERC20 and ERC721 tokens?",
      answer: "ERC20 tokens (like ETHO, PSD, Daily Mushrooms) are fungible - each token is identical and divisible, like dollars. ERC721 tokens (like Mushroom Farm NFTs, Proof of Burn NFTs, Hybrid Mushrooms) are non-fungible - each is unique and indivisible, like a one-of-a-kind artwork or certificate."
    },
    {
      question: "How does the Mushroom Farm work?",
      answer: "Inoculate your substrate and mist regularly to maintain proper fruiting conditions. After colonization (8 hours), your first flush is ready! Harvest creates a unique ERC721 NFT of your complete farm with multiple psilocybin mushrooms. Additionally, collect a single Daily Mushroom (ERC20) every 24 hours - these act as gas currency for cross-breeding experiments."
    },
    {
      question: "What is Cross-Breeding?",
      answer: "Cross-Breeding allows you to combine two parent mushrooms to create unique Hybrid Mushroom NFTs (ERC721). Each breeding attempt consumes Daily Mushroom tokens (ERC20) as gas, creating rare genetic combinations. It's like real mycology - experimenting with genetics to discover new strains and properties!"
    },
    {
      question: "What happens when I burn tokens at the Altar?",
      answer: "Like sublimation in alchemy, where matter transforms from solid to gas without passing through liquid, your ETHO tokens undergo a sacred transformation—transcending their material form to become eternal proof of your spiritual offering. This is the alchemical principle of releasing oneself from material attachment (magic) into spiritual light (divine consciousness). You receive a soulbound Proof of Burn NFT (ERC721) that eternally records your offering on the blockchain."
    },
    {
      question: "How does the AMM/Swap work?",
      answer: "Our Automated Market Maker (AMM) allows you to swap between ERC20 tokens (ETHO, PSD, Daily Mushrooms) using liquidity pools. Provide liquidity to earn fees from trades. All swaps use the constant product formula (x * y = k) for fair, decentralized pricing without intermediaries."
    },
    {
      question: "What is a Faucet?",
      answer: "A blockchain faucet is a tool that dispenses small amounts of cryptocurrency for free, usually for testing purposes. If you're new to crypto and need gas fees to get started, faucets can provide you with a small amount of ETH or testnet tokens to begin your journey."
    },
    {
      question: "What is Staking and Liquidity?",
      answer: "Staking means locking your tokens to support network operations and earn rewards. Liquidity provision means depositing token pairs into a pool so others can trade - you earn fees from each swap. Both are ways to put your tokens to work and earn passive income while supporting the ecosystem."
    }
  ];

  return (
    <div id="faq" className="content-section" style={{ marginTop: '0px', marginBottom: '0px' }}>
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 10px'
    }}>
      {/* Custom SVG Title */}
      <FAQTitleSVG />

      {/* Token explainer moved here */}
      <div style={{ filter: 'drop-shadow(0 4px 8px rgba(251, 82, 36, 0.5))' }}>
      <InfoSection
        title="Understanding Your Mushroom Tokens"
        items={[
          { heading: 'ETHO (Ethereal Offering Token) - Utility', color: '#a78bfa', content: 'Primary utility token for offerings, access, and governance influence throughout the dApp.' },
          { heading: 'PSD (Psanctuary Dollar) - Stable Unit', color: '#fbbf24', content: 'Stable, donation-oriented unit for crowdsale/donations and denominating certain rituals.' },
          { heading: 'Daily Mushrooms (ERC20)', color: '#7c3aed', content: 'Earned via participation. Used as a gas-like resource for actions such as cross-breeding.' },
          { heading: 'Mushroom NFTs (ERC721)', color: '#ec4899', content: 'Collectible strains, seasonal evolutions, and hybrids created through rituals like cross-breeding.' }
        ]}
      />
      </div>
      <div className="faq-container" style={{ display: 'grid', gap: '16px' }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="faq-item"
              id={index === 0 ? 'faq' : undefined}
              style={{
                background: 'rgba(124, 58, 237, 0.25)',
                backdropFilter: 'blur(8px)',
                border: '2px solid rgba(124, 58, 237, 0.4)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: '#d1d5db',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HelpCircle size={20} style={{ color: '#7c3aed', flexShrink: 0 }} />
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} style={{ color: '#ec4899', flexShrink: 0 }} />
                ) : (
                  <ChevronDown size={20} style={{ color: '#ec4899', flexShrink: 0 }} />
                )}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: '0 20px 20px 52px',
                    color: '#d1d5db',
                    lineHeight: '1.7',
                    fontSize: '0.95rem',
                  }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}

// Typewriter effect for roadmap items
function TypewriterText({ text, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Intersection observer to trigger typing when visible
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30); // 30ms per character for smooth typing

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, isVisible]);

  return <span ref={ref}>{displayedText || '\u00A0'}</span>; // Non-breaking space to maintain height
}

// Winding road connector with root hyphae and mushrooms sprouting along the path
function MycelialConnector({ fromColor = '#7c3aed', toColor = '#ec4899', height = 200 }) {
  return (
    <div style={{ height: `${height}px`, position: 'relative', zIndex: 0 }}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 1000 ${height}`}
        preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id={`roadGrad-${fromColor}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor={toColor} stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id={`hyphaeGrad-${fromColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} stopOpacity="0.4" />
            <stop offset="50%" stopColor={toColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={fromColor} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Winding road - main path with WAVY animation */}
        <path d={`M 500 10 Q 350 ${height*0.3}, 500 ${height*0.5} T 500 ${height-10}`}
          stroke={`url(#roadGrad-${fromColor})`} strokeWidth="6" fill="none" opacity="0.7" strokeLinecap="round">
          <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite" />
          <animate attributeName="d"
            values={`M 500 10 Q 350 ${height*0.3}, 500 ${height*0.5} T 500 ${height-10};M 500 10 Q 360 ${height*0.3}, 500 ${height*0.5} T 500 ${height-10};M 500 10 Q 340 ${height*0.3}, 500 ${height*0.5} T 500 ${height-10};M 500 10 Q 350 ${height*0.3}, 500 ${height*0.5} T 500 ${height-10}`}
            dur="8s" repeatCount="indefinite" />
        </path>

        {/* Root hyphae branching from the road - left side */}
        <path d={`M 450 ${height*0.2} Q 350 ${height*0.25}, 300 ${height*0.3}`}
          stroke={`url(#hyphaeGrad-${fromColor})`} strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;8;0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d={`M 480 ${height*0.4} Q 400 ${height*0.45}, 350 ${height*0.5}`}
          stroke={`url(#hyphaeGrad-${fromColor})`} strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="3 3">
          <animate attributeName="stroke-dashoffset" values="0;6;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </path>
        <path d={`M 470 ${height*0.65} Q 380 ${height*0.7}, 320 ${height*0.75}`}
          stroke={`url(#hyphaeGrad-${fromColor})`} strokeWidth="1.8" fill="none" opacity="0.45" strokeDasharray="3 4">
          <animate attributeName="stroke-dashoffset" values="0;7;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </path>

        {/* Root hyphae branching from the road - right side */}
        <path d={`M 550 ${height*0.25} Q 650 ${height*0.3}, 700 ${height*0.35}`}
          stroke={`url(#hyphaeGrad-${fromColor})`} strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;8;0" dur="3.2s" repeatCount="indefinite" begin="0.3s" />
        </path>
        <path d={`M 520 ${height*0.5} Q 600 ${height*0.55}, 680 ${height*0.6}`}
          stroke={`url(#hyphaeGrad-${fromColor})`} strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="3 3">
          <animate attributeName="stroke-dashoffset" values="0;6;0" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
        </path>
        <path d={`M 530 ${height*0.75} Q 620 ${height*0.78}, 690 ${height*0.82}`}
          stroke={`url(#hyphaeGrad-${fromColor})`} strokeWidth="1.8" fill="none" opacity="0.45" strokeDasharray="3 4">
          <animate attributeName="stroke-dashoffset" values="0;7;0" dur="3.3s" repeatCount="indefinite" begin="1.2s" />
        </path>

        {/* Mushrooms sprouting along the path - ENHANCED with glowing, growing, sparkling */}
        {/* Mushroom 1 - left side */}
        <g transform={`translate(380, ${height*0.3})`}>
          <ellipse cx="0" cy="0" rx="15" ry="18" fill={fromColor} opacity="0.08">
            <animate attributeName="opacity" values="0.08;0.18;0.08" dur="3s" repeatCount="indefinite" />
            <animate attributeName="rx" values="15;17;15" dur="3s" repeatCount="indefinite" />
            <animate attributeName="ry" values="18;20;18" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <rect x="-4" y="8" width="8" height="12" rx="2" fill={fromColor} opacity="0.7">
            <animate attributeName="fill" values={`${fromColor};${toColor};${fromColor}`} dur="4s" repeatCount="indefinite" />
            <animate attributeName="height" values="12;13;12" dur="3s" repeatCount="indefinite" />
          </rect>
          <path d="M 0 -4 Q -10 -2, -12 8 Q -12 12, -8 14 L 8 14 Q 12 12, 12 8 Q 10 -2, 0 -4 Z" fill={toColor} opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </path>
          <circle cx="-5" cy="4" r="1.5" fill="#fbbf24" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="3" cy="3" r="1" fill="#fbbf24" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          {/* Sparkles around mushroom */}
          <circle cx="-12" cy="0" r="1" fill="#a78bfa">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="12" cy="2" r="1.2" fill="#ec4899">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>

        {/* Mushroom 2 - center - LARGEST with most glow */}
        <g transform={`translate(500, ${height*0.5})`}>
          <ellipse cx="0" cy="0" rx="18" ry="22" fill={toColor} opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="rx" values="18;21;18" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="ry" values="22;25;22" dur="3.5s" repeatCount="indefinite" />
          </ellipse>
          <rect x="-5" y="10" width="10" height="15" rx="2.5" fill={toColor} opacity="0.75">
            <animate attributeName="fill" values={`${toColor};${fromColor};${toColor}`} dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="height" values="15;17;15" dur="3.5s" repeatCount="indefinite" />
          </rect>
          <path d="M 0 -5 Q -12 -3, -14 10 Q -14 15, -10 18 L 10 18 Q 14 15, 14 10 Q 12 -3, 0 -5 Z" fill={fromColor} opacity="0.85">
            <animate attributeName="opacity" values="0.85;1;0.85" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <circle cx="-6" cy="5" r="2" fill="#a78bfa" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="4" cy="4" r="1.5" fill="#a78bfa" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="0" cy="8" r="1.8" fill="#a78bfa" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
          {/* MORE sparkles around center mushroom */}
          <circle cx="-15" cy="-2" r="1.5" fill="#fbbf24">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="15" cy="0" r="1.3" fill="#ec4899">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="0" cy="-8" r="1.2" fill="#a78bfa">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>

        {/* Mushroom 3 - right side */}
        <g transform={`translate(620, ${height*0.7})`}>
          <ellipse cx="0" cy="0" rx="14" ry="17" fill={toColor} opacity="0.09">
            <animate attributeName="opacity" values="0.09;0.16;0.09" dur="3.2s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="rx" values="14;16;14" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="ry" values="17;19;17" dur="3.2s" repeatCount="indefinite" />
          </ellipse>
          <rect x="-3.5" y="7" width="7" height="11" rx="2" fill={fromColor} opacity="0.7">
            <animate attributeName="fill" values={`${fromColor};${toColor};${fromColor}`} dur="4.2s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="height" values="11;12;11" dur="3.2s" repeatCount="indefinite" />
          </rect>
          <path d="M 0 -3 Q -9 -1, -11 7 Q -11 11, -7 13 L 7 13 Q 11 11, 11 7 Q 9 -1, 0 -3 Z" fill={toColor} opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3.2s" repeatCount="indefinite" begin="1s" />
          </path>
          <circle cx="-4" cy="3" r="1.3" fill="#ec4899" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="2" cy="2" r="1" fill="#ec4899" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          {/* Sparkles */}
          <circle cx="-10" cy="1" r="1.1" fill="#fbbf24">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="10" cy="-1" r="1.3" fill="#a78bfa">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
          </circle>
        </g>

        {/* Glitter particles along the road */}
        <circle cx="450" cy={height*0.15} r="1.5" fill="#fbbf24">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="520" cy={height*0.35} r="1.2" fill="#a78bfa">
          <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="480" cy={height*0.6} r="1.3" fill="#ec4899">
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="530" cy={height*0.85} r="1.4" fill="#fbbf24">
          <animate attributeName="opacity" values="0;1;0" dur="2.3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
    </div>
  );
}

// Roadmap Section Component
function RoadmapSection() {
  const roadmapPhases = [
    {
      phase: "Phase 1: Psanctuary Foundation",
      status: "Current",


      color: "#7c3aed",
      items: [
        "Sacred token burning ritual - Ceremonial ETHO offerings",
        "Mushroom NFT cultivation - Collectible genetic strains",
        "DAO governance structure - Community-driven decisions",
        "AMM for ETHO/PSD trading - Decentralized exchange",
        "Crowdsale for initial funding - PSILO token distribution"
      ]
    },
    {
      phase: "Phase 2: Psychedelics In Recovery (PIR) Integration",
      status: "Q2 2026",
      color: "#ec4899",
      items: [
        "Expand DAO to support 12-step recovery fellowship",
        "Fund research on psychedelic-assisted recovery",
        "Create social network for spiritual wholeness",
        "Gamified governance for community engagement",
        "Educational resources and peer support systems"
      ]
    },
    {
      phase: "Phase 3: Circle of Light Fellowship",
      status: "In Collaboration",
      color: "#22c55e",
      items: [
        "Integrate Circle of Light Fellowship into Psanctuary ecosystem",
        "Bridge outreach with PIR and OneSelf communities",
        "Publish Fellowship FAQ and program guidance",
        "Emphasize responsibility and God‑centered healing",
        "Expand support groups, education, and advocacy"
      ]
    },
    {
      phase: "Phase 4: Policy Reform & Advocacy",
      status: "Q4 2026",
      color: "#fbbf24",
      items: [
        "State-level decriminalization voting mechanisms",
        "Religious sacrament legal framework development",
        "Psilocybin access for spiritual use advocacy",
        "Educational outreach programs for public awareness",
        "Partnership with reform organizations"
      ]
    }
  ];

  return (
    <div id="roadmap" className="content-section" style={{ marginTop: '80px', marginBottom: '80px' }}>
      {/* Roadmap Section Title */}
      <RoadmapTitleSVG />

      <p className="page-subtitle" style={{ textAlign: 'center', margin: '0 auto 24px', maxWidth: '800px' }}>
        Embark on our shared journey of recovery<br />
        Fueled by sacred offerings
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '48px'
      }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))' }} />
        </motion.div>
        <p className="page-subtitle" style={{ margin: 0 }}>
          Progressing towards global transformation & healing
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))' }} />
        </motion.div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '40px', position: 'relative' }}>

        {roadmapPhases.map((phase, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
            <Card className="feature-card" style={{
              background: `linear-gradient(135deg, ${phase.color}15, ${phase.color}05)`,
              border: `2px solid ${phase.color}40`,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1
            }}>
              {/* Phase Indicator */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '6px 16px',
                background: phase.color,
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#fff'
              }}>
                {phase.status}
              </div>

              <CardContent style={{ padding: '32px' }}>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: phase.color,
                  marginBottom: '24px',
                  textShadow: `0 0 20px ${phase.color}40`
                }}>
                  {phase.phase}
                </h3>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '12px'
                }}>
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '1.05rem',
                        color: '#d1d5db'
                      }}
                    >
                      <span style={{
                        color: phase.color,
                        fontSize: '1.25rem',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        ✦
                      </span>
                      <span>
                        <TypewriterText
                          text={item}
                          delay={index * 400 + itemIndex * 200}
                        />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          {index < roadmapPhases.length - 1 && (
            <MycelialConnector fromColor={phase.color} toColor={roadmapPhases[index + 1].color} height={200} />
          )}
        </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [isImagineModalOpen, setIsImagineModalOpen] = useState(false);

  const navigate = useNavigate();
  const [isOracleModalOpen, setIsOracleModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  // Merge in agent details (capabilities, decisions, roadmap) from processed docs
  const detailsLookup = useMemo(() => {
    const map = {};
    try {
      (agentDetails.details || []).forEach((entry) => {
        if (entry && entry.name && entry.details) map[entry.name] = entry.details;
      });
    } catch {}
    return map;
  }, []);

  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  // Handler for opening agent modal
  const openAgentModal = (agent) => {
    const merged = detailsLookup[agent.name] ? { ...agent, details: detailsLookup[agent.name] } : agent;
    setSelectedAgent(merged);
    setIsAgentModalOpen(true);
  };

  // Responsive viewport tracking to adjust agent grid layout
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const isMobile = vw < 768;
  const isTablet = vw >= 768 && vw < 1280;

  // Responsive styles: horizontal scroll on mobile, 3 columns on tablet, 5 columns on desktop
  const agentGridStyle = isMobile
    ? {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'minmax(260px, 1fr)',
        gap: 16,
        maxWidth: '100%',
        width: '100%',
        margin: '12px auto 0',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        overscrollBehaviorX: 'contain',
        paddingBottom: 8,
        justifyItems: 'stretch',
        alignItems: 'stretch'
      }
    : {
        display: 'grid',
        gridTemplateColumns: isTablet ? 'repeat(3, minmax(260px, 1fr))' : 'repeat(5, minmax(260px, 1fr))',
        gap: 20,
        maxWidth: 2400,
        width: '100%',
        margin: '16px auto 0',
        justifyContent: 'center',
        justifyItems: 'stretch',
        alignItems: 'stretch'
      };


  // Scroll to top when component mounts (fixes issue where page stays scrolled after clicking sidebar buttons)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="landing-container" style={{
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${process.env.PUBLIC_URL}/images/EO.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.22} size={900} />
      <ScatteredBlockchainCubes />
      <NeighboringNetwork isHomePage={true} />
      <MycelialNetwork sourceId="landing-title" />

      {/* FAQ Jump Button - Top Right */}
      {/* Scrolls so FAQ title appears at top of viewport, accounting for navbar */}
      <motion.button
        className="faq-jump-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => {
          const faqSection = document.getElementById('faq');
          const navHeight = document.querySelector('.navigation')?.offsetHeight || 80;
          if (faqSection) {
            const elementPosition = faqSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight - 20; // 20px extra buffer
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
        title="Jump to FAQ"
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 20px)',
          right: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3))',
          border: '2px solid rgba(124, 58, 237, 0.5)',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
          transition: 'all 0.3s ease',
          overflow: 'visible'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.4)';
        }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', pointerEvents: 'none' }}>
          {/* Sparkle stars - SCATTERED WITHIN CIRCLE RADIUS */}
          <circle cx="18" cy="15" r="1.2" fill="#fbbf24" opacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="38" cy="18" r="0.9" fill="#a78bfa" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="15" cy="38" r="1.1" fill="#ec4899" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="40" cy="40" r="0.8" fill="#22d3ee" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
          </circle>
        </svg>
        <HelpCircle size={28} style={{ color: '#a78bfa' }} className="force-heartbeat" />
      </motion.button>

      {/* Roadmap Jump Button - Below FAQ - DIAMOND BUTTON WITH UPRIGHT SIGN */}
      <motion.button
        className="roadmap-jump-button"
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 45 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onClick={() => {
          const roadmapSection = document.getElementById('roadmap');
          const navHeight = document.querySelector('.navigation')?.offsetHeight || 80;
          if (roadmapSection) {
            const elementPosition = roadmapSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight - 20;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
        title="Jump to Roadmap"
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 222px)',
          right: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(249, 115, 22, 0.3))',
          border: '2px solid rgba(251, 191, 36, 0.5)',
          borderRadius: '12px',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
          filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.5))',
          overflow: 'visible',
          padding: '6px'
        }}
        whileHover={{ scale: 1.1, rotate: 40 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 6px 12px rgba(251, 191, 36, 0.7))';
          e.currentTarget.style.transition = 'all 0.3s ease';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.5))';
          e.currentTarget.style.transition = 'all 0.3s ease';
        }}
      >
        {/* Sparkle stars - SCATTERED WITHIN - COUNTER-ROTATE */}
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', pointerEvents: 'none', transform: 'rotate(-45deg)' }}>
          <circle cx="16" cy="18" r="1.2" fill="#fbbf24" opacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="16" r="0.9" fill="#f97316" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="16" cy="38" r="1.1" fill="#fbbf24" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="40" cy="40" r="0.8" fill="#fb923c" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
          </circle>
        </svg>
        {/* Road sign SVG with wavy lines - COUNTER-ROTATE TO STAY UPRIGHT */}
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-45deg)' }}>
          <rect x="10" y="20" width="80" height="40" rx="4" fill="#fbbf24" opacity="0.9" />
          <rect x="45" y="60" width="10" height="30" fill="#fbbf24" opacity="0.8" />
          {/* Wavy lines like title roadmap */}
          <path d="M 20 30 Q 35 28 50 30 T 80 30" stroke="#000" strokeWidth="2.5" fill="none">
            <animate attributeName="d" values="M 20 30 Q 35 28 50 30 T 80 30;M 20 30 Q 35 32 50 30 T 80 30;M 20 30 Q 35 28 50 30 T 80 30" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 20 40 Q 35 38 50 40 T 75 40" stroke="#000" strokeWidth="2.5" fill="none">
            <animate attributeName="d" values="M 20 40 Q 35 38 50 40 T 75 40;M 20 40 Q 35 42 50 40 T 75 40;M 20 40 Q 35 38 50 40 T 75 40" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <path d="M 20 50 Q 35 48 50 50 T 70 50" stroke="#000" strokeWidth="2.5" fill="none">
            <animate attributeName="d" values="M 20 50 Q 35 48 50 50 T 70 50;M 20 50 Q 35 52 50 50 T 70 50;M 20 50 Q 35 48 50 50 T 70 50" dur="3s" repeatCount="indefinite" begin="1s" />
          </path>
        </svg>
      </motion.button>

      {/* Oracle Jump Button - Below Roadmap */}
      <motion.button
        className="oracle-jump-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onClick={() => {
          const oracleSection = document.getElementById('oracle-of-fruit');
          const navHeight = document.querySelector('.navigation')?.offsetHeight || 80;
          if (oracleSection) {
            const elementPosition = oracleSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight - 20;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
        title="Meet the Oracle of Fruit"
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 222px)',
          right: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3))',
          border: '2px solid rgba(34, 197, 94, 0.5)',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)',
          transition: 'all 0.3s ease',
          overflow: 'visible',
          filter: 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.5))'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.6)';
          e.currentTarget.style.filter = 'drop-shadow(0 6px 12px rgba(34, 197, 94, 0.7))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.4)';
          e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.5))';
        }}
      >
        {/* Sparkle stars - SCATTERED WITHIN CIRCLE */}
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <circle cx="20" cy="16" r="1.2" fill="#22c55e" opacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="36" cy="18" r="0.9" fill="#10b981" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="16" cy="36" r="1.1" fill="#34d399" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="38" cy="38" r="0.8" fill="#6ee7b7" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
          </circle>
        </svg>
        {/* Watcher's Eye SVG with looking around animation */}
        <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="40" ry="25" stroke="#22c55e" strokeWidth="4" fill="none" />
          <g>
            {/* Pupil group that moves left-right */}
            <circle r="15" fill="#22c55e">
              <animate attributeName="cx" values="50;45;50;55;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50;50;50;50;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="r" values="15;17;15;17;15" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="8" fill="#000">
              <animate attributeName="cx" values="50;45;50;55;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50;50;50;50;50" dur="6s" repeatCount="indefinite" />
              <animate attributeName="r" values="8;6;8;6;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="white" opacity="0.8">
              <animate attributeName="cx" values="46;41;46;51;46" dur="6s" repeatCount="indefinite" />
              <animate attributeName="cy" values="46;46;46;46;46" dur="6s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </motion.button>

      {/* Whitepaper Jump Button - LEFT SIDE - SAME HEIGHT AS ROADMAP - DIAMOND BORDER WITH UPRIGHT SVG */}
      <motion.button
        className="whitepaper-jump-button"
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: -45 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onClick={() => window.open('https://drasticstatic.github.io/gratitude-token-project_docs/', '_blank')}
        title="View Whitepaper"
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 90px)',
          left: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3))',
          border: '2px solid rgba(59, 130, 246, 0.5)',
          borderRadius: '12px',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
          filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.5))',
          overflow: 'visible',
          padding: '6px'
        }}
        whileHover={{ scale: 1.1, rotate: -40 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 6px 12px rgba(59, 130, 246, 0.7))';
          e.currentTarget.style.transition = 'all 0.3s ease';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.5))';
          e.currentTarget.style.transition = 'all 0.3s ease';
        }}
      >
        {/* Container for stars and scroll - COUNTER-ROTATE */}
        <div style={{ transform: 'rotate(45deg)', position: 'relative', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Sparkle stars AROUND the scroll (not on it) - BLUE - ROTATED 45 DEGREES */}
          <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', pointerEvents: 'none', transform: 'rotate(45deg)' }}>
            <circle cx="12" cy="14" r="1.5" fill="#3b82f6" opacity="0.9">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="44" cy="12" r="1.2" fill="#60a5fa" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <circle cx="10" cy="42" r="1.3" fill="#3b82f6" opacity="0.9">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
            </circle>
            <circle cx="44" cy="44" r="1.1" fill="#60a5fa" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
            </circle>
          </svg>
          {/* Animated Scroll - BIGGER */}
          <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Scroll/document shape */}
            <rect x="22" y="12" width="56" height="76" rx="4" fill="#3b82f6" opacity="0.8" />
            <rect x="27" y="17" width="46" height="66" rx="2" fill="#60a5fa" opacity="0.6" />
            {/* Animated text lines */}
            <line x1="32" y1="28" x2="68" y2="28" stroke="#dbeafe" strokeWidth="2.5">
              <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="32" y1="40" x2="68" y2="40" stroke="#dbeafe" strokeWidth="2.5">
              <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <line x1="32" y1="52" x2="68" y2="52" stroke="#dbeafe" strokeWidth="2.5">
              <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="32" y1="64" x2="58" y2="64" stroke="#dbeafe" strokeWidth="2.5">
              <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </line>
          </svg>
        </div>
      </motion.button>

      {/* Church Jump Button - LEFT SIDE - SAME HEIGHT AS ORACLE - UNIFORM SIZE WITH HOVER LIGHT */}
      <motion.button
        className="church-jump-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onClick={() => window.open('https://www.psanctuary.org', '_blank')}
        title="Explore Psanctuary Church"
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 160px)',
          left: '20px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(180, 83, 9, 0.3), rgba(217, 119, 6, 0.3))',
          border: '2px solid rgba(217, 119, 6, 0.5)',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(217, 119, 6, 0.4)',
          transition: 'all 0.3s ease',
          overflow: 'visible'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(217, 119, 6, 0.6)';
          // Enlarge cross MORE on hover
          const cross = e.currentTarget.querySelector('.church-cross');
          if (cross) cross.style.transform = 'scale(1.5)';
          // Show light rays on hover
          const lightRays = e.currentTarget.querySelector('.church-light-rays');
          if (lightRays) lightRays.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 6, 0.4)';
          // Reset cross
          const cross = e.currentTarget.querySelector('.church-cross');
          if (cross) cross.style.transform = 'scale(1)';
          // Hide light rays
          const lightRays = e.currentTarget.querySelector('.church-light-rays');
          if (lightRays) lightRays.style.opacity = '0';
        }}
      >
        {/* Sparkle stars - SCATTERED WITHIN CIRCLE */}
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <circle cx="18" cy="16" r="1.2" fill="#fbbf24" opacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="38" cy="18" r="0.9" fill="#d97706" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="16" cy="38" r="1.1" fill="#f59e0b" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="40" cy="40" r="0.8" fill="#fbbf24" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
          </circle>
        </svg>
        {/* Church icon - EVEN BIGGER SVG WITHIN BUTTON */}
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Church building */}
          <rect x="35" y="55" width="30" height="30" fill="#b45309" opacity="0.9" />
          {/* Roof */}
          <polygon points="50,35 25,55 75,55" fill="#92400e" opacity="0.9" />
          {/* Steeple */}
          <rect x="46" y="25" width="8" height="15" fill="#92400e" opacity="0.9" />
          {/* Cross on top - with class for hover effect */}
          <g className="church-cross" style={{ transformOrigin: '50px 21.5px', transition: 'transform 0.3s ease' }}>
            <line x1="50" y1="15" x2="50" y2="28" stroke="#fbbf24" strokeWidth="2.5">
              <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="45" y1="20" x2="55" y2="20" stroke="#fbbf24" strokeWidth="2.5">
              <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
            </line>
          </g>
          {/* Door */}
          <rect x="45" y="70" width="10" height="15" rx="2" fill="#78350f" opacity="0.9" />
          {/* Windows with glow */}
          <rect x="38" y="62" width="6" height="6" fill="#fbbf24" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
          </rect>
          <rect x="56" y="62" width="6" height="6" fill="#fbbf24" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </rect>
          {/* Light rays pouring out - HIDDEN BY DEFAULT, SHOWN ON HOVER */}
          <g className="church-light-rays" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}>
            {/* Light from left window */}
            <line x1="41" y1="65" x2="35" y2="75" stroke="#fbbf24" strokeWidth="1.5" opacity="0.7" />
            <line x1="41" y1="65" x2="30" y2="72" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
            {/* Light from right window */}
            <line x1="59" y1="65" x2="65" y2="75" stroke="#fbbf24" strokeWidth="1.5" opacity="0.7" />
            <line x1="59" y1="65" x2="70" y2="72" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
            {/* Light from door */}
            <line x1="50" y1="77" x2="50" y2="88" stroke="#fbbf24" strokeWidth="2" opacity="0.8" />
            <line x1="50" y1="77" x2="45" y2="86" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="77" x2="55" y2="86" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
          </g>
        </svg>
      </motion.button>

      {/* 404 "Lost?" Button - TOP LEFT - CREATIVE & MYSTICAL - SAME HEIGHT AS FAQ */}
      <motion.button
        className="lost-404-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => window.location.href = '/404'}
        title="Feeling lost? Find your way..."
        style={{
          position: 'fixed',
          top: 'calc(var(--nav-height, 80px) + 20px)',
          left: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.3), rgba(124, 58, 237, 0.3))',
          border: '2px solid rgba(168, 85, 247, 0.5)',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
          transition: 'all 0.3s ease',
          overflow: 'visible'
        }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.4)';
        }}
      >
        {/* Sparkle stars */}
        <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <circle cx="18" cy="16" r="1.2" fill="#a78bfa" opacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="38" cy="18" r="0.9" fill="#ec4899" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="16" cy="38" r="1.1" fill="#a78bfa" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="40" cy="40" r="0.8" fill="#ec4899" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
          </circle>
        </svg>
        {/* 404 text with mystical glow */}
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50" y="60" fontSize="32" fontWeight="bold" fill="#a78bfa" textAnchor="middle" fontFamily="Arial, sans-serif">
            404
            <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
          </text>
          {/* Mystical circle around 404 */}
          <circle cx="50" cy="50" r="35" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.button>

      {/* Hero Section with Enhanced Background */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-section"
        style={{
          position: 'relative',
          padding: 'calc(var(--nav-height, 0px) + 80px) 20px 80px',
        }}
      >
        {/* HeroNetwork - Watermark effect, independently positionable */}
        <div style={{
          position: 'absolute',
          top: '200px', // Adjust this value freely without affecting other elements
          left: 0,
          right: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.9 // Slightly transparent for watermark effect
        }}>
          <HeroNetwork />
        </div>
        <div id="landing-title" style={{ position: 'relative', zIndex: 1 }}>
          <MycelialTitle title={`Ethereal\nOffering`} size={88} isHomePage={true} showBackground={true} />
          {/* Spacer to ensure subtitle/tagline sit below the hero SVG ring */}
          <div style={{ height: '120px' }} />

          <p className="hero-subtitle">
            Burn tokens. Grow mushrooms. Shape the DAO. Experience the ritual of giving.
          </p>
          <p className="hero-tagline" style={{
            fontSize: '1.125rem',
            color: '#d1d5db',
            marginTop: '16px',
            fontStyle: 'italic',
            textAlign: 'center'
          }}>
            "We are co-creating a living system rooted in trust, transparency, and Spirit-led generosity."
          </p>

          {/* Inline info section - GOLDEN DROP SHADOW */}
          <div style={{ filter: 'drop-shadow(0 6px 12px rgba(251, 191, 36, 0.7))' }}>
            <InfoSection
              title="✨ What is Ethereal Offering"
              compact={true}
              items={[
                { heading: 'Web3 for Sacred Aid', color: '#a78bfa', content: 'We use blockchain to bring transparency and speed to humanitarian and spiritual offerings—settlement is verifiable, auditable, and community-directed.' },
                { heading: 'Project Mechanics', color: '#fbbf24', content: 'Offerings (token burns), Mushroom NFTs (collect, evolve, and cross-breed), DAO governance (proposals + votes), Crowdsale/Donations (PSD), and an AMM swap for community liquidity.' },
                { heading: 'Our Mission', color: '#7c3aed', content: 'To steward a living, decentralized ceremonial economy that honors sacred giving, cultivates wisdom, and empowers community-led growth.' }
              ]}
            />
          </div>
          {/* Imagine modal trigger */}
          <div style={{ textAlign: 'center', marginTop: 0, marginBottom: 20 }}>
            <button
              onClick={() => setIsImagineModalOpen(true)}
              style={{
                padding: '10px 16px', borderRadius: 10,
                background: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(251,191,36,0.25))',
                border: '2px solid rgba(236,72,153,0.6)', color: '#f472b6', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(236,72,153,0.4)',
                filter: 'drop-shadow(0 4px 8px rgba(251, 36, 183, 0.6))',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(236,72,153,0.6)';
                e.currentTarget.style.filter = 'drop-shadow(0 6px 12px rgba(251, 36, 183, 0.7))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(236,72,153,0.4)';
                e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(251, 36, 183, 0.6))';
              }}
            >
              Click HERE to step into the Vision
            </button>
          </div>
          {/* Whitepaper + Church buttons ABOVE Oracle - COMBINED ICON + BUTTON */}
          <div className="button-group" style={{ marginBottom: 20 }}>
            {/* Whitepaper Button - BLUE COLOR SCHEME - Icon integrated into button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drasticstatic.github.io/gratitude-token-project_docs/', '_blank')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '20px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.2))',
                border: '2px solid rgba(59, 130, 246, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <WhitepaperScrollIcon size={70} />
              <span style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#60a5fa',
                textAlign: 'center'
              }}>
                View Our Whitepaper
              </span>
            </motion.div>

            {/* Church Button - Icon integrated into button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.psanctuary.org', '_blank')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '20px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(180, 83, 9, 0.2), rgba(217, 119, 6, 0.2))',
                border: '2px solid rgba(217, 119, 6, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <SpiritualFoundationIcon size={70} />
              <span style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#d97706',
                textAlign: 'center'
              }}>
                Explore Psanctuary Church
              </span>
            </motion.div>
          </div>

          {/* Oracle of Fruit Chat Access */}
          <div id="oracle-of-fruit" className="oracle-sparkly" style={{ maxWidth: 960, margin: '20px auto', textAlign: 'center' }}>
            <div style={{
              padding: '18px', borderRadius: 12,
              background: 'rgba(34,197,94,0.15)',
              border: '1px solid rgba(34,197,94,0.35)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)'
            }}>
              {/* Title with Oracle Eye SVGs */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '8px'
              }}>
                {/* Left Oracle Eye */}
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="50" rx="40" ry="25" stroke="#22c55e" strokeWidth="4" fill="none" />
                  <g>
                    <circle cx="50" cy="50" r="12" fill="#22c55e">
                      <animate attributeName="cx" values="45;55;45" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="50" r="6" fill="#10b981">
                      <animate attributeName="cx" values="45;55;45" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>

                <h2 style={{
                  color: '#22c55e',
                  margin: 0,
                  filter: 'drop-shadow(0 2px 6px rgba(34, 197, 94, 0.5))'
                }}>
                  Oracle of Fruit
                </h2>

                {/* Right Oracle Eye */}
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="50" rx="40" ry="25" stroke="#22c55e" strokeWidth="4" fill="none" />
                  <g>
                    <circle cx="50" cy="50" r="12" fill="#22c55e">
                      <animate attributeName="cx" values="55;45;55" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="50" r="6" fill="#10b981">
                      <animate attributeName="cx" values="55;45;55" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
              </div>

              <p style={{ color: '#d1d5db', marginBottom: 12 }}>
                Ask the Oracle and its helper agents for guidance on offerings, rituals, and the path of recovery.
              </p>
              <button onClick={() => setIsOracleModalOpen(true)}
                style={{
                  padding: '10px 16px', borderRadius: 10,
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.3))',
                  border: '2px solid rgba(34,197,94,0.6)', color: '#22c55e', cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(34,197,94,0.4)',
                  filter: 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.5))',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 2
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(34,197,94,0.6)';
                  e.currentTarget.style.filter = 'drop-shadow(0 6px 12px rgba(34, 197, 94, 0.7))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(34,197,94,0.4)';
                  e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.5))';
                }}>
                Open Oracle of Fruit Chat
              </button>
            </div>
          </div>

          {/* Oracle explainer - GOLDEN DROP SHADOW */}
          <div style={{ filter: 'drop-shadow(0 6px 12px rgba(75, 251, 36, 0.7))' }}>
            <InfoSection
              title="🔮 More About the Oracle of Fruit"
              items={[
                { heading: 'Vision', color: '#a78bfa', content: 'A living agentic guide that helps members integrate experience, steward offerings, and co-create with wisdom. The Oracle weaves together on-chain events, ceremonial context, and community patterns.' },
                { heading: 'How it helps', color: '#fbbf24', content: 'Explains offerings and token flows, suggests governance proposals, tracks ceremonial memory, and offers reflective prompts for spiritual recovery.' },
                { heading: 'Privacy & Consent', color: '#7c3aed', content: 'Conversations are opt-in and respect community boundaries. The Oracle is a ritual assistant, not a therapist or financial advisor.' },
                { heading: 'Agent Capabilities', color: '#f472b6', content: 'Ceremonial guidance and integration prompts; token/NFT explainer; governance drafting and proposal templates; treasury transparency summaries; onboarding help; reminders for seasons and rituals; gratitude journaling cues; links to community support and harm reduction.' },
                { heading: 'Community Interaction', color: '#22c55e', content: 'Agents (Oracle of Fruit, Spore Sentinel, Flamekeeper, Treasury Guardian) collaborate: suggest actions, watch on-chain events, and surface insights in context. The Oracle is your gentle guide, not a gatekeeper.' }
              ]}
            />
          </div>

          {/* Agents explainer - GOLDEN DROP SHADOW */}
          <div style={{ filter: 'drop-shadow(0 6px 12px rgba(71, 147, 188, 0.7))' }}>
            <InfoSection
              title="🔮 Meet the Rest of the Crew"
              items={[
                { heading: 'Want to know more?', color: '#a78bfa', content: '↓ Click on each agent below to learn more about their role and capabilities ↓' },
              ]}
            />
          </div>

              {/* Oracle Agent Helpers - Compact Callouts - 4 columns for wider cards */}
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 12px', boxSizing: 'border-box' }}>
                <div style={agentGridStyle}>
                  {agentData.agents.map((agent) => (
                    <div
                      key={agent.id}
                      onClick={() => openAgentModal(agent)}
                      className="oracle-agent-card"
                      style={{
                        padding: '18px',
                        borderRadius: 10,
                        cursor: 'pointer',
                        background: `linear-gradient(135deg, ${agent.color}25, rgba(124,58,237,0.15))`,
                        border: `1px solid ${agent.color}66`,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 6px 16px ${agent.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '1.6rem', marginBottom: 6 }}>{agent.icon}</div>
                      <div style={{ color: agent.color, fontWeight: 600, fontSize: '0.92rem', marginBottom: 3, whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'anywhere', lineHeight: 1.2 }}>
                        {agent.name}
                      </div>
                      <div style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 500, marginBottom: 3, lineHeight: 1.2 }}>
                        {agent.title}
                      </div>
                      <div style={{ color: '#d1d5db', fontSize: '0.75rem', lineHeight: 1.3 }}>
                        {agent.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>

      </motion.div>

      {/* Features - Now Clickable! */}
      <div className="features-grid">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/daily-shrooms')}
          style={{ cursor: 'pointer' }}
        >
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title">Daily Shrooms 🌱</h3>
              <p className="feature-description">
                Log in daily to farm or mine your mushroom NFTs and watch your collection grow.
              </p>
              <p style={{
                marginTop: '12px',
                color: '#a78bfa',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Click to explore →
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/cross-breeding')}
          style={{ cursor: 'pointer' }}
        >
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title">Cross-Breeding 🍄</h3>
              <p className="feature-description">
                Combine different mushrooms to unlock rare hybrid strains and seasonal evolutions.
              </p>
              <p style={{
                marginTop: '12px',
                color: '#a78bfa',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Click to explore →
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/governance')}
          style={{ cursor: 'pointer' }}
        >
          <Card className="feature-card">
            <CardContent>
              <h3 className="feature-title">Governance 🛡️</h3>
              <p className="feature-description">
                Use your role NFTs and offerings to participate in DAO decisions and collective rituals.
              </p>
              <p style={{
                marginTop: '12px',
                color: '#a78bfa',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Click to explore →
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Rotating Quotes Section */}
      <RotatingQuotes />

      {/* FAQ Section */}
      <FAQSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Trippy Mushrooms - Decorative - ABUNDANT ON HOME PAGE (35+ mushrooms) */}
      {[
        { top: '8%', left: '4%', delay: 0, size: 75 },
        { top: '12%', right: '6%', delay: 1.2, size: 68 },
        { top: '18%', left: '8%', delay: 2.4, size: 82 },
        { top: '25%', right: '10%', delay: 0.6, size: 60 },
        { top: '32%', left: '5%', delay: 1.8, size: 88 },
        { top: '38%', right: '7%', delay: 3.0, size: 55 },
        { top: '45%', left: '6%', delay: 0.9, size: 78 },
        { top: '52%', right: '9%', delay: 2.1, size: 70 },
        { top: '58%', left: '7%', delay: 1.5, size: 85 },
        { top: '65%', right: '8%', delay: 2.7, size: 62 },
        { top: '72%', left: '5%', delay: 0.3, size: 76 },
        { top: '78%', right: '6%', delay: 1.9, size: 90 },
        { top: '85%', left: '8%', delay: 2.5, size: 58 },
        { bottom: '8%', right: '10%', delay: 1.1, size: 80 },
        { bottom: '15%', left: '9%', delay: 2.8, size: 66 },
        // Additional smaller mushrooms
        { top: '15%', left: '15%', delay: 0.7, size: 50 },
        { top: '28%', right: '14%', delay: 1.4, size: 92 },
        { top: '42%', left: '12%', delay: 2.2, size: 64 },
        { top: '55%', right: '13%', delay: 0.8, size: 72 },
        { top: '68%', left: '11%', delay: 1.6, size: 86 },
        { top: '82%', right: '12%', delay: 2.9, size: 54 },
        { bottom: '22%', left: '14%', delay: 1.3, size: 74 },
        { bottom: '35%', right: '15%', delay: 2.6, size: 68 },
        { top: '48%', left: '10%', delay: 0.5, size: 84 },
        { top: '62%', right: '11%', delay: 2.3, size: 70 },
        // EXTRA: Even more mushrooms for home page (35+ total)
        { top: '5%', left: '18%', delay: 0.4, size: 63 },
        { top: '10%', right: '20%', delay: 1.7, size: 79 },
        { top: '20%', left: '22%', delay: 2.5, size: 52 },
        { top: '35%', right: '18%', delay: 0.9, size: 87 },
        { top: '50%', left: '20%', delay: 1.8, size: 67 },
        { top: '60%', right: '22%', delay: 2.6, size: 73 },
        { top: '75%', left: '18%', delay: 0.2, size: 81 },
        { top: '88%', right: '20%', delay: 1.5, size: 56 },
        { bottom: '5%', left: '22%', delay: 2.2, size: 91 },
        { bottom: '28%', right: '19%', delay: 0.6, size: 65 }
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            pointerEvents: 'none',
            zIndex: 2
          }}
        >
          <TrippyMushroom size={pos.size} delay={pos.delay} />
        </div>
      ))}

      <Footer />

      {/* Oracle Modal */}
      <OracleModal isOpen={isOracleModalOpen} onClose={() => setIsOracleModalOpen(false)} />

      {/* Agent Modal */}
      <AgentModal
        isOpen={isAgentModalOpen}
        onClose={() => setIsAgentModalOpen(false)}
        agent={selectedAgent}
      />

      {/* Imagine Modal */}
      <ImagineModal isOpen={isImagineModalOpen} onClose={() => setIsImagineModalOpen(false)} />

    </div>
  );
}
