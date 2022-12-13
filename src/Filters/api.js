//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('./contactos');

router.get("/Contactos", contactsController.listar);
router.get("/Contactos/ConsultarId", contactsController.consultarId);
router.get("/Contactos/FilterName", contactsController.listName);
router.get("/Contactos/FilterMail", contactsController.listMail);



module.exports=router;
