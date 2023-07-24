const { taskModel, courseModel } = require('../model/index');

module.exports = {
	getCoursesByUserId: (userId) => {
		return courseModel
			.getCoursesByUserId(userId)
			.then((courses) => {
				return courses;
			})
			.catch((err) => {
				console.log('Student Service (getCoursesByUserId): ', err);
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
