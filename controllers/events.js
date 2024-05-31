const EventModel = require("../models/event.js");

const index = async (req, res) => {
  try {
    let events = await EventModel.allStaticEvents();
    if (req.query.title) {
      events = events.filter((event) => event.title.includes(req.query.title));
    }
    if (req.query.date) {
      events = events.filter((event) => event.date === req.query.date);
    }
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await EventModel.findById(eventId);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
  show,
};
