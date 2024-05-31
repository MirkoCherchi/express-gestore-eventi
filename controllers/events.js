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

const store = async (req, res) => {
  try {
    const { title, description, date, maxSeats } = req.body;

    const newEvent = new EventModel(null, title, description, date, maxSeats);

    const events = await EventModel.allStaticEvents();

    events.push(newEvent);

    await EventModel.saveEvents(events);

    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
