const mongoose = require("mongoose")
const Esquema = mongoose.Schema

const productoSchema = new Esquema({
    nombre_producto: {
      type: String,
      required: true
    },
  precio: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const Producto = mongoose.model('producto', productoSchema)

module.exports = Producto