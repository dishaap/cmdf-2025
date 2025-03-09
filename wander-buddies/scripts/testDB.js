require("dotenv").config({ path: ".env.local" });
const Pool = require("pg");

console.log(process.env.PGUSER);

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PG_PORT,
  ssl: { rejectUnauthorized: false },
});

