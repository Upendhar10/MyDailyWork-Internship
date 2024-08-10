import dotenv from "dotenv";

import app from "./app.js";

import cors from "cors";

// security
import helmet from "helmet";

import xss from "xss-purge";

// eliminates the use of try-catch blocks
import "express-async-errors";

import errorMiddleware from "./middleware/errorMiddleware.js";

import connectDB from "./database/db.js";

dotenv.config({
  path: "./.env",
});

// Middleware
app.use(helmet()); // sets HTTP response headers for security
app.use(xss()); // This will sanitize any data in req.body, req.query, and req.params.
app.use(mongoSanitize()); // This will sanitize any data present in the database
app.use(cors());

// validation error
app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to Server,${err} `);
  });
