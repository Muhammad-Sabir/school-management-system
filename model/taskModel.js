const { Task } = require('./entities/index');
const courseModel = require('./courseModel');

module.exports = {
	getAllTasks: () => {
		return Task.findAll()
			.then((tasks) => {
				return tasks;
			})
			.catch((err) => {
				console.log('Task Model (getAllTasks): ', err);
			});
	},
	getTasksByUserId: (userId) => {
		return courseModel
			.getCoursesByUserId(userId)
			.then((courses) => {
				const coursesIds = courses.map((course) => course.id);

				return Task.findAll({
					where: [
						{
							courseId: coursesIds,
						},
					],
				});
			})
			.then((tasks) => {
				return tasks;
			})
			.catch((err) => {
				console.log('Task Model (getTasksByUserId): ', err);
			});
	},
};
