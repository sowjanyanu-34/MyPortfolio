import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) }
    }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('pk-theme')
    return stored ? stored === 'dark' : true
  })
  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem('pk-theme', dark ? 'dark' : 'light')
  }, [dark])
  return [dark, () => setDark(p => !p)]
}
