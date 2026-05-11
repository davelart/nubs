export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-grid">
        <div className="contact-info reveal-left">
          <span className="subtitle">CONTACT US</span>
          <h2>Have Questions? <span className="text-accent">Get in touch!</span></h2>
          <p>Contact our team to discuss placements, partnerships, or program details. We typically respond within 1–2 business days.</p>
          
          <ul className="contact-details-list">
            <li>
              <div className="contact-icon"><i className="ph ph-map-pin"></i></div>
              <span>University of Cape Coast, Ghana</span>
            </li>
            <li>
              <div className="contact-icon"><i className="ph ph-phone"></i></div>
              <span>+233 (0) 24 210 9888</span>
            </li>
            <li>
              <div className="contact-icon"><i className="ph ph-envelope"></i></div>
              <span>nationalunionofbaptiststudents@gmail.com</span>
            </li>
          </ul>
        </div>
        
        <div className="contact-form-wrap reveal-right">
          <form className="interaction-form">
            <div className="form-row">
              <div className="form-group">
                <i className="ph ph-user icon"></i>
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <i className="ph ph-envelope icon"></i>
                <input type="email" placeholder="Email Address" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <i className="ph ph-phone icon"></i>
                <input type="tel" placeholder="Phone" />
              </div>
              <div className="form-group">
                <i className="ph ph-info icon"></i>
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="form-group full-width">
              <i className="ph ph-pencil-simple icon-top"></i>
              <textarea placeholder="How can we help you? Feel free to get in touch!" rows={4} required></textarea>
            </div>
            
            <div className="form-footer">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree that my data is collected and stored.</span>
              </label>
              <button type="submit" className="btn btn-primary">GET IN TOUCH</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
