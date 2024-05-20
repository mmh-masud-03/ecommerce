import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("userId");

  const { pathname } = request.nextUrl;
  console.log(pathname, token);
  if (
    pathname === "/user/profile" ||
    pathname === "/user/cart" ||
    pathname === "/user/orders" ||
    (pathname === "/user/wishlist" && !token)
  ) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  return NextResponse.next();
}
