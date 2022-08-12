const router = require("express").Router();

var posts = [
	{ id: 1, title: "Nodejs cơ bản" },
	{ id: 2, title: "Học vuejs" },
	{ id: 3, title: "Javascrip" },
];

router.get("/", (req, res) => {
	res.render("index", {
		posts: posts,
	});
});

router.get("/search", (req, res) => {
	var id = req.query.id;
	var data = posts.filter((item) => {
		return item.id === parseInt(id);
	});
	res.render("index", {
		posts: data,
	});
});

module.exports = router;
