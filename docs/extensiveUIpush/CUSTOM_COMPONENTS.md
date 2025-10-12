# Custom Docusaurus Components

## 🎨 Animated Background Component

**File:** `src/components/AnimatedBackground.js`

```jsx
import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 100}, 255, 0.5)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className={styles.background} />;
}
```

**CSS:** `src/components/AnimatedBackground.module.css`

```css
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;
  pointer-events: none;
}
```

---

## 💎 Feature Card Component

**File:** `src/components/FeatureCard.js`

```jsx
import React from 'react';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, description, link }) {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.arrow}>→</div>
    </a>
  );
}
```

**CSS:** `src/components/FeatureCard.module.css`

```css
.card {
  position: relative;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  border: 2px solid rgba(124, 58, 237, 0.3);
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
  border-color: #ec4899;
  box-shadow: 0 20px 40px rgba(236, 72, 153, 0.3);
}

.card:hover::before {
  opacity: 1;
}

.iconContainer {
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--ifm-color-primary);
  position: relative;
  z-index: 1;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--ifm-font-color-base);
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: #ec4899;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s ease;
  z-index: 1;
}

.card:hover .arrow {
  opacity: 1;
  transform: translateX(0);
}
```

**Usage:**
```jsx
import FeatureCard from '@site/src/components/FeatureCard';

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
  <FeatureCard
    icon="🔥"
    title="Altar Burn"
    description="Ceremonially burn tokens to participate in the sacred economy"
    link="/docs/features/altar-burn"
  />
  <FeatureCard
    icon="🍄"
    title="Mushroom NFTs"
    description="Grow and collect unique mushroom NFTs in your digital garden"
    link="/docs/features/mushroom-nfts"
  />
  <FeatureCard
    icon="🏛️"
    title="DAO Governance"
    description="Shape the future through decentralized decision-making"
    link="/docs/features/dao-governance"
  />
</div>
```

---

## 🗺️ Roadmap Timeline Component

**File:** `src/components/RoadmapTimeline.js`

```jsx
import React from 'react';
import styles from './RoadmapTimeline.module.css';

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'complete',
    items: [
      'Smart contract development',
      'Frontend UI/UX design',
      'Token deployment',
      'Initial testing',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Launch',
    status: 'current',
    items: [
      'Public beta testing',
      'Community building',
      'Documentation',
      'Security audit',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Growth',
    status: 'upcoming',
    items: [
      'NFT marketplace',
      'Advanced DAO features',
      'Mobile app',
      'Partnerships',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    status: 'future',
    items: [
      'Multi-chain support',
      'AI agents integration',
      'Global community',
      'Ecosystem grants',
    ],
  },
];

export default function RoadmapTimeline() {
  return (
    <div className={styles.timeline}>
      {roadmapData.map((phase, index) => (
        <div key={index} className={`${styles.phase} ${styles[phase.status]}`}>
          <div className={styles.marker}>
            <div className={styles.dot} />
            {index < roadmapData.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.content}>
            <div className={styles.phaseLabel}>{phase.phase}</div>
            <h3 className={styles.title}>{phase.title}</h3>
            <ul className={styles.items}>
              {phase.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
```

**CSS:** `src/components/RoadmapTimeline.module.css`

```css
.timeline {
  position: relative;
  padding: 2rem 0;
}

.phase {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #7c3aed;
  background: var(--ifm-background-color);
  z-index: 1;
  transition: all 0.3s ease;
}

.line {
  width: 3px;
  flex: 1;
  background: linear-gradient(180deg, #7c3aed 0%, rgba(124, 58, 237, 0.3) 100%);
  margin-top: 0.5rem;
}

.content {
  flex: 1;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.05);
  border: 2px solid rgba(124, 58, 237, 0.2);
  transition: all 0.3s ease;
}

.phaseLabel {
  font-size: 0.875rem;
  font-weight: 600;
  color: #7c3aed;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--ifm-heading-color);
}

.items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.items li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.items li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #34d399;
  font-weight: bold;
}

/* Status Variants */
.complete .dot {
  background: #34d399;
  border-color: #34d399;
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.5);
}

.complete .content {
  border-color: rgba(52, 211, 153, 0.3);
  background: rgba(52, 211, 153, 0.05);
}

.current .dot {
  background: #ec4899;
  border-color: #ec4899;
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

.current .content {
  border-color: rgba(236, 72, 153, 0.4);
  background: rgba(236, 72, 153, 0.1);
}

.upcoming .dot {
  background: #fbbf24;
  border-color: #fbbf24;
}

.upcoming .content {
  border-color: rgba(251, 191, 36, 0.3);
  background: rgba(251, 191, 36, 0.05);
}

.upcoming .items li::before {
  content: '○';
  color: #fbbf24;
}

.future .dot {
  background: transparent;
  border-color: rgba(124, 58, 237, 0.3);
}

.future .content {
  opacity: 0.6;
}

.future .items li::before {
  content: '○';
  color: rgba(124, 58, 237, 0.5);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(236, 72, 153, 0.8);
  }
}

.phase:hover .content {
  transform: translateX(8px);
  border-color: #ec4899;
}
```

---

## 🪙 Token Display Component

**File:** `src/components/TokenDisplay.js`

```jsx
import React from 'react';
import styles from './TokenDisplay.module.css';

export default function TokenDisplay({ symbol, name, description, color, icon }) {
  return (
    <div className={styles.tokenCard} style={{ '--token-color': color }}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.symbol}>{symbol}</div>
        <div className={styles.name}>{name}</div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.glow} />
    </div>
  );
}
```

**CSS:** `src/components/TokenDisplay.module.css`

```css
.tokenCard {
  position: relative;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(15, 10, 30, 0.8);
  border: 2px solid var(--token-color);
  overflow: hidden;
  transition: all 0.4s ease;
}

.tokenCard::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--token-color) 0%, transparent 70%);
  opacity: 0.1;
  animation: rotate 20s linear infinite;
}

.tokenCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(var(--token-color), 0.3);
}

.iconContainer {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.icon {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.symbol {
  font-size: 2rem;
  font-weight: 800;
  color: var(--token-color);
  text-align: center;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--ifm-font-color-base);
  position: relative;
  z-index: 1;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  color: var(--ifm-font-color-secondary);
  position: relative;
  z-index: 1;
}

.glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--token-color), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.tokenCard:hover .glow {
  opacity: 1;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

**Usage:**
```jsx
import TokenDisplay from '@site/src/components/TokenDisplay';

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
  <TokenDisplay
    symbol="ETHO"
    name="Ethereal Offering"
    description="The ceremonial token burned at the altar"
    color="#7c3aed"
    icon="🔥"
  />
  <TokenDisplay
    symbol="PSILO"
    name="Psilocybin"
    description="Mushroom NFT ecosystem token"
    color="#ec4899"
    icon="🍄"
  />
  <TokenDisplay
    symbol="PSD"
    name="Psanctuary DAO"
    description="Governance and utility token"
    color="#22d3ee"
    icon="🏛️"
  />
</div>
```

---

## 🤝 Partner Showcase Component

**File:** `src/components/PartnerShowcase.js`

```jsx
import React from 'react';
import styles from './PartnerShowcase.module.css';

const partners = [
  { name: 'DAPP UNIVERSITY', logo: '🎓', url: 'https://www.dappuniversity.com/' },
  { name: 'Psanctuary Church', logo: '⛪', url: '#' },
  { name: 'OpenZeppelin', logo: '🛡️', url: 'https://openzeppelin.com/' },
  { name: 'Hardhat', logo: '⚒️', url: 'https://hardhat.org/' },
];

export default function PartnerShowcase() {
  return (
    <div className={styles.showcase}>
      <h2 className={styles.title}>Built With & Supported By</h2>
      <div className={styles.grid}>
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            className={styles.partnerCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.logo}>{partner.logo}</div>
            <div className={styles.name}>{partner.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
```

**CSS:** `src/components/PartnerShowcase.module.css`

```css
.showcase {
  padding: 4rem 0;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.partnerCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.05);
  border: 2px solid rgba(124, 58, 237, 0.2);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.partnerCard:hover {
  transform: translateY(-4px);
  border-color: #ec4899;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.2);
}

.logo {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.name {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--ifm-font-color-base);
}
```

(More components in ADDITIONAL_COMPONENTS.md...)

