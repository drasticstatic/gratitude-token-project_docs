import React, {useState, useEffect} from 'react';
import {useHistory} from '@docusaurus/router';
import styles from './styles.module.css';

export default function AgenticSearch() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    
    // Navigate to search results page with query
    history.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  // Focus search input when clicking the navbar "Search" link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#agentic-search') {
      const input = document.querySelector('#agentic-search input');
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }, []);

  return (
    <section id="agentic-search" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>🔎 Search the Sacred Archives</h2>
        <p className={styles.subtitle}>
          Explore our complete knowledge base: whitepaper, research & development, community wisdom, and technical documentation.
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search for anything... (e.g., Proof of Burn, treasury strategy, governance, RWA tokenization)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Site search input"
          />
          <button type="submit" className={styles.button} aria-label="Search">
            🔍 Search Now
          </button>
        </form>
        <p className={styles.note}>
          💡 <strong>Pro tip:</strong> Search indexes all documentation, blogs, and research. Try specific terms like "MicroStrategy", "Soulbound NFT", or "Living Sabbath".
        </p>
      </div>
    </section>
  );
}
