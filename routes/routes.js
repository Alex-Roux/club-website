const express = require("express");
const router = new express.Router();
const controller = require("../controllers/routeController");
const { requireAuth } = require("../middleware/authentication");

// Pages list
router.get("/",      controller.mainIndex);
router.get("/page2", controller.mainPage2);
router.get("/page3", controller.mainPage3);
router.get("/contact", /*requireAuth, */controller.contactPage);

module.exports = router;