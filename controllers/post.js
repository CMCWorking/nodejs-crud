const models = require("../models");
const joi = require("joi");

exports.createPost = async (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const schema = joi.object().keys({
			title: joi.string().required(),
			slug: joi.string().required(),
			category_id: joi.number().required(),
			description: joi.string(),
		});

		const { error, value } = schema.validate(data);
		if (error) {
			console.log(error);
			return res.status(400).json({ error });
		}

		models.Post.create(data);

		return res.status(201).json({
			message: "Post created",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.getAllPosts = async (req, res) => {
	try {
		const posts = await models.Post.findAll();
		return res.status(200).json({
			posts,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.getPostById = async (req, res) => {
	try {
		const { postId } = req.params;
		const post = await models.Post.findOne({
			where: { id: postId },
		});

		if (post) return res.status(200).json({ post });

		throw new Error("Post not found");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.updatePost = async (req, res) => {
	try {
		const { postId } = req.params;
		const data = req.body;
		const schema = joi.object().keys({
			title: joi.string().min(3).required(),
			slug: joi.string().required(),
			category_id: joi.number().required(),
			description: joi.string(),
		});

		const { error, value } = schema.validate(data);

		if (error) {
			return res.status(400).json({ error });
		}

		const [updated] = await models.Post.update(data, {
			where: { id: postId },
		});

		if (updated) {
			await models.Post.findOne({
				where: { id: postId },
			});

			return res.status(200).json({ message: "Post updated" });
		}

		throw new Error("Post not found");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.deletePost = async (req, res) => {
	try {
		const { postId } = req.params;
		const deleted = await models.Post.destroy({
			where: { id: postId },
		});

		if (deleted) {
			return res.status(204).json({ message: "Post deleted" });
		}

		throw new Error("Post not found");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
