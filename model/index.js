const sequelize = require('../config/dbConnection');

const models = {
	User: require('./user'),
	Student: require('./student'),
	Teacher: require('./teacher'),
	Course: require('./course'),
	Enrollment: require('./enrollment'),
	CourseTeacher: require('./courseTeacher'),
};

// User - Student
models.User.hasOne(models.Student, { foreignKey: 'userId' });
models.Student.belongsTo(models.User, { foreignKey: 'userId' });

// User - Teacher
models.User.hasOne(models.Teacher, { foreignKey: 'userId' });
models.Teacher.belongsTo(models.User, { foreignKey: 'userId' });

// Student - Course
models.Student.belongsToMany(models.Course, {
	through: 'Enrollment',
	foreignKey: 'studentId',
});
models.Course.belongsToMany(models.Student, {
	through: 'Enrollment',
	foreignKey: 'courseId',
});

// Teacher - Course
models.Teacher.belongsToMany(models.Course, {
	through: 'CourseTeacher',
	foreignKey: 'teacherId',
});
models.Course.belongsToMany(models.Student, {
	through: 'CourseTeacher',
	foreignKey: 'courseId',
});

sequelize.models = models;

module.exports = models;
