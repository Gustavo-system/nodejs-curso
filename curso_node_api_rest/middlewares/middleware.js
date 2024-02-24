const API_KEY = process.env.API_KEY

const validateLicenciaHeader = (request, response, next) => {
	console.log("entra al middleware", request.headers)
	const licencia = request.headers.licencia

	if (licencia == API_KEY){
		next()
	}else{
		response.status(403)
		response.send({ error: "LA APLICACION NO TIENE PERMISOS DE EJECUCION" })
	}
}


module.exports = {
	// asi podemos renombrar una exportacion
	coustomHeader: validateLicenciaHeader
}