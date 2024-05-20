import connectDB from "@/mongodb";
import User from "@/models/User";
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const userId = params.userId;
    const user = await User.findById(userId);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Error fetching user"), { status: 500 });
  }
};
