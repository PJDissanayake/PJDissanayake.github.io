'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react'
import { Card } from './ui/card'
import Image from 'next/image'

const experiences = [
  {
    title: 'Senior RF Design Engineer',
    company: 'NexGen Automotive Systems',
    period: '2021 - Present',
    description: 'Leading the design and development of next-generation automotive radar systems for autonomous vehicles.',
    achievements: [
      'Designed 77GHz radar front-end achieving 30% improved range resolution',
      'Reduced BOM cost by 35% through innovative PCB layout optimization',
      'Led team of 5 engineers in successful product launch, meeting all automotive grade requirements',
      'Filed 2 patents for novel RF circuit topologies',
    ],
    techStack: ['Altium Designer', 'ADS', 'CST Studio', 'MATLAB', 'Python'],
    image: '/automotive-radar-pcb.jpg',
  },
  {
    title: 'Electronics Design Engineer',
    company: 'Wireless Solutions Inc.',
    period: '2019 - 2021',
    description: 'Developed high-performance RF transceivers for IoT and industrial communication applications.',
    achievements: [
      'Designed sub-GHz transceiver achieving -120dBm sensitivity',
      'Optimized power consumption reducing standby current by 60%',
      'Implemented automated testing framework reducing validation time by 40%',
      'Mentored 3 junior engineers on RF design best practices',
    ],
    techStack: ['KiCad', 'LTSpice', 'Verilog', 'ARM Cortex-M', 'C/C++'],
    image: '/iot-wireless-transceiver.jpg',
  },
  {
    title: 'Analog IC Design Engineer',
    company: 'Silicon Innovations',
    period: '2017 - 2019',
    description: 'Focused on precision analog IC design for sensor interfaces and data acquisition systems.',
    achievements: [
      'Designed 16-bit SAR ADC achieving 95dB SNR',
      'Developed ultra-low noise amplifier for medical instrumentation',
      'Contributed to 3 successful tape-outs in 180nm CMOS process',
      'Published 2 papers in IEEE journals',
    ],
    techStack: ['Cadence Virtuoso', 'HSPICE', 'MATLAB', 'Verilog-A'],
    image: '/analog-ic-circuit-design.jpg',
  },
  {
    title: 'Junior Electronics Engineer',
    company: 'TechStart Labs',
    period: '2015 - 2017',
    description: 'Worked on diverse projects spanning embedded systems, PCB design, and test automation.',
    achievements: [
      'Designed mixed-signal PCBs for industrial control systems',
      'Developed Python-based automated test infrastructure',
      'Collaborated with firmware team on hardware-software integration',
      'Reduced product qualification time by 25%',
    ],
    techStack: ['Eagle CAD', 'Oscilloscope', 'Python', 'Arduino', 'LabVIEW'],
    image: '/industrial-pcb-design.jpg',
  },
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Professional <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10" />

                <Card className="glass p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                    </div>
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-primary hover:scale-110 transition-transform"
                      aria-label={expandedIndex === index ? 'Collapse' : 'Expand'}
                    >
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-primary/30">
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={exp.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-mono bg-secondary rounded-full border border-primary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
