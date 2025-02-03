import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Handle default route redirect
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')

  // Cache control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static') || 
      request.nextUrl.pathname.includes('/images/') ||
      request.nextUrl.pathname.endsWith('.ico')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    // Add cache-control for other routes to enable bfcache
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  }

  return response
}

export const config = {
  matcher: [
    // Match root path and all paths except api, static, files with extensions, and _next
    '/',
    '/((?!api|static|.*\\..*|_next).*)',
  ],
}
