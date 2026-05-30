import React from 'react'

const styles = {
  header: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: 'rgba(13,31,17,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,224,102,0.1)',
  },
  logo: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.6rem', letterSpacing: '3px', color: '#ffe066', cursor: 'pointer' },
  logoSpan: { color: '#ffffff' },
  nav: { display: 'flex', gap: '2rem', alignItems: 'center' },
  navLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', background: 'none', border: 'none' },
  cta: { background: '#ffe066', color: '#0d1f11', padding: '0.5rem 1.2rem', borderRadius: '4px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', border: 'none' },
  adminLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', background: 'none', border: 'none' },
}

const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

export default function Header({ onAdminClick }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => scrollTo('top')}>SSG <span style={styles.logoSpan}>Cup</span></div>
      <nav style={styles.nav}>
        <button style={styles.navLink} onClick={() => scrollTo('om')}>Om Turneringen</button>
        <button style={styles.navLink} onClick={() => scrollTo('tilmelding')}>Tilmelding</button>
        <button style={styles.navLink} onClick={() => scrollTo('kontakt')}>Kontakt</button>
        <button style={styles.adminLink} onClick={onAdminClick}>Admin</button>
        <button style={styles.cta} onClick={() => scrollTo('tilmelding')}>Tilmeld din klub</button>
      </nav>
    </header>
  )
}
