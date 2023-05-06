const mongoose = require('mongoose')

const hotelSchema =  mongoose.Schema({
    "nombre": String,
    "ciudad": String,
    "pais": String,
    "direccion": String,
    "telefono": String,
    "precio_medio": String,
    "estrellas": String,
    "actividades": String,
    "reservas": String,
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel