import { NextResponse } from "next/server";

// The Keystatic editor uses local (filesystem) storage, which only works on the
// dev server. Hide the admin UI and its API from the deployed site so the editor
// is never publicly reachable in production.
export function proxy() {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/keystatic", "/keystatic/:path*", "/api/keystatic/:path*"],
};
