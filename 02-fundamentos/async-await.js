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


const getEmpleado = (id) => {
	return new Promise((resolve, reject) => {
		const empleado = empleados.find((empleado) => empleado.id == id)?.nombre;
		empleado ? resolve(empleado) : reject(`No existe el empleado con el id : ${id}`)
	});
};

const getSalario = (id) => {
	return new Promise((resolve, reject) => {
		const salario = salarios.find((salario) => salario.id == id)?.salario;
		salario ? resolve(salario) : reject(`No existe el salario con el id: ${id}`)
	});
};

const getInfoUsuario = async (id) => {
	try {
		const empleado = await getEmpleado(id);
		const salario = await getSalario(id);

		return `El salario del empleado ${empleado} es de: ${salario}`;
	} catch (error) {
		throw error;
	}
}

const id = 3;

getInfoUsuario(id)
	.then(msg => {
		console.log('TODO BIEN');
		console.log(msg)
	})
	.catch(err => {
		console.log('TODO MAL');
		console.log(err)
	})