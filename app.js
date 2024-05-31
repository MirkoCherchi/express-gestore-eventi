// Express
const express = require("express");
const app = express();

// Port
const PORT = 3000;

// Router eventi
const eventsRoutes = require("./routes/events.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Gestore Eventi</h1>`);
});
app.use("/events", eventsRoutes);

// Avvio Server
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
