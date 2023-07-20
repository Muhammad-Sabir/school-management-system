const { userService } = require('../service/index');

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
