import { pool } from '../data/db.js';

//? Obteniendo todos los campos de la tabla
export const getEmployes = async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrog' });
  }
};

//? Obteiendo un dato
export const getEmploye = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);

    if (rows.length <= 0) {
      res.status(404).json({ messages: 'Employee not found' });
      return;
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

//? Insertando datos
export const postEmploye = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      'INSERT INTO employee(name, salary) VALUES (?, ?)',
      [name, salary]
    );
    res.send({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrog' });
  }
};

//? Actualizando datos
export const putEmploye = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
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
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrog' });
  }
};

//? Eliminando datos
export const deleteEmploye = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM employee WHERE id=?', [id]);
    if (rows.affectedRows === 0) {
      res.status(404).json({ messages: 'Employee not found' });
      return;
    }

    res.status(200).json({ messages: 'Eliminated Employee' });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrog' });
  }
};
