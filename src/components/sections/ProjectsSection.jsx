import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { projects } from '../../data/portfolio'

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollAnimation(0.15)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, var(--accent), var(--green))',
          transformOrigin: 'left',
        }}
      />
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: project.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.7rem', // increased from 1.5rem
          marginBottom: '1.25rem',
          flexShrink: 0,
        }}
      >
        {project.icon}
      </div>
      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '1.25rem', // increased from 1.1rem
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'var(--text)',
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: '1rem', // increased from 0.875rem
          color: 'var(--text2)',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
          fontWeight: 300,
          flexGrow: 1,
        }}
      >
        {project.desc}
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem', // slightly increased spacing
          flexWrap: 'wrap',
          marginBottom: '1.25rem',
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: '0.8rem', // increased from 0.7rem
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 100,
              padding: '0.25rem 0.7rem',
              color: 'var(--text2)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          style={{
            fontSize: '0.85rem', // increased from 0.8rem
            color: 'var(--text2)',
            textDecoration: 'none',
            padding: '0.45rem 0.8rem',
            border: '1px solid var(--border2)',
            borderRadius: 8,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text2)'
            e.currentTarget.style.borderColor = 'var(--border2)'
          }}
        >
          ↗ GitHub
        </motion.a>
        {project.demo && project.demo !== '#' && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            style={{
              fontSize: '0.85rem', // increased from 0.8rem
              color: 'var(--text2)',
              textDecoration: 'none',
              padding: '0.45rem 0.8rem',
              border: '1px solid var(--border2)',
              borderRadius: 8,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--green)'
              e.currentTarget.style.borderColor = 'var(--green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text2)'
              e.currentTarget.style.borderColor = 'var(--border2)'
            }}
          >
            🔗 Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.85rem', // increased from 0.75rem
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          Work
        </span>
        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2.2rem,5vw,3.7rem)', // slightly larger
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Projects{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Lab
          </span>
        </h2>
        <p
          style={{
            fontSize: '1.05rem', // increased from 1rem
            color: 'var(--text2)',
            maxWidth: 500,
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: '3.5rem',
          }}
        >
          Real-world problems I've tackled with code. {projects.length} projects and counting.
        </p>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}