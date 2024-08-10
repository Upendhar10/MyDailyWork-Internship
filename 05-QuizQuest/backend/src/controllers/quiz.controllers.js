import Quiz from "../models/Quiz.models.js";

// # Create a new Quiz

export const createNewQuiz = async (req, res, next) => {
  const { title, description, questions } = req.body;

  if (!title || !description || !questions) {
    next("Please provide all required fields");
  }

  req.body.createdBy = req.user.userId;

  const newQuiz = await Quiz.create(req.body);

  res.status(201).json({ newQuiz });
};

// # delete a Quiz

export const deleteQuiz = async (req, res, next) => {
  const { id } = req.params;

  const quiz = await Quiz.findOne({ _id: id });

  if (!quiz) {
    next(`No Quizz found with  this QuizId : ${id}`);
  }

  // check authorization
  if (req.user.userId != quiz.createdBy.toString()) {
    next(`You are not authorized to delete this Quiz`);
    return;
  }

  await quiz.deleteOne();
  res.status(200).json({ message: "Quiz deleted successfully" });
};
