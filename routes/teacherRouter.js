const router = require('express').Router();

const { teacherController } = require('../controller/index');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/getCourses', authMiddleware, teacherController.getCourses);
router.get('/getStudents', authMiddleware, teacherController.getStudents);
router.get('/getTasks', authMiddleware, teacherController.getTasks);
router.post('/addTask', authMiddleware, teacherController.addTask);
router.put('/editTask', authMiddleware, teacherController.editTask);

module.exports = router;
