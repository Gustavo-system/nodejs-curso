const { v4: uuidv4 } = require('uuid');

class Tarea{

    // ESTAS PROPIEDADES NO SE PONEN PERO AYUDAN A QUE SEA MAS LEGIBLE EL CODIGO
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){
        // AQUI SE INICIALIZAN LAS VARIABLES SIN NECESIDAD DE DECLARARLAS ARRIBA
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }


}

module.exports = Tarea;