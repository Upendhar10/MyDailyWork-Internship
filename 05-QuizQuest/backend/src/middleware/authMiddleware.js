import JWT from "jsonwebtoken";
import User from "../models/user.models.js";

// # user Authorization
export const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    next("Authorization Failed");
  }

  const token = authHeader.split(" ")[1]; // second value of array

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);

    const payloadData = await User.findById(payload.userId);

    req.user = {
      userId: payloadData._id,
      userType: payloadData.userType,
    };

    console.log(`authMiddleware : ${req.user.userId}`);

    next();
  } catch (err) {
    next("Authorization Failed");
  }
};
