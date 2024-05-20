import { cookies } from "next/headers";
import Cookies from "js-cookie";

export async function GET(req) {
  try {
    // Define the options for cookie removal
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0), // Expire the cookie immediately
      path: "/",
    };

    // Set the authToken cookie to expire immediately
    cookies().set("authToken", "", cookieOptions);

    // Remove the user cookie from the client-side using js-cookie
    Cookies.remove("user");

    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
