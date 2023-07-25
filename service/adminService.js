const { adminModel } = require('../model/index');

module.exports = {
	addCourse: (body) => {
		return adminModel
			.getCourseByTitle(body.title)
			.then((course) => {
				if (course) {
					throw new Error('Course already exists.');
				}

				return adminModel.addCourse(body);
			})
			.then((result) => {
				return result.dataValues;
			})
			.catch((err) => {
				throw new Error(`Admin Service (addCourse): ${err}`);
			});
	},
	addTask: (body) => {
		return adminModel
			.getTaskByTitle(body.title)
			.then((task) => {
				if (task) {
					throw new Error('Task already exists.');
				}

				return adminModel.addTask(body);
			})
			.then((result) => {
				return result.dataValues;
			})
			.catch((err) => {
				throw new Error(`Admin Service (addTask): ${err}`);
			});
	},
};
