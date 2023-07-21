const { userModel, teacherModel, studentModel } = require('../model/index');

module.exports = {
	login: (username, password) => {
		return userModel
			.login(username, password)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	signup: async function (body) {
		return userModel.createUser({
			username: body.user.username,
			password: body.user.password,
			role: body.user.role,
		})
			.then((result) => {
				const specificData = {
					firstName: body.firstName,
					lastName: body.lastName,
					email: body.email,
					phoneNumber: body.phoneNumber,
					dateOfBirth: body.dateOfBirth,
					userId: result.dataValues.id,
				};

				if (body.user.role === 'student') {
					return studentModel.createStudent(specificData);
				} else {
					return teacherModel.createTeacher(specificData);
				}
			})
			.catch((err) => {
				console.log(err);
				return err;
			});
	},
};
