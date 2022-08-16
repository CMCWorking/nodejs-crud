const models = require("../models");

exports.createUser = async (req, res) => {
	try {
		const user = await models.User.create(req.body);
		return res.status(201).json({
			user,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.findAll = async (req, res) => {
	try {
		const users = await models.User.findAll();
		return res.status(200).json({
			users,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
