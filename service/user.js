const { User } = require('../model/index');

module.exports = {
	login: (username, password) => {
		return User.login(username, password)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	signup: async function (body) {
		return User.signup(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
				return err;
			});
	},
};
