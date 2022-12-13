const { query } = require('express');
const model = require('./../Filters/contacto');
module.exports = {
    
    
    //Aca esta la respuesta para la pregunta 3
    create: (req, res) => {
        const data = req.body;
        model.create(data)
            .then(response =>{
                res.send(response);
            });
    },


}