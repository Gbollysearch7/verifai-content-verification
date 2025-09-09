import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

//redirects https://exa-hallucination-detector.vercel.app to demo.exa.ai/hallucination-detector
export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  if (host === 'exa-hallucination-detector.vercel.app') {
    return NextResponse.redirect('https://demo.exa.ai/hallucination-detector', {
      status: 301,
    });
  }
  return NextResponse.next();
}
export const config = {
  matcher: '/:path*'
} 
