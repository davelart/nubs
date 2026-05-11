import Link from "next/link";

export default function AdminLogin() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-brand">
            <div className="brand-name">NUBS<span>-GHANA</span></div>
            <span className="brand-tag">Admin Portal</span>
          </div>

          <form className="login-form" id="login-form">
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="admin@nubsghana.org" defaultValue="admin@nubsghana.org" required />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" defaultValue="password123" required />
            </div>
            <Link href="/admin" className="btn-admin btn-admin-primary" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
              Sign In <i className="ph ph-sign-in"></i>
            </Link>
          </form>

          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--admin-text-muted)" }}>
            Demo credentials pre-filled. Click Sign In to continue.
          </p>
        </div>
      </div>
    </div>
  );
}
