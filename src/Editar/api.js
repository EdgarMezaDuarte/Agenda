/*API: se encarga de editar un usuario y da respuesta a la pregunta 8.4
Recibe: Un json con la informacion solicitada
Devuelve:  */
//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('./contactos');


router.post("/Contactos/Editar", express.json() ,contactsController.editUser);


module.exports=router;
