import connectDB from "@/mongodb";
import Product from "@/models/Product";

export const POST = async (req, res) => {
  const body = await req.json();
  const { name, price, description, imageUrl, category, stock } = body;
  try {
    await connectDB();
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return new Response(JSON.stringify("Product already exists"));
    }
    const newProduct = await Product.create({
      name,
      price,
      description,
      imageUrl,
      category,
      stock,
    });
    return new Response(JSON.stringify(newProduct), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify("Error creating product"), {
      status: 500,
    });
  }
};
