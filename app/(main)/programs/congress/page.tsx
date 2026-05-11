import Link from "next/link";

export default function Congress() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg"><img src="/assets/images/congress_bg.png" alt="National Congress" /></div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#programs">Programs</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>National Congress</span>
          </nav>
          <span className="detail-subtitle">National Programs & Activities</span>
          <h1>National Congress</h1>
        </div>
      </section>
      <div className="detail-body">
        <h2>About the Congress</h2>
        <p>The National Congress is the largest annual gathering of NUBS–GHANA, bringing together members from all Local Unions across the country for a time of fellowship, reflection, and spiritual renewal. It is the highlight of the academic year and a defining moment in the life of the Union.</p>
        <p>The Congress serves as the official period for leadership transition, where outgoing officers hand over to newly elected leaders. It also features powerful worship sessions, in-depth Bible teachings, and the highly anticipated Inter-Local Quiz Competition.</p>
        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-calendar"></i> When</h4>
            <p>Held annually during the long vacation period, typically spanning 4-5 days of intense fellowship and activities.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-map-pin"></i> Where</h4>
            <p>Hosted at different locations across Ghana each year, rotating between sectors to promote unity and accessibility.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-users"></i> Who Attends</h4>
            <p>Delegates from all Local Unions, NEC members, alumni, GBC representatives, and invited guest speakers.</p>
          </div>
        </div>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Leadership Transition:</strong> Official handover ceremony from outgoing to incoming NEC</li>
          <li><strong>Worship Sessions:</strong> Spirit-filled worship led by talented ministry teams from across the nation</li>
          <li><strong>Bible Exposition:</strong> In-depth teachings from renowned speakers and theologians</li>
          <li><strong>Inter-Local Quiz:</strong> Competitive Bible quiz fostering knowledge of Scriptures</li>
          <li><strong>Workshops & Seminars:</strong> Skill-building sessions on leadership, ministry, and personal development</li>
          <li><strong>Fellowship Activities:</strong> Bonding experiences including games, cultural night, and talent showcases</li>
        </ul>
        <Link href="/#programs" className="detail-back-link"><i className="ph ph-arrow-left"></i> Back to Programs</Link>
      </div>
    </>
  );
}
