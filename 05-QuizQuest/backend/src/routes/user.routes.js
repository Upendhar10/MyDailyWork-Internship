import express from "express";

import { updateUser } from "../controllers/user.controllers.js";

import { userAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// User routes

router.put("/user-update", userAuth, updateUser);

export default router;
