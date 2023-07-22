const joi = require('joi');

const { userService } = require('../service/index');

const signupSchema = joi.object({
	firstName: joi.string().required(),
	lastName: joi.string(),
	email: joi.string().email().required(),
	phoneNumber: joi.string().required(),
	dateOfBirth: joi.date(),
	user: {
		username: joi.string().min(3).max(25).required(),
		password: joi
			.string()
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])[a-zA-Z0-9!@#$%^&*_-]{8,30}$/
			)
			.required(),
		role: joi.string().valid('student', 'teacher', 'admin'),
	},
});

module.exports = {
	login: (req, res) => {
		userService
			.login(req.query.username, req.query.password)
			.then((user) => {
				res.send(user);
			})
			.catch((err) => {
				console.log('User Controller (login): ', err);
				res.send('ERROR! User Controller (login).');
			});
	},
	signup: (req, res) => {
		const result = signupSchema.validate(req.body);

		if (result.error) {
			return res.send(`Validation Error: ${result.error.message}`);
		}

		userService
			.signup(req.body)
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				console.log('User Controller (signup): ', err);
				res.send('ERROR! User Controller (signup).');
			});
	},
};
