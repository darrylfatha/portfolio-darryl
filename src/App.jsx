import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { useReveal } from './hooks'
import { profile } from './data/cv'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-ink-soft">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
