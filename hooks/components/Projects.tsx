'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'

const projects = [
  {
    title: '77GHz Automotive Radar',
    description: 'High-resolution FMCW radar system for autonomous vehicle applications with advanced signal processing algorithms.',
    longDescription: 'Designed and implemented a complete 77GHz FMCW radar front-end featuring custom MMIC-based transmit/receive chains, precision PLL frequency synthesis, and advanced digital signal processing. Achieved 0.1m range resolution and 0.1m/s velocity resolution with 200m detection range. The system integrates seamlessly with vehicle ADAS platforms and meets AECQ-100 automotive reliability standards.',
    tags: ['RF Design', 'Altium', 'ADS', 'DSP', 'Automotive'],
    image: '/automotive-radar-system-77ghz.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      '/radar-pcb-layout.jpg',
      '/radar-antenna-array.jpg',
      '/radar-signal-processing.jpg',
    ],
  },
  {
    title: 'Low-Power IoT Transceiver',
    description: 'Sub-GHz wireless transceiver module optimized for battery-powered IoT applications with advanced power management.',
    longDescription: 'Developed a highly integrated sub-GHz transceiver achieving industry-leading power efficiency with <5μA sleep current and -120dBm sensitivity. The design incorporates intelligent power management, adaptive data rate selection, and robust error correction. Supports multiple protocols including LoRa, FSK, and GFSK modulation schemes. Successfully deployed in over 50,000 sensor nodes worldwide.',
    tags: ['KiCad', 'RF', 'ARM Cortex-M', 'Power Optimization', 'C/C++'],
    image: '/iot-wireless-module.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      '/iot-transceiver-pcb.jpg',
      '/antenna-design.jpg',
      '/power-consumption-graph.jpg',
    ],
  },
  {
    title: 'Precision SAR ADC',
    description: '16-bit successive approximation ADC achieving 95dB SNR for medical and instrumentation applications.',
    longDescription: 'Custom analog IC design in 180nm CMOS featuring novel charge redistribution DAC topology and dynamic comparator architecture. Achieves 95dB SNR at 1MSPS with 2.5V supply and 15mW power consumption. Integrated calibration engine compensates for process variations and achieves ±0.5 LSB INL/DNL across all codes. Successfully used in portable ECG monitors and precision data acquisition systems.',
    tags: ['Cadence Virtuoso', 'HSPICE', 'CMOS', 'Analog IC', 'Layout'],
    image: '/analog-ic-chip-layout.jpg',
    github: 'https://github.com',
    images: [
      '/adc-block-diagram.jpg',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'FPGA-Based SDR Platform',
    description: 'Software-defined radio platform using Xilinx FPGA for flexible wireless protocol implementation and testing.',
    longDescription: 'Complete SDR platform featuring Xilinx Zynq-7000 SoC with custom RF front-end covering 70MHz-6GHz. Implements real-time digital signal processing for multiple wireless standards including WiFi, Bluetooth, and Zigbee. High-speed ADC/DAC interfaces support 100MHz bandwidth. Includes comprehensive Python API for rapid prototyping and protocol development.',
    tags: ['FPGA', 'Verilog', 'Xilinx', 'DSP', 'Python', 'RF'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'Ultra-Low Noise Amplifier',
    description: 'Precision low-noise amplifier for medical instrumentation with <1nV/√Hz noise performance.',
    longDescription: 'Designed discrete ultra-low noise amplifier using carefully selected BJTs in cascode configuration. Achieves noise figure of 0.8nV/√Hz at 1kHz with 120dB gain and excellent CMRR >100dB. Features programmable gain stages, integrated EMI filtering, and right-leg drive for patient safety. Used in premium ECG and EEG acquisition systems meeting IEC 60601 medical safety standards.',
    tags: ['Analog Design', 'LTSpice', 'Medical', 'Low Noise', 'PCB'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'Wireless Power Transfer System',
    description: 'High-efficiency inductive power transfer system for charging wearable devices and medical implants.',
    longDescription: 'Developed resonant inductive coupling system achieving 85% efficiency at 10mm distance. Features adaptive frequency tuning to maintain optimal operation across varying coupling coefficients. Integrated foreign object detection ensures safety. Class-E amplifier topology delivers 5W with minimal EMI. Complies with Qi wireless charging standard and medical device regulations.',
    tags: ['Power Electronics', 'Altium', 'MATLAB', 'Wireless', 'Magnetics'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              style={{ perspective: '1000px' }}
            >
              <Card
                className="glass overflow-hidden cursor-pointer group h-full border-2 border-transparent hover:border-primary hover:glow transition-all"
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono bg-secondary/50 rounded border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/30"
            >
              <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b border-border flex justify-between items-start z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                {/* Image Carousel */}
                {selectedProject.images && (
                  <div className="space-y-4">
                    <div className="relative h-96 rounded-lg overflow-hidden border border-primary/30">
                      <Image
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {selectedProject.images.length > 1 && (
                      <div className="flex justify-center gap-2">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === currentImageIndex
                                ? 'bg-primary w-8'
                                : 'bg-muted-foreground/30'
                            }`}
                            aria-label={`View image ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="flex-1">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="flex-1">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
