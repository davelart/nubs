import Link from "next/link";

export default function Sectors() {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src="/assets/images/sectors_bg.png" alt="NUBS-GHANA Sectors" />
        </div>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <nav className="detail-breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator"><i className="ph ph-caret-right"></i></span>
            <Link href="/#structure">Structure</Link>
            <span className="separator"><i className="ph ph-caret-right"></i></span>
            <span>Sectors</span>
          </nav>
          <span className="detail-subtitle">Structure of the Union</span>
          <h1>Sectors</h1>
        </div>
      </section>

      <div className="detail-body">
        <h2>Overview</h2>
        <p>NUBS–GHANA is divided into four geographical sectors for effective regional coordination and administration. Each sector comprises several Local Unions within its geographical boundary and is led by a Sector Coordinator who ensures that the national vision is being translated into action at the regional level.</p>

        <p>The sector system enables NUBS–GHANA to maintain close oversight of its far-reaching network of Local Unions, facilitate inter-local fellowship, and organize regional programs that strengthen the body of Christ on every campus.</p>

        <div className="detail-info-grid">
          <div className="detail-info-card">
            <h4><i className="ph ph-compass"></i> Northern Sector</h4>
            <p>Covering the northern regions of Ghana including Tamale, Bolgatanga, and Wa. Oversees Local Unions in universities and colleges across the north.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-compass"></i> Middle Sector</h4>
            <p>Encompasses the Ashanti and Bono regions, including major campuses in Kumasi and surrounding areas.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-compass"></i> South-Eastern Sector</h4>
            <p>Covers the Greater Accra, Eastern, and Volta regions with Local Unions in the capital and eastern corridors.</p>
          </div>
          <div className="detail-info-card">
            <h4><i className="ph ph-compass"></i> South-Western Sector</h4>
            <p>Includes the Central and Western regions, home to several prominent universities and active Local Unions.</p>
          </div>
        </div>

        <h2>Sector Functions</h2>
        <ul>
          <li>Coordinate and supervise Local Unions within the sector&apos;s geographical area</li>
          <li>Organize sector-level programs, rallies, and fellowship meetings</li>
          <li>Represent the sector&apos;s interests at the National Executive Council (NEC) level</li>
          <li>Facilitate communication between the National Secretariat and Local Unions</li>
          <li>Support the establishment of new Local Unions in emerging campuses</li>
          <li>Mentor and develop local leadership within the sector</li>
        </ul>

        <h2>Sector Leadership</h2>
        <p>Each sector is led by a Sector Coordinator who is typically a member of the NEC. The Sector Coordinator works alongside a team of sector officers to ensure effective administration and program execution. They serve as the primary link between the Local Unions and the national body, ensuring that communication flows seamlessly in both directions.</p>

        <Link href="/#structure" className="detail-back-link">
          <i className="ph ph-arrow-left"></i> Back to Structure
        </Link>
      </div>
    </>
  );
}
