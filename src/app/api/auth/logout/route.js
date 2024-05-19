import { serialize } from "cookie";

export const POST = async (req, res) => {
  const serialized = serialize("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return new Response("Logged out", { status: 200 });
};
