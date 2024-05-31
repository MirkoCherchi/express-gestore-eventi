const handle404Error = (req, res, next) => {
  res.status(404).json({ error: "Resource not found" });
};

module.exports = handle404Error;
