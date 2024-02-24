const { userModel } = require("../models")
const { handleHtppErrors } = require("../utils/handleErrors")
const { matchedData } = require("express-validator")


const getUsers = async (request, response) => {
	// otra forma de realizar la logica
	// userModel.find({}).then((resp) => {
	// 	console.log("response del api", resp)
	// 	return response.send(resp)
	// }).catch(err => console.log("problemas al realizar la consulta"))

	// obtenemos todos los registros con find({}) que es propio de mongoose
	// forma corta
	const data = await userModel.find({})

	console.log("consulta", data)
	return response.send({ data })
}


const createUsers = async (request, response) => {
	try {
		// obtenemos el body de la request 
		// const body = request.body

		// obtenemos por medio de desestructuracion el body del request
		// aqui viene todo lo que se manda en el request body, tenemos que limpiar para evitar datos malos
		// const { body } = request
		// console.log("datos obtenidos en el body: ", body)

		// limpiamos la data y hacemos que no se registre algo mal
		const bodyClean = matchedData(request)

		const responseData = await userModel.create(bodyClean)
		console.log("datos obtenidos despues de guardar el registro: ", responseData)

		return response.send({ data: responseData })
	} catch (error) {
		console.log("error", error.message)
		handleHtppErrors(response, "Problemas al procesar la solicitud", 500, error.message)
	}
}

module.exports = {
	getUsers,
	createUsers
}