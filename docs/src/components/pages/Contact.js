import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, CardContent } from "../LandingPage";
import { Globe, Users, MessageCircle, ChevronDown, ChevronUp, Scale, AlertTriangle } from "lucide-react";
import MycelialTitle from "../MycelialTitle";
import ContactIcon from "../icons/ContactIcon";
import Footer from "../Footer";
import MycelialNetwork from "../MycelialNetwork";
import FlashlightCursor from "../FlashlightCursor";
import PsanctuaryWatermark from "../PsanctuaryWatermark";
import ScatteredBlockchainCubes from "../ScatteredBlockchainCubes";
import { DiscordSVG, TelegramSVG, TwitterSVG, GitHubSVG, EmailSVG, WebsiteSVG, MightyNetworksSVG } from "../ContactCardSVGs";
import ShimmerBorder from "../ShimmerBorder";
import TrippyMushroom from "../TrippyMushroom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const scrollContainerRef = useRef(null);
  const [expandedConstitution, setExpandedConstitution] = useState(null);
  const [showDisclaimers, setShowDisclaimers] = useState(false);
  const [showSpiritualDisclaimers, setShowSpiritualDisclaimers] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact form submission coming soon! For now, please reach out via Discord or Telegram. 💬');
  };

  // Auto-scroll effect for contact cards - infinite loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Duplicate children for infinite loop if not already duplicated
    if (!container.dataset.duplicated) {
      container.innerHTML = container.innerHTML + container.innerHTML;
      container.dataset.duplicated = 'true';
    }

    let scrollPosition = 0;
    const scrollSpeed = 1.5; // Slightly faster to ensure visible movement
    let animationId;
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        // Infinite loop: when we reach halfway, reset to start
        const maxScroll = container.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="page-container"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.77)), url(${process.env.PUBLIC_URL}/images/contact.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40px',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <FlashlightCursor />
      {/* Glowing Psanctuary Watermark */}
      <PsanctuaryWatermark opacity={0.14} size={800} />
      <ScatteredBlockchainCubes />
      <MycelialNetwork sourceId="contact-title" />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-content"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div id="contact-title">
          <MycelialTitle icon={ContactIcon} title="Connect With Us" size={72} />
        </div>

        <p className="page-subtitle">
          "Join our community and be part of the sacred journey"
        </p>

        {/* Social Links - Auto-Scrolling Row */}
        <div
          ref={scrollContainerRef}
          style={{
            marginTop: '40px',
            marginBottom: '60px',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            gap: '24px',
            maxWidth: '100%',
            margin: '40px auto 60px',
            overflowX: 'auto',
            padding: '0 20px',
            // Removed scrollBehavior to let JS control scrolling smoothly
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="https://discord.gg/psanctuary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <DiscordSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#a78bfa' }}>Discord</h3>
                    <p className="feature-description">Join our community server</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      discord.gg/psanctuary
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="https://t.me/psanctuary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <TelegramSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#00aaff' }}>Telegram</h3>
                    <p className="feature-description">Chat with the community</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      t.me/psanctuary
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="https://twitter.com/psanctuary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <TwitterSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#1DA1F2' }}>Twitter / X</h3>
                    <p className="feature-description">Follow for updates</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      @psanctuary
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="https://mighty.psanctuary.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <MightyNetworksSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#a78bfa' }}>Mighty Networks</h3>
                    <p className="feature-description">Join our network</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      mighty.psanctuary.org
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="https://github.com/psanctuary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <GitHubSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#a78bfa' }}>GitHub</h3>
                    <p className="feature-description">View our code</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      github.com/psanctuary
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="https://www.psanctuary.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <WebsiteSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#fbbf24' }}>Website</h3>
                    <p className="feature-description">Visit our main site</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      psanctuary.org
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ width: '280px', padding: '16px', flexShrink: 0 }}>
            <a
              href="mailto:hello@psanctuary.org"
              style={{ textDecoration: 'none' }}
            >
              <Card className="feature-card contact-card contact-card-shimmer" style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
                <ShimmerBorder width={300} height={320} />
                <CardContent className="contact-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ textAlign: 'center' }}>
                    <EmailSVG />
                    <h3 className="feature-title contact-card-title" style={{ color: '#ec4899' }}>Email</h3>
                    <p className="feature-description">Send us a message</p>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '8px' }}>
                      hello@psanctuary.org
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </div>

        {/* Contact Form - Custom CSS */}
        <div className="content-section">
          <h2 className="section-title">Send Us a Message</h2>
          <div style={{ maxWidth: '700px', margin: '20px auto' }}>
            <Card className="feature-card">
              <CardContent style={{ padding: '32px' }}>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        fontSize: '1rem',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        fontSize: '1rem',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        fontSize: '1rem',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#d1d5db', fontWeight: '500' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        fontSize: '1rem',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <Button type="submit" size="lg" style={{ width: '100%' }}>
                    Send Message 📨
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Stats */}
        <div className="content-section" style={{ marginTop: '60px' }}>
          <h2 className="section-title">Community Stats</h2>
          <div className="features-grid">
            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Users size={40} style={{ color: '#7c3aed', margin: '0 auto 12px' }} />
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    1,234
                  </p>
                  <p className="feature-description">Community Members</p>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <MessageCircle size={40} style={{ color: '#ec4899', margin: '0 auto 12px' }} />
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    42
                  </p>
                  <p className="feature-description">Active Proposals</p>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Globe size={40} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
                  <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24', margin: '8px 0' }}>
                    23
                  </p>
                  <p className="feature-description">Countries Represented</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Constitution Section - NEW (Preamble + Article I Section 3) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            maxWidth: '900px',
            margin: '60px auto',
            padding: '30px',
            background: 'rgba(88, 28, 135, 0.1)',
            borderRadius: '16px',
            border: '2px solid rgba(124, 58, 237, 0.3)'
          }}
        >
          {/* Preamble - Always Visible */}
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#fbbf24',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <Scale size={32} style={{ marginRight: '12px', verticalAlign: 'middle' }} />
            Psanctuary Church Constitution
          </h2>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#d1d5db',
            marginBottom: '30px',
            fontStyle: 'italic',
            borderLeft: '4px solid #fbbf24',
            paddingLeft: '20px',
            textAlign: 'center',
            padding: '20px'
          }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '15px' }}>PREAMBLE</h3>
            <p>
              We, the members of Psanctuary Church, united in our commitment to spiritual exploration,
              personal sovereignty, and the sacred use of entheogenic sacraments, do hereby establish
              this Constitution to protect our religious freedoms, guide our community governance,
              and affirm our dedication to healing, growth, and collective wisdom.
            </p>
            <p style={{ marginTop: '15px' }}>
              We recognize the inherent right of all individuals to explore consciousness through
              sacred plant medicines, and we stand in defense of these practices as protected
              religious expression under the First Amendment of the United States Constitution
              and the Religious Freedom Restoration Act (RFRA).
            </p>
          </div>

          {/* Article I Section 3 - Expandable */}
          <motion.div
            style={{
              background: 'rgba(124, 58, 237, 0.15)',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              cursor: 'pointer',
              width: expandedConstitution === 'article1' ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}
            onClick={() => setExpandedConstitution(expandedConstitution === 'article1' ? null : 'article1')}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: '#f472b6', fontSize: '1.3rem', fontWeight: '600' }}>
                Article I, Section 3: Sacramental Rights
              </h3>
              {expandedConstitution === 'article1' ? <ChevronUp color="#fbbf24" /> : <ChevronDown color="#fbbf24" />}
            </div>

            <AnimatePresence>
              {expandedConstitution === 'article1' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    marginTop: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(168, 85, 247, 0.3)',
                    color: '#d1d5db',
                    lineHeight: '1.8'
                  }}>
                    {/* Subsection A */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ color: '#a78bfa', fontSize: '1.1rem', marginBottom: '10px' }}>
                        A. Sacred Sacraments
                      </h4>
                      <p>
                        The Church recognizes psilocybin mushrooms, ayahuasca, peyote, and other entheogenic plants
                        as sacred sacraments central to our religious practice. These substances are used exclusively
                        in ceremonial contexts for spiritual growth, healing, and communion with the divine.
                      </p>
                    </div>

                    {/* Subsection B */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ color: '#a78bfa', fontSize: '1.1rem', marginBottom: '10px' }}>
                        B. Ceremonial Context
                      </h4>
                      <p>
                        All sacramental use must occur within structured ceremonial settings, guided by trained
                        facilitators, and conducted with reverence, intention, and respect for the sacred nature
                        of these medicines. The Church maintains strict protocols for preparation, administration,
                        and integration support.
                      </p>
                    </div>

                    {/* Subsection C */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ color: '#a78bfa', fontSize: '1.1rem', marginBottom: '10px' }}>
                        C. Personal Sovereignty
                      </h4>
                      <p>
                        Members retain full autonomy over their participation in sacramental ceremonies. Consent
                        is paramount, and no member shall be coerced or pressured to partake in any practice.
                        The Church honors each individual's unique path and respects personal boundaries.
                      </p>
                    </div>

                    {/* Subsection D */}
                    <div>
                      <h4 style={{ color: '#a78bfa', fontSize: '1.1rem', marginBottom: '10px' }}>
                        D. Legal Protection
                      </h4>
                      <p>
                        The Church asserts its right to use entheogenic sacraments as protected religious practice
                        under the First Amendment and RFRA. We commit to operating within legal frameworks,
                        advocating for religious freedom, and supporting members facing legal challenges related
                        to sincere sacramental use.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Psanctuary Church Constitution - FULL VERSION */}
        <div className="content-section" style={{ marginTop: '80px', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ color: '#7c3aed', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Scale size={32} />
            Psanctuary Church Constitution
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '20px' }}>

            {/* Article I: Purpose */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.05))',
              border: '2px solid rgba(124,58,237,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedConstitution === 1 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedConstitution(expandedConstitution === 1 ? null : 1)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#a78bfa',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite',
                  color: '#a78bfa'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 1 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>

                <span style={{ flex: 1 }}>📜 Article I: Purpose</span>

                {/* Right bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite 0.1s',
                  color: '#a78bfa'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 1 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>
              </button>
              <AnimatePresence>
                {expandedConstitution === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <p>Psanctuary Church is a spiritual organization dedicated to:</p>
                      <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
                        <li><strong>Sacramental use of entheogenic substances</strong> in ceremonial contexts</li>
                        <li><strong>Recovery and healing</strong> through psychedelic-assisted therapy and integration</li>
                        <li><strong>Community support and education</strong> for spiritual growth and harm reduction</li>
                        <li><strong>Advocacy for religious freedom</strong> and evidence-based drug policy reform</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Article II: Membership */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(251,191,36,0.05))',
              border: '2px solid rgba(236,72,153,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedConstitution === 2 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedConstitution(expandedConstitution === 2 ? null : 2)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#ec4899',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(236,72,153,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite',
                  color: '#ec4899'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 2 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>

                <span style={{ flex: 1 }}>🤝 Article II: Membership</span>

                {/* Right bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite 0.1s',
                  color: '#ec4899'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 2 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>
              </button>
              <AnimatePresence>
                {expandedConstitution === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <ul style={{ paddingLeft: '20px' }}>
                        <li><strong>Open to all</strong> seeking spiritual growth and healing</li>
                        <li><strong>No discrimination</strong> based on race, gender, sexual orientation, or background</li>
                        <li><strong>Members agree</strong> to responsible, ceremonial use of sacraments</li>
                        <li><strong>Respect for set, setting, and integration</strong> is required</li>
                        <li><strong>21+ age requirement</strong> for participation in ceremonies</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Article III: Governance */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(34,197,94,0.05))',
              border: '2px solid rgba(251,191,36,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedConstitution === 3 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedConstitution(expandedConstitution === 3 ? null : 3)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fbbf24',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(251,191,36,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite',
                  color: '#fbbf24'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 3 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>

                <span style={{ flex: 1 }}>🏛️ Article III: Governance</span>

                {/* Right bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite 0.1s',
                  color: '#fbbf24'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 3 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>
              </button>
              <AnimatePresence>
                {expandedConstitution === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <ul style={{ paddingLeft: '20px' }}>
                        <li><strong>Decentralized Autonomous Organization (DAO)</strong> structure</li>
                        <li><strong>Democratic voting</strong> on all major decisions via PSD token governance</li>
                        <li><strong>Transparent treasury management</strong> on-chain</li>
                        <li><strong>Community-driven roadmap</strong> with quarterly proposal cycles</li>
                        <li><strong>Checks and balances</strong> through multi-signature wallets and time-locks</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Article IV: Sacraments */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(124,58,237,0.05))',
              border: '2px solid rgba(34,197,94,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: expandedConstitution === 4 ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setExpandedConstitution(expandedConstitution === 4 ? null : 4)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#22c55e',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(34,197,94,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite',
                  color: '#22c55e'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 4 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>

                <span style={{ flex: 1 }}>🍄 Article IV: Sacraments</span>

                {/* Right bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite 0.1s',
                  color: '#22c55e'
                }}>
                  <ChevronDown size={24} style={{ transform: expandedConstitution === 4 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>
              </button>
              <AnimatePresence>
                {expandedConstitution === 4 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <ul style={{ paddingLeft: '20px' }}>
                        <li><strong>Psilocybin mushrooms</strong> as primary sacrament for spiritual communion</li>
                        <li><strong>Ceremonial context required</strong> - not for recreational use</li>
                        <li><strong>Harm reduction principles</strong> guide all practices (set, setting, dosage)</li>
                        <li><strong>Integration support provided</strong> through community circles and resources</li>
                        <li><strong>Respect for indigenous traditions</strong> and reciprocity with source communities</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Spiritual Disclaimers - NEW SECTION */}
        <div className="content-section" style={{ marginTop: '60px', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ color: '#a78bfa', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Scale size={32} />
            Spiritual Ethos
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.05))',
              border: '2px solid rgba(124,58,237,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: showSpiritualDisclaimers ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setShowSpiritualDisclaimers(!showSpiritualDisclaimers)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#a78bfa',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite',
                  color: '#a78bfa'
                }}>
                  <ChevronDown size={24} style={{ transform: showSpiritualDisclaimers ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>

                <span style={{ flex: 1 }}>✨ Our Sacred Witness</span>

                {/* Right bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite 0.1s',
                  color: '#a78bfa'
                }}>
                  <ChevronDown size={24} style={{ transform: showSpiritualDisclaimers ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>
              </button>
              <AnimatePresence>
                {showSpiritualDisclaimers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <h3 style={{ color: '#a78bfa', fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>
                        At Psanctuary: A Living Witness of Wholeness
                      </h3>

                      <div style={{ fontSize: '1.05rem', marginBottom: '24px' }}>
                        <p style={{ marginBottom: '16px' }}>
                          At Psanctuary, we do not see ourselves as treating the broken or saving the lost. We stand instead as living witnesses to the Truth in those who believe themselves apart from it. We behold every soul as already whole, already healed, already Home in the Mind of God.
                        </p>

                        <p style={{ marginBottom: '16px' }}>
                          Our work is not to fix the body nor to chase away pain, but to join in the healing of the mind — together, as one awakening Self. The patterns of addiction, the stories of trauma, the shadows of guilt and fear — these we do not judge as real, but recognize as calls for love. And in that recognition, the Spirit gently reinterprets every symptom into a sacred opportunity for forgiveness, freedom, and remembrance.
                        </p>

                        <p style={{ marginBottom: '16px' }}>
                          While the world looks to medicines, we do not deny the helpful symbols the mind can accept: the sacraments of the earth, rest, nutrition, ceremony, and loving counsel. These are gifts through which the Spirit may move, if invited. They are not ends in themselves, but means — symbols through which we learn the holy art of surrender and the deeper meaning of true healing.
                        </p>

                        <p style={{ marginBottom: '24px', fontStyle: 'italic', color: '#a78bfa' }}>
                          Healing cannot be imposed. It is received in willingness — a quiet shift in perception:<br />
                          from guilt to innocence,<br />
                          from separation to oneness,<br />
                          from fear to love.
                        </p>

                        <p style={{ marginBottom: '16px' }}>
                          Here we remember that we share one Being, one Mind, one Will in God. Each teacher is a student, and each student a teacher — mirrors of the same Light, revealing to one another what has never been lost.
                        </p>

                        <p style={{ marginBottom: '16px' }}>
                          Our recovery is not a return from sickness, but a return to truth. It is the moment we accept what has always been so: that we are still as Love created us. Together, we choose to recover — by giving what we would receive, and receiving what we give.
                        </p>

                        <p style={{ marginTop: '24px', fontWeight: 'bold', color: '#fbbf24', textAlign: 'center' }}>
                          This is the ethos of Psanctuary:<br />
                          a place not of treatment, but of remembrance;<br />
                          not of fixing, but of joining;<br />
                          not of striving, but of resting in the grace already given.
                        </p>

                        <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '1.1rem', color: '#ec4899' }}>
                          Are you ready to remember your wholeness with us?
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="content-section" style={{ marginTop: '60px', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ color: '#ef4444', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <AlertTriangle size={32} />
            Legal Disclaimers
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.05))',
              border: '2px solid rgba(239,68,68,0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: showDisclaimers ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out'
            }}>
              <button
                onClick={() => setShowDisclaimers(!showDisclaimers)}
                title="Click here to read more"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#ef4444',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Left bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite',
                  color: '#ef4444'
                }}>
                  <ChevronDown size={24} style={{ transform: showDisclaimers ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>

                <span style={{ flex: 1 }}>⚠️ Important Legal Information</span>

                {/* Right bouncing chevron */}
                <span style={{
                  display: 'inline-flex',
                  animation: 'bounce 2s ease-in-out infinite 0.1s',
                  color: '#ef4444'
                }}>
                  <ChevronDown size={24} style={{ transform: showDisclaimers ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </span>
              </button>
              <AnimatePresence>
                {showDisclaimers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: '#d1d5db', lineHeight: '1.8' }}>
                      <div style={{ display: 'grid', gap: '20px' }}>

                        <div>
                          <h4 style={{ color: '#ef4444', fontWeight: 'bold', marginBottom: '8px' }}>
                            ⚠️ Not Financial Advice
                          </h4>
                          <p>
                            This project is experimental and educational. Nothing on this site constitutes financial, investment,
                            legal, or medical advice. Do not invest more than you can afford to lose. Cryptocurrency investments
                            carry significant risk.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ color: '#f97316', fontWeight: 'bold', marginBottom: '8px' }}>
                            ⚖️ Regulatory Compliance
                          </h4>
                          <p>
                            Psilocybin and other psychedelics are illegal in most jurisdictions. This project does NOT facilitate
                            illegal drug transactions. NFTs are digital art only and do not represent physical substances. Users
                            are responsible for compliance with local laws.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '8px' }}>
                            🔒 Smart Contract Risks
                          </h4>
                          <p>
                            Smart contracts have been audited but are not guaranteed to be bug-free. Use at your own risk.
                            Always verify contract addresses and never share your private keys. Transactions on the blockchain
                            are irreversible.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '8px' }}>
                            🏥 No Medical Claims
                          </h4>
                          <p>
                            We do not claim to treat, cure, or prevent any disease. Psychedelics can have serious psychological
                            and physical effects. Consult qualified healthcare professionals before using any substances.
                            Integration support is not a substitute for professional therapy.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ color: '#a78bfa', fontWeight: 'bold', marginBottom: '8px' }}>
                            🕊️ Religious Freedom
                          </h4>
                          <p>
                            We assert First Amendment rights to sacramental use of entheogens, but recognize the legal complexities.
                            This is a sincere religious practice, not a loophole. We advocate for policy reform through legal channels.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ color: '#ec4899', fontWeight: 'bold', marginBottom: '8px' }}>
                            🔞 Age Restriction
                          </h4>
                          <p>
                            You must be 21 years or older to participate. Minors are strictly prohibited from accessing ceremonies,
                            purchasing tokens, or participating in DAO governance.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ color: '#7c3aed', fontWeight: 'bold', marginBottom: '8px' }}>
                            🌍 Jurisdiction
                          </h4>
                          <p>
                            Laws vary by location. Users are solely responsible for understanding and complying with their local,
                            state, and federal laws. This project does not provide legal advice. Consult an attorney if you have
                            questions about legality in your jurisdiction.
                          </p>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Join the Community CTA - MOVED TO END */}
        <div className="content-section" style={{ marginTop: '60px', marginBottom: '40px' }}>
          <div className="info-box" style={{ background: 'rgba(124, 58, 237, 0.2)', borderColor: 'rgba(124, 58, 237, 0.5)', textAlign: 'center' }}>
            <h2 style={{ color: '#a78bfa', marginTop: 0, fontSize: '2rem' }}>
              Join the Sacred Community 🌟
            </h2>
            <p style={{ color: '#d1d5db', fontSize: '1.125rem', marginBottom: '24px', lineHeight: '1.8' }}>
              We're building a global community of conscious individuals exploring psychedelics, spirituality,
              and collective governance. Whether you're interested in ceremonies, DAO participation, or just
              connecting with like-minded souls, we welcome you with open hearts.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button size="lg" onClick={() => window.open('https://discord.gg/psanctuary', '_blank')}>
                Join Discord 💬
              </Button>
              <Button size="lg" onClick={() => window.open('https://www.psanctuary.org', '_blank')}>
                Visit Website 🌐
              </Button>
            </div>
          </div>
        </div>

        {/* DUPLICATE CONSTITUTION SECTION - REMOVED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            marginTop: '80px',
            padding: '40px',
            background: 'rgba(88, 28, 135, 0.2)',
            borderRadius: '20px',
            border: '2px solid rgba(124, 58, 237, 0.3)',
            display: 'none'
          }}
        >
          {/* Preamble - Always Visible */}
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#fbbf24',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <Scale size={32} style={{ marginRight: '12px', verticalAlign: 'middle' }} />
            Psanctuary Church Constitution
          </h2>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#e5e7eb',
            marginBottom: '30px',
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '20px'
          }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '15px' }}>PREAMBLE</h3>
            <p>
              We, the members of Psanctuary Church, united in our commitment to spiritual exploration,
              personal sovereignty, and the sacred use of entheogenic sacraments, do hereby establish
              this Constitution to protect our religious freedoms, guide our community governance,
              and affirm our dedication to healing, growth, and collective wisdom.
            </p>
            <p style={{ marginTop: '15px' }}>
              We recognize the inherent right of all individuals to explore consciousness through
              sacred plant medicines, and we stand in defense of these practices as protected
              religious expression under the First Amendment of the United States Constitution
              and the Religious Freedom Restoration Act (RFRA).
            </p>
          </div>

          {/* Article I Section 3 - Expandable */}
          <motion.div
            style={{
              background: 'rgba(124, 58, 237, 0.1)',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              cursor: 'pointer',
              width: expandedConstitution === 'article1' ? '100%' : 'fit-content',
              margin: '0 auto',
              transition: 'width 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
            onClick={() => setExpandedConstitution(expandedConstitution === 'article1' ? null : 'article1')}
            whileHover={{ scale: 1.02 }}
          >
            {/* Title with chevrons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Left bouncing chevron */}
              <span style={{
                display: 'inline-flex',
                animation: 'bounce 2s ease-in-out infinite',
                color: '#fbbf24'
              }}>
                <ChevronDown size={24} style={{ transform: expandedConstitution === 'article1' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </span>

              <h3 style={{ color: '#f472b6', fontSize: '1.3rem', fontWeight: '600', margin: 0 }}>
                Article I, Section 3: Sacramental Rights
              </h3>

              {/* Right bouncing chevron */}
              <span style={{
                display: 'inline-flex',
                animation: 'bounce 2s ease-in-out infinite 0.1s',
                color: '#fbbf24'
              }}>
                <ChevronDown size={24} style={{ transform: expandedConstitution === 'article1' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </span>
            </div>

            {/* Subtitle text */}
            {expandedConstitution !== 'article1' && (
              <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: 400 }}>
                Click to expand
              </span>
            )}

            <AnimatePresence>
              {expandedConstitution === 'article1' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: '20px', color: '#d1d5db', lineHeight: '1.7' }}
                >
                  <p style={{ marginBottom: '15px' }}>
                    The use of psilocybin mushrooms and other natural entheogens as sacraments is a
                    fundamental religious practice of Psanctuary Church, protected under the First
                    Amendment and the Religious Freedom Restoration Act (RFRA).
                  </p>

                  <h4 style={{ color: '#a78bfa', marginTop: '20px', marginBottom: '10px' }}>
                    Subsection A: Sacred Sacraments
                  </h4>
                  <p style={{ marginBottom: '15px' }}>
                    Members of Psanctuary Church have the protected right to cultivate, possess,
                    and ceremonially consume psilocybin mushrooms and other natural entheogens
                    as part of their sincere religious practice.
                  </p>

                  <h4 style={{ color: '#a78bfa', marginTop: '20px', marginBottom: '10px' }}>
                    Subsection B: Ceremonial Context
                  </h4>
                  <p style={{ marginBottom: '15px' }}>
                    All sacramental use shall occur within the context of religious ceremony,
                    spiritual exploration, or therapeutic healing under the guidance of the
                    church's principles and community support.
                  </p>

                  <h4 style={{ color: '#a78bfa', marginTop: '20px', marginBottom: '10px' }}>
                    Subsection C: Personal Sovereignty
                  </h4>
                  <p style={{ marginBottom: '15px' }}>
                    Each member retains full autonomy over their spiritual journey and sacramental
                    practices, with the understanding that personal responsibility and harm reduction
                    are sacred duties.
                  </p>

                  <h4 style={{ color: '#a78bfa', marginTop: '20px', marginBottom: '10px' }}>
                    Subsection D: Legal Protection
                  </h4>
                  <p>
                    The church shall advocate for and defend the religious freedom rights of its
                    members, seeking legal recognition and protection for sacramental entheogen
                    use under RFRA and related statutes.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Trippy Mushrooms - Decorative - INCREASED COUNT & VARIED SIZES */}
        {[
          // Corners and edges
          { top: '8%', left: '8%', delay: 0, size: 85 },
          { top: '15%', right: '12%', delay: 1.5, size: 72 },
          { bottom: '12%', left: '15%', delay: 3, size: 95 },
          { bottom: '20%', right: '8%', delay: 2, size: 62 },
          { top: '45%', left: '3%', delay: 1, size: 78 },
          { top: '55%', right: '5%', delay: 2.5, size: 88 },
          // Closer to content
          { top: '35%', left: '25%', delay: 1.8, size: 68 },
          { top: '40%', right: '22%', delay: 2.2, size: 75 },
          { top: '50%', left: '28%', delay: 0.8, size: 60 },
          { top: '48%', right: '26%', delay: 1.3, size: 70 },
          { bottom: '35%', left: '20%', delay: 2.8, size: 78 },
          { bottom: '38%', right: '18%', delay: 1.6, size: 65 },
          // More mushrooms with varied sizes
          { top: '22%', left: '18%', delay: 0.5, size: 55 },
          { top: '28%', right: '16%', delay: 2.0, size: 82 },
          { top: '60%', left: '12%', delay: 1.4, size: 70 },
          { top: '65%', right: '14%', delay: 2.6, size: 58 },
          { bottom: '28%', left: '10%', delay: 0.9, size: 90 },
          { bottom: '45%', right: '12%', delay: 1.9, size: 66 },
          { top: '38%', left: '8%', delay: 2.3, size: 74 },
          { top: '42%', right: '10%', delay: 1.1, size: 80 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              pointerEvents: 'none',
              zIndex: 2
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0, 1.1, 1],
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              delay: pos.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut'
            }}
          >
            <TrippyMushroom size={pos.size} delay={pos.delay} />
          </motion.div>
        ))}

        <Footer />
      </motion.div>
    </div>
  );
}

