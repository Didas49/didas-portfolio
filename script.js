// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Smooth Scrolling
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

// Header Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.padding = "0.5rem 0"
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)"
  } else {
    header.style.padding = "1rem 0"
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
  }
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
        card.style.display = "block"
        setTimeout(() => {
          card.style.opacity = "1"
          card.style.transform = "scale(1)"
        }, 10)
      } else {
        const categories = card.getAttribute("data-category")
        if (categories.includes(filter)) {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "scale(1)"
          }, 10)
        } else {
          card.style.opacity = "0"
          card.style.transform = "scale(0.8)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      }
    })
  })
})

// Testimonials Slider
let currentTestimonial = 0
const testimonials = document.querySelectorAll(".testimonial-item")
const dots = document.querySelectorAll(".dot")

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none"
  })
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  testimonials[index].style.display = "block"
  dots[index].classList.add("active")
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index
    showTestimonial(currentTestimonial)
  })
})

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  showTestimonial(currentTestimonial)
}, 5000)

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll(".skill-progress")

const animateSkills = () => {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top
    const screenPosition = window.innerHeight

    if (barPosition < screenPosition) {
      bar.style.width = bar.style.width
    }
  })
}

window.addEventListener("scroll", animateSkills)

// Form Submission (already handled in HTML with Formspree)
// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector('input[type="email"]').value
    alert(`Thank you for subscribing with: ${email}`)
    newsletterForm.reset()
  })
}

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "all 0.6s ease"
  observer.observe(section)
})
