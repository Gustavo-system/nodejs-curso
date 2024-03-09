const { userModel } = require("../models")
const { handleHtppErrors } = require("../utils/handleErrors")
const { verifyToken } = require("../utils/handleJwt")

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

const validateTokenExist = async (request, response, next) => {
	console.log("entra al middleware del token")
	try {
		let token = request.headers.authorization

		console.log("token en primera instancia", token)

		if(!token){
			return handleHtppErrors(response, "TOKEN EXPIRED", 401)
		}

		token = token.split(' ').pop()

		console.log("token en segunda instancia", token)

		const tokenData = await verifyToken(token)

		console.log("tokenData", tokenData)

		if(!tokenData || !tokenData._id){
			console.log("el token expiro o es un mal token")
			return handleHtppErrors(response, "BAD TOKEN", 401)
		}

		// podemos inyectar el modelo del usuario para usarlo en el controlador o en donde sea
		const user = await userModel.findById({ _id: tokenData._id})
		request.user = user
		console.log("se muestra la request -> body", request.body, "nuevo nodo en la request", request.user)

		next()
	} catch (error) {
		console.log("error en validate token", error.message)
		handleHtppErrors(response, "SIN SESION", 400, error.message)
	}
}

const validateAdmiRol = (roles) => (request, response, next) => {
	try {
		console.log("rol indicado a validar", roles)
		const { user } = request
		console.log("rol del usuario", user.role)
		const rolesByUser = user.role

		// const isCorrectRolByUser = roles.some(rol => rolesByUser.includes(rol))
		// isCorrectRolByUser ? next() : handleHtppErrors(response, "NOT AUTHORIZATION", 403)

		rolesByUser.includes(roles) ? next() : handleHtppErrors(response, "NOT AUTHORIZATION", 403)

	} catch (error) {
		console.log("error en validar el admin rol", error.message)
		handleHtppErrors(response, "SIN SESION", 400, error.message)
	}
}


module.exports = {
	// asi podemos renombrar una exportacion
	coustomHeader: validateLicenciaHeader,
	validateTokenExist,
	validateAdmiRol
}