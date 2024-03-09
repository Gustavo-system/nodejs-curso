require('colors');

const menu = () => {
    return new Promise((resolve, reject) => {
        console.clear();
        console.log('============= Menu ============= \n'.blue);
        console.log('1 Crear una tarea');
        console.log('2 Listar tareas');
        console.log('3 Listar tareas completadas');
        console.log('4 Eliminar tarea');
        console.log('0 Salir');

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opcion: ', (asnwer) => {
            readLine.close();
            resolve(asnwer);
        });

    })
}

const pausa = () => {    

    return new Promise((resolve, reject) => {
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout,
        });
    
        readLine.question(`\nPresione ${'Enter'.green} para continuar`, () => {
            readLine.close();
            resolve();
        })
    })
}

module.exports = {
    menu,
    pausa
}