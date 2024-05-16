import connectDB from "@/mongodb";
import Review from "@/models/Review";

export const POST = async (req, res) => {
  try {
    await connectDB();
    const { rating, comment, userId } = await req.json();

    const newReview = await Review.create({
      user: userId,
      rating,
      comment,
    });

    return new Response(JSON.stringify(newReview), { status: 200 });
  } catch (err) {
    return new Response("Error creating review", { status: 500 });
  }
};
