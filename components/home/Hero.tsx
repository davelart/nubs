import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero-full">
      <div className="hero-full-bg">
        <img src="/assets/images/hero.png" alt="Students in fellowship" />
        <div className="hero-full-overlay"></div>
      </div>
      <div className="container hero-full-content">
        <div className="hero-text-wrap reveal-up">
          <span className="hero-eyebrow">National Union of Baptist Students</span>
          <h1>Welcome to<br/><span className="text-accent">NUBS-GHANA</span></h1>
          <p className="hero-lead">A Christ-centered fellowship of students committed to spiritual growth, leadership, and presenting every man perfect in Christ.</p>
          <div className="hero-actions">
            <Link href="#about" className="btn btn-primary btn-lg">Discover Who We Are <i className="ph ph-arrow-right"></i></Link>
            <Link href="#give" className="btn btn-outline-light btn-lg">Support Missions</Link>
          </div>

          <div className="hero-stats reveal-up">
             <div className="hero-stat">
               <strong>50+</strong>
               <span>Local Unions</span>
             </div>
             <div className="hero-stat-divider"></div>
             <div className="hero-stat">
               <strong>15k+</strong>
               <span>Members</span>
             </div>
             <div className="hero-stat-divider"></div>
             <div className="hero-stat">
               <strong>4</strong>
               <span>Sectors</span>
             </div>
             <div className="hero-stat-divider"></div>
             <div className="hero-stat">
               <strong>1</strong>
               <span>Union</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
