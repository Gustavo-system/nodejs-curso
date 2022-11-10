// crea la vaiable en modo global
var nombre = 'Wolverine';

// crea la  variables dentro del scope
if (true) {
	const nombre = 'Gustavo';
	let nombre2 = 'Gusito';

	console.log(nombre, nombre2);

}

console.log(nombre);