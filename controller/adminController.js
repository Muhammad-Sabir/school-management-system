const { adminService } = require('../service/index');

module.exports = {
	addCourse: (req, res) => {
		adminService
			.addCourse(req.body)
			.then((createdCourse) => {
				res.send(createdCourse);
			})
			.catch((err) => {
				res.send(err.message);
			});
	},
	addTask: (req, res) => {
		adminService
			.addTask(req.body)
			.then((createdTask) => {
				res.send(createdTask);
			})
			.catch((err) => {
				console.log('Admin Controller (addTask): ', err);
				res.send('ERROR! Admin Controller (addTask).');
			});
	},
};
