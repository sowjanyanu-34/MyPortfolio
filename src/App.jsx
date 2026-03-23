import { useTheme } from './hooks/useScrollAnimation'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'
import './styles/globals.css'

const Divider = () => (
  <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--border2), transparent)', maxWidth: 1200, margin: '0 auto' }} />
)

export default function App() {
  const [dark, toggleTheme] = useTheme()
  return (
    <>
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
