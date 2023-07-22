const router = require('express').Router();

const { studentController } = require('../controller/index');

router.get('/getCourses', studentController.getCourses);
router.get('/getTasks', studentController.getTasks);

module.exports = router;