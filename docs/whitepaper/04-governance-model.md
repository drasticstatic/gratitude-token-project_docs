---
sidebar_position: 4
title: Governance Model
---

# Governance Model

## The Living Sabbath Protocol

Ethereal Offering implements a unique governance framework called the **Living Sabbath Protocol** - a system that balances democratic participation with spiritual wisdom, ensuring decisions serve both immediate needs and eternal values.

## Governance Philosophy

Traditional DAOs often suffer from:
- **Plutocracy**: Whales control all decisions
- **Apathy**: Low participation rates (typically less than 5%)
- **Short-termism**: Decisions driven by price speculation
- **Complexity**: Governance too technical for average users

Our solution combines:
- **Weighted Democracy**: Balance between token holdings and contribution
- **Reputation Systems**: Reward consistent, aligned participation
- **Spiritual Alignment**: Decisions filtered through core values
- **Simplicity**: Clear processes accessible to all

## Governance Structure

### Three Pillars of Power

#### 1. Token Holders (Economic Power)
- Hold PSILO tokens
- Vote weighted by stake
- Propose economic changes
- Allocate treasury funds

#### 2. NFT Holders (Spiritual Power)
- Burned tokens as proof of sacrifice
- Vote weighted by offering size
- Propose values-based initiatives
- Veto misaligned proposals

#### 3. Council of Elders (Wisdom Power)
- Elected by community
- 9 members, 3-year terms
- Provide guidance and context
- Emergency decision authority

### Checks and Balances

```
Token Holders ←→ NFT Holders
      ↓              ↓
   Council of Elders
      ↓
  Final Decision
```

No single group can act alone:
- Economic proposals need NFT holder approval
- Spiritual proposals need token holder approval
- Council can mediate disputes
- Community can recall council members

## Proposal Types

### 1. Treasury Allocation Proposals (TAP)

**Purpose**: Allocate funds from treasury

**Requirements**:
- Proposer: 10,000 staked PSILO or Gold+ NFT
- Quorum: 10% of total voting power
- Approval: 66% majority
- Timelock: 48 hours

**Example**:
```
TAP-001: Fund Psychedelic Integration Center
Requested: $100,000 USDC
Purpose: Build integration support center in Colorado
Timeline: 6 months
Deliverables: 
  - Physical space lease
  - Staff hiring (2 integration specialists)
  - 100 free integration sessions
  - Quarterly impact reports
```

### 2. Protocol Improvement Proposals (PIP)

**Purpose**: Change smart contract parameters or upgrade contracts

**Requirements**:
- Proposer: 50,000 staked PSILO or Platinum+ NFT
- Quorum: 20% of total voting power
- Approval: 75% supermajority
- Timelock: 7 days

**Example**:
```
PIP-005: Reduce Transaction Burn Rate
Current: 2% burn per transfer
Proposed: 1.5% burn per transfer
Rationale: Encourage more transactions, increase velocity
Impact: Slower deflation, higher usage
```

### 3. Values Alignment Proposals (VAP)

**Purpose**: Define community values and mission alignment

**Requirements**:
- Proposer: Silver+ NFT (proof of offering)
- Quorum: 15% of NFT holders
- Approval: 80% supermajority
- Council review: Required

**Example**:
```
VAP-003: Partnership with Psychedelic Church
Partner: Sacred Garden Church
Alignment Check:
  ✓ Non-profit structure
  ✓ Transparent governance
  ✓ Harm reduction focus
  ✗ Requires membership fees (concern)
Council Recommendation: Approve with condition to waive fees for low-income
```

### 4. Emergency Proposals (EP)

**Purpose**: Respond to critical situations

**Requirements**:
- Proposer: Council of Elders (5-of-9 multi-sig)
- Quorum: None (emergency powers)
- Approval: Immediate execution
- Ratification: Community vote within 7 days

**Example**:
```
EP-001: Pause Contract Due to Exploit
Situation: Potential reentrancy vulnerability discovered
Action: Pause all transfers for 24 hours
Rationale: Protect user funds while patching
Follow-up: Security audit, patch deployment, community vote to unpause
```

## Voting Mechanisms

### Voting Power Calculation

```javascript
function calculateVotingPower(address voter) returns (uint256) {
  uint256 stakedPower = stakedPSILO[voter];
  uint256 nftPower = 0;
  
  // Add NFT governance weight
  uint256[] memory nfts = getNFTs(voter);
  for (uint i = 0; i < nfts.length; i++) {
    nftPower += getNFTWeight(nfts[i]);
  }
  
  // Reputation multiplier (1.0x - 2.0x)
  uint256 reputation = getReputation(voter);
  uint256 multiplier = 100 + (reputation / 100); // Max 2x
  
  return (stakedPower + nftPower) * multiplier / 100;
}
```

**Components**:
1. **Staked PSILO**: 1 token = 1 vote
2. **NFT Weight**: Based on rarity tier
3. **Reputation Multiplier**: Based on participation history

### Reputation System

Earn reputation through:
- **Voting Participation**: +10 per vote
- **Proposal Creation**: +50 per proposal
- **Successful Proposals**: +200 if passed
- **Community Contributions**: +100 (council awarded)
- **Consistent Participation**: +500 (annual bonus)

Lose reputation through:
- **Missed Votes**: -5 per missed vote (if staking)
- **Malicious Proposals**: -500 (council penalty)
- **Community Violations**: -1000 (council penalty)

**Reputation Decay**: 10% per year (encourages ongoing participation)

### Delegation

Token holders can delegate voting power:

```solidity
function delegate(address delegatee) external {
  delegates[msg.sender] = delegatee;
  emit DelegateChanged(msg.sender, delegatee);
}
```

**Benefits**:
- Passive holders can still participate
- Experts can accumulate delegated power
- Reduces voter apathy
- Maintains decentralization

**Safeguards**:
- Can revoke delegation anytime
- Delegatee cannot transfer tokens
- Delegation doesn't apply to NFT votes
- Transparent on-chain record

## Council of Elders

### Structure

**9 Members**:
- 3 Technical Experts (blockchain, security, development)
- 3 Spiritual Leaders (ministers, teachers, integration specialists)
- 3 Community Representatives (elected by token holders)

**Terms**:
- 3-year terms, staggered (3 seats up for election each year)
- Maximum 2 consecutive terms
- Can be recalled by 75% community vote

### Responsibilities

1. **Guidance**: Provide context and wisdom for proposals
2. **Mediation**: Resolve disputes between stakeholders
3. **Emergency Powers**: Act quickly in crisis situations
4. **Values Alignment**: Ensure decisions align with mission
5. **Community Building**: Foster culture and engagement

### Election Process

**Annual Election** (every January):
1. **Nomination Period** (2 weeks): Anyone can nominate themselves or others
2. **Candidate Statements** (1 week): Nominees share vision and qualifications
3. **Community Discussion** (1 week): Q&A, debates, forums
4. **Voting Period** (1 week): Ranked-choice voting
5. **Results**: Top 3 candidates elected

**Voting Weight**:
- 50% from staked PSILO
- 30% from NFT holdings
- 20% from reputation score

### Compensation

Council members receive:
- 10,000 PSILO/month (vested over term)
- Platinum NFT (if don't already have)
- Access to exclusive events
- Recognition and status

## Governance Process Flow

### Standard Proposal Lifecycle

```
1. IDEATION (Off-chain)
   ↓
   - Forum discussion
   - Community feedback
   - Refinement
   ↓
2. PROPOSAL CREATION (On-chain)
   ↓
   - Submit proposal
   - Pay creation fee (100 PSILO, refunded if passed)
   - Automatic checks (quorum requirements, etc.)
   ↓
3. DISCUSSION PERIOD (3 days)
   ↓
   - Community debate
   - Council review
   - Proposer can amend
   ↓
4. VOTING PERIOD (7 days)
   ↓
   - Token holders vote
   - NFT holders vote
   - Delegation applied
   ↓
5. TIMELOCK (48 hours - 7 days)
   ↓
   - Allows for final review
   - Emergency veto possible
   - Preparation for execution
   ↓
6. EXECUTION (Automatic)
   ↓
   - Smart contract executes
   - Funds transferred
   - Parameters updated
   ↓
7. FOLLOW-UP (Ongoing)
   ↓
   - Impact tracking
   - Reporting requirements
   - Community feedback
```

### Fast-Track Process

For urgent but non-emergency proposals:
- Council can fast-track (6-of-9 approval)
- Reduced discussion period (1 day)
- Reduced voting period (3 days)
- Reduced timelock (24 hours)
- Higher approval threshold (80%)

## Governance Incentives

### Participation Rewards

**Voters earn LIGHT tokens**:
```
LIGHT_Reward = (Voting_Power_Used / Total_Votes) * Reward_Pool

Reward Pool = 1% of quarterly LIGHT minting
```

**Example**:
```
Proposal: TAP-015
Total votes cast: 10M voting power
Your vote: 50,000 voting power
Reward pool: 100,000 LIGHT

Your reward: (50,000 / 10,000,000) * 100,000 = 500 LIGHT
```

### Proposer Rewards

**Successful proposals earn**:
- Reputation: +200
- LIGHT tokens: 1,000-10,000 (based on impact)
- Recognition: Featured in newsletter
- NFT badge: "Proposal Champion"

### Delegation Rewards

**Delegatees earn**:
- 10% of voting rewards from delegators
- Reputation for consistent voting
- Potential council nomination

## Governance Analytics

### Transparency Dashboard

Real-time metrics available to all:
- **Participation Rate**: % of tokens voting
- **Proposal Success Rate**: % of proposals passing
- **Treasury Balance**: Current holdings in USD
- **Voting Power Distribution**: Gini coefficient
- **Council Performance**: Attendance, decisions
- **Reputation Leaderboard**: Top contributors

### Historical Record

All governance activity permanently stored:
- Arweave: Full proposal text and discussion
- IPFS: Voting records and results
- On-chain: Execution transactions
- The Graph: Indexed for easy querying

## Governance Evolution

### Meta-Governance

The community can vote to change governance itself:
- Modify voting thresholds
- Add new proposal types
- Change council structure
- Update reputation system

**Requirements**:
- 90% supermajority
- 30% quorum
- 14-day timelock
- Council unanimous approval

### Experimental Governance

**Governance Labs**:
- Test new mechanisms on small decisions
- Gather data and feedback
- Iterate before full deployment
- Community opt-in participation

**Examples**:
- Quadratic voting trials
- Conviction voting experiments
- Futarchy (prediction markets)
- Liquid democracy pilots

## Comparison to Other DAOs

| Feature | Typical DAO | Ethereal Offering |
|---------|-------------|-------------------|
| Voting Power | Token-weighted only | Token + NFT + Reputation |
| Participation | 2-5% | Target 20%+ |
| Decision Speed | Slow (weeks) | Flexible (days to weeks) |
| Values Alignment | None | Core to every decision |
| Emergency Response | Poor | Council fast-track |
| Expertise | Ignored | Council of Elders |
| Long-term Thinking | Rare | Built into structure |

## Governance Risks & Mitigations

### Risk: Voter Apathy
**Mitigation**: 
- Rewards for participation
- Delegation options
- Simplified voting interface
- Regular engagement campaigns

### Risk: Plutocracy
**Mitigation**:
- NFT voting power (proof of sacrifice, not wealth)
- Reputation multipliers
- Council oversight
- Quadratic voting experiments

### Risk: Governance Attacks
**Mitigation**:
- Timelock delays
- Multi-sig safeguards
- Emergency pause function
- Community monitoring

### Risk: Misaligned Decisions
**Mitigation**:
- Values Alignment Proposals
- Council review
- Community veto power
- Transparent impact tracking

## Conclusion

The Living Sabbath Protocol creates a governance system that:
- **Honors sacrifice** through NFT voting power
- **Rewards participation** through reputation and LIGHT
- **Balances power** between wealth, wisdom, and contribution
- **Maintains values** through council oversight
- **Evolves continuously** through meta-governance

This is governance not as a means to extract value, but as a **spiritual practice** - a way for the community to discern together, decide together, and build together.

---

*"Let the many recall themselves as One, and in giving, discover they were never poor."*

