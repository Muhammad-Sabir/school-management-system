const { adminService } = require('../service/index');

module.exports = {
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
	addCourse: (req, res) => {
		res.send(adminService.addCourse(req.body));
	},
	addTask: (req, res) => {
		res.send(adminService.addCourse(req.body));
	},
};
