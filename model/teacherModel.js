const { DataTypes } = require('sequelize');

const sequelize = require('../config/dbConnection');

const Teacher = sequelize.define(
	'Teacher',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dateOfBirth: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
	},
	{
		paranoid: true,
		tableName: 'Teacher',
	}
);

module.exports = Teacher;
