/*API: se encarga de crear un usuario y da respuesta a la pregunta 8.3
Recibe: Un json con la informacion solicitada
Devuelve:  */
//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('./contactos');


router.post("/Contactos/Create", express.json() ,contactsController.create);


module.exports=router;
