/* eslint-disable @typescript-eslint/no-explicit-any */
import {auth} from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export default auth((req: NextRequest & {auth : any }) => {
  const publicRoute = ['/', '/login', '/register', '/colleges'];
  const pathname = req.nextUrl.pathname;


  if (publicRoute.includes(pathname)) {
    return NextResponse.next();
  }

  // if (pathname.startsWith("/admission")) {
  //   return NextResponse.next();
  // }

  if (!req.auth) {
    const loginUrl = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl)
    
  }

  return NextResponse.next();
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}