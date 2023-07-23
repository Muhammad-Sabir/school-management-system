const router = require('express').Router();

const { adminController } = require('../controller/index');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/getUsers', authMiddleware, adminController.getUsers);
router.get('/getStudents', authMiddleware, adminController.getStudents);
router.get('/getTeachers', authMiddleware, adminController.getTeachers);
router.get('/getCourses', authMiddleware, adminController.getCourses);
router.get('/getTasks', authMiddleware, adminController.getTasks);
router.get(
	'/getTasksWithCourses',
	authMiddleware,
	adminController.getTasksWithCourses
);
router.post('/addCourse', authMiddleware, adminController.addCourse);
router.post('/addTask', authMiddleware, adminController.addTask);

module.exports = router;
