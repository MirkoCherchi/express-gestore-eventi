const ReservationModel = require("../models/reservation.js");

let reservations = [];

// Funzione per visualizzare tutte le prenotazioni
const index = (req, res) => {
  res.json(reservations);
};

// Funzione per creare una nuova prenotazione
const store = (req, res) => {
  const { firstName, lastName, email, eventId } = req.body;
  const id = reservations.length + 1; // Generiamo un ID incrementale
  const newReservation = { id, firstName, lastName, email, eventId };
  reservations.push(newReservation);
  res.status(201).json(newReservation);
};

// Funzione per eliminare una prenotazione esistente
const destroy = (req, res) => {
  const { reservationId } = req.params;
  reservations = reservations.filter(
    (reservation) => reservation.id !== parseInt(reservationId)
  );
  res.json({ message: "Reservation deleted successfully" });
};

module.exports = {
  index,
  store,
  destroy,
};
