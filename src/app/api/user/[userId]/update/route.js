import connectDB from "@/mongodb";
import User from "@/models/User";

export const POST = async (req, { params }) => {
  try {
    const userId = params.userId;
    const body = await req.json();
    const { username } = body;
    await connectDB();
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username },
      { new: true }
    );
    if (!updatedUser) {
      return new Response(JSON.stringify("User not found"), { status: 404 });
    }
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (err) {
    console.error("Error updating user:", err);
    return new Response(JSON.stringify("Error updating user"), { status: 500 });
  }
};
