import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkillsMarquee from '@/components/SkillsMarquee'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Education from '@/components/Education'

export default function Home() {
  return (
    <div className="font-display">
      <div className="min-h-screen flex flex-col">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div id="home" className="px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>

        <SkillsMarquee />

        <div className="px-4 sm:px-6 lg:px-8">
          <div id="about">
            <About />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
