import express from "express";

import { userAuth } from "../middleware/authMiddleware.js";

import { jobstats, getMyJobs } from "../controllers/aggregation.controllers.js";

const router = express.Router();

// aggregation routes

router.get("/get-job-stats", userAuth, jobstats);
router.get("/get-my-jobs", userAuth, getMyJobs);

export default router;
