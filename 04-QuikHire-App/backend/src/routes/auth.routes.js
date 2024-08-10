import express from "express";

import { registerNewUser, loginUser } from "../controllers/auth.controllers.js";

import { rateLimit } from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// # Authenication routes
router.post("/register", limiter, registerNewUser);
router.post("/login", limiter, loginUser);

export default router;
