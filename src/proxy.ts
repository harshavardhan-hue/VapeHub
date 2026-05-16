import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const auth = request.cookies.get('vh_auth');

  if (!auth && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (auth && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|mp4|woff2?)$).*)',
  ],
};
