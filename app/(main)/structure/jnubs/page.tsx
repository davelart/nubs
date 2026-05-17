import Link from "next/link";

export default function JNUBS() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg"><img src="/assets/images/jnubs_bg.png" alt="JNUBS" /></div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#structure">Structure</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>JNUBS</span>
          </nav>
          <span className="detail-subtitle">Structure of the Union</span>
          <h1>JNUBS</h1>
        </div>
      </section>
      <div className="detail-body">
        <h2>Overview</h2>
        <p>Junior NUBS (JNUBS) is the ministry arm of NUBS–GHANA that reaches students at the junior and senior high school levels. JNUBS serves as a feeder system for the national union, introducing young students to the Baptist student fellowship before they enter tertiary institutions.</p>
        <p>Through JNUBS, high school students are discipled, trained in leadership, and prepared for active participation in their future Local Unions on university campuses.</p>
        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-student"></i>Target Group</h4>
            <p>Junior High School and Senior High School students across Ghana who are members of or affiliated with Baptist churches.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-target"></i> Purpose</h4>
            <p>To nurture young believers, establish a foundation of faith, and prepare them for tertiary-level Christian service.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-link"></i> Connection</h4>
            <p>JNUBS operates under the supervision of NUBS–GHANA and the Ghana Baptist Convention&apos;s youth ministry.</p>
          </div>
        </div>
        <h2>Activities</h2>
        <ul>
          <li><strong>School Fellowship:</strong> Regular campus meetings for worship and Bible study</li>
          <li><strong>Vacation Bible School:</strong> Intensive discipleship programs during school holidays</li>
          <li><strong>Youth Camps:</strong> Annual gatherings for fellowship, training, and spiritual renewal</li>
          <li><strong>Mentorship:</strong> Pairing JNUBS members with NUBS mentors from nearby universities</li>
          <li><strong>Evangelism:</strong> Age-appropriate evangelism training and outreach programs</li>
        </ul>
        <Link href="/#structure" className="detail-back-link"><i className="ph ph-arrow-left"></i> Back to Structure</Link>
      </div>
    </>
  );
}
