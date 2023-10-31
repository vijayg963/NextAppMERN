import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  console.log('check req ===>', request);
  console.log('check res ===>', response);
  // return NextResponse.redirect(new URL('/name', request.url));
}

// See "Matching Paths" below to learn more
