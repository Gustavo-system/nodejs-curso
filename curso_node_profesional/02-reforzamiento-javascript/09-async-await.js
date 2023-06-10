// el problema al utilizar callback
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

const getInfoUsuario = async (id) => {
	try {
		// se espera a que se realicen todas las peticiones
		const empleado = await getEmpleado(id);
		const salario = await getSalario(id);

		return `El salario del empleado ${empleado} es de: ${salario}`;
	} catch (ex) {
		// se lanza una exepcion en caso de que alguna de las peticiones falle
		console.log(ex);
		throw ex;
	}
};

const id = 3;

getInfoUsuario(id)
	.then((msg) => {
		// si no se lanza el throw si entra aqui, mostrando aun error que se mande por mensaje
		console.log('TODO BIEN');
		console.log(msg);
	})
	.catch((err) => {
		// si se lanza el throw entra aqui diciendo que hay que corregir todo, esto depende de la logica de negocio
		console.log('TODO MAL');
		console.log(err);
	});
