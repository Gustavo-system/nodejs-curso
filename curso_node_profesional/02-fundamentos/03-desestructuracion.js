const SpiderMan = {
	nombre: 'Piter',
	apellido: 'Parker',
	poder: 'Sentido aracnido',
	getNombre: function () {
		return `${this.nombre} ${this.apellido}`;
	}
	// lo de arriba tambien se puede simplificar de la siguiente manera, quitando la palabra de function
	// getNombre () {
	// return `${this.nombre} ${this.apellido}`;
	// }

}

// console.log( SpiderMan.getNombre() );

// se desestructura un objeto
const { nombre, apellido, poder } = SpiderMan;

// se puden asignar los valores por default en la desestructuracion
//const { nombre, apellido, poder, edad = 22 } = SpiderMan;

// console.log(nombre);

// Se puede pasar el objeto dentro del los parametros de la funcion
function imprimeHeroe(heroe) {

	// desestructuracion
	const { nombre, apellido, edad = 0 } = heroe;
	console.log(nombre, apellido, edad);

}

// se puede desestructurar dentro de los argumentos de una funcion
function imprimeHeroeDos({ nombre, apellido, edad }) {

	console.log(nombre, apellido, edad);

}

imprimeHeroe(SpiderMan);
imprimeHeroeDos(SpiderMan);


// Desestructuracion de arrays
const heroes = ['Deadpool', 'SpiderMan', 'Hulk'];

// const heroe1 = heroes[0];
// const heroe2 = heroes[1];
// const heroe3 = heroes[2];
const [heroe1, heroe2, heroe3] = heroes;
console.log(heroe1, heroe2, heroe3);

// si solo se requiere uno se hace de la siguiente manera
const [, , h3] = heroes;
console.log(h3);