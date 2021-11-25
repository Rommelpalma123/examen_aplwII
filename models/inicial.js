const { Schema } = require('mongoose');
const mongoose = require('mongoose');
// creamos arreglos
const schemaProductos = new Schema(

    {
        codigo: String,
        cliente: String,
        detalle: String,
        subtotal: String,
        iva: String,
        total: String,
        error:{
            type: Boolean,
            default: false
            
        }
    });

module.exports = mongoose.model("Productos", schemaProductos)

