const { adminService } = require('../service/index');

module.exports = {
	addCourse: (req, res) => {
		adminService
			.addCourse(req.body)
			.then((createdCourse) => {
				res.send(`Added this course: ${createdCourse}`);
			})
			.catch((err) => {
				console.log('Admin Controller (addCourse): ', err);
				res.send('ERROR! Admin Controller (addCourse).');
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
	getUsers: (req, res) => {
		res.send('Your course');
	},
	getStudents: (req, res) => {
		res.send('Your course');
	},
	getTeachers: (req, res) => {
		res.send('Your course');
	},
	getCourses: (req, res) => {
		res.send('Your course');
	},
	getTasks: (req, res) => {
		res.send('Your course');
	},
	getTasksWithCourses: (req, res) => {
		res.send('Your course');
	},
};
