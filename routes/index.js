const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("https://booksfronend123.web.app/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile("https://booksfronend123.web.app/")
);

module.exports = router;
