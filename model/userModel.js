const { User } = require('./entities/index');

module.exports = {
	createUser: (body) => {
		return User.create(body)
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	login: (username, password) => {
		return User.findOne({
			where: {
				username: username,
				password: password,
			},
		})
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
				return err;
			});
	},
	getUserById: async function (id) {
		User.findBy({
			where: {
				id: id,
			},
		})
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	getAllUsers: async function () {
		User.findAll()
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	removeUser: (id) => {
		User.destroy({
			where: {
				id: id,
			},
		})
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	updateUser: async function (body) {
		User.update(body, {
			where: {
				id: id,
			},
			returning: true,
		})
			.then(([rowsUpdated, [updatedUser]]) => {
				console.log(`${rowsUpdated} rows updated.`);
				console.log('Updated user:', updatedUser);
				return updatedUser;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
