const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/home", isAuthenticated, require("./home"));
router.use("/profile", isAuthenticated, require("./profile"));
router.use("/", isAuthenticated, require("./notas"));

module.exports = router;
