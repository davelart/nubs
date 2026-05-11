"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        <div className="brand-name">NUBS<span>-GHANA</span></div>
        <span className="brand-tag">Admin Portal</span>
      </div>
      <nav className="sidebar-nav">
        <Link href="/admin" className={`sidebar-nav-item ${pathname === '/admin' ? 'active' : ''}`}>
          <i className="ph ph-squares-four"></i> Dashboard
        </Link>
        <Link href="/admin/leadership" className={`sidebar-nav-item ${pathname === '/admin/leadership' ? 'active' : ''}`}>
          <i className="ph ph-users"></i> Leadership
        </Link>
        <Link href="/admin/structure" className={`sidebar-nav-item ${pathname === '/admin/structure' ? 'active' : ''}`}>
          <i className="ph ph-tree-structure"></i> Structure
        </Link>
        <Link href="/admin/programs" className={`sidebar-nav-item ${pathname === '/admin/programs' ? 'active' : ''}`}>
          <i className="ph ph-calendar-star"></i> Programs
        </Link>
      </nav>
      <div className="sidebar-footer">
        <Link href="/admin/login"><i className="ph ph-sign-out"></i> Sign Out</Link>
      </div>
    </aside>
  );
}
