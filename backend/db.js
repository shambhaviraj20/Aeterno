const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ERA_db',
  password: 'Shavy@1234',
  port: 5432,
});
module.exports = pool;