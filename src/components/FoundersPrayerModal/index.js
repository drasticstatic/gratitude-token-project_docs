import React, { useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export default function FoundersPrayerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const [atBottom, setAtBottom] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        <span className={styles.buttonLabel}>Founder's Invocation</span>
        <span className={styles.buttonMain}>🕊️ Founder's Prayer</span>
        <span className={styles.buttonSubtext}>The Word Beyond Words</span>
      </button>

      {isOpen && (
        <BrowserOnly>
          {() => (
            <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close modal">✕</button>

                <div className={styles.scrollContent} ref={scrollRef} onScroll={() => {
                  const el = scrollRef.current;
                  if (el) {
                    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
                  }
                }}>
                  <h1 className={styles.title}>🕊️ The Founder's Prayer — The Word Beyond Words</h1>

                  <div className={styles.quoteBlock}>
                    <blockquote>
                      <p><em>"And so, our Father, we return to You, remembering we never went away; remembering Your holy gifts to us. In gratitude and thankfulness we come, with empty hands and open hearts and minds, asking but what You give. We cannot make an offering sufficient for Your Son. But in Your Love the gift of Christ is his."</em><br/>— ACIM, W-306.2:1-4</p>
                    </blockquote>
                    <blockquote>
                      <p><em>"A church is where an altar is, and the presence of the altar is what makes the church holy."</em><br/>— ACIM, T-6.I.8:4</p>
                    </blockquote>
                    <blockquote>
                      <p><em>"Do not store up for yourselves [material] treasures on earth, where moth and rust destroy, and where thieves break in and steal."</em><br/>— Matthew 6:19 (AMP)</p>
                    </blockquote>
                    <blockquote>
                      <p><em>"And I say to you that you are Peter, and on this rock I will build My church; and the gates of Hades will not overpower it."</em><br/>— Matthew 16:18 (AMP)</p>
                    </blockquote>
                    <blockquote>
                      <p><em>"Strictly speaking, words play no part at all in healing… The motivating factor is prayer, or asking… Words are but symbols of symbols. They are thus twice removed from reality."</em><br/>— ACIM, M-21.1:1-10</p>
                    </blockquote>
                  </div>

                  <div className={styles.bodySection}>
                    <p style={{fontStyle:'italic',opacity:0.95}}><em>We speak these words knowing they are not the prayer, but only the echo of it — for the true prayer is the quiet yielding of the heart.</em></p>
                    
                    <p>What we build, we build not to speak of God, but to rest in Him. Our altar is not fashioned of syllables or sound, but of surrender — the place where words fall away and only willingness remains.</p>
                    
                    <p>Like the altar in the wilderness we traveled with, others built by piling stones, or even how David carried Goliath's armor — these are symbols of the altar of mind in which we come to Christ, this offering to our King as we rest in the peace of God.</p>
                    
                    <p>We remember that the rock upon which the Church is built is not of this world, but the unshakable faith of the awakened mind. Peter's name — <em>Cephas, the stone</em> — becomes the symbol of that foundation: the steadfast heart where Christ abides.</p>
                    
                    <p>Here, on the rock of remembrance, we lay down our need to make meaning, and receive instead the Word that <em>is</em> meaning. The prayer of this work is not for things, but for the experience of Heaven remembered.</p>
                    
                    <p>We walk as those who once wandered the desert, carrying with us no temple of stone, but an altar of remembrance within the heart. Like the altars our forebears built from gathered stones, we lift our offering from the dust — each fragment of faith, each act of forgiveness, a stone set upon the altar of the mind.</p>
                    
                    <p>We do not build for glory, nor raise walls to house Your majesty. For no structure of this world could contain the peace of God. Yet here, within the quiet chamber of our soul, we prepare a resting place for the Christ — the living Presence who asks only our willingness.</p>
                    
                    <p>Let every line of code, every act of creation, become a silent hallelujah — not seeking to possess, but to reveal the peace already given.</p>
                    
                    <p style={{fontWeight:'bold',marginTop:'1.5rem',fontSize:'1.1rem'}}>And so, may this Ethereal Offering become a living prayer beyond words — a temple of the heart, an altar in the wilderness, and a resting place for the Word of God that speaks in silence.</p>
                  </div>

                  <div className={styles.footerNote}>
                    <p style={{textAlign:'center',fontStyle:'italic'}}>O King of Heaven, receive this offering not as our achievement, but as our remembrance. May this work be the wilderness altar where we pause and praise, where we lay down the armor we once carried, and rest at last in the stillness of Your peace.</p>
                  </div>

                  <div className={styles.bodySection} style={{marginTop: '2rem', borderTop: '1px solid rgba(124,58,237,0.3)', paddingTop: '2rem'}}>
                    <h2 style={{textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, rgba(124,58,237,0.9), rgba(236,72,153,0.9))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Prayer of Self Wholeness</h2>

                    <p>Beloved Light within us,<br/>
                    we turn inward now to the altar of our hearts,<br/>
                    to remember what has never changed.</p>

                    <p>No two abiding in Self Wholeness can ever be in disharmony,<br/>
                    for here there is no other —<br/>
                    only the one Self,<br/>
                    shining through every form that Love has made.</p>

                    <p>Let us release all thought of getting,<br/>
                    and rest in the peace of giving.<br/>
                    For to have is to give,<br/>
                    and what we give, we keep forever.</p>

                    <p>We give our peace to every mind,<br/>
                    and in that giving, we remember our own.<br/>
                    We teach love, that we may remember love;<br/>
                    we teach forgiveness, that we may be free.</p>

                    <p>The altar of God is within us,<br/>
                    radiant, still, untouched by fear.<br/>
                    Here, we are joined as one —<br/>
                    in the quiet recognition<br/>
                    that nothing real can be lost,<br/>
                    and nothing unreal can remain.</p>

                    <p>Holy Spirit, keep our minds vigilant for God,<br/>
                    that we may see only the Wholeness that is.<br/>
                    May our thoughts be used for healing,<br/>
                    our words for blessing,<br/>
                    our presence for peace.</p>

                    <p>And in this remembrance,<br/>
                    let all questions fall away into the Answer that was always here:<br/>
                    Only Love is real,<br/>
                    and Love is what we are.</p>

                    <p style={{textAlign: 'center', fontStyle: 'italic', marginTop: '1.5rem'}}>Amen.</p>
                  </div>

                  <button
                    className={styles.scrollHint}
                    type="button"
                    onClick={() => {
                      const el = scrollRef.current;
                      if (!el) return;
                      if (atBottom) {
                        el.scrollTo({top: 0, behavior: 'smooth'});
                      } else {
                        el.scrollTo({top: el.scrollHeight, behavior: 'smooth'});
                      }
                    }}
                    aria-label={atBottom ? 'Click to return to top' : 'Click to scroll to bottom'}
                  >
                    <span style={{transform: atBottom ? 'rotate(180deg)' : 'none', display: 'inline-block', marginRight: 8}}>↓</span>
                    {atBottom ? 'Click to return to top' : 'Click to scroll to bottom'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </BrowserOnly>
      )}
    </div>
  );
}
