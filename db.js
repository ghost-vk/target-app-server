const { Pool } = require('pg');
const debug = require('debug')('db');
const { dbSchema } = require('./config')

const user = process.env.POSTGRES_USER;
const database = process.env.POSTGRES_DB;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST || 'localhost';
const port = process.env.POSTGRES_PORT || 5432;

debug('Connect to Database: %s', database);
debug('User: %s', user);
debug('Password: %s', password);

/**
 * @property {function} query
 */
const pool = new Pool({
  user,
  password,
  database,
  host,
  port,
  schema: dbSchema,
});

module.exports = pool;
