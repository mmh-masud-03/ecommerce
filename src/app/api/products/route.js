import connectDB from "@/mongodb";
import Product from "@/models/Product";
export const GET = async (req, res) => {
  try {
    await connectDB();
    const { category, minPrice, maxPrice } = req.query;
    const filter = {};
    if (category) {
      filter.category = category;
    }
    if (minPrice && maxPrice) {
      filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    } else if (minPrice) {
      filter.price = { $gte: Number(minPrice) };
    } else if (maxPrice) {
      filter.price = { $lte: Number(maxPrice) };
    }
    const filteredProducts =
      Object.keys(filter).length === 0
        ? await Product.find()
        : await Product.find(filter);
    console.log(filteredProducts);
    return new Response(JSON.stringify(filteredProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching products:", err); // Log the error to the console
    return new Response("Error fetching products", { status: 500 }); // Include a status code to indicate a server error
  }
};
