'use client';

import { useQuery } from '@tanstack/react-query';

const FALLBACK = {
  address: 'University of Cape Coast, Ghana',
  phone: '+233 24 210 9888',
};

function toWaHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`;
}

function getAcademicYear() {
  const now = new Date();
  const y = now.getFullYear();
  return now.getMonth() < 4 ? `${y - 1}/${y}` : `${y}/${y + 1}`;
}

export default function Footer() {
  const academicYear = getAcademicYear();

  const { data: info } = useQuery({
    queryKey: ['contact-info'],
    queryFn: async () => {
      const res = await fetch('/api/contact-info');
      if (!res.ok) return null;
      return res.json();
    },
  });

  const contact = info ?? FALLBACK;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-text">NUBS<span className="logo-highlight">-GHANA</span></span>
          <p>A Christ-centered fellowship of students committed to spiritual growth and leadership across Ghana.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/nubs_ghana/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ph ph-instagram-logo"></i></a>
            <a href="https://www.facebook.com/NUBS1.GH/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ph ph-facebook-logo"></i></a>
            <a href="https://whatsapp.com/channel/0029Vb71esQ30LKJKnGsSe0I" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel"><i className="ph ph-whatsapp-logo"></i></a>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li><i className="ph ph-map-pin"></i> {contact.address}</li>
            <li><a href={toWaHref(contact.phone)}><i className="ph ph-phone"></i> {contact.phone}</a></li>
            <li><a href="mailto:nationalunionofbaptiststudents@gmail.com"><i className="ph ph-envelope"></i> nationalunionofbaptiststudents@gmail.com</a></li>
          </ul>
        </div>
        
        <div className="footer-resources">
          <h3>Menu</h3>
          <ul>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#leadership">Leadership</a></li>
            <li><a href="/#programs">Programs</a></li>
            <li><a href="/#give">Support Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container flex items-center justify-between">
          <p>&copy; {academicYear} NUBS-GHANA. All Rights Reserved.</p>
          <a href="/#home">Back to top <i className="ph ph-arrow-up"></i></a>
        </div>
      </div>
    </footer>
  );
}
