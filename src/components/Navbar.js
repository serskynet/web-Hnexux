import React, { useState, useEffect } from 'react';
import { BUSINESS } from '../data/data';

const styles = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 6vw', height: '64px',
    background: scrolled ? 'rgba(2,2,5,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,255,225,0.08)' : '1px solid transparent',
    transition: 'all 0.4s ease',
  }),
  logo: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '1.4rem', fontWeight: 900,
    letterSpacing: '0.08em', color: '#e8e8f0',
    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px',
  },
  logoAccent: { color: '#00ffe1' },
  links: {
    display: 'flex', gap: '2.5rem', listStyle: 'none',
  },
  link: {
    color: 'rgba(232,232,240,0.6)', textDecoration: 'none',
    fontSize: '0.82rem', fontWeight: 500,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    transition: 'color 0.2s', fontFamily: "'Outfit', sans-serif",
  },
  cta: {
    background: 'transparent',
    border: '1px solid #00ffe1',
    color: '#00ffe1',
    padding: '9px 24px', borderRadius: '2px',
    fontSize: '0.8rem', fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    textDecoration: 'none', fontFamily: "'Orbitron', monospace",
    transition: 'all 0.25s',
    cursor: 'pointer',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoverLink, setHoverLink] = useState(null);
  const [hoverCta, setHoverCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Software', href: '#products' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav style={styles.nav(scrolled)}>
      <a href="#home" style={styles.logo}>
        H<span style={styles.logoAccent}>nexux</span>
      </a>
      <ul style={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{ ...styles.link, color: hoverLink === l.href ? '#00ffe1' : 'rgba(232,232,240,0.6)' }}
              onMouseEnter={() => setHoverLink(l.href)}
              onMouseLeave={() => setHoverLink(null)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        style={{
          ...styles.cta,
          background: hoverCta ? '#00ffe1' : 'transparent',
          color: hoverCta ? '#020205' : '#00ffe1',
        }}
        onMouseEnter={() => setHoverCta(true)}
        onMouseLeave={() => setHoverCta(false)}
      >
        Contrátame
      </a>
    </nav>
  );
}
