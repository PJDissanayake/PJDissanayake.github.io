'use client'

import { motion } from 'framer-motion'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { Card } from './ui/card'

const radarData = [
  { category: 'Analog Design', value: 95 },
  { category: 'Digital Design', value: 88 },
  { category: 'Embedded Systems', value: 90 },
  { category: 'RF Engineering', value: 92 },
  { category: 'Power Electronics', value: 85 },
  { category: 'PCB Layout', value: 93 },
]

const tools = [
  { name: 'Altium Designer', proficiency: 92 },
  { name: 'MATLAB/Simulink', proficiency: 88 },
  { name: 'LTSpice', proficiency: 90 },
  { name: 'Cadence Virtuoso', proficiency: 85 },
  { name: 'KiCad', proficiency: 87 },
  { name: 'ADS (Keysight)', proficiency: 89 },
  { name: 'Python', proficiency: 84 },
  { name: 'Verilog/VHDL', proficiency: 86 },
]

const CircularProgress = ({ value, label }: { value: number; label: string }) => {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-secondary"
          />
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-primary transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold font-mono">{value}%</span>
        </div>
      </div>
      <span className="text-sm text-center font-mono">{label}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-center">Expertise Areas</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(0, 212, 255, 0.2)" />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="value"
                    stroke="rgb(0, 212, 255)"
                    fill="rgb(0, 212, 255)"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Tools Progress Rings */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-center">Tools & Software</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CircularProgress value={tool.proficiency} label={tool.name} />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="glass p-6">
            <h3 className="text-lg font-bold mb-4 text-primary">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C/C++', 'Verilog', 'VHDL', 'MATLAB', 'JavaScript', 'Assembly'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-mono bg-secondary rounded-full border border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <h3 className="text-lg font-bold mb-4 text-primary">Protocols & Standards</h3>
            <div className="flex flex-wrap gap-2">
              {['I2C', 'SPI', 'UART', 'CAN', 'Ethernet', 'USB', 'Bluetooth', 'WiFi', 'LoRa'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-mono bg-secondary rounded-full border border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <Card className="glass p-6">
            <h3 className="text-lg font-bold mb-4 text-primary">Certifications</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Professional Engineer (PE)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>IPC-A-610 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Six Sigma Green Belt</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>EMC Design Specialist</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
