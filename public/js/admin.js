/**
 * NUBS-GHANA Admin Portal JavaScript
 * Frontend-only interactivity: modals, delete confirmations, sidebar state
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========== Modal Logic ==========
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Close modal when clicking overlay background
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Cancel buttons in modals
  document.querySelectorAll('[data-dismiss="modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ========== Add New Buttons ==========
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-open-modal');
      // Clear form if it's an add action
      const modal = document.getElementById(modalId);
      if (modal) {
        const form = modal.querySelector('form');
        if (form && !btn.hasAttribute('data-edit')) {
          form.reset();
          // Update modal title
          const title = modal.querySelector('.modal-header h3');
          if (title) {
            const section = title.textContent.replace('Edit ', 'Add New ');
            title.textContent = section;
          }
        }
      }
      openModal(modalId);
    });
  });

  // ========== Edit Buttons ==========
  document.querySelectorAll('[data-edit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-open-modal');
      const row = btn.closest('tr');
      if (!row || !modalId) return;

      const modal = document.getElementById(modalId);
      if (!modal) return;

      // Update modal title
      const title = modal.querySelector('.modal-header h3');
      if (title) title.textContent = 'Edit Entry';

      // Populate form fields from row data
      const cells = row.querySelectorAll('td');
      const inputs = modal.querySelectorAll('input[type="text"], input[type="email"], textarea');
      
      // Try to fill name from the row
      const nameCell = row.querySelector('.table-name-cell .name');
      if (nameCell && inputs[0]) {
        inputs[0].value = nameCell.textContent.trim();
      }

      // Fill role/title from second visible cell
      if (cells[1] && inputs[1]) {
        inputs[1].value = cells[1].textContent.trim();
      }

      // Fill institution from third visible cell
      if (cells[2] && inputs[2]) {
        inputs[2].value = cells[2].textContent.trim();
      }

      openModal(modalId);
    });
  });

  // ========== Delete with Confirmation ==========
  let pendingDeleteRow = null;

  document.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', () => {
      pendingDeleteRow = btn.closest('tr');
      openModal('confirm-delete-modal');
    });
  });

  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
      if (pendingDeleteRow) {
        pendingDeleteRow.style.transition = 'all 0.4s ease';
        pendingDeleteRow.style.opacity = '0';
        pendingDeleteRow.style.transform = 'translateX(20px)';
        setTimeout(() => {
          pendingDeleteRow.remove();
          pendingDeleteRow = null;
          // Update stat counts if applicable
          updateCounts();
        }, 400);
      }
      closeModal('confirm-delete-modal');
    });
  }

  // ========== Save Form (simulated) ==========
  document.querySelectorAll('.modal-footer .btn-admin-success').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        // Show brief success state
        const originalText = btn.textContent;
        btn.textContent = '✓ Saved!';
        btn.style.background = '#059669';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }, 1000);
      }
    });
  });

  // ========== Update Counts ==========
  function updateCounts() {
    // Count table rows on current page
    const tables = document.querySelectorAll('.admin-table tbody');
    tables.forEach(tbody => {
      const count = tbody.querySelectorAll('tr').length;
      // Find the stat card associated with this table
      const section = tbody.closest('.admin-section-card');
      if (section) {
        const header = section.querySelector('.section-card-header .subtitle-text');
        if (header) {
          header.textContent = `${count} entries`;
        }
      }
    });
  }

  // ========== Header Editor Save ==========
  document.querySelectorAll('.header-editor .btn-admin-success').forEach(btn => {
    btn.addEventListener('click', () => {
      const originalText = btn.textContent;
      btn.innerHTML = '<i class="ph ph-check"></i> Saved!';
      btn.style.background = '#059669';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2000);
    });
  });

  // ========== Sidebar Active State ==========
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.sidebar-nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  // ========== Login Form ==========
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = loginForm.querySelector('.btn-admin-primary');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="ph ph-spinner"></i> Signing in...';
      btn.disabled = true;
      setTimeout(() => {
        window.location.href = '/admin/dashboard.html';
      }, 1200);
    });
  }
});
