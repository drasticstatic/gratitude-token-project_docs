import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
              {siteConfig.title}
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              {siteConfig.tagline}
            </p>
            <p className={styles.heroDescription}>
              Transform your healing journey through sacred blockchain ceremonies. 
              Burn gratitude tokens, set intentions, and connect with a supportive 
              community on the path to recovery and spiritual growth.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--primary button--lg', styles.primaryButton)}
                to="https://drasticstatic.github.io/gratitude-token-project"
                target="_blank">
                🚀 Launch dApp
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.secondaryButton)}
                to="/docs/intro">
                📖 Read Docs
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.secondaryButton)}
                to="/docs/whitepaper/introduction">
                📜 Whitepaper
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.altarContainer}>
              <div className={styles.altar}>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
              </div>
              <div className={styles.particles}>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10K+</div>
            <div className={styles.statLabel}>Ceremonies Completed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Community Members</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1M+</div>
            <div className={styles.statLabel}>Tokens Burned</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Uptime</div>
          </div>
        </div>
      </div>
    </header>
  );
}
