const server = require("express").Router();
const authenticate = require('../utils/auth')
const isAdmin = require('../utils/isAdmin')
const { getUsers, getOneUser, registerUser, loginUser, calificarCompaneros, forgotPassword, mailResetPassword,
  promoteUser, userEditProfile, getInstructors, getPms, getUserFeedback } = require('../controllers/user')
const { calificarAlumno } = require('../controllers/checkpoints')




//Rutar obtener todos los usuarios
server.get("/", getUsers);

//Ruta crear usuario
server.post("/register", registerUser);

// ruta login
server.post("/login", loginUser);


//promover o quitar de admin, pm o instructor, active (bloquear y desbloquear usuario)
server.put('/promote/:id', authenticate, promoteUser)

//modificar datos usuario
server.put('/profile/:id', authenticate, userEditProfile)

//Obtener users q sean instructores
server.get("/instructor", getInstructors)

//Obtener users q sean pm's
server.get("/pms", getPms)


// calificar checkpoint del alumno
server.post('/nota-checkpoint/:userId', authenticate, isAdmin, calificarAlumno)

// calificar companero de pair programing
server.post('/nota-pp', calificarCompaneros)

// traer el feedback de un usuario en particular
server.get('/nota-pp/:id', getUserFeedback)

// busca usuario por id
server.get('/:id', authenticate, getOneUser )

//nodemailer reset contraseña, paso por body mail a resetear contraseña
server.post('/reset_password', mailResetPassword);

// cambia contraseña recibiendo por params token que fue enviado por mail, y por body la nueva contraseña 
server.put('/password/:token', forgotPassword)

module.exports = server;