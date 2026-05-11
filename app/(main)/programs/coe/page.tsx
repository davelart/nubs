import Link from "next/link";

export default function CoE() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg"><img src="/assets/images/executives_bg.png" alt="Conference of Executives" /></div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#programs">Programs</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>Conference of Executives</span>
          </nav>
          <span className="detail-subtitle">National Programs & Activities</span>
          <h1>Conference of Executives (CoE)</h1>
        </div>
      </section>
      <div className="detail-body">
        <h2>About the CoE</h2>
        <p>The Conference of Executives (CoE) is the highest decision-making body of NUBS–GHANA, convening once every academic year. It brings together NEC members, Local Presidents, Alumni representatives, and Church Auxiliaries for strategic deliberation and governance.</p>
        <p>The CoE reviews union progress, assesses leadership performance, deliberates on policy matters, and officially confirms the incoming National Secretariat for the new academic year.</p>
        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-gavel"></i> Authority</h4>
            <p>The CoE is the supreme governing body with the power to make binding decisions on all matters of the Union.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-calendar-check"></i> Frequency</h4>
            <p>Convenes once every academic year, typically during the first semester of the academic calendar.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-seal-check"></i> Outcomes</h4>
            <p>Produces resolutions, policy updates, and official confirmations that guide the Union&apos;s operations.</p>
          </div>
        </div>
        <h2>Agenda & Activities</h2>
        <ul>
          <li><strong>Leadership Assessment:</strong> Review of NEC performance and sectoral reports</li>
          <li><strong>Policy Deliberation:</strong> Discussion and voting on constitutional amendments and new policies</li>
          <li><strong>Financial Review:</strong> Auditing of the Union&apos;s financial statements and budget approval</li>
          <li><strong>Secretariat Confirmation:</strong> Official confirmation of the incoming national officers</li>
          <li><strong>Strategic Planning:</strong> Setting the vision and goals for the upcoming academic year</li>
        </ul>
        <Link href="/#programs" className="detail-back-link"><i className="ph ph-arrow-left"></i> Back to Programs</Link>
      </div>
    </>
  );
}
