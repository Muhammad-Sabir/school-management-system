const { DataTypes } = require('sequelize');

const sequelize = require('../../config/dbConnection');

const Enrollment = sequelize.define(
	'Enrollment',
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
		tableName: 'Enrollment',
	}
);

module.exports = Enrollment;
