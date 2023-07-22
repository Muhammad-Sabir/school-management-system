const { studentService } = require('../service/index');

module.exports = {
	getCourses: (req, res) => {
		studentService
			.getCourses()
			.then((courses) => {
				res.send(courses);
			})
			.catch((err) => {
				console.log('Student Controller (getCourses): ', err);
				res.send('ERROR! Student Controller (getCourses).');
			});
	},
	getTasks: (req, res) => {
		studentService
			.getTasks()
			.then((tasks) => {
				res.send(tasks);
			})
			.catch((err) => {
				console.log('Student Controller (getTasks): ', err);
				res.send('ERROR! Student Controller (getTasks).');
			});
	},
};
