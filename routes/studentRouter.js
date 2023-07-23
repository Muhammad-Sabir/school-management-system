const router = require('express').Router();

const { studentController } = require('../controller/index');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/getCourses', authMiddleware, studentController.getCourses);
router.get('/getTasks', authMiddleware, studentController.getTasks);

module.exports = router;
