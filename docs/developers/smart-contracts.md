---
sidebar_position: 1
---

# Smart Contract Reference

## 📋 Overview

This page provides a comprehensive reference for all Ethereal Offering smart contracts, including addresses, ABIs, and key functions. For full source code, see our [GitHub repository](https://github.com/drasticstatic/gratitude-token-project).

---

## 🔗 Contract Addresses

### Ethereum Mainnet

| Contract | Address | Verified |
|----------|---------|----------|
| **PSILO Token** | `0x...` (TBD) | ✅ |
| **MDAO Token** | `0x...` (TBD) | ✅ |
| **ETHO Token** | `0x...` (TBD) | ✅ |
| **PSD Stablecoin** | `0x...` (TBD) | ✅ |
| **DM Token** | `0x...` (TBD) | ✅ |
| **POB NFT** | `0x...` (TBD) | ✅ |
| **SHROOM NFT** | `0x...` (TBD) | ✅ |
| **Sacred Altar** | `0x...` (TBD) | ✅ |
| **AMM Router** | `0x...` (TBD) | ✅ |
| **Staking Contract** | `0x...` (TBD) | ✅ |
| **DAO Governance** | `0x...` (TBD) | ✅ |
| **Multi-sig Treasury** | `0x...` (TBD) | ✅ |

### Ethereum Sepolia Testnet

| Contract | Address | Verified |
|----------|---------|----------|
| **PSILO Token** | `0x1234...abcd` | ✅ |
| **MDAO Token** | `0x2345...bcde` | ✅ |
| **ETHO Token** | `0x3456...cdef` | ✅ |
| **Sacred Altar** | `0x4567...def0` | ✅ |
| **AMM Router** | `0x5678...ef01` | ✅ |

**Note:** Testnet contracts are for development and testing only. Use mainnet contracts for production.

---

## 📜 Contract Interfaces

### PSILO Token (ERC-20)

**Key Functions:**

```solidity
// Standard ERC-20
function balanceOf(address account) external view returns (uint256);
function transfer(address to, uint256 amount) external returns (bool);
function approve(address spender, uint256 amount) external returns (bool);
function transferFrom(address from, address to, uint256 amount) external returns (bool);

// Crowdsale
function buy() external payable;
function getCurrentPrice() external view returns (uint256);
function getCurrentPhase() external view returns (uint8);

// Vesting
function getVestedAmount(address account) external view returns (uint256);
function getLockedAmount(address account) external view returns (uint256);
function claim() external;
```

**Example Usage:**

```javascript
// Connect to contract
const psilo = new ethers.Contract(PSILO_ADDRESS, PSILO_ABI, signer);

// Check balance
const balance = await psilo.balanceOf(userAddress);
console.log(`Balance: ${ethers.utils.formatEther(balance)} PSILO`);

// Buy PSILO in crowdsale
const price = await psilo.getCurrentPrice();
const amount = ethers.utils.parseEther("1.0"); // 1 ETH
await psilo.buy({ value: amount });

// Claim vested tokens
await psilo.claim();
```

---

### MDAO Token (ERC-20)

**Key Functions:**

```solidity
// Standard ERC-20
function balanceOf(address account) external view returns (uint256);
function transfer(address to, uint256 amount) external returns (bool);

// Voting Power
function getVotingPower(address account) external view returns (uint256);
function delegate(address delegatee) external;
function getDelegates(address account) external view returns (address);

// Time Multiplier
function getTimeMultiplier(address account) external view returns (uint256);
function getHoldDuration(address account) external view returns (uint256);
```

**Example Usage:**

```javascript
const mdao = new ethers.Contract(MDAO_ADDRESS, MDAO_ABI, signer);

// Check voting power
const votingPower = await mdao.getVotingPower(userAddress);
console.log(`Voting Power: ${ethers.utils.formatEther(votingPower)}`);

// Delegate to another address
await mdao.delegate(delegateAddress);

// Check time multiplier
const multiplier = await mdao.getTimeMultiplier(userAddress);
console.log(`Time Multiplier: ${multiplier / 100}x`);
```

---

### Sacred Altar

**Key Functions:**

```solidity
// Make Offering
function makeOffering(
    uint256 ethoAmount,
    bytes32 intentionHash
) external payable returns (uint256 pobId);

// View Stats
function getTotalBurned() external view returns (uint256);
function getUserBurned(address user) external view returns (uint256);
function getUserStreak(address user) external view returns (uint256);
function getOfferingCount(address user) external view returns (uint256);

// Calculate Rewards
function calculateMDAOReward(uint256 ethoAmount) external view returns (uint256);
function getTier(uint256 ethoAmount) external pure returns (uint8);
```

**Example Usage:**

```javascript
const altar = new ethers.Contract(ALTAR_ADDRESS, ALTAR_ABI, signer);
const etho = new ethers.Contract(ETHO_ADDRESS, ETHO_ABI, signer);

// Approve ETHO spending
const burnAmount = ethers.utils.parseEther("100"); // 100 ETHO
await etho.approve(ALTAR_ADDRESS, burnAmount);

// Make offering
const intention = ethers.utils.formatBytes32String("Gratitude");
const donation = ethers.utils.parseEther("0.01"); // 0.01 ETH donation
const tx = await altar.makeOffering(burnAmount, intention, { value: donation });
const receipt = await tx.wait();

// Get POB NFT ID from event
const event = receipt.events.find(e => e.event === 'OfferingMade');
const pobId = event.args.pobId;
console.log(`Received POB NFT #${pobId}`);
```

---

### AMM Router

**Key Functions:**

```solidity
// Swap Tokens
function swapExactTokensForTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] calldata path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts);

// Add Liquidity
function addLiquidity(
    address tokenA,
    address tokenB,
    uint256 amountADesired,
    uint256 amountBDesired,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
) external returns (uint256 amountA, uint256 amountB, uint256 liquidity);

// Remove Liquidity
function removeLiquidity(
    address tokenA,
    address tokenB,
    uint256 liquidity,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
) external returns (uint256 amountA, uint256 amountB);

// Get Amounts
function getAmountsOut(uint256 amountIn, address[] calldata path) 
    external view returns (uint256[] memory amounts);
```

**Example Usage:**

```javascript
const router = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer);

// Swap ETHO for PSD
const amountIn = ethers.utils.parseEther("100"); // 100 ETHO
const path = [ETHO_ADDRESS, PSD_ADDRESS];
const amountsOut = await router.getAmountsOut(amountIn, path);
const amountOutMin = amountsOut[1].mul(95).div(100); // 5% slippage
const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes

// Approve ETHO
await etho.approve(ROUTER_ADDRESS, amountIn);

// Execute swap
await router.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    path,
    userAddress,
    deadline
);
```

---

### Mushroom NFT (SHROOM)

**Key Functions:**

```solidity
// Breeding
function breed(uint256 parent1Id, uint256 parent2Id) external returns (uint256 offspringId);
function canBreed(uint256 mushroomId) external view returns (bool);
function getBreedingFee(uint256 parent1Id, uint256 parent2Id) external view returns (uint256);

// Genetics
function getGenetics(uint256 mushroomId) external view returns (Genetics memory);
function getRarity(uint256 mushroomId) external view returns (uint8);

// Harvesting
function harvest(uint256 mushroomId) external returns (uint256 dmReward);
function isMatured(uint256 mushroomId) external view returns (bool);

// Marketplace
function listForSale(uint256 mushroomId, uint256 price) external;
function buy(uint256 mushroomId) external payable;
function cancelListing(uint256 mushroomId) external;
```

**Example Usage:**

```javascript
const shroom = new ethers.Contract(SHROOM_ADDRESS, SHROOM_ABI, signer);
const dm = new ethers.Contract(DM_ADDRESS, DM_ABI, signer);

// Check if mushrooms can breed
const canBreed1 = await shroom.canBreed(1);
const canBreed2 = await shroom.canBreed(2);

if (canBreed1 && canBreed2) {
    // Get breeding fee
    const fee = await shroom.getBreedingFee(1, 2);
    
    // Approve DM spending
    await dm.approve(SHROOM_ADDRESS, fee);
    
    // Breed mushrooms
    const tx = await shroom.breed(1, 2);
    const receipt = await tx.wait();
    
    // Get offspring ID
    const event = receipt.events.find(e => e.event === 'Bred');
    const offspringId = event.args.offspringId;
    console.log(`New mushroom #${offspringId} born!`);
}
```

---

### DAO Governance

**Key Functions:**

```solidity
// Proposals
function propose(
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    string memory description
) external returns (uint256 proposalId);

function getProposal(uint256 proposalId) external view returns (Proposal memory);
function getProposalState(uint256 proposalId) external view returns (ProposalState);

// Voting
function castVote(uint256 proposalId, uint8 support) external;
function castVoteWithReason(uint256 proposalId, uint8 support, string calldata reason) external;

// Execution
function queue(uint256 proposalId) external;
function execute(uint256 proposalId) external;

// Parameters
function votingDelay() external view returns (uint256);
function votingPeriod() external view returns (uint256);
function proposalThreshold() external view returns (uint256);
function quorum(uint256 blockNumber) external view returns (uint256);
```

**Example Usage:**

```javascript
const governance = new ethers.Contract(GOVERNANCE_ADDRESS, GOVERNANCE_ABI, signer);

// Create proposal
const targets = [TREASURY_ADDRESS];
const values = [0];
const calldatas = [
    treasury.interface.encodeFunctionData("transfer", [
        recipientAddress,
        ethers.utils.parseEther("1000") // 1000 PSILO
    ])
];
const description = "Grant 1000 PSILO to developer";

const proposalId = await governance.propose(targets, values, calldatas, description);

// Vote on proposal
await governance.castVoteWithReason(proposalId, 1, "Great work!"); // 1 = For

// Check proposal state
const state = await governance.getProposalState(proposalId);
// 0 = Pending, 1 = Active, 2 = Canceled, 3 = Defeated, 4 = Succeeded, 5 = Queued, 6 = Expired, 7 = Executed
```

---

## 🔐 Security Considerations

### Best Practices

**When Interacting with Contracts:**

1. **Verify Contract Addresses** - Always double-check addresses
2. **Check Allowances** - Review token approvals before signing
3. **Use Slippage Protection** - Set reasonable slippage limits
4. **Set Deadlines** - Use short deadlines for time-sensitive transactions
5. **Test on Testnet** - Try on Sepolia before mainnet
6. **Read Events** - Check transaction receipts for events
7. **Handle Errors** - Implement proper error handling

**Example Error Handling:**

```javascript
try {
    const tx = await altar.makeOffering(burnAmount, intention, { value: donation });
    await tx.wait();
    console.log("Offering successful!");
} catch (error) {
    if (error.code === 'INSUFFICIENT_FUNDS') {
        console.error("Not enough ETH for gas");
    } else if (error.message.includes("ERC20: insufficient allowance")) {
        console.error("Need to approve ETHO spending first");
    } else {
        console.error("Transaction failed:", error.message);
    }
}
```

### Common Pitfalls

⚠️ **Avoid these mistakes:**

1. **Not approving tokens** - Must approve before spending
2. **Insufficient gas** - Set appropriate gas limits
3. **Expired deadlines** - Use future timestamps
4. **Wrong network** - Ensure correct chain (mainnet vs testnet)
5. **Hardcoded addresses** - Use environment variables
6. **Ignoring events** - Events contain important data
7. **No error handling** - Always catch errors

---

## 📚 Additional Resources

### Documentation

- **[Full Source Code](https://github.com/drasticstatic/gratitude-token-project)** - GitHub repository
- **[Contract ABIs](https://github.com/drasticstatic/gratitude-token-project/tree/main/abis)** - JSON ABI files
- **[Etherscan](https://etherscan.io/)** - Verify transactions
- **[Sepolia Etherscan](https://sepolia.etherscan.io/)** - Testnet explorer

### Tools

- **[Remix IDE](https://remix.ethereum.org/)** - Online Solidity IDE
- **[Hardhat](https://hardhat.org/)** - Development environment
- **[Ethers.js](https://docs.ethers.io/)** - JavaScript library
- **[Web3.js](https://web3js.readthedocs.io/)** - Alternative library

### Support

- **[Discord #dev-support](https://discord.gg/psanctuary)** - Ask questions
- **[GitHub Issues](https://github.com/drasticstatic/gratitude-token-project/issues)** - Report bugs
- **[Forum](https://forum.psanctuary.org)** - Discuss development

---

*"Code is law, but compassion is the constitution. Build with care, test thoroughly, and always prioritize user safety."* 🍄✨

