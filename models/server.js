const express = require('express');
const cors = require('cors');

class Server {



    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/users';


        // CORS
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use( express.json() );

        // Middlewares
        this.middlewares();



        // Rutas de mi app



        this.routes();
    }


    middlewares() {

        // Directorio público
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use(this.usersPath, require('../routes/users.routes.js'));

    }





    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en ' + this.port);
        });
    }
}


module.exports = Server;
