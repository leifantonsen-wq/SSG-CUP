import React from 'react';

const styles = {
  section: { padding: '4rem 1.25rem', maxWidth: '680px', margin: '0 auto', textAlign: 'center' },
  label: { fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '0.75rem' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 8vw, 3.5rem)', letterSpacing: '2px', marginBottom: '1rem', color: '#ffffff' },
  subtitle: { color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem', lineHeight: '1.7', fontSize: '0.95rem' },
  lockBox: {
    background: 'linear-gradient(135deg, #1e3d25, #0d1f11)',
    border: '2px solid rgba(255,224,102,0.25)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  lockIcon: { fontSize: '2.5rem', marginBottom: '0.75rem' },
  lockTitle: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', letterSpacing: '3px', color: '#ffe066', marginBottom: '0.5rem' },
  lockSub: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', lineHeight: '1.6' },
  loginBtn: {
    background: '#ffe066', color: '#0d1f11', padding: '0.9rem 2rem', borderRadius: '6px',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: '700',
    letterSpacing: '1px', textTransform: 'uppercase', border: 'none', cursor: 'pointer', width: '100%',
  },
  usecases: { display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' },
  usecase: { display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '0.9rem 1rem', textAlign: 'left' },
  usecaseIcon: { fontSize: '1.5rem', minWidth: '2rem' },
  usecaseTitle: { fontWeight: '700', color: '#ffffff', fontSize: '0.92rem', marginBottom: '0.1rem' },
  usecaseText: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' },
};

const usecases = [
  { icon: '⚽', title: 'Fodboldtræning', text: 'Bland spillere på tværs af hold til træning eller afslutning på sæsonen' },
  { icon: '🏫', title: 'Skole og SFO', text: 'Perfekt til klassearrangementer, sportsdag og intro-aktiviteter' },
  { icon: '🏕️', title: 'Lejr og stævne', text: 'Ideel til sommerlejre, fodboldskoler og weekendstævner' },
  { icon: '🎉', title: 'Firmafest og event', text: 'Sjov teambuilding der blander deltagerne naturligt' },
];

export default function OpretTurnering({ onLoginClick }) {
  return (
    <section id="opret" style={{ background: 'rgba(255,224,102,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.label}>Kom i gang</div>
        <h2 style={styles.title}>Start din turnering</h2>
        <p style={styles.subtitle}>
          Log ind og opret en turnering på under 2 minutter. Gratis, ingen app-download — virker direkte i browseren.
        </p>

        <div style={styles.lockBox}>
          <div style={styles.lockIcon}>🔐</div>
          <div style={styles.lockTitle}>Log ind for at starte</div>
          <div style={styles.lockSub}>Opret en gratis konto eller log ind med din eksisterende for at oprette og gemme turneringer.</div>
          <button style={styles.loginBtn} onClick={onLoginClick}>
            Log ind og start turnering →
          </button>
        </div>

        <div style={styles.usecases}>
          {usecases.map((u, i) => (
            <div key={i} style={styles.usecase}>
              <div style={styles.usecaseIcon}>{u.icon}</div>
              <div>
                <div style={styles.usecaseTitle}>{u.title}</div>
                <div style={styles.usecaseText}>{u.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
