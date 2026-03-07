"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavLink {
  href: string
  label: string
}

interface NavigationProps {
  links: NavLink[]
  showBackToHome?: boolean
}

export function Navigation({ links, showBackToHome = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/98 shadow-lg shadow-primary/10"
            : "bg-background/95"
        } border-primary/10 backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-primary drop-shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.5)]"
          >
            PD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {showBackToHome && (
              <Link
                href="/"
                className="text-muted-foreground font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            )}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] right-0 w-64 h-[calc(100vh-72px)] bg-card/98 backdrop-blur-xl z-40 p-8 transition-transform duration-300 border-l border-primary/10 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {showBackToHome && (
          <Link
            href="/"
            className="block text-muted-foreground py-4 font-medium border-b border-border/50 transition-all duration-300 hover:text-primary hover:pl-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
        )}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-muted-foreground py-4 font-medium border-b border-border/50 transition-all duration-300 hover:text-primary hover:pl-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
