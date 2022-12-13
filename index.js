/*Programa: Es un programa que se va a encargar de gestionar una agenda
Autor: Edgar Meza Duarte
Fecha: 12/12/2022*/
const express = require("express");
const mongoose = require("mongoose");
const apiFilters = require('./src/Filters/api');
const apiEdit = require('./src/Editar/api');
const apiCreate = require('./src/Create/api');
const apiDelete = require('./src/Eliminar/api');
const app = express();
const port = 3000;

app.use(apiFilters);
app.use(apiEdit);
app.use(apiCreate);
app.use(apiDelete);
app.get('', (req, res) =>{
    res.send("Api is working :D");
});

//Se va a guardar nuestro URL de la base de datos como texto
//Se debe modificar el usuario, su password y el nombre de la BD
const uri = "mongodb+srv://Edgar:12345@cluster0.pftd683.mongodb.net/Contactos?retryWrites=true&w=majority";
/*Crearemos el esquema del usuario*/


mongoose.connect(uri, (err, b, c) =>{
    if(err){
        console.log("No se pudo conectar a la base de datos");    
    }else{
        console.log("Se conecto correctamente a la base de datos");
        app.listen(port, () =>{
            console.log("App is running in port: " + port);
        });
    }
});

