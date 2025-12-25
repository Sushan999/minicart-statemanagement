import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) return console.log("No mongodb uri found");
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
