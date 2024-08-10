import dotenv from "dotenv";

import morgan from "morgan";

import cors from "cors";

// security

import helmet from "helmet";

import xss from "xss-purge";

// eliminates the use of try-catch blocks
import "express-async-errors";

import app from "./app.js";

import mongoSanitize from "express-mongo-sanitize";

import errorMiddleware from "./middleware/errorMiddleware.js";

// Database configuration
import connectDB from "./database/db.js";

dotenv.config({
  path: "./.env",
});

// Middleware
app.use(helmet()); // sets HTTP response headers for security
app.use(xss()); // This will sanitize any data in req.body, req.query, and req.params.
app.use(mongoSanitize()); // This will sanitize any data present in the database
app.use(cors());
app.use(morgan("dev"));

// validation middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to Server,${err} `);
    process.exit(1);
  });
