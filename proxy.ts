import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  // Never run protocol redirect logic for framework static assets/source maps.
  if (pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  const forwardedProto = request.headers.get("x-forwarded-proto");
  const proto = forwardedProto?.split(",")[0]?.trim().toLowerCase();

  if (proto === "http") {
    const httpsUrl = request.nextUrl.clone();
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
