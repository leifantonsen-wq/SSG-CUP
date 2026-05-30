import React, { useState } from 'react';

const Logo = () => (
  <svg width="36" height="43" viewBox="0 0 130 155" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hcg1b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3d25"/>
        <stop offset="100%" stopColor="#0d1f11"/>
      </linearGradient>
      <linearGradient id="hcgoldb" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffe066"/>
        <stop offset="100%" stopColor="#c89a00"/>
      </linearGradient>
    </defs>
    <path d="M65 4 L122 26 L122 84 Q122 132 65 150 Q8 132 8 84 L8 26 Z" fill="url(#hcg1b)" stroke="#f5c400" strokeWidth="2"/>
    <path d="M65 11 L115 30 L115 84 Q115 126 65 143 Q15 126 15 84 L15 30 Z" fill="none" stroke="rgba(245,196,0,.2)" strokeWidth="1"/>
    <text x="65" y="52" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing="5">CUP</text>
    <text x="65" y="100" textAnchor="middle" fontFamily="Bebas Neue, cursive" fontSize="52" fill="url(#hcgoldb)" letterSpacing="3">SSG</text>
    <circle cx="96" cy="57" r="9" fill="white" opacity=".9"/>
    <circle cx="92.5" cy="54" r="2.5" fill="#222" opacity=".15"/>
    <circle cx="99" cy="53" r="2" fill="#222" opacity=".12"/>
    <circle cx="93" cy="59.5" r="2.2" fill="#222" opacity=".12"/>
  </svg>
);

const styles = {
  header: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem', background: 'rgba(13,31,17,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,224,102,0.1)' },
  logoWrap: { display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' },
  logoText: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.4rem', letterSpacing: '3px', color: '#ffe066' },
  logoSpan: { color: '#ffffff' },
  logoSub: { fontSize: '0.6rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', lineHeight: '1', marginTop: '-2px' },
  nav: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
  navLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', background: 'none', border: 'none' },
  cta: { background: '#ffe066', color: '#0d1f11', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', border: 'none' },
  adminLink: { fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', cursor: 'pointer', background: 'none', border: 'none' },
  hamburger: { background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' },
  bar: { width: '22px', height: '2px', background: '#ffe066', borderRadius: '2px' },
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
        <div style={styles.logoWrap} onClick={() => navClick('top')}>
          <Logo />
          <div>
            <div style={styles.logoText}>SSG <span style={styles.logoSpan}>Cup</span></div>
            <div style={styles.logoSub}>Small Sided Games</div>
          </div>
        </div>

        <nav className="desktop-nav" style={styles.nav}>
          <button style={styles.navLink} onClick={() => navClick('om')}>Hvordan virker det</button>
          <button style={styles.navLink} onClick={() => navClick('faq')}>FAQ</button>
          <button style={styles.adminLink} onClick={onAdminClick}>Admin</button>
          <button style={styles.cta} onClick={() => navClick('opret')}>Start turnering</button>
        </nav>

        <button style={styles.hamburger} className="mobile-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </header>

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
