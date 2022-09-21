import { pool } from '../data/db.js';

//? NOTAS Probando la conexion con la base de datos;
// export const getEmployes = async (req, res) => {
//   const result = await pool.query('SELECT  1 + 1 AS result');
//   res.send(result[0]);
// };

export const getHome = async (req, res) => {
  const result = await pool.query('SELECT  "REST API CODESPACE" AS result');
  res.send(result[0]);
};
