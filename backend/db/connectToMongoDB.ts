// The below code is used to connect to mongodb database

import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("connected to MongoDB");
  } catch (error: any) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
