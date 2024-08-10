import express from "express";

import { userAuth } from "../middleware/authMiddleware.js";

import {
  createNewJob,
  getAllJobs,
  updateJob,
  deleteJob,
} from "../controllers/job.controllers.js";

const router = express.Router();

// Job routes

// post a new job
router.post("/create-job", userAuth, createNewJob);
// get all jobs
router.get("/get-All-jobs", userAuth, getAllJobs);
// update a particular job using id
router.put("/update-job/:id", userAuth, updateJob);
// delete a particular job using id
router.delete("/delete-job/:id", userAuth, deleteJob);

export default router;
