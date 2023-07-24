const { studentService } = require('../service/index');

module.exports = {
	getCourses: (req, res) => {
		studentService
			.getCoursesByUserId(req.decoded.id)
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
