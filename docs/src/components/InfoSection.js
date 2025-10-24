import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function InfoSection({ title = "Understanding", items = [], compact = false }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ maxWidth: compact ? 'min(900px, 90vw)' : 900, margin: '30px auto', padding: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        onClick={() => setOpen(!open)}
        className="breathing-shadow-text"
        style={{
          width: open ? '100%' : 'fit-content',
          textAlign: 'center',
          background: 'rgba(124,58,237,0.18)',
          border: '1px solid rgba(124,58,237,0.45)',
          borderRadius: 12,
          padding: '18px 24px',
          color: '#e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          cursor: 'pointer',
          transition: 'width 0.3s ease-in-out'
        }}
      >
        {/* Title with chevrons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Left bouncing chevron */}
          <span style={{
            display: 'inline-flex',
            animation: 'bounce 2s ease-in-out infinite',
            color: '#a78bfa'
          }}>
            <ChevronDown size={24} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
          </span>

          <span style={{ fontWeight: 700, color: '#a78bfa', fontSize: '1.25rem' }}>{title}</span>

          {/* Right bouncing chevron */}
          <span style={{
            display: 'inline-flex',
            animation: 'bounce 2s ease-in-out infinite 0.1s',
            color: '#a78bfa'
          }}>
            <ChevronDown size={24} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
          </span>
        </div>

        {/* Subtitle text */}
        {!open && (
          <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: 400 }}>
            Click here to read more
          </span>
        )}
      </button>
      {open && (
        <div
          style={{
            marginTop: 12,
            width: '100%',
            background: 'rgba(17,24,39,0.6)',
            border: '1px solid rgba(124,58,237,0.35)',
            borderRadius: 12,
            padding: 18,
          }}
        >
          {items.map((it, idx) => (
            <div key={idx} style={{ marginBottom: 16 }}>
              <div className="breathing-shadow-gold" style={{ fontWeight: 700, color: it.color || '#fbbf24', marginBottom: 6 }}>{it.heading}</div>
              <div className="breathing-shadow-text" style={{ color: '#d1d5db', lineHeight: 1.6 }}>{it.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

