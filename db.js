const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize({
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return error;
    }
}


exports.connection = connection;
exports.sequelize = sequelize;
