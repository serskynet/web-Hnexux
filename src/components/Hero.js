import React, { useEffect, useState } from 'react';
import { BUSINESS } from '../data/data';

function useCounter(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return value;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const projects = useCounter(BUSINESS.stats.projects, 1600, visible);
  const techs = useCounter(BUSINESS.stats.technologies, 1800, visible);
  const clients = useCounter(BUSINESS.stats.clients, 2000, visible);

  const fadeStyle = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.8s ${delay}s ease, transform 0.8s ${delay}s ease`,
  });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 6vw', paddingTop: '64px', position: 'relative', overflow: 'hidden',
    }}>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,225,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,225,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,225,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,92,252,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Corner decorations */}
      <div style={{
        position: 'absolute', top: '80px', right: '6vw',
        width: '160px', height: '160px',
        border: '1px solid rgba(0,255,225,0.12)',
        borderBottom: 'none', borderLeft: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '60px', left: '6vw',
        width: '100px', height: '100px',
        border: '1px solid rgba(124,92,252,0.15)',
        borderTop: 'none', borderRight: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>

        {/* Tag */}
        <div style={{
          ...fadeStyle(0),
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          marginBottom: '1.75rem',
          fontFamily: "'Orbitron', monospace",
          fontSize: '0.7rem', fontWeight: 500,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: '#00ffe1',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: '#00ffe1',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          {BUSINESS.location} · Web & Desktop Dev
          <span style={{
            width: '40px', height: '1px', background: 'rgba(0,255,225,0.4)',
          }} />
        </div>

        {/* Heading */}
        <h1 style={{
          ...fadeStyle(0.1),
          fontFamily: "'Orbitron', monospace",
          fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
        }}>
          <span style={{ color: '#e8e8f0' }}>Software que</span>
          <br />
          <span style={{
            color: '#00ffe1',
            textShadow: '0 0 40px rgba(0,255,225,0.3)',
          }}>potencia</span>
          <br />
          <span style={{ color: '#e8e8f0' }}>tu negocio</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          ...fadeStyle(0.2),
          color: 'rgba(232,232,240,0.55)',
          fontSize: '1.05rem',
          lineHeight: 1.75,
          maxWidth: '520px',
          marginBottom: '2.5rem',
          fontWeight: 300,
        }}>
          {BUSINESS.description}
        </p>

        {/* CTAs */}
        <div style={{ ...fadeStyle(0.3), display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="#products" style={{
            background: '#00ffe1', color: '#020205',
            padding: '14px 36px', borderRadius: '2px',
            fontFamily: "'Orbitron', monospace",
            fontWeight: 700, fontSize: '0.82rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
          >
            Ver software →
          </a>
          <a href="#contact" style={{
            border: '1px solid rgba(232,232,240,0.2)',
            color: 'rgba(232,232,240,0.7)',
            padding: '14px 36px', borderRadius: '2px',
            fontFamily: "'Orbitron', monospace",
            fontWeight: 500, fontSize: '0.82rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,255,225,0.4)'; e.target.style.color = '#00ffe1'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(232,232,240,0.2)'; e.target.style.color = 'rgba(232,232,240,0.7)'; }}
          >
            Contactar
          </a>
        </div>

        {/* Stats */}
        <div style={{ ...fadeStyle(0.4), display: 'flex', gap: '3rem' }}>
          {[
            { num: projects, suffix: '+', label: 'Proyectos' },
            { num: techs, suffix: '+', label: 'Tecnologías' },
            { num: clients, suffix: '+', label: 'Clientes' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: '2.2rem', fontWeight: 900,
                color: '#00ffe1', lineHeight: 1,
                textShadow: '0 0 30px rgba(0,255,225,0.3)',
              }}>
                {s.num}{s.suffix}
              </div>
              <div style={{
                fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(232,232,240,0.35)', marginTop: '6px',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,225,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 6px rgba(0,255,225,0); }
        }
      `}</style>
    </section>
  );
}
