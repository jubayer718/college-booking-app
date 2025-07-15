import {auth} from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export default auth((req: NextRequest) => {
  const publicRoute = ['/', '/login', '/register', '/colleges'];

  if (publicRoute.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!publicRoute.includes(req.nextUrl.pathname)) {
    const loginUrl = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl)
    
  }

  return NextResponse.next();
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}