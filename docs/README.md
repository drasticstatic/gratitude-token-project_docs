# 🌌 Ethereal Offering Protocol

A spiritually inspired decentralized platform for ceremonial offerings using soulbound NFTs and tokenomics.

## 🏗️ Architecture Overview

### Core Contracts
- **EtherealOfferingToken (EOT)**: ERC-20 token for offerings
- **ProofOfBurn (PoB)**: Soulbound ERC-721 NFT proving offerings made
- **AltarBurn**: Central contract handling token burns and treasury transfers

### Flow
1. Users receive EOT tokens (minted by owner)
2. Users burn EOT at the Altar with an intention message
3. Burned tokens go to treasury, user receives soulbound PoB NFT
4. PoB NFTs are non-transferable proof of ceremonial participation

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation & Testing

```bash
# 1. Install dependencies
npm install
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss autoprefixer postcss tailwindcss-animate

# 2. Run tests (RECOMMENDED FIRST)
npx hardhat test

# 3. Start local blockchain
npx hardhat node

# 4. Deploy contracts (in new terminal) Example: npx hardhat run scripts/deploy.js --network localhost
sleep 3 && npx hardhat run scripts/deploy_all.js --network localhost
npx hardhat run scripts/amm_seed.js --network localhost
```

### Expected Test Output
```
AltarBurn + PoB flow
  ✓ user can burn EOT and receive PoB NFT
```

### Expected Deployment Output
```
Deploying with: 0x...
EOT: 0x...
PoB: 0x...
Altar: 0x...
Set altar as PoB minter
Minted 1000 EOT to deployer
```

## 📁 Project Structure

```
├── contracts/
│   ├── EtherealOfferingToken.sol    # ERC-20 offering token
│   ├── ProofOfBurn.sol              # Soulbound NFT proof
│   └── AltarBurn.sol                # Burn mechanism
├── scripts/
│   └── deploy.js                    # Deployment script
├── test/
│   └── altar.test.js                # Core functionality tests
├── frontend/
│   ├── src/
│   │   ├── BurnButton.js            # React burn interface
│   │   └── store/                   # Redux state management
│   └── package.json
├── hardhat.config.js                # Hardhat configuration
└── package.json
```

## 🔧 Technical Details

### Contract Interactions

1. **Minting EOT**: Only owner can mint tokens
2. **Burning Process**: 
   - User approves Altar to spend EOT
   - User calls `burnOffering(amount, intention, tokenURI)`
   - Tokens transferred to treasury
   - Soulbound PoB NFT minted to user

### Key Features
- **Soulbound NFTs**: PoB tokens cannot be transferred (except burn)
- **Treasury System**: All burned tokens go to designated treasury address
- **Intention Tracking**: Each burn includes an intention message
- **Admin Controls**: Altar admin can update treasury and proof contract

## 🧪 Testing & Verification

### Run Additional Tests
```bash
# Test specific functionality
npx hardhat test --grep "burn"

# Run with gas reporting
REPORT_GAS=true npx hardhat test

# Test on different networks
npx hardhat test --network hardhat
```

### Manual Verification Steps
1. Deploy contracts locally
2. Mint EOT to test address
3. Approve Altar contract
4. Execute burn with intention
5. Verify PoB NFT ownership
6. Confirm treasury received tokens

## 🎯 Next Development Steps

### Immediate Improvements Needed
1. **Expand Test Coverage**:
   - Test edge cases (zero amounts, unauthorized access)
   - Test admin functions
   - Test soulbound transfer restrictions

2. **Add Input Validation**:
   - Intention length limits
   - TokenURI format validation

3. **Enhanced Security**:
   - Add reentrancy guards
   - Implement pause functionality
   - Add emergency withdrawal

### Suggested Enhancements
```solidity
// Add to AltarBurn.sol
mapping(address => uint256) public totalOffered;
mapping(address => uint256) public offeringCount;

// Add minimum offering amount
uint256 public minimumOffering = 1e18; // 1 EOT
```

## 🔍 Code Review Notes

### Strengths
- Clean, readable contract code
- Proper use of OpenZeppelin standards
- Soulbound implementation is correct
- Basic test coverage exists

### Areas for Improvement
- Missing comprehensive error handling
- No events for admin actions
- Limited access control granularity
- Frontend needs wallet connection logic

### Security Considerations
- All contracts use standard patterns
- No obvious vulnerabilities detected
- Recommend audit before mainnet deployment
- Consider implementing timelock for admin functions

## 🚨 Important Notes

1. **Treasury Address**: Currently set to deployer - change for production
2. **Owner Privileges**: EOT owner can mint unlimited tokens
3. **Admin Powers**: Altar admin can change treasury and proof contract
4. **Gas Costs**: Burning involves multiple operations (transfer + mint)

## 🤔 Questions & Suggestions

### Questions for Consideration
1. Should there be a maximum supply for EOT?
2. How will the treasury be governed in production?
3. Should there be a cooldown period between burns?
4. How will tokenURI metadata be managed?

### Suggested Roadmap Priorities
1. ✅ Complete comprehensive testing
2. 🔄 Add mushroom NFT daily drop system
3. 🔄 Implement DAO governance for treasury
4. 🔄 Build frontend wallet integration
5. 🔄 Add DID/identity layer

## 📞 Development Commands

```bash
# Compile contracts
npx hardhat compile

# Clean artifacts
npx hardhat clean

# Run specific test file
npx hardhat test test/altar.test.js

# Deploy to specific network
npx hardhat run scripts/deploy.js --network <network-name>

# Start console
npx hardhat console --network localhost
```

---

*This project is for educational and spiritual purposes. Not financial advice.*
