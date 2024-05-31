const express = require("express");
const router = express.Router();

// Controller Eventi
const eventController = require("../controllers/events.js");

// Rotte Eventi
router.get("/", eventController.index); //Tutti gli Eventi
router.get("/:id", eventController.show); //Singolo Evento
router.post("/", eventController.store); //Crea nuovo Evento
router.put("/:event", eventController.update); //Aggiorna l'Evento

module.exports = router;
