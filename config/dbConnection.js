const { Sequelize } = require('sequelize');
const fs = require('fs');

const rawConfig = fs.readFileSync('config.json');
const config = JSON.parse(rawConfig);

const dbConfig = config.database;

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
