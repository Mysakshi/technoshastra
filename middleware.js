import { NextResponse } from 'next/server';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/admin/login';
  const isAdminPath = path.startsWith('/admin') && !isPublicPath;
  
  const token = request.cookies.get('TechnoshastraX_admin_token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/admin', request.nextUrl));
  }

  if (isAdminPath && (!token || token === '')) {
    return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ]
}
