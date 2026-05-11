export default function Resources() {
  return (
    <section id="resources" className="resources section bg-light">
      <div className="container text-center reveal-up">
        <div className="section-title center">
          <span className="subtitle">Access Our Documents</span>
          <h2>Resources</h2>
        </div>
        <div className="resources-hub">
           <div className="resource-card-premium reveal-up">
              <div className="resource-icon-wrap"><i className="ph ph-article"></i></div>
              <h3>Constitution</h3>
              <p>The guiding document outlining the operational standards and laws of the National Union of Baptist Students (2012 Edition).</p>
              <a href="https://68fc97e13a28f.site123.me/resources-1/the-nubs-ghana-constitution" className="btn-download" target="_blank" rel="noopener noreferrer">
                Download PDF <i className="ph ph-download-simple"></i>
              </a>
           </div>

           <div className="resource-card-premium reveal-up">
              <div className="resource-icon-wrap"><i className="ph ph-calendar-check"></i></div>
              <h3>Congress Materials</h3>
              <p>Access reports, minutes, and resources from the most recent National Congress and Conference of Executives.</p>
              <a href="#" className="btn-download">
                Browse Archive <i className="ph ph-arrow-right"></i>
              </a>
           </div>

           <div className="resource-card-premium reveal-up">
              <div className="resource-icon-wrap"><i className="ph ph-flag"></i></div>
              <h3>Missions Guide</h3>
              <p>Everything you need to know about the SHOP (Student Holiday Outreach Program) and upcoming mission fields.</p>
              <a href="#" className="btn-download">
                Get the Guide <i className="ph ph-download-simple"></i>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
