const { courseModel, taskModel } = require('../model/index');

module.exports = {
	getCourses: () => {
		return courseModel
			.getAllCourses()
			.then((courses) => {
				return courses;
			})
			.catch((err) => {
				console.log('Student Service (getCourses): ', err);
			});
	},
	getTasks: () => {
		return taskModel
			.getAllTasks()
			.then((tasks) => {
				return tasks;
			})
			.catch((err) => {
				console.log('Student Service (getTasks): ', err);
			});
	},
};
