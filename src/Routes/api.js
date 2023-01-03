//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('../Controllers/contactos');

//Metodos get
router.get("/Contactos", contactsController.listar);
router.get("/Contactos/ConsultarId", contactsController.consultarId);
router.get("/Contactos/FilterName", contactsController.listName);
router.get("/Contactos/FilterMail", contactsController.listMail);
router.get("/Contactos/Delete",contactsController.delete);

//Metodos post
router.post("/Contactos/Editar", express.json() ,contactsController.editUser);
router.post("/Contactos/Create", express.json() ,contactsController.create);

module.exports=router;