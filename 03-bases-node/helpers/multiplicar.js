const fs = require('fs');

const crearArchivo = async ( numero = 5 ) => {

    // CON ASYNC Y AWAIT
    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${numero} x ${i} = ${numero * i}\n`;
        }

        console.log(salida)

        fs.writeFileSync(`Tabla-${numero}.txt`, salida);

        return `tabla-${numero}.txt`

    } catch (error) {
        throw error;
    }

    // CON PROMESA
    // return new Promise( (resolve, reject) => {
    //     let salida = '';

    //     for (let i = 1; i <= 10; i++) {
    //         salida += `${numero} x ${i} = ${numero * i}\n`;
    //     } 

    //     console.log(salida)

    //     try {
    //         fs.writeFileSync(`Tabla-${numero}`, salida);
    //         resolve(`Tabla-${numero}.txt`);
    //     } catch (error) {
    //         reject(error);
    //     }

    // });


    // LA MENERA NORMAL QUE SE PODRIA HACER, PERO PARA CAPTURAR ERRORES SE COMVIERTE EN UNA FUNCION QUE RETORNE ALGO
    // let salida = '';

    // for (let i = 1; i <= 10; i++) {
    //     salida += `${numero} x ${i} = ${numero * i}\n`;
    // }

    // console.log(salida)

    // // METODO DEL PAQUETE REQUERIDO
    // // fs.writeFile(`Tabla-${numero}`, salida, (err) => {
    // //     if ( err ) throw err;
    // //     console.log(`Tabla del ${numero} creada`);
    // // });
    // try {
    //     fs.writeFileSync(`Tabla-${numero}.txt`, salida);
    // } catch (error) {
    //     throw error
    // }

    // console.log(`Tabla del ${numero} creada`);

}

module.exports = {
    // esto en redundante para js, se puede hacer pero solo en caso de que
    // se renombre la funcion a exportar
    // crearArchivo : crearArchivo

    // esto es lo mimso que la parte de arriba pero simplificada
    crearArchivo
}