import mongoose from "mongoose";

import { Schema } from "mongoose";

// Define the schema for options
const optionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

// Custom validator to check the length of the options array
export function arrayLimit(val) {
  return val.length === 3;
}

const questionSchema = new Schema({
  questionText: {
    type: String,
    required: true,
    index: true,
  },
  options: {
    type: [optionSchema], // Array of option subdocuments
    validate: [arrayLimit, "{PATH} must have exactly 3 options"], // Custom validator to ensure there are exactly 3 options
  },
  correctOption: {
    type: Number,
    required: true,
    min: 0,
    max: 2, // Ensure correctOption is a valid index (0, 1, or 2)
    validate: {
      validator: function (value) {
        return (
          this.options && this.options.length === 3 && value >= 0 && value < 3
        );
      },
      message: "Correct option index must be between 0 and 2",
    },
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
