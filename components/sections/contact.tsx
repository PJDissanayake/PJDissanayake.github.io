"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "dkpjdissanayaka@gmail.com",
    href: "mailto:dkpjdissanayaka@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 71 587 0607",
    href: "tel:+94715870607",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Sri Lanka",
    href: null,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could be integrated with a service like Formspree
    const mailtoLink = `mailto:dkpjdissanayaka@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Let&apos;s build something amazing together
        </p>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="glass-card p-6 flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-primary transition-colors hover:text-accent"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.3)] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.3)] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.3)] transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.3)] transition-all duration-300 resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.7)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
