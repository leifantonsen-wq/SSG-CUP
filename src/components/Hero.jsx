import React from 'react';

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8rem 2rem 4rem',
    position: 'relative',
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 50% 30%, #2a5235 0%, #1e3d25 40%, #0d1f11 100%)',
  },
  badge: {
    display: 'inline-block',
    border: '1px solid rgba(255,224,102,0.4)',
    borderRadius: '999px',
    padding: '0.35rem 1.1rem',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#ffe066',
    marginBottom: '2rem',
  },
  title: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 'clamp(4rem, 12vw, 10rem)',
    lineHeight: '0.9',
    letterSpacing: '4px',
    marginBottom: '1.5rem',
  },
  titleYellow: { color: '#ffe066', display: 'block' },
  titleWhite: { color: '#ffffff', display: 'block' },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255,255,255,0.65)',
    maxWidth: '560px',
    lineHeight: '1.7',
    marginBottom: '3rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnPrimary: {
    background: '#ffe066',
    color: '#0d1f11',
    padding: '0.9rem 2.2rem',
    borderRadius: '4px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#ffffff',
    padding: '0.9rem 2.2rem',
    borderRadius: '4px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: '1px solid rgba(255,255,255,0.3)',
    cursor: 'pointer',
  },
  stats: {
    display: 'flex',
    gap: '3rem',
    marginTop: '5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stat: { textAlign: 'center' },
  statNumber: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '3rem',
    color: '#ffe066',
    letterSpacing: '2px',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
    marginTop: '0.3rem',
  },
  divider: {
    width: '1px',
    height: '50px',
    background: 'rgba(255,255,255,0.15)',
    alignSelf: 'center',
  },
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section id="top" style={styles.hero}>
      <div style={styles.badge}>⚽ Genoplivet 2026</div>
      <h1 style={styles.title}>
        <span style={styles.titleYellow}>SSG</span>
        <span style={styles.titleWhite}>Cup</span>
      </h1>
      <p style={styles.subtitle}>
        Danmarks genoplivede fodboldturnering for klubber. Tilmeld din klub og vær med til at skrive historien — ligesom dengang.
      </p>
      <div style={styles.buttons}>
        <button style={styles.btnPrimary} onClick={() => scrollTo('tilmelding')}>Tilmeld din klub</button>
        <button style={styles.btnSecondary} onClick={() => scrollTo('om')}>Læs mere om turneringen</button>
      </div>
      <div style={styles.stats}>
        <div style={styles.stat}>
          <div style={styles.statNumber}>32+</div>
          <div style={styles.statLabel}>Klubber tilmeldt</div>
        </div>
        <div style={styles.divider} />
        <div style={styles.stat}>
          <div style={styles.statNumber}>8</div>
          <div style={styles.statLabel}>Regioner</div>
        </div>
        <div style={styles.divider} />
        <div style={styles.stat}>
          <div style={styles.statNumber}>U8–U14</div>
          <div style={styles.statLabel}>Aldersgrupper</div>
        </div>
        <div style={styles.divider} />
        <div style={styles.stat}>
          <div style={styles.statNumber}>2026</div>
          <div style={styles.statLabel}>Sæson</div>
        </div>
      </div>
    </section>
  );
}
