import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  // Evita loop se già sei in /ita
  if (url.pathname.startsWith('/ita')) {
    return NextResponse.next()
  }

  // Prendi la posizione geografica dal header (funziona su Vercel e altri provider)
  const country = req.headers.get('x-vercel-ip-country') || 
                  req.headers.get('cf-ipcountry') || 
                  req.headers.get('geoip-country') || ''

  // Se in Italia -> redirect a /ita
  if (country.toUpperCase() === 'IT') {
    url.pathname = '/ita'
    return NextResponse.redirect(url)
  }

  // Altrimenti resta su / (inglese)
  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // attivo solo sulla root
}
