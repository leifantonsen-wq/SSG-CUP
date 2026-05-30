import React from 'react';

const styles = {
  footer: { borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 1.25rem', textAlign: 'center' },
  logo: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.6rem', letterSpacing: '3px', color: '#ffe066', marginBottom: '0.25rem' },
  logoSpan: { color: '#ffffff' },
  tagline: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' },
  links: { display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' },
  link: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', background: 'none', border: 'none' },
  copy: { fontSize: '0.72rem', color: 'rgba(255,255,255,0.18)' },
};

const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

export default function Footer({ onAdminClick }) {
  const year = new Date().getFullYear();
  return (
    <footer id="kontakt" style={styles.footer}>
      <div style={styles.logo}>SSG <span style={styles.logoSpan}>Cup</span></div>
      <div style={styles.tagline}>Baseret på Snickers Cup · DBU Fodboldskoler</div>
      <div style={styles.links}>
        <button style={styles.link} onClick={() => scrollTo('om')}>Hvordan virker det</button>
        <button style={styles.link} onClick={() => scrollTo('opret')}>Start turnering</button>
        <button style={styles.link} onClick={() => scrollTo('faq')}>FAQ</button>
        <button style={styles.link} onClick={onAdminClick}>Admin</button>
      </div>
      <div style={styles.copy}>© {year} SSG Cup · Gratis turneringsgenerator</div>
    </footer>
  );
}
