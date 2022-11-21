// funciones tradicionales, se ponen argumentos opcionales con un valor definido
function sumar(a, b = 10) {
	return a + b;
}

console.log(sumar(3, 5));

// funciones flecha, con parametros opcionales con un valor por default
const sumar_flecha = (a, b = 10) => {
	return a + b;
};

console.log(sumar_flecha(2, 2));

// se pueden resumir las funciones de flecha cuando el retorno es solo una linea o solo se reliaza una sola linea de codigo
const sumar_flecha_una_linea = (a, b = 10) => a + b;

// funciones sin parametros
const funcion_flecha_sin_parametros = () => 'Hola mundo';
