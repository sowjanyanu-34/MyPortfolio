import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { personal } from '../../data/portfolio'

export default function ContactSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [formRef, formVisible] = useScrollAnimation(0.1)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!fields.name.trim()) e.name = 'Name is required'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Valid email required'
    if (!fields.message.trim() || fields.message.trim().length < 10) e.message = 'At least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // ── Formspree integration ──────────────────────────────────
  const handleSubmit = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/xaqpzvnz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
        }),
      })
      if (response.ok) {
        setSuccess(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Failed to send. Check your internet connection.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = field => ({
    background: 'var(--surface)', border: `1px solid ${errors[field] ? 'var(--coral)' : 'var(--border2)'}`,
    borderRadius: 10, padding: '0.85rem 1rem', color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'DM Sans, sans-serif', outline: 'none', width: '100%', transition: 'border-color 0.2s',
  })

  const socials = [
    { icon: '🐙', label: 'GitHub', sub: '@sowjanyanu', href: personal.github },
    { icon: '💼', label: 'LinkedIn', sub: 'Sowjanya N U', href: personal.linkedin },
    { icon: '✉', label: 'Email', sub: personal.email, href: `mailto:${personal.email}` },
  ]

  return (
    <section id="contact" className="section-container">
      <motion.div ref={headerRef} initial={{ opacity: 0, y: 20 }} animate={headerVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '1rem' }}>Let's Talk</span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '3rem' }}>
          Get In <span style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Touch</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>Open to collaborate 👋</h3>
          <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem' }}>Whether it's a project, internship, or just a tech conversation — I'd love to hear from you.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {socials.map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none', color: 'var(--text)', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <span style={{ fontSize: '1.1rem', width: 28, textAlign: 'center' }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{s.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{s.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div ref={formRef} initial={{ opacity: 0, y: 20 }} animate={formVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div key="form" exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>Name</label>
                  <input style={inputStyle('name')} placeholder="Your name" value={fields.name}
                    onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                    onFocus={e => { if (!errors.name) e.target.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { if (!errors.name) e.target.style.borderColor = 'var(--border2)' }} />
                  {errors.name && <span style={{ fontSize: '0.75rem', color: 'var(--coral)' }}>{errors.name}</span>}
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>Email</label>
                  <input type="email" style={inputStyle('email')} placeholder="you@example.com" value={fields.email}
                    onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => { if (!errors.email) e.target.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { if (!errors.email) e.target.style.borderColor = 'var(--border2)' }} />
                  {errors.email && <span style={{ fontSize: '0.75rem', color: 'var(--coral)' }}>{errors.email}</span>}
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>Message</label>
                  <textarea rows={5} style={{ ...inputStyle('message'), resize: 'vertical' }} placeholder="Tell me about your project or idea..." value={fields.message}
                    onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
                    onFocus={e => { if (!errors.message) e.target.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { if (!errors.message) e.target.style.borderColor = 'var(--border2)' }} />
                  {errors.message && <span style={{ fontSize: '0.75rem', color: 'var(--coral)' }}>{errors.message}</span>}
                </div>
                <motion.button onClick={handleSubmit} disabled={submitting} whileHover={!submitting ? { y: -2 } : {}} whileTap={!submitting ? { scale: 0.98 } : {}}
                  style={{ background: submitting ? 'var(--accent2)' : 'var(--accent)', color: 'white', border: 'none', borderRadius: 10, padding: '0.9rem', fontSize: '0.95rem', fontWeight: 500, cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: submitting ? 0.8 : 1 }}>
                  {submitting ? (<><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', border: '2px solid white', borderTopColor: 'transparent' }} />Sending...</>) : 'Send Message ↗'}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
                style={{ background: 'rgba(34,211,160,0.08)', border: '1px solid rgba(34,211,160,0.3)', borderRadius: 12, padding: '2.5rem', textAlign: 'center' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</motion.div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--green)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', fontWeight: 300 }}>I'll get back to you within 24 hours. Thanks for reaching out!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
