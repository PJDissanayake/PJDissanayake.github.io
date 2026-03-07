import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { TutorialsPreview } from "@/components/sections/tutorials-preview"
import { CertificationsSection } from "@/components/sections/certifications"
import { ContactSection } from "@/components/sections/contact"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "#contact", label: "Contact" },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation links={navLinks} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TutorialsPreview />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
