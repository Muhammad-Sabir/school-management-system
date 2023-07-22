const { Task } = require('./entities/index');

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
};
