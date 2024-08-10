const errorMiddleware = (err, req, res, next) => {
  console.log(err);

  // default error object
  const defaultError = {
    message: err || "Something went wrong",
    statusCode: err.statusCode || 500,
  };

  // # custom error handler
  // missing fields validator
  if (err.name === "ValidationError") {
    defaultError.statusCode = 400;
    defaultError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }

  // duplicator fields error
  if (err.code && err.code === 1100) {
    defaultError.statusCode = 400;
    defaultError.message = `${object.keys(
      err.keyValue
    )} field should be unique!`;
  }

  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

export default errorMiddleware;
