const { Course, User, Student, Enrollment } = require('./entities/index');

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
	getCoursesByUserId: (userId) => {
		return Course.findAll({
			attributes: ['id', 'title', 'description'],
			include: [
				{
					model: Enrollment,
					include: {
						model: Student,
						include: {
							model: User,
							where: {
								userId: userId,
							},
						},
					},
				},
			],
		})
			.then((courses) => {})
			.catch((err) => {
				console.log('Course Model (getCoursesByUserId): ', err);
			});
	},
};
