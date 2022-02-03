const inquirer = require('inquirer');
require('colors');

const opcionesMenu = [
    {
        type: 'list',
        name: 'opciones',
        message: 'Elija una opción:',
        choices: [
            {
                value: 1,
                name: '1. Crear tarea'
            },
            {
                value: 2,
                name: '2. Listar tareas'
            },
            {
                value: 3,
                name: '3. Listar tareas completadas'
            },
            {
                value: 4,
                name: '4. Listar tareas pendientes'
            },
            {
                value: 5,
                name: '5. Completar tarea(s)'
            },
            {
                value: 6,
                name: '6. Borrar tarea'
            },
            {
                value: 0,
                name: '0. Salir'
            },
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('============= Menu ============= \n'.blue);
    const { opciones } = await inquirer.prompt(opcionesMenu);
    return opciones;

}

const pausa = async () => {

    const question = [{
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'Enter'.green} para continuar`
    }]

    // const { enter } = await inquirer.prompt(question);
    await inquirer.prompt(question);
    // return enter;

}

const leerInput = async ( message ) => {

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.lenth == 0){
                return 'Por faavor ingrese un valor';
            }
            return true;
        }
    }]

    const { desc } = await inquirer.prompt(question);
    return desc;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}