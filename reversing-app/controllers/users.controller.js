import { pool } from "../server/db.js";

export const createUser = async (req, res) => {
  const { email, pass } = req.body;
  const result = await pool.query(
    `INSERT INTO users(email, pass) values (?, ?)`,
    [email, pass]
  );
  console.log(result);
  res.send("creando usuario");
};

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from users");
    res.send(result);
  } catch (error) {
    return res.status(404).json({ message: "505 Error Connection" });
  }
};

export const checkLogin = async (req, res) => {
  const [result] = await pool.query(`Select * from users where email = ?`, [
    req.params.email,
  ]);

  if (result.length == 0) {
    return res.status(404).json({ message: "404 NOT FOUND" });
  }

  console.log(result);
  res.json(result);
};
