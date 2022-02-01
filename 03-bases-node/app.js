// DE ESTA MANERA SE LLAMAN LOS PAQUETES REQUERIDOS
// const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');

// PARA HACER APLICACIONES DE CONSOLA EXISTE UN PAQUETE MUY UTILIZADO LLAMDO YARGS
// CON EL PODEMOS ACCEDER A LAS BANDERAS QUE MANDEN POR CONSOLA DE UNA MANERA MÁS SENCILLA Y PRACTICA


// const argv = require('yargs').argv;
// const argv = require('yargs')
// .option('b', {
//         alias:'base',
//         type: 'number',
//         demandOption:true
//     })
// .option('l', {
//         alias:'listar',
//         type: 'boolean',
//         default: false
//     })
// .check( (argv, options) => {
//     if( isNaN(argv.b) ){
//         throw 'La base de la multiplicacion debe ser un numero';
//     }
//     return true;
// }).argv;

// AL USAR YARGS STE ES UN CODIGO QUE NO DEBERIA IR EN ESTE ARCHIVO, POR LO CUAL SE SEPARA A UNO NUEVO E INDEPENDIENTE 
const argv = require('./config/yargs');


// SIRVE PARA LIMPIAR LA CONSOLA Y MOSTRAR UN CONTENIDO MAS LIMPIO
console.clear();

// const numero = 5;

// PARA CONOCER VALORES QUE SE INGRESAN O QUE COMPONEN LA APP
// console.log( process.argv );

// SE HACE UNA IMPRESION DE LOS ARGUMENTOS QUE SE MANDAN POR CONSOLA
console.log( argv );
// console.log( argv.b );
// console.log( argv.l );

// crearArchivo( numero )
//     .then(archivo => console.log(archivo, 'creada'))
//     .catch(err => console.log(err));

crearArchivo( argv.base, argv.listar )
    .then(archivo => console.log(archivo, 'creada'))
    .catch(err => console.log(err));

