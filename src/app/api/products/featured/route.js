import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const GET = async (req, res) => {
  try {
    await connectDB();

    const filteredProducts = await Product.find({ isFeatured: true });

    return new Response(JSON.stringify(filteredProducts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Error fetching products"), {
      status: 500,
    });
  }
};
