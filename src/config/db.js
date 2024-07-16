import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connecteDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connecting to db");
  } catch (error) {
    console.log("Error connecting :" + error.message);
  }
};
