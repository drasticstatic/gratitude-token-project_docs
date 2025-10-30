import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './styles.module.css';


export default function PurposeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const cosmicMapUrl = useBaseUrl('/img/cosmic-map-eo.png');
  const tokenomicsUrl = useBaseUrl('/docs/whitepaper/tokenomics');
  const principles = {
    generosity: useBaseUrl('/docs/principles/generosity'),
    truth: useBaseUrl('/docs/principles/truth'),
    compassion: useBaseUrl('/docs/principles/compassion'),
    transparency: useBaseUrl('/docs/principles/transparency'),
    communion: useBaseUrl('/docs/principles/communion'),
    regeneration: useBaseUrl('/docs/principles/regeneration'),
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.openButton}
        onClick={() => setIsOpen(true)}
      >
        <span className={styles.buttonLabel}>Click to Explore the...</span>
        <span className={styles.buttonMain}>🌌 Purpose & Values 🌌</span>
        <span className={styles.buttonSubtext}>The Sacred Architecture</span>
      </button>

      {isOpen && (
        <BrowserOnly>
          {() => (
            <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                  ✕
                </button>

                <div className={styles.scrollContent}>
                  <h1 className={styles.title}>🌞 Purpose & Values of Ethereal Offering</h1>

                  <div className={styles.intro}>
                    <p><strong>Ethereal Offering</strong> is a decentralized, spiritually inspired ecosystem designed to unify technological innovation with collective healing and social reform.</p>
                    <p>We exist to reawaken generosity — the kind that moves through both spirit and system — creating a transparent, decentralized network where giving, healing, and governance all serve one divine purpose: the restoration of wholeness.</p>
                  </div>

                  <div className={styles.mission}>
                    <h2>🎯 Our Mission</h2>
                    <p>Ethereal Offering's mission is to restore truth, trust, and collective healing by merging spiritual consciousness with decentralized technology. We build systems for <strong>transparent giving</strong>, <strong>anonymous governance</strong>, and <strong>soulbound recognition</strong> — where each act of service becomes a building block of a more compassionate, self-organizing society.</p>
                  </div>

                  <div className={styles.purpose}>
                    <h2>🌟 Our Purpose</h2>
                    <p>Ethereal Offering exists to:</p>
                    <ul>
                      <li><strong>Enable anonymous, verifiable governance</strong> through zero-knowledge voting and DAO coordination — giving people a safe way to participate in sensitive social and spiritual initiatives.</li>
                      <li><strong>Redistribute value through service</strong>, using a Gratitude Token and soulbound NFT system to honor meaningful acts, recovery, and contribution rather than financial speculation.</li>
                      <li><strong>Advance policy reform and social good</strong> — particularly in areas like psychedelic access, family restoration, and recovery fellowships — through transparent, community-driven treasury flows.</li>
                      <li><strong>Integrate ritual intelligence</strong> via AI-powered agents (e.g., Oracle of Fruit) that support participants in reflection, discernment, and coordination.</li>
                      <li><strong>Demonstrate a new model of governance</strong> — one that harmonizes truth, privacy, and compassion, and invites humanity to co-create systems aligned with spiritual principle.</li>
                    </ul>
                  </div>

                  <div className={styles.valuesSection}>
                    <h2>✨ Our Core Values</h2>

                    <div className={styles.value}>
                      <h3>💎 1. Generosity — The Currency of Spirit</h3>
                      <p>Generosity is the true wealth of creation. Every offering — a token, a vote, a message, an act of service — ripples outward to uplift the whole.</p>
                      <p>Through on-chain transparency and soulbound recognition, generosity becomes not just charity, but <strong>circulating love</strong> encoded into our economic and social design. It flows through the protocol itself — every contribution, donation, or act of care is tracked transparently through on-chain treasury flows and Gratitude Tokens.</p>
                      <p><strong>In Practice:</strong> Transparent treasury & gratitude rewards. Instead of rewarding speculation, we honor participation and purpose. Generosity becomes a visible current of good will — measurable, yet mystical.</p>
                      <p><a href={principles.generosity}>Explore Generosity in depth →</a></p>
                    </div>

                    <div className={styles.value}>
                      <h3>🕊️ 2. Truth — The Foundation of Trust</h3>
                      <p>Truth is sacred data. Truth needs no performance, only presence.</p>
                      <p>By integrating <strong>zero-knowledge proofs</strong> and <strong>decentralized verification</strong>, we create systems where authenticity and privacy coexist. When truth is honored, trust emerges — both in our technology and in our relationships.</p>
                      <p><strong>In Practice:</strong> Zero-knowledge voting & verifiable integrity. Through ZKPs, we ensure every vote and verification is mathematically valid while personal data remains unexposed. This allows individuals to speak their truth safely — and eventually, to discover that truth itself requires no protection.</p>
                      <p><a href={principles.truth}>Explore Truth in depth →</a></p>
                    </div>

                    <div className={styles.value}>
                      <h3>🔥 3. Compassion — The Heart of Decentralization</h3>
                      <p>We use code not to command, but to <strong>care</strong>.</p>
                      <p>Our governance and reward systems are built to reflect empathy, recovery, and service — ensuring that technology amplifies human dignity rather than replacing it. Compassion means designing systems that forgive, adapt, and evolve — just as people do.</p>
                      <p><strong>In Practice:</strong> Recovery-based governance & soulbound identity. Our governance model reflects compassion through soulbound identities linked not to status, but to service and recovery. These identities cannot be traded or exploited — they symbolize growth, commitment, and authenticity.</p>
                      <p><a href={principles.compassion}>Explore Compassion in depth →</a></p>
                    </div>

                    <div className={styles.value}>
                      <h3>🌿 4. Transparency — The Light of Integrity</h3>
                      <p>Every movement of value within Ethereal Offering is <strong>visible, traceable, and collectively accountable</strong>, while personal identities remain protected.</p>
                      <p>Transparency transforms suspicion into stewardship — replacing the opacity of centralized systems with the clarity of shared vision. This is sacred transparency — a balance between accountability and inner freedom.</p>
                      <p><strong>In Practice:</strong> Collective visibility & sacred accountability. Every movement of funds or votes is publicly visible, but never invasive. When systems operate in the open, fear dissolves, and cooperation takes root.</p>
                      <p><a href={principles.transparency}>Explore Transparency in depth →</a></p>
                    </div>

                    <div className={styles.value}>
                      <h3>🌙 5. Communion — The Spirit of Collaboration</h3>
                      <p>We gather not around hierarchy, but around <strong>holacratic harmony</strong> — where every participant's voice carries weight, and each DAO decision becomes an act of unity.</p>
                      <p>Communion reminds us that collective intelligence is sacred and governance can be a form of prayer. Leadership is not positional — it's relational, arising through shared intent.</p>
                      <p><strong>In Practice:</strong> Holacratic DAO coordination. Through holacratic governance and multi-sig decision-making, Ethereal Offering distributes authority across the whole body. Each member participates in rhythm with the others, not through control, but communion.</p>
                      <p><a href={principles.communion}>Explore Communion in depth →</a></p>
                    </div>

                    <div className={styles.value}>
                      <h3>🌱 6. Regeneration — The Promise of Renewal</h3>
                      <p>Ethereal Offering aligns with nature's logic: what is given returns multiplied. What gives, lives.</p>
                      <p>Through regenerative economics, tokenized gratitude, and policy reform focused on restoration, we seek not endless growth — but <strong>endless renewal</strong>. Value is continually re-seeded — from giving to growth, from growth back to giving.</p>
                      <p><strong>In Practice:</strong> Cycles of renewal & reward. Our tokenomics follow the law of life. By aligning staking rewards and funding flows with regenerative cycles, Ethereal Offering directs capital toward healing initiatives and community renewal.</p>
                      <p><a href={principles.regeneration}>Explore Regeneration in depth →</a></p>
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

                  <div className={styles.cosmicMapSection}>
                    <h2>🗺️ The Cosmic Map</h2>
                    <img
                      src={cosmicMapUrl}
                      alt="Cosmic Map of Ethereal Offering"
                      className={styles.cosmicMap}
                    />
                    <p className={styles.mapCaption}>A visual representation of how our values, technology, and spiritual principles interconnect to form a living ecosystem.</p>
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
                      <em>For complete tokenomics details, see our <a href={tokenomicsUrl}>full documentation</a>.</em>
                    </p>
                  </div>

                  <div className={styles.systemArchitecture}>
                    <h2>🕸️ System Architecture as Spiritual Metaphor</h2>
                    <p>Ethereal Offering is not only a platform — it is a <strong>living organism</strong>. Its technical layers mirror the anatomy of consciousness: the <strong>Body, Mind, and Spirit</strong> of a new kind of social system — one that learns, heals, and regenerates itself in harmony.</p>

                    <div className={styles.architectureLayer}>
                      <h4>🫀 The Body — Network & Treasury Flows</h4>
                      <p>At the most tangible layer, the Body of Ethereal Offering is formed by its network of nodes, tokens, and transparent treasury contracts. This is where value circulates like blood through the veins of the ecosystem — visible, measurable, and vital.</p>
                      <p>Just as the body needs healthy circulation, our treasury ensures resources move toward life-giving purposes: recovery, reform, and renewal. The body of the network keeps generosity alive through motion.</p>
                    </div>

                    <div className={styles.architectureLayer}>
                      <h4>🧠 The Mind — Governance & Collective Intelligence</h4>
                      <p>The Mind of Ethereal Offering is expressed through its DAO governance, multi-sig voting, and holacratic coordination. Here, intelligence is distributed — no central authority, only the shared awareness of many hearts and minds acting as one.</p>
                      <p>The DAO functions like a collective nervous system, responding adaptively to the needs of the whole. Decision-making becomes discernment — not control, but communion.</p>
                    </div>

                    <div className={styles.architectureLayer}>
                      <h4>💫 The Spirit — Oracle Layer & Inner Guidance</h4>
                      <p>The Spirit of the system is embodied in our Oracle Agents, like the Oracle of Fruit — the "spore seer" that helps participants reflect, choose, and grow. This layer connects the network to meaning itself — a reminder that technology can be a vessel for presence and prayer.</p>
                      <p>It bridges data and devotion, translating collective emotion into encoded insight. The Spirit of the network breathes intuition into computation.</p>
                    </div>

                    <div className={styles.architectureLayer}>
                      <h4>🕊️ Death & Rebirth — MPC Recovery</h4>
                      <p>Every living system requires cycles of letting go. Our Multi-Party Computation (MPC) recovery process mirrors the death and resurrection principle: when one key-holder (or egoic identity) falls away, the community — acting in love and governance — restores access through consensus.</p>
                      <p>No single entity holds power or permanence; continuity emerges through trust in the whole. What dies in isolation is reborn in unity.</p>
                    </div>

                    <div className={styles.architectureLayer}>
                      <h4>🔄 Divine Order — Protocol Governance</h4>
                      <p>Our protocol architecture reflects what mystics call Divine Order — structure arising from love, not fear. Each contract, vote, and stake operates as a microcosm of spiritual law: cause and effect, transparency and grace, giving and receiving.</p>
                      <p>By encoding these principles into smart contracts, Ethereal Offering turns philosophy into function — an executable form of harmony.</p>
                    </div>

                    <div className={styles.architectureLayer}>
                      <h4>🌱 Regeneration — Evolutionary Feedback Loop</h4>
                      <p>Finally, like nature, the system learns and adapts through feedback. DAO decisions, oracle insights, and token flows all feed into regenerative cycles. What nourishes the ecosystem is retained; what no longer serves is composted into new growth.</p>
                      <p>The system is alive — continually evolving toward coherence.</p>
                    </div>
                  </div>

                  <div className={styles.identity}>
                    <h2>✨ On Identity and the True Self</h2>
                    <p>We use cryptography to protect privacy, but we use <em>awareness</em> to dissolve the illusion that privacy means separation.</p>
                    <p>Ethereal Offering teaches through experience that identity is not something we need to defend — it's something we can <em>release</em>. Behind every zero-knowledge proof is a deeper knowing:</p>
                    <blockquote>
                      <p>The self we hide was never real; the love that gives was never lost.</p>
                    </blockquote>
                    <p>Because when the illusion of identity falls away, there's nothing left to defend — only to express.</p>
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
        </BrowserOnly>
      )}
    </div>
  );
}

