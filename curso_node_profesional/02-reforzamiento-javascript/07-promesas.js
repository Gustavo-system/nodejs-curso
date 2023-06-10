const empleados = [
	{
		id: 1,
		nombre: 'Gustavo',
	},
	{
		id: 2,
		nombre: 'Ana',
	},
	{
		id: 3,
		nombre: 'Luis',
	},
];

const salarios = [
	{
		id: 1,
		salario: 1200,
	},
	{
		id: 2,
		salario: 2500,
	},
];

const idx = 3;

// CODIGO SIN REESTRUCTURACION, FUNCIONA PERO SE PUEDE HACER MEJOR
// const getEmpleado = ( id ) => {

//     const promesa = new Promise( ( resolve, reject ) => {
//         const empleado = empleados.find( (empleado) => empleado.id == id )?.nombre;
//         if( empleado ) {
//             resolve(empleado);
//         }
//         else{
//             reject(`No existe el empleado con el id : ${id}`);
//         }
//     });

//     return promesa;
// }

// CODIGO CON REESTRUCTURACION: MEJORANDO LAS PRACTICAS
const getEmpleado = (id) => {
	return new Promise((resolve, reject) => {
		const empleado = empleados.find((empleado) => empleado.id == id)?.nombre;
		empleado ? resolve(empleado) : reject(`No existe el empleado con el id : ${id}`);
	});
};

const getSalario = (id) => {
	return new Promise((resolve, reject) => {
		const salario = salarios.find((salario) => salario.id == id)?.salario;
		salario ? resolve(salario) : reject(`No existe el salario con el id: ${id}`);
	});
};

// getEmpleado(idx)
//     .then( (empleado) => console.log(empleado) )
//     .catch( (err) => console.log(err) );

// getSalario(idx)
//     .then( (salario) => console.log(salario) )
//     .catch( (err) => console.log(err) );

//AGREGANDO LLAMADO PARA OBTENER SALARIO DE UN EMPLEADO
getEmpleado(idx)
	.then((empleado) => {
		getSalario(idx)
			.then((salario) => {
				console.log(
					`Promesa Hell --> El salario del empleado ${empleado} es de: ${salario}`,
				);
			})
			.catch((err) => console.log('Promesa Hell -->', err));
	})
	.catch((err) => console.log('Promesa Hell -->', err));

// PROMESAS EN CADENA
let nombre;

getEmpleado(idx)
	.then((empleado) => {
		// SI NO TIENE ESTE RETURN NO SE PODRA ENCADENAR OTRA PROMESA
		nombre = empleado;
		return getSalario(idx);
	})
	.then((salario) => {
		return console.log(
			`Promesa en Cadena --> El salario del empleado ${nombre} es de: ${salario}`,
		);
	})
	.catch((err) => console.log('Promesa en Cadena -->', err));
