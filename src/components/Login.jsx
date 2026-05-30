import React, { useState } from 'react'
import { supabase } from '../supabase'

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  box: {
    background: '#1e3d25',
    border: '1px solid rgba(255,224,102,0.2)',
    borderRadius: '12px',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '420px',
  },
  logo: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: '1.8rem',
    letterSpacing: '3px',
    color: '#ffe066',
    textAlign: 'center',
    marginBottom: '0.25rem',
  },
  logoSpan: { color: '#ffffff' },
  subtitle: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    margin: '1.5rem 0',
  },
  line: {
    flex: 1,
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
  },
  dividerText: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  socialBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.05)',
    color: '#ffffff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '0.75rem',
    transition: 'background 0.2s',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    marginBottom: '1rem',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '700',
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
  btn: {
    width: '100%',
    background: '#ffe066',
    color: '#0d1f11',
    padding: '0.9rem',
    borderRadius: '6px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  error: {
    background: 'rgba(255,80,80,0.1)',
    border: '1px solid rgba(255,80,80,0.3)',
    borderRadius: '6px',
    padding: '0.75rem',
    color: '#ff8080',
    fontSize: '0.85rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  success: {
    background: 'rgba(255,224,102,0.1)',
    border: '1px solid rgba(255,224,102,0.3)',
    borderRadius: '6px',
    padding: '0.75rem',
    color: '#ffe066',
    fontSize: '0.85rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.4)',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
}

export default function Login({ onClose, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
  }

  const loginWithFacebook = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: { redirectTo: window.location.origin }
    })
  }

  const loginWithEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Forkert email eller adgangskode')
    } else {
      onLogin()
      onClose()
    }
    setLoading(false)
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={{ ...styles.box, position: 'relative' }} onClick={e => e.stopPropagation()}>
        <button style={styles.close} onClick={onClose}>×</button>
        <div style={styles.logo}>SSG <span style={styles.logoSpan}>Cup</span></div>
        <div style={styles.subtitle}>Admin Login</div>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <button style={styles.socialBtn} onClick={loginWithGoogle}>
          <span>G</span> Fortsæt med Google
        </button>
        <button style={styles.socialBtn} onClick={loginWithFacebook}>
          <span>f</span> Fortsæt med Facebook
        </button>

        <div style={styles.divider}>
          <div style={styles.line} />
          <span style={styles.dividerText}>eller</span>
          <div style={styles.line} />
        </div>

        <form onSubmit={loginWithEmail}>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="din@email.dk" required />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Adgangskode</label>
            <input style={styles.input} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button style={styles.btn} type="submit" disabled={loading}>
            {loading ? 'Logger ind...' : 'Log ind →'}
          </button>
        </form>
      </div>
    </div>
  )
}
