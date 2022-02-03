const Tarea = require("./tarea");

class Tareas{
    // NO HACE FALTA ESTA LINEA, YA QUE ES LO MISMO QUE SE HIZO EN EL CONTRUCTOR
    _listado = {};

    constructor(){
        this._listado = {};
    }

    post(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;