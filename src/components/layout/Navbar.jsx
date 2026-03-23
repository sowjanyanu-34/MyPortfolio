import { useState, useEffect } from 'react'
import { personal } from '../../data/portfolio'

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['About', 'Projects', 'Skills', 'Contact']
  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0.75rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backdropFilter: 'blur(20px)',
      background: dark
        ? `rgba(10,10,15,${scrolled ? '0.95' : '0.6'})`
        : `rgba(240,240,248,${scrolled ? '0.95' : '0.7'})`,
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.3s',
    }}>

      {/* Left — Photo + Name */}
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>

        {/* Profile photo circle */}
        <div style={{
          width: 42, height: 42,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(108,99,255,0.5)',
          flexShrink: 0,
          background: 'linear-gradient(135deg, var(--accent), var(--green))',
        }}>
          <img
            src={personal.photo}
            alt={personal.name}
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          {/* Fallback initials */}
          <div style={{
            display: 'none', width: '100%', height: '100%',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: '0.85rem', color: 'white',
          }}>
            PK
          </div>
        </div>

        {/* Name */}
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: '1rem', color: 'var(--text)',
          letterSpacing: '-0.01em',
        }}>
          Sowjanya<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
      </a>

      {/* Right — Nav links + theme toggle */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.875rem', color: 'var(--text2)',
              fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s',
              fontWeight: 400,
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >
            {link}
          </button>
        ))}

        {/* Resume link */}
        <a href={personal.resumeUrl} target="_blank" rel="noreferrer"
          style={{
            fontSize: '0.875rem', color: 'var(--accent2)',
            fontFamily: 'DM Sans, sans-serif',
            textDecoration: 'none', fontWeight: 500,
          }}>
          Resume ↗
        </a>

        {/* Theme toggle */}
        <button onClick={onToggleTheme}
          style={{
            background: 'var(--surface)', border: '1px solid var(--border2)',
            borderRadius: '8px', padding: '0.4rem 0.75rem',
            color: 'var(--text2)', cursor: 'pointer',
            fontSize: '0.875rem', fontFamily: 'DM Sans, sans-serif',
          }}>
          {dark ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
    </nav>
  )
}