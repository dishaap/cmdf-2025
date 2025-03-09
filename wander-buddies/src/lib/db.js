import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PG_PORT,
  ssl: { rejectUnauthorized: false },
});

export default pool;
