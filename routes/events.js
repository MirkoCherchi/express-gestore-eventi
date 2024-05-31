const express = require("express");
const router = express.Router();

// Controller Eventi
const eventController = require("../controllers/events.js");

//Middleware
const checkEventExists = require("../middlewares/checkEventExists");
const validateEvent = require("../middlewares/validateEvent");

// Rotte Eventi
router.get("/", eventController.index); // Tutti gli Eventi
router.get("/:id", checkEventExists, eventController.show); // Singolo Evento
router.post("/", validateEvent, eventController.store); // Crea nuovo Evento
router.put("/:id", checkEventExists, validateEvent, eventController.update); // Aggiorna l'Evento

module.exports = router;
