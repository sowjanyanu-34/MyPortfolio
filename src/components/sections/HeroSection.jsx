import { motion } from 'framer-motion'
import { personal } from '../../data/portfolio'

export default function HeroSection() {
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,7rem) 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(108,99,255,0.13) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 20% 70%, rgba(34,211,160,0.07) 0%, transparent 50%)
        `,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.025,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Orbs */}
      <motion.div animate={{ y: [0, -28, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '-120px', right: '-80px', width: 420, height: 420, borderRadius: '50%', background: 'var(--accent)', filter: 'blur(110px)', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} />
      <motion.div animate={{ y: [0, 22, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ position: 'absolute', bottom: '80px', left: '-80px', width: 320, height: 320, borderRadius: '50%', background: 'var(--green)', filter: 'blur(90px)', opacity: 0.07, zIndex: 0, pointerEvents: 'none' }} />

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="visible"
        style={{ position: 'relative', zIndex: 1, maxWidth: 750 }}>

        {/* Greeting line — like "Bonjour (French); I am" */}
        <motion.p variants={item} style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 300,
          color: 'var(--text2)',
          marginBottom: '0.6rem',
          letterSpacing: '0.01em',
        }}>
          <span style={{ fontFamily: 'monospace', color: 'var(--accent2)', fontSize: '0.95em' }}>Hello();</span>
          {' '}I am
        </motion.p>

        {/* Name — medium size, not huge */}
        <motion.h1 variants={item} style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          marginBottom: '0.5rem',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Sowjanya 
            
          </span>
        </motion.h1>

        {/* Tagline — large impactful text */}
        <motion.h2 variants={item} style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginBottom: '1.75rem',
        }}>
          Building AI &amp; Full‑Stack<br />
          
        </motion.h2>

        {/* Sub description */}
        <motion.p variants={item} style={{
          fontSize: '1.05rem',
          color: 'var(--text2)',
          maxWidth: 500,
          lineHeight: 1.75,
          marginBottom: '2.5rem',
          fontWeight: 300,
        }}>
          CS Student crafting full-stack apps and AI-powered tools —
          solving real-world problems with clean, impactful code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{
              background: 'var(--accent)', color: 'white',
              borderRadius: 10, padding: '0.85rem 2rem',
              fontSize: '0.95rem', fontWeight: 500,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            View Projects ↗
          </motion.a>
          <motion.a
            href="#about"
            onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: 'var(--text)',
              border: '1px solid var(--border2)', borderRadius: 10,
              padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 400,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            About Me ↓
          </motion.a>
          <motion.a
            href={personal.resumeUrl}
            target="_blank" rel="noreferrer"
            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: 'var(--accent2)',
              border: '1px solid rgba(167,139,250,0.4)', borderRadius: 10,
              padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 400,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            Resume ↗
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {[['6', 'Projects Built'], ['5+', 'Technologies'], ['∞', 'Problems to Solve']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 700, color: 'var(--text)' }}>{num}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}