const router = require("express").Router();
const participantRoutes = require("./participantRoutes");
// Book routes
router.use("/participants", participantRoutes);
module.exports = router;