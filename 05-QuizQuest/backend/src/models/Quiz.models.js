import mongoose from "mongoose";

import { Schema } from "mongoose";

import { arrayLimit } from "./question.models.js";

// Defining the schema for the quiz

const quizSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    questions: {
      type: [Schema.Types.ObjectId],
      ref: "Question",
      required: true,
      validate: {
        validator: (questions) => questions.length <= arrayLimit,
        message: "Quiz must have a maximum of 10 questions.",
      },
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
