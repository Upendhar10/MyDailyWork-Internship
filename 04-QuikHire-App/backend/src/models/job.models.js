import mongoose from "mongoose";

import { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Job Title is required"],
      maxlength: 100,
    },
    company: {
      type: String,
      required: [true, "Company Name is required"],
      maxlength: 100,
    },
    Skills: {
      type: [String],
      required: [true, "Skills are required"],
    },
    Salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    workType: {
      type: String,
      enum: ["Full Time", "Internship", "Freelance"],
      required: [true, "Work Type is required"],
      default: "Full Time",
    },
    WorkMode: {
      type: String,
      enum: ["Remote", "In-office", "Hybrid"],
      required: [true, "Work Mode is required"],
      default: "In-office",
    },
    WorkLocation: {
      type: String,
      default: "India",
    },
    status: {
      type: String,
      enum: ["NotApplied", "pending", "rejected", "shortlisted", "interview"],
      default: "NotApplied",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
