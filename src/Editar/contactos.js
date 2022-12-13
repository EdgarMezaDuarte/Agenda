const { query } = require('express');
const model = require('./../Filters/contacto');
module.exports = {
    
    //Editar contacto, aqui se responde la pregunta 8.4
    editUser: (req, res) => {
        const dataModificar = req.body;
        id= req.query.ID;
        model.findByIdAndUpdate(id, { 
            Nombre: dataModificar.Nombre,
            Correo: dataModificar.Correo,
            Telefono: dataModificar.Telefono
            })
        .then(data=>{
            res.send("El siguiente documento: \n"+data);
            
        })
        .catch(err =>{
            res.status(400).send('Algo salio mal :( Xd')
        });
        

        
    },


}