const router = require('express').Router();

const { adminController } = require('../controller/index');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/addCourse', authMiddleware, adminController.addCourse);
router.post('/addTask', authMiddleware, adminController.addTask);

module.exports = router;
