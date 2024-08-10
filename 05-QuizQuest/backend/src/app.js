import express from "express";

// importing routes
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";

const app = express();

// Middleware to validate request body [CORS]
app.use(express.json());

// router - api end points
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

export default app;
