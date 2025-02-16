document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Toggle mobile navigation menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Typewriter Effect for Hero Text
  function typeWriter(element, text, speed = 120) {
    let index = 0;
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  const typewriterElement = document.getElementById('typewriter');
  typeWriter(typewriterElement, "Welcome to anandsagar gaikwad's portfolio");

  // Scroll Reveal using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Back to Top Button Functionality
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Simple Form Validation for Contact Form
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function(e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    if (name === "" || email === "") {
      alert("Please fill in both your name and email.");
      e.preventDefault();
    }
    // Validate basic email pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
});
