const express = require('express');

const app = express();

require('dotenv').config()


require('./startup/bd')()
require('./startup/routes')(app)

//Configuraciones
const port = process.env.PORT || 3000;


//Servidor a la escucha
app.listen(port, () => console.log('Server listening on port ' + port))