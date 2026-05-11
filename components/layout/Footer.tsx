export default function Footer() {
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
            <li><i className="ph ph-map-pin"></i> University of Cape Coast, Ghana</li>
            <li><a href="https://wa.me/233242109888"><i className="ph ph-phone"></i> +233 24 210 9888</a></li>
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
      <div className="footer-bottom text-center">
        <p>&copy; 2026/2027 NUBS-GHANA. All Rights Reserved.</p>
        <a href="/#home">Back to top <i className="ph ph-arrow-up"></i></a>
      </div>
    </footer>
  );
}
