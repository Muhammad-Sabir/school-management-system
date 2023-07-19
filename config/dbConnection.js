const { Sequelize } = require('sequelize');

const dbConfig = require('./config.json').database;

const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password,
	{
		host: dbConfig.host,
		port: dbConfig.port,
		dialect: dbConfig.dialect,
	}
);

module.exports = sequelize;
