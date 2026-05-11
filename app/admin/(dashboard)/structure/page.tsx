export default function StructureAdmin() {
  return (
    <div className="admin-content">
      {/* Section Header Editor */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Section Header</h3>
            <p className="subtitle-text">Edit the Structure section heading</p>
          </div>
        </div>
        <div className="header-editor">
          <div className="form-row">
            <div className="form-field-admin">
              <label>Subtitle</label>
              <input type="text" defaultValue="How We're Organized" />
            </div>
            <div className="form-field-admin">
              <label>Title</label>
              <input type="text" defaultValue="Structure of the Union" />
            </div>
          </div>
          <div className="form-row full">
            <div className="form-field-admin">
              <label>Description</label>
              <textarea rows={2} defaultValue="NUBS–GHANA operates through a well-defined organizational structure that ensures effective coordination from the national level to every local campus union."></textarea>
            </div>
          </div>
          <div className="header-editor-actions">
            <button className="btn-admin btn-admin-success btn-admin-sm">Save Changes</button>
          </div>
        </div>
      </div>

      {/* Structure Cards Table */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Structure Cards</h3>
            <p className="subtitle-text">4 entries</p>
          </div>
          <button className="btn-admin btn-admin-primary btn-admin-sm" data-open-modal="structure-modal">
            <i className="ph ph-plus"></i> Add Card
          </button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Layout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-buildings"></i></div>
                  <span className="name">National Secretariat</span>
                </div>
              </td>
              <td>The administrative hub of NUBS–GHANA...</td>
              <td><span className="badge badge-primary">Featured</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="structure-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-compass"></i></div>
                  <span className="name">Sectors</span>
                </div>
              </td>
              <td>NUBS–GHANA is divided into four geographical sectors...</td>
              <td><span className="badge badge-success">Standard</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="structure-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-graduation-cap"></i></div>
                  <span className="name">Local Unions</span>
                </div>
              </td>
              <td>Campus-based Baptist student fellowships...</td>
              <td><span className="badge badge-success">Standard</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="structure-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-student"></i></div>
                  <span className="name">JNUBS</span>
                </div>
              </td>
              <td>Junior NUBS — ministry to high school students...</td>
              <td><span className="badge badge-success">Standard</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="structure-modal"><i className="ph ph-pencil"></i></button>
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
