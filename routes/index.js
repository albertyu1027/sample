const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const Participants = require("../models/participants")

// API Routes
router.use("/api", apiRoutes);

module.exports = router;