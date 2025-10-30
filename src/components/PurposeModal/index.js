import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function PurposeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button 
        className={styles.openButton}
        onClick={() => setIsOpen(true)}
      >
        <span className={styles.buttonLabel}>Explore the...</span>
        <span className={styles.buttonMain}>🌌 Purpose & Values 🌌</span>
        <span className={styles.buttonSubtext}>The Sacred Architecture</span>
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ✕
            </button>
            
            <div className={styles.scrollContent}>
              <h1 className={styles.title}>🌞 Purpose & Values of Ethereal Offering</h1>
              
              <div className={styles.intro}>
                <p><strong>Ethereal Offering</strong> exists to reawaken generosity — the kind that moves through both spirit and system — creating a transparent, decentralized network where giving, healing, and governance all serve one divine purpose: the restoration of wholeness.</p>
              </div>

              <div className={styles.cosmicMapSection}>
                <h2>The Cosmic Map</h2>
                <img 
                  src={useBaseUrl('/img/cosmic-map-eo.png')} 
                  alt="Cosmic Map of Ethereal Offering" 
                  className={styles.cosmicMap}
                />
              </div>

              <div className={styles.valuesSection}>
                <h2>Our Core Values</h2>

                <div className={styles.value}>
                  <h3>💎 1. Generosity — The Currency of Spirit</h3>
                  <p>We believe generosity is the true wealth of creation. Every offering — a token, a vote, a message, an act of service — ripples outward to uplift the whole. Through on-chain transparency and soulbound recognition, generosity becomes not just charity, but <strong>circulating love</strong> encoded into our economic and social design.</p>
                </div>

                <div className={styles.value}>
                  <h3>🕊️ 2. Truth — The Foundation of Trust</h3>
                  <p>Truth is sacred data. By integrating <strong>zero-knowledge proofs</strong> and <strong>decentralized verification</strong>, we create systems where authenticity and privacy coexist. When truth is honored, trust emerges — both in our technology and in our relationships.</p>
                </div>

                <div className={styles.value}>
                  <h3>🔥 3. Compassion — The Heart of Decentralization</h3>
                  <p>We use code not to command, but to <strong>care</strong>. Our governance and reward systems are built to reflect empathy, recovery, and service — ensuring that technology amplifies human dignity rather than replacing it.</p>
                </div>

                <div className={styles.value}>
                  <h3>🌿 4. Transparency — The Light of Integrity</h3>
                  <p>Every movement of value within Ethereal Offering is <strong>visible, traceable, and collectively accountable</strong>, while personal identities remain protected. Transparency transforms suspicion into stewardship — replacing the opacity of centralized systems with the clarity of shared vision.</p>
                </div>

                <div className={styles.value}>
                  <h3>🌙 5. Communion — The Spirit of Collaboration</h3>
                  <p>We gather not around hierarchy, but around <strong>holacratic harmony</strong> — where every participant's voice carries weight, and each DAO decision becomes an act of unity. Communion reminds us that collective intelligence is sacred and governance can be a form of prayer.</p>
                </div>

                <div className={styles.value}>
                  <h3>🌱 6. Regeneration — The Promise of Renewal</h3>
                  <p>Ethereal Offering aligns with nature's logic: what is given returns multiplied. Through regenerative economics, tokenized gratitude, and policy reform focused on restoration, we seek not endless growth — but <strong>endless renewal</strong>.</p>
                </div>
              </div>

              <div className={styles.essence}>
                <h2>💫 In Essence</h2>
                <blockquote>
                  <p>Generosity is our governance.<br />
                  Truth is our transparency.<br />
                  Compassion is our code.<br />
                  Communion is our coordination.<br />
                  Regeneration is our reward.</p>
                </blockquote>
                <p>Together, these values form the living architecture of Ethereal Offering — a decentralized sanctuary where generosity becomes governance, and every offering restores the world.</p>
              </div>

              <div className={styles.tokenomics}>
                <h2>🪙 Simple Tokenomics Overview</h2>
                <p>Our token ecosystem reflects these values through practical design:</p>
                
                <div className={styles.tokenList}>
                  <div className={styles.token}>
                    <h4>Gratitude Token (GRAT)</h4>
                    <p><strong>Purpose:</strong> Soulbound recognition for authentic service, recovery, and community contribution. Non-transferable, earned through meaningful participation.</p>
                  </div>

                  <div className={styles.token}>
                    <h4>Governance Token</h4>
                    <p><strong>Purpose:</strong> Enable anonymous, verifiable voting through zero-knowledge proofs. Empowers community-driven decision-making in the DAO.</p>
                  </div>

                  <div className={styles.token}>
                    <h4>Treasury Flows</h4>
                    <p><strong>Purpose:</strong> Transparent, on-chain tracking of donations and funding for social causes — psychedelic policy reform, recovery fellowships, and family restoration.</p>
                  </div>
                </div>

                <p className={styles.tokenNote}>
                  <em>For complete tokenomics details, see our <a href={useBaseUrl('/docs/whitepaper/tokenomics')}>full documentation</a>.</em>
                </p>
              </div>

              <div className={styles.systemArchitecture}>
                <h2>🕸️ System Architecture as Spiritual Metaphor</h2>
                <p>Ethereal Offering is not only a platform — it is a <strong>living organism</strong>. Its technical layers mirror the anatomy of consciousness: the <strong>Body, Mind, and Spirit</strong> of a new kind of social system — one that learns, heals, and regenerates itself in harmony.</p>

                <div className={styles.architectureLayer}>
                  <h4>🫀 The Body — Network & Treasury Flows</h4>
                  <p>The Body is formed by our network of nodes, tokens, and transparent treasury contracts. Value circulates like blood through veins — visible, measurable, and vital.</p>
                </div>

                <div className={styles.architectureLayer}>
                  <h4>🧠 The Mind — Governance & Collective Intelligence</h4>
                  <p>The Mind is expressed through DAO governance, multi-sig voting, and holacratic coordination. Intelligence is distributed — no central authority, only shared awareness acting as one.</p>
                </div>

                <div className={styles.architectureLayer}>
                  <h4>💫 The Spirit — Oracle Layer & Inner Guidance</h4>
                  <p>The Spirit is embodied in our Oracle Agents, like the Oracle of Fruit — the "spore seer" that helps participants reflect, choose, and grow. This layer connects the network to meaning itself.</p>
                </div>

                <div className={styles.architectureLayer}>
                  <h4>🕊️ Death & Rebirth — MPC Recovery</h4>
                  <p>Our Multi-Party Computation recovery process mirrors the death and resurrection principle: when one key-holder falls away, the community restores access through consensus. What dies in isolation is reborn in unity.</p>
                </div>

                <div className={styles.architectureLayer}>
                  <h4>🔄 Divine Order — Protocol Governance</h4>
                  <p>Our protocol architecture reflects Divine Order — structure arising from love, not fear. Each contract, vote, and stake operates as a microcosm of spiritual law.</p>
                </div>

                <div className={styles.architectureLayer}>
                  <h4>🌱 Regeneration — Evolutionary Feedback Loop</h4>
                  <p>Like nature, the system learns and adapts through feedback. DAO decisions, oracle insights, and token flows all feed into regenerative cycles.</p>
                </div>
              </div>

              <div className={styles.closing}>
                <blockquote>
                  <p><strong>Ethereal Offering is a digital organism where spirit governs structure.</strong></p>
                  <p>Each contract is a covenant, each vote a prayer, each token a seed of renewal.</p>
                  <p>Through this architecture, technology learns to remember its origin — not as machinery of control, but as an instrument of communion.</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

