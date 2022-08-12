var express = require("express");
var router = express.Router();

/* GET posts listing. */
router.get("/", (req, res, next) => {
  res.render("posts/index", { title: "Posts" });
});

module.exports = router;
