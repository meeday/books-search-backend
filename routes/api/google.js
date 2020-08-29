const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("https://booksfronend123.web.app/")
  .get(googleController.findAll);

module.exports = router;
