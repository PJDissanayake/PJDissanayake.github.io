'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EasterEgg() {
  const [showTrace, setShowTrace] = useState(false)

  useEffect(() => {
    let sequence = ''
    const targetSequence = 'debug'

    const handleKeyPress = (e: KeyboardEvent) => {
      sequence += e.key.toLowerCase()
      if (sequence.length > targetSequence.length) {
        sequence = sequence.slice(-targetSequence.length)
      }
      if (sequence === targetSequence) {
        console.log('[v0] 🎉 Easter egg activated! Enjoy the circuit trace animation.')
        setShowTrace(true)
        setTimeout(() => setShowTrace(false), 5000)
        sequence = ''
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  return (
    <AnimatePresence>
      {showTrace && (
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 w-full h-full pointer-events-none z-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 0 50 L 1920 50 M 960 50 L 960 1080"
            stroke="#00D4FF"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            filter="url(#glow)"
          />
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </motion.svg>
      )}
    </AnimatePresence>
  )
}
