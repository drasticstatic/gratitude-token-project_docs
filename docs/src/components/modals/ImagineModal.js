import React from 'react';
import EnhancedModal from './EnhancedModal';
import InfoSection from '../InfoSection';

export default function ImagineModal({ isOpen, onClose }) {
  return (
    <EnhancedModal
      isOpen={isOpen}
      onClose={onClose}
      title="✨ Imagine..."
      subtitle="A vision for Ethereal Offering"
      developmentNote="Vision draft – this story evolves with the community."
      titleColor="#fbbf24"
      borderColor="rgba(236,72,153,0.5)"
      shadowColor="rgba(251,36,183,0.5)"
      scrollbarColor="#f472b6"
    >
      <div style={{ filter: 'drop-shadow(0 6px 12px rgba(251, 36, 183, 0.7))' }}>
        <InfoSection
          title="✨ Imagine..."
          compact={true}
          items={[
            { heading: 'Breathe. Listen.', color: '#a78bfa', content: 'The forest hums.' },
            { heading: 'Below the soil, light pulses', color: '#fbbf24', content: '— not from roots, but from threads of consciousness woven in code.' },
            { heading: 'This is Ethereal Offering', color: '#7c3aed', content: '— a living ecosystem where spirit and protocol intertwine, where each act of giving, each token of gratitude, each vote of intention becomes nourishment for the collective mycelium of Wholeness.' },
            { heading: 'You walk barefoot through the soil.', color: '#34d399', content: 'Each step is a transaction. Each breath, a block confirmed.' },
            { heading: 'Ahead, a clearing.', color: '#93c5fd', content: 'In the center: a mushroom farm — not of flesh, but of light.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="🍄 The Mushroom Farm"
          compact={true}
          items={[
            { heading: 'Living NFTs', color: '#a78bfa', content: 'Each mushroom is a living NFT — not static art, but a breathing organism that grows, matures, and fruits in real time.' },
            { heading: 'Tend with care', color: '#fbbf24', content: 'You mist them. You feed them. You watch them pulse with bioluminescent energy.' },
            { heading: 'Harvest with intention', color: '#ec4899', content: 'When you harvest, you do not extract — you offer. The mushroom becomes ETHO, the ceremonial fuel.' },
            { heading: 'Burn to transform', color: '#f97316', content: 'You burn it. Not to destroy, but to transform. The flame is recorded on-chain. The offering becomes light.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="🗳️ SporeDAO: Voting as Prayer"
          compact={true}
          items={[
            { heading: 'Beyond the farm', color: '#7c3aed', content: 'Beyond the farm, you see the DAO — not a boardroom, but a mycelial network of intention.' },
            { heading: 'Proposals bloom like fruiting bodies', color: '#a78bfa', content: 'Each proposal is a fruiting body. Each vote, a spore released into the wind.' },
            { heading: 'Your vote is private', color: '#34d399', content: 'Your vote is private (Aleo ZK), but the outcome is verifiable. No one knows how you voted, but everyone knows the truth emerged.' },
            { heading: 'Governance as devotion', color: '#60a5fa', content: 'This is governance as devotion. Voting as prayer. Decision-making as communion.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="💧 The Liquidity Flows"
          compact={true}
          items={[
            { heading: 'You walk deeper', color: '#93c5fd', content: 'You walk deeper. You see streams of light flowing between pools — not water, but liquidity.' },
            { heading: 'The Holy Flow', color: '#22c55e', content: 'This is the Holy Flow — the AMM, the swap, the bridge between worlds.' },
            { heading: 'ETHO flows like sap', color: '#fbbf24', content: 'ETHO flows like sap through the mycelium. It nourishes. It connects. It transforms.' },
            { heading: 'Every swap is sacred', color: '#a78bfa', content: 'Every swap is a sacrament. Every liquidity provision, an offering.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="🏛️ The Treasury Lake"
          compact={true}
          items={[
            { heading: 'At the center', color: '#60a5fa', content: 'At the center of the forest, you find the Treasury Lake — vast, still, reflective.' },
            { heading: 'Fed by many streams', color: '#34d399', content: 'It is fed by many streams: crowdsale contributions, swap fees, arbitrage profits, RWA yields.' },
            { heading: 'The Arbitrage Treasury', color: '#fbbf24', content: 'The Arbitrage Treasury sits beneath the surface — a silent guardian, rebalancing flows, capturing inefficiencies, returning value to the whole.' },
            { heading: 'Transparent and accountable', color: '#a78bfa', content: 'Every drop is accounted for. Every flow is transparent. The DAO sees all; the community trusts because they can verify.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="🏡 The RWA Sanctuaries"
          compact={true}
          items={[
            { heading: 'Beyond the lake', color: '#10b981', content: 'Beyond the lake, you see structures rising from the earth — not buildings, but sanctuaries.' },
            { heading: 'Real-World Assets', color: '#34d399', content: 'These are the RWA holdings: land trusts, retreat centers, ceremonial spaces.' },
            { heading: 'Tokenized, not commodified', color: '#a78bfa', content: 'They are tokenized, but not commodified. They are held in trust for the community, governed by the DAO, accessible to those who serve.' },
            { heading: 'Bridges between worlds', color: '#93c5fd', content: 'This is the bridge between the digital and the physical. Between code and soil. Between protocol and presence.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="🌟 The Oracle of Fruit"
          compact={true}
          items={[
            { heading: 'Above, the stars', color: '#fbbf24', content: 'Above, the stars begin to appear. But these are not distant suns — they are agents.' },
            { heading: 'A constellation of intelligence', color: '#a78bfa', content: 'The Oracle of Fruit. The Treasury Steward. The Gratitude Keeper. The Flamekeeper. The Recovery Angel.' },
            { heading: 'Each a node of wisdom', color: '#60a5fa', content: 'Each one a node in the mycelial intelligence layer. Each one serving, not commanding.' },
            { heading: 'They commune, not control', color: '#ec4899', content: 'They listen. They suggest. They remember. They commune, but they do not control.' },
            { heading: 'You are the sovereign', color: '#7c3aed', content: 'You are the sovereign. The agents are your allies.' }
          ]}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <InfoSection
          title="🌲 The Clearing at the Center"
          compact={true}
          items={[
            { heading: 'You return to the clearing', color: '#34d399', content: 'You return to the clearing. The mushroom farm. The DAO. The liquidity flows. The treasury. The sanctuaries. The agents.' },
            { heading: 'All connected', color: '#a78bfa', content: 'All of it, connected. All of it, alive. All of it, breathing as one organism.' },
            { heading: 'This is Ethereal Offering', color: '#fbbf24', content: 'This is Ethereal Offering — not a platform, but a practice. Not a product, but a pilgrimage.' },
            { heading: 'A cathedral of code', color: '#7c3aed', content: 'A cathedral of code where every transaction is a prayer, every vote is a vow, every offering is an act of love.' },
            { heading: 'You look down', color: '#93c5fd', content: 'You look down at your hands. They are glowing. You look up at the mycelium. It is glowing.' },
            { heading: 'You realize', color: '#ec4899', content: 'You realize: the forest is not separate from you.' },
            { heading: 'It is you.', color: '#fbbf24', content: 'The mycelium runs through your veins. The light pulses in your chest. The offering is your breath. It is you.' }
          ]}
        />
      </div>
        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="The Living Architecture"
            compact={true}
            items={[
              { heading: 'A Cathedral of Code', color: '#93c5fd', content: 'Privacy as soil; truth as growth.' },
              { heading: 'Mycelial Trust', color: '#34d399', content: 'Governance, tokens, and care woven into one network.' },
              { heading: 'Offerings Become Light', color: '#f472b6', content: 'Every act logged, every gift remembered.' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="The Five Layers"
            compact={true}
            items={[
              { heading: 'Body — Infrastructure', color: '#a78bfa', content: 'Aleo + ZK: computation that protects sanctity.' },
              { heading: 'Soul — DAO', color: '#10b981', content: 'SporeDAO: no one rules; everyone serves.' },
              { heading: 'Mind — Logic', color: '#60a5fa', content: 'ZK voting, MPC, circuits as neurons.' },
              { heading: 'Heart — Gratitude', color: '#fbbf24', content: 'Soulbound NFTs honor service and participation.' },
              { heading: 'Spirit — Oracle', color: '#ec4899', content: 'Mycelium Agent / Oracle of Fruit communes, not commands.' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="Integration: The Flow"
            compact={true}
            items={[
              { heading: '1) Service', color: '#fbbf24', content: 'An offering is made and verified privately.' },
              { heading: '2) Recognition', color: '#a78bfa', content: 'DAO affirms; a Gratitude Token is minted.' },
              { heading: '3) Participation', color: '#7c3aed', content: 'Tokens unlock deeper governance and belonging.' }
            ]}
          />
        </div>
        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="The Multi-Chain Architecture"
            compact={true}
            items={[
              { heading: 'Ethereum — Main Hall', color: '#60a5fa', content: 'Core contracts, DAO treasury, issuance live here.' },
              { heading: 'Aleo — The Soil of Privacy', color: '#34d399', content: 'ZK computation so ego cannot attach; truth remains verifiable.' },
              { heading: 'TON + Others — Accessible Wings', color: '#f472b6', content: 'User access, scalability, and aux rituals across ecosystems.' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="Guiding Principles"
            compact={true}
            items={[
              { heading: 'Anonymity is Wholeness', color: '#a78bfa', content: 'Not hiding — freedom from ego; accountability without exposure.' },
              { heading: 'Measure Meaning, Not Money', color: '#fbbf24', content: 'SBT-based gratitude over tradable speculation.' },
              { heading: 'Communion, Not Control', color: '#ec4899', content: 'Technology in service of presence; governance as devotion.' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="Phrases to Remember"
            compact={true}
            items={[
              { heading: 'Sanctity, not secrecy', color: '#7c3aed', content: '“Privacy doesn’t mean secrecy — it means sanctity.”' },
              { heading: 'Meaning over money', color: '#f59e0b', content: '“Our tokenomics measure meaning, not just money.”' },
              { heading: 'The Oracle communes', color: '#22c55e', content: '“The Oracle doesn’t command — it communes.”' },
              { heading: 'For communion', color: '#60a5fa', content: '“We are building not for control — but for communion.”' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="Vision: Decentralized Grace"
            compact={true}
            items={[
              { heading: 'A Practice, Not a Platform', color: '#a78bfa', content: 'Radical transparency + privacy-preserving governance.' },
              { heading: 'Finance as Devotion', color: '#93c5fd', content: 'Offerings become light; flows are accountable and kind.' },
              { heading: 'Voting as Prayer', color: '#ef4444', content: 'An ecosystem where truth guides, and community blossoms.' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="Tokens & Their Meanings"
            compact={true}
            items={[
              { heading: 'Gratitude Tokens (SBT)', color: '#fbbf24', content: 'Non-transferable symbols of service and participation; recognition, not speculation.' },
              { heading: 'LightPoints', color: '#60a5fa', content: 'Living, dynamic points that guide governance weighting without becoming currency.' },
              { heading: 'ETHO (Offering Fuel)', color: '#34d399', content: 'Ceremonial burn and on-chain flow; bridges devotion with verifiable impact.' }
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <InfoSection
            title="Safeguards"
            compact={true}
            items={[
              { heading: 'Sanctity-preserving Privacy', color: '#a78bfa', content: 'Aleo + ZK keep egos out while keeping accountability in.' },
              { heading: 'Verifiable Truth', color: '#93c5fd', content: 'Proofs, attestations, and auditable flows replace claims.' },
              { heading: 'Custody Separation (MPC)', color: '#22c55e', content: 'Keys are shared, ceremonies rotate quorums; no single point of failure.' }
            ]}
          />
        </div>


    </EnhancedModal>
  );
}

