import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/homepage',
};

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  // console.log('in middleware', requestHeaders);

  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
