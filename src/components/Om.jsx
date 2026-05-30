import React from 'react';

const styles = {
  section: {
    padding: '6rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#ffe066',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    letterSpacing: '2px',
    lineHeight: '1',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  text: {
    color: 'rgba(255,255,255,0.65)',
    lineHeight: '1.8',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,224,102,0.15)',
    borderRadius: '8px',
    padding: '1.5rem',
  },
  cardIcon: {
    fontSize: '1.8rem',
    marginBottom: '0.75rem',
  },
  cardTitle: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '1.2rem',
    letterSpacing: '1px',
    color: '#ffe066',
    marginBottom: '0.4rem',
  },
  cardText: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.55)',
    lineHeight: '1.6',
  },
};

const features = [
  { icon: '🏆', title: 'Turnering', text: 'Struktureret format med puljer og slutspil' },
  { icon: '⚽', title: 'Alle niveauer', text: 'Fra begyndere til erfarne spillere' },
  { icon: '🤝', title: 'Fællesskab', text: 'Klubber på tværs af hele Danmark' },
  { icon: '📱', title: 'Digital', text: 'Live resultater og tilmelding online' },
];

export default function Om() {
  return (
    <section style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.grid}>
          <div>
            <div style={styles.label}>Om SSG Cup</div>
            <h2 style={styles.title}>Historien genopstår</h2>
            <p style={styles.text}>
              SSG Cup var en af Danmarks mest elskede fodboldturneringer for unge spillere. Nu er den tilbage — større, mere moderne og klar til en ny generation af fodboldklubber.
            </p>
            <p style={styles.text}>
              Vi skaber rammerne for uforglemmelige kampe, stærke fællesskaber og sportslig udvikling for U8 til U14 spillere over hele landet.
            </p>
          </div>
          <div style={styles.cards}>
            {features.map((f, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.cardIcon}>{f.icon}</div>
                <div style={styles.cardTitle}>{f.title}</div>
                <div style={styles.cardText}>{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
