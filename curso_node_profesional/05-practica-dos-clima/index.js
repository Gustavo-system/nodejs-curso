const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    // console.log('hola mundo');
    let opt;
    const busquedas = new Busquedas();

    do {

        opt = await inquirerMenu();

        switch(opt){
            case 1:
                // console.log('Buscar una ciudad');
                const lugar = await leerInput('Ingrese el nombre de la ciudad:');

                // en teoria se usaria fetch pero en node no se encuentra disponible
                await busquedas.ciudad(lugar);

                break;
            case 2:
                console.log('Mostrar historial');
                break;
        }

        if(opt != 0) await pausa();

    } while (opt != 0);

}

main();
