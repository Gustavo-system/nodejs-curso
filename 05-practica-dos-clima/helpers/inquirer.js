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
                name: `${'1.'.red} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.red} Historial`
            },
            {
                value: 0,
                name: `${'0.'.red} Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('============= APP Clima ============= \n'.yellow);
    const { opciones } = await inquirer.prompt(opcionesMenu);
    return opciones;

}

const pausa = async () => {

    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'Enter'.green} para continuar`
    }]

    await inquirer.prompt(question);

}

const leerInput = async ( message ) => {

    const question = [{
        type: 'input',
        name: 'ciudad',
        message,
        validate(value){
            if(value.length == 0){
                return 'Por faavor ingrese un valor';
            }
            return true;
        }
    }]

    const { ciudad } = await inquirer.prompt(question);
    return ciudad;

}

const listarTareasBorrar = async ( tareas )  => {

    const choices = tareas.map((tarea, index) => {
        /**
         * RECORREMOS LOS ELEMENTOS DE NUESTRO ARRAY DE REGISTROS 
         * Y CON MAP ARMAMOS LA ESTRUCCTURA QUE SE DESEEA, COMO ESTAN EN LAS OPCIONES 
         * DEL MENU DE ARRIBA
         */
        return {
            value: tarea.id,
            name: `${index+1} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: 0,
        name: '0. Cancelar'
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione la tarea a eliminar',
            choices // ESTAS SON LAS OPCIONES QUE SE MUESTRAN
        }
    ];

    const { id } = await inquirer.prompt(question);
    return id;

}

const confirmar = async ( msg ) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message: msg
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const listarTareasCompletar = async ( tareas )  => {

    const choices = tareas.map((tarea, index) => {
        return {
            value: tarea.id,
            name: `${index+1} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    choices.unshift({
        value: 0,
        name: '0. Cancelar'
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione la tarea para marcar como completa',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(question);
    return ids;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar,
    listarTareasCompletar
}
