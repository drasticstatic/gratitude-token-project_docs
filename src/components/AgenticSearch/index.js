import React, {useState} from 'react';
import styles from './styles.module.css';

export default function AgenticSearch() {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Agentic site search is coming soon. Try typing a term like "treasury" or "integration".');
      return;
    }
    alert(`Agentic site search is coming soon. Your query: "${query}"`);
  };

  return (
    <section id="agentic-search" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>🔎 Agentic Site Search (Coming Soon)</h2>
        <p className={styles.subtitle}>Search across docs, whitepaper, R&D, and blogs. Semantic answers with citations are on the way.</p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search keywords (e.g., Proof of Burn, treasury, RWA)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Site search input"
          />
          <button type="submit" className={styles.button} aria-label="Search">
            Search (beta)
          </button>
        </form>
        <p className={styles.note}>Tip: Press Enter to search. Full-text local search will be enabled after dependency approval.</p>
      </div>
    </section>
  );
}

