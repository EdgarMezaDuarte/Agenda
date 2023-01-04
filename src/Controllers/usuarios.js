const { query } = require('express');
const model = require('../Models/usuario');
module.exports = {

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