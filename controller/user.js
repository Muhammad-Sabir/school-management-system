const { login, signup } = require('../service/user');

module.exports = {
	login: (req, res) => {
		login(req.query.username, req.query.password)
			.then((user) => {
				res.send(user);
			})
			.catch((err) => {
				console.log(err);
				res.send('Not signing in!');
			});
	},
	signup: (req, res) => {
		signup(req.body)
			.then((result) => {
				res.send(result);
			})
            .catch(err => { 
                console.log(err);
                res.send('Not signing up!');
            });
	},
};
