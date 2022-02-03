require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
// const { menu, pausa } = require('./helpers/mensajes');


console.clear();
// SE DESEA TRABAJAR CON PROCESOS ASINCRONOS 
// PARA ELLO, UNA FORMA ES CREAR UNA FUNCION ASINCRONA
const main = async () => {
    // RESOLVEMOS LA PROMESA QUE SE GENERA
    // EJECUTAMOS EL MENU HASTA QUE LA OPCION SERA 0
    let opt = 0;
    const tareas = new Tareas();
    do {
        // opt = await menu();
        opt = await inquirerMenu();
        console.log({opt});

        switch(opt){
            case 1:
                const desc = await leerInput('Descripcion:');
                tareas.post(desc);
                break;
            case 2:
                console.log( tareas._listado );
                break;
        }
        // if(opt != 0) await pausa();
        await pausa();

    }while(opt != 0);
}

main();