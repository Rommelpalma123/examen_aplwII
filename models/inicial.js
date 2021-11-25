const { Schema } = require('mongoose');
const mongoose = require('mongoose');
// creamos arreglos
const schemaProductos = new Schema(

    {

        title: String,
        description: String,
        status:{
            type: Boolean,
            default: false,
        }
        /*codigo: String,
        cliente: String,
        detalle: String,
        subtotal: String,
        iva: String,
        total: String*/

    });

module.exports = mongoose.model("Productos", schemaProductos)

