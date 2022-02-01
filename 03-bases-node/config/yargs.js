
const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption:true,
    desc:'La base de la multiplicacion'
})
.option('l', {
    alias:'listar',
    type: 'boolean',
    default: false,
    desc:'Muentra la tabla en consola'
})
.check( (argv, options) => {
    if( isNaN(argv.b) ){
        throw 'La base de la multiplicacion debe ser un numero';
    }
    return true;
}).argv;

// SE IMPORTA POR DEFECTO DEL ASIGUIENTE MANERA
module.exports = argv