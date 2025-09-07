const { Sequelize } = require('sequelize');
const pg = require('pg')
require('dotenv').config()
// Option 1: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true, // Aiven requires SSL connections
      rejectUnauthorized: false, // Allows self-signed certs
    },
  },
});

sequelize.sync({ force: false }) // This creates tables automatically
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = sequelize