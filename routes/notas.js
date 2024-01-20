const express = require("express");
const prisma = require("../prisma");
const isAdmin = require("../middlewares/isAdmin");
const transporter = require("../config/nodemailer");
const router = express.Router();

router.get("/", async (req, res) => {
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
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

   


router.get('/students', async (req, res) => {
  try {
    const studentsWithoutGrades = await prisma.user.findMany({
      where: {
        notas: {
          none: {} 
        }
      },
      select: { id: true, username: true }
    });

    const subjects = ['matematicas', 'lengua', 'ingles', 'fisica', 'naturales', 'sociales', 'educacionFisica', 'dibujoTecnico'];

    res.render('notas', { students: studentsWithoutGrades, subjects });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/students', isAdmin,async (req, res) => {
  try {
    const { userId, matematicas, lengua, ingles, fisica, naturales, sociales, educacionFisica, dibujoTecnico, comentarios } = req.body;

    await prisma.notas.create({
      data: {
        userId,
        matematicas: parseInt(matematicas),
        lengua: parseInt(lengua),
        ingles: parseInt(ingles),
        fisica: parseInt(fisica),
        naturales: parseInt(naturales),
        sociales: parseInt(sociales),
        educacionFisica: parseInt(educacionFisica),
        dibujoTecnico: parseInt(dibujoTecnico),
        comentarios
      }
    });
  
     transporter.sendMail({
       from: "Aun no",
       to: req.user.email,
       subject: "Tienes nuevas notas",
       html: `<h1>Nuevas notas disponibles en la web</h1>
       <p>Tu profesor acaba de subir las notas. Que la fuerza te acompañe. Por cierto, tambien le hemos mandado una copia a tus padres,
       asi que no te libras.
       Un saludo</p>`,
     });

    res.redirect('/students');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

