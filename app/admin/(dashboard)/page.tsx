import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="admin-content">
      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon blue"><i className="ph ph-users"></i></div>
          </div>
          <div className="stat-value">8</div>
          <div className="stat-label">Total Leaders</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon green"><i className="ph ph-tree-structure"></i></div>
          </div>
          <div className="stat-value">4</div>
          <div className="stat-label">Structure Cards</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon orange"><i className="ph ph-calendar-star"></i></div>
          </div>
          <div className="stat-value">3</div>
          <div className="stat-label">Programs</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon red"><i className="ph ph-globe"></i></div>
          </div>
          <div className="stat-value">7</div>
          <div className="stat-label">Total Pages</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Quick Actions</h3>
            <p className="subtitle-text">Manage website content</p>
          </div>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <div className="quick-actions">
            <Link href="/admin/leadership" className="quick-action-card">
              <div className="quick-action-icon"><i className="ph ph-user-plus"></i></div>
              <div>
                <h4>Manage Leaders</h4>
                <p>Add or edit leadership info</p>
              </div>
            </Link>
            <Link href="/admin/structure" className="quick-action-card">
              <div className="quick-action-icon"><i className="ph ph-plus-circle"></i></div>
              <div>
                <h4>Structure Cards</h4>
                <p>Add or modify structure cards</p>
              </div>
            </Link>
            <Link href="/admin/programs" className="quick-action-card">
              <div className="quick-action-icon"><i className="ph ph-calendar-plus"></i></div>
              <div>
                <h4>Programs</h4>
                <p>Manage program activities</p>
              </div>
            </Link>
            <Link href="/" className="quick-action-card" target="_blank">
              <div className="quick-action-icon" style={{ background: "rgba(225,29,72,0.1)", color: "var(--admin-accent)" }}><i className="ph ph-eye"></i></div>
              <div>
                <h4>View Website</h4>
                <p>Open the live site</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
