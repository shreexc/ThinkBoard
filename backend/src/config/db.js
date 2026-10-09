import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected successfully.");
  } catch (error) {
    console.log("Error connecting to database. Try again later!", error);
    process.exit(1) // the status code 1 means to exit with failure/error
  }
};