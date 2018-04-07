const router = require("express").Router();
const participantController = require("../../controllers/participantController");

// Matches with "/api/books"
router.route("/api")
  .get(participantController.findAll)
  .post(participantController.create);
// Matches with "/api/books/:id"
router
  .route("/:UserID")
  .get(participantController.findById);

  router
  .route("/email/:username")
  .get(participantController.findByUsername);

module.exports = router;