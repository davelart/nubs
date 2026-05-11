"use client";

import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();

  let title = "Dashboard";
  let subtitle = "Overview of website content";

  if (pathname === '/admin/leadership') {
    title = "Leadership Management";
    subtitle = "Manage National Executive Council members";
  } else if (pathname === '/admin/structure') {
    title = "Structure Content";
    subtitle = "Manage organizational structure content";
  } else if (pathname === '/admin/programs') {
    title = "Programs & Activities";
    subtitle = "Manage national programs and events";
  }

  return (
    <div className="admin-topbar">
      <div className="topbar-title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="topbar-user">
        <span>Admin User</span>
        <div className="topbar-avatar">A</div>
      </div>
    </div>
  );
}
