import './style.css'
import appScreenshot from './assets/images/landing_pageA12.PNG'

// Import semua komponen
import { Navbar } from './components/Navbar.js'
import { Hero } from './components/Hero.js'
import { Features } from './components/Features.js'
import { Benefits } from './components/Benefits.js'
import { Target } from './components/Target.js'
import { CTA } from './components/CTA.js'
import { Footer } from './components/Footer.js'

// Fungsi untuk render semua komponen ke dalam app
function renderApp() {
  const app = document.querySelector('#app')
  
  // Bersihkan konten default
  app.innerHTML = ''
  
  // Render semua komponen secara berurutan
  app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Features()}
    ${Benefits()}
    ${Target()}
    ${CTA()}
    ${Footer()}
  `
  
  // Set image source setelah render
  const heroImage = document.querySelector('#hero-app-image')
  if (heroImage) {
    heroImage.src = appScreenshot
  }
}

// Setup event listeners setelah DOM loaded
function setupEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
  const mobileMenu = document.querySelector('#mobile-menu')
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }
  
  // Smooth scroll untuk navigasi
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        
        // Tutup mobile menu jika terbuka
        if (mobileMenu) {
          mobileMenu.classList.add('hidden')
        }
      }
    })
  })
  
  // Navbar scroll effect
  const navbar = document.querySelector('#navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-white')
      } else {
        navbar.classList.remove('shadow-lg')
      }
    })
  }
  
  // CTA Button tracking (opsional)
  const ctaButtons = document.querySelectorAll('.cta-button')
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('CTA Button clicked:', btn.textContent)
    })
  })
}

// Initialize app saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderApp()
  setupEventListeners()
})
