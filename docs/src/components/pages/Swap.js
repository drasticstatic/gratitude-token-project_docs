import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, CardContent } from "../LandingPage";
import { ethers } from "ethers";
import {
  loadProvider,
  loadNetwork,
  loadAccount,
  loadTokens,
  loadAMM,
  loadBalances,
  swap,
  addLiquidity,
  removeLiquidity,
  loadAllSwaps
} from "../../store/interactions";
import { Droplet, TrendingUp, Wallet, ArrowDownUp, Plus, Minus, HelpCircle, ChevronDown, ChevronLeft } from "lucide-react";
import TransactionHistory from "../TransactionHistory";
import MycelialTitle from "../MycelialTitle";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import FlashlightCursor from "../FlashlightCursor";
import SwapIcon from "../icons/SwapIcon";
import { celebrateTransaction } from "../effects/TransactionSporeEffect";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import PageInfo from "../PageInfo";
import TokenomicsFAQ from "../modals/TokenomicsFAQ";
import ERC20SwapModal from "../modals/ERC20SwapModal";
import Web3BrowserModal from "../modals/Web3BrowserModal";
import TrippyMushroom from "../TrippyMushroom";
import WalletConnectionBanner from "../WalletConnectionBanner";

export default function Swap() {
  const dispatch = useDispatch();

  // Redux state
  const provider = useSelector(state => state.provider.connection);
  const account = useSelector(state => state.provider.account);
  const tokens = useSelector(state => state.tokens.contracts);
  const symbols = useSelector(state => state.tokens.symbols);
  const balances = useSelector(state => state.tokens.balances);
  const amm = useSelector(state => state.amm.contract);
  const shares = useSelector(state => state.amm.shares);
  const swaps = useSelector(state => state.amm.swaps);
  const isSwapping = useSelector(state => state.amm.swapping.isSwapping);
  const isDepositing = useSelector(state => state.amm.depositing.isDepositing);
  const isWithdrawing = useSelector(state => state.amm.withdrawing.isWithdrawing);

  // Local state
  const [showLiquidityForm, setShowLiquidityForm] = useState(false);

  const [transactions, setTransactions] = useState([]);
  const [token1Amount, setToken1Amount] = useState(0);
  const [token2Amount, setToken2Amount] = useState(0);
  const [withdrawShares, setWithdrawShares] = useState(0);
  const [swapAmount, setSwapAmount] = useState(0);
  const [swapToken, setSwapToken] = useState(1);
  const [price, setPrice] = useState(0);

  const [currentBg, setCurrentBg] = useState(1);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showERC20Modal, setShowERC20Modal] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [showSafariWeb3, setShowSafariWeb3] = useState(false);

  // Detect Safari
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !ua.includes('chrome');
    setIsSafari(safari);
  }, []);

  // Alternate background images every 6 seconds (faster transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => prev === 1 ? 2 : 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Load blockchain data
  const loadBlockchainData = useCallback(async () => {
    try {
      // Initiate provider
      const provider = loadProvider(dispatch);

      // Fetch network
      const chainId = await loadNetwork(provider, dispatch);

      // Reload page when network changes
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      // Fetch accounts
      window.ethereum.on('accountsChanged', async () => {
        await loadAccount(dispatch);
      });

      // Load tokens
      await loadTokens(provider, chainId, dispatch);

      // Load AMM
      await loadAMM(provider, chainId, dispatch);

      // Load balances
      await loadAccount(dispatch);

    } catch (error) {
      console.error('Error loading blockchain data:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    loadBlockchainData();
  }, [loadBlockchainData]);

  // Load balances when account, tokens, or amm changes
  useEffect(() => {
    if (account && tokens[0] && tokens[1] && amm) {
      loadBalances(amm, tokens, account, dispatch);
    }
  }, [account, tokens, amm, dispatch]);

  // Load swaps
  useEffect(() => {
    if (provider && amm) {
      loadAllSwaps(provider, amm, dispatch);
    }
  }, [provider, amm, dispatch]);

  // Calculate price when swaps change
  useEffect(() => {
    if (swaps && swaps.length > 0) {
      const lastSwap = swaps[swaps.length - 1];
      const token1Amount = ethers.utils.formatUnits(lastSwap.args.token1Balance.toString(), 'ether');
      const token2Amount = ethers.utils.formatUnits(lastSwap.args.token2Balance.toString(), 'ether');
      setPrice(token2Amount / token1Amount);
    }
  }, [swaps]);

  const handleSwapTokens = () => {
    setSwapToken(swapToken === 1 ? 2 : 1);
  };

  const swapHandler = async (e) => {
    e.preventDefault();

    if (!provider || !amm || !tokens[0] || !tokens[1]) {
      alert('Please connect your wallet and ensure contracts are loaded');
      return;
    }

    try {
      const _token = swapToken === 1 ? tokens[0] : tokens[1];
      const _symbol = swapToken === 1 ? symbols[0] : symbols[1];
      const _amount = ethers.utils.parseUnits(swapAmount.toString(), 'ether');

      console.log('Initiating swap:', { symbol: _symbol, amount: swapAmount });

      const tx = await swap(provider, amm, _token, _symbol, _amount, dispatch);

      console.log('Swap transaction:', tx);

      // Add to transaction history
      if (tx) {
        const fromSymbol = swapToken === 1 ? symbols[0] : symbols[1];
        const toSymbol = swapToken === 1 ? symbols[1] : symbols[0];
        const newTx = {
          hash: tx.hash,
          type: `Swap ${fromSymbol} → ${toSymbol}`,
          amount: `${swapAmount} ${fromSymbol}`,
          from: account,
          to: amm.address,
          timestamp: Date.now(),
          status: 'success'
        };
        setTransactions(prev => [newTx, ...prev]);

        // Celebrate with spore effect!
        celebrateTransaction(`🔄 Swap Complete! ${swapAmount} ${fromSymbol} → ${toSymbol}`);

        // Reload balances
        await loadBalances(amm, tokens, account, dispatch);

        // Reset form
        setSwapAmount(0);
      } else {
        console.error('Swap failed: No transaction returned');
        alert('Swap failed. Please check console for details.');
      }
    } catch (error) {
      console.error('Swap error:', error);
      alert(`Swap failed: ${error.message || 'Unknown error'}`);
    }
  };

  const depositHandler = async (e) => {
    e.preventDefault();

    if (!provider || !amm || !tokens[0] || !tokens[1]) {
      alert('Please connect your wallet and ensure contracts are loaded');
      return;
    }

    const _token1Amount = ethers.utils.parseUnits(token1Amount.toString(), 'ether');
    const _token2Amount = ethers.utils.parseUnits(token2Amount.toString(), 'ether');

    const tx = await addLiquidity(provider, amm, tokens, [_token1Amount, _token2Amount], dispatch);

    // Add to transaction history
    if (tx) {
      const newTx = {
        hash: tx.hash,
        type: 'Add Liquidity',
        amount: `${token1Amount} ${symbols[0]} + ${token2Amount} ${symbols[1]}`,
        from: account,
        to: amm.address,
        timestamp: Date.now(),
        status: 'success'
      };
      setTransactions(prev => [newTx, ...prev]);
    }

    // Reload balances
    await loadBalances(amm, tokens, account, dispatch);

    // Reset form
    setToken1Amount(0);
    setToken2Amount(0);
  };

  const withdrawHandler = async (e) => {
    e.preventDefault();

    if (!provider || !amm) {
      alert('Please connect your wallet and ensure contracts are loaded');
      return;
    }

    const _shares = ethers.utils.parseUnits(withdrawShares.toString(), 'ether');

    const tx = await removeLiquidity(provider, amm, _shares, dispatch);

    // Add to transaction history
    if (tx) {
      const newTx = {
        hash: tx.hash,
        type: 'Remove Liquidity',
        amount: `${withdrawShares} Shares`,
        from: account,
        to: amm.address,
        timestamp: Date.now(),
        status: 'success'
      };
      setTransactions(prev => [newTx, ...prev]);
    }

    // Reload balances
    await loadBalances(amm, tokens, account, dispatch);

    // Reset form
    setWithdrawShares(0);
  };

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Alternating background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/swap${currentBg}.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 80px',
            backgroundAttachment: 'fixed',
            zIndex: -1,
          }}
        />
      </AnimatePresence>
      <FlashlightCursor />
      <PsanctuaryWatermark opacity={0.14} size={800} />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="swap-title" />
      <PageInfo pageTitle="Token Swap" description="Exchange ETHO and PSD tokens through the automated market maker. Add liquidity to earn fees and support the sacred economy." />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="swap-title">
          <MycelialTitle icon={SwapIcon} title="Token Swap" size={72} />
        </div>

        <p className="page-subtitle">
          "Exchange tokens seamlessly through our Automated Market Maker"
        </p>

        {/* FAQ Help Button - REPOSITIONED BELOW SUBTITLE */}
        <motion.button
          onClick={() => setShowFAQ(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '12px 24px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3))',
            border: '2px solid rgba(124, 58, 237, 0.5)',
            color: '#a78bfa',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            margin: '20px auto',
            display: 'block',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
          Learn More About Tokenomics
        </motion.button>

        {/* ERC20 Swap Help Button - Purple */}
        <motion.button
          onClick={() => setShowERC20Modal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '12px 24px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3))',
            border: '2px solid rgba(124, 58, 237, 0.5)',
            color: '#a78bfa',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            margin: '20px auto',
            display: 'block',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          <HelpCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
          Understanding ERC20 Tokens in Swaps
        </motion.button>

        {/* Connection Warning */}
        {!account && !showFAQ && !showERC20Modal && (
          <WalletConnectionBanner message="Connect your wallet to use the AMM" />
        )}

        {/* Pool Stats */}
        <div className="features-grid" style={{ marginTop: '40px', marginBottom: '60px' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Droplet size={48} style={{ color: '#3b82f6', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">{symbols[0] || 'Token 1'} Reserve</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    {amm && swaps.length > 0
                      ? Number(ethers.utils.formatUnits(swaps[swaps.length - 1].args.token1Balance, 'ether')).toFixed(2)
                      : '0'}
                  </p>
                  <p className="feature-description">Pool liquidity</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <TrendingUp size={48} style={{ color: '#22c55e', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">{symbols[1] || 'Token 2'} Reserve</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    {amm && swaps.length > 0
                      ? Number(ethers.utils.formatUnits(swaps[swaps.length - 1].args.token2Balance, 'ether')).toFixed(2)
                      : '0'}
                  </p>
                  <p className="feature-description">Pool liquidity</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Wallet size={48} style={{ color: '#fbbf24', margin: '0 auto 16px' }} />
                  <h3 className="feature-title">Your LP Tokens</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    {shares ? Number(shares).toFixed(2) : '0'}
                  </p>
                  <p className="feature-description">Liquidity provider shares</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Swap Interface */}
        <div className="content-section">
          <h2 className="section-title">Swap Tokens</h2>
          <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }} className="swap-section">
            <Card className="feature-card" style={{ width: '100%', maxWidth: '100%' }}>
              <CardContent style={{ padding: '40px' }}>
                {/* Swap Amount */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontSize: '0.875rem' }}>
                    You Pay
                  </label>
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '16px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '12px',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                    }}>
                      <input
                        type="number"
                        value={swapAmount === 0 ? '' : swapAmount}
                        onChange={(e) => setSwapAmount(e.target.value)}
                        placeholder="0.0"
                        step="0.01"
                        min="0"
                        disabled={!account}
                        style={{
                          flex: 1,
                          background: 'transparent',
                          border: 'none',
                          color: 'white',
                          fontSize: '1.5rem',
                          outline: 'none',
                        }}
                      />
                      <div style={{
                        background: 'rgba(124, 58, 237, 0.3)',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        borderRadius: '8px',
                        color: 'white',
                        padding: '8px 12px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}>
                        {swapToken === 1 ? symbols[0] || 'Token 1' : symbols[1] || 'Token 2'}
                      </div>
                    </div>
                    <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#9ca3af' }}>
                      Balance: {swapToken === 1 ? (balances[0] ? Number(balances[0]).toFixed(4) : '0.00') : (balances[1] ? Number(balances[1]).toFixed(4) : '0.00')}
                    </p>
                  </div>

                  {/* Swap Direction Button */}
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                    <button
                      type="button"
                      onClick={handleSwapTokens}
                      disabled={!account}
                      style={{
                        background: 'rgba(124, 58, 237, 0.2)',
                        border: '2px solid rgba(124, 58, 237, 0.5)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: account ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s',
                        opacity: account ? 1 : 0.5,
                      }}
                    >
                      <ArrowDownUp size={20} style={{ color: '#a78bfa' }} />
                    </button>
                  </div>

                  {/* You Receive (Estimated) */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontSize: '0.875rem' }}>
                      You Receive (Estimated)
                    </label>
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '16px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '12px',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                    }}>
                      <div style={{
                        flex: 1,
                        color: '#9ca3af',
                        fontSize: '1.5rem',
                      }}>
                        {swapAmount > 0 && price > 0
                          ? (swapToken === 1 ? (swapAmount * price).toFixed(4) : (swapAmount / price).toFixed(4))
                          : '0.0'}
                      </div>
                      <div style={{
                        background: 'rgba(124, 58, 237, 0.3)',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        borderRadius: '8px',
                        color: 'white',
                        padding: '8px 12px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                      }}>
                        {swapToken === 1 ? symbols[1] || 'Token 2' : symbols[0] || 'Token 1'}
                      </div>
                    </div>
                    <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#9ca3af' }}>
                      Balance: {swapToken === 1 ? (balances[1] ? Number(balances[1]).toFixed(4) : '0.00') : (balances[0] ? Number(balances[0]).toFixed(4) : '0.00')}
                    </p>
                  </div>

                  {/* Price Info */}
                  {price > 0 && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '12px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      color: '#d1d5db',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Exchange Rate:</span>
                        <span>1 {symbols[0]} = {price.toFixed(4)} {symbols[1]}</span>
                      </div>
                    </div>
                  )}

                <Button
                  size="lg"
                  style={{ width: '100%' }}
                  disabled={!account || isSwapping || swapAmount <= 0}
                  onClick={swapHandler}
                >
                  {isSwapping ? 'Swapping...' : 'Swap Tokens'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Liquidity Management */}
        <div className="content-section" style={{ marginTop: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'center' }}>Liquidity Management</h2>
            <Button
              onClick={() => {
                const hasWeb3 = typeof window.ethereum !== 'undefined';
                if (!account && isSafari && !hasWeb3) {
                  setShowSafariWeb3(true);
                  return;
                }
                setShowLiquidityForm(!showLiquidityForm);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                position: 'relative',
                justifyContent: 'center',
                minWidth: 320,
                padding: '12px 20px',
                fontSize: '1.05rem',
                lineHeight: 1.15,
                textAlign: 'center'
              }}
            >
              {showLiquidityForm ? (
                <>
                  <Minus size={22} />
                  <span style={{ marginLeft: 8 }}>Hide</span>
                </>
              ) : (
                <>
                  {/* Left bouncing chevrons */}
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, marginRight: 6 }}>
                    <motion.span
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ display: 'inline-flex' }}
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                      style={{ display: 'inline-flex' }}
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </span>

                  {/* Text with explicit wrap */}
                  <span style={{ display: 'inline-block' }}>
                    <span>Click HERE to Expand</span>
                    <br />
                    <span>&amp; Manage Liquidity</span>
                  </span>

                  {/* Right bouncing chevron */}
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, marginLeft: 6 }}>
                    <motion.span
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ display: 'inline-flex' }}
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                      style={{ display: 'inline-flex' }}
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </span>
                </>
              )}
            </Button>
          </div>

          {showLiquidityForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ maxWidth: '1000px', margin: '0 auto 40px', padding: '0 20px' }}
              className="liquidity-section"
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Add Liquidity */}
                <Card className="feature-card" style={{ width: '100%', maxWidth: '100%' }}>
                  <CardContent style={{ padding: '32px' }}>
                    <h3 className="feature-title" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Plus size={20} style={{ color: '#22c55e' }} />
                      Add Liquidity
                    </h3>
                    <form onSubmit={depositHandler}>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontSize: '0.875rem' }}>
                          {symbols[0] || 'Token 1'} Amount
                        </label>
                        <input
                          type="number"
                          value={token1Amount === 0 ? '' : token1Amount}
                          onChange={(e) => setToken1Amount(e.target.value)}
                          placeholder="0.0"
                          step="0.01"
                          min="0"
                          disabled={!account}
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid rgba(124, 58, 237, 0.5)',
                            background: 'rgba(0, 0, 0, 0.3)',
                            color: 'white',
                            fontSize: '1rem',
                          }}
                        />
                        <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#9ca3af' }}>
                          Balance: {balances[0] ? Number(balances[0]).toFixed(4) : '0.00'}
                        </p>
                      </div>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontSize: '0.875rem' }}>
                          {symbols[1] || 'Token 2'} Amount
                        </label>
                        <input
                          type="number"
                          value={token2Amount === 0 ? '' : token2Amount}
                          onChange={(e) => setToken2Amount(e.target.value)}
                          placeholder="0.0"
                          step="0.01"
                          min="0"
                          disabled={!account}
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid rgba(124, 58, 237, 0.5)',
                            background: 'rgba(0, 0, 0, 0.3)',
                            color: 'white',
                            fontSize: '1rem',
                          }}
                        />
                        <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#9ca3af' }}>
                          Balance: {balances[1] ? Number(balances[1]).toFixed(4) : '0.00'}
                        </p>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        style={{ width: '100%' }}
                        disabled={!account || isDepositing || token1Amount <= 0 || token2Amount <= 0}
                      >
                        {isDepositing ? 'Adding...' : 'Add Liquidity'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Remove Liquidity */}
                <Card className="feature-card">
                  <CardContent style={{ padding: '24px' }}>
                    <h3 className="feature-title" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Minus size={20} style={{ color: '#ef4444' }} />
                      Remove Liquidity
                    </h3>
                    <form onSubmit={withdrawHandler}>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontSize: '0.875rem' }}>
                          LP Shares to Remove
                        </label>
                        <input
                          type="number"
                          value={withdrawShares === 0 ? '' : withdrawShares}
                          onChange={(e) => setWithdrawShares(e.target.value)}
                          placeholder="0.0"
                          step="0.01"
                          min="0"
                          disabled={!account}
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid rgba(239, 68, 68, 0.5)',
                            background: 'rgba(0, 0, 0, 0.3)',
                            color: 'white',
                            fontSize: '1rem',
                          }}
                        />
                        <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#9ca3af' }}>
                          Your Shares: {shares ? Number(shares).toFixed(4) : '0.00'}
                        </p>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        style={{ width: '100%', background: 'linear-gradient(135deg, #dc2626, #ef4444)' }}
                        disabled={!account || isWithdrawing || withdrawShares <= 0}
                      >
                        {isWithdrawing ? 'Removing...' : 'Remove Liquidity'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Pool Info */}
          <div className="features-grid">
            <Card className="feature-card">
              <CardContent>
                <h3 className="feature-title">{symbols[0]} / {symbols[1]} Pool</h3>
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>{symbols[0]} Reserve:</span>
                    <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>
                      {amm && swaps.length > 0
                        ? Number(ethers.utils.formatUnits(swaps[swaps.length - 1].args.token1Balance, 'ether')).toFixed(2)
                        : '0'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>{symbols[1]} Reserve:</span>
                    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>
                      {amm && swaps.length > 0
                        ? Number(ethers.utils.formatUnits(swaps[swaps.length - 1].args.token2Balance, 'ether')).toFixed(2)
                        : '0'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>Your LP Shares:</span>
                    <span style={{ color: 'white' }}>{shares ? Number(shares).toFixed(4) : '0.00'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {isSafari && (
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '12px', color: '#9ca3af' }}>
                <ChevronLeft size={22} style={{ color: '#9ca3af', flexShrink: 0 }} />
                <HelpCircle size={33} style={{ color: '#60a5fa' }} />
                <div
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(37,99,235,0.08))',
                    border: '1px dashed rgba(59,130,246,0.35)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: 72,
                  }}
                >
                  <p style={{ margin: 0, fontSize: '1.5rem', lineHeight: 1.4, textAlign: 'center' }}>
                    Pool Information and Reserve Balances will appear here when using a web3 browser that utilizes Redux state management. LP shares and
                    liquidity management will be accessible as well once site is loaded into a web3 compatible browser.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* How It Works */}
        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">How the AMM Works</h2>
          <div className="info-box">
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Automated Market Maker:</strong> Trade tokens without order books using liquidity pools</li>
              <li><strong>Constant Product Formula:</strong> Prices are determined by the ratio of tokens in the pool (x * y = k)</li>
              <li><strong>Liquidity Providers:</strong> Earn fees by providing liquidity to pools</li>
              <li><strong>Low Slippage:</strong> Larger pools mean better prices and less price impact</li>
              <li><strong>Permissionless:</strong> Anyone can trade or provide liquidity 24/7</li>
            </ol>
          </div>
        </div>

        {/* Transaction History */}
        <div className="content-section" style={{ marginTop: '40px', maxWidth: '900px', margin: '40px auto 0' }}>
          <TransactionHistory
            transactions={transactions}
            title="Your Swap & Liquidity History"
            compact={false}
          />
        </div>

        {/* Trippy Mushrooms - Decorative - INCREASED COUNT & VARIED SIZES */}
        {[
          // Corners and edges
          { top: '8%', left: '8%', delay: 0, size: 85 },
          { top: '15%', right: '12%', delay: 1.5, size: 72 },
          { bottom: '12%', left: '15%', delay: 3, size: 95 },
          { bottom: '20%', right: '8%', delay: 2, size: 62 },
          { top: '45%', left: '3%', delay: 1, size: 78 },
          { top: '55%', right: '5%', delay: 2.5, size: 88 },
          // Closer to content
          { top: '35%', left: '25%', delay: 1.8, size: 68 },
          { top: '40%', right: '22%', delay: 2.2, size: 75 },
          { top: '50%', left: '28%', delay: 0.8, size: 60 },
          { top: '48%', right: '26%', delay: 1.3, size: 70 },
          { bottom: '35%', left: '20%', delay: 2.8, size: 78 },
          { bottom: '38%', right: '18%', delay: 1.6, size: 65 },
          // More mushrooms with varied sizes
          { top: '22%', left: '18%', delay: 0.5, size: 55 },
          { top: '28%', right: '16%', delay: 2.0, size: 82 },
          { top: '60%', left: '12%', delay: 1.4, size: 70 },
          { top: '65%', right: '14%', delay: 2.6, size: 58 },
          { bottom: '28%', left: '10%', delay: 0.9, size: 90 },
          { bottom: '45%', right: '12%', delay: 1.9, size: 66 },
          { top: '38%', left: '8%', delay: 2.3, size: 74 },
          { top: '42%', right: '10%', delay: 1.1, size: 80 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              pointerEvents: 'none',
              zIndex: 2
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0, 1.1, 1],
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              delay: pos.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut'
            }}
          >
            <TrippyMushroom size={pos.size} delay={pos.delay} />
          </motion.div>
        ))}

        <Footer />

	      {/* Safari Web3 Modal */}
	      <Web3BrowserModal isOpen={showSafariWeb3} onClose={() => setShowSafariWeb3(false)} />

      </motion.div>

      {/* Tokenomics FAQ Modal */}
      <TokenomicsFAQ isOpen={showFAQ} onClose={() => setShowFAQ(false)} />

      {/* ERC20 Swap Modal */}
      <ERC20SwapModal isOpen={showERC20Modal} onClose={() => setShowERC20Modal(false)} />
    </div>
  );
}

