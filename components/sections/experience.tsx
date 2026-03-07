const experiences = [
  {
    date: "June 2025 – Present",
    title: "Associate Electronics Engineer",
    company: "Vega Innovations",
    description:
      "Leading firmware development for EV fast-charging systems. Implementing XCP protocol for real-time calibration and diagnostics. Developing C++ applications for microprocessors.",
  },
  {
    date: "Dec 2024 – Mar 2025",
    title: "Electronic Engineering Intern",
    company: "Vega Innovations",
    description:
      "Worked on embedded Linux systems for EV charging infrastructure. Contributed to PCB design and hardware testing. Developed Python tools for automated testing and validation.",
  },
  {
    date: "Oct 2023 – Jun 2024",
    title: "Electronic Engineering Intern",
    company: "Vega Innovations",
    description:
      "Assisted in firmware development and hardware troubleshooting. Learned embedded systems design principles and real-time operating systems. Developed bare-metal C applications for STM32 microcontrollers.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Experience
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${exp.date}`}
              className={`relative mb-12 md:w-[calc(50%-2rem)] ${
                index % 2 === 0
                  ? "md:ml-0 md:mr-auto md:pr-12"
                  : "md:ml-auto md:mr-0 md:pl-12"
              }`}
            >
              {/* Timeline marker */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary border-3 border-background rounded-full shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.5)] hidden md:block ${
                  index % 2 === 0 ? "right-[-2rem]" : "left-[-2rem]"
                }`}
              />

              <div className="glass-card p-6">
                <span className="text-primary text-sm font-semibold">
                  {exp.date}
                </span>
                <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                <h4 className="text-accent mb-4">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
