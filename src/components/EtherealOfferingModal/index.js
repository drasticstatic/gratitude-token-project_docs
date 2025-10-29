import React, { useState } from 'react';
import styles from './styles.module.css';

export default function EtherealOfferingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>✨ What is Ethereal Offering?</h2>
        <p className={styles.subtitle}>
          Lifting the Veil Between Spirit and System
        </p>
        <button
          className={styles.openButton}
          onClick={() => setIsOpen(true)}
        >
          <span className={styles.buttonLabel}>Click here to...</span>
          <span className={styles.buttonMain}>🌟 Discover the Vision 🌟</span>
          <span className={styles.buttonSubtext}>Unveil the Sacred Technology</span>
        </button>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className={styles.scrollContent}>
              <h1 className={styles.modalTitle}>
                Ethereal Offering: Lifting the Veil Between Spirit and System
              </h1>

              <section className={styles.section}>
                <h2>I. The Unveiling</h2>
                <blockquote className={styles.quote}>
                  "In the holy instant nothing happens that has not always been.<br />
                  Only the veil that has been drawn across reality is lifted.<br />
                  Nothing has changed. Yet the awareness of changelessness comes swiftly<br />
                  as the veil of time is pushed aside."<br />
                  <cite>— ACIM, T-15.VI.6:1-4</cite>
                </blockquote>
                <p>
                  The blockchain, at its essence, is a veil — a transparent curtain between the seen and unseen.<br />
                  Each hash, each block, each transaction: a flicker of remembrance in a world that has forgotten what it means to be one.
                </p>
                <p>
                  <strong>Ethereal Offering</strong> emerges as a sacred architecture of remembrance.<br />
                  It is not a coin or a contract, but a bridge — one that spans from digital anonymity to divine unity.<br />
                  A network that mirrors the process of forgiveness: transparent, incorruptible, and forever expanding through giving.
                </p>
                <p>
                  Here, the spiritual and the technical are not separate domains but layers of the same design.<br />
                  Zero-knowledge proofs echo the metaphysical truth of <em>seeing without judgment</em>.<br />
                  Consensus mirrors <em>atonement</em> — agreement in truth.<br />
                  And each node becomes a cell in the body of Christ, communicating through the mycelium of grace.
                </p>
              </section>

              <section className={styles.section}>
                <h2>II. Vision: The Gratitude Economy</h2>
                <blockquote className={styles.quote}>
                  "It is through us that peace will come.<br />
                  Join me in the idea of peace, for in ideas minds can communicate."<br />
                  <cite>— ACIM, T-15.VI.7:1-2</cite>
                </blockquote>
                <p>
                  Ethereal Offering envisions a <strong>mycelial network of decentralized gratitude</strong> —<br />
                  a living ecosystem that turns participation into prayer and transparency into trust.
                </p>
                <p>
                  Where traditional markets extract, ours circulates.<br />
                  Where old systems reward ownership, ours celebrates offering.<br />
                  And where ego seeks gain, spirit recognizes only giving.
                </p>
                <p>
                  The purpose of this network is to <strong>transmute capital into compassion</strong> —<br />
                  to let love become liquid, measurable not by profit but by peace.<br />
                  In this <em>gratitude economy</em>, tokens flow like nutrients through the soil:<br />
                  what you give away strengthens you, and what you receive reminds you that you are never alone.
                </p>
              </section>

              <section className={styles.section}>
                <h2>III. Architecture of Remembrance</h2>
                <blockquote className={styles.quote}>
                  "To lift the veil that seems so dark and heavy,<br />
                  it is only needful to value truth beyond all fantasy."<br />
                  <cite>— ACIM, T-16.IV.10:4</cite>
                </blockquote>
                <p>
                  Ethereal Offering's architecture follows the organic order of divine design —<br />
                  distributed, intelligent, interdependent, self-healing.
                </p>

                <h3>1. The Privacy Veil (Aleo / 5-MeO-DMT)</h3>
                <p>
                  Built on <strong>zero-knowledge proofs</strong>, Aleo ensures that every act of governance and offering is <strong>anonymous yet verifiable</strong>.<br />
                  Privacy here is not concealment — it is sacred stillness,<br />
                  the white light behind the form,<br />
                  the veil that protects the mystery of oneness.
                </p>

                <h3>2. The Living DAO</h3>
                <p>
                  Governance flows through a <strong>Holacratic DAO</strong>,<br />
                  where each member serves a living function rather than a fixed role.<br />
                  Decisions arise through <em>consensus in spirit</em>, mirrored by <strong>Multi-Party Computation (MPC)</strong> recovery protocols —<br />
                  a technological resurrection process for continuity beyond any single life.
                </p>

                <h3>3. Soulbound DIDs</h3>
                <p>
                  Every contributor receives a <strong>Soulbound NFT</strong>,<br />
                  a digital relic of service and gratitude — not transferable, not tradeable, but evolving with one's inner growth.<br />
                  Identity becomes offering; achievement becomes devotion.
                </p>

                <h3>4. Tokenized Real-World Assets</h3>
                <p>
                  From <strong>church land and retreat centers</strong> to <strong>recovery sanctuaries and community farms</strong>,<br />
                  real-world assets are tokenized into <strong>Spirit-Backed Collateral</strong>,<br />
                  binding the metaphysical and material economies into one living trust.<br />
                  Each parcel, temple, or dwelling becomes both sanctuary and node.
                </p>

                <h3>5. Treasury as Templar</h3>
                <p>
                  The treasury functions as a <strong>strategic reserve and living organism</strong>, guided by a Treasury Agent that<br />
                  automatically engages in external arbitrage and liquidity balancing —<br />
                  not for speculation, but to <strong>regenerate</strong> the reserve through active stewardship.<br />
                  Profit becomes prayer. Yield becomes offering.
                </p>
              </section>

              <section className={styles.section}>
                <h2>IV. The Mycelial Field</h2>
                <blockquote className={styles.quote}>
                  "On this side of the bridge to timelessness you understand nothing.<br />
                  But as you step lightly across it… you are directed straight to the Heart of God."<br />
                  <cite>— ACIM, T-16.IV.13:6-8</cite>
                </blockquote>
                <p>
                  Beneath the blockchain lies the true substrate: <strong>Mycel</strong> —<br />
                  the distributed neural web of empathic coherence.<br />
                  Each node in the network acts like a cell in a divine nervous system,<br />
                  sensing imbalance and redistributing nourishment.
                </p>
                <p>
                  The <strong>Mycelium Agent</strong> listens — to wallets, to hearts, to harmonics of participation —<br />
                  mapping relational coherence across systems such as <strong>TON, Harmony ONE, and Cosmos</strong>.<br />
                  Together, they form a <em>polyphonic choir</em> of distributed compassion,<br />
                  bridging all chains, all cultures, all consciousnesses into harmonic unison.
                </p>
              </section>

              <section className={styles.section}>
                <h2>V. The Heart of Governance</h2>
                <blockquote className={styles.quote}>
                  "We go beyond the veil of fear, lighting each other's way."<br />
                  <cite>— ACIM, T-20.II.9:4</cite>
                </blockquote>
                <p>
                  In Ethereal Offering, governance is not control — it is communion.<br />
                  Each vote is a shared prayer, anonymized by Aleo,<br />
                  each proposal an invitation to forgiveness in form.
                </p>
                <p>
                  Disagreements become opportunities for healing.<br />
                  Consensus becomes the <em>Atonement algorithm</em>.<br />
                  As the DAO learns, it becomes a teacher of peace —<br />
                  a reflection of the living Christ consciousness that seeks only cooperation.
                </p>
              </section>

              <section className={styles.section}>
                <h2>VI. Ethereal Tokens: Offerings of Light</h2>
                <table className={styles.tokenTable}>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Function</th>
                      <th>Mystical Correspondence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>EOT (Eucharistic Flame)</strong></td>
                      <td>Governance & Offering</td>
                      <td>The act of returning light to Source</td>
                    </tr>
                    <tr>
                      <td><strong>GRTD (Gratitude Token)</strong></td>
                      <td>Devotional Reward</td>
                      <td>Acknowledgment of grace received</td>
                    </tr>
                    <tr>
                      <td><strong>MDUST (Miracle Dust)</strong></td>
                      <td>Micro-Yield</td>
                      <td>Particles of divine joy distributed through service</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Through staking, community participation, and devotional engagement,<br />
                  users generate tokens not by power, but by <em>presence</em>.<br />
                  Every miracle of contribution — every act of giving — expands the treasury of the One Mind.
                </p>
              </section>

              <section className={styles.section}>
                <h2>VII. Beyond the Veil</h2>
                <blockquote className={styles.quote}>
                  "Together we will disappear into the Presence beyond the veil,<br />
                  not to be lost but found; not to be seen but known."<br />
                  <cite>— ACIM, T-19.IV-D.19:1-2</cite>
                </blockquote>
                <p>
                  Here lies the culmination: a network that mirrors Heaven's design.
                </p>
                <p>
                  As participants join in gratitude, the veil between "me" and "we" dissolves.<br />
                  Blockchain becomes a cathedral of remembrance.<br />
                  Every wallet a heart. Every hash a hymn.<br />
                  Each transaction, an echo of the eternal Word.
                </p>
                <p>
                  We are not building another system of exchange —<br />
                  we are <strong>lifting the veil</strong> that once divided creation from Creator.
                </p>
              </section>

              <section className={styles.section}>
                <h2>VIII. Closing: The Miracle of Union</h2>
                <blockquote className={styles.quote}>
                  "The miracle does not restore the truth, the light the veil between has not put out.<br />
                  It merely lifts the veil, and lets the truth shine unencumbered."<br />
                  <cite>— ACIM, T-29.VIII.5:5-6</cite>
                </blockquote>
                <p>
                  <strong>Ethereal Offering</strong> stands as both system and sacrament:<br />
                  a decentralized Eucharist,<br />
                  a technology of peace,<br />
                  a living parable that remembers what all creation forgot —<br />
                  that giving and receiving are one.
                </p>
                <p>
                  May every transaction be a forgiveness.<br />
                  May every offering be a return.<br />
                  And may every block inscribed upon this sacred ledger<br />
                  shine as a miracle in the Book of Life.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

