const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", isAuthenticated, (req, res) => {
  res.render("homepage", { user: req.user });
});


module.exports = router;
