'use client';

import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Topbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  let title = 'Dashboard';
  let subtitle = 'Overview of website content';

  if (pathname === '/admin/leadership') {
    title = 'Leadership Management';
    subtitle = 'Manage National Executive Council members';
  } else if (pathname === '/admin/structure') {
    title = 'Structure Content';
    subtitle = 'Manage organizational structure content';
  } else if (pathname === '/admin/programs') {
    title = 'Programs & Activities';
    subtitle = 'Manage national programs and events';
  }

  const userName = (session?.user as any)?.name ?? 'Admin';
  const initial = userName.charAt(0).toUpperCase();

  return (
    <div className="admin-topbar">
      <div className="topbar-title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="topbar-user">
        <span>{userName}</span>
        <div className="topbar-avatar">{initial}</div>
      </div>
    </div>
  );
}
