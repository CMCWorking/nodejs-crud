const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user");

/* GET users listing. */
router.get("/", controllers.getAllUsers);
router.post("/", controllers.createUser);
router.get("/:userId", controllers.getUserById);
router.put("/:userId", controllers.updateUser);
router.delete("/:userId", controllers.deleteUser);

module.exports = router;
