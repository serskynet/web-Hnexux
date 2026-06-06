import React, { useState } from 'react';
import { PRODUCTS } from '../data/data';

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'web', label: 'Web' },
  { key: 'desktop', label: 'Escritorio' },
  { key: 'tool', label: 'Herramientas' },
  { key: 'free', label: 'Gratis' },
];

function ProductCard({ product, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isFree = product.status === 'free' || product.price === 0;
  const isComing = product.status === 'coming';
  const priceLabel = isComing ? 'Próximamente' : isFree ? 'Gratis' : `$${product.price} USD`;

  return (
    <div
      onClick={() => onClick(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? product.accentColor + '40' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '2px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        background: 'rgba(255,255,255,0.015)',
        position: 'relative',
      }}
    >
      {/* Thumb */}
      <div style={{
        height: '160px',
        background: `radial-gradient(circle at 30% 50%, ${product.accentColor}15 0%, transparent 70%), #0d0d15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        borderBottom: `1px solid rgba(255,255,255,0.04)`,
      }}>
        <div style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: '3.5rem', color: product.accentColor,
          textShadow: `0 0 40px ${product.accentColor}60`,
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>
          {product.emoji}
        </div>
        {isComing && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.58rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)',
            padding: '3px 10px', borderRadius: '2px',
            background: 'rgba(10,10,15,0.8)',
          }}>
            Próximamente
          </div>
        )}
        <div style={{
          position: 'absolute', bottom: '12px', left: '12px',
          fontSize: '0.72rem', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: product.accentColor,
          fontFamily: "'Orbitron', monospace",
          opacity: 0.7,
        }}>
          {product.category === 'web' ? 'Web App' : product.category === 'desktop' ? 'Escritorio' : 'Herramienta'}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
          {product.tags.map((tag, i) => (
            <span key={i} style={{
              padding: '2px 10px',
              background: `${product.accentColor}12`,
              color: product.accentColor,
              fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.04em',
              borderRadius: '2px',
            }}>{tag}</span>
          ))}
        </div>
        <div style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: '1rem', fontWeight: 700,
          color: '#e8e8f0', marginBottom: '0.5rem',
          letterSpacing: '-0.01em',
        }}>
          {product.title}
        </div>
        <div style={{
          fontSize: '0.84rem', color: 'rgba(232,232,240,0.45)',
          lineHeight: 1.6, marginBottom: '1.25rem', fontWeight: 300,
        }}>
          {product.description}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem',
        }}>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: isFree || isComing ? '0.8rem' : '1.3rem',
            fontWeight: 800,
            color: isComing ? 'rgba(232,232,240,0.3)' : isFree ? '#00ffe1' : '#e8e8f0',
          }}>
            {priceLabel}
          </div>
          <div style={{
            fontSize: '0.75rem', fontWeight: 600,
            color: product.accentColor,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            fontFamily: "'Orbitron', monospace",
            opacity: hovered ? 1 : 0.5, transition: 'opacity 0.2s',
          }}>
            Ver más →
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal({ product, onClose }) {
  if (!product) return null;
  const isFree = product.status === 'free' || product.price === 0;
  const isComing = product.status === 'coming';

  const handleDownload = () => {
    if (product.downloadUrl) {
      window.open(product.downloadUrl, '_blank');
    } else {
      alert('Próximamente disponible para descarga.\nContacta a través de WhatsApp para obtenerlo ahora.');
    }
  };
  const handleBuy = () => {
    if (product.downloadUrl) {
      window.open(product.downloadUrl, '_blank');
    } else {
      alert(`Para adquirir "${product.title}" por $${product.price} USD,\ncomunícate por WhatsApp o email.`);
    }
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div style={{
        background: '#0d0d18',
        border: `1px solid ${product.accentColor}30`,
        borderRadius: '2px',
        maxWidth: '560px', width: '100%',
        maxHeight: '85vh', overflowY: 'auto',
        boxShadow: `0 0 80px ${product.accentColor}15`,
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '1rem', fontWeight: 800, color: '#e8e8f0',
          }}>
            {product.title}
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(232,232,240,0.5)', width: '32px', height: '32px',
            borderRadius: '2px', cursor: 'pointer', fontSize: '1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>
        </div>

        {/* Preview */}
        <div style={{
          height: '180px',
          background: `radial-gradient(circle at 50% 50%, ${product.accentColor}15 0%, transparent 70%), #08080f`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '5rem', color: product.accentColor,
            textShadow: `0 0 60px ${product.accentColor}60`,
          }}>
            {product.emoji}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {product.tags.map((t, i) => (
              <span key={i} style={{
                padding: '3px 12px',
                background: `${product.accentColor}12`,
                color: product.accentColor,
                fontSize: '0.72rem', fontWeight: 600, borderRadius: '2px',
              }}>{t}</span>
            ))}
          </div>
          <p style={{ color: 'rgba(232,232,240,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>
            {product.description}
          </p>

          {/* Features */}
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.65rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: product.accentColor,
            marginBottom: '0.75rem', opacity: 0.7,
          }}>Incluye</div>
          <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
            {product.features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                fontSize: '0.88rem', color: 'rgba(232,232,240,0.6)',
                padding: '8px 0',
                borderBottom: i < product.features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                fontWeight: 300,
              }}>
                <span style={{ color: product.accentColor, fontWeight: 700, fontSize: '0.8rem' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: isFree || isComing ? '1rem' : '2rem',
            fontWeight: 900,
            color: isComing ? 'rgba(232,232,240,0.25)' : product.accentColor,
            textShadow: isFree || !isComing ? `0 0 20px ${product.accentColor}40` : 'none',
          }}>
            {isComing ? 'Próximamente' : isFree ? 'Gratis' : `$${product.price} USD`}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {product.demoUrl && (
              <a href={product.demoUrl} target="_blank" rel="noreferrer" style={{
                padding: '10px 20px', borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(232,232,240,0.6)',
                fontSize: '0.8rem', fontWeight: 600,
                textDecoration: 'none',
                fontFamily: "'Orbitron', monospace",
                letterSpacing: '0.06em',
              }}>Demo</a>
            )}
            <button
              onClick={isFree ? handleDownload : isComing ? () => alert('Te notificaremos cuando esté disponible.') : handleBuy}
              style={{
                padding: '10px 24px', borderRadius: '2px', border: 'none',
                background: isComing ? 'rgba(255,255,255,0.05)' : product.accentColor,
                color: isComing ? 'rgba(232,232,240,0.4)' : '#020205',
                fontSize: '0.8rem', fontWeight: 700,
                fontFamily: "'Orbitron', monospace", letterSpacing: '0.06em',
                cursor: isComing ? 'default' : 'pointer',
              }}
            >
              {isComing ? 'Notificarme' : isFree ? 'Descargar ZIP' : 'Comprar ahora'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all' ? PRODUCTS
    : filter === 'free' ? PRODUCTS.filter(p => p.status === 'free' || p.price === 0)
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="products" style={{ padding: '7rem 6vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '4vw', top: '3rem',
        fontFamily: "'Orbitron', monospace", fontSize: '10rem', fontWeight: 900,
        color: 'rgba(0,255,225,0.025)', userSelect: 'none', letterSpacing: '-0.04em', lineHeight: 1,
      }}>02</div>

      <div style={{ position: 'relative', marginBottom: '3.5rem' }}>
        <div style={{
          fontFamily: "'Orbitron', monospace", fontSize: '0.68rem', fontWeight: 500,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#00ffe1', marginBottom: '1rem',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ width: '30px', height: '1px', background: '#00ffe1' }} />
          Software & Proyectos
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h2 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#e8e8f0',
          }}>
            Productos proximos<br />
            <span style={{ color: '#00ffe1' }}>para adquirir</span>
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} style={{
                padding: '8px 20px', borderRadius: '2px',
                border: `1px solid ${filter === f.key ? '#00ffe1' : 'rgba(255,255,255,0.08)'}`,
                background: filter === f.key ? '#00ffe1' : 'transparent',
                color: filter === f.key ? '#020205' : 'rgba(232,232,240,0.5)',
                fontSize: '0.75rem', fontWeight: filter === f.key ? 700 : 400,
                fontFamily: "'Orbitron', monospace",
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onClick={setSelected} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
        <p style={{ color: 'rgba(232,232,240,0.3)', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 300 }}>
          ¿Necesitas algo personalizado?
        </p>
        <a href="#contact" style={{
          border: '1px solid rgba(0,255,225,0.25)', color: '#00ffe1',
          padding: '12px 32px', borderRadius: '2px',
          fontFamily: "'Orbitron', monospace",
          fontSize: '0.78rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          textDecoration: 'none', transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = 'rgba(0,255,225,0.06)'}
          onMouseLeave={e => e.target.style.background = 'transparent'}
        >
          Solicitar proyecto →
        </a>
      </div>

      {selected && <Modal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
