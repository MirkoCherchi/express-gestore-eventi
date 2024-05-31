// Express
const express = require("express");
const app = express();

// Port
const PORT = 3000;

// Router eventi
const eventsRoutes = require("./routes/events.js");
const handle404Error = require("./middlewares/handle404Error.js");
const handle500Error = require("./middlewares/handle500Error.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Gestore Eventi</h1>`);
});
app.use("/events", eventsRoutes);

// Middleware per gestire l'errore 404
app.use(handle404Error);

// Middleware per gestire l'errore 500
app.use(handle500Error);

// Avvio Server
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
