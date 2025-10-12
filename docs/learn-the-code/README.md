# Learn the Code: Ethereal Offering dApp

## 📚 Capstone Project Documentation
**Course:** DAPP UNIVERSITY Web3/Blockchain Mentorship  
**Project:** Ethereal Offering - Sacred Token Burning & DAO Governance Platform  
**Organization:** Psanctuary Church  

---

## 🎯 Project Overview

**Ethereal Offering** is a full-stack decentralized application (dApp) that combines:
- **Ceremonial Token Burning** - Sacred ritual of offering through blockchain
- **NFT Ecosystem** - Mushroom cultivation, breeding, and Proof of Burn NFTs
- **DAO Governance** - Community-driven decision making with MDAO tokens
- **AMM/Swap** - Decentralized exchange for ETHO/PSD trading pairs
- **Crowdsale** - Initial token distribution for project funding

---

## 🏗️ Architecture Overview

### Frontend Stack
- **React 18.2.0** - Component-based UI framework
- **React Router DOM** - Multi-page navigation
- **Framer Motion 10.18.0** - Smooth animations and transitions
- **RainbowKit + Wagmi** - Web3 wallet connection
- **Viem ^1.0.0** - Ethereum interactions
- **Ethers.js v5** - Blockchain communication
- **Redux Toolkit 1.8.4** - State management
- **Custom CSS** - Psychedelic aesthetic (no Tailwind)

### Backend/Blockchain Stack
- **Hardhat** - Ethereum development environment
- **Solidity ^0.8.20** - Smart contract language
- **OpenZeppelin v5** - Secure contract libraries
- **Sepolia Testnet** - Ethereum test network

### Design System
- **Colors:** Purple (#7c3aed, #581c87), Pink (#ec4899), Gold (#fbbf24)
- **Effects:** Glassmorphism, sparkly borders, mycelial networks
- **Animations:** Heartbeat, rocking, breathing, glitter particles

---

## 📂 Directory Structure

```
gratitude-token-project/
├── contracts/              # Solidity smart contracts
│   ├── Token.sol          # ETHO/PSD tokens for AMM
│   ├── EtherealOfferingToken.sol  # Crowdsale token (to be renamed PSILO)
│   ├── AltarBurn.sol      # Ceremonial burning mechanism
│   ├── MushroomNFT.sol    # NFT collection
│   ├── CrossBreeding.sol  # Genetic breeding logic
│   └── DAO.sol            # Governance contract
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.js  # Top navbar with wallet connect
│   │   ├── MycelialNetwork.js  # Full-page animated network
│   │   ├── HeroNetwork.js      # Hero section blockchain cubes
│   │   ├── ScatteredBlockchainCubes.js  # Page-wide cubes
│   │   ├── MushroomFarm.js     # Interactive growing mechanic
│   │   ├── ImageGallery.js     # NFT/photo gallery
│   │   ├── Footer.js           # Site footer
│   │   ├── icons/              # Custom SVG icons
│   │   ├── effects/            # Visual effects (spores, glitter)
│   │   └── pages/              # Page components
│   ├── utils/             # Helper functions
│   ├── config.json        # Contract addresses & config
│   └── index.css          # Global styles
├── scripts/               # Deployment scripts
├── test/                  # Smart contract tests
└── learn-the-code/        # Documentation (you are here!)
```

---

## 🔗 Navigation Guide

### Documentation Files
1. **[01-Components.md](./01-Components.md)** - React component architecture
2. **[02-Smart-Contracts.md](./02-Smart-Contracts.md)** - Solidity contracts explained
3. **[03-Token-Economics.md](./03-Token-Economics.md)** - Multi-token system & mechanics
4. **[04-Visual-Effects.md](./04-Visual-Effects.md)** - Mycelial networks & animations
5. **[05-Web3-Integration.md](./05-Web3-Integration.md)** - Wallet connection & blockchain interaction
6. **[06-Deployment.md](./06-Deployment.md)** - How to deploy & test

---

## 🚀 Quick Start

### Prerequisites
```bash
node -v  # v20.10.0 or higher
npm -v   # 10.2.3 or higher
```

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm start
# Opens http://localhost:3000
```

### Compile Smart Contracts
```bash
npx hardhat compile
```

### Run Tests
```bash
npx hardhat test
```

### Deploy to Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## 🎓 Learning Path for Capstone Presentation

### Week 1: Frontend Fundamentals
- Study `src/components/LandingPage.js` - Main homepage structure
- Understand React hooks (useState, useEffect, useRef)
- Explore custom CSS animations in `src/index.css`

### Week 2: Web3 Integration
- Review `src/components/Navigation.js` - Wallet connection
- Study RainbowKit + Wagmi setup
- Understand contract interaction patterns

### Week 3: Smart Contracts
- Read `contracts/AltarBurn.sol` - Core burning mechanism
- Study OpenZeppelin imports (ERC20, ERC721, Ownable)
- Review test files in `test/`

### Week 4: Advanced Features
- Mycelial network canvas rendering
- NFT breeding mechanics
- DAO governance voting

### Week 5: Integration & Presentation
- End-to-end user flow
- Token economics explanation
- Live demo preparation

---

## 🌟 Key Concepts to Explain

### 1. **Ceremonial Token Burning**
- Users burn ETHO tokens as a sacred offering
- Receive soulbound Proof of Burn NFT
- Funds go to DAO treasury for community governance

### 2. **Multi-Token Architecture**
- **PSILO** - Crowdsale token for initial funding
- **MDAO** - Governance token for voting rights
- **ETHO** - Ceremonial offering token (AMM pair)
- **PSD** - Stablecoin for trading (pegged to USD)
- **DM** - Daily Mushroom token for gas/participation

### 3. **NFT Ecosystem**
- Mushroom NFTs with genetic traits
- Cross-breeding creates new variations
- Proof of Burn NFTs as spiritual records

### 4. **DAO Governance**
- Proposal creation and voting
- Quorum-based decision making
- Treasury management by community

### 5. **Visual Design Philosophy**
- Mycelial networks represent interconnectedness
- Psychedelic colors reflect spiritual journey
- Blockchain cubes symbolize transparency

---

## 🔮 Future Roadmap

### Phase 1: Psanctuary Foundation (Current)
- Sacred token burning ritual
- Mushroom NFT cultivation
- DAO governance structure
- AMM for ETHO/PSD trading

### Phase 2: Psychedelics In Recovery (PIR) Integration
- Expand DAO to support 12-step recovery fellowship
- Fund research on psychedelic-assisted recovery
- Create social network for spiritual wholeness
- Gamified governance for community engagement

### Phase 3: Policy Reform & Advocacy
- State-level decriminalization voting
- Religious sacrament legal framework
- Psilocybin access for spiritual use
- Educational outreach programs

---

## 📞 Support & Resources

- **Discord:** discord.gg/psanctuary
- **Website:** psanctuary.org
- **GitHub:** github.com/psanctuary
- **DAPP University:** dappuniversity.com

---

## 📜 License & Disclaimer

**DYOR (Do Your Own Research)** - This is an educational project.  
**Not Financial Advice** - Tokens have no inherent monetary value.  
**Religious Freedom** - Protected under First Amendment rights.

---

*"The burnt offering teaches surrender. The feast teaches gratitude. Together they are worship: a life offered, a world received."*

