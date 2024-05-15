import connectDB from "@/mongodb";
import User from "@/models/User";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
export const POST = async (req, res) => {
  const body = await req.json();
  const { email, password } = body;
  try {
    await connectDB();
    if (!email || !password) {
      return new Response("Username and password required", { status: 400 });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return new Response("Invalid crednetials", { status: 400 });
    }
    const isMatched = await compare(password, user?.password);
    if (!isMatched) {
      return new Response("Invalid credentials", { status: 400 });
    }
    if (isMatched) {
      const token = generateToken(user);
      return new Response(JSON.stringify(user, token), { status: 200 });
    }
  } catch (err) {
    return new Response(err, { status: 500 });
  }
};
