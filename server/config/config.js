// import dbconfig from './database';
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
    database: 'meal-app-test',
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
    database: 'travis_ci_test',
    host: 'localhost',
    dialect: 'postgres'
  }
};
