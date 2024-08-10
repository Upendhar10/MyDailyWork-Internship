import User from "../models/user.models.js";

// # Update user details
export const updateUser = async (req, res, next) => {
  const { fullname } = req.body;

  const CurrentUser = await User.findOne({ _id: req.user.userId });
  console.log(CurrentUser);

  if (!CurrentUser) {
    next("User not found");
  }

  CurrentUser.fullname = fullname;

  await CurrentUser.save();

  // re-generate the token after updating the user details
  const token = CurrentUser.createJWT();

  res.status(200).json({
    CurrentUser,
    token,
  });
};
