const express = require("express");
const router = express.Router();
const controllers = require("../controllers/post");

router.get("/", controllers.getAllPosts);
router.post("/", controllers.createPost);
router.get("/:postId", controllers.getPostById);
router.put("/:postId", controllers.updatePost);
router.delete("/:postId", controllers.deletePost);

module.exports = router;
