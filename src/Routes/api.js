//Vamos a definir las rutas
const router = require("express").Router();
const express = require("express");
const contactsController = require('../Controllers/contactos');
const usersController = require('../Controllers/usuarios');
const  authMiddleware = require('../middlewares/auth');
const multer = require('multer');

const storage = {
    //Es mas flexible para preguntar si existe
    destination: (req, file, callback) =>{
        callback(null, 'uploads');//err-firts callback
    },
    //Tenemos que asegurarnos que al archivo tenga otro nombre
    filename: (req, file, callback) => {
        const extension = file.originalname.split('.').pop(); //Nombre de la extensión
        let nombreArchivo = req.user._id + '-' + new Date().getTime() + '.' + extension;
        callback(null, nombreArchivo);
    } 
};

///Estamos especificando el storage en el formato de multer
const multerStorage = multer.diskStorage(storage);
const upload = multer({storage: multerStorage});
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
router.post("/Contactos/Create", express.json() , upload.single('Foto'), contactsController.create);

/* acá empiezan Usuarios */

router.post("/registro", express.json(),usersController.registro);
router.post("/login", express.json(),usersController.login);

module.exports=router;
