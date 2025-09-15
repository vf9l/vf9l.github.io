// Modern Portfolio website functionality
document.addEventListener('DOMContentLoaded', function () {
  // Navigation smooth scrolling
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })

  // Active nav highlighting
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav-link')

    let currentSection = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        const sectionId = section.getAttribute('id')
        if (sectionId) {
          currentSection = sectionId
        }
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active')
      }
    })
  })

  // CTA button functionality
  const ctaButton = document.getElementById('cta-button')
  ctaButton?.addEventListener('click', function () {
    const footer = document.querySelector('footer')
    footer?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })

  // Browse projects button
  const browseProjectsBtn = document.querySelector('.btn-secondary')
  browseProjectsBtn?.addEventListener('click', function () {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })

  // Social links click animations
  const socialLinks = document.querySelectorAll('.social-link')
  socialLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      this.style.transform = 'scale(0.95) translateY(-3px)'
      setTimeout(() => {
        this.style.transform = ''
      }, 150)
    })
  })

  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card')
  projectCards.forEach((card) => {
    card.addEventListener('click', function () {
      this.style.transform = 'scale(0.98) translateY(-8px)'
      setTimeout(() => {
        this.style.transform = ''
      }, 150)
    })
  })

  /**
   * Add typing effect to hero section
   * @param {Element} element
   * @param {string} text
   */
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ''

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Initialize typing effect for the main title
  const heroTitle = document.querySelector('.hero-title .highlight')
  if (heroTitle) {
    const originalText = heroTitle.textContent

    // Start typing effect after a short delay
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 100)
    }, 800)
  }

  console.log('Modern portfolio website loaded successfully!')
})
