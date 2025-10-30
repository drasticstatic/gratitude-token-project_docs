import React from 'react';
import styles from './styles.module.css';

export default function HeroStats() {
  return (
    <section className={styles.wrapper}>
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
    </section>
  );
}

