import { auth } from '@/auth';
import { NextResponse, type NextRequest } from 'next/server';

export default auth((req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';

  if (!isAdminRoute) return NextResponse.next();
  if (isLoginPage) return NextResponse.next();

  const auth = (req as any).auth;
  const user = auth?.user;
  if (!user || user.role !== 'admin') {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*'],
};
