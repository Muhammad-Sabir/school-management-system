const { Teacher } = require('./entities/index');

module.exports = {
	createTeacher: (body) => {
		return Teacher.create(body)
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log('Teacher Model (createTeacher): ', err);
			});
	},
};
