import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  // Evita loop se già sei in /ita
  if (url.pathname.startsWith('/ita')) {
    return NextResponse.next()
  }

  // Prendi la lingua del browser
  const lang = req.headers.get('accept-language')?.split(',')[0] || ''

  // Se italiano -> redirect a /ita
  if (lang.startsWith('it')) {
    url.pathname = '/ita'
    return NextResponse.redirect(url)
  }

  // Altrimenti resta su /
  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // attivo solo sulla root
}
