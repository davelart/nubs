import Link from "next/link";

export default function Structure() {
  return (
    <section id="structure" className="structure-section section">
      <div className="container">
        <div className="section-title center reveal-up">
          <span className="subtitle">How We&apos;re Organized</span>
          <h2>Structure of the Union</h2>
          <p className="section-desc">NUBS–GHANA operates through a well-defined organizational structure that ensures effective coordination from the national level to every local campus union.</p>
        </div>

        <div className="structure-grid">
          {/* Featured: National Secretariat */}
          <Link href="/structure/national-secretariat" className="structure-card structure-card-featured reveal-up">
            <div className="structure-card-bg">
              <img src="/assets/images/secretariat_bg.png" alt="National Secretariat" />
            </div>
            <div className="structure-card-overlay"></div>
            <div className="structure-card-content">
              <h3>National Secretariat</h3>
              <p>The administrative hub of NUBS–GHANA, responsible for coordinating all national activities and maintaining the union&apos;s operations.</p>
              <span className="structure-read-more">Read More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>

          {/* Sub cards */}
          <Link href="/structure/sectors" className="structure-card reveal-up">
            <div className="structure-card-bg">
              <img src="/assets/images/sectors_bg.png" alt="Sectors" />
            </div>
            <div className="structure-card-overlay"></div>
            <div className="structure-card-content">
              <h3>Sectors</h3>
              <p>NUBS–GHANA is divided into four geographical sectors for effective regional coordination.</p>
              <span className="structure-read-more">Read More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>

          <Link href="/structure/local-unions" className="structure-card reveal-up">
            <div className="structure-card-bg">
              <img src="/assets/images/local_unions_bg.png" alt="Local Unions" />
            </div>
            <div className="structure-card-overlay"></div>
            <div className="structure-card-content">
              <h3>Local Unions</h3>
              <p>Campus-based Baptist student fellowships that form the grassroots of our union across Ghana.</p>
              <span className="structure-read-more">Read More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>

          <Link href="/structure/jnubs" className="structure-card reveal-up">
            <div className="structure-card-bg">
              <img src="/assets/images/jnubs_bg.png" alt="JNUBS" />
            </div>
            <div className="structure-card-overlay"></div>
            <div className="structure-card-content">
              <h3>JNUBS</h3>
              <p>Junior NUBS — our ministry arm reaching students at the junior and senior high school levels.</p>
              <span className="structure-read-more">Read More <i className="ph ph-arrow-right"></i></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
