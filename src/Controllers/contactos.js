const { query } = require('express');
const jwt = require('jsonwebtoken');
const model = require('../Models/contacto');
module.exports = {
    listar: (req, res) => {
        
        const token = req.headers.authorization;
        
        //Con esta linea pretendemos deconstruir nuestro token
        jwt.verify(token,'holamundo',(err,decoded) => {
            console.log(decoded._id);
            //Aca se crea el filtro para encontrar a los usarios que tengan 1
            model.find({Status: 1, userId: decoded._id}).then(data=>{
                res.send(data);
             }).catch(err =>{
                res.status(400).send('Algo salio mal :(')
            });
        });
        
    },
    consultarId: (req, res) => {
        id= req.query.ID;
        //res.send(id);
        //Aca se crea el filtro para encontrar a los usarios que tengan 1 y ademas coincidan en el id,
        model.findById(id)
            .then(data=>{
                res.send(data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :( Xd')
            });
        
        
    },
    
    //Aca esta la respuesta para la pregunta 1a
    listName: (req, res) => {
        //Se hace mediante querys param
        nombre = req.query.Nombre;
        const token = req.headers.authorization;
        
        //Con esta linea pretendemos deconstruir nuestro token
        jwt.verify(token,'holamundo',(err,decoded) => {
            console.log(decoded._id);
            //Se va a buscar que coinicidan el nombre el usuario al que pertenece
            model.find({Nombre: nombre, userId: decoded._id}).then(data=>{
                res.send(data);
            }).catch(err =>{
                res.status(400).send('Algo salio mal :(')
            });
        });


        
    },

    //Aca esta la respuesta para la pregunta 1b
    listMail: (req, res) => {
        //Se hace mediante querys param
        mail = req.query.Mail;
        const token = req.headers.authorization;
         //Con esta linea pretendemos deconstruir nuestro token
         jwt.verify(token,'holamundo',(err,decoded) => {
            console.log(decoded._id);
            //Se va a buscar que coinicidan el nombre el usuario al que pertenece
            model.find({Correo: mail, userId: decoded._id}).then(data=>{
                res.send(data);
            }).catch(err =>{
                res.status(400).send('Algo salio mal :(');
            });
        })

       
    },
    
    //Editar contacto, aqui se responde la pregunta 8.4
    editUser: (req, res) => {
        const dataModificar = req.body;
        id= req.query.ID;

        model.findByIdAndUpdate(id, { 
            Nombre: dataModificar.Nombre,
            Correo: dataModificar.Correo,
            Telefono: dataModificar.Telefono
        }).then(data=>{
            res.send("El siguiente documento: \n"+data+"\nSe modifico exitosamente");
            
        })
        .catch(err =>{
            res.status(400).send('Algo salio mal :( Xd')
        });
        

        
    },

      //Aca esta la respuesta para la pregunta 3
    create: (req, res) => {
        const token = req.headers.authorization;
        const data = req.body;
        //Con esta linea pretendemos deconstruir nuestro token
        jwt.verify(token,'holamundo',(err,decoded) => {
            console.log(decoded._id);
            //Creamos un objeto con el que tengamos todo lo del qer body y el userId
            const newBody2 = {
                "userId": decoded._id,
                ...data
            } 
            //Creamos el contacto
            model.create(newBody2).then(response =>{
                res.send(response);
            });
        });
    },

    //Aca esta la respuesta para la pregunta 8.55
    delete: (req, res) => {
        id= req.query.ID;
        //Aca se crea el filtro para encontrar el id del usuario y se elimina
        //Ingresamos la promesa, con la finalidad de que nos de un resultado
        //para casos positivos y uno para negativos
        model.findByIdAndDelete(id)
            .then(data=>{
                res.send("Se borro el dato: "+data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :( Xd')
            });
    }
}