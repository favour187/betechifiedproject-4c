const errorHandler = (err, req, res, next) => {
  console.error(err.stack || err);

  const statusCode = Number.isInteger(err.statusCode)
    ? err.statusCode
    : Number.isInteger(err.status)
      ? err.status
      : 500;

  const status = statusCode >= 400 && statusCode < 600 ? statusCode : 500;
  const message = status === 500 ? "Internal server error" : err.message;

  res.status(status).json({ message });
};

module.exports = errorHandler;
