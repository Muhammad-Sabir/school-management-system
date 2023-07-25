const { Op } = require('sequelize');

const { Course, User, Student, Enrollment } = require('./entities/index');

module.exports = {
	getAllCourses: () => {
		return Course.findAll()
			.then((courses) => {
				return courses;
			})
			.catch((err) => {
				console.log('Course Model (getAllCourses): ', err);
				throw err;
			});
	},
	getCoursesByUserId: (userId) => {
		return Course.findAll({
			attributes: ['id', 'title', 'description'],
			include: [
				{
					model: Enrollment,
					attributes: [],
					include: {
						model: Student,
						attributes: [],
						include: {
							model: User,
							attributes: [],
							where: {
								id: userId,
							},
						},
						required: true,
					},
					required: true,
				},
			],
		})
			.then((courses) => {
				return courses;
			})
			.catch((err) => {
				console.log('Course Model (getCoursesByUserId): ', err);
				throw err;
			});
	},
};
