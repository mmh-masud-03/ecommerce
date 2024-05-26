import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const { query } = params;
    const searchedProducts = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        {
          category: { $regex: query, $options: "i" },
        },
      ],
    });
    if (searchedProducts.length === 0) {
      return new Response(JSON.stringify("No products found"), { status: 404 });
    }
    return new Response(JSON.stringify(searchedProducts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Error searching product"), { status: 500 });
  }
};
