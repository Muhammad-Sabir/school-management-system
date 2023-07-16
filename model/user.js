const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/dbConnection');

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
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: DataTypes.STRING,
		userName: {
			type: DataTypes.STRING,
			defaultValue: function () {
				if (this.email) {
					return this.email;
				} else {
					return null;
				}
			},
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		paranoid: true,
		tableName: 'User',
	}
);

module.exports = User;
