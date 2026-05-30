import React, { useState, useEffect } from 'react'
import { supabase } from './supabase'
import Header from './components/Header'
import Hero from './components/Hero'
import Om from './components/Om'
import Tilmelding from './components/Tilmelding'
import Footer from './components/Footer'
import Login from './components/Login'
import AdminPanel from './components/AdminPanel'

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (user) {
    return <AdminPanel onLogout={() => setUser(null)} />
  }

  return (
    <div>
      <Header onAdminClick={() => setShowLogin(true)} />
      <Hero />
      <Om />
      <Tilmelding />
      <Footer onAdminClick={() => setShowLogin(true)} />
      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={() => setShowLogin(false)} />}
    </div>
  )
}
