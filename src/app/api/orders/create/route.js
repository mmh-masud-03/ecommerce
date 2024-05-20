import connectDB from "@/mongodb";
import Order from "@/models/Order";
import User from "@/models/User";
import Product from "@/models/Product";

export const POST = async (req, res) => {
  try {
    await connectDB();

    const body = await req.json();
    const { userId, products, paymentIntent } = body;

    if (!userId || !products || products.length === 0) {
      return new Response(
        JSON.stringify({ error: "userId and products are required" }),
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Validate products
    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return new Response(
          JSON.stringify({
            error: `Product with id ${item.productId} not found`,
          }),
          { status: 404 }
        );
      }
      if (item.quantity > product.stock) {
        return new Response(
          JSON.stringify({
            error: `Quantity of ${product.name} exceeds the available stock`,
          }),
          { status: 400 }
        );
      }
    }

    const newOrder = new Order({
      user: userId,
      products: products.map((item) => ({
        product: item.productId,
        quantity: item.quantity,
      })),
      paymentIntent: paymentIntent || {},
      orderStatus: "Not Processed",
    });

    await newOrder.save();

    // Update product stock
    for (const item of products) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error placing order" }), {
      status: 500,
    });
  }
};
