// es una funcion que se ejutara despues de un tiempo
// es una funcion que recibe como parametro otra funcion

const getUsuarioByID = (id, callback) => {
	const user = {
		id, // esto es equivalente a poner id = id
		nombre: 'Gustavo',
	};

	//esta es la simulacion de una peticion de datos
	setTimeout(() => {
		callback(user); // se manda por pametro el usuario que se consiguio de la consulta
	}, 1500);
};

// aqui recibimos por parametro el usuario que se encontro en la busqueda y se manipula en el callback
getUsuarioByID(10, (usuario) => {
	console.log(usuario.id);
	console.log(usuario.nombre);
});
