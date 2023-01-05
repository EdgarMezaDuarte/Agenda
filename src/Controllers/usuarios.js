const { query } = require('express');
const jwt = require('jsonwebtoken');
const model = require('../Models/usuario');
module.exports = {
    login:(req, res) => {
        const credenciales = req.body;
        model.findOne(credenciales).then(response =>{
            if(response){
                console.log(response);
                //res.send('ok');
                const {_id, Nombre} = response;
                const token = jwt.sign({_id, Nombre},'holamundo');
                jwt.verify(token,'holamundo',(err,decoded) => {
                    console.log(decoded);
                });//Err first callback
                res.send(token);
            }else{
                res.sendStatus(401);
            }
        }).catch(err => {
            res.sendStatus(400);
        });
    },
      //Aca esta la respuesta para la pregunta 3
    registro: (req, res) => {
        const data = req.body;
        model.create(data)
            .then(response =>{
                res.send(response);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :(')
            });
    },


}