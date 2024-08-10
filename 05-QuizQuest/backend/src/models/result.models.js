import mongoose from "mongoose";
import { Schema } from "mongoose";

// Define the schema for results
const resultSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    TotalScore: {
      type: Number,
      required: true,
      default: 0,
    },
    correctAnswersCount: {
      type: Number,
      default: 0,
    },
    wrongAnswersCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);

export default Result;
