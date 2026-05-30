import React, { useState, useEffect } from 'react'
import { supabase } from '../supabase'

const s = {
  panel: { minHeight: '100vh', background: '#0d1f11', padding: '2rem', fontFamily: "'DM Sans', sans-serif" },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,224,102,0.15)' },
  logo: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.6rem', letterSpacing: '3px', color: '#ffe066' },
  logoSpan: { color: '#fff' },
  logoutBtn: { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.5rem 1rem', color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', cursor: 'pointer' },
  tabs: { display: 'flex', gap: '0.5rem', marginBottom: '2rem' },
  tab: { padding: '0.6rem 1.2rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase' },
  tabActive: { background: '#ffe066', color: '#0d1f11', border: '1px solid #ffe066' },
  card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,224,102,0.1)', borderRadius: '10px', padding: '1.5rem', marginBottom: '1rem' },
  sectionTitle: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.4rem', letterSpacing: '2px', color: '#ffe066', marginBottom: '1.2rem' },
  empty: { textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' },
  bigBtn: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'rgba(255,224,102,0.06)', border: '2px dashed rgba(255,224,102,0.3)', borderRadius: '12px', padding: '3rem 2rem', cursor: 'pointer', transition: 'all 0.2s', width: '100%', color: '#ffe066', fontFamily: "'DM Sans', sans-serif' " },
  bigBtnIcon: { fontSize: '3rem' },
  bigBtnTitle: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.6rem', letterSpacing: '3px', color: '#ffe066' },
  bigBtnSub: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' },
  historyItem: { background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' },
  historyName: { fontFamily: "'Bebas Neue', cursive", fontSize: '1.2rem', letterSpacing: '2px', color: '#ffe066' },
  historyMeta: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.2rem' },
  openBtn: { background: '#ffe066', color: '#0d1f11', padding: '0.5rem 1rem', borderRadius: '6px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', border: 'none', cursor: 'pointer' },
  deleteBtn: { background: 'rgba(255,80,80,0.1)', color: '#ff8080', padding: '0.5rem 0.8rem', borderRadius: '6px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: '700', border: '1px solid rgba(255,80,80,0.2)', cursor: 'pointer' },
  iframe: { width: '100%', height: 'calc(100vh - 120px)', border: 'none', borderRadius: '10px', background: '#0d1f11' },
  backBtn: { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', padding: '0.5rem 1rem', color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', cursor: 'pointer', marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  td: { padding: '0.9rem 1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  badge: { display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(255,224,102,0.15)', color: '#ffe066' },
}

const TABS = ['Turneringer', 'Tilmeldinger']

export default function AdminPanel({ onLogout }) {
  const [tab, setTab] = useState('Turneringer')
  const [visApp, setVisApp] = useState(false)
  const [historik, setHistorik] = useState([])
  const [tilmeldinger, setTilmeldinger] = useState([])

  useEffect(() => {
    indlaesHistorik()
    fetchTilmeldinger()
  }, [])

  const indlaesHistorik = () => {
    const gemt = JSON.parse(localStorage.getItem('ssgcup_turneringer') || '[]')
    setHistorik(gemt)
  }

  const fetchTilmeldinger = async () => {
    const { data } = await supabase.from('tilmeldinger').select('*').order('created_at', { ascending: false })
    if (data) setTilmeldinger(data)
  }

  const updateTilmelding = async (id, status) => {
    await supabase.from('tilmeldinger').update({ status }).eq('id', id)
    fetchTilmeldinger()
  }

  const sletHistorik = (idx) => {
    if (!window.confirm('Slet denne turnering?')) return
    const gemt = JSON.parse(localStorage.getItem('ssgcup_turneringer') || '[]')
    gemt.splice(idx, 1)
    localStorage.setItem('ssgcup_turneringer', JSON.stringify(gemt))
    setHistorik(gemt)
  }

  const logout = async () => { await supabase.auth.signOut(); onLogout() }

  // Vis turneringsappen i en iframe
  if (visApp) {
    return (
      <div style={s.panel}>
        <div style={s.header}>
          <div style={s.logo}>SSG <span style={s.logoSpan}>Cup</span> — Turnering</div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button style={s.backBtn} onClick={() => { setVisApp(false); indlaesHistorik() }}>← Tilbage til admin</button>
            <button style={s.logoutBtn} onClick={logout}>Log ud</button>
          </div>
        </div>
        <iframe src="/turnering.html" style={s.iframe} title="SSG Cup Turnering" />
      </div>
    )
  }

  return (
    <div style={s.panel}>
      <div style={s.header}>
        <div style={s.logo}>SSG <span style={s.logoSpan}>Cup</span> — Admin</div>
        <button style={s.logoutBtn} onClick={logout}>Log ud</button>
      </div>

      <div style={s.tabs}>
        {TABS.map(t => (
          <button key={t} style={{ ...s.tab, ...(tab === t ? s.tabActive : {}) }} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      {tab === 'Turneringer' && (
        <div>
          {/* Start ny turnering */}
          <div style={s.card}>
            <div style={s.sectionTitle}>Start turnering</div>
            <button style={s.bigBtn} onClick={() => setVisApp(true)}>
              <div style={s.bigBtnIcon}>⚽</div>
              <div style={s.bigBtnTitle}>Start ny turnering</div>
              <div style={s.bigBtnSub}>Åbner turneringsappen — opsæt spillere og kør live</div>
            </button>
          </div>

          {/* Tidligere turneringer */}
          <div style={s.card}>
            <div style={s.sectionTitle}>Tidligere turneringer ({historik.length})</div>
            {historik.length === 0 ? (
              <div style={s.empty}>Ingen gemte turneringer endnu — start en turnering og gem den</div>
            ) : (
              historik.map((t, i) => (
                <div key={t.id} style={s.historyItem}>
                  <div>
                    <div style={s.historyName}>{t.navn}</div>
                    <div style={s.historyMeta}>
                      📅 {t.dato} · 👥 {t.numPlayers} spillere · 🏟️ {t.numPitches} baner · 🔄 {t.numRounds} runder
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={s.openBtn} onClick={() => setVisApp(true)}>▶ Genindlæs</button>
                    <button style={s.deleteBtn} onClick={() => sletHistorik(i)}>🗑</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {tab === 'Tilmeldinger' && (
        <div style={s.card}>
          <div style={s.sectionTitle}>Klubtilmeldinger ({tilmeldinger.length})</div>
          {tilmeldinger.length === 0 ? (
            <div style={s.empty}>Ingen tilmeldinger endnu</div>
          ) : (
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Klub</th>
                  <th style={s.th}>Kontakt</th>
                  <th style={s.th}>Email</th>
                  <th style={s.th}>Alder</th>
                  <th style={s.th}>Region</th>
                  <th style={s.th}>Status</th>
                  <th style={s.th}>Handling</th>
                </tr>
              </thead>
              <tbody>
                {tilmeldinger.map(t => (
                  <tr key={t.id}>
                    <td style={s.td}>{t.klub}</td>
                    <td style={s.td}>{t.kontakt}</td>
                    <td style={s.td}>{t.email}</td>
                    <td style={s.td}>{t.aldersgruppe}</td>
                    <td style={s.td}>{t.region}</td>
                    <td style={s.td}>
                      <span style={{ ...s.badge, background: t.status === 'godkendt' ? 'rgba(80,200,100,0.15)' : t.status === 'afvist' ? 'rgba(255,80,80,0.15)' : 'rgba(255,224,102,0.15)', color: t.status === 'godkendt' ? '#50c864' : t.status === 'afvist' ? '#ff8080' : '#ffe066' }}>
                        {t.status || 'afventer'}
                      </span>
                    </td>
                    <td style={s.td}>
                      <button style={{ ...s.openBtn, background: 'rgba(80,200,100,0.15)', color: '#50c864', marginRight: '0.4rem' }} onClick={() => updateTilmelding(t.id, 'godkendt')}>✓ Godkend</button>
                      <button style={{ ...s.deleteBtn }} onClick={() => updateTilmelding(t.id, 'afvist')}>✗ Afvis</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}
