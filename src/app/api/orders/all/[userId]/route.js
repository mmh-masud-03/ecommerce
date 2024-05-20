import connectDB from "@/mongodb";
import Order from "@/models/Order";
import User from "@/models/User";
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const userId = params.userId;
    const orders = await Order.find({ user: userId })
      .populate("user", "name email")
      .exec();
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Error fetching orders"), {
      status: 500,
    });
  }
};
