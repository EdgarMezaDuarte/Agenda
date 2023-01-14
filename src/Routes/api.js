//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('../Controllers/contactos');
const usersController = require('../Controllers/usuarios');
const  authMiddleware = require('../middlewares/auth');

/*Con esta linea vamos a utilizar el middleware en donde la 
peticion empiece con la linea /Contactos*/
router.use('/Contactos', authMiddleware);

/* acá empiezan las peticiones de contactos */
//Metodos get+
router.get("/Contactos/ConsultarId", contactsController.consultarId);
router.get("/Contactos/Agenda",  contactsController.listar);
router.get("/Contactos/FilterName", contactsController.listName);
router.get("/Contactos/FilterMail", contactsController.listMail);
router.get("/Contactos/Delete",contactsController.deleteLogico);

//Metodos post
router.post("/Contactos/Editar", express.json() ,contactsController.editUser);
router.post("/Contactos/Create", express.json() ,contactsController.create);

/* acá empiezan Usuarios */

router.post("/registro", express.json(),usersController.registro);
router.post("/login", express.json(),usersController.login);

module.exports=router;
