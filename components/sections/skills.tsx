import { Code2, Cpu, Radio, Wrench, Terminal } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Programming",
    tags: ["C++", "C", "Python"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    tags: ["STM32 Bare-metal", "Raspberry Pi", "Embedded Linux", "Buildroot"],
  },
  {
    icon: Radio,
    title: "Protocols",
    tags: ["XCP Protocol", "CAN", "SPI", "I2C", "Ethernet"],
  },
  {
    icon: Wrench,
    title: "Hardware",
    tags: ["PCB Design", "Altium", "Eagle", "Soldering"],
  },
  {
    icon: Terminal,
    title: "Systems",
    tags: ["Git", "Linux Kernel", "Device Drivers"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-8 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-5xl mb-4 flex justify-center">
                <skill.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-primary/15 border border-primary/40 rounded-full text-sm text-muted-foreground"
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
