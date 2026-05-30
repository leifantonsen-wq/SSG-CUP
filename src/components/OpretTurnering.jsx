import React from 'react';

const styles = {
  section: { padding: '4rem 1.25rem', maxWidth: '680px', margin: '0 auto', textAlign: 'center' },
  label: { fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '0.75rem' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 8vw, 3.5rem)', letterSpacing: '2px', marginBottom: '1rem', color: '#ffffff' },
  subtitle: { color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem', lineHeight: '1.7', fontSize: '0.95rem' },
  bigBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    background: 'linear-gradient(135deg, #2a5235, #1e3d25)',
    border: '2px solid rgba(255,224,102,0.3)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    cursor: 'pointer',
    width: '100%',
    color: '#ffe066',
    fontFamily: "'DM Sans', sans-serif",
    textDecoration: 'none',
    transition: 'border-color 0.2s',
    marginBottom: '1rem',
  },
  bigBtnIcon: { fontSize: '3rem' },
  bigBtnTitle: { fontFamily: "'Bebas Neue', cursive", fontSize: '2rem', letterSpacing: '3px', color: '#ffe066' },
  bigBtnSub: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' },
  usecases: { display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' },
  usecase: { display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '0.9rem 1rem', textAlign: 'left' },
  usecaseIcon: { fontSize: '1.5rem', minWidth: '2rem' },
  usecaseText: { fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' },
  usecaseTitle: { fontWeight: '700', color: '#ffffff', fontSize: '0.92rem', marginBottom: '0.1rem' },
};

const usecases = [
  { icon: '⚽', title: 'Fodboldtræning', text: 'Bland spillere på tværs af hold til træning eller slutning på sæsonen' },
  { icon: '🏫', title: 'Skole og SFO', text: 'Perfekt til klassearrangementer, sportsdag og intro-aktiviteter' },
  { icon: '🏕️', title: 'Lejr og stævne', text: 'Ideel til sommerlejre, fodboldkoler og weekendstævner' },
  { icon: '🎉', title: 'Firmafest og event', text: 'Sjov teambuilding der blander deltagerne naturligt' },
];

export default function OpretTurnering() {
  const åbnTurnering = () => {
    window.open('/turnering.html', '_blank');
  };

  return (
    <section id="opret" style={{ background: 'rgba(255,224,102,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.label}>Kom i gang</div>
        <h2 style={styles.title}>Opret din turnering</h2>
        <p style={styles.subtitle}>
          Gratis, ingen konto, ingen app-download. Virker direkte i browseren på mobil og computer.
        </p>

        <button style={styles.bigBtn} onClick={åbnTurnering}>
          <div style={styles.bigBtnIcon}>⚽</div>
          <div style={styles.bigBtnTitle}>Start turnering nu</div>
          <div style={styles.bigBtnSub}>Gratis · Ingen konto · Klar på 2 minutter</div>
        </button>

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
