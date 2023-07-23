const { Course, Task } = require('./entities/index');

module.exports = {
	addCourse: (body) => {
		return Course.create(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log('Admin Model (addCourse): ', err);
			});
	},
	addTask: (body) => {
		return Task.create(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log('Admin Model (addTask): ', err);
			});
	},
};
