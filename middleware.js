import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
export default middleware = async (req, res) => {
  const token = req.cookies.authToken;
  if (!token) {
    return NextResponse.redirect("/login");
  }
  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect("/login");
  }
};
export const config = {
  matcher: /^\/profile/,
};
