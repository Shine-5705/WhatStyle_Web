import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/manifest.json') {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/lottieFiles/')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/manifest.json', '/lottieFiles/:path*'],
};
