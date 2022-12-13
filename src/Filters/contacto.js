/*Creamos la estructura de los documentos */
const {Schema, model} = require("mongoose");


const contactoSchema = new Schema({
    Nombre: {type: String},
    Correo: {type: String},
    Telefono: {type: String},
    Status: {type: Number, default: 1}
});

module.exports = model('agenda_contactos',contactoSchema);