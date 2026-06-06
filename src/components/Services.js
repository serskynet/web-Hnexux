import React, { useState } from 'react';
import { SERVICES } from '../data/data';

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{
      padding: '7rem 6vw',
      background: 'rgba(255,255,255,0.012)',
      borderTop: '1px solid rgba(0,255,225,0.06)',
      borderBottom: '1px solid rgba(0,255,225,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '4vw', top: '3rem',
        fontFamily: "'Orbitron', monospace", fontSize: '10rem', fontWeight: 900,
        color: 'rgba(0,255,225,0.025)', userSelect: 'none', letterSpacing: '-0.04em', lineHeight: 1,
      }}>03</div>

      <div style={{ position: 'relative', marginBottom: '3.5rem' }}>
        <div style={{
          fontFamily: "'Orbitron', monospace", fontSize: '0.68rem', fontWeight: 500,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#00ffe1', marginBottom: '1rem',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ width: '30px', height: '1px', background: '#00ffe1' }} />
          Servicios
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-0.02em', color: '#e8e8f0',
        }}>
          ¿En qué puedo<br />
          <span style={{ color: '#00ffe1' }}>ayudarte?</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {SERVICES.map(svc => (
          <div
            key={svc.id}
            onMouseEnter={() => setHovered(svc.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: `1px solid ${hovered === svc.id ? svc.color + '35' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: '2px',
              padding: '2rem',
              background: hovered === svc.id ? `${svc.color}05` : 'rgba(255,255,255,0.01)',
              transition: 'all 0.3s',
              transform: hovered === svc.id ? 'translateY(-3px)' : 'translateY(0)',
              cursor: 'default',
            }}
          >
            <div style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '2rem', color: svc.color,
              textShadow: hovered === svc.id ? `0 0 30px ${svc.color}60` : 'none',
              marginBottom: '1.25rem',
              transition: 'text-shadow 0.3s',
            }}>
              {svc.icon}
            </div>
            <h3 style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '1rem', fontWeight: 700,
              color: '#e8e8f0', marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}>
              {svc.title}
            </h3>
            <p style={{
              fontSize: '0.86rem', color: 'rgba(232,232,240,0.45)',
              lineHeight: 1.7, fontWeight: 300,
            }}>
              {svc.description}
            </p>
            <div style={{
              marginTop: '1.5rem',
              height: '1px',
              background: `linear-gradient(to right, ${svc.color}40, transparent)`,
              opacity: hovered === svc.id ? 1 : 0,
              transition: 'opacity 0.3s',
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}
