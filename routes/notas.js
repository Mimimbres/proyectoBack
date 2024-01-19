const express = require("express");
const prisma = require("../prisma");
const isAdmin = require("../middlewares/isAdmin");
const transporter = require("../config/nodemailer");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Usuario: ", req.user);
  try {
    const newNotas = await prisma.notas.findMany({
      where: {
        userId: req.user.id,
      },
    });
    res.render("homepage", { user: req.user, notas: newNotas });
  } catch (error) {
    console.error(error);
    res.render("homepage", { user: req.user, error: "Error al obtener las notas" });
  }
});

   

router.get("/students", isAdmin, async (req, res) => {
  try {
    const feedbacks = await prisma.notas.findMany({
      include: {
        user: {
          select: {
            username: true,
            email: true,
            photo: true,
          },
        },
      },
    });
    res.render("notas", { user: req.user, feedbacks });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
});

module.exports = router;

