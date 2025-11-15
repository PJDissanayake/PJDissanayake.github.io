'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, FileText, Award, ExternalLink } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'

const publications = [
  {
    type: 'Journal',
    title: 'Novel Phase-Locked Loop Topology for Low-Phase-Noise Frequency Synthesis in 77GHz Automotive Radar',
    authors: 'A. Rivera, J. Smith, M. Chen',
    journal: 'IEEE Transactions on Microwave Theory and Techniques',
    year: '2023',
    doi: '10.1109/TMTT.2023.12345',
    citations: 47,
    abstract: 'This paper presents a novel fractional-N PLL architecture specifically optimized for automotive radar applications. The proposed design achieves superior phase noise performance while maintaining low power consumption and small die area. Measurement results demonstrate -110dBc/Hz phase noise at 1MHz offset with only 35mW power consumption.',
  },
  {
    type: 'Conference',
    title: 'Power Optimization Techniques for Sub-GHz IoT Transceivers',
    authors: 'A. Rivera, L. Park',
    journal: 'IEEE International Solid-State Circuits Conference (ISSCC)',
    year: '2022',
    doi: '10.1109/ISSCC.2022.98765',
    citations: 89,
    abstract: 'We present a comprehensive analysis of power optimization techniques for battery-powered IoT devices. The proposed methodology combines duty cycling, adaptive voltage scaling, and intelligent power mode transitions to achieve >10 years battery life from a single coin cell while maintaining reliable wireless connectivity.',
  },
  {
    type: 'Journal',
    title: 'High-Linearity RF Front-End Design for Interference-Robust Wireless Communication',
    authors: 'A. Rivera, K. Johnson, S. Lee, R. Patel',
    journal: 'IEEE Journal of Solid-State Circuits',
    year: '2021',
    doi: '10.1109/JSSC.2021.54321',
    citations: 134,
    abstract: 'This work addresses the challenge of maintaining linearity in crowded RF spectrum environments. A novel feedback linearization technique is introduced that improves IIP3 by 15dB compared to conventional approaches while adding minimal power overhead. The design is validated in a production WiFi transceiver.',
  },
]

const patents = [
  {
    title: 'Adaptive Impedance Matching Network for Multi-Band RF Transceivers',
    number: 'US Patent Application 17/123,456',
    status: 'Pending',
    year: '2023',
    description: 'Describes an intelligent impedance matching system that automatically adjusts to optimize power transfer across multiple frequency bands without requiring manual tuning or recalibration.',
  },
  {
    title: 'Low-Power Wake-Up Receiver Architecture for IoT Devices',
    number: 'US Patent Application 17/234,567',
    status: 'Pending',
    year: '2023',
    description: 'Novel wake-up receiver topology that operates in sub-microamp power regime while maintaining high sensitivity and selectivity, enabling always-on wireless connectivity for battery-powered devices.',
  },
]

export default function Publications() {
  const [expandedPub, setExpandedPub] = useState<number | null>(null)
  const [expandedPatent, setExpandedPatent] = useState<number | null>(null)

  return (
    <section id="publications" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Publications & <span className="text-primary">Patents</span>
        </motion.h2>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            Research Publications
          </h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 text-xs font-mono bg-primary/20 text-primary rounded border border-primary/30">
                          {pub.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{pub.year}</span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {pub.citations} citations
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm text-primary italic">{pub.journal}</p>

                      {expandedPub === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-border"
                        >
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {pub.abstract}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View on IEEE Xplore
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                    <button
                      onClick={() => setExpandedPub(expandedPub === index ? null : index)}
                      className="text-primary hover:scale-110 transition-transform"
                      aria-label={expandedPub === index ? 'Collapse' : 'Expand'}
                    >
                      {expandedPub === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patents */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            Patents
          </h3>
          <div className="space-y-4">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 text-xs font-mono bg-chart-2/20 text-chart-2 rounded border border-chart-2/30">
                          {patent.status}
                        </span>
                        <span className="text-sm text-muted-foreground">{patent.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{patent.title}</h4>
                      <p className="text-sm text-muted-foreground font-mono mb-2">{patent.number}</p>

                      {expandedPatent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-border"
                        >
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {patent.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <button
                      onClick={() => setExpandedPatent(expandedPatent === index ? null : index)}
                      className="text-primary hover:scale-110 transition-transform"
                      aria-label={expandedPatent === index ? 'Collapse' : 'Expand'}
                    >
                      {expandedPatent === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
