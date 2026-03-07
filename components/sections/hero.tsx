"use client"

import { Mail, Linkedin, Github, Youtube, Download } from "lucide-react"
import Link from "next/link"
import { ParticlesBackground } from "@/components/particles-background"

const socialLinks = [
  { href: "mailto:dkpjdissanayaka@gmail.com", icon: Mail, label: "Email" },
  { href: "https://www.linkedin.com/in/pathum-j-dissanayake/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/PJDissanayake", icon: Github, label: "GitHub" },
  { href: "https://www.youtube.com/@ElectrixLab", icon: Youtube, label: "YouTube" },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden"
    >
      {/* Particles background */}
      <ParticlesBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-4xl">
        <div className="inline-block px-4 py-2 mb-8 bg-primary/15 border border-primary rounded-full text-primary text-sm font-medium animate-pulse-glow">
          Available for opportunities
        </div>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 gradient-text animate-glow-text leading-tight">
          PATHUM DISSANAYAKE
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2">
          Final-year Electrical & Electronic Engineering Undergraduate
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground mb-4">
          Associate Electronics Engineer @{" "}
          <span className="text-primary font-semibold">Vega Innovations</span>
        </p>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-10 italic leading-relaxed">
          &quot;Specializes in building optimized embedded systems that support
          next-generation Automotive Electronics and Charging Infrastructure&quot;
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Link
            href="/Pathum_Dissanayake.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.7)]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex gap-6 justify-center">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/15 border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-[0_10px_30px_oklch(0.75_0.18_195_/_0.5)]"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm">
          <span>Scroll Down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent animate-scroll" />
        </div>
      </div>
    </section>
  )
}
