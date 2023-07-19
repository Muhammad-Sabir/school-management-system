const { DataTypes } = require('sequelize');

const sequelize = require('../../config/dbConnection');

const User = sequelize.define(
	'User',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('teacher', 'student'),
			allowNull: false,
		},
	},
	{
		paranoid: true,
		tableName: 'User',
	}
);

module.exports = User;
