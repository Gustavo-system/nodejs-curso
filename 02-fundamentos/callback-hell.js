// el problema al utilizar callback 
const empleados = [
	{
		id: 1,
		nombre: 'Gustavo'
	},
	{
		id: 2,
		nombre: 'Ana'
	},
	{
		id: 3,
		nombre: 'Luis'
	},
];

const salarios = [
	{
		id: 1,
		salario: 1200
	},
	{
		id: 2,
		salario: 2500
	},
];

const idx = 1;

const getEmpleado = (id, callback) => {

	const empleado = empleados.find((empleado) => empleado.id == id)?.nombre;
	// console.log( empleado );
	if (empleado) {
		callback(null, empleado);
	}
	else {
		callback(`El empleado con el id: ${id} no existe`);
	}
	// return empleado;
}

const getSalario = (id, callback) => {

	const salario = salarios.find((salario) => salario.id == id)?.salario;
	if (salario) {
		callback(null, salario);
	}
	else {
		callback(`El salario con el id: ${id} no existe`);
	}
}


// INVOCACION DE METODOS CON CALLBACKS

getEmpleado(idx, (err, empleado) => {

	// el null como primer parametro es equivalente a un false en el if
	if (err) {
		return console.log(err);
	}

	console.log('Empleado existe');
	console.log(empleado);

	// CALLBACK HELL: Se empiezan a anidarar callbacks que en un futuro seran dificiles de mantener
	getSalario(idx, (err, salario) => {

		if (err) return console.log(err);
		console.log(`El salario del empleado: ${empleado} es de: ${salario}`);

	});

});

// getSalario( idx, ( err, salario ) => {

//     if( err ) return console.log(err);
//     console.log( salario );

// });