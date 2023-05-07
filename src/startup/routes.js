const morgan = require('morgan');
const { json } = require('express')
// const cors = require('cors');
// const mongoose = require('mongoose');

// Importo los archivos de la carpeta routes
const user = require('../routes/users')
const hotel = require('../routes/hotels')



module.exports = function (app) {
    // Creo un path de inicio a mi app
    const api_path = "/api/franhotels"
    // Middleware
    app.use(morgan('dev'));
    app.use(json());


    // /Routes app está enrutando
    app.use(api_path, user);
    app.use(api_path, hotel);
    // app.use(api_path, reserva);
}