const { Course } = require('./entities/index');

module.exports = {
	getAllCourses: () => {
		return Course.findAll()
			.then((courses) => {
				return courses;
			})
			.catch((err) => {
				console.log('Course Model (getAllCourses): ', err);
			});
	},
};
