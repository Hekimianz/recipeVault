const pool = require("../model/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    try {
      // check if username already exists
      const users = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [req.body.username]
      );
      if (users.rows.length > 0)
        return res.status(409).send("Username already taken!");
      // hash password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // create user
      const query = await pool.query(
        "INSERT INTO users (name, username, password) VALUES ($1, $2, $3)",
        [req.body.name, req.body.username, hashedPassword]
      );
      return res.status(201).send("User created");
    } catch (error) {
      return res.json({ message: "Could not register. Error: " + error });
    }
  },
  login: async (req, res) => {
    try {
      // check if username exists
      const user = await pool.query(
        "SELECT * FROM users WHERE username = $1 ",
        [req.body.username]
      );
      if (user.rows.length === 0)
        return res
          .status(404)
          .json({ auth: false, message: "Username does not exist" });
      // check if password is correct
      const compare = await bcrypt.compare(
        req.body.password,
        user.rows[0].password
      );
      if (compare) {
        const user_id = user.rows[0].user_id;
        const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
          expiresIn: 300,
        });

        return res
          .status(200)
          .json({ auth: true, token: token, result: user.rows[0] });
      } else {
        return res
          .status(401)
          .json({ auth: false, message: "Incorrect password" });
      }
    } catch (error) {
      return res.json({ auth: false, message: "Could not log in" });
    }
  },
  getProfile: async (req, res) => {
    res.json({ message: "Secret page" });
  },
};

/*
USERS
[
    {
        name: 'John Smith',
        username: 'John123',
        password: 'johnPass',
    },
   {
        name: 'Alice Grey',
        username: 'AliGrey',
        password: 'alicePass',
    },{
        name: 'Aram Hekimian',
        username: 'Hekimianz',
        password: 'aramPass',
    },{
        name: 'Kyle Broflovski',
        username: 'CoolKyle',
        password: 'kylePass',
    },{
        name: 'Eric Cartman',
        username: 'KyleSux',
        password: 'CartmanPass',
    },
]
*/
