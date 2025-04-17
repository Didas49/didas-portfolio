document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Projects Filter
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        const filter = btn.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
          } else {
            const categories = card.getAttribute("data-category").split(" ")
            if (categories.includes(filter)) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          }
        })
      })
    })
  
    // Testimonial Slider
    const dots = document.querySelectorAll(".dot")
    const testimonials = document.querySelectorAll(".testimonial-item")
    let currentSlide = 0
  
    function showSlide(index) {
      // Hide all testimonials
      testimonials.forEach((testimonial) => {
        testimonial.style.display = "none"
      })
  
      // Remove active class from all dots
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })
  
      // Show current testimonial and activate current dot
      testimonials[index].style.display = "block"
      dots[index].classList.add("active")
    }
  
    // Initialize slider
    showSlide(currentSlide)
  
    // Add click event to dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
      })
    })
  
    // Auto slide
    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonials.length
      showSlide(currentSlide)
    }, 5000)
  
    // Form Submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // In a real implementation, you would send the form data to a server
        // For GitHub Pages, you might use a service like Formspree
  
        // Simple form validation
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        if (name && email && subject && message) {
          // Show success message (in a real implementation)
          alert("Thank you for your message! I will get back to you soon.")
          contactForm.reset()
        } else {
          alert("Please fill in all fields.")
        }
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: "smooth",
          })
        }
      })
    })
  
    // Add active class to nav links based on scroll position
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
  
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll(".nav-links a").forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    })
  })
  