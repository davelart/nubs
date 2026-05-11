import Link from "next/link";

export default function NationalSecretariat() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src="/assets/images/secretariat_bg.png" alt="National Secretariat" />
        </div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#structure">Structure</Link>
            <span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>National Secretariat</span>
          </nav>
          <span className="detail-subtitle">Structure of the Union</span>
          <h1>National Secretariat</h1>
        </div>
      </section>

      <div className="detail-body">
        <h2>Overview</h2>
        <p>The National Secretariat serves as the administrative hub of NUBS–GHANA, responsible for coordinating all national activities, maintaining records, and ensuring the smooth running of the Union&apos;s affairs. It is the central point of communication between the National Executive Council (NEC), the Sectors, Local Unions, and the Ghana Baptist Convention (GBC).</p>

        <p>Stationed at the headquarters of the Union, the Secretariat plays a pivotal role in organizing national events such as the National Congress, Conference of Executives (CoE), and the Student Holiday Outreach Program (SHOP). It also manages the Union&apos;s correspondence, archives, and financial documentation.</p>

        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-buildings"></i> Location</h4>
            <p>The National Secretariat is based at the Ghana Baptist Convention Headquarters, working closely with the Convention&apos;s leadership.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-users-three"></i> Leadership</h4>
            <p>Led by the National Coordinator appointed by the GBC, supported by the NEC officers elected at each Congress.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-clipboard-text"></i> Functions</h4>
            <p>Coordination of national programs, record keeping, financial management, and liaison with GBC leadership.</p>
          </div>
        </div>

        <h2>Key Responsibilities</h2>
        <ul>
          <li>Coordinating and overseeing all national programs and activities</li>
          <li>Maintaining communication between NEC, Sectors, and Local Unions</li>
          <li>Managing the Union&apos;s financial records and reporting</li>
          <li>Serving as the liaison between NUBS–GHANA and the Ghana Baptist Convention</li>
          <li>Preserving historical records and documentation of the Union</li>
          <li>Facilitating leadership transitions during Congress periods</li>
        </ul>

        <h2>The National Executive Council (NEC)</h2>
        <p>The NEC is the governing body of NUBS–GHANA, composed of elected officers who serve a one-year term. The Council meets regularly to deliberate on matters affecting the Union and to ensure that the vision and mission of NUBS–GHANA are being effectively pursued across all levels of the organization.</p>

        <p>The NEC operates under the guidance of the National Coordinator, who is appointed by the Ghana Baptist Convention to provide pastoral oversight and strategic direction to the student body.</p>

        <Link href="/#structure" className="detail-back-link">
          <i className="ph ph-arrow-left"></i> Back to Structure
        </Link>
      </div>
    </>
  );
}
