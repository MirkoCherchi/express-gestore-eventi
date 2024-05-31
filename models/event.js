const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../db/events.json");

class Event {
  constructor(id, title, description, date, maxSeats) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.maxSeats = maxSeats;
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
          resolve();
        }
      });
    });
  }
}

module.exports = Event;