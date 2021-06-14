const express = require("express");
const router = new express.Router();
const controller = require("../controllers/routeController");
//const { requireAuth } = require("../middleware/authentication");

// Pages list
router.get("/",      controller.mainIndex);
router.get("/teams", controller.mainTeams);

router.get("/teams/apex", controller.teamApex);
router.get("/teams/valorant", controller.teamValorant);

router.get("/events", controller.mainEvents);
router.get("/contact", /*requireAuth, */controller.contactPage);

module.exports = router;
