import dotenv from 'dotenv';
import { Op } from 'sequelize';
import dbConfig from './config';

dotenv.config();
const Database = {};
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};
Database.postgres = {
  database: dbConfig[process.env.NODE_ENV].database,
  username: dbConfig[process.env.NODE_ENV].username,
  password: dbConfig[process.env.NODE_ENV].password,
  options: {
    pool: {
      max: 5,
      min: 0,
      idle: 5000,
      evict: 5000
    },
    host: dbConfig[process.env.NODE_ENV].host,
    dialect: 'postgres',
    operatorsAliases,
    timezone: 'Africa/Lagos'
  }
};
Database.currentSQL = Database.postgres;

export default Database;
