const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
require('dotenv').config()

// Conectar a la base de datos mongoose
mongoose.connect('mongodb://localhost:27017/FranHotels', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
    console.log('Error al conectar a la base de datos:', error);
});

// Importo los archivos de la carpeta routes
const user = require('./routes/users')
const hotel = require('./routes/hotels')

// Creo un path de inicio a mi app
const api_path = "/api/franhotels"

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// /Routes app está enrutando
app.use(api_path, user);
app.use(api_path, hotel);

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});

