"use client"

import { useState } from "react"
import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "XCP-min Embedded Memory Access Library",
    description:
      "Lightweight implementation of the XCP (Universal Measurement and Calibration Protocol) for embedded systems, specifically designed for STM32 microcontrollers. It supports basic memory access operations over SPI.",
    tags: ["C", "STM32", "XCP", "SPI"],
    github: "https://github.com/PJDissanayake/XCP_min",
    category: "embedded",
  },
  {
    title: "EEPROM Wear Leveling Library",
    description:
      "Wear leveling functionality for EEPROM, specifically designed for the M95M02 EEPROMs. Wear leveling helps to extend the lifespan of EEPROM by distributing write and erase cycles more evenly across memory.",
    tags: ["C", "EEPROM", "SPI"],
    github: "https://github.com/PJDissanayake/EEPROM_Wear_Leveling",
    category: "embedded",
  },
  {
    title: "Multifrequency-LIFI-Telecommunication-System",
    description:
      "The primary objective was increase the data rate and ensure the highest level of data security. To achieve this, the project incorporates a special encoding and decoding method specifically designed to enhance data privacy and prevent unauthorized access.",
    tags: ["C++", "Raspberry Pi", "I2C", "Arduino"],
    github: "https://github.com/PJDissanayake/Multifrequency-LIFI-Telecommunication-System",
    category: "embedded",
  },
  {
    title: "Automated-Range-Finder-Car",
    description:
      "Robot car capable of calculating the altitude of a specific room or building to a significant extent. Includes an automated scale measuring feature, further streamlining the measurement process. Furthermore, it can be controlled remotely by a single person, providing convenience and flexibility.",
    tags: ["C++", "I2C", "SPI"],
    github: "https://github.com/PJDissanayake/EEPROM_Wear_Leveling",
    category: "embedded",
  },
  {
    title: "Debouncing Push Buttons",
    description:
      "Verilog design for a push-button circuit that effectively eliminates the bouncing effect. Solution generates clean step signals on both button press and release, ensuring reliable signal generation in the presence of noise.",
    tags: ["Verilog", "FPGA", "Electronics"],
    github: "https://github.com/PJDissanayake/Debouncing_push_buttons",
    category: "FPGA",
  },
  {
    title: "Simple 4 to 1 Multiplexer - Verilog",
    description: "A beginner-friendly Verilog implementation of a 4-to-1 multiplexer.",
    tags: ["Verilog", "FPGA", "Electronics"],
    github: "https://github.com/PJDissanayake/4-to-1-Multiplexer",
    category: "FPGA",
  },
]

const filters = [
  { label: "All", value: "all" },
  { label: "Embedded", value: "embedded" },
  { label: "FPGA", value: "FPGA" },
  { label: "Tools", value: "tools" },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        {/* Filters */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground -translate-y-0.5"
                  : "bg-transparent border-2 border-primary/30 text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title} className="glass-card p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary flex-1 pr-4">
                  {project.title}
                </h3>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-all duration-300 hover:text-primary hover:scale-125"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-xs font-mono text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
