'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Zap } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = (e: React.MouseEvent) => {
    // Create spark effect
    const rect = e.currentTarget.getBoundingClientRect()
    const newSparks = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }))
    setSparks(newSparks)
    setTimeout(() => setSparks([]), 1000)

    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-visible"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Circuit sparks */}
      <AnimatePresence>
        {sparks.map((spark, index) => (
          <motion.div
            key={spark.id}
            initial={{
              position: 'fixed',
              left: spark.x,
              top: spark.y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.cos((index / 6) * Math.PI * 2) * 50,
              y: Math.sin((index / 6) * Math.PI * 2) * 50,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="pointer-events-none z-50"
          >
            <Zap className="w-4 h-4 text-primary" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
