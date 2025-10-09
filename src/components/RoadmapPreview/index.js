import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    quarter: 'Q4 2024',
    items: [
      'Sacred Altar smart contracts deployed',
      'Gratitude token system launched',
      'Basic ceremony functionality',
      'Community governance structure',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Community Growth',
    status: 'current',
    quarter: 'Q1 2025',
    items: [
      'Soulbound NFT achievement system',
      'Enhanced ceremony types',
      'Mobile-responsive interface',
      'Community mentorship program',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Advanced Features',
    status: 'upcoming',
    quarter: 'Q2 2025',
    items: [
      'MPC recovery implementation',
      'Cross-chain compatibility',
      'AI-powered ceremony guidance',
      'Integration with wellness platforms',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Expansion',
    status: 'future',
    quarter: 'Q3 2025',
    items: [
      'Psanctuary network launch',
      'Professional therapist integration',
      'Research partnerships',
      'Global community events',
    ],
  },
];

function RoadmapCard({phase, title, status, quarter, items}) {
  return (
    <div className={clsx('card', styles.roadmapCard, styles[status])}>
      <div className={styles.cardHeader}>
        <div className={styles.phaseInfo}>
          <div className={styles.phaseNumber}>{phase}</div>
          <div className={styles.quarter}>{quarter}</div>
        </div>
        <div className={styles.statusBadge}>
          {status === 'completed' && '✅ Completed'}
          {status === 'current' && '🚀 In Progress'}
          {status === 'upcoming' && '⏳ Upcoming'}
          {status === 'future' && '🔮 Future'}
        </div>
      </div>
      
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      
      <ul className={styles.itemsList}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.listItem}>
            <span className={styles.itemIcon}>
              {status === 'completed' ? '✅' : '🎯'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RoadmapPreview() {
  return (
    <section className={styles.roadmapSection}>
      <div className="container">
        <div className={styles.roadmapHeader}>
          <Heading as="h2" className={styles.roadmapTitle}>
            Our Journey Forward
          </Heading>
          <p className={styles.roadmapSubtitle}>
            Ethereal Offering is continuously evolving to better serve our community's 
            healing journey. Here's what we've accomplished and where we're heading.
          </p>
        </div>
        
        <div className={styles.roadmapGrid}>
          {roadmapPhases.map((phase, idx) => (
            <RoadmapCard key={idx} {...phase} />
          ))}
        </div>
        
        <div className={styles.roadmapFooter}>
          <div className={styles.footerContent}>
            <Heading as="h3" className={styles.footerTitle}>
              Shape Our Future Together
            </Heading>
            <p className={styles.footerDescription}>
              As a community-governed platform, your voice matters in determining 
              our roadmap priorities. Join our governance discussions and help 
              guide the future of sacred technology.
            </p>
            <div className={styles.footerButtons}>
              <Link
                className="button button--primary button--lg"
                to="https://discord.gg/psanctuary">
                🗳️ Join Community Discussions
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/whitepaper/introduction">
                📋 Read Whitepaper
              </Link>
            </div>
          </div>
          
          <div className={styles.progressVisualization}>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
              <div className={styles.progressLabels}>
                <span className={styles.progressLabel}>Foundation</span>
                <span className={styles.progressLabel}>Growth</span>
                <span className={styles.progressLabel}>Advanced</span>
                <span className={styles.progressLabel}>Expansion</span>
              </div>
            </div>
            <div className={styles.currentPhase}>
              <div className={styles.phaseIndicator}>
                <span className={styles.indicatorText}>Currently in Phase 2</span>
                <div className={styles.indicatorPulse}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
