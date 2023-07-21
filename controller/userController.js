const joi = require('joi');

const { userService } = require('../service/index');

const signinSchema = joi.object({
	username: joi.string().min(3).max(25).required(),
	password: joi
		.string()
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,30}$/),
});
const signupSchema = joi.object({
	
});

module.exports = {
	login: (req, res) => {
		userService
			.login(req.query.username, req.query.password)
			.then((user) => {
				res.send(user);
			})
			.catch((err) => {
				console.log(err);
				res.send('Not signing in!');
			});
	},
	signup: (req, res) => {
		userService
			.signup(req.body)
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				console.log(err);
				res.send('Not signing up!');
			});
	},
};
