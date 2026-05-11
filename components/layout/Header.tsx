'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/#structure', label: 'Structure' },
  { href: '/#committees', label: 'Committees' },
  { href: '/#programs', label: 'Programs' },
  { href: '/#resources', label: 'Resources' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="nav-container">
        <a href="/#home" className="logo">
          <span className="logo-text">NUBS<span className="logo-highlight">-GHANA</span></span>
        </a>

        <button className="menu-toggle" aria-label="Toggle Navigation">
          <i className="ph ph-list"></i>
        </button>

        <nav className="nav-menu">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
            <li>
              <a href="/#give" className="btn-support">Support Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
