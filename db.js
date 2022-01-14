const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.URI_DB) // Example for postgres

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    }
}


exports.connection = connection;
exports.sequelize = sequelize;