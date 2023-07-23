const router = require('express').Router();

const { adminController } = require('../controller/index');

router.get('/getUsers', adminController.getUsers);
router.get('/getStudents', adminController.getStudents);
router.get('/getTeachers', adminController.getTeachers);
router.get('/getCourses', adminController.getCourses);
router.get('/getTasks', adminController.getTasks);
router.get('/getTasksWithCourses', adminController.getTasksWithCourses);
router.post('/addUser', adminController.addUser);
router.post('/addTeacher', adminController.addTeacher);
router.post('/addCourse', adminController.addCourse);
router.post('/addTask', adminController.addTask);

module.exports = router;
