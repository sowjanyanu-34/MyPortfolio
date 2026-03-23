import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { problems } from '../../data/portfolio'

function ProblemCard({ item, index }) {
  const [ref, visible] = useScrollAnimation(0.15)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem' }}
    >
      <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>{item.title}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
    </motion.div>
  )
}

export default function ProblemsSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  return (
    <section id="problems" className="section-container">
      <motion.div ref={headerRef} initial={{ opacity: 0, y: 20 }} animate={headerVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '1rem' }}>Value</span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
          Problems I <span style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Solve</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300, marginBottom: '3.5rem' }}>Not just a list of skills — here's the real impact I deliver.</p>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {problems.map((item, i) => <ProblemCard key={item.title} item={item} index={i} />)}
      </div>
    </section>
  )
}
