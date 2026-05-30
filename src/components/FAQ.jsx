import React, { useState } from 'react';

const styles = {
  section: { padding: '4rem 1.25rem', maxWidth: '680px', margin: '0 auto' },
  label: { fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffe066', marginBottom: '0.75rem' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 8vw, 3.5rem)', letterSpacing: '2px', marginBottom: '2rem', color: '#ffffff' },
  item: { borderBottom: '1px solid rgba(255,255,255,0.08)' },
  question: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 0', cursor: 'pointer', gap: '1rem' },
  questionText: { fontWeight: '700', fontSize: '0.95rem', color: '#ffffff', lineHeight: '1.4' },
  icon: { color: '#ffe066', fontSize: '1.2rem', minWidth: '1.2rem', fontFamily: "'Bebas Neue', cursive" },
  answer: { paddingBottom: '1.1rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8' },
};

const faqs = [
  { q: 'Hvad er Snickers Cup?', a: 'Snickers Cup er et turneringskoncept der opstod på DBU\'s fodboldskoler i 90\'erne. Konceptet går ud på at alle spillere blandes på nye hold hver runde — så alle spiller med og mod alle i løbet af turneringen. Det skaber fællesskab og sikrer at alle møder hinanden.' },
  { q: 'Hvad er SSG Cup?', a: 'SSG Cup er en gratis digital version af Snickers Cup-konceptet. Du indtaster dine spillere, vælger antal baner og runder — og får et komplet kampprogram på sekunder. Direkte i browseren, ingen konto eller download nødvendig.' },
  { q: 'Hvem kan bruge SSG Cup?', a: 'Alle der vil arrangere en turnering med det sociale blandekoncept — fodboldtrænere, lærere, pædagoger, lejrarrangører, firmaevent-koordinatorer og mange andre.' },
  { q: 'Koster det noget?', a: 'Nej. SSG Cup er helt gratis at bruge. Ingen konto, ingen betaling, ingen skjulte gebyrer.' },
  { q: 'Hvor mange spillere kan man have?', a: 'SSG Cup understøtter fra 4 til 80 spillere. Appen beregner automatisk holdstørrelser og kampprogram baseret på antallet af spillere og baner.' },
  { q: 'Virker det på mobil?', a: 'Ja — SSG Cup er bygget til at virke på både mobil, tablet og computer. Du kan sagtens køre hele turneringen fra din telefon på dagen.' },
  { q: 'Kan jeg gemme mine turneringer?', a: 'Ja. Du kan gemme afsluttede turneringer og genindlæse dem senere. Dine data gemmes lokalt i din browser.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.label}>Spørgsmål & Svar</div>
        <h2 style={styles.title}>Ofte stillede spørgsmål</h2>
        {faqs.map((f, i) => (
          <div key={i} style={styles.item}>
            <div style={styles.question} onClick={() => setOpen(open === i ? null : i)}>
              <span style={styles.questionText}>{f.q}</span>
              <span style={styles.icon}>{open === i ? '−' : '+'}</span>
            </div>
            {open === i && <div style={styles.answer}>{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
