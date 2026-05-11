/**
 * Main JavaScript File: handles interactivity, tabs, donation form, and scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header (tweak pill nav size on scroll)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  }, { passive: true });

  // Active nav link from scroll position
  const sections = document.querySelectorAll('section[id]');
  const activateNavLink = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', activateNavLink, { passive: true });

  // Mobile Menu (full-screen overlay)
  const openMenu = () => {
    navMenu.classList.add('active');
    const icon = menuToggle.querySelector('i');
    if (icon) icon.classList.replace('ph-list', 'ph-x');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    navMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    if (icon) icon.classList.replace('ph-x', 'ph-list');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.contains('active') ? closeMenu() : openMenu();
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu());
  });

  // Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // Tabs Logic for About Section
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const target = document.getElementById(`tab-${tabId}`);
      if (target) target.classList.add('active');
    });
  });

  // Donation Amounts Logic
  const amountPills = document.querySelectorAll('.amount-pill');
  const customInput = document.getElementById('customAmount');

  if (amountPills.length && customInput) {
    amountPills.forEach(pill => {
      pill.addEventListener('click', () => {
        amountPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const val = pill.getAttribute('data-value');
        if (val !== 'custom') {
          customInput.value = val;
        } else {
          customInput.value = '';
          customInput.focus();
        }
      });
    });

    customInput.addEventListener('input', () => {
      amountPills.forEach(p => p.classList.remove('active'));
      const customPill = document.querySelector('.amount-pill.custom');
      if (customPill) customPill.classList.add('active');
    });
  }

  // Payment Method Radio Logic
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  const momoDetails = document.getElementById('momo-details');
  const bankDetails = document.getElementById('bank-details');

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (momoDetails && bankDetails) {
        if (e.target.value === 'momo') {
          momoDetails.style.display = 'block';
          bankDetails.style.display = 'none';
        } else if (e.target.value === 'bank') {
          momoDetails.style.display = 'none';
          bankDetails.style.display = 'block';
        }
      }
    });
  });

  // Form Submit Intercept
  const form = document.querySelector('.interaction-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="ph ph-check-circle"></i> Message Sent!';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  // Initial checks
  if (window.scrollY > 80) header.classList.add('scrolled');
  activateNavLink();
});
