const { query } = require('express');
const model = require('./contacto');
module.exports = {
    listar: (req, res) => {
        //Aca se crea el filtro para encontrar a los usarios que tengan 1
        model.find({Status: 1})
            .then(data=>{
                res.send(data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :(')
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
        
        model.find({Nombre: nombre})
            .then(data=>{
                res.send(data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :(')
            });
    },

    //Aca esta la respuesta para la pregunta 1b
    listMail: (req, res) => {
        //Se hace mediante querys param
        mail = req.query.Mail;
        
        model.find({Correo: mail})
            .then(data=>{
                res.send(data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :(')
            });
    },
    



}