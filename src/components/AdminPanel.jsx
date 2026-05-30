import React, { useState, useEffect } from 'react'
import { supabase } from '../supabase'

const styles = {
  panel: {
    minHeight: '100vh',
    background: '#0d1f11',
    padding: '2rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(255,224,102,0.15)',
  },
  logo: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '1.6rem',
    letterSpacing: '3px',
    color: '#ffe066',
  },
  logoSpan: { color: '#ffffff' },
  logoutBtn: {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    color: 'rgba(255,255,255,0.6)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    cursor: 'pointer',
  },
  tabs: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  tab: {
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'transparent',
    color: 'rgba(255,255,255,0.5)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  tabActive: {
    background: '#ffe066',
    color: '#0d1f11',
    border: '1px solid #ffe066',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem 1rem',
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  td: {
    padding: '0.9rem 1rem',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.8)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  badge: (status) => ({
    display: 'inline-block',
    padding: '0.2rem 0.6rem',
    borderRadius: '999px',
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    background: status === 'godkendt' ? 'rgba(80,200,100,0.15)' : status === 'afvist' ? 'rgba(255,80,80,0.15)' : 'rgba(255,224,102,0.15)',
    color: status === 'godkendt' ? '#50c864' : status === 'afvist' ? '#ff8080' : '#ffe066',
  }),
  actionBtn: {
    padding: '0.3rem 0.7rem',
    borderRadius: '4px',
    border: 'none',
    fontSize: '0.78rem',
    fontWeight: '700',
    cursor: 'pointer',
    marginRight: '0.4rem',
  },
  empty: {
    textAlign: 'center',
    padding: '4rem',
    color: 'rgba(255,255,255,0.3)',
    fontSize: '0.9rem',
  },
}

const TABS = ['Tilmeldinger', 'Resultater', 'Holdlister']

export default function AdminPanel({ onLogout }) {
  const [tab, setTab] = useState('Tilmeldinger')
  const [tilmeldinger, setTilmeldinger] = useState([])

  useEffect(() => {
    fetchTilmeldinger()
  }, [])

  const fetchTilmeldinger = async () => {
    const { data } = await supabase.from('tilmeldinger').select('*').order('created_at', { ascending: false })
    if (data) setTilmeldinger(data)
  }

  const updateStatus = async (id, status) => {
    await supabase.from('tilmeldinger').update({ status }).eq('id', id)
    fetchTilmeldinger()
  }

  const logout = async () => {
    await supabase.auth.signOut()
    onLogout()
  }

  return (
    <div style={styles.panel}>
      <div style={styles.header}>
        <div style={styles.logo}>SSG <span style={styles.logoSpan}>Cup</span> — Admin</div>
        <button style={styles.logoutBtn} onClick={logout}>Log ud</button>
      </div>

      <div style={styles.tabs}>
        {TABS.map(t => (
          <button key={t} style={{ ...styles.tab, ...(tab === t ? styles.tabActive : {}) }} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      {tab === 'Tilmeldinger' && (
        tilmeldinger.length === 0 ? (
          <div style={styles.empty}>Ingen tilmeldinger endnu</div>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Klub</th>
                <th style={styles.th}>Kontakt</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Alder</th>
                <th style={styles.th}>Region</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Handling</th>
              </tr>
            </thead>
            <tbody>
              {tilmeldinger.map(t => (
                <tr key={t.id}>
                  <td style={styles.td}>{t.klub}</td>
                  <td style={styles.td}>{t.kontakt}</td>
                  <td style={styles.td}>{t.email}</td>
                  <td style={styles.td}>{t.aldersgruppe}</td>
                  <td style={styles.td}>{t.region}</td>
                  <td style={styles.td}><span style={styles.badge(t.status)}>{t.status || 'afventer'}</span></td>
                  <td style={styles.td}>
                    <button style={{ ...styles.actionBtn, background: '#50c864', color: '#0d1f11' }} onClick={() => updateStatus(t.id, 'godkendt')}>✓ Godkend</button>
                    <button style={{ ...styles.actionBtn, background: 'rgba(255,80,80,0.2)', color: '#ff8080' }} onClick={() => updateStatus(t.id, 'afvist')}>✗ Afvis</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}

      {tab === 'Resultater' && <div style={styles.empty}>Resultater kommer snart</div>}
      {tab === 'Holdlister' && <div style={styles.empty}>Holdlister kommer snart</div>}
    </div>
  )
}
