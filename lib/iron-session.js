import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import Cookies from "js-cookie";

export const ironOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "authToken", // Use the same cookie name you set for the JWT token
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const withSessionRoute = withIronSessionApiRoute(
  ironOptions,
  async ({ req, res }) => {
    // ... your API route logic here
    const authToken = Cookies.get("authToken", { req, res });
    // ... use the authToken for authentication/authorization
  }
);

export const withSessionSsr = withIronSessionSsr(
  ironOptions,
  async ({ req, res }) => {
    // ... your server-side rendering logic here
    const authToken = Cookies.get("authToken", { req, res });
    // ... use the authToken for authentication/authorization
  }
);
