import express from "express";

import {
  updateUserData,
  getUserData,
} from "../controllers/user.controllers.js";

import { userAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// User routes

router.put("/update-user-data", userAuth, updateUserData);
router.post("/get-user-data", userAuth, getUserData);

export default router;
