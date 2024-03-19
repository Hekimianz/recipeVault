const pool = require("../model/db");

module.exports = {
  get: async (req, res) => {
    try {
      const query = await pool.query("SELECT * from test ORDER BY id;");
      res.send(query.rows);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
    }
  },
};
