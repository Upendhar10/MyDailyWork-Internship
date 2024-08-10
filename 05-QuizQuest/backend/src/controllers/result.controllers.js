import Result from "../models/result.models.js";

// # Show result for a quiz

export const createResult = async (req, res) => {
  const { username, TotalScore, correctAnswersCount, wrongAnswersCount } =
    req.body;

  if (!username || !TotalScore || !correctAnswersCount || !wrongAnswersCount) {
    next("Please fill all required fields");
  }

  const newResult = new Result({
    username,
    TotalScore,
    correctAnswersCount,
    wrongAnswersCount,
  });

  await newResult.save();

  res.status(201).json({
    success: true,
    message: "Result created successfully!",
    data: newResult,
  });
};
