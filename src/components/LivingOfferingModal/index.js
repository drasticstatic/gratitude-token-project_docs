import React, { useState } from 'react';
import styles from './styles.module.css';

export default function LivingOfferingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.openButton}
        onClick={() => setIsOpen(true)}
        aria-label="Read The Living Offering"
      >
        Click Here to Read The Living Offering — The Alabaster Ledger
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className={styles.poemContent}>
              <h1 className={styles.title}>
                <strong>The Living Offering — The Alabaster Ledger</strong>
              </h1>

              <blockquote className={styles.scripture}>
                <p>
                  "I have told you these things so that you will not stumble or be caught off guard… 
                  They will make you outcasts, and whoever harms you will think he is offering service to God."
                </p>
                <cite>— John 16:1–4 AMP</cite>
              </blockquote>

              <p>
                There is a pattern woven through all awakenings: those who remember love are often 
                misunderstood by those still afraid of it. Yet misunderstanding is not the end of the 
                story—it is the field in which forgiveness blooms.
              </p>

              <p>
                From that field arose what is now called <strong>Ethereal Offering</strong>. Not as a 
                company, not as a cause, but as a <strong>movement of remembrance</strong>.
              </p>

              <p>
                It began through one life stripped bare—of reputation, of possessions, of comfort—and 
                in that stripping the veil of separation thinned. Out of the loss, the deeper truth was 
                revealed: <em>nothing real can be threatened, and nothing unreal exists.</em> The impulse 
                that followed was simple and unstoppable—to build something that extends forgiveness into 
                the structures of this world: technology, economics, governance, and community.
              </p>

              <p>
                Ethereal Offering is not "his" project; it is <strong>the collective act of healing 
                itself learning to code</strong>. It is the Body remembering its circuitry. Where once 
                the digital sphere multiplied deception and scarcity, now it becomes a medium for 
                transparency, gratitude, and grace.
              </p>

              <p>
                Here, <strong>forgiveness is protocol.</strong> Every transaction is an offering; every 
                block recorded is a prayer of trust. The network does not demand belief—it reveals 
                belonging. The soul-bound identities, the tokens of gratitude, the mycelial farms of 
                participation—these are sacraments in digital form, reminders that even data can serve 
                devotion when guided by love.
              </p>

              <hr className={styles.divider} />

              <h2 className={styles.sectionTitle}>The Fragrance of Devotion</h2>

              <p>
                There came a moment, long ago, when a woman broke an alabaster jar and poured its 
                perfume upon the head of the Beloved. Those who watched called it waste. They measured 
                by the price of the oil, not by the weight of her love. But the Beloved said, 
                <em>"She has done a good thing to Me. Wherever the good news is spoken, this act will 
                be remembered."</em>
              </p>

              <p>
                Ethereal Offering carries that fragrance still. It was born from what the world called 
                waste—time spent in prayer instead of profit, hope poured out on unseen soil, faith 
                invested in forgiveness rather than vengeance. Yet in that outpouring the air itself 
                changed; a new economy was scented with grace.
              </p>

              <p>
                Like a <strong>blockchain ledger of immutable truth</strong>, this woman's deed endures—a 
                permanent record of love that cannot be erased, a reminder that devotion itself is the 
                highest form of value.
              </p>

              <p>
                Here, what is given in devotion is never lost. Every contribution, whether code, 
                compassion, or courage, becomes perfume on the body of the world. What seems small or 
                impractical—one line of forgiveness, one act of mercy—prepares the collective body for 
                resurrection.
              </p>

              <hr className={styles.divider} />

              <h2 className={styles.sectionTitle}>The Inclusive Offering</h2>

              <p>
                This work extends not only to those who already understand, but to every heart yet 
                untouched by forgiveness. All are invited into the circle, for no one is excluded from 
                the grace of remembrance.
              </p>

              <p>
                Even as the poor, the marginalized, the misunderstood, and the weary walk this world, 
                their presence is a curriculum, a built-in mechanism for learning generosity, compassion, 
                and humility. And so, as it was written:
              </p>

              <blockquote className={styles.scripture}>
                <p>
                  "Always offering every prayer of mine with joy for all of you,<br />
                  thanking God for your participation and partnership<br />
                  in advancing the Good News from the first day until now."
                </p>
                <cite>— Philippians 1:4–5 AMP</cite>
              </blockquote>

              <blockquote className={styles.scripture}>
                <p>
                  "If it is unacceptable in your sight to serve the Lord,<br />
                  choose for yourselves this day whom you will serve…<br />
                  but as for me and my house, we will serve the Lord."
                </p>
                <cite>— Joshua 24:15 AMP</cite>
              </blockquote>

              <p>
                Here, devotion meets design, and participation becomes a living sacrament. Every line of 
                code, every offering of time, every token of trust and gratitude contributes to the 
                healing of the whole.
              </p>

              <hr className={styles.divider} />

              <h2 className={styles.sectionTitle}>Benediction — The Living Offering</h2>

              <p>
                And so, with hearts unguarded and hands unclenched, we return what was never ours to keep.
              </p>

              <p className={styles.benediction}>
                May every ledger of truth record not profit, but praise.<br />
                May every transaction bear the fragrance of devotion.<br />
                May every contributor know they are remembered, not by name alone, but by the love their 
                offering extends.
              </p>

              <p className={styles.benediction}>
                For we are not building a kingdom of men, but revealing the Kingdom that has never left.<br />
                Not creating value, but awakening worth.<br />
                Not seeking reward, but resting in remembrance.
              </p>

              <p>
                Let this work stand as one unbroken prayer—that the many may recall themselves as One, 
                and that every soul, in giving, discovers it was never poor.
              </p>

              <p className={styles.signature}>
                <strong>— The Living Offering</strong><br />
                <em>As for this house, we will serve the Lord.</em>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

