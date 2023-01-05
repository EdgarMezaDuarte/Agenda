//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('../Controllers/contactos');
const usersController = require('../Controllers/usuarios');
/* acá empiezan contactos */
//Metodos get
router.get("/Contactos", contactsController.listar);
router.get("/Contactos/ConsultarId", contactsController.consultarId);
router.get("/Contactos/Agenda", contactsController.listar);
router.get("/Contactos/FilterName", contactsController.listName);
router.get("/Contactos/FilterMail", contactsController.listMail);
router.get("/Contactos/Delete",contactsController.delete);

//Metodos post
router.post("/Contactos/Editar", express.json() ,contactsController.editUser);
router.post("/Contactos/Create", express.json() ,contactsController.create);

/* acá empiezan Usuarios */

router.post("/registro", express.json(),usersController.registro);
router.post("/login", express.json(),usersController.login);

module.exports=router;
