const axios = require('axios');

class Busquedas {

    historial = ['Puebla', 'Mexico', 'Aguascalientes'];

    constructor(){
        // TODO: leer la base de datos si existe
    }

    async ciudad( lugar ){
        console.log(lugar);
        // TODO: realizar peticion http
        /**
         * Ejemplo de peticion:
         * const resp = await axios.get('https://reqres.in/api/users');
         * console.log(resp);
         */

        return []; // retonar todas las ciudades que coinicden con la busqueda
    }

}

module.exports = Busquedas;