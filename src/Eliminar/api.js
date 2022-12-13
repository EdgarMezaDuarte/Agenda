/*API: se encarga de eliminar un usuario y da respuesta a la pregunta 8.5
Recibe: 
Devuelve:  */
//Vamos a definir las rutas
const router = require("express").Router();
const contactsController = require('./contactos');


router.get("/Contactos/Delete",contactsController.delete);


module.exports=router;
