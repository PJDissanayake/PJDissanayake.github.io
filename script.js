// Import Particles.js and AOS
const particlesJS = window.particlesJS
const AOS = window.AOS

// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00ffb3",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffb3",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
})

// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
})

// Navigation Scroll Effect
const navbar = document.getElementById("navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Mobile Menu Toggle
const navToggle = document.getElementById("navToggle")
const mobileMenu = document.getElementById("mobileMenu")

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll(".mobile-link")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("active")
    navToggle.classList.remove("active")
  }
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Project Filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all") {
        card.classList.remove("hidden")
        card.style.display = "block"
      } else {
        const categories = card.getAttribute("data-category")
        if (categories.includes(filter)) {
          card.classList.remove("hidden")
          card.style.display = "block"
        } else {
          card.classList.add("hidden")
          card.style.display = "none"
        }
      }
    })
  })
})

// Form Submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject") || "Contact Form Submission"
    const message = formData.get("message")

    // Create mailto link
    const mailtoLink = `mailto:dkpjdissanayaka@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

    // Open mail client
    window.location.href = mailtoLink

    // Show success message (optional)
    alert("Opening your email client...")

    // Reset form
    contactForm.reset()
  })
}

// Typing effect for hero tagline (optional enhancement)
const tagline = document.querySelector(".hero-tagline")
if (tagline) {
  const text = tagline.textContent
  tagline.textContent = ""
  let i = 0

  setTimeout(() => {
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 30)
      }
    }
    typeWriter()
  }, 1000)
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section)
})
