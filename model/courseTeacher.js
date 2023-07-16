const { DataTypes } = require('sequelize');

const sequelize = require('../config/dbConnection');

const CourseTeacher = sequelize.define(
	'CourseTeacher',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		paranoid: true,
		tableName: 'CourseTeacher',
	}
);

module.exports = CourseTeacher;
