const {
	userModel,
	teacherModel,
	studentModel,
	adminModel,
} = require('../model/index');

module.exports = {
	login: (username, password) => {
		return userModel
			.login(username, password)
			.then((result) => {
				return result;
			})
			.catch((err) => {
				console.log('User Service (login): ', err);
			});
	},
	signup: async function (body) {
		return userModel
			.createUser({
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

				switch (body.user.role) {
					case 'student':
						return studentModel.createStudent(specificData);
					case 'teacher':
						return teacherModel.createTeacher(specificData);
					case 'admin':
						return adminModel.createAdmin(specificData);
				}
			})
			.catch((err) => {
				console.log('User Service (signup): ', err);
			});
	},
};
