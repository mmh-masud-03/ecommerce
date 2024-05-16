import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const searchParams = req.nextUrl.searchParams;

    const category = searchParams.get("category");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

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

    return new Response(JSON.stringify(filteredProducts), { status: 200 });
  } catch (err) {
    return new Response("Error fetching products", { status: 500 });
  }
};
