import mongoose from "mongoose";

let isConnected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
