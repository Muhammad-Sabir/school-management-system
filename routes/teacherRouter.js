const router = require('express').Router();

const { teacherController } = require('../controller/index');

router.get('/getCourses', teacherController.getCourses);
router.get('/getStudents', teacherController.getStudents);
router.get('/getTasks', teacherController.getTasks);
router.post('/addTask', teacherController.addTask);
router.put('/editTask', teacherController.editTask);

module.exports = router;