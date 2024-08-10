import Job from "../models/job.models.js";

import { getFilteredJobs } from "../controllers/aggregation.controllers.js";

// # Create a new Job
export const createNewJob = async (req, res, next) => {
  const { jobTitle, company, Skills, Salary } = req.body;

  if (!jobTitle || !company || !Skills || !Salary) {
    next("Please fill all required fields");
  }

  console.log(req.user.userType);

  if (req.user.userType != "Recruiter") {
    next("Only Recruiter can post jobs");
    return;
  }

  req.body.createdBy = req.user.userId;

  const newJob = await Job.create(req.body);

  res.status(201).json({ newJob });
};

// # Get all Jobs

export const getAllJobs = async (req, res) => {
  // const params = req.params;
  // console.log(params);

  // const Alljobs = await Job.find();
  // res.status(200).json({
  //   "Total Jobs": Alljobs.length,
  //   Alljobs,
  // });

  getFilteredJobs(req, res);
};

// # Update a Job

export const updateJob = async (req, res, next) => {
  const { id } = req.params;
  // console.log(id);

  const { jobTitle, company, Skills } = req.body;

  // validation
  if (!jobTitle || !company || !Skills) {
    next("Please fill all required fields");
  }

  const job = await Job.findOne({ _id: id });

  if (!job) {
    next(`No jobs found with this JobId : ${id}`);
  }

  // check authorization
  if (req.user.userId != job.createdBy.toString()) {
    next("You are not authorized to update this Job.");
    return;
  }

  const updateJob = await Job.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ updateJob });
};

// # Delete a Job

export const deleteJob = async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findOne({ _id: id });

  if (!job) {
    next(`No jobs found with this JobId : ${id}`);
  }

  console.log(req.user.userId);

  // check authorization
  if (req.user.userId != job.createdBy.toString()) {
    next("You are not authorized to delete this Job.");
    return;
  }

  await job.deleteOne();

  res.status(200).json({ message: "Job deleted successfully" });
};
