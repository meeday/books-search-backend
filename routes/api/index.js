const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
router.use("https://booksfronend123.web.app/books", bookRoutes);

// Google Routes
router.use("https://booksfronend123.web.app/google", googleRoutes);

// For anything else, render the html page
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
