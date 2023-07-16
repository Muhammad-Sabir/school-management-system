const { DataTypes } = require('sequelize');

const sequelize = require('../config/dbConnection');

const Course = sequelize.define(
	'Course',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: DataTypes.STRING,
	},
	{
		paranoid: true,
		tableName: 'Course',
	}
);

module.exports = Course;
