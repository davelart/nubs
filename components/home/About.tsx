export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        {/* Top: Who We Are */}
        <div className="about-who-grid">
          <div className="about-collage reveal-left">
            <div className="collage-main">
              <img src="/assets/images/about.png" alt="University Students studying" />
            </div>
            <div className="collage-secondary">
              <img src="/assets/images/hero.png" alt="Group of students" />
            </div>
            <div className="collage-graphic">
              <i className="ph-fill ph-book-open"></i>
            </div>
          </div>

          <div className="about-who-text reveal-right">
            <div className="section-title">
              <span className="subtitle">Our Identity</span>
              <h2>About Us</h2>
            </div>
            <h3 className="about-sub-heading">Who We Are</h3>
            <p className="about-desc">The National Union of Baptist Students, Ghana (NUBS-GHANA) is a Christian students&apos; organization made up of local Baptist student unions across institutions in Ghana. We are a recognized auxiliary of the Ghana Baptist Convention (GBC), serving as a link between students, the Church, and the Convention.</p>
            <p className="about-desc">NUBS-GHANA exists to bring together Baptist and non-Baptist students for fellowship, discipleship, leadership training, and Christian service—raising a generation of believers who are strong in faith, sound in mind, and committed to the Great Commission.</p>
            <div className="about-motto-slogan">
              <div className="motto-pill">
                <i className="ph ph-quotes"></i>
                <span><strong>Motto:</strong> &quot;Presenting Every Man Perfect in Christ&quot; — Col. 1:28</span>
              </div>
              <div className="motto-pill accent">
                <i className="ph ph-lightning"></i>
                <span><strong>Slogan:</strong> &quot;Empowered!! For Action!!!&quot;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="vm-grid reveal-up">
          <div className="vm-card primary-card">
            <div className="vm-icon"><i className="ph ph-eye"></i></div>
            <h3>Our Vision</h3>
            <p>To fulfill the Great Commission of Jesus Christ in every campus and community, aligning with the vision of the Ghana Baptist Convention.</p>
          </div>
          <div className="vm-card">
            <div className="vm-icon accent-icon"><i className="ph ph-crosshair"></i></div>
            <h3>Our Mission</h3>
            <p>To lead Baptist student unions to evangelize the lost, disciple believers, train student leaders, establish local unions, and minister to the spiritual, academic, and socio-economic needs of students and other believers.</p>
          </div>
        </div>

        {/* Our Aims */}
        <div className="aims-section reveal-up">
          <div className="aims-header">
            <span className="subtitle">What We Stand For</span>
            <h2>Our Aims</h2>
          </div>
          <div className="aims-grid">
            <div className="aim-item">
              <div className="aim-num">01</div>
              <div className="aim-body">
                <h4>Win Souls</h4>
                <p>To win souls for Christ and the Baptist Church.</p>
              </div>
            </div>
            <div className="aim-item">
              <div className="aim-num">02</div>
              <div className="aim-body">
                <h4>Spiritual Growth</h4>
                <p>To provide members with opportunities for spiritual growth and Christian maturity.</p>
              </div>
            </div>
            <div className="aim-item">
              <div className="aim-num">03</div>
              <div className="aim-body">
                <h4>Expand Baptist Work</h4>
                <p>To help expand Baptist work in Ghana through the establishment of local unions and church planting support.</p>
              </div>
            </div>
            <div className="aim-item">
              <div className="aim-num">04</div>
              <div className="aim-body">
                <h4>Train & Equip</h4>
                <p>To train and equip students for effective Christian service.</p>
              </div>
            </div>
            <div className="aim-item">
              <div className="aim-num">05</div>
              <div className="aim-body">
                <h4>Holistic Welfare</h4>
                <p>To seek the welfare and holistic growth of members.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
