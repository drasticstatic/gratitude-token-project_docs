import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount, useChainId, useNetwork } from "wagmi";
import {
  Home, Sunrise, FlaskConical, Shield, Flame,
  Heart, ArrowDownUp, MessageCircle, User, Settings, Feather
} from "lucide-react";
import { generatePseudonym, spliceAddress } from "../utils/nameGenerator";
import { createSporeEffect } from "./effects/SporeEffect";
import CustomConnectButton, { getNetworkInfo } from "./CustomConnectButton";
import config from "../config.json";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pseudonym, setPseudonym] = useState("");
  const [lightweightMode, setLightweightMode] = useState(() => {
    // Load from localStorage, default to true (lightweight mode enabled by default)
    const saved = localStorage.getItem('lightweightMode');
    return saved === null ? true : saved === 'true';
  });
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { chain } = useNetwork();
  const navLinksRef = useRef([]);

  // Save lightweight mode to localStorage and dispatch event
  useEffect(() => {
    localStorage.setItem('lightweightMode', lightweightMode);
    window.dispatchEvent(new CustomEvent('lightweightModeChange', { detail: { enabled: lightweightMode } }));
  }, [lightweightMode]);

  const OWNER = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266".toLowerCase();
  const baseLinks = [
    { path: "/daily-shrooms", label: "Daily Shrooms", icon: Sunrise },
    { path: "/cross-breeding", label: "Cross-Breeding", icon: FlaskConical },
    { path: "/governance", label: "Governance", icon: Shield },
    { path: "/altar", label: "Altar Burn", icon: Flame },
    { path: "/donate", label: "Donate", icon: Heart },
    { path: "/swap", label: "Swap", icon: ArrowDownUp },
    { path: "/contact", label: "Contact", icon: MessageCircle },
  ];
  const isOwner = isConnected && address && address.toLowerCase() === OWNER;
  const navLinks = isOwner ? [...baseLinks, { path: "/admin", label: "Admin", icon: Settings }] : baseLinks;

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Generate pseudonym when wallet connects
  useEffect(() => {
    console.log('👤 Wallet connection status:', { isConnected, address });
    if (isConnected && address) {
      const name = generatePseudonym(address, config);
      console.log('✨ Generated pseudonym:', name);
      setPseudonym(name);
    } else {
      setPseudonym("");
    }
  }, [isConnected, address]);

  // Add spore effect to navigation links
  useEffect(() => {
    const sporeEnabled = config?.enableSporeEffect !== false;
    console.log('🌟 Spore effect enabled for nav links:', sporeEnabled);
    if (!sporeEnabled) return;

    const handleClick = (e) => {
      console.log('🔗 Nav link clicked, creating spore effect');
      createSporeEffect(e);
    };

    const links = navLinksRef.current;
    links.forEach(link => {
      if (link) {
        link.addEventListener('click', handleClick);
      }
    });

    return () => {
      links.forEach(link => {
        if (link) {
          link.removeEventListener('click', handleClick);
        }
      });
    };
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo + Home Button Combined */}
        <Link
          to="/"
          className="nav-logo"
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          onClick={(e) => {
            // If already on home page, scroll to top instead of navigating
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/EO.png`}
            alt="Ethereal Offering"
            className="nav-logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Home size={24} style={{ color: '#7c3aed' }} />
            <span style={{ color: '#a78bfa', fontSize: '0.95rem', fontWeight: '500' }}>Home</span>
          </div>
          <span className="nav-logo-text" style={{ display: 'none' }}>
            Ethereal Offering
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop" style={{ marginLeft: '24px' }}>
          {navLinks.map((link, index) => {
            const IconComponent = link.icon;
            const isAdminLink = link.path === "/admin";
            return (
              <Link
                key={link.path}
                to={link.path}
                ref={el => navLinksRef.current[index] = el}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''} ${isAdminLink ? 'nav-link-admin' : ''}`}
                style={isAdminLink ? {
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))',
                  border: '1px solid rgba(251,191,36,0.5)',
                  boxShadow: '0 0 15px rgba(251,191,36,0.4)',
                  animation: 'pulse 2s ease-in-out infinite'
                } : {}}
              >
                <span className="force-heartbeat" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <IconComponent
                    size={22}
                    className={isAdminLink ? "nav-link-icon nav-admin-icon" : "nav-link-icon nav-icon-heartbeat force-heartbeat"}
                  />
                </span>
                <span className="nav-link-label">{link.label}</span>
              </Link>
            );
          })}
        </div>


        {/* Psanctuary Icon */}
        <div style={{ marginLeft: '24px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/psanctuary-icon.webp`}
            alt="Psanctuary"
            style={{
              width: '45px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              objectFit: 'cover',
              animation: 'heartbeat 2s ease-in-out infinite'
            }}
            onClick={() => window.open('https://www.psanctuary.org', '_blank')}
          />
        </div>

        {/* Lightweight Mode Toggle Button */}
        <button
          onClick={() => setLightweightMode(!lightweightMode)}
          title={lightweightMode ? "Enable the Full Network" : "Enable Lightweight Mode"}
          style={{
            marginLeft: '16px',
            background: lightweightMode
              ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(124, 58, 237, 0.2))'
              : 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2))',
            border: lightweightMode
              ? '1.5px solid rgba(34, 211, 238, 0.5)'
              : '1.5px solid rgba(124, 58, 237, 0.5)',
            borderRadius: '41%',
            width: '41px',
            height: '41px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            animation: 'heartbeat 2s ease-in-out infinite',
            boxShadow: lightweightMode
              ? '0 0 15px rgba(34, 211, 238, 0.4)'
              : '0 0 15px rgba(124, 58, 237, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = lightweightMode
              ? '0 0 20px rgba(34, 211, 238, 0.6)'
              : '0 0 20px rgba(124, 58, 237, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = lightweightMode
              ? '0 0 15px rgba(34, 211, 238, 0.4)'
              : '0 0 15px rgba(124, 58, 237, 0.4)';
          }}
        >
          <Feather
            size={22}
            style={{
              color: lightweightMode ? '#22d3ee' : '#a78bfa',
              transition: 'color 0.3s ease'
            }}
          />
        </button>

        {/* Custom Wallet Connect Button */}
        <div className="nav-wallet" style={{ marginLeft: '16px' }}>
          <CustomConnectButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="nav-links-mobile">
          {navLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                ref={el => navLinksRef.current[navLinks.length + index] = el}
                className={`nav-link-mobile ${isActive(link.path) ? 'nav-link-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconComponent size={22} className="nav-link-icon" />
                <span className="nav-link-label">{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Welcome Message with Animated Electrical Circuit Effect */}
      {isConnected && address && config?.showWelcomeMessage !== false && (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '60px' }}>
          {/* Animated Electrical Circuit Background - Flowing when connected */}
          <svg
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.8,
              zIndex: 0
            }}
          >
            <defs>
              <linearGradient id="navCircuit" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed">
                  <animate attributeName="stop-color"
                    values="#7c3aed; #ec4899; #fbbf24; #22c55e; #7c3aed"
                    dur="4s" repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" stopColor="#ec4899">
                  <animate attributeName="stop-color"
                    values="#ec4899; #fbbf24; #22c55e; #7c3aed; #ec4899"
                    dur="4s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#fbbf24">
                  <animate attributeName="stop-color"
                    values="#fbbf24; #22c55e; #7c3aed; #ec4899; #fbbf24"
                    dur="4s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>
            </defs>
            <g stroke="url(#navCircuit)" strokeWidth="3" fill="none">
              {/* Main circuit paths */}
              <path d="M 0 60 Q 100 20, 200 50 T 400 60 T 600 40 T 800 55" strokeDasharray="10,5">
                <animate attributeName="stroke-dashoffset" from="0" to="30" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="d" dur="8s" repeatCount="indefinite"
                  values="M 0 60 Q 100 20, 200 50 T 400 60 T 600 40 T 800 55;
                          M 0 55 Q 100 30, 200 45 T 400 55 T 600 35 T 800 60;
                          M 0 60 Q 100 20, 200 50 T 400 60 T 600 40 T 800 55" />
              </path>
              <path d="M 0 70 Q 120 40, 240 70 T 480 70 T 720 45" opacity="0.7" strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="d" dur="10s" repeatCount="indefinite"
                  values="M 0 70 Q 120 40, 240 70 T 480 70 T 720 45;
                          M 0 65 Q 120 50, 240 65 T 480 65 T 720 50;
                          M 0 70 Q 120 40, 240 70 T 480 70 T 720 45" />
              </path>
              <path d="M 0 50 Q 150 10, 300 35 T 600 55 T 800 35" opacity="0.5" strokeDasharray="6,3">
                <animate attributeName="stroke-dashoffset" from="0" to="18" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="d" dur="12s" repeatCount="indefinite"
                  values="M 0 50 Q 150 10, 300 35 T 600 55 T 800 35;
                          M 0 45 Q 150 20, 300 40 T 600 50 T 800 40;
                          M 0 50 Q 150 10, 300 35 T 600 55 T 800 35" />
              </path>
              {/* Connection nodes */}
              <circle cx="200" cy="50" r="4" fill="#22c55e" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="400" cy="60" r="4" fill="#fbbf24" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="600" cy="40" r="4" fill="#ec4899" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>

          {/* Welcome Message - Semi-transparent to show circuit */}
          <div className="nav-welcome-banner" style={{
            position: 'relative',
            zIndex: 1,
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '0 20px'
          }}>
            <User size={20} style={{ color: '#7c3aed', marginRight: '8px' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#a78bfa' }}>
              Welcome back, {pseudonym ? (
                <span className="rainbow-pseudonym" style={{ fontWeight: 700 }}>
                  {pseudonym.split('').map((ch, i) => (
                    <span key={i} className="rainbow-letter" style={{ animationDelay: `${i * 0.08}s` }}>{ch}</span>
                  ))}
                </span>
              ) : (
                <span style={{ color: '#fbbf24', fontWeight: '600' }}>Loading...</span>
              )}
            </span>
            <span style={{
              fontSize: '0.875rem',
              color: '#9ca3af',
              marginLeft: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
                animation: 'pulse 2s ease-in-out infinite'
              }}/>
              ({spliceAddress(address)})
              {(() => {
                const networkInfo = getNetworkInfo({ id: chainId, name: chain?.name });
                const NetworkIcon = networkInfo.icon;
                return (
                  <>
                    <span style={{ margin: '0 4px' }}>•</span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: networkInfo.color
                    }}>
                      {networkInfo.imgSrc ? (
                        <img src={networkInfo.imgSrc} alt="network" width={18} height={18} style={{ display: 'block', flexShrink: 0, transformOrigin: 'center', animation: 'heartbeat 2s ease-in-out infinite, iconRocking 2.8s ease-in-out infinite' }} />
                      ) : NetworkIcon ? (
                        <NetworkIcon size={18} style={{ animation: 'heartbeat 2s ease-in-out infinite, iconRocking 2.8s ease-in-out infinite' }} />
                      ) : (
                        <span style={{ fontSize: '0.875rem' }}>{networkInfo.emoji}</span>
                      )}
                      {networkInfo.name}
                    </span>
                  </>
                );
              })()}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
