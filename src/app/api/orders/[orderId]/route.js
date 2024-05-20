import connectDB from "@/mongodb";
import Order from "@/models/Order";
export const GET = async (req, res) => {
  try {
    await connectDB();
    const { orderId } = req.query;
    const orderDetails = await Order.findById(orderId);
    return new Response(JSON.stringify(orderDetails), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Error fetching order details"), {
      status: 500,
    });
  }
};
