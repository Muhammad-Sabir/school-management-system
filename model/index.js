const sequelize = require('../config/dbConnection');

const models = {
	User: require('./user'),
	Student: require('./student'),
	Teacher: require('./teacher'),
	Course: require('./course'),
	Enrollment: require('./enrollment'),
};

sequelize.models = models;

module.exports = models;
