import express from "express";

// importing routes
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import jobRoute from "./routes/job.routes.js";
import aggregationRoute from "./routes/aggregation.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/jobs/aggregation", aggregationRoute);

export default app;
