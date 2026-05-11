export default function Identity() {
  return (
    <section id="identity" className="identity-section section">
      <div className="container">

        <div className="identity-header section-title center reveal-up">
          <span className="subtitle">Our Symbol & Song</span>
          <h2>The NUBS Identity</h2>
          <p className="section-desc">Two pillars that define who we are — our logo, rich with meaning, and our anthem, alive with purpose.</p>
        </div>
        <div className="identity-container-premium">
          
          {/* LEFT: LOGO MEANING */}
          <div className="identity-card logo-card reveal-left">
            <div className="identity-card-header">
              <div className="identity-icon"><i className="ph ph-shield-star"></i></div>
              <div>
                <span className="identity-tag">Our Emblem</span>
                <h3>The NUBS Logo</h3>
              </div>
            </div>
            <p className="identity-intro">The NUBS logo features a five-arrowed image within the map of Ghana and the inscription &quot;NUBS&quot;—which stands for National Union of Baptist Students. The Ghana map shows that NUBS is a Ghanaian-based body.</p>

            <div className="arrows-stack">
              <div className="arrow-group-new">
                <div className="arrow-group-label-new inward"><i className="ph ph-arrow-circle-down"></i> INWARD ARROWS</div>
                <p className="arrow-group-desc-new" style={{fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem"}}>Values that build our spiritual growth:</p>
                <ul className="arrow-values-new">
                  <li>Worship</li>
                  <li>Churchmanship</li>
                  <li>Fellowship</li>
                  <li>Study</li>
                  <li>Stewardship</li>
                </ul>
              </div>
              <div className="arrow-group-new">
                <div className="arrow-group-label-new outward"><i className="ph ph-arrow-circle-up"></i> OUTWARD ARROWS</div>
                <p className="arrow-group-desc-new" style={{fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem"}}>Our call to reach out and impact others for Christ:</p>
                <ul className="arrow-values-new">
                  <li>Missions</li>
                  <li>Discipleship</li>
                  <li>Ministry</li>
                  <li>Social Action</li>
                  <li>International Student Ministry</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CENTER: BIG LOGO */}
          <div className="identity-logo-center reveal-up">
            <div className="logo-circle-bg"></div>
            <img src="/assets/images/nubs_logo_big.png" alt="NUBS Logo" className="big-identity-logo" />
          </div>

          {/* RIGHT: ANTHEM */}
          <div className="identity-card anthem-card reveal-right">
            <div className="identity-card-header">
              <div className="identity-icon accent"><i className="ph ph-music-notes"></i></div>
              <div>
                <span className="identity-tag">Our Song</span>
                <h3>THE NUBS ANTHEM</h3>
              </div>
            </div>

            <div className="anthem-scroller">
              <div className="anthem-stanza">
                <span className="stanza-label">Stanza 1</span>
                <p>We are the NUBS of Ghana<br/>Established on Christ’s foundation<br/>Upon this firm foundation<br/>We present each one perfect in Christ</p>
              </div>
              <div className="anthem-refrain">
                <span className="stanza-label refrain-label">Refrain</span>
                <p>For we are empowered for action, action, action<br/>For we are empowered for action, action, action for the Lord</p>
              </div>
              <div className="anthem-stanza">
                <span className="stanza-label">Stanza 2</span>
                <p>We the NUBS of Ghana<br/>We believe in the Trinity<br/>Empowered by the Holy Spirit<br/>We present each one perfect in Christ</p>
              </div>
              <div className="anthem-stanza">
                <span className="stanza-label">Stanza 3</span>
                <p>We the NUBS of Ghana<br/>We believe we are destined for exploits<br/>In God and for God’s mission<br/>We believe we can — yes, we can!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
