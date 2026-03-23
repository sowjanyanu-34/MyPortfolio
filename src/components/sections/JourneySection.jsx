import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { timeline } from '../../data/portfolio'

function TimelineItem({ item, index }) {
  const [ref, visible] = useScrollAnimation(0.2)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', marginBottom: '3rem', paddingLeft: '2.5rem' }}
    >
      <span style={{
        position: 'absolute', left: '-0.65rem', top: '0.4rem',
        width: 10, height: 10, borderRadius: '50%',
        background: item.milestone ? 'var(--green)' : 'var(--accent)',
        boxShadow: `0 0 0 4px ${item.milestone ? 'rgba(34,211,160,0.2)' : 'rgba(108,99,255,0.2)'}`,
        display: 'block',
      }} />
      <div style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
        {item.date}
      </div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.3rem' }}>
        {item.title}
      </div>
      <div style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '0.6rem', fontWeight: 300 }}>
        {item.desc}
      </div>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.7rem',
            background: item.milestone ? 'rgba(108,99,255,0.1)' : 'var(--surface)',
            border: `1px solid ${item.milestone ? 'rgba(108,99,255,0.3)' : 'var(--border)'}`,
            borderRadius: 100, padding: '0.2rem 0.6rem',
            color: item.milestone ? 'var(--accent2)' : 'var(--text3)',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function JourneySection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  return (
    <section id="journey" className="section-container">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '1rem' }}>
          Learning Path
        </span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
          My <span style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Journey</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300, marginBottom: '3.5rem' }}>
          Every milestone that shaped who I am as a developer.
        </p>
      </motion.div>
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        <div style={{
          position: 'absolute', left: 4, top: 0, bottom: 0, width: 1,
          background: 'linear-gradient(to bottom, transparent, var(--accent), var(--green), transparent)',
        }} />
        {timeline.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
