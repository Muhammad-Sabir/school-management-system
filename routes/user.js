const router = require('express').Router();

const { login, signup } = require('../controller/user');

router.get('/login', login);
router.post('/signup', signup);

module.exports = router;
