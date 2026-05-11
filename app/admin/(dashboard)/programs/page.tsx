export default function ProgramsAdmin() {
  return (
    <div className="admin-content">
      {/* Section Header Editor */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Section Header</h3>
            <p className="subtitle-text">Edit the Programs section heading</p>
          </div>
        </div>
        <div className="header-editor">
          <div className="form-row">
            <div className="form-field-admin">
              <label>Subtitle</label>
              <input type="text" defaultValue="Our Gatherings" />
            </div>
            <div className="form-field-admin">
              <label>Title</label>
              <input type="text" defaultValue="National Programs & Activities" />
            </div>
          </div>
          <div className="form-row full">
            <div className="form-field-admin">
              <label>Description</label>
              <textarea rows={2} defaultValue="NUBS–GHANA holds several key programs and gatherings that unite members from across the country. These events serve as platforms for fellowship, leadership renewal, and evangelism."></textarea>
            </div>
          </div>
          <div className="header-editor-actions">
            <button className="btn-admin btn-admin-success btn-admin-sm">Save Changes</button>
          </div>
        </div>
      </div>

      {/* Programs Table */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Programs</h3>
            <p className="subtitle-text">3 entries</p>
          </div>
          <button className="btn-admin btn-admin-primary btn-admin-sm" data-open-modal="program-modal">
            <i className="ph ph-plus"></i> Add Program
          </button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Program Name</th>
              <th>Badge</th>
              <th>Layout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-microphone-stage"></i></div>
                  <span className="name">National Congress</span>
                </div>
              </td>
              <td><span className="badge badge-primary">Annual Reunion</span></td>
              <td><span className="badge badge-success">Half</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="program-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-gavel"></i></div>
                  <span className="name">Conference of Executives (CoE)</span>
                </div>
              </td>
              <td><span className="badge badge-warning">Executive Level</span></td>
              <td><span className="badge badge-success">Half</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="program-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-tent"></i></div>
                  <span className="name">Student Holiday Outreach Program (SHOP)</span>
                </div>
              </td>
              <td><span className="badge badge-primary">Action & Mission</span></td>
              <td><span className="badge badge-primary">Full Width</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="program-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
