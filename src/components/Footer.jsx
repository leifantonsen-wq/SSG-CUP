import React from 'react';

const styles = {
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '3rem 2rem',
    textAlign: 'center',
  },
  logo: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '1.8rem',
    letterSpacing: '3px',
    color: '#ffe066',
    marginBottom: '0.5rem',
  },
  logoSpan: {
    color: '#ffffff',
  },
  tagline: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.3)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  link: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  copy: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.2)',
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>SSG <span style={styles.logoSpan}>Cup</span></div>
      <div style={styles.tagline}>Danmarks fodboldturnering</div>
      <div style={styles.links}>
        <span style={styles.link}>Om turneringen</span>
        <span style={styles.link}>Tilmelding</span>
        <span style={styles.link}>Resultater</span>
        <span style={styles.link}>Kontakt</span>
        <span style={styles.link}>Privatlivspolitik</span>
      </div>
      <div style={styles.copy}>© {year} SSG Cup · Alle rettigheder forbeholdes</div>
    </footer>
  );
}
