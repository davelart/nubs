export default function LeadershipAdmin() {
  return (
    <div className="admin-content">
      {/* Section Header Editor */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Section Header</h3>
            <p className="subtitle-text">Edit the leadership section heading displayed on the homepage</p>
          </div>
        </div>
        <div className="header-editor">
          <div className="form-row">
            <div className="form-field-admin">
              <label>Subtitle</label>
              <input type="text" defaultValue="Guiding the Vision" />
            </div>
            <div className="form-field-admin">
              <label>Title</label>
              <input type="text" defaultValue="The 2026/2027 Leadership" />
            </div>
          </div>
          <div className="form-row full">
            <div className="form-field-admin">
              <label>Description</label>
              <textarea rows={2} defaultValue="NUBS–GHANA is led by the National Executive Council (NEC) under the guidance of a National Coordinator appointed by the Ghana Baptist Convention (GBC)."></textarea>
            </div>
          </div>
          <div className="header-editor-actions">
            <button className="btn-admin btn-admin-success btn-admin-sm">Save Changes</button>
          </div>
        </div>
      </div>

      {/* Leaders Table */}
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Leaders</h3>
            <p className="subtitle-text">8 entries</p>
          </div>
          <button className="btn-admin btn-admin-primary btn-admin-sm" data-open-modal="leader-modal">
            <i className="ph ph-plus"></i> Add Leader
          </button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Institution</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Rev. Ezekiel Razak Alhassan</span>
                </div>
              </td>
              <td>National Youth/NUBS Coordinator</td>
              <td>Ghana Baptist Convention (GBC)</td>
              <td><span className="badge badge-primary">Coordinator</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Mr. Stephen Mensah</span>
                </div>
              </td>
              <td>National Chairperson</td>
              <td>Level 400, BSc. Forensic Sciences — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Ms. Genfi Janet Ekuful</span>
                </div>
              </td>
              <td>Vice Chairperson</td>
              <td>Level 300, BSc. Biochemistry — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Ms. Esther Ansah</span>
                </div>
              </td>
              <td>General Secretary</td>
              <td>Level 300, BCom. PSCM — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Ms. Abigail Essilfie</span>
                </div>
              </td>
              <td>National Financial Secretary</td>
              <td>Level 200, BCom. HRM — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Mr. Ephraim Kpogli Kwabena</span>
                </div>
              </td>
              <td>Deputy Fin. Sec / SE Sector</td>
              <td>Level 200, BCom. PSCM — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Mr. Prince Nyarko</span>
                </div>
              </td>
              <td>Organizing Sec / Middle Sector</td>
              <td>Level 300, B.Ed Social Science — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
                  <button className="btn-admin btn-admin-danger btn-admin-sm" data-delete><i className="ph ph-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-name-cell">
                  <div className="table-avatar"><i className="ph ph-user"></i></div>
                  <span className="name">Mr. Ezekiel Mba Abugre</span>
                </div>
              </td>
              <td>Dep. Org. Sec / Northern Sector</td>
              <td>Level 200, BA. Geography — UCC</td>
              <td><span className="badge badge-success">NEC</span></td>
              <td>
                <div className="table-actions">
                  <button className="btn-admin btn-admin-edit btn-admin-sm" data-edit data-open-modal="leader-modal"><i className="ph ph-pencil"></i></button>
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
