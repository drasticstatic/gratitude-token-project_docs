---
slug: smart-contract-architecture-deep-dive
title: Smart Contract Architecture Deep Dive
authors: [christopher]
tags: [solidity, smart-contracts, ethereum, architecture, technical]
---

# Smart Contract Architecture Deep Dive

Welcome to a comprehensive exploration of the **Ethereal Offering smart contract architecture**. In this post, we'll dive deep into how our contracts are structured, the design patterns we use, and the security considerations that guide our development.

<!--truncate-->

## 🏗️ Contract Overview

The Ethereal Offering ecosystem consists of **12 core smart contracts** that work together to create a complete DeFi and ceremonial platform:

### Token Contracts (7)
1. **PsiloToken.sol** - ERC-20 crowdsale token
2. **MDAOToken.sol** - ERC-20 governance token
3. **EthoToken.sol** - ERC-20 ceremonial burn token
4. **PSDToken.sol** - ERC-20 stablecoin
5. **DMToken.sol** - ERC-20 daily rewards token
6. **ProofOfBurn.sol** - ERC-721 soulbound NFT
7. **MushroomNFT.sol** - ERC-721 breeding NFT

### Core Contracts (5)
8. **SacredAltar.sol** - Ceremonial burning mechanism
9. **Crowdsale.sol** - PSILO token sale
10. **Staking.sol** - PSILO → MDAO staking
11. **AMM.sol** - Automated market maker
12. **DAOTreasury.sol** - Multi-sig treasury

---

## 🎯 Design Principles

### 1. Separation of Concerns

Each contract has a **single, well-defined responsibility**:

```solidity
// ❌ BAD: One contract doing everything
contract MonolithicContract {
    function buyTokens() external {}
    function stakeTokens() external {}
    function burnTokens() external {}
    function swapTokens() external {}
    // ... 50 more functions
}

// ✅ GOOD: Separate contracts for separate concerns
contract Crowdsale {
    function buyTokens() external {}
}

contract Staking {
    function stakeTokens() external {}
}

contract SacredAltar {
    function burnTokens() external {}
}

contract AMM {
    function swapTokens() external {}
}
```

**Benefits:**
- Easier to audit and test
- Simpler to upgrade individual components
- Reduced attack surface
- Better gas optimization

### 2. Composability

Contracts are designed to **work together** through well-defined interfaces:

```solidity
// Interface for token burning
interface IBurnable {
    function burn(uint256 amount) external;
}

// Interface for NFT minting
interface IMintable {
    function mint(address to, uint256 tokenId) external;
}

// Sacred Altar composes these interfaces
contract SacredAltar {
    IBurnable public ethoToken;
    IMintable public pobNFT;
    
    function makeOffering(uint256 amount) external {
        // Burn ETHO tokens
        ethoToken.burn(amount);
        
        // Mint POB NFT
        pobNFT.mint(msg.sender, nextTokenId++);
    }
}
```

### 3. Immutability Where Possible

Critical parameters are **immutable** to prevent tampering:

```solidity
contract PsiloToken {
    // ✅ Immutable - can never change
    uint256 public immutable TOTAL_SUPPLY = 10_000_000 * 10**18;
    address public immutable TREASURY;
    
    // ❌ Mutable - could be changed by owner
    // uint256 public totalSupply;
    // address public treasury;
    
    constructor(address _treasury) {
        TREASURY = _treasury;
    }
}
```

### 4. Upgradeability Where Needed

Some contracts use **proxy patterns** for upgrades:

```solidity
// Transparent Proxy Pattern
contract SacredAltarProxy {
    address public implementation;
    address public admin;
    
    function upgradeTo(address newImplementation) external {
        require(msg.sender == admin, "Not admin");
        implementation = newImplementation;
    }
    
    fallback() external payable {
        address impl = implementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), impl, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 { revert(0, returndatasize()) }
            default { return(0, returndatasize()) }
        }
    }
}
```

**When to use proxies:**
- ✅ Complex logic that may need bug fixes
- ✅ Features that will evolve over time
- ❌ Token contracts (immutability is trust)
- ❌ Treasury (security over flexibility)

---

## 🔥 Sacred Altar Contract

Let's dive deep into the **most important contract** in the ecosystem:

### Full Implementation

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IEthoToken {
    function burnFrom(address account, uint256 amount) external;
}

interface IProofOfBurn {
    function mint(address to, uint256 burnAmount, bytes32 intention) external returns (uint256);
}

interface IDAOTreasury {
    function deposit() external payable;
}

/**
 * @title SacredAltar
 * @notice Ceremonial token burning contract
 * @dev Burns ETHO tokens and mints POB NFTs as receipts
 */
contract SacredAltar is ReentrancyGuard, Pausable, Ownable {
    
    // ============ State Variables ============
    
    IEthoToken public immutable ethoToken;
    IProofOfBurn public immutable pobNFT;
    IDAOTreasury public immutable treasury;
    
    uint256 public totalBurned;
    uint256 public totalOfferings;
    
    mapping(address => uint256) public userTotalBurned;
    mapping(address => uint256) public userOfferingCount;
    
    // ============ Events ============
    
    event OfferingMade(
        address indexed user,
        uint256 amount,
        uint256 pobTokenId,
        bytes32 intention,
        uint256 timestamp
    );
    
    event TreasuryDeposit(uint256 amount);
    
    // ============ Constructor ============
    
    constructor(
        address _ethoToken,
        address _pobNFT,
        address _treasury
    ) {
        require(_ethoToken != address(0), "Invalid ETHO address");
        require(_pobNFT != address(0), "Invalid POB address");
        require(_treasury != address(0), "Invalid treasury address");
        
        ethoToken = IEthoToken(_ethoToken);
        pobNFT = IProofOfBurn(_pobNFT);
        treasury = IDAOTreasury(_treasury);
    }
    
    // ============ External Functions ============
    
    /**
     * @notice Make a ceremonial offering by burning ETHO tokens
     * @param amount Amount of ETHO to burn (in wei)
     * @param intention Encrypted intention/prayer (32 bytes)
     */
    function makeOffering(
        uint256 amount,
        bytes32 intention
    ) external payable nonReentrant whenNotPaused {
        require(amount > 0, "Amount must be > 0");
        require(msg.value > 0, "Must send ETH donation");
        
        // Burn ETHO tokens from user
        ethoToken.burnFrom(msg.sender, amount);
        
        // Mint POB NFT as receipt
        uint256 pobTokenId = pobNFT.mint(msg.sender, amount, intention);
        
        // Update statistics
        totalBurned += amount;
        totalOfferings++;
        userTotalBurned[msg.sender] += amount;
        userOfferingCount[msg.sender]++;
        
        // Route ETH to treasury
        treasury.deposit{value: msg.value}();
        
        emit OfferingMade(
            msg.sender,
            amount,
            pobTokenId,
            intention,
            block.timestamp
        );
        
        emit TreasuryDeposit(msg.value);
    }
    
    /**
     * @notice Get user's offering statistics
     * @param user Address to query
     * @return totalBurned Total ETHO burned by user
     * @return offeringCount Number of offerings made
     */
    function getUserStats(address user) external view returns (
        uint256 totalBurned_,
        uint256 offeringCount
    ) {
        return (
            userTotalBurned[user],
            userOfferingCount[user]
        );
    }
    
    // ============ Admin Functions ============
    
    /**
     * @notice Pause the contract in case of emergency
     */
    function pause() external onlyOwner {
        _pause();
    }
    
    /**
     * @notice Unpause the contract
     */
    function unpause() external onlyOwner {
        _unpause();
    }
}
```

### Key Features Explained

#### 1. ReentrancyGuard

Prevents **reentrancy attacks**:

```solidity
// Without ReentrancyGuard
function makeOffering() external {
    // 1. User calls makeOffering
    // 2. Contract sends ETH to treasury
    // 3. Treasury's receive() calls makeOffering again
    // 4. Infinite loop drains contract
}

// With ReentrancyGuard
function makeOffering() external nonReentrant {
    // ✅ Second call reverts - attack prevented
}
```

#### 2. Pausable

Allows **emergency stops**:

```solidity
// If a bug is discovered, owner can pause
function pause() external onlyOwner {
    _pause();
}

// All functions with whenNotPaused modifier will revert
function makeOffering() external whenNotPaused {
    // This won't execute when paused
}
```

#### 3. Immutable References

Token addresses **can't be changed**:

```solidity
// ✅ Set once in constructor, never changes
IEthoToken public immutable ethoToken;

// ❌ Could be changed by malicious owner
// IEthoToken public ethoToken;
```

#### 4. Event Logging

All offerings are **permanently recorded**:

```solidity
event OfferingMade(
    address indexed user,      // Indexed for filtering
    uint256 amount,
    uint256 pobTokenId,
    bytes32 intention,         // Private prayer/intention
    uint256 timestamp
);

// Frontend can listen for events
contract.on("OfferingMade", (user, amount, tokenId, intention, timestamp) => {
    console.log(`${user} burned ${amount} ETHO`);
});
```

---

## 🔒 Security Patterns

### 1. Checks-Effects-Interactions

Always follow this order:

```solidity
function makeOffering(uint256 amount) external {
    // ✅ CHECKS: Validate inputs
    require(amount > 0, "Amount must be > 0");
    require(msg.value > 0, "Must send ETH");
    
    // ✅ EFFECTS: Update state
    totalBurned += amount;
    userTotalBurned[msg.sender] += amount;
    
    // ✅ INTERACTIONS: External calls last
    ethoToken.burnFrom(msg.sender, amount);
    treasury.deposit{value: msg.value}();
}
```

**Why?** Prevents reentrancy and ensures state is consistent.

### 2. Pull Over Push

Let users **withdraw** rather than **sending** to them:

```solidity
// ❌ PUSH: Dangerous
function distributeRewards(address[] memory users) external {
    for (uint i = 0; i < users.length; i++) {
        // If one user's receive() reverts, entire tx fails
        payable(users[i]).transfer(rewards[users[i]]);
    }
}

// ✅ PULL: Safe
mapping(address => uint256) public rewards;

function claimReward() external {
    uint256 amount = rewards[msg.sender];
    rewards[msg.sender] = 0;  // Clear before sending
    payable(msg.sender).transfer(amount);
}
```

### 3. Integer Overflow Protection

Solidity 0.8+ has **built-in overflow checks**:

```solidity
// Solidity 0.7 and below
function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a, "Overflow");  // Manual check
    return c;
}

// Solidity 0.8+
function add(uint256 a, uint256 b) internal pure returns (uint256) {
    return a + b;  // ✅ Automatic overflow check
}
```

### 4. Access Control

Use **OpenZeppelin's AccessControl**:

```solidity
import "@openzeppelin/contracts/access/AccessControl.sol";

contract DAOTreasury is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant EXECUTOR_ROLE = keccak256("EXECUTOR_ROLE");
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }
    
    function executeProposal(uint256 proposalId) external onlyRole(EXECUTOR_ROLE) {
        // Only executors can call this
    }
    
    function grantExecutor(address account) external onlyRole(ADMIN_ROLE) {
        _grantRole(EXECUTOR_ROLE, account);
    }
}
```

---

## 🧪 Testing Strategy

### Unit Tests

Test each function in isolation:

```javascript
describe("SacredAltar", function () {
    it("Should burn ETHO and mint POB NFT", async function () {
        const amount = ethers.utils.parseEther("100");
        const intention = ethers.utils.formatBytes32String("Peace");
        
        // Approve ETHO spending
        await ethoToken.approve(altar.address, amount);
        
        // Make offering
        await expect(
            altar.makeOffering(amount, intention, { value: ethers.utils.parseEther("0.1") })
        )
            .to.emit(altar, "OfferingMade")
            .withArgs(user.address, amount, 1, intention, anyValue);
        
        // Verify ETHO was burned
        expect(await ethoToken.balanceOf(user.address)).to.equal(0);
        
        // Verify POB NFT was minted
        expect(await pobNFT.ownerOf(1)).to.equal(user.address);
    });
});
```

### Integration Tests

Test contracts working together:

```javascript
describe("Full Offering Flow", function () {
    it("Should complete end-to-end offering", async function () {
        // 1. Buy PSILO in crowdsale
        await crowdsale.buyTokens({ value: ethers.utils.parseEther("1") });
        
        // 2. Stake PSILO for MDAO
        await staking.stake(psiloAmount);
        
        // 3. Swap MDAO for ETHO
        await amm.swap(mdaoToken.address, ethoToken.address, mdaoAmount);
        
        // 4. Burn ETHO at altar
        await altar.makeOffering(ethoAmount, intention, { value: ethers.utils.parseEther("0.1") });
        
        // 5. Verify POB NFT received
        expect(await pobNFT.balanceOf(user.address)).to.equal(1);
    });
});
```

### Fuzzing

Test with random inputs:

```javascript
const { FuzzedTest } = require("@openzeppelin/test-helpers");

describe("Fuzz Testing", function () {
    it("Should handle random inputs safely", async function () {
        for (let i = 0; i < 1000; i++) {
            const randomAmount = Math.floor(Math.random() * 1000000);
            const randomIntention = ethers.utils.randomBytes(32);
            
            try {
                await altar.makeOffering(randomAmount, randomIntention);
            } catch (error) {
                // Should revert gracefully, not crash
                expect(error.message).to.include("revert");
            }
        }
    });
});
```

---

## 📊 Gas Optimization

### 1. Use `immutable` and `constant`

```solidity
// ❌ Costs ~2100 gas per read
uint256 public totalSupply = 10_000_000;

// ✅ Costs ~100 gas per read
uint256 public constant TOTAL_SUPPLY = 10_000_000;

// ✅ Costs ~100 gas per read (set in constructor)
address public immutable TREASURY;
```

### 2. Pack Storage Variables

```solidity
// ❌ Uses 3 storage slots (expensive)
uint256 public a;  // Slot 0
uint128 public b;  // Slot 1
uint128 public c;  // Slot 2

// ✅ Uses 2 storage slots (cheaper)
uint256 public a;  // Slot 0
uint128 public b;  // Slot 1 (first half)
uint128 public c;  // Slot 1 (second half)
```

### 3. Use Events Instead of Storage

```solidity
// ❌ Expensive: Store all offerings on-chain
struct Offering {
    address user;
    uint256 amount;
    uint256 timestamp;
}
Offering[] public offerings;  // Very expensive to iterate

// ✅ Cheap: Emit events, query off-chain
event OfferingMade(address user, uint256 amount, uint256 timestamp);
```

---

## 🚀 Deployment Strategy

### 1. Deploy in Correct Order

```javascript
// 1. Deploy tokens
const PsiloToken = await ethers.getContractFactory("PsiloToken");
const psiloToken = await PsiloToken.deploy();

// 2. Deploy NFTs
const ProofOfBurn = await ethers.getContractFactory("ProofOfBurn");
const pobNFT = await ProofOfBurn.deploy();

// 3. Deploy core contracts (need token addresses)
const SacredAltar = await ethers.getContractFactory("SacredAltar");
const altar = await SacredAltar.deploy(
    psiloToken.address,
    pobNFT.address,
    treasury.address
);

// 4. Grant permissions
await pobNFT.grantRole(MINTER_ROLE, altar.address);
```

### 2. Verify on Etherscan

```bash
npx hardhat verify --network mainnet \
    0x123... \  # Contract address
    "0x456..." "0x789..." "0xabc..."  # Constructor args
```

### 3. Renounce Ownership (if appropriate)

```solidity
// After deployment and setup
altar.renounceOwnership();  // No one can pause/unpause anymore
```

---

## 📚 Resources

- **[OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)** - Secure contract libraries
- **[Solidity Docs](https://docs.soliditylang.org/)** - Official language documentation
- **[Hardhat](https://hardhat.org/)** - Development environment
- **[Etherscan](https://etherscan.io/)** - Blockchain explorer
- **[GitHub Repo](https://github.com/drasticstatic/gratitude-token-project)** - Full source code

---

*"Every line of code is a prayer. Every test is an act of faith. Every deployment is an offering."* 🍄✨

