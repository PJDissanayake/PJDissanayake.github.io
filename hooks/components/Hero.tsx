'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleSystem from './ParticleSystem'
import CircuitBoard from './CircuitBoard'

const skills = ['Verilog', 'PCB Design', 'RF Engineering', 'FPGA', 'Analog Design', 'KiCad', 'Altium', 'MATLAB']

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay">
      <CircuitBoard />
      <ParticleSystem />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            ref={nameRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
            style={{
              perspective: '1000px',
            }}
          >
            <motion.h1
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              Alex Rivera
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl text-muted-foreground mb-8 font-mono"
          >
            Designing Tomorrow&apos;s Circuits, Today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="px-4 py-2 glass rounded-full text-sm font-mono border border-primary/30 hover:border-primary hover:glow transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-mono text-sm">Explore More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
