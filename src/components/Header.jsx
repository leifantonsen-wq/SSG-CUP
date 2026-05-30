import React, { useState } from 'react';

const styles = {
  header: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: 'rgba(13,31,17,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,224,102,0.1)' },
  logo: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.5rem', letterSpacing: '3px', color: '#ffe066', cursor: 'pointer' },
  logoSpan: { color: '#ffffff' },
  nav: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
  navLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', background: 'none', border: 'none' },
  cta: { background: '#ffe066', color: '#0d1f11', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', border: 'none' },
  adminLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', cursor: 'pointer', background: 'none', border: 'none' },
  hamburger: { background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' },
  bar: { width: '22px', height: '2px', background: '#ffe066', borderRadius: '2px', transition: 'all 0.2s' },
  mobileMenu: { position: 'fixed', top: '60px', left: 0, right: 0, background: '#0d1f11', borderBottom: '1px solid rgba(255,224,102,0.1)', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0', zIndex: 99 },
  mobileLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', background: 'none', border: 'none', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'left' },
  mobileCta: { background: '#ffe066', color: '#0d1f11', padding: '0.9rem', borderRadius: '6px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', border: 'none', marginTop: '0.75rem', width: '100%' },
};

const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

export default function Header({ onAdminClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClick = (id) => { scrollTo(id); setMenuOpen(false); };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => navClick('top')}>SSG <span style={styles.logoSpan}>Cup</span></div>

        {/* Desktop nav */}
        <nav style={{ ...styles.nav, display: 'none', '@media(min-width:768px)': { display: 'flex' } }} className="desktop-nav">
          <button style={styles.navLink} onClick={() => navClick('om')}>Hvordan virker det</button>
          <button style={styles.navLink} onClick={() => navClick('faq')}>FAQ</button>
          <button style={styles.adminLink} onClick={onAdminClick}>Admin</button>
          <button style={styles.cta} onClick={() => navClick('opret')}>Start turnering</button>
        </nav>

        {/* Hamburger */}
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} className="mobile-nav" aria-label="Menu">
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <button style={styles.mobileLink} onClick={() => navClick('om')}>Hvordan virker det</button>
          <button style={styles.mobileLink} onClick={() => navClick('faq')}>FAQ</button>
          <button style={styles.mobileLink} onClick={() => { onAdminClick(); setMenuOpen(false); }}>Admin</button>
          <button style={styles.mobileCta} onClick={() => navClick('opret')}>⚽ Start turnering nu</button>
        </div>
      )}

      <style>{`
        .desktop-nav { display: none !important; }
        .mobile-nav { display: flex !important; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
