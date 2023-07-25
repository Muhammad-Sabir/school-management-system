const { taskModel, courseModel } = require('../model/index');

module.exports = {
	getCoursesByUserId: (userId) => {
		return courseModel
			.getCoursesByUserId(userId)
			.then((courses) => {
				if (!courses) {
					throw new Error('No courses found for the given user ID.');
				}

				return courses;
			})
			.catch((err) => {
				console.log('Student Service (getCoursesByUserId): ', err);
			});
	},
	getTasksByUserId: (userId) => {
		return taskModel
			.getTasksByUserId(userId)
			.then((tasks) => {
				if (!tasks) {
					throw new Error('No tasks found for the given user ID.');
				}

				return tasks;
			})
			.catch((err) => {
				console.log('Student Service (getTasks): ', err);
			});
	},
};
