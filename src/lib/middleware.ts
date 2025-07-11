import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname); // ✅ redirect after login
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
   matcher: [
    "/my-college/:path*",
    "/colleges/:path*",
    "/profile/:path*",
    "/admission/:path*"
  ],
}
