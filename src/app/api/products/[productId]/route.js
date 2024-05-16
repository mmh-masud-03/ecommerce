import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const GET = async (req, { params }) => {
  const productId = params.productId;
  try {
    await connectDB();
    const product = await Product.findById(productId);
    if (!product) {
      return new Response("Product not found");
    }
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new Response("Internal error", { status: 500 });
  }
};
