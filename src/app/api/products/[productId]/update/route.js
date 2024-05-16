import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const POST = async (req, { params }) => {
  try {
    const { productId } = params;
    const body = await req.json();
    const { name, price, description, imageUrl, category, stock } = body;

    await connectDB();
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price, description, imageUrl, category, stock },
      { new: true }
    );
    if (!updatedProduct) {
      return new Response("Not found", { status: 200 });
    }
    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Error updating product", { status: 500 });
  }
};
