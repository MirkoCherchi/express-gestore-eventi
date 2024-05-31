const index = (req, res) => {
  res.send("Sono L'index");
};

const store = (req, res) => {
  res.send("Sono lo Store");
};

const update = (req, res) => {
  res.send("Sono l'update");
};

module.exports = {
  index,
  store,
  update,
};
