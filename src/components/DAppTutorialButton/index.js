import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DAppTutorialButton() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>🎮</div>
        <h2 className={styles.title}>How to Use the dApp</h2>
        <p className={styles.description}>
          Complete step-by-step guides for all dApp features: Mushroom Farm, Cross-Breeding, 
          Sacred Altar, DAO Governance, Token Swap, and more.
        </p>
        <Link
          className={styles.button}
          to="/docs/how-to-use-dapp/00-overview">
          Start Tutorial →
        </Link>
      </div>
    </div>
  );
}

