const { User } = require('../model/index');

module.exports = {
	login: (username, password) => {
		User.login(username, password)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	signup: async function (body) {
		User.signup(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
