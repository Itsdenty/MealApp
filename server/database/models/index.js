import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import cls from 'continuation-local-storage';
import cfg from '../../config/sequelize-config';

const
  basename = path.basename(module.filename),
  config = cfg().currentSQL,
  namespace = cls.createNamespace('rcb-ns'),
  db = {};
let sequelize = {};

Sequelize.useCLS(namespace);

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password,
    config.options);
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.namespace = namespace;
// db.sequelize.connectionManager.pool.start();
export default db;
