import React, { useState } from 'react';

const styles = {
  section: {
    padding: '6rem 2rem',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
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
    marginBottom: '1rem',
    color: '#ffffff',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '3rem',
    lineHeight: '1.7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label2: {
    fontSize: '0.78rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
  },
  input: {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '6px',
    padding: '0.8rem 1rem',
    color: '#ffffff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
  },
  select: {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '6px',
    padding: '0.8rem 1rem',
    color: '#ffffff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
  },
  btn: {
    background: '#ffe066',
    color: '#0d1f11',
    padding: '1rem',
    borderRadius: '6px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  success: {
    background: 'rgba(255,224,102,0.1)',
    border: '1px solid rgba(255,224,102,0.3)',
    borderRadius: '8px',
    padding: '2rem',
    textAlign: 'center',
  },
  successTitle: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '2rem',
    color: '#ffe066',
    letterSpacing: '2px',
    marginBottom: '0.5rem',
  },
  successText: {
    color: 'rgba(255,255,255,0.6)',
  },
};

export default function Tilmelding() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ klub: '', kontakt: '', email: '', aldersgruppe: '', region: '' });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section style={{ background: 'rgba(255,224,102,0.03)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={styles.section}>
        <div style={styles.label}>Kom med</div>
        <h2 style={styles.title}>Tilmeld din klub</h2>
        <p style={styles.subtitle}>
          Udfyld formularen nedenfor, så kontakter vi dig med alle detaljer om turneringen.
        </p>

        {sent ? (
          <div style={styles.success}>
            <div style={styles.successTitle}>✓ Tak for tilmeldingen!</div>
            <p style={styles.successText}>Vi kontakter dig inden for 2 hverdage med alle detaljer.</p>
          </div>
        ) : (
          <form style={styles.form} onSubmit={submit}>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label2}>Klubnavn</label>
                <input style={styles.input} name="klub" value={form.klub} onChange={handle} placeholder="FC Eksempel" required />
              </div>
              <div style={styles.field}>
                <label style={styles.label2}>Kontaktperson</label>
                <input style={styles.input} name="kontakt" value={form.kontakt} onChange={handle} placeholder="Dit navn" required />
              </div>
            </div>
            <div style={styles.field}>
              <label style={styles.label2}>Email</label>
              <input style={styles.input} type="email" name="email" value={form.email} onChange={handle} placeholder="kontakt@dinklub.dk" required />
            </div>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label2}>Aldersgruppe</label>
                <select style={styles.select} name="aldersgruppe" value={form.aldersgruppe} onChange={handle} required>
                  <option value="">Vælg alder</option>
                  <option>U8</option>
                  <option>U9</option>
                  <option>U10</option>
                  <option>U11</option>
                  <option>U12</option>
                  <option>U13</option>
                  <option>U14</option>
                </select>
              </div>
              <div style={styles.field}>
                <label style={styles.label2}>Region</label>
                <select style={styles.select} name="region" value={form.region} onChange={handle} required>
                  <option value="">Vælg region</option>
                  <option>Nordjylland</option>
                  <option>Midtjylland</option>
                  <option>Syddanmark</option>
                  <option>Sjælland</option>
                  <option>Hovedstaden</option>
                </select>
              </div>
            </div>
            <button type="submit" style={styles.btn}>Send tilmelding →</button>
          </form>
        )}
      </div>
    </section>
  );
}
