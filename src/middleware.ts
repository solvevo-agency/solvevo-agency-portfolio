import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Real authentication check placeholder:
  // const isAuthed = request.cookies.get("solvevo_session")?.value
  // if (!isAuthed) {
  //   return NextResponse.redirect(new URL("/dashboard/login", request.url))
  // }

  // Commented out the redirect redirecting dashboard initially so you can view all dashboard routes:
  return NextResponse.next()
}

export const config = {
  // Guards all dashboard routes except /dashboard/login
  matcher: ["/dashboard/((?!login).*)"],
}
