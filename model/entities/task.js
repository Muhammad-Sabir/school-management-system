const { DataTypes } = require('sequelize');

const sequelize = require('../../config/dbConnection');

const Task = sequelize.define(
	'Task',
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
			unique: true,
		},
		description: DataTypes.STRING,
	},
	{
		paranoid: true,
		tableName: 'Task',
	}
);

module.exports = Task;
