import { cookies } from 'next/headers';
import Cookies from 'js-cookie';

export async function GET(req) {
  try {
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Set the maxAge to 0 to remove the cookie
      path: '/',
    };

    cookies().set('authToken', '', cookieOptions);

    Cookies.remove('user');

    return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
      status: 200,
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}