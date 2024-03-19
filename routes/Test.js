const express = require("express");
const router = express.Router();

const testController = require("../controller/Test.js");

router.get("/", testController.get);

module.exports = router;
