import React from 'react';

const Logo = () => (
  <svg width="50" height="60" viewBox="0 0 130 155" xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto 0.75rem', display: 'block'}}>
    <defs>
      <linearGradient id="fcg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3d25"/>
        <stop offset="100%" stopColor="#0d1f11"/>
      </linearGradient>
      <linearGradient id="fcgold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffe066"/>
        <stop offset="100%" stopColor="#c89a00"/>
      </linearGradient>
    </defs>
    <path d="M65 4 L122 26 L122 84 Q122 132 65 150 Q8 132 8 84 L8 26 Z" fill="url(#fcg1)" stroke="#f5c400" strokeWidth="2"/>
    <path d="M65 11 L115 30 L115 84 Q115 126 65 143 Q15 126 15 84 L15 30 Z" fill="none" stroke="rgba(245,196,0,.2)" strokeWidth="1"/>
    <rect x="25" y="36" width="80" height="2" rx="1" fill="#f5c400" opacity=".3"/>
    <text x="65" y="52" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing="5">CUP</text>
    <text x="65" y="100" textAnchor="middle" fontFamily="Bebas Neue, cursive" fontSize="52" fill="url(#fcgold)" letterSpacing="3">SSG</text>
    <circle cx="96" cy="57" r="9" fill="white" opacity=".9"/>
    <circle cx="92.5" cy="54" r="2.5" fill="#222" opacity=".15"/>
    <circle cx="99" cy="53" r="2" fill="#222" opacity=".12"/>
    <circle cx="93" cy="59.5" r="2.2" fill="#222" opacity=".12"/>
    <text x="65" y="122" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="6.5" fontWeight="700" fill="rgba(255,255,255,.3)" letterSpacing="2.5">SMALL SIDE GAME</text>
    <text x="38" y="125" textAnchor="middle" fontSize="6" fill="rgba(245,196,0,.35)">★</text>
    <text x="92" y="125" textAnchor="middle" fontSize="6" fill="rgba(245,196,0,.35)">★</text>
    <rect x="25" y="128" width="80" height="1.5" rx=".75" fill="#f5c400" opacity=".2"/>
  </svg>
);

const styles = {
  footer: { borderTop: '1px solid rgba(255,255,255,0.08)', padding: '3rem 1.25rem', textAlign: 'center' },
  tagline: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.4rem', letterSpacing: '3px', color: '#ffe066', marginBottom: '0.15rem' },
  taglineSpan: { color: '#ffffff' },
  sub: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.25rem' },
  pitch: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1.5rem', letterSpacing: '0.5px' },
  links: { display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' },
  link: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', background: 'none', border: 'none' },
  copy: { fontSize: '0.72rem', color: 'rgba(255,255,255,0.18)' },
};

const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

export default function Footer({ onAdminClick }) {
  const year = new Date().getFullYear();
  return (
    <footer id="kontakt" style={styles.footer}>
      <Logo />
      <div style={styles.tagline}>SSG <span style={styles.taglineSpan}>Cup</span></div>
      <div style={styles.sub}>Small Sided Games</div>
      <div style={styles.pitch}>⚽ Alle møder alle — gratis turneringsgenerator til fodbold</div>
      <div style={styles.links}>
        <button style={styles.link} onClick={() => scrollTo('om')}>Hvordan virker det</button>
        <button style={styles.link} onClick={() => scrollTo('opret')}>Start turnering</button>
        <button style={styles.link} onClick={() => scrollTo('faq')}>FAQ</button>
        <button style={styles.link} onClick={onAdminClick}>Admin</button>
      </div>
      <div style={styles.copy}>© {year} SSG Cup · Small Sided Games — alle møder alle</div>
    </footer>
  );
}
