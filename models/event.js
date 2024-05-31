const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../db/events.json");

class EventModel {
  static lastId = 0;

  constructor(id, title, description, date, maxSeats) {
    this.id = id || EventModel.getNextId();
    this.title = title;
    this.description = description;
    this.date = date;
    this.maxSeats = maxSeats;
  }

  static getNextId() {
    EventModel.lastId = (EventModel.lastId || 0) + 1;
    return EventModel.lastId;
  }

  //   Otteniamo tutti gli eventi dal file JSON
  static allStaticEvents() {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }

  //   Salviamo tutti gli eventi nel fil JSON
  static saveEvents(events) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(events, null, 2), (err) => {
        if (err) {
          reject(err);
        } else {
          // Se non ci sono eventi, reinizializza lastId a 0
          if (events.length === 0) {
            EventModel.lastId = 0;
          }
          resolve();
        }
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          const events = JSON.parse(data);
          const event = events.find((event) => event.id === parseInt(id));
          resolve(event);
        }
      });
    });
  }
}

module.exports = EventModel;
