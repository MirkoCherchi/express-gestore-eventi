const EventModel = require("../models/event.js");
const { CustomError } = require("../utils.js");

module.exports = async (req, res, next) => {
  const id = req.params.id;
  try {
    const event = await EventModel.findById(id);
    if (!event) {
      throw new CustomError(`Could not find an event with ID: ${id}`, 404);
    }
    next();
  } catch (error) {
    next(error);
  }
};
