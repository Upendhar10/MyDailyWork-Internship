import mongoose from "mongoose";

import Job from "../models/job.models.js";

import moment from "moment";

// job stats

export const jobstats = async (req, res) => {
  console.log(`jobstats : ${req.user.userId}`);

  const userID = String(req.user.userId);

  const userId = new mongoose.Types.ObjectId(userID);

  const stats = await Job.aggregate([
    // search by user jobs

    {
      $match: {
        createdBy: userId,
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  // default stats
  const defaultStats = {
    NotApplied: stats.find((stat) => stat._id === "NotApplied")?.count || 0,
    pending: stats.find((stat) => stat._id === "pending")?.count || 0,
    rejected: stats.find((stat) => stat._id === "rejected")?.count || 0,
    shortlisted: stats.find((stat) => stat._id === "shortlisted")?.count || 0,
    interview: stats.find((stat) => stat._id === "interview")?.count || 0,
  };

  // monthly yearly stats

  let monthlyApplications = await Job.aggregate([
    {
      $match: {
        createdBy: userId,
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        "_id.year": -1,
        "_id.month": -1,
      },
    },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res
    .status(200)
    .json({ totalJobs: stats.length, defaultStats, monthlyApplications });
};

export const getFilteredJobs = async (req, res) => {
  const { status, workType, workMode, search, sort } = req.query;

  // conditions for searching
  const queryObject = {
    // createdBy: req.user.userId,
  };

  // filter jobs - search logic

  if (status && status !== "all") {
    queryObject.status = status;
  }

  if (workType && workType !== "all") {
    queryObject.workType = workType;
  }

  if (workMode && workMode !== "all") {
    queryObject.workMode = workMode;
  }

  if (search) {
    queryObject.jobTitle = { $regex: search, $options: "i" };
  }

  let queryResult = Job.find(queryObject);

  // filter jobs - sorting

  if (sort === "latest") {
    queryResult.sort({ createdAt: -1 });
  }

  if (sort === "oldest") {
    queryResult.sort({ createdAt: 1 });
  }

  if (sort === "a-z") {
    queryResult.sort("jobTitle");
  }

  if (sort === "z-a") {
    queryResult.sort({ jobTitle: -1 });
  }

  // pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  queryResult = queryResult.skip(skip).limit(limit);

  // Jobs Count
  const totalJobsCount = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobsCount / limit);

  const jobs = await queryResult;

  res.status(200).json({
    totalJobsCount,
    jobs,
    numOfPages,
  });
};

export const getMyJobs = async (req, res) => {
  // conditions for searching
  const queryObject = {
    createdBy: req.user.userId,
  };

  let queryResult = Job.find(queryObject);

  // Jobs Count
  const totalJobsCount = await Job.countDocuments(queryObject);

  const MyJobs = await queryResult;

  res.status(200).json({
    totalJobsCount,
    MyJobs,
  });
};
