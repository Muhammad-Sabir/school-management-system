const router = require('express').Router();

const { adminController } = require('../controller/index');

router.get('/getUsers', adminController.getUsers);
router.get('/getStudents', adminController.getStudents);
router.get('/getTeachers', adminController.getTeachers);
router.get('/getCourses', adminController.getCourses);
router.get('getTasks', adminController.getTasks);
router.get('/getTasksWithCourses', adminController.getTasksWithCourses);

module.exports = router;
