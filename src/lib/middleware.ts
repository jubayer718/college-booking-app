import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";




const middleware =async (req:NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // List of protected routes
  const protectedRoutes = ["/my-college", "/profile", "/admission"];

  const isProtected = protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
  
  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
};

export const config = {
  matcher:["/my-college", "/profile", "/admission"]
}
export default middleware;