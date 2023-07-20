const { userModel } = require('../model/index');

module.exports = {
	login: (username, password) => {
		return userModel
			.login(username, password)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	signup: async function (body) {
		return userModel
			.signup(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
				return err;
			});
	},
};
