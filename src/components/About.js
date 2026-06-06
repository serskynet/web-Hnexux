import React from 'react';
import { BUSINESS, SKILLS } from '../data/data';

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 6vw',
      background: 'rgba(255,255,255,0.015)',
      borderTop: '1px solid rgba(0,255,225,0.06)',
      borderBottom: '1px solid rgba(0,255,225,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative number */}
      <div style={{
        position: 'absolute', right: '4vw', top: '3rem',
        fontFamily: "'Orbitron', monospace",
        fontSize: '10rem', fontWeight: 900,
        color: 'rgba(0,255,225,0.03)',
        userSelect: 'none', letterSpacing: '-0.04em',
        lineHeight: 1,
      }}>01</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', position: 'relative' }}>

        {/* Left */}
        <div>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.68rem', fontWeight: 500,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00ffe1', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <span style={{ width: '30px', height: '1px', background: '#00ffe1' }} />
            Sobre mí
          </div>

          <h2 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem', color: '#e8e8f0',
          }}>
            Código limpio.<br />
            <span style={{ color: '#00ffe1' }}>Resultados reales.</span>
          </h2>

          <p style={{ color: 'rgba(232,232,240,0.55)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300 }}>
            Soy desarrollador especializado en <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>aplicaciones web modernas y software de escritorio</strong> para Windows . Construyo desde landing pages hasta sistemas empresariales complejos.
          </p>
          <p style={{ color: 'rgba(232,232,240,0.55)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300 }}>
            Basado en <strong style={{ color: '#00ffe1', fontWeight: 500 }}>{BUSINESS.location}</strong>, trabajo con clientes locales y globales, siempre con enfoque en calidad, rendimiento y mantenibilidad del código.
          </p>
          <p style={{ color: 'rgba(232,232,240,0.55)', lineHeight: 1.8, fontWeight: 300 }}>
            Cada producto que construyo está pensado para escalar — no solo para funcionar hoy, sino para crecer con tu negocio.
          </p>

          {/* Skills */}
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '0.65rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(232,232,240,0.3)',
              marginBottom: '1rem',
            }}>Stack técnico</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SKILLS.map((s, i) => (
                <span key={i} style={{
                  padding: '6px 14px',
                  border: '1px solid rgba(0,255,225,0.15)',
                  color: 'rgba(232,232,240,0.6)',
                  fontSize: '0.78rem', fontWeight: 400,
                  borderRadius: '2px',
                  transition: 'border-color 0.2s, color 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'rgba(0,255,225,0.5)';
                    e.target.style.color = '#00ffe1';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'rgba(0,255,225,0.15)';
                    e.target.style.color = 'rgba(232,232,240,0.6)';
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Experience card */}
          <div style={{
            border: '1px solid rgba(0,255,225,0.1)',
            borderRadius: '2px',
            padding: '1.75rem',
            background: 'rgba(0,255,225,0.02)',
          }}>
            <div style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '0.68rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#00ffe1',
              marginBottom: '1.25rem',
            }}>Experiencia</div>
            {[
              { title: 'Desarrollador ', sub: 'Proyectos independientes · 2022 — Presente' },
              { title: 'Software a medida para empresas', sub: 'Clientes corporativos y startups · 2022 — presente' },
              { title: 'Ingeniería de Sistemas', sub: 'Universidad unad · sincelejo, Colombia' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1rem',
                marginBottom: i < 2 ? '1.25rem' : 0,
                paddingBottom: i < 2 ? '1.25rem' : 0,
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#00ffe1', flexShrink: 0, marginTop: '5px',
                  boxShadow: '0 0 8px rgba(0,255,225,0.5)',
                }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#e8e8f0', marginBottom: '3px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(232,232,240,0.35)' }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Availability card */}
          <div style={{
            border: '1px solid rgba(124,92,252,0.15)',
            borderRadius: '2px',
            padding: '1.75rem',
            background: 'rgba(124,92,252,0.02)',
          }}>
            <div style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '0.68rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#7c5cfc',
              marginBottom: '1.25rem',
            }}>Disponibilidad</div>
            {[
              { label: 'Proyectos freelance', status: 'Disponible ahora' },
              { label: 'Consultoría técnica', status: 'Remoto / sincelejo' },
              { label: 'Software licenciado', status: 'Venta directa' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: i < 2 ? '0.9rem' : 0,
              }}>
                <span style={{ fontSize: '0.88rem', color: 'rgba(232,232,240,0.6)', fontWeight: 300 }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600,
                  color: '#00ffe1', letterSpacing: '0.06em',
                  padding: '3px 10px',
                  border: '1px solid rgba(0,255,225,0.2)',
                  borderRadius: '2px',
                }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
