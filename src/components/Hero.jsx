import React from 'react';

const styles = {
  hero: { minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '7rem 1.25rem 3rem', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 30%, #2a5235 0%, #1e3d25 40%, #0d1f11 100%)' },
  badge: { display: 'inline-block', border: '1px solid rgba(255,224,102,0.4)', borderRadius: '999px', padding: '0.35rem 1.1rem', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '1.5rem' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(3rem, 14vw, 9rem)', lineHeight: '0.9', letterSpacing: '4px', marginBottom: '1.25rem' },
  titleYellow: { color: '#ffe066', display: 'block' },
  titleWhite: { color: '#ffffff', display: 'block' },
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
      <div style={styles.badge}>⚽ SSG = Small Sided Games — det klassiske blandekoncept</div>
      <h1 style={styles.title}>
        <span style={styles.titleYellow}>Bland</span>
        <span style={styles.titleWhite}>spillerne</span>
      </h1>
      <p style={styles.subtitle}>
        Alle spiller med og mod alle — hver runde. Opret et komplet turneringsprogram på under 2 minutter.
      </p>
      <p style={styles.origin}>Baseret på Snickers Cup fra DBU's fodboldskoler i 90'erne</p>
      <div style={styles.buttons}>
        <button style={styles.btnPrimary} onClick={onLoginClick}>
          🔐 Log ind og start turnering
        </button>
        <button style={styles.btnSecondary} onClick={() => scrollTo('om')}>
          Se hvordan det virker
        </button>
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
