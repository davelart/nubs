import Link from "next/link";

export default function LocalUnions() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg"><img src="/assets/images/local_unions_bg.png" alt="Local Unions" /></div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#structure">Structure</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>Local Unions</span>
          </nav>
          <span className="detail-subtitle">Structure of the Union</span>
          <h1>Local Unions</h1>
        </div>
      </section>
      <div className="detail-body">
        <h2>Overview</h2>
        <p>Local Unions are the grassroots units of NUBS–GHANA, established on campuses across the country. Each Local Union is a community of Baptist and non-Baptist students who come together for fellowship, worship, discipleship, and Christian service.</p>
        <p>With over 50 active Local Unions spread across universities, polytechnics, and colleges of education, NUBS–GHANA maintains a strong presence on campuses nationwide.</p>
        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-graduation-cap"></i> Universities</h4>
            <p>Active Local Unions in major public and private universities including UCC, KNUST, UG, UDS, and many more.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-book-open"></i> Colleges of Education</h4>
            <p>Thriving fellowships in Colleges of Education across all regions, nurturing future teachers in the faith.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-certificate"></i> Polytechnics</h4>
            <p>Local Unions established in polytechnics and technical universities, reaching students in vocational programs.</p>
          </div>
        </div>
        <h2>Structure of a Local Union</h2>
        <p>Each Local Union is led by a Local Executive Council (LEC) composed of elected student leaders including a President, Vice President, Secretary, Financial Secretary, and committee chairpersons.</p>
        <ul>
          <li><strong>Weekly Fellowship:</strong> Regular gathering for worship, Bible study, and prayer</li>
          <li><strong>Prayer Meetings:</strong> Dedicated times of corporate prayer</li>
          <li><strong>Evangelism Programs:</strong> Campus outreach activities and personal evangelism training</li>
          <li><strong>Discipleship Classes:</strong> Structured programs for spiritual growth</li>
          <li><strong>Community Service:</strong> Outreach to local communities around the campus</li>
        </ul>
        <Link href="/#structure" className="detail-back-link"><i className="ph ph-arrow-left"></i> Back to Structure</Link>
      </div>
    </>
  );
}
