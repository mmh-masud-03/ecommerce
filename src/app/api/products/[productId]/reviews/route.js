import connectDB from "@/mongodb";
import Review from "@/models/Review";
export const GET = async (req, res) => {
  try {
    await connectDB();
    const allReviews = await Review.find();
    return new Response(JSON.stringify(allReviews), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify("Error fetching reviews"), {
      status: 500,
    });
  }
};
