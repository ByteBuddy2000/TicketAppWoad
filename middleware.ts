import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Middleware to protect ONLY /admin routes for admins
export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // Allow access to the sign-in page and homepage without auth
  if (
    pathname.startsWith("/sign-in") ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Only protect /admin routes
  if (pathname.startsWith("/admin")) {
    // If not logged in, redirect to sign-in
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    // If logged in but not an admin, redirect to sign-in (or a 403 page if you want)
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/sign-in", req.url));
      // Or: return NextResponse.redirect(new URL("/not-authorized", req.url));
    }
    // If logged in and admin, allow access
    return NextResponse.next();
  }

  // All other routes are public, no auth required
  return NextResponse.next();
}

// Only apply middleware to /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
