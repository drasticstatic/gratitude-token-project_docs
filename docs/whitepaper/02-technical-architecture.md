---
sidebar_position: 2
title: Technical Architecture
---

# Technical Architecture

## System Overview

Ethereal Offering is built on a **modular, upgradeable smart contract architecture** deployed on Ethereum mainnet with Layer 2 scaling solutions. Our technical stack prioritizes security, transparency, and user experience.

## Core Components

### 1. Smart Contract Layer

#### PSILO Token Contract (ERC-20)
```solidity
// Core features:
- Standard ERC-20 functionality
- 2% burn on every transfer
- Whitelist for DEX/CEX (no burn on trading)
- Pausable for emergency situations
- Upgradeable via proxy pattern
- Multi-sig governance controls
```

**Key Functions**:
- `transfer()` - Standard transfer with 2% burn
- `burn()` - Manual burn for PoB NFT minting
- `stake()` - Lock tokens for governance and rewards
- `unstake()` - Withdraw staked tokens (with cooldown)

#### LIGHT Token Contract (ERC-20)
```solidity
// Reward token features:
- Minted based on treasury performance
- Stakeable for additional rewards
- Convertible to PSILO at dynamic rate
- Deflationary through quarterly burns
```

**Minting Formula**:
```
LIGHT_minted = (Treasury_Growth * Participation_Rate) / Total_Staked_PSILO
```

#### PoB NFT Contract (ERC-721)
```solidity
// Unique NFT features:
- Dynamic metadata based on burn amount
- Rarity tiers (Bronze, Silver, Gold, Platinum, Diamond)
- Governance weight calculation
- Soul-bound option (non-transferable)
- Breeding/evolution mechanics
```

**Rarity Tiers**:
- **Bronze**: 100-999 PSILO burned
- **Silver**: 1,000-9,999 PSILO burned
- **Gold**: 10,000-99,999 PSILO burned
- **Platinum**: 100,000-999,999 PSILO burned
- **Diamond**: 1,000,000+ PSILO burned

**Metadata Structure**:
```json
{
  "name": "Living Offering #1234",
  "description": "A sacred offering of 10,000 PSILO",
  "image": "ipfs://QmXxx.../offering_gold.png",
  "attributes": [
    {"trait_type": "Rarity", "value": "Gold"},
    {"trait_type": "Burn Amount", "value": "10000"},
    {"trait_type": "Burn Date", "value": "2025-03-15"},
    {"trait_type": "Governance Weight", "value": "100"},
    {"trait_type": "Generation", "value": "1"}
  ]
}
```

#### Treasury DAO Contract
```solidity
// Governance features:
- Proposal creation (requires NFT or staked PSILO)
- Voting (weighted by NFT rarity + staked PSILO)
- Timelock execution (48-hour delay)
- Multi-sig override for emergencies
- Transparent fund allocation
```

**Governance Process**:
1. **Proposal Creation**: Requires 10,000 staked PSILO or Gold+ NFT
2. **Discussion Period**: 3 days for community feedback
3. **Voting Period**: 7 days for token holders to vote
4. **Execution Delay**: 48 hours after passing
5. **Implementation**: Automatic execution via smart contract

**Voting Weight Calculation**:
```
Total_Weight = Staked_PSILO + (NFT_Rarity_Multiplier * NFT_Count)

NFT Multipliers:
- Bronze: 100
- Silver: 500
- Gold: 2,500
- Platinum: 15,000
- Diamond: 100,000
```

### 2. Oracle Integration

We use **Chainlink Price Feeds** for:
- PSILO/USD price data
- ETH/USD price data
- Treasury valuation in USD
- Dynamic LIGHT minting calculations

**Oracle Contracts**:
- Chainlink VRF for NFT randomness
- Chainlink Keepers for automated treasury operations
- Custom oracle for off-chain data (retreat bookings, charitable impact)

### 3. Layer 2 Scaling

To reduce gas costs and improve UX, we deploy on:

#### Polygon (Primary L2)
- Fast, cheap transactions
- EVM-compatible
- Established ecosystem
- Bridge to Ethereum mainnet

#### Arbitrum (Secondary L2)
- Optimistic rollup security
- Lower fees than mainnet
- Growing DeFi ecosystem

**Cross-Chain Bridge**:
- Lock tokens on source chain
- Mint wrapped tokens on destination chain
- Burn wrapped tokens to unlock on source
- Secured by multi-sig + Chainlink CCIP

### 4. Storage Layer

#### On-Chain Storage
- Token balances and transfers
- NFT ownership and metadata hashes
- Governance proposals and votes
- Treasury transactions

#### IPFS (Decentralized Storage)
- NFT images and metadata
- Proposal documents
- Community content
- Historical records

#### Arweave (Permanent Storage)
- Critical governance decisions
- Whitepaper and documentation
- Immutable community records

### 5. Frontend Architecture

#### Web Application (React + Next.js)
```
/src
  /components
    - WalletConnect
    - TokenSwap
    - NFTMinting
    - GovernanceVoting
    - TreasuryDashboard
  /hooks
    - useContract
    - useWallet
    - useTokenBalance
  /pages
    - index (landing)
    - /app (dApp interface)
    - /governance
    - /nfts
    - /docs
```

#### Web3 Integration
- **wagmi** for React hooks
- **ethers.js** for contract interaction
- **RainbowKit** for wallet connection
- **The Graph** for data indexing

#### Mobile Application (React Native)
- Cross-platform (iOS + Android)
- Wallet integration (WalletConnect)
- Push notifications for governance
- QR code scanning for in-person offerings

## Security Architecture

### Smart Contract Security

1. **Audits**:
   - CertiK (comprehensive audit)
   - OpenZeppelin (focused on governance)
   - Internal security review

2. **Best Practices**:
   - OpenZeppelin contracts as base
   - ReentrancyGuard on all state-changing functions
   - Checks-Effects-Interactions pattern
   - SafeMath for arithmetic operations
   - Access control with role-based permissions

3. **Upgrade Mechanism**:
   - Transparent proxy pattern
   - 7-day timelock on upgrades
   - Multi-sig approval required
   - Emergency pause function

### Operational Security

1. **Multi-Signature Wallets**:
   - Treasury: 5-of-9 multi-sig
   - Admin functions: 3-of-5 multi-sig
   - Emergency pause: 2-of-3 multi-sig

2. **Key Management**:
   - Hardware wallets (Ledger) for all signers
   - Geographic distribution of signers
   - Regular key rotation
   - Backup and recovery procedures

3. **Monitoring**:
   - Real-time transaction monitoring
   - Anomaly detection alerts
   - Regular security audits
   - Bug bounty program ($100K pool)

## Data Flow

### User Journey: Making an Offering

1. **User connects wallet** → Frontend calls `useWallet()` hook
2. **User approves PSILO** → `approve()` transaction to NFT contract
3. **User burns tokens** → `burnForNFT(amount)` transaction
4. **Contract burns PSILO** → Tokens sent to 0x000...dead
5. **Contract mints NFT** → ERC-721 `mint()` with metadata
6. **Chainlink VRF** → Generates random traits
7. **IPFS upload** → Metadata and image stored
8. **Event emitted** → `OfferingMade(user, amount, tokenId)`
9. **The Graph indexes** → Event added to subgraph
10. **Frontend updates** → User sees new NFT in wallet

### Treasury Flow

1. **Fees collected** → 0.5% of transactions to treasury
2. **Chainlink Keeper** → Triggers weekly treasury report
3. **Oracle fetches data** → Treasury value in USD
4. **LIGHT calculation** → Based on growth and participation
5. **LIGHT minted** → Distributed to stakers
6. **Governance proposal** → Community votes on allocation
7. **Timelock execution** → Funds distributed after delay
8. **Impact tracking** → Off-chain oracle reports outcomes

## Scalability

### Current Capacity
- **Transactions per second**: 15 (Ethereum mainnet)
- **Gas cost per offering**: ~$5-20 (depending on network)
- **NFT minting time**: 15-30 seconds

### Scaling Solutions

1. **Layer 2 Migration**:
   - Target: 1,000+ TPS on Polygon
   - Gas cost: Less than $0.01 per transaction
   - Minting time: 2-5 seconds

2. **Batch Processing**:
   - Merkle tree for multiple offerings
   - Single transaction for multiple NFTs
   - 90% gas savings for bulk operations

3. **State Channels**:
   - Off-chain micro-offerings
   - Periodic settlement to mainnet
   - Instant confirmation for users

## Interoperability

### Cross-Chain Strategy

**Phase 1**: Ethereum + Polygon
**Phase 2**: Add Arbitrum, Optimism
**Phase 3**: Cosmos, Polkadot bridges
**Phase 4**: Bitcoin Lightning integration

### Integration Points

1. **DEX Aggregators**: 1inch, Paraswap
2. **Wallets**: MetaMask, Rainbow, Coinbase Wallet
3. **NFT Marketplaces**: OpenSea, Rarible, LooksRare
4. **DeFi Protocols**: Aave, Compound, Uniswap
5. **Payment Processors**: Stripe, PayPal (fiat on-ramp)

## Development Roadmap

### Q1 2025
- ✅ Core contracts deployed to testnet
- ✅ Security audit initiated
- ✅ Frontend MVP completed

### Q2 2025
- 🔄 Mainnet deployment
- 🔄 Layer 2 bridges activated
- 🔄 Mobile app beta launch

### Q3 2025
- Cross-chain expansion
- Advanced governance features
- NFT marketplace integration

### Q4 2025
- Real-world asset tokenization
- Fiat on/off ramps
- Enterprise partnerships

## Open Source Commitment

All core contracts and frontend code are **open source** under MIT license:
- GitHub: github.com/ethereal-offering
- Documentation: docs.etherealoffering.io
- Community: discord.gg/etherealoffering

We believe in **radical transparency** - anyone can audit, fork, or contribute to our codebase.

---

*"Let this work stand as one unbroken prayer—that the many may recall themselves as One."*

