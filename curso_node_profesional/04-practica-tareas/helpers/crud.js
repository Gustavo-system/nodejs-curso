const fs = require('fs');

/**
 * ESTA ES LA FUNCION PARA GUARDAR DATOS EN UN ARCHIVO TXT QUE 
 * HACE REREFENCIA AUN DB SIMULADA
 * SE PUEDE ASIGANAR LA RUTA DE DESTINO CON UN ARTCHIVO TXT
 * const ruta = './db/data.text';
 * 
 * COMO SE MANDA UN JSON Y LO QUE HACE EL JSON.stringify() ES UN JSON 
 * SE CREA UN ARCHIVO CON EXTENCION .json
 * 
 * COMO ES UNA RUTA QUE USAREMOS EN MULTIPLES FUNCIONES SE DECLARA GLOBAL
 */
const ruta = './db/data.json';

const guardadDB = ( data ) => {
    // console.log('guardar archivo');
    /**
     * LO QUE SE RECIBE POR PARAMETRO ES UN ARRAY, PERO LA FUNCION DE FS
     * RECIBE UN BUFFER, UN STRING, ASI QUE SE COLOCA EL JSON.stringgify() 
     * PARA CONVERTIR LO QUE SE RECIBE COMO DATA EN SU FORMA DE TEXTO
     */
    fs.writeFileSync(ruta, JSON.stringify(data));

}

const leerDB = () => {
    console.log('lerr archivo');
    /**
     * SE LEE SI EXISTE EL ARCHIVO, DE LO CONTRARIO RETORNA UN NULL
     */
    if(!fs.existsSync(ruta)){
        return null;
    }

    const data = fs.readFileSync(ruta, {encoding: 'utf-8'});
    // const data = JSON.parse(texto); 
    // console.log(data);
    // ARRIBA AUN ES UN TEXTO, SE RETORNA LA CONVERCION A JSON
    return JSON.parse(data);

}

module.exports = {
    guardadDB,
    leerDB
}
