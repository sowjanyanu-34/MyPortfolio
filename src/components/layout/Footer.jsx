import { motion } from 'framer-motion'
import { personal } from '../../data/portfolio'

const socials = [
  {
    label: 'GitHub',
    href: personal.github,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const currentDate = new Date()
  const month = currentDate.toLocaleString('default', { month: 'short' })
  const year = String(currentDate.getFullYear()).slice(-2)
  const lastUpdated = `${month}'${year}`

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '4rem 2rem 3rem',
      textAlign: 'center',
    }}>
      {/* "You can find me on:" */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '2rem',
        }}
      >
        You can find me on:
      </motion.h3>

      {/* Social icon circles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '3rem', flexWrap: 'wrap' }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.12, y: -4 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 60, height: 60,
              borderRadius: '50%',
              background: 'rgba(108,99,255,0.18)',
              border: '1px solid rgba(108,99,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text)',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(108,99,255,0.35)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(108,99,255,0.18)'
              e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)'
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Divider */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border2), transparent)', maxWidth: 400, margin: '0 auto 2rem' }} />

      {/* Created by */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ fontSize: '0.9rem', color: 'var(--text2)', marginBottom: '0.5rem', fontWeight: 300 }}
      >
        Created with <span style={{ color: '#e05252' }}>♥</span> by{' '}
        <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Sowjanya N U</strong>
      </motion.p>

      {/* Last updated */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: true }}
        style={{ fontSize: '0.85rem', color: 'var(--text2)', marginBottom: '0.5rem', fontWeight: 300 }}
      >
        Last updated: <strong style={{ color: 'var(--text)', fontWeight: 500 }}>{lastUpdated}</strong>
      </motion.p>

      {/* Built with */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ fontSize: '0.78rem', color: 'var(--text3)', marginTop: '0.75rem' }}
      >
       “Stay curious. Keep building.”
      </motion.p>
    </footer>
  )
}