'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, CheckCircle, Copy } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = 'alex.rivera@email.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate circuit completion animation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always interested in discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <Card className="glass p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">{email}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="group"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 group-hover:text-primary" />
                  )}
                </Button>
              </div>
              <div className="h-px bg-border mb-4" />
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild className="hover:border-primary">
                  <a
                    href="https://linkedin.com/in/alexrivera"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:border-primary">
                  <a
                    href="https://github.com/alexrivera"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="glass p-6">
              <h4 className="font-bold mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-mono">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="font-mono">Within 24 hours</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    className="bg-secondary/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full relative overflow-hidden group"
                  size="lg"
                >
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>Circuit Completing...</>
                  ) : (
                    <>Send Message</>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center text-muted-foreground text-sm"
        >
          <p className="font-mono">
            © {new Date().getFullYear()} Alex Rivera. Designed & Built with{' '}
            <span className="text-primary">Next.js</span> and{' '}
            <span className="text-primary">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
