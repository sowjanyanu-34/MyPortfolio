import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { personal } from '../../data/portfolio'

/**
 * AboutSection
 * Two-column layout:
 *  Left  — heading + bio text + action buttons
 *  Right — floating profile photo card (like the reference design)
 *
 * TO ADD YOUR PHOTO:
 *   1. Copy your photo into the /public folder and name it  photo.jpg
 *   2. That's it — it will appear automatically.
 *   If you want a different filename, update personal.photo in portfolio.js
 */
export default function AboutSection() {
  const [ref, visible] = useScrollAnimation(0.15)

  return (
    <section id="about" className="section-container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* ── Left: Text ─────────────────────────────────────── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section heading */}
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--text)',
          }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '0.85em', fontWeight: 700 }}>&lt;</span>
            About Me
            <span style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '0.85em', fontWeight: 700 }}>/&gt;</span>
          </h2>

          {/* Divider line */}
          <div style={{
            width: '100%', height: 1, marginBottom: '1.75rem',
            background: 'linear-gradient(to right, var(--accent), transparent)',
          }} />

          {/* Bio */}
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text2)',
            lineHeight: 1.9,
            fontWeight: 300,
            marginBottom: '2.5rem',
            maxWidth: 560,
          }}>
            {personal.about}
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {/* LinkedIn */}
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                border: '1px solid var(--accent)',
                borderRadius: 10,
                color: 'var(--accent)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              Let's Connect!
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            {/* Resume */}
            <motion.a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'var(--accent)',
                borderRadius: 10,
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid transparent',
              }}
            >
              Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* ── Right: Photo Card ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {/* Floating glow behind card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(20px)',
              zIndex: 0,
            }} />

            {/* Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'relative', zIndex: 1,
                width: 280,
                background: 'linear-gradient(160deg, #1e1e2e 0%, #16161f 100%)',
                border: '1px solid rgba(108,99,255,0.3)',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(108,99,255,0.15)',
              }}
            >
              {/* Photo area */}
              <div style={{
                width: '100%',
                height: 300,
                background: 'linear-gradient(180deg, rgba(108,99,255,0.15) 0%, rgba(34,211,160,0.05) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Background subtle pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(rgba(108,99,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />

                {/* Actual photo — replace /photo.jpg with your image */}
                <img
                  src={personal.photo}
                  alt={personal.name}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    position: 'relative', zIndex: 1,
                  }}
                />

                {/* Fallback avatar shown if photo not found */}
                <div style={{
                  display: 'none',
                  position: 'absolute', inset: 0,
                  alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.75rem',
                  zIndex: 1,
                }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent), var(--green))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.5rem', fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'white',
                  }}>
                    SN
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '0 1rem' }}>
                    Add photo.jpg to /public folder
                  </p>
                </div>

                {/* Gradient overlay at bottom of photo */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
                  background: 'linear-gradient(to top, #16161f, transparent)',
                  zIndex: 2,
                }} />
              </div>

              {/* Card body */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                {/* Name & role */}
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                    {personal.name.split(' ')[0]}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(167,139,250,0.9)', fontWeight: 400 }}>
                    {personal.role}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '1rem' }} />

                {/* Footer row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {/* Avatar circle */}
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent), var(--green))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.65rem', fontWeight: 700, color: 'white',
                    }}>
                      SN
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>@sowjanyanu</div>
                      <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>CS Student</div>
                    </div>
                  </div>

                  {/* GitHub link */}
                  <motion.a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(108,99,255,0.2)',
                      border: '1px solid rgba(108,99,255,0.4)',
                      borderRadius: 8,
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.75rem',
                      color: 'var(--accent2)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
