import e from "express";
import { pool } from "../server/db.js";

// **** INSERTS **** //
export const createUser = async (req, res) => {
  try {
    const { email, password, name, lastname } = req.body;

    const [result] = await pool.query(
      `INSERT INTO users(email, user_pass, user_firstname, user_lastname) values (?, ?, ?, ?)`,
      [email, password, name, lastname]
    );
    res.json({
      id: result.insertId,
      email,
      password,
      name,
      lastname
    })
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

export const createPost = async(req, res) => {
  try {
    const { message, user_id } = req.body;
    const [result] = await pool.query('Insert into posts(post_messages) values (?)', [message]);
    const [new_res] = await pool.query('Insert Into posts_x_users(post_id, user_id) values (?,?)',[result.insertId, user_id]);
    res.json({
      id: result.insertId
    })
  } catch (error) {
    return res.status(500).json({message: error.message});
  }  
}

export const createFollow = async(req,res) => {
  try {
    const { myid, followid } = req.body;
    console.log(myid, followid);
    const [result] = await pool.query('Insert into friendly(user_session_id, user_friend_id) values (?, ?)', [myid, followid]);
    res.json({
      id: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

// **** SELECTS **** //
export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from users");
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: "500 Unexpected Error :("});
  }
};

export const getNotFriends = async (req, res) => {
  try {
    const [result] = await pool.query("Select * from users u where u.user_id not in (select f.user_friend_id  from friendly f where f.user_session_id = ?) and user_id != ?", [req.params.id, req.params.id]);
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: "500 Unexpected Error :("});
  }
};

export const checkLogin = async (req, res) => {
  const [result] = await pool.query('Select * from users where email = ? and user_pass = ?', [req.params.email, req.params.password]);
  res.send(result);
};

export const getAllPosts = async (req,res) => {
  try {
    const [result] = await pool.query('Select * from posts p inner join posts_x_users pxu on pxu.post_id = p.post_id inner join users u on u.user_id = pxu.user_id order by p.post_id desc');
    res.send(result); 
  } catch (error) {
    return res.status(error.status).json({message: error.message});
  }
}

export const getLastPost_by_id = async(req,res) => {
  try {
    console.log(req.params.id);
    const [result] = await pool.query('Select * from posts p inner join posts_x_users pxu on pxu.post_id = p.post_id inner join users u on u.user_id = pxu.user_id where p.post_id = ?', req.params.id)
    res.send(result);
  } catch (error) {
    return res.status(error.status).json({message: error.message})
  }
}

export const getFriends = async(req, res) => {
  try {
    const [result] = await pool.query("select * from users u where u.user_id in (select f.user_friend_id  from friendly f where f.user_session_id = ?) and user_id != ?", [req.params.id, req.params.id]);
    res.send(result);
  } catch (error) {
    return res.status(error.status).json({message: error.message});
  }
}

export const deleteFriend = async(req, res) => {
  try {;
    const [result] = await pool.query('DELETE from friendly where user_session_id = ? and user_friend_id = ?', [req.params.myid, req.params.followId]);

    res.json({
      result
    })
  } catch (error) {
    return res.status(error.status).json({message: error.message})
  }
}

