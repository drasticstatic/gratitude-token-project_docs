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
      background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.3) 0%, rgba(236,72,153,0.15) 40%, rgba(0,0,0,0.9) 80%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating mystical particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 60%)
        `,
        animation: 'breathe 8s ease-in-out infinite',
        pointerEvents: 'none'
      }} />

      {/* Sparkle particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(251, 191, 36, 0.4) 0%, transparent 2%),
          radial-gradient(circle at 85% 25%, rgba(236, 72, 153, 0.4) 0%, transparent 2%),
          radial-gradient(circle at 30% 80%, rgba(167, 139, 250, 0.4) 0%, transparent 2%),
          radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.4) 0%, transparent 2%),
          radial-gradient(circle at 50% 10%, rgba(255, 105, 180, 0.4) 0%, transparent 2%),
          radial-gradient(circle at 90% 85%, rgba(251, 191, 36, 0.4) 0%, transparent 2%)
        `,
        animation: 'sparkleFloat 12s ease-in-out infinite',
        pointerEvents: 'none'
      }} />

      <div style={{maxWidth: 720, position: 'relative', zIndex: 1}}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #e0b3ff, #ff69b4)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.75rem',
          animation: 'float 6s ease-in-out infinite'
        }}>
          You look a little lost ✨
        </h1>
        <p style={{color: '#d1d5db', marginBottom: '1.25rem', fontSize: '1.1rem'}}>
          The path you sought fades into the mycelial forest.<br />
          Take a breath, center yourself, and choose a guided trail:
        </p>

        <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem'}}>
          <a className="button button--primary" href={home}>
            🏠 Return Home
          </a>
        </div>

        <form action={searchPath} method="get" style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
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
              border: '2px solid rgba(124,58,237,0.5)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              backdropFilter: 'blur(8px)',
              fontSize: '1rem'
            }}
          />
          <button className="button button--secondary" type="submit">
            🔎 Search
          </button>
        </form>

        <p style={{color: '#9ca3af', marginTop: '2rem', fontSize: '0.9rem', fontStyle: 'italic'}}>
          "In the holy instant nothing happens that has not always been.<br />
          Only the veil that has been drawn across reality is lifted."<br />
          <span style={{fontSize: '0.85rem'}}>— ACIM</span>
        </p>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes sparkleFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(0) rotate(360deg); opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </main>
  );
}

