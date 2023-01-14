const { query } = require('express');
const jwt = require('jsonwebtoken');
const model = require('../Models/contacto');
module.exports = {
    listar: (req, res) => {
        const id= req.user._id;
        console.log(id);
        //Aca se crea el filtro para encontrar a los usarios que tengan 1
        model.find({Status: 1, userId: id}).then(data=>{
            res.send(data);
        }).catch(err =>{
            res.status(400).send('Algo salio mal :(')
        });
    },
    consultarId: (req, res) => {
        const id= req.user._id;
        //res.send(id);
        //Aca se crea el filtro para hacer la busqueda mediante el id
        model.findOne({Status: 1, userId: id})
            .then(data=>{
                if (data === null)
                    res.send("No encontre el contacto");
                else
                    res.send(data);
                    
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :( Xd')
            });
        
        
    },
    
    //Aca esta la respuesta para la pregunta 1a
    listName: (req, res) => {
        //Se hace mediante querys param
        const nombre = req.query.Nombre;
        const id= req.user._id;
        //Se va a buscar que coinicidan el nombre el usuario al que pertenece
        model.find({Nombre: nombre, userId: id}).then(data=>{
            if (data === null)
                    res.send("No encontre el contacto");
            else
                res.send(data);
        }).catch(err =>{
            res.status(400).send('Algo salio mal :(')
        });


        
    },

    //Aca esta la respuesta para la pregunta 1b
    listMail: (req, res) => {
        const id= req.user._id;
        //Se hace mediante querys param
        const mail = req.query.Mail;
       
        //Se va a buscar que coinicidan el nombre el usuario al que pertenece
        model.findOne({Correo: mail, userId: id, Status: 1}).then(data=>{
            if (data === null)
                    res.send("No encontre el contacto");
            else
                res.send(data);
        }).catch(err =>{
            res.status(400).send('Algo salio mal :(');
        });


       
    },
    
    //Editar contacto, aqui se responde la pregunta 8.4
    editUser: (req, res) => {
        const dataModificar = req.body;
        const id= req.user._id;
        const mail= req.query.Mail;
        console.log(req.user._id);
        model.findOneAndUpdate({Correo: mail, userId: id}, { 
            Nombre: dataModificar.Nombre,
            Correo: dataModificar.Correo,
            Telefono: dataModificar.Telefono
        }, (err,decoded) => {
            //Preguntar por que aparece null
            if(err || decoded===null){
                res.sendStatus(400);
                return;
            }
            res.send("El siguiente documento: \n"+decoded+"\nSe modifico exitosamente");
        });
    },

      //Aca esta la respuesta para la pregunta 3
    create: (req, res) => {
        const data = req.body;
        
        data.userId = req.user._id;
        
        //Creamos el contacto
        model.create(data).then(response =>{
            res.send(response);
        }).catch(err =>{
            res.status(400).send('Algo salio mal :( Xd')
        });
        
    },

    //Aca esta la respuesta para la pregunta 8.55
    delete: (req, res) => {
        const id= req.user._id;
        const mail= req.query.Mail;
        //Aca se crea el filtro para encontrar el id del usuario y se elimina
        //Ingresamos la promesa, con la finalidad de que nos de un resultado
        //para casos positivos y uno para negativos
        model.findOneAndDelete({Correo: mail, userId: id})
            .then(data=>{
                res.send("Se borro el dato: "+data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :( Xd')
            });
    },
     //Aca esta la respuesta para la pregunta 8.55
    deleteLogico: (req, res) => {
        const dataModificar = req.body;
        const mail= req.query.Mail;
        const id= req.user._id;
        model.findOneAndUpdate({Correo: mail, userId: id}, { 
            Status: 2,
        }, (err,decoded) => {
            //Preguntar por que aparece null
            if(err || decoded===null){
                res.sendStatus(400);
                return;
            }
            res.send("Se borro el contacto \n"+decoded);
        });
    }
}