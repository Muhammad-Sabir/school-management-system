const sequelize = require('../../config/dbConnection');

const models = {
	User: require('./user'),
	Admin: require('./admin'),
	Student: require('./student'),
	Teacher: require('./teacher'),
	Course: require('./course'),
	Task: require('./task'),
	Enrollment: require('./enrollment'),
	CourseTeacher: require('./courseTeacher'),
};

// User - Admin
models.User.hasOne(models.Admin, { foreignKey: 'userId' });
models.Admin.belongsTo(models.User, { foreignKey: 'userId' });

// User - Student
models.User.hasOne(models.Student, { foreignKey: 'userId' });
models.Student.belongsTo(models.User, { foreignKey: 'userId' });

// User - Teacher
models.User.hasOne(models.Teacher, { foreignKey: 'userId' });
models.Teacher.belongsTo(models.User, { foreignKey: 'userId' });

// Enrollment - Course
models.Enrollment.belongsTo(models.Course, {
	foreignKey: 'courseId',
});
models.Course.hasMany(models.Enrollment, {
	foreignKey: 'courseId',
});

// Enrollment - Student
models.Enrollment.belongsTo(models.Student, {
	foreignKey: 'studentId',
});
models.Student.hasMany(models.Enrollment, {
	foreignKey: 'studentId',
});

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
models.Course.belongsToMany(models.Teacher, {
	through: 'CourseTeacher',
	foreignKey: 'courseId',
});

// Course - Task
models.Course.hasMany(models.Task, {
	foreignKey: 'courseId',
});
models.Task.belongsTo(models.Course, {
	foreignKey: 'courseId',
});

sequelize.models = models;
module.exports = models;
