import React from 'react';

const styles = {
  section: { padding: '4rem 1.25rem', maxWidth: '680px', margin: '0 auto' },
  label: { fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '0.75rem' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 8vw, 3.5rem)', letterSpacing: '2px', lineHeight: '1', marginBottom: '1.25rem', color: '#ffffff' },
  text: { color: 'rgba(255,255,255,0.65)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' },
  steps: { display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem 0' },
  step: { display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,224,102,0.1)', borderRadius: '10px', padding: '1.1rem' },
  stepNum: { fontFamily: "'Bebas Neue', cursive", fontSize: '2rem', color: '#ffe066', lineHeight: '1', minWidth: '2rem' },
  stepTitle: { fontFamily: "'DM Sans', sans-serif", fontWeight: '700', fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.25rem' },
  stepText: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' },
  quote: { background: 'rgba(255,224,102,0.06)', border: '1px solid rgba(255,224,102,0.2)', borderLeft: '3px solid #ffe066', borderRadius: '0 8px 8px 0', padding: '1rem 1.25rem', margin: '2rem 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.7' },
  quoteSource: { fontSize: '0.75rem', color: 'rgba(255,224,102,0.5)', marginTop: '0.5rem', fontStyle: 'normal', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' },
};

const steps = [
  { num: '1', title: 'Indtast antal spillere', text: 'Vælg antal spillere, baner, runder og kampvarighed — appen beregner det hele.' },
  { num: '2', title: 'Navngiv spillerne (valgfrit)', text: 'Skriv spillernavne ind eller brug numre — begge dele virker perfekt.' },
  { num: '3', title: 'Generer kampprogram', text: 'Alle spillere blandes automatisk på nye hold hver runde. Alle spiller med og mod alle.' },
  { num: '4', title: 'Kør turneringen live', text: 'Indskriv mål, se stillinger og topscorere — alt sker i realtid.' },
];

export default function Om() {
  return (
    <section id="om" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.label}>Sådan virker det</div>
        <h2 style={styles.title}>Turneringen der blander alle</h2>
        <p style={styles.text}>
          Snickers Cup-konceptet opstod på DBU's fodboldskoler i 90'erne. Idéen er enkel og genial: spillerne blandes på helt nye hold hver runde — så alle spiller <em>med</em> og <em>mod</em> alle i løbet af turneringen.
        </p>
        <p style={styles.text}>
          SSG Cup har taget konceptet og gjort det digitalt. På under 2 minutter har du et komplet kampprogram — uanset om du er fodboldtræner, lærer, pædagog eller arrangør.
        </p>

        <div style={styles.quote}>
          "Tilbage i 90'erne var Snickers Cup onsdag eftermiddag på DBU's fodboldskoler fast inventar. Her spillede vi turnering på tværs af holdene — og til sidst fik alle en Snickers."
          <div style={styles.quoteSource}>— Sidsel, sportmat.dk</div>
        </div>

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
