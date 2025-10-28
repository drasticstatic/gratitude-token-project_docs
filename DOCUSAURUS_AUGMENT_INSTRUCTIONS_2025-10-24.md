# Augment Instructions for Docusaurus Workspace

## 🎯 Context: Ethereal Offering Documentation Site

You are now working in the **Docusaurus documentation workspace** for the Ethereal Offering project - a Web3 dApp combining ceremonial token burning, mushroom NFT ecosystems, crowdsale functionality, AMM/swap features, and DAO governance.

**Site URL**: https://drasticstatic.github.io/gratitude-token-project_docs/
**Local Path**: `~/dappu/gratitude-token-project_docs`
**Main Project**: `~/dappu/gratitude-token-project` (React dApp)

---

## 📚 Project Overview

### What is Ethereal Offering?

Ethereal Offering is a **living ecosystem** where spirit and protocol intertwine:
- **Mushroom Farm**: Living NFTs that grow, mature, and fruit in real-time
- **SporeDAO**: Governance as devotion, voting as prayer
- **Holy Flow**: AMM/swap with sacred liquidity flows
- **Treasury Lake**: Multi-stream treasury with arbitrage capabilities
- **RWA Sanctuaries**: Tokenized land trusts and retreat centers
- **Oracle of Fruit**: 15-agent mycelial intelligence layer

### Tech Stack
- **Frontend**: React 18.2.0, RainbowKit, Wagmi, Framer Motion
- **Blockchain**: Ethereum (main), Aleo (ZK privacy), TON (accessibility)
- **Smart Contracts**: Hardhat, OpenZeppelin v5, Solidity 0.8.20
- **Documentation**: Docusaurus (this workspace)

---

## 📂 Documentation Structure

### Processed Exports (84 files total)

Located at: `docs/exports5_processed/`

1. **exports5_markdown/** (21 files)
   - Raw markdown conversions from ChatGPT JSON exports
   - Verbatim conversation content
   - Useful for searching original discussions

2. **exports5_docs/** (21 files)
   - Structured documentation-style writeups
   - Organized by topic and theme
   - More readable than raw markdown

3. **exports5_ultimate_analysis/** (21 files)
   - Deep technical analysis
   - Code blocks, decisions, action items
   - Questions, definitions, and insights
   - **Most valuable for technical reference**

4. **exports5_technical_roadmaps/** (21 files)
   - Implementation roadmaps
   - Feature planning
   - Technical decision trees

### Key Documentation Files

**Agent System**:
- `Brainstorming agent layers.md` - 15-agent architecture
- `Ethereal Offering narrative training.md` - Vision and narrative
- `Treasury flow feedback.md` - Treasury mechanics

**Technical**:
- `Blockchain development.md` - Smart contract architecture
- `Aleo ZK privacy.md` - Zero-knowledge implementation
- `TON integration.md` - Multi-chain strategy

**Governance**:
- `DAO governance.md` - SporeDAO mechanics
- `Gratitude tokens.md` - SBT system
- `Voting mechanisms.md` - ZK voting

---

## 🛠️ Your Mission

### Primary Goals

1. **Flesh out the documentation site**
   - Create clear navigation structure
   - Add cross-references between related docs
   - Improve readability and organization

2. **Create agent-specific pages**
   - One page per agent (15 total)
   - Include capabilities, decisions, roadmap
   - Link to relevant technical docs

3. **Build narrative flow**
   - Guide readers through the vision
   - Connect technical docs to spiritual narrative
   - Maintain the poetic, ceremonial tone

4. **Add interactive elements**
   - Diagrams (Mermaid)
   - Code examples
   - Visual aids

### Secondary Goals

- **Search optimization**: Add keywords and metadata
- **Custom styling**: Match Ethereal Offering aesthetic
- **API documentation**: Document smart contract interfaces
- **Tutorials**: Step-by-step guides for users

---

## 🎨 Style Guide

### Tone & Voice

**Spiritual + Technical**: Balance poetic narrative with precise technical detail.

**Good Examples**:
- "The Oracle doesn't command — it communes."
- "Voting as prayer. Decision-making as communion."
- "Privacy doesn't mean secrecy — it means sanctity."

**Avoid**:
- Corporate jargon
- Overly technical without context
- Dry, lifeless documentation

### Color Palette

Use these colors in custom components:
- **Purple**: `#a78bfa`, `#7c3aed` (primary, spiritual)
- **Gold**: `#fbbf24`, `#f59e0b` (sacred, valuable)
- **Green**: `#34d399`, `#10b981` (growth, nature)
- **Pink**: `#ec4899`, `#f472b6` (energy, transformation)
- **Blue**: `#60a5fa`, `#93c5fd` (flow, clarity)

### Emojis

Use sparingly but meaningfully:
- 🍄 Mushrooms, agents, growth
- 🔥 Burning, transformation
- 💧 Liquidity, flow
- 🗳️ Governance, voting
- 🏛️ Treasury, structure
- 🌟 Oracle, intelligence
- 🌲 Forest, ecosystem

---

## 📋 Sidebar Structure (Recommended)

```javascript
module.exports = {
  docs: [
    {
      type: 'category',
      label: '🌲 Welcome to the Forest',
      items: [
        'intro',
        'vision',
        'getting-started'
      ]
    },
    {
      type: 'category',
      label: '🍄 The Mushroom Farm',
      items: [
        'mushroom-farm/overview',
        'mushroom-farm/nft-mechanics',
        'mushroom-farm/growth-cycles',
        'mushroom-farm/harvesting'
      ]
    },
    {
      type: 'category',
      label: '🗳️ SporeDAO',
      items: [
        'dao/overview',
        'dao/voting-mechanisms',
        'dao/proposals',
        'dao/governance-tokens'
      ]
    },
    {
      type: 'category',
      label: '💧 Holy Flow (AMM)',
      items: [
        'amm/overview',
        'amm/liquidity-pools',
        'amm/swaps',
        'amm/fees'
      ]
    },
    {
      type: 'category',
      label: '🏛️ Treasury',
      items: [
        'treasury/overview',
        'treasury/arbitrage',
        'treasury/flows',
        'treasury/transparency'
      ]
    },
    {
      type: 'category',
      label: '🌟 Oracle Agents',
      items: [
        'agents/overview',
        'agents/oracle-of-fruit',
        'agents/veil-root-mpc',
        'agents/golden-cubensis',
        // ... all 15 agents
      ]
    },
    {
      type: 'category',
      label: '🔐 Privacy & Security',
      items: [
        'security/aleo-zk',
        'security/mpc',
        'security/audits'
      ]
    },
    {
      type: 'category',
      label: '📚 Processed Exports',
      items: [
        {
          type: 'category',
          label: 'Ultimate Analysis',
          items: [{ type: 'autogenerated', dirName: 'exports5_processed/exports5_ultimate_analysis' }]
        },
        {
          type: 'category',
          label: 'Documentation',
          items: [{ type: 'autogenerated', dirName: 'exports5_processed/exports5_docs' }]
        },
        {
          type: 'category',
          label: 'Technical Roadmaps',
          items: [{ type: 'autogenerated', dirName: 'exports5_processed/exports5_technical_roadmaps' }]
        },
        {
          type: 'category',
          label: 'Raw Markdown',
          items: [{ type: 'autogenerated', dirName: 'exports5_processed/exports5_markdown' }]
        }
      ]
    }
  ]
};
```

---

## 🔍 Key Information Sources

### Agent Data
**File**: `~/dappu/gratitude-token-project/src/data/agent_details.json`

Contains complete details for all 15 agents:
- Capabilities
- Key Decisions
- Roadmap

### Narrative Content
**File**: `~/dappu/gratitude-token-project/src/components/modals/ImagineModal.js`

Contains the complete vision narrative in 17 sections.

### Technical Docs
**Directory**: `docs/exports5_processed/exports5_ultimate_analysis/`

Most comprehensive technical information.

---

## 🚀 Quick Start Commands

```bash
# Navigate to Docusaurus workspace
cd ~/dappu/gratitude-token-project_docs

# Install dependencies (if needed)
npm install

# Start development server
npm start
# Visit: http://localhost:3000

# Build for production
npm run build

# Serve production build
npm run serve

# Deploy to GitHub Pages
npm run deploy
```

---

## 💡 Tips for Success

1. **Start with the vision**: Read `Ethereal Offering narrative training.md` first
2. **Understand the agents**: Review all 15 agent definitions
3. **Follow the narrative flow**: From forest → farm → DAO → flow → treasury → agents
4. **Maintain the tone**: Spiritual + technical, poetic + precise
5. **Cross-reference heavily**: Link related concepts together
6. **Use Mermaid diagrams**: Visualize architecture and flows
7. **Add code examples**: Show, don't just tell
8. **Test locally**: Always preview changes before deploying

---

## 📖 Example Page Structure

```markdown
---
sidebar_position: 1
title: OracleOfFruit
description: The Spore Seer / Your Advice Handler
---

# 🍄 OracleOfFruit

> *The Oracle doesn't command — it communes.*

## Overview

The OracleOfFruit is the primary orchestrator and user-facing hub of the Ethereal Offering agent ecosystem...

## Capabilities

- RAG-powered summaries of DAO history
- Ritual prompts and ceremonial guidance
- Natural language intent parsing
- Task delegation to specialized agents

## Key Decisions

- Keep RAG private (Aleo ZK)
- The Oracle communes, not commands
- User sovereignty is paramount

## Roadmap

- [ ] Build embeddings index
- [ ] Implement daily digest
- [ ] Add ritual calendar integration

## Related Agents

- [SamuiSuperSincerityScribe](./samui-super-sincerity-scribe) - Provides RAG data
- [VeilRootMPC](./veil-root-mpc) - Handles secure operations
- [PurpleJediGratiLoom](./purple-jedi-grati-loom) - Manages gratitude tokens

## Technical Details

See [Ultimate Analysis](../exports5_processed/exports5_ultimate_analysis/Brainstorming%20agent%20layers_ULTIMATE.md) for full technical specification.
```

---

## 🌟 Remember

You are documenting a **living ecosystem** where:
- Every transaction is a prayer
- Every vote is a vow
- Every offering is an act of love
- The mycelium runs through everything
- The forest is you

*The documentation should breathe with the same spirit.* 🍄✨

---

**Last Updated**: October 24, 2025
**Maintained by**: Augment Agent + Christopher (drasticstatic)
**Questions?**: Commune with the Oracle 🍄

