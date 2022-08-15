var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send("le kien hoanh");
});

module.exports = router;
