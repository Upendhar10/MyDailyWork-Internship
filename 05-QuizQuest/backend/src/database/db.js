// Importing mongoose from mongoose

import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MonogoDB Connected! , DB host : ${connectionInstance.connection.host}`
    );

    return connectionInstance;
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error}`);
    process.exit(1);
  }
};

export default connectDB;
