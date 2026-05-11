export default function Leadership() {
  return (
    <section id="leadership" className="leadership section bg-light pattern-bg">
      <div className="container">
        <div className="section-title center reveal-up">
          <span className="subtitle">Guiding the Vision</span>
          <h2>The 2026/2027 Leadership</h2>
          <p className="section-desc">NUBS–GHANA is led by the National Executive Council (NEC) under the guidance of a National Coordinator appointed by the Ghana Baptist Convention (GBC).</p>
        </div>

        <div className="leadership-grid">
          {/* National Coordinator (Special Card) */}
          <div className="leader-card coordinator reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <div className="leader-info">
               <span className="role">National Youth/NUBS Coordinator</span>
               <h3>Rev. Ezekiel Razak Alhassan</h3>
               <p className="institution">Ghana Baptist Convention (GBC)</p>
             </div>
          </div>
          
          {/* NEC Members */}
          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">National Chairperson</span>
             <h3>Mr. Stephen Mensah</h3>
             <p className="institution">Level 400, BSc. Forensic Sciences — UCC</p>
          </div>

          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">Vice Chairperson</span>
             <h3>Ms. Genfi Janet Ekuful</h3>
             <p className="institution">Level 300, BSc. Biochemistry — UCC</p>
          </div>

          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">General Secretary</span>
             <h3>Ms. Esther Ansah</h3>
             <p className="institution">Level 300, BCom. PSCM — UCC</p>
          </div>
          
          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">National Financial Secretary</span>
             <h3>Ms. Abigail Essilfie</h3>
             <p className="institution">Level 200, BCom. HRM — UCC</p>
          </div>
          
          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">Deputy Fin. Sec / SE Sector</span>
             <h3>Mr. Ephraim Kpogli Kwabena</h3>
             <p className="institution">Level 200, BCom. PSCM — UCC</p>
          </div>
          
          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">Organizing Sec / Middle Sector</span>
             <h3>Mr. Prince Nyarko</h3>
             <p className="institution">Level 300, B.Ed Social Science — UCC</p>
          </div>
          
          <div className="leader-card reveal-up">
             <div className="leader-image-box">
               <div className="placeholder-avatar"><i className="ph ph-user"></i></div>
             </div>
             <span className="role">Dep. Org. Sec / Northern Sector</span>
             <h3>Mr. Ezekiel Mba Abugre</h3>
             <p className="institution">Level 200, BA. Geography — UCC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
