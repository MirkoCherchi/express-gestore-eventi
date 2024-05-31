const handle500Error = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: "Internal server error" });
};

module.exports = handle500Error;
