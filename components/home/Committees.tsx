export default function Committees() {
  return (
    <section id="committees" className="committees section bg-light pattern-bg">
      <div className="container reveal-up">
        <div className="section-title">
          <span className="subtitle">Working Together</span>
          <h2>National Committees</h2>
          <p className="section-desc" style={{marginLeft: 0}}>The National Committees of NUBS–Ghana are specialized teams that support the National Executive Council (NEC) in running the Union’s affairs.</p>
        </div>
        
        <div className="committees-layout">
          <div className="committees-list">
            <div className="committee-list-item reveal-up">
              <div className="committee-icon"><i className="ph ph-desktop"></i></div>
              <div className="committee-details">
                <h3>Information & Research Committee (IRC)</h3>
                <p>Serves as the central communication hub of NUBS–GHANA. We document all national activities, manage the Union&apos;s digital presence, and preserve our historical records.</p>
              </div>
            </div>

            <div className="committee-list-item reveal-up" style={{transitionDelay: "0.1s"}}>
              <div className="committee-icon"><i className="ph ph-plant"></i></div>
              <div className="committee-details">
                <h3>Christian Development (CDC)</h3>
                <p>The spiritual backbone of our Union. Tasked with nurturing the spiritual maturity of members through Bible studies, prayer networks, and discipleship programs.</p>
              </div>
            </div>

            <div className="committee-list-item reveal-up" style={{transitionDelay: "0.2s"}}>
              <div className="committee-icon"><i className="ph ph-megaphone"></i></div>
              <div className="committee-details">
                <h3>Evangelism & Missions (EMC)</h3>
                <p>Drives our soul-winning mandate. We organize missions trips, campus outreaches, and train members for effective personal and group evangelism.</p>
              </div>
            </div>

            <div className="committee-list-item reveal-up" style={{transitionDelay: "0.3s"}}>
              <div className="committee-icon"><i className="ph ph-hammer"></i></div>
              <div className="committee-details">
                <h3>Projects Committee (PC)</h3>
                <p>Focuses on the structural and financial growth of the Union. We oversee development initiatives and work to ensure the long-term sustainability of NUBS operations.</p>
              </div>
            </div>
          </div>
          <div className="committees-image-wrapper reveal-right">
            <img src="/assets/images/committees.png" alt="Committees meeting and collaboration" className="committees-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
