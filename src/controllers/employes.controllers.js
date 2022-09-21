import { pool } from '../data/db.js';

//? Obteniendo todos los campos de la tabla
export const getEmployes = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee');
  res.send({ rows });
};

//? Obteiendo un dato
export const getEmploye = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);

  if (rows.length <= 0) {
    res.status(404).json({ messages: 'Employee not found' });
    return;
  }
  res.send({ rows });
};

//? Insertando datos
export const postEmploye = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    'INSERT INTO employee(name, salary) VALUES (?, ?)',
    [name, salary]
  );
  res.send({ id: rows.insertId, name, salary });
};

//? Actualizando datos
export const putEmploye = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    'UPDATE employee SET name=IFNULL(?, name), salary=IFNULL(?, salary) WHERE id=?',
    [name, salary, id]
  );
  if (rows.affectedRows === 0) {
    res.status(404).json({ messages: 'Employee not found' });
    return;
  }

  res
    .status(200)
    .json({ data: { id, name, salary }, messages: 'Employee Update' });
};

//? Eliminando datos
export const deleteEmploye = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query('DELETE FROM employee WHERE id=?', [id]);
  if (rows.affectedRows === 0) {
    res.status(404).json({ messages: 'Employee not found' });
    return;
  }

  res.status(200).json({ messages: 'Eliminated Employee' });
};
