const { query } = require('express');
const model = require('./../Filters/contacto');
module.exports = {
    
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