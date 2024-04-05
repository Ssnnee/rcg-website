import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const user = request.cookies.get('admin')
  console.log("Here is the user cookies :", user)

  console.log("Here is the request url from midde :", request.url)
  if (!user?.value && /(\/admin|\/committee)/.test(request.url)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL

  if (user?.value && request.url === `${siteUrl}/login`) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

}

export const config = {
  matcher: ['/admin/:path*', '/committee/:path*',]
}
