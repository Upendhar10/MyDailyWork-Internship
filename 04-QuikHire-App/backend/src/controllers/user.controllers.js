import User from "../models/user.models.js";

// # Update user details
export const updateUserData = async (req, res, next) => {
  const { fullname, about, location, Skills, workExperience, Education } =
    req.body;

  /*
  not required but, good to have
  if (
    !fullname ||
    !about ||
    !location ||
    !Skills ||
    !workExperience ||
    !Education
  ) {
    next(`Please fill all required fields`);
  }
  
  */

  const CurrentUser = await User.findOne({ _id: req.user.userId });
  console.log(CurrentUser);

  if (!CurrentUser) {
    next("User not found");
  }

  CurrentUser.fullname = fullname;
  CurrentUser.about = about;
  CurrentUser.location = location;
  CurrentUser.Skills = Skills;
  CurrentUser.workExperience = workExperience;
  CurrentUser.Education = Education;

  await CurrentUser.save();

  // re-generate the token after updating the user details
  const token = CurrentUser.createJWT();

  res.status(200).json({
    CurrentUser,
    token,
  });
};

// get user data from body {Register form}

export const getUserData = async (req, res) => {
  try {
    const CurrentUser = await User.findOne({ _id: req.body.user.userId });
    CurrentUser.password = undefined;

    if (!CurrentUser) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: CurrentUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Authentication Error",
      success: false,
      error: error.message,
    });
  }
};
