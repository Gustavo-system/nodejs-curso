// es una funcion que se ejutara despues de un tiempo
// es una funcion que recibe como parametro otra funcion

const getUsuarioByID = (id, callback) => {
	const user = {
		id,
		nombre: 'Gustavo'
	}

	//esta es la simulacion de una peticion de datos
	setTimeout(() => {
		callback(user);
	}, 1500);

}

getUsuarioByID(10, (usuario) => {
	console.log(usuario.id);
	console.log(usuario.nombre);
});