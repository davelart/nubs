"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Header
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 80) { header.classList.add('scrolled'); }
      else { header.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active nav link from scroll position
    const sections = document.querySelectorAll('section[id]');
    const activateNavLink = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 140;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `/#${current}` || link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', activateNavLink, { passive: true });

    // Mobile Menu
    const openMenu = () => {
      if (!navMenu || !menuToggle) return;
      navMenu.classList.add('active');
      const icon = menuToggle.querySelector('i');
      if (icon) icon.classList.replace('ph-list', 'ph-x');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      if (!navMenu || !menuToggle) return;
      navMenu.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) icon.classList.replace('ph-x', 'ph-list');
      document.body.style.overflow = '';
    };

    const handleMenuToggle = () => {
      navMenu?.classList.contains('active') ? closeMenu() : openMenu();
    };

    if (menuToggle) {
      menuToggle.addEventListener('click', handleMenuToggle);
    }

    const handleNavLinkClick = () => closeMenu();
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
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

    const handleTabClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const target = document.getElementById(`tab-${tabId}`);
      if (target) target.classList.add('active');
    };

    tabBtns.forEach(btn => {
      btn.addEventListener('click', handleTabClick);
    });

    // Donation Amounts Logic
    const amountPills = document.querySelectorAll('.amount-pill');
    const customInput = document.getElementById('customAmount') as HTMLInputElement | null;

    const handleAmountClick = (e: Event) => {
      const pill = e.currentTarget as HTMLElement;
      amountPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const val = pill.getAttribute('data-value');
      if (customInput) {
        if (val !== 'custom') {
          customInput.value = val || '';
        } else {
          customInput.value = '';
          customInput.focus();
        }
      }
    };

    if (amountPills.length && customInput) {
      amountPills.forEach(pill => {
        pill.addEventListener('click', handleAmountClick);
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

    const handlePaymentChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (momoDetails && bankDetails) {
        if (target.value === 'momo') {
          momoDetails.style.display = 'block';
          bankDetails.style.display = 'none';
        } else if (target.value === 'bank') {
          momoDetails.style.display = 'none';
          bankDetails.style.display = 'block';
        }
      }
    };

    paymentRadios.forEach(radio => {
      radio.addEventListener('change', handlePaymentChange);
    });

    // Initial checks
    handleScroll();
    activateNavLink();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', activateNavLink);
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleMenuToggle);
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
      revealObserver.disconnect();
      tabBtns.forEach(btn => {
        btn.removeEventListener('click', handleTabClick);
      });
      amountPills.forEach(pill => {
        pill.removeEventListener('click', handleAmountClick);
      });
      paymentRadios.forEach(radio => {
        radio.removeEventListener('change', handlePaymentChange);
      });
    };
  }, [pathname]);

  return null;
}
