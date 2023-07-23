const { adminModel } = require('../model/index');

module.exports = {
	addCourse: (body) => {
		return adminModel
			.addCourse(body)
			.then((result) => {
				return result.dataValues;
			})
			.catch((err) => {
				console.log('Admin Service (addCourse): ', err);
			});
	},
	addTask: (body) => {
		return adminModel
			.addTask(body)
			.then((result) => {
				return result.dataValues;
			})
			.catch((err) => {
				console.log('Admin Service (addTask): ', err);
			});
	},
};
