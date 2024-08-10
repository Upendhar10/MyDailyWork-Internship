import Question from "../models/question.models.js";

// # Create a new

export const createQuestion = async (req, res, next) => {
  const { questionText, options, correctOption } = req.body;

  if (!questionText || !options || !correctOption) {
    next("Please provide all required fields");
  }

  const newQuestion = await Question.create(req.body);

  res.status(201).send({
    newQuestion,
  });
};

// delete a question

export const deleteQuestion = async (req, res, next) => {
    const {id} = req.params;
  const deletedQuestion = await Question.findByIdAndDelete(
    req.params.questionId
  );

  if (!deletedQuestion) {
    next("Question not found");
  }

  res.send({
    deletedQuestion,
  });
};

// # Update a question // not completed triickyy

export const updateQuestion = async (req, res, next) => {
  const { questionText, options, correctOption } = req.body;

  const updatedQuestion = await Question.findByIdAndUpdate(
    req.params.questionId,
    { questionText, options, correctOption },
    { new: true }
  );

  if (!updatedQuestion) {
    next("Question not found");
  }

  res.send({
    updatedQuestion,
  });
};
