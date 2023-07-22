const { Student } = require('./entities/index');

module.exports = {
	createStudent: (body) => {
		return Student.create(body)
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log('Student Model (createStudent): ', err);
			});
	},
};
