const { User } = require('./entities/index');

module.exports = {
	createUser: (body) => {
		return User.create(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log('User Model (createUser): ', err);
				throw err;
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
				console.log('User Model (login): ', err);
				throw err;
			});
	},
};
