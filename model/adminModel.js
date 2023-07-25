const { Course, Task } = require('./entities/index');

module.exports = {
	addCourse: (body) => {
		return Course.create(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				throw new Error(`Admin Model (addCourse): ${err}`);
			});
	},
	addTask: (body) => {
		return Task.create(body)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				throw new Error(`Admin Model (addTask): ${err}`);
			});
	},
	getCourseByTitle: (title) => {
		return Course.findOne({
			where: {
				title: title,
			},
		})
			.then((course) => {
				return course;
			})
			.catch((err) => {
				throw new Error(`Admin Model (getCourseByTitle): ${err}`);
			});
	},
};
