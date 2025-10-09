import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const stats = [
  {
    number: '10,000+',
    label: 'Sacred Ceremonies',
    description: 'Healing rituals completed by our community',
    icon: '🔥',
  },
  {
    number: '500+',
    label: 'Community Members',
    description: 'Individuals on their healing journey',
    icon: '👥',
  },
  {
    number: '1M+',
    label: 'Gratitude Tokens',
    description: 'Burned in ceremonial offerings',
    icon: '💎',
  },
  {
    number: '2,500+',
    label: 'Soulbound NFTs',
    description: 'Achievement milestones earned',
    icon: '🏆',
  },
  {
    number: '99.9%',
    label: 'Platform Uptime',
    description: 'Reliable access to healing resources',
    icon: '⚡',
  },
  {
    number: '50+',
    label: 'Recovery Days',
    description: 'Average milestone achievements',
    icon: '📈',
  },
];

function StatCard({number, label, description, icon}) {
  return (
    <div className={clsx('card', styles.statCard)}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statDescription}>{description}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsHeader}>
          <Heading as="h2" className={styles.statsTitle}>
            Transforming Lives Through Sacred Technology
          </Heading>
          <p className={styles.statsSubtitle}>
            Our community is growing stronger every day, with thousands of individuals 
            finding healing, connection, and purpose through Ethereal Offering.
          </p>
        </div>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
        
        <div className={styles.communityCallout}>
          <div className={styles.calloutContent}>
            <Heading as="h3" className={styles.calloutTitle}>
              Join Our Sacred Community
            </Heading>
            <p className={styles.calloutDescription}>
              Every ceremony, every token burned, every milestone achieved contributes 
              to a growing network of healing and transformation. Your journey matters.
            </p>
            <div className={styles.calloutButtons}>
              <a 
                href="https://discord.gg/psanctuary" 
                className="button button--primary button--lg"
                target="_blank"
                rel="noopener noreferrer">
                💬 Join Discord
              </a>
              <a 
                href="https://t.me/psanctuary" 
                className="button button--secondary button--lg"
                target="_blank"
                rel="noopener noreferrer">
                📱 Telegram
              </a>
            </div>
          </div>
          <div className={styles.calloutVisual}>
            <div className={styles.communityCircle}>
              <div className={styles.memberDot}></div>
              <div className={styles.memberDot}></div>
              <div className={styles.memberDot}></div>
              <div className={styles.memberDot}></div>
              <div className={styles.memberDot}></div>
              <div className={styles.memberDot}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
