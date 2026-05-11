import Link from "next/link";

export default function Programs() {
  return (
    <section id="programs" className="programs section">
      <div className="container text-center reveal-up">
        <div className="section-title center">
          <span className="subtitle">Our Gatherings</span>
          <h2>National Programs <br/> & Activities</h2>
          <p className="section-desc">NUBS–GHANA holds several key programs and gatherings that unite members from across the country. These events serve as platforms for fellowship, leadership renewal, and evangelism.</p>
        </div>
        
        <div className="programs-layout">
          {/* Congress */}
          <Link href="/programs/congress" className="prog-detail-card prog-bg-congress reveal-left">
            <div className="prog-card-content">
              <span className="prog-badge">Annual Reunion</span>
              <h3>National Congress</h3>
              <p>The National Congress is the largest annual gathering of NUBS–GHANA, bringing together members from all Locals across the country for a time of fellowship, reflection, and renewal.</p>
              <p>It serves as the official period for leadership transition. Features worship, teachings, and the Inter-Local Quiz Competition, fostering healthy knowledge of Scriptures.</p>
              <span className="prog-read-more">Learn More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>
          {/* CoE */}
          <Link href="/programs/coe" className="prog-detail-card prog-bg-coe reveal-right">
            <div className="prog-card-content">
              <span className="prog-badge">Executive Level</span>
              <h3>Conference of Executives (CoE)</h3>
              <p>The highest decision-making body of NUBS–GHANA, convening once every academic year. Brings together NEC, Local Presidents, Alumni, and Church Auxiliaries.</p>
              <p>The CoE reviews union progress, assesses leadership, and officially confirms the incoming National Secretariat.</p>
              <span className="prog-read-more">Learn More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>
          {/* SHOP */}
          <Link href="/programs/shop" className="prog-detail-card prog-bg-shop reveal-up">
            <div className="prog-card-content">
              <span className="prog-badge">Action &amp; Mission</span>
              <h3>Student Holiday Outreach Program (SHOP)</h3>
              <p>One of the most impactful evangelistic activities of NUBS–GHANA. Held during the long vacation, SHOP sends willing students on a two-week missions trip to selected communities across Ghana.</p>
              <p>Participants devote their time fully to evangelism, soul-winning, and community outreach — fulfilling the Union&apos;s core mandate to reach souls for Christ.</p>
              <span className="prog-read-more">Learn More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
