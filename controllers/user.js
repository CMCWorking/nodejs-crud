const models = require("../models");
const joi = require("joi");

exports.createUser = async (req, res) => {
	try {
		const data = req.body;
		const schema = joi.object().keys({
			name: joi.string().min(3).required(),
			email: joi.string().email().required(),
		});

		const { error, value } = schema.validate(data);
		if (error) {
			return res.status(400).json({ error });
		}

		const user = models.User.create(req.body);

		return res.status(201).json({
			message: "User created",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.getAllUsers = async (req, res) => {
	try {
		const users = await models.User.findAll();
		return res.status(200).json({
			users,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.getUserById = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await models.User.findOne({
			where: { id: userId },
		});

		if (user) return res.status(200).json({ user });

		throw new Error("User not found");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const data = req.body;
		const schema = joi.object().keys({
			name: joi.string().min(3).required(),
			email: joi.string().email().required(),
		});

		const { error, value } = schema.validate(data);

		if (error) {
			return res.status(400).json({ error });
		}

		const [updated] = await models.User.update(data, {
			where: { id: userId },
		});

		if (updated) {
			const updatedUser = await models.User.findOne({
				where: { id: userId },
			});

			return res.status(200).json({ user: updatedUser });
		}

		throw new Error("User not found");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

exports.deleteUsers = async (req, res) => {
	try {
		const { userId } = req.params;
		const deleted = await models.User.destroy({
			where: { id: userId },
		});

		if (deleted) {
			return res.status(204).json({ message: "User deleted" });
		}

		throw new Error("User not found");
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
