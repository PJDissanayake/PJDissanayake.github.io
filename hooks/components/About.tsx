'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDownload = () => {
    setIsDownloading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          // Trigger actual download
          const link = document.createElement('a')
          link.href = '/resume.pdf'
          link.download = 'Alex_Rivera_Resume.pdf'
          link.click()
          return 0
        }
        return prev + 10
      })
    }, 100)
  }

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 glass rounded-2xl overflow-hidden">
                <Image
                  src="/professional-electronics-engineer-portrait.jpg"
                  alt="Alex Rivera"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:hue-rotate-15"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 mix-blend-overlay"
                />
              </div>
              <div className="absolute -inset-2 border-2 border-primary/30 rounded-2xl group-hover:border-primary transition-colors" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate Electronics Engineer with over 8 years of experience designing cutting-edge 
                circuits and systems that power tomorrow&apos;s technology. My expertise spans from high-frequency 
                RF design to precision analog circuits, with a particular focus on automotive radar systems and 
                wireless communication devices.
              </p>
              <p>
                Throughout my career, I&apos;ve led teams in developing innovative solutions that bridge the gap 
                between theoretical concepts and practical, market-ready products. My work on 77GHz radar front-ends 
                has contributed to safer autonomous vehicle systems, while my PCB optimization techniques have 
                reduced manufacturing costs by up to 35% across multiple product lines.
              </p>
              <p>
                I hold two pending patents in RF circuit design and have published research in leading IEEE journals. 
                When I&apos;m not designing circuits, you&apos;ll find me mentoring junior engineers, contributing to 
                open-source hardware projects, or experimenting with novel FPGA architectures in my home lab.
              </p>
              <p>
                My approach combines rigorous simulation and analysis with hands-on prototyping, ensuring that every 
                design meets both performance specifications and real-world manufacturing constraints. I&apos;m always 
                excited to tackle complex challenges that push the boundaries of what&apos;s possible in electronics.
              </p>
            </div>

            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="mt-8 group relative overflow-hidden"
              size="lg"
            >
              {isDownloading ? (
                <>
                  <div className="absolute inset-0 bg-primary/20">
                    <motion.div
                      className="h-full bg-primary/40"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <span className="relative flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Downloading... {progress}%
                  </span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
