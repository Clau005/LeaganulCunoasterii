
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('sb-access-token');
    if (!authCookie) return NextResponse.redirect(new URL('/login', request.url));
  }
};