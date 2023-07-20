const router = require('express').Router();

const { userController } = require('../controller/index');

router.get('/login', userController.login);
router.post('/signup', userController.signup);

module.exports = router;
