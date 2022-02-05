require('colors');

const { guardadDB, leerDB } = require('./helpers/crud');
const { inquirerMenu, pausa, leerInput, listarTareasBorrar, confirmar, listarTareasCompletar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
// const { menu, pausa } = require('./helpers/mensajes');


console.clear();
// SE DESEA TRABAJAR CON PROCESOS ASINCRONOS 
// PARA ELLO, UNA FORMA ES CREAR UNA FUNCION ASINCRONA
const main = async () => {
    // RESOLVEMOS LA PROMESA QUE SE GENERA
    // EJECUTAMOS EL MENU HASTA QUE LA OPCION SERA 0
    let opt = 0;

    // SE HACE UNA INSTANCIA DE LA CLASE PARA PODER CREAR UNA TAREA
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
        // console.log('tienen tareas');
        // console.log(tareasDB);
        tareas.cargarTareas(tareasDB);
    }

    // await pausa();
    
    do {
        // esta funcion imprime el menú
        // opt = await menu();
        opt = await inquirerMenu();
        // console.log({ opt });
        console.log('\n');

        switch(opt){
            case 1:
                const desc = await leerInput('Descripcion:');
                tareas.post(desc);
                break;

            case 2:
                // console.log( tareas._listado );
                // console.log( tareas.listarTareasArr );
                tareas.listarTodasTareas(tareasDB);
                break;

            case 3:
                tareas.listarTareasByEstatus(true);
                break;

            case 4:
                tareas.listarTareasByEstatus(false);
                break;

            case 5:
                // console.log('Marcar tareas completadas');
                const ids = await listarTareasCompletar(tareas.listarTareasArr);
                // console.log(ids);
                tareas.completarTareas(ids);
                break;

            case 6:
                const id = await listarTareasBorrar(tareas.listarTareasArr);
                // console.log({ id })
                if( id != 0){
                    const confirmar_borrar = await confirmar('¿Esta seguro que desea eliminar esta tarea?');
                    // console.log(confirmar_borrar);
                    if(confirmar_borrar){
                        tareas.borrarTarea(id);
                    }
                }
                break;
        }

        guardadDB(tareas.listarTareasArr);

        if(opt != 0) await pausa();
        // await pausa();

    }while(opt != 0);
}

main();
