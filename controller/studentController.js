const { studentService } = require('../service/index');

module.exports = {
	getCourses: (req, res) => {
		res.send(studentService.getCourses());
	},
	getTasks: (req, res) => {
		res.send(studentService.getTasks());
	},
};
