import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { skillGroups } from '../../data/portfolio'

// ✅ Simple Skill Tag (no percentage, no bar)
function SkillItem({ name }) {
  return (
    <div
      style={{
        padding: '0.5rem 0.9rem',
        borderRadius: 8,
        background: 'var(--bg3)',
        fontSize: '0.85rem',
        color: 'var(--text)',
        border: '1px solid var(--border2)'
      }}
    >
      {name}
    </div>
  )
}

function SkillGroup({ group, index }) {
  const [ref, visible] = useScrollAnimation(0.25)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        padding: '1.75rem'
      }}
    >
      <div
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--text3)',
          marginBottom: '1.25rem'
        }}
      >
        {group.label}
      </div>

      {/* ✅ Skills as tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {group.skills.map(s => (
          <SkillItem key={s.name} name={s.name} />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const [ref, visible] = useScrollAnimation(0.2)

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600,
            marginBottom: '1rem'
          }}
        >
          Expertise
        </span>

        <h2
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(2rem,5vw,3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1rem'
          }}
        >
          Skills{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Visualization
          </span>
        </h2>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text2)',
            maxWidth: 500,
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: '3.5rem'
          }}
        >
          Technologies I've worked with.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {skillGroups.map((g, i) => (
          <SkillGroup key={g.label} group={g} index={i} />
        ))}
      </div>
    </section>
  )
}