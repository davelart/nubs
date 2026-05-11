import Link from "next/link";

export default function Shop() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg"><img src="/assets/images/outreach_bg.png" alt="SHOP Outreach" /></div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#programs">Programs</Link><span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>SHOP</span>
          </nav>
          <span className="detail-subtitle">National Programs & Activities</span>
          <h1>Student Holiday Outreach Program (SHOP)</h1>
        </div>
      </section>
      <div className="detail-body">
        <h2>About SHOP</h2>
        <p>The Student Holiday Outreach Program (SHOP) is one of the most impactful evangelistic activities of NUBS–GHANA. Held during the long vacation, SHOP sends willing students on a two-week missions trip to selected communities across Ghana.</p>
        <p>Participants devote their time fully to evangelism, soul-winning, and community outreach — fulfilling the Union&apos;s core mandate to reach souls for Christ and expand Baptist work in Ghana.</p>
        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-clock"></i> Duration</h4>
            <p>Approximately two weeks during the long vacation period, with intensive preparation sessions beforehand.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-map-trifold"></i> Mission Fields</h4>
            <p>Selected communities across Ghana, often in underserved and unreached areas needing the Gospel message.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-heart"></i> Impact</h4>
            <p>Hundreds of souls won for Christ, new church plants established, and communities transformed through service.</p>
          </div>
        </div>
        <h2>What Participants Do</h2>
        <ul>
          <li><strong>Personal Evangelism:</strong> Door-to-door witnessing and sharing the Gospel with community members</li>
          <li><strong>Open-Air Crusades:</strong> Large-scale evangelistic gatherings with music, drama, and preaching</li>
          <li><strong>Vacation Bible School:</strong> Children&apos;s ministry programs that reach the youngest in the community</li>
          <li><strong>Community Service:</strong> Clean-up exercises, health screenings, and practical help for those in need</li>
          <li><strong>Church Planting Support:</strong> Strengthening existing churches and supporting new church plants</li>
        </ul>
        <h2>How to Participate</h2>
        <p>Any active member of a NUBS Local Union can volunteer for SHOP. Participants undergo training sessions covering evangelism techniques, cross-cultural ministry, and practical outreach skills. Financial support is raised through personal fundraising and contributions from Local Unions and the national body.</p>
        <Link href="/#programs" className="detail-back-link"><i className="ph ph-arrow-left"></i> Back to Programs</Link>
      </div>
    </>
  );
}
