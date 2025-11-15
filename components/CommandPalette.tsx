'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const sections = [
  { label: 'Home', href: '#hero', description: 'Return to top' },
  { label: 'About', href: '#about', description: 'Learn more about me' },
  { label: 'Experience', href: '#experience', description: 'Professional history' },
  { label: 'Projects', href: '#projects', description: 'Featured work' },
  { label: 'Skills', href: '#skills', description: 'Technical expertise' },
  { label: 'Publications', href: '#publications', description: 'Research & patents' },
  { label: 'Contact', href: '#contact', description: 'Get in touch' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredSections = sections.filter(
    (section) =>
      section.label.toLowerCase().includes(search.toLowerCase()) ||
      section.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleNavigate = (href: string) => {
    setIsOpen(false)
    setSearch('')
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-background/80 backdrop-blur-lg pt-24"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-lg w-full max-w-2xl border border-primary/30 overflow-hidden"
          >
            <div className="p-4 border-b border-border flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sections..."
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredSections.map((section, index) => (
                <button
                  key={section.href}
                  onClick={() => handleNavigate(section.href)}
                  className="w-full p-4 text-left hover:bg-secondary/50 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {section.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {section.description}
                    </div>
                  </div>
                  <kbd className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border">
                    {index + 1}
                  </kbd>
                </button>
              ))}
            </div>
            <div className="p-3 border-t border-border bg-secondary/20 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 font-mono bg-secondary rounded border border-border">
                    ↑ ↓
                  </kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 font-mono bg-secondary rounded border border-border">
                    Enter
                  </kbd>
                  Select
                </span>
              </div>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 font-mono bg-secondary rounded border border-border">
                  Esc
                </kbd>
                Close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
