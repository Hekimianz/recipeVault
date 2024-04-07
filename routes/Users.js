const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const usersController = require("../controller/Users");

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.send("No token provided");
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ auth: false, message: "Failed to authenticate" });
      } else {
        req.userId = decoded.user_id;
        next();
      }
    });
  }
}

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/profile", verifyJWT, usersController.getProfile);

module.exports = router;
