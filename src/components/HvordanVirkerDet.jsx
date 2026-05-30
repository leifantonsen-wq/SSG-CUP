import React from 'react';

const styles = {
  section: { padding: '4rem 1.25rem', maxWidth: '760px', margin: '0 auto' },
  label: { fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '0.75rem', textAlign: 'center' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 8vw, 3.5rem)', letterSpacing: '2px', marginBottom: '0.75rem', color: '#ffffff', textAlign: 'center' },
  subtitle: { color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', lineHeight: '1.7', fontSize: '0.9rem', textAlign: 'center', maxWidth: '520px', margin: '0 auto 2.5rem' },

  // Mock UI
  mockup: { background: '#0a1a0d', border: '1px solid rgba(255,224,102,0.15)', borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem' },
  mockHeader: { background: '#1e3d25', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' },
  mockDot: (c) => ({ width: '10px', height: '10px', borderRadius: '50%', background: c }),
  mockTitle: { fontFamily: "'Bebas Neue', cursive", fontSize: '0.9rem', letterSpacing: '2px', color: '#ffe066', marginLeft: '0.5rem' },
  mockBody: { padding: '1.25rem' },

  // Setup form mock
  setupGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' },
  setupField: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.75rem' },
  fieldLabel: { fontSize: '0.65rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.2rem' },
  fieldValue: { fontSize: '1rem', fontWeight: '700', color: '#ffe066', fontFamily: "'Bebas Neue', cursive", letterSpacing: '1px' },

  // Players mock
  playersGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem', marginBottom: '1rem' },
  playerChip: { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '0.4rem 0.3rem', textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' },

  // Schedule mock
  roundBlock: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '0.75rem', marginBottom: '0.5rem' },
  roundTitle: { fontFamily: "'Bebas Neue', cursive", fontSize: '0.85rem', letterSpacing: '2px', color: '#ffe066', marginBottom: '0.5rem' },
  matchRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.75rem' },
  matchTeam: { color: 'rgba(255,255,255,0.7)', flex: 1 },
  matchVs: { color: 'rgba(255,224,102,0.5)', padding: '0 0.5rem', fontSize: '0.7rem', fontWeight: '700' },
  matchScore: { background: 'rgba(255,224,102,0.1)', border: '1px solid rgba(255,224,102,0.2)', borderRadius: '4px', padding: '0.15rem 0.5rem', color: '#ffe066', fontSize: '0.75rem', fontWeight: '700' },

  // Steps
  steps: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  step: { display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,224,102,0.08)', borderRadius: '10px', padding: '1rem' },
  stepNum: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', color: '#ffe066', lineHeight: '1', minWidth: '2rem', textAlign: 'center' },
  stepTitle: { fontWeight: '700', fontSize: '0.92rem', color: '#ffffff', marginBottom: '0.2rem' },
  stepText: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' },
};

const players = ['Mikkel', 'Jonas', 'Sofie', 'Emma', 'Lars', 'Mia', 'Rasmus', 'Anna'];
const steps = [
  { num: '1', title: 'Opsæt turneringen', text: 'Vælg antal spillere, baner og runder. Appen beregner holdstørrelser automatisk.' },
  { num: '2', title: 'Indtast spillernavne', text: 'Skriv navnene ind — eller brug numre. Appen blander dem automatisk på nye hold hver runde.' },
  { num: '3', title: 'Kør turneringen live', text: 'Indskriv mål, se live stilling og topscorerliste. Gem turneringen når den er slut.' },
];

export default function HvordanVirkerDet() {
  return (
    <section id="om" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.label}>Sådan virker SSG Cup</div>
        <h2 style={styles.title}>Klar på 2 minutter</h2>
        <p style={styles.subtitle}>
          SSG står for <strong style={{color:'#ffe066'}}>Small Sided Games</strong> — småsidede spil hvor alle blandes på nye hold hver runde. Log ind, indtast dine spillere og få et komplet kampprogram med det samme.
        </p>

        {/* Mockup af appen */}
        <div style={styles.mockup}>
          <div style={styles.mockHeader}>
            <div style={styles.mockDot('#ff5f57')} />
            <div style={styles.mockDot('#febc2e')} />
            <div style={styles.mockDot('#28c840')} />
            <div style={styles.mockTitle}>SSG Cup — Turneringsapp</div>
          </div>
          <div style={styles.mockBody}>

            {/* Opsætning */}
            <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,224,102,0.6)', marginBottom: '0.6rem' }}>⚙️ Opsætning</div>
            <div style={styles.setupGrid}>
              <div style={styles.setupField}>
                <div style={styles.fieldLabel}>Spillere</div>
                <div style={styles.fieldValue}>16</div>
              </div>
              <div style={styles.setupField}>
                <div style={styles.fieldLabel}>Baner</div>
                <div style={styles.fieldValue}>4</div>
              </div>
              <div style={styles.setupField}>
                <div style={styles.fieldLabel}>Runder</div>
                <div style={styles.fieldValue}>5</div>
              </div>
              <div style={styles.setupField}>
                <div style={styles.fieldLabel}>Min/kamp</div>
                <div style={styles.fieldValue}>10</div>
              </div>
            </div>

            {/* Spillere */}
            <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,224,102,0.6)', marginBottom: '0.6rem' }}>👥 Spillere</div>
            <div style={styles.playersGrid}>
              {players.map((p, i) => (
                <div key={i} style={styles.playerChip}>{p}</div>
              ))}
              <div style={{ ...styles.playerChip, color: 'rgba(255,255,255,0.2)', border: '1px dashed rgba(255,255,255,0.1)' }}>+8 mere</div>
            </div>

            {/* Kampprogram */}
            <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,224,102,0.6)', marginBottom: '0.6rem' }}>📋 Kampprogram</div>
            <div style={styles.roundBlock}>
              <div style={styles.roundTitle}>Runde 1 · 10:00</div>
              {[['Mikkel, Sofie, Lars', 'Jonas, Emma, Rasmus'], ['Mia, Anna, +1', 'Hold D · +3 spillere']].map(([h, a], i) => (
                <div key={i} style={{ ...styles.matchRow, borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={styles.matchTeam}>🟢 {h}</span>
                  <span style={styles.matchVs}>vs</span>
                  <span style={{ ...styles.matchTeam, textAlign: 'right' }}>{a} 🔵</span>
                  <span style={{ ...styles.matchScore, marginLeft: '0.5rem' }}>2–1</span>
                </div>
              ))}
            </div>
            <div style={{ ...styles.roundBlock, opacity: 0.5 }}>
              <div style={styles.roundTitle}>Runde 2 · 10:15</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>Nye hold — alle blandet igen...</div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div style={styles.steps}>
          {steps.map(s => (
            <div key={s.num} style={styles.step}>
              <div style={styles.stepNum}>{s.num}</div>
              <div>
                <div style={styles.stepTitle}>{s.title}</div>
                <div style={styles.stepText}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
