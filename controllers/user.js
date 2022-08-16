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
		const [updated] = await models.User.update(req.body, {
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
