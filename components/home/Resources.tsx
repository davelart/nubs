'use client';

import { useQuery } from '@tanstack/react-query';

export default function Resources() {
  const { data: constitution } = useQuery({
    queryKey: ['constitution'],
    queryFn: async () => {
      const res = await fetch('/api/constitution');
      if (!res.ok) return null;
      return res.json();
    },
  });

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
              <p>The guiding document outlining the operational standards and laws of the National Union of Baptist Students.</p>
              {constitution?.url ? (
                <a href={constitution.url} className="btn-download" target="_blank" rel="noopener noreferrer">
                  Download PDF <i className="ph ph-download-simple"></i>
                </a>
              ) : (
                <span className="btn-download" style={{ opacity: 0.45, cursor: 'default' }}>
                  Coming Soon <i className="ph ph-clock"></i>
                </span>
              )}
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
