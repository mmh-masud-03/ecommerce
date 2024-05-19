import connectDB from "@/mongodb";
import Order from "@/mongodb/models/Order";
import User from "@/mongodb/models/User";
import { getSession } from "next-auth/client";
export const GET = async (req, res) => {
  try {
    await connectDB();
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await User.findOne({ email: session.user.email });
  } catch (err) {}
};
