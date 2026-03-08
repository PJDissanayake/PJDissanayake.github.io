"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  originalX: number
  originalY: number
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    const mouseRadius = 150

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000)
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current

      // Draw particles
      particles.forEach((particle, i) => {
        // Mouse interaction - particles are attracted/repelled by mouse
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          const angle = Math.atan2(dy, dx)
          // Push particles away from mouse
          particle.x -= Math.cos(angle) * force * 3
          particle.y -= Math.sin(angle) * force * 3
        }

        // Update position with velocity
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow effect near mouse - professional teal/blue color
        const glowIntensity = distance < mouseRadius ? (1 - distance / mouseRadius) * 0.6 : 0
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size + glowIntensity * 3, 0, Math.PI * 2)
        
        // Gradient effect based on mouse proximity
        const r = Math.round(60 + glowIntensity * 40)
        const g = Math.round(160 + glowIntensity * 60)
        const b = Math.round(200 + glowIntensity * 55)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity + glowIntensity * 0.4})`
        ctx.fill()
        
        // Add subtle glow for particles near mouse
        if (distance < mouseRadius * 0.5) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 2 + glowIntensity * 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(100, 180, 220, ${0.1 * (1 - distance / (mouseRadius * 0.5))})`
          ctx.fill()
        }

        // Draw connections with gradient opacity
        particles.slice(i + 1).forEach((other) => {
          const pdx = particle.x - other.x
          const pdy = particle.y - other.y
          const pDistance = Math.sqrt(pdx * pdx + pdy * pdy)

          if (pDistance < 140) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            const lineOpacity = 0.15 * (1 - pDistance / 140)
            ctx.strokeStyle = `rgba(80, 170, 210, ${lineOpacity})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })

        // Draw connection to mouse if close - with enhanced glow
        if (distance < mouseRadius) {
          const gradient = ctx.createLinearGradient(particle.x, particle.y, mouse.x, mouse.y)
          gradient.addColorStop(0, `rgba(80, 170, 210, ${0.4 * (1 - distance / mouseRadius)})`)
          gradient.addColorStop(1, `rgba(120, 140, 200, ${0.2 * (1 - distance / mouseRadius)})`)
          
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(drawParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    createParticles()
    drawParticles()

    window.addEventListener("resize", () => {
      resize()
      createParticles()
    })
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}
