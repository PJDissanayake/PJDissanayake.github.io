import { GraduationCap, Terminal, Zap } from "lucide-react"

const certifications = [
  {
    icon: GraduationCap,
    title: "Fundamentals of Digital System Design",
    issuer: "ENTC – University of Moratuwa",
  },
  {
    icon: Terminal,
    title: "Beginner's Guide to Linux Kernel Development",
    issuer: "Linux Foundation",
  },
  {
    icon: Zap,
    title: "Electronic Design Automation",
    issuer: "IEEE Young Professionals",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-8 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-5xl mb-4 flex justify-center">
                <cert.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
