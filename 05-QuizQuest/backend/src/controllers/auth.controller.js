import User from "../models/user.models.js";

// # Register a new user

export const registerNewUser = async (req, res, next) => {
  const { fullname, username, email, password } = req.body;
  // validate
  const requiredFields = ["fullname", "username", "email", "password"];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    next(`Please provide ${missingFields.join(", ")}`);
  }

  // Email already registered, please login
  // check for exisiting email address
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    next("Email already registered, please login");
  }

  // check for exisiting username
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    next("Username already taken, please try again");
  }

  // create a new user
  const newUser = await User.create({
    fullname,
    username,
    email,
    password,
    userType: req.body.userType || "user",
  });

  // token for the new user
  const token = newUser.createJWT();

  res.status(201).send({
    success: true,
    message: "User registered successfully",
    newUser: {
      fullname: newUser.fullname,
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      userType: newUser.userType,
    },
    token,
  });
};

// #  Login for existing user
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    next(`Please fill all required fields`);
  }

  // find user by email
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    next("Invalid credentials");
  }

  // compare password
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    next("Invalid credentials");
  }

  user.password = undefined;

  // generate token
  const token = user.createJWT();

  res.status(200).json({
    success: true,
    message: "login successful",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      userType: user.userType,
    },
    token,
  });
};
