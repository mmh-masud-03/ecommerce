import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const GET = async (req, { params }) => {
  const productId = params.productId;
  try {
    await connectDB();
    const product = await Product.findById(productId);
    if (!product) {
      return new Response(JSON.stringify("Product not found"), { status: 404 });
    }
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Internal error"), { status: 500 });
  }
};
