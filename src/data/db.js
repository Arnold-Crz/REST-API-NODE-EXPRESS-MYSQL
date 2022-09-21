import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'password01',
  port: '3306',
  database: 'db_api_node_express',
});
