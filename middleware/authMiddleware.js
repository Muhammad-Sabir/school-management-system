const jwt = require('jsonwebtoken');

const secretKey = require('../config/config.json').jwt.secretKey;

function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res
			.status(401)
			.json({ message: 'Invalid or missing Authorization header.' });
	}

	const token = authHeader.split(' ')[1];

	if (!token) return res.status(401).json({ message: 'No token provided.' });

	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			return res
				.status(403)
				.json({ message: 'Failed to authenticate token.' });
		}

		console.log(decoded);
		req.decoded = decoded;
		console.log(req.decoded);

		if (decoded.role === 'admin' && req.baseUrl === '/admin') {
			next();
		} else if (decoded.role === 'student' && req.baseUrl === '/student') {
			next();
		} else if (decoded.role === 'teacher' && req.baseUrl === '/teacher') {
			next();
		} else {
			return res.status(403).json({ message: 'Access forbidden!' });
		}
	});
}

module.exports = authMiddleware;
