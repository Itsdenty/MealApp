import dbconfig from './database';

const currentDB = (env) => {
  if (env === 'test') {
    dbconfig.currentSQL.database = 'meal-app-test';
    return dbconfig;
  }
  return dbconfig;
};
export default currentDB;
