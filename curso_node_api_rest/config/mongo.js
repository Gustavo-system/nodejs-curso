const mongoose = require("mongoose")

const dbConnection = async () => {
	// se obtiene la cadena de conexcion desde las variables de entorno
	const dbUri = process.env.DB_URI
	// se crea la funcion para instanciar la conexion a la base de datos
	await mongoose.connect(
	dbUri,
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true
	},
	// antigua implementacion usando callbacks
	// (error, result) => {
	// 	!error ? console.log("Conexion exitosa") : console.log("Problemas en la conexion")
	// }
	// nueva implementacion usando promesas
	).then(() => {
		console.log("Conexion exitosa")
	}).catch((error) => {
		console.log(`Problemas al conectar ${error}`)
	})
}

// exportamos el modulo para poder hacer uso de el en otros archivos
module.exports = dbConnection