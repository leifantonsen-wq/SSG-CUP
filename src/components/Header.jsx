import React, { useState } from 'react';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: 'rgba(13,31,17,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,224,102,0.1)',
  },
  logo: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '1.6rem',
    letterSpacing: '3px',
    color: '#ffe066',
  },
  logoSpan: {
    color: '#ffffff',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  cta: {
    background: '#ffe066',
    color: '#0d1f11',
    padding: '0.5rem 1.2rem',
    borderRadius: '4px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',
  },
  menuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#ffe066',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        SSG <span style={styles.logoSpan}>Cup</span>
      </div>
      <nav style={styles.nav}>
        <span style={styles.navLink}>Om Turneringen</span>
        <span style={styles.navLink}>Tilmelding</span>
        <span style={styles.navLink}>Resultater</span>
        <span style={styles.navLink}>Kontakt</span>
        <button style={styles.cta}>Tilmeld din klub</button>
      </nav>
    </header>
  );
}
