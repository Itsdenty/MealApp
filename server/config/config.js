require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'mealtest',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
  },
  travis: {
    username: 'postgres',
    password: '',
    database: 'travis',
    host: 'localhost',
    dialect: 'postgres'
  }
};
