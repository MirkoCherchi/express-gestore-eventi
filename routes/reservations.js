const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservations");

router.get("/", reservationController.index);
router.post("/", reservationController.store);
router.delete("/:reservationId", reservationController.destroy);

module.exports = router;
