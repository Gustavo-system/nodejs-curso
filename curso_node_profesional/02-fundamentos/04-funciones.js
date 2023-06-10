// funciones tradicionales, se ponen argumentos opcionales con un valor definido 
function sumar(a, b = 10) {
	return a + b;
}

console.log(sumar(3, 5));

// funciones flecha
const sumer_flecha = (a, b = 10) => {
	return a + b;
}

console.log(sumer_flecha(2, 2));

// se pueden resumir las funciones de flecha cuando el retorno es solo una linea o solo se reliaza una sola linea de codigo
// const sumer_flecha = ( a,b = 10 ) => a + b;

// funciones sin parametros
// const sumer_flecha = () => 'Hola mundo';
