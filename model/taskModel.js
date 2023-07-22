const { Task } = require('./entities/index');

module.exports = {
	getAllTasks: () => {
		return Task.findAll()
			.then((tasks) => {
				return tasks;
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
