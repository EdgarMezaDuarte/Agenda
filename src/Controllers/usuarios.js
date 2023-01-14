const { query } = require('express');
const jwt = require('jsonwebtoken');
const model = require('../Models/usuario');
const crypto = require('crypto');
function hashPassword(pwd){
    return crypto.scryptSync(pwd,'secret',24);
}
module.exports = {
    login:(req, res) => {
        const credenciales = req.body;
        credenciales.Password = hashPassword(credenciales.Password);
        if(credenciales.Correo && credenciales.Password){
            model.findOne(credenciales).then(response =>{
                if(response){
                    const {_id, Nombre, Correo} = response;
                    const token = jwt.sign({_id, Nombre, Correo},'holamundo');
                    res.send({token,Nombre, Correo});
                }else{
                    res.sendStatus(401);
                }
            }).catch(err => {
                res.sendStatus(400);
            });
        }
    },
      //Aca esta la respuesta para la pregunta 3
    registro: (req, res) => {
        const data = req.body;
        const hashedPassword = hashPassword(data.Password);
        data.Password = hashedPassword;
        model.create(data)
            .then(response =>{
                res.send(response);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal :(')
            });
    },


}