import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ThemeProvider from '@/components/ThemeProvider'
import CommandPalette from '@/components/CommandPalette'
import SmoothScroll from '@/components/SmoothScroll'
import EasterEgg from '@/components/EasterEgg'

export default function Home() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Navigation />
        <CommandPalette />
        <EasterEgg />
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Publications />
          <Contact />
        </main>
      </SmoothScroll>
    </ThemeProvider>
  )
}
