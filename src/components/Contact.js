import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { BUSINESS } from '../data/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [hoverSubmit, setHoverSubmit] = useState(false);
  const [state, handleFormspreeSubmit] = useForm('xdavawao');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    alert('Por favor completa nombre, email y mensaje.');
    return;
  }

  const fakeEvent = {
    preventDefault: () => {},
    target: {
      elements: {
        name: { value: form.name },
        email: { value: form.email },
        type: { value: form.type },
        message: { value: form.message }
      }
    }
  };

  try {
    const response = await fetch('https://formspree.io/f/xdavawao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setSent(true);
      setForm({
        name: '',
        email: '',
        type: '',
        message: ''
      });
    } else {
      alert('Error al enviar el mensaje.');
    }
  } catch (error) {
    alert('Error de conexión.');
  }
};

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '2px',
    padding: '12px 16px',
    color: '#e8e8f0',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
    fontWeight: 300,
  };

  const contactLinks = [
    {
      icon: '◈',
      label: 'Email',
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      color: '#00ffe1',
    },
    {
      icon: '⬡',
      label: 'WhatsApp',
      value: `+${BUSINESS.whatsapp}`,
      href: `https://wa.me/${BUSINESS.whatsapp}`,
      color: '#7c5cfc',
    },
    {
      icon: '◉',
      label: 'GitHub',
      value: 'github.com/hnexus',
      href: BUSINESS.github,
      color: '#00ffe1',
    },
    {
      icon: '◇',
      label: 'LinkedIn',
      value: 'linkedin.com/in/hnexus',
      href: BUSINESS.linkedin,
      color: '#7c5cfc',
    },
  ];

  return (
    <section id="contact" style={{ padding: '7rem 6vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '4vw', top: '3rem',
        fontFamily: "'Orbitron', monospace", fontSize: '10rem', fontWeight: 900,
        color: 'rgba(0,255,225,0.025)', userSelect: 'none', letterSpacing: '-0.04em', lineHeight: 1,
      }}>04</div>

      <div style={{ position: 'relative', textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{
          fontFamily: "'Orbitron', monospace", fontSize: '0.68rem', fontWeight: 500,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#00ffe1', marginBottom: '1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          <span style={{ width: '30px', height: '1px', background: '#00ffe1' }} />
          Contacto
          <span style={{ width: '30px', height: '1px', background: '#00ffe1' }} />
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 800, letterSpacing: '-0.02em', color: '#e8e8f0',
          marginBottom: '0.75rem',
        }}>
          ¿Listo para <span style={{ color: '#00ffe1' }}>construir</span> algo?
        </h2>
        <p style={{ color: 'rgba(232,232,240,0.4)', fontSize: '0.95rem', fontWeight: 300 }}>
          Cuéntame tu idea — te respondo en menos de 24 horas.
        </p>
      </div>

      <div style={{
        maxWidth: '880px', margin: '0 auto',
        border: '1px solid rgba(0,255,225,0.1)',
        borderRadius: '2px',
        display: 'grid', gridTemplateColumns: '1fr 1.3fr',
        overflow: 'hidden',
      }}>
        {/* Left info */}
        <div style={{
          padding: '2.5rem',
          background: 'rgba(0,255,225,0.02)',
          borderRight: '1px solid rgba(0,255,225,0.08)',
        }}>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.68rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#00ffe1', marginBottom: '1.5rem', opacity: 0.7,
          }}>Canales de contacto</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {contactLinks.map((cl, i) => (
              <a key={i} href={cl.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <div style={{
                  width: '40px', height: '40px',
                  border: `1px solid ${cl.color}30`,
                  borderRadius: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Orbitron', monospace",
                  color: cl.color, fontSize: '1.1rem', flexShrink: 0,
                  background: `${cl.color}08`,
                }}>
                  {cl.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(232,232,240,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {cl.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#e8e8f0', fontWeight: 400 }}>
                    {cl.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{
            marginTop: '2.5rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{
              fontSize: '0.8rem', color: 'rgba(232,232,240,0.3)',
              lineHeight: 1.7, fontWeight: 300,
            }}>
              Ubicación: <span style={{ color: 'rgba(232,232,240,0.6)' }}>{BUSINESS.location}</span><br />
              Disponible para trabajo remoto global.
            </div>
          </div>
        </div>

        {/* Right form */}
        <div style={{ padding: '2.5rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
              <div style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: '3rem', color: '#00ffe1',
                textShadow: '0 0 40px rgba(0,255,225,0.5)',
                marginBottom: '1rem',
              }}>◈</div>
              <div style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: '1rem', fontWeight: 700, color: '#00ffe1', marginBottom: '0.75rem',
              }}>¡Mensaje enviado!</div>
              <p style={{ color: 'rgba(232,232,240,0.4)', fontSize: '0.88rem', fontWeight: 300 }}>
                Te respondo en menos de 24 horas. Gracias por contactar a Hnexus.
              </p>
              <button onClick={() => setSent(false)} style={{
                marginTop: '1.5rem', background: 'transparent',
                border: '1px solid rgba(0,255,225,0.2)', color: '#00ffe1',
                padding: '10px 24px', borderRadius: '2px', cursor: 'pointer',
                fontFamily: "'Orbitron', monospace", fontSize: '0.75rem', letterSpacing: '0.1em',
              }}>
                Nuevo mensaje
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Nombre completo', name: 'name', type: 'text', placeholder: 'Tu nombre' },
                { label: 'Correo electrónico', name: 'email', type: 'email', placeholder: 'tu@email.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{
                    display: 'block', fontSize: '0.72rem',
                    color: 'rgba(232,232,240,0.35)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', fontFamily: "'Orbitron', monospace",
                    marginBottom: '0.5rem',
                  }}>{field.label}</label>
                  <input
                    type={field.type} name={field.name}
                    value={form[field.name]} onChange={handleChange}
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,255,225,0.35)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              ))}

              <div>
                <label style={{
                  display: 'block', fontSize: '0.72rem',
                  color: 'rgba(232,232,240,0.35)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontFamily: "'Orbitron', monospace",
                  marginBottom: '0.5rem',
                }}>Tipo de proyecto</label>
                <select name="type" value={form.type} onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,255,225,0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <option value="">Selecciona una opción</option>
                  <option>Sitio web / Landing page</option>
                  <option>Aplicación web (SaaS, dashboard)</option>
                  <option>Software de escritorio (Windows/macOS)</option>
                  <option>E-commerce</option>
                  <option>Backend / API</option>
                  <option>Automatización / Bot</option>
                  <option>Consultoría técnica</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: '0.72rem',
                  color: 'rgba(232,232,240,0.35)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontFamily: "'Orbitron', monospace",
                  marginBottom: '0.5rem',
                }}>Mensaje</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe tu proyecto, qué necesitas y tu presupuesto aproximado..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,255,225,0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <button
                onClick={handleSubmit}
                onMouseEnter={() => setHoverSubmit(true)}
                onMouseLeave={() => setHoverSubmit(false)}
                style={{
                  background: hoverSubmit ? 'rgba(0,255,225,0.9)' : '#00ffe1',
                  color: '#020205',
                  padding: '14px', borderRadius: '2px', border: 'none',
                  fontFamily: "'Orbitron', monospace",
                  fontSize: '0.82rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: hoverSubmit ? 'translateY(-1px)' : 'translateY(0)',
                }}
              >
                {state.submitting ? 'Enviando...' : 'Enviar mensaje →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
