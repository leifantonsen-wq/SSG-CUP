import React from 'react';

const Logo = ({ size = 52 }) => (
  <svg width={size} height={size * 1.19} viewBox="0 0 130 155" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hcg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3d25"/>
        <stop offset="100%" stopColor="#0d1f11"/>
      </linearGradient>
      <linearGradient id="hcgold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffe066"/>
        <stop offset="100%" stopColor="#c89a00"/>
      </linearGradient>
    </defs>
    <path d="M65 4 L122 26 L122 84 Q122 132 65 150 Q8 132 8 84 L8 26 Z" fill="url(#hcg1)" stroke="#f5c400" strokeWidth="2"/>
    <path d="M65 11 L115 30 L115 84 Q115 126 65 143 Q15 126 15 84 L15 30 Z" fill="none" stroke="rgba(245,196,0,.2)" strokeWidth="1"/>
    <rect x="25" y="36" width="80" height="2" rx="1" fill="#f5c400" opacity=".3"/>
    <text x="65" y="52" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.5)" letterSpacing="5">CUP</text>
    <text x="65" y="100" textAnchor="middle" fontFamily="Bebas Neue, cursive" fontSize="52" fill="url(#hcgold)" letterSpacing="3">SSG</text>
    <circle cx="96" cy="57" r="9" fill="white" opacity=".9"/>
    <circle cx="92.5" cy="54" r="2.5" fill="#222" opacity=".15"/>
    <circle cx="99" cy="53" r="2" fill="#222" opacity=".12"/>
    <circle cx="93" cy="59.5" r="2.2" fill="#222" opacity=".12"/>
    <circle cx="99.5" cy="59" r="2" fill="#222" opacity=".1"/>
    <text x="65" y="122" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="6.5" fontWeight="700" fill="rgba(255,255,255,.3)" letterSpacing="2.5">SMALL SIDE GAME</text>
    <text x="38" y="125" textAnchor="middle" fontSize="6" fill="rgba(245,196,0,.35)">★</text>
    <text x="92" y="125" textAnchor="middle" fontSize="6" fill="rgba(245,196,0,.35)">★</text>
    <rect x="25" y="128" width="80" height="1.5" rx=".75" fill="#f5c400" opacity=".2"/>
  </svg>
);

const styles = {
  hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '7rem 1.25rem 3rem', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 30%, #2a5235 0%, #1e3d25 40%, #0d1f11 100%)' },
  badge: { display: 'inline-block', border: '1px solid rgba(255,224,102,0.4)', borderRadius: '999px', padding: '0.35rem 1.1rem', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '1.5rem' },
  logoWrap: { marginBottom: '1.5rem' },
  tagline: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 8vw, 5rem)', lineHeight: '1', letterSpacing: '3px', marginBottom: '1rem', color: '#ffffff' },
  taglineYellow: { color: '#ffe066', display: 'block' },
  taglineWhite: { color: '#ffffff', display: 'block' },
  subtitle: { fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'rgba(255,255,255,0.65)', maxWidth: '540px', lineHeight: '1.7', marginBottom: '0.5rem' },
  origin: { fontSize: '0.78rem', color: 'rgba(255,224,102,0.5)', marginBottom: '2.5rem', letterSpacing: '0.5px' },
  buttons: { display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '320px', marginBottom: '3rem' },
  btnPrimary: { background: '#ffe066', color: '#0d1f11', padding: '1rem 2rem', borderRadius: '6px', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', border: 'none', cursor: 'pointer', width: '100%' },
  btnSecondary: { background: 'transparent', color: '#ffffff', padding: '1rem 2rem', borderRadius: '6px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', width: '100%' },
  stats: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%', maxWidth: '380px' },
  stat: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,224,102,0.1)', borderRadius: '10px', padding: '0.9rem 0.75rem', textAlign: 'center' },
  statNumber: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', color: '#ffe066', letterSpacing: '2px', lineHeight: '1' },
  statLabel: { fontSize: '0.68rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' },
};

const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

export default function Hero({ onLoginClick }) {
  return (
    <section id="top" style={styles.hero}>
      <div style={styles.badge}>⚽ Small Sided Games — alle møder alle</div>
      <div style={styles.logoWrap}>
        <Logo size={90} />
      </div>
      <h1 style={styles.tagline}>
        <span style={styles.taglineYellow}>Gratis</span>
        <span style={styles.taglineWhite}>turneringsgenerator</span>
      </h1>
      <p style={styles.subtitle}>
        Small Sided Games — alle møder alle, hver runde. Opret et komplet turneringsprogram på under 2 minutter.
      </p>
      <p style={styles.origin}>Baseret på Snickers Cup fra DBU's fodboldskoler i 90'erne</p>
      <div style={styles.buttons}>
        <button style={styles.btnPrimary} onClick={onLoginClick}>🔐 Log ind og start turnering</button>
        <button style={styles.btnSecondary} onClick={() => scrollTo('om')}>Se hvordan det virker</button>
      </div>
      <div style={styles.stats}>
        <div style={styles.stat}><div style={styles.statNumber}>2 min</div><div style={styles.statLabel}>Fra idé til kampprogram</div></div>
        <div style={styles.stat}><div style={styles.statNumber}>4–80</div><div style={styles.statLabel}>Spillere understøttet</div></div>
        <div style={styles.stat}><div style={styles.statNumber}>100%</div><div style={styles.statLabel}>Gratis at bruge</div></div>
        <div style={styles.stat}><div style={styles.statNumber}>Alle</div><div style={styles.statLabel}>Møder alle — hver runde</div></div>
      </div>
    </section>
  );
}
