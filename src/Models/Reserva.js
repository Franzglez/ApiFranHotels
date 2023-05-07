const mongoose = require('mongoose');


const reservaSchema =  mongoose.Schema({

    dia: String,
    idUser: String,
    idHotel: String,

})






const Reserva = mongoose.model('Reserva', userSchema)

module.exports = Reserva