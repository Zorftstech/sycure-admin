import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/', '/broadcast', '/'];

export function middleware(req: NextRequest) {
   const token = req.cookies.get('adminToken');
   const { pathname } = req.nextUrl;

   if (pathname.startsWith('/auth')) {
    return NextResponse.next();
  }

   console.log('Token:', token); // Debugging line
 
   if (protectedRoutes.includes(req.nextUrl.pathname)) {
     if (!token) {
       console.log('Redirecting to login'); // Debugging line
       return NextResponse.redirect(new URL('/auth/login', req.url));
     }
   }
   
   return NextResponse.next();
 }
 