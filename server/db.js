const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "lambocool",
  host: "localhost",
  port: 5432,
  database: "gym-manager",
});

module.exports = pool;
