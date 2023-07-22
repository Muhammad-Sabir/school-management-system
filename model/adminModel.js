const { Admin } = require('./entities/index');

module.exports = {
	createAdmin: (body) => {
		return Admin.create(body)
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
