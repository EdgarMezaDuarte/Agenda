/*Creamos la estructura de los documentos */
const {Schema, model} = require("mongoose");


const usuarioSchema = new Schema({
    Nombre: {type: String},
    Correo: {type: String},
    Password: {type: String},
    Status: {type: Number, default: 1}
});

module.exports = model('usuarios',usuarioSchema);