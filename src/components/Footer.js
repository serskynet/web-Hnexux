import React from 'react';
import { BUSINESS } from '../data/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: '#020205',
      borderTop: '1px solid rgba(0,255,225,0.07)',
      padding: '2rem 6vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: '1.1rem', fontWeight: 900,
        letterSpacing: '0.08em', color: '#e8e8f0',
      }}>
        H<span style={{ color: '#00ffe1' }}>nexux</span>
      </div>

      <p style={{ fontSize: '0.78rem', color: 'rgba(232,232,240,0.2)', fontWeight: 300 }}>
        © {year} Hnexux · {BUSINESS.location} · Hecho con código limpio y café ☕
      </p>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['#home', '#products', '#services', '#contact'].map((href, i) => {
          const labels = ['Inicio', 'Software', 'Servicios', 'Contacto'];
          return (
            <a key={href} href={href} style={{
              fontSize: '0.75rem', color: 'rgba(232,232,240,0.25)',
              textDecoration: 'none', letterSpacing: '0.06em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#00ffe1'}
              onMouseLeave={e => e.target.style.color = 'rgba(232,232,240,0.25)'}
            >
              {labels[i]}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
