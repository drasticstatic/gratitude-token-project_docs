import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFound() {
  const home = useBaseUrl('/');
  const searchPath = useBaseUrl('/search');
  const [q, setQ] = useState('');

  return (
    <main style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem',
      background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, rgba(0,0,0,0.85) 70%)',
      textAlign: 'center'
    }}>
      <div style={{maxWidth: 720}}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #e0b3ff, #ff69b4)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.75rem'
        }}>
          You look a little lost ✨
        </h1>
        <p style={{color: '#d1d5db', marginBottom: '1.25rem'}}>
          The path you sought fades into the forest. Try a guided trail:
        </p>

        <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem'}}>
          <a className="button button--primary" href={home}>
            Return Home
          </a>
        </div>

        <form action={searchPath} method="get" style={{display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
          <input
            type="text"
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the Sacred Archives…"
            aria-label="Search"
            style={{
              minWidth: 280,
              padding: '0.75rem 1rem',
              borderRadius: 999,
              border: '1px solid rgba(124,58,237,0.4)',
              background: 'rgba(0,0,0,0.4)',
              color: 'white'
            }}
          />
          <button className="button button--secondary" type="submit">
            🔎 Search
          </button>
        </form>
      </div>
    </main>
  );
}

