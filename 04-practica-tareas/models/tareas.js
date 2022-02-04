const Tarea = require("./tarea");

class Tareas{
    // NO HACE FALTA ESTA LINEA, YA QUE ES LO MISMO QUE SE HIZO EN EL CONTRUCTOR
    _listado = {};

    constructor(){
        this._listado = {};
    }

    get listarTareasArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            // console.log(key);
            const tarea = this._listado[key];
            // console.log(tarea.desc);
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareas(tareas = []){
        tareas.forEach( tarea => {
            // console.log(tarea)
            this._listado[tarea.id] = tarea;
        });

        console.log('esta en el listado -->',this._listado);
    }

    post(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listarTodasTareas(tareas = []){
        // PRIMERA SOLUCION
        // console.log('listar tareas completas');
        // tareas.forEach((tarea, index) => {
        //     if(tareas.compleadoEn == null){
        //         console.log(`${index+1}. ${tarea.desc} :: ${'Pendiente'.red}`)
        //     }
        //     else{
        //         console.log(`${index}. ${tarea.desc} :: ${'Completada'.green}`)
        //     }
        // });
        
        //OTRA SOLUCION OPTIMISADA
        this.listarTareasArr.forEach((tarea, index) => {
            const idx = `${index + 1}`;
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${estado}`)

        });

    }

    listarTareasByEstatus(estado){
        // console.log(estado)
        let tareas = [];
        estado
            ? tareas = this.listarTareasArr.filter(tarea => tarea.completadoEn != null) 
            : tareas = this.listarTareasArr.filter(tarea => tarea.completadoEn == null);

        tareas.forEach((tarea, index) => {
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red;
            console.log( `${index+1}. ${desc} :: ${estado}` );
        });
    }

    borrarTarea(id){
        // console.log(id);
        if( !this._listado[id] ){
            return null;
        };

        delete this._listado[id];
        console.log('Tarea borrada correctamente');
    }

}

module.exports = Tareas;
