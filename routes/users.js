const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user");

/* GET users listing. */
router.get("/", controllers.findAll);

router.post("/", controllers.createUser);

module.exports = router;
