const {} = require('../model/index');

module.exports = {
	login: async function (password, email) {
		const check = await userModel.login(email, password);
		return check.dataValues;
		// if (password === 'sabirraza' && email === 'sabir.tabi1122@gmail.com')
		// 	return 'LOGGED IN!';

		// return 'INCORRECT EMAIL OR PASSWORD';
	},
	signup: async function (body) {
		const response = await userModel.signup(body);
		return response;
	},
};
